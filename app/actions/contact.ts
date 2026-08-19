"use server";

import { headers } from "next/headers";
import { Resend } from "resend";
import { z } from "zod";
import { siteConfig } from "@/data/site";

const contactSchema = z.object({
  name: z.string().trim().min(2, "Please enter your name.").max(100, "That name is too long."),
  email: z.email("Please enter a valid email address.").max(254),
  message: z
    .string()
    .trim()
    .min(20, "Tell me a little more — at least 20 characters.")
    .max(3000, "Please keep it under 3000 characters."),
});

type FieldName = keyof z.infer<typeof contactSchema>;

export type ContactState = {
  status: "idle" | "success" | "error";
  message?: string;
  fieldErrors?: Partial<Record<FieldName, string>>;
};

export const initialContactState: ContactState = { status: "idle" };

const RATE_LIMIT_WINDOW_MS = 60_000;
const RATE_LIMIT_MAX = 3;
const submissions = new Map<string, number[]>();

// Per-instance only. Swap for a shared store if this ever needs to be authoritative.
function isRateLimited(key: string) {
  const now = Date.now();
  const recent = (submissions.get(key) ?? []).filter(
    (timestamp) => now - timestamp < RATE_LIMIT_WINDOW_MS,
  );

  if (recent.length >= RATE_LIMIT_MAX) {
    submissions.set(key, recent);
    return true;
  }

  recent.push(now);
  submissions.set(key, recent);
  return false;
}

function escapeHtml(value: string) {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

export async function submitContactForm(
  _prevState: ContactState,
  formData: FormData,
): Promise<ContactState> {
  // Hidden field that only automated submissions fill in.
  if (formData.get("company")) {
    return { status: "success", message: "Thanks — your message is on its way." };
  }

  const parsed = contactSchema.safeParse({
    name: formData.get("name"),
    email: formData.get("email"),
    message: formData.get("message"),
  });

  if (!parsed.success) {
    const { fieldErrors } = z.flattenError(parsed.error);
    return {
      status: "error",
      message: "Please fix the highlighted fields.",
      fieldErrors: {
        name: fieldErrors.name?.[0],
        email: fieldErrors.email?.[0],
        message: fieldErrors.message?.[0],
      },
    };
  }

  const headerList = await headers();
  const ip = headerList.get("x-forwarded-for")?.split(",")[0]?.trim() ?? "unknown";

  if (isRateLimited(ip)) {
    return {
      status: "error",
      message: "That's a few messages in a row — please try again in a minute.",
    };
  }

  const apiKey = process.env.RESEND_API_KEY;

  if (!apiKey) {
    console.error("RESEND_API_KEY is not set; contact form cannot send.");
    return {
      status: "error",
      message: `Email isn't configured yet. Please reach me directly at ${siteConfig.email}.`,
    };
  }

  const { name, email, message } = parsed.data;

  try {
    const resend = new Resend(apiKey);
    const { error } = await resend.emails.send({
      from: process.env.CONTACT_FROM_EMAIL ?? "Portfolio <onboarding@resend.dev>",
      to: [process.env.CONTACT_TO_EMAIL ?? siteConfig.email],
      replyTo: email,
      subject: `Portfolio inquiry from ${name}`,
      text: `${name} <${email}>\n\n${message}`,
      html: `
        <div style="font-family:system-ui,sans-serif;line-height:1.6">
          <h2 style="margin:0 0 4px">New portfolio message</h2>
          <p style="margin:0 0 16px;color:#5b6478">
            From ${escapeHtml(name)} &lt;${escapeHtml(email)}&gt;
          </p>
          <p style="white-space:pre-wrap">${escapeHtml(message)}</p>
        </div>
      `,
    });

    if (error) {
      console.error("Resend rejected the message:", error);
      return {
        status: "error",
        message: `Something went wrong sending that. Please email me at ${siteConfig.email}.`,
      };
    }

    return {
      status: "success",
      message: "Thanks for reaching out — I'll get back to you within a couple of days.",
    };
  } catch (error) {
    console.error("Unexpected contact form failure:", error);
    return {
      status: "error",
      message: `Something went wrong sending that. Please email me at ${siteConfig.email}.`,
    };
  }
}
