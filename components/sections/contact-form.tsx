"use client";

import { useActionState } from "react";
import { useFormStatus } from "react-dom";
import { AlertCircle, CheckCircle2, Loader2, Send } from "lucide-react";
import {
  initialContactState,
  submitContactForm,
  type ContactState,
} from "@/app/actions/contact";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const fieldClass =
  "w-full rounded-xl border border-border bg-surface px-4 py-3 text-sm text-foreground transition-colors placeholder:text-subtle-foreground focus:border-accent focus:outline-none";

export function ContactForm() {
  const [state, formAction] = useActionState<ContactState, FormData>(
    submitContactForm,
    initialContactState,
  );

  return (
    <form action={formAction} className="flex flex-col gap-5" noValidate>
      <div className="grid gap-5 sm:grid-cols-2">
        <Field
          label="Name"
          name="name"
          type="text"
          placeholder="Jordan Reyes"
          autoComplete="name"
          error={state.fieldErrors?.name}
        />
        <Field
          label="Email"
          name="email"
          type="email"
          placeholder="jordan@company.com"
          autoComplete="email"
          error={state.fieldErrors?.email}
        />
      </div>

      <div className="flex flex-col gap-2">
        <label htmlFor="message" className="text-sm font-medium">
          Message
        </label>
        <textarea
          id="message"
          name="message"
          rows={5}
          placeholder="I'm hiring for a summer 2027 software engineering internship and your Philips work caught my eye…"
          aria-invalid={Boolean(state.fieldErrors?.message)}
          aria-describedby={state.fieldErrors?.message ? "message-error" : undefined}
          className={cn(fieldClass, "resize-y", state.fieldErrors?.message && "border-red-500")}
        />
        {state.fieldErrors?.message ? (
          <p id="message-error" className="text-xs text-red-500">
            {state.fieldErrors.message}
          </p>
        ) : null}
      </div>

      {/* Honeypot — hidden from users, irresistible to bots. */}
      <div aria-hidden className="absolute left-[-9999px] h-0 w-0 overflow-hidden">
        <label htmlFor="company">Company</label>
        <input id="company" name="company" type="text" tabIndex={-1} autoComplete="off" />
      </div>

      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <SubmitButton />

        <p aria-live="polite" className="text-sm">
          {state.status === "success" ? (
            <span className="inline-flex items-center gap-2 text-emerald-600 dark:text-emerald-400">
              <CheckCircle2 className="size-4 shrink-0" />
              {state.message}
            </span>
          ) : null}
          {state.status === "error" ? (
            <span className="inline-flex items-center gap-2 text-red-500">
              <AlertCircle className="size-4 shrink-0" />
              {state.message}
            </span>
          ) : null}
        </p>
      </div>
    </form>
  );
}

function SubmitButton() {
  const { pending } = useFormStatus();

  return (
    <Button type="submit" size="lg" disabled={pending} className="w-full sm:w-auto">
      {pending ? (
        <>
          <Loader2 className="size-4 animate-spin" />
          Sending…
        </>
      ) : (
        <>
          <Send className="size-4" />
          Send message
        </>
      )}
    </Button>
  );
}

type FieldProps = {
  label: string;
  name: string;
  type: string;
  placeholder: string;
  autoComplete: string;
  error?: string;
};

function Field({ label, name, type, placeholder, autoComplete, error }: FieldProps) {
  return (
    <div className="flex flex-col gap-2">
      <label htmlFor={name} className="text-sm font-medium">
        {label}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        placeholder={placeholder}
        autoComplete={autoComplete}
        aria-invalid={Boolean(error)}
        aria-describedby={error ? `${name}-error` : undefined}
        className={cn(fieldClass, error && "border-red-500")}
      />
      {error ? (
        <p id={`${name}-error`} className="text-xs text-red-500">
          {error}
        </p>
      ) : null}
    </div>
  );
}
