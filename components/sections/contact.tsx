import { Mail, MapPin } from "lucide-react";
import { siteConfig, socialLinks } from "@/data/site";
import { ContactForm } from "@/components/sections/contact-form";
import { GithubIcon, LinkedinIcon } from "@/components/ui/brand-icons";
import { Card, CardBody } from "@/components/ui/card";
import { Reveal } from "@/components/ui/reveal";
import { Section, SectionHeading } from "@/components/ui/section";

const contactIcons = {
  github: GithubIcon,
  linkedin: LinkedinIcon,
  email: Mail,
} as const;

export function Contact() {
  return (
    <Section id="contact" muted>
      <SectionHeading title="Contact" />

      <div className="mt-12 grid gap-6 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.4fr)]">
        <Reveal className="h-full">
          <Card className="h-full">
            <CardBody className="flex h-full flex-col gap-6">
              <div>
                <h3 className="text-base font-semibold">Reach me directly</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  Open to software engineering internships and new grad roles. Email is the fastest
                  way to reach me.
                </p>
              </div>

              <ul className="flex flex-col gap-3">
                {socialLinks.map((link) => {
                  const Icon = contactIcons[link.platform];
                  const isExternal = link.href.startsWith("http");
                  const value = link.platform === "email" ? siteConfig.email : link.label;

                  return (
                    <li key={link.platform}>
                      <a
                        href={link.href}
                        {...(isExternal
                          ? { target: "_blank", rel: "noreferrer noopener" }
                          : {})}
                        className="group flex items-center gap-3 rounded-lg border border-border bg-surface-muted px-4 py-3 transition-colors duration-200 hover:border-border-strong hover:bg-surface"
                      >
                        <span className="flex size-9 shrink-0 items-center justify-center rounded-lg bg-surface text-muted-foreground transition-colors group-hover:text-foreground">
                          <Icon className="size-4" />
                        </span>
                        <span className="min-w-0">
                          <span className="block text-xs text-subtle-foreground">
                            {link.label}
                          </span>
                          <span className="block truncate text-sm font-medium">{value}</span>
                        </span>
                      </a>
                    </li>
                  );
                })}
              </ul>

              <p className="mt-auto flex items-center gap-2 text-xs text-subtle-foreground">
                <MapPin className="size-3.5" />
                Based in {siteConfig.location} · Open to relocation
              </p>
            </CardBody>
          </Card>
        </Reveal>

        <Reveal delay={0.1} className="h-full">
          <Card className="h-full">
            <CardBody>
              <ContactForm />
            </CardBody>
          </Card>
        </Reveal>
      </div>
    </Section>
  );
}
