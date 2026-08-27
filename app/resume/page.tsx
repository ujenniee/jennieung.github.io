import type { Metadata } from "next";
import { Download, Mail, MapPin } from "lucide-react";
import { coursework, education } from "@/data/education";
import { experience } from "@/data/experience";
import { projects } from "@/data/projects";
import { siteConfig, socialLinks } from "@/data/site";
import { skillCategories } from "@/data/skills";
import { buttonStyles } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { Reveal } from "@/components/ui/reveal";

export const metadata: Metadata = {
  title: "Resume",
  description: `Resume for ${siteConfig.name} — ${siteConfig.role} based in ${siteConfig.location}.`,
};

export default function ResumePage() {
  return (
    <>
      <header className="border-b border-border pt-32 pb-14">
        <Container size="narrow">
          <Reveal className="flex flex-col items-start gap-6 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <h1 className="text-3xl font-semibold sm:text-4xl">{siteConfig.name}</h1>
              <p className="mt-3 text-lg text-muted-foreground">{siteConfig.role}</p>
              <div className="mt-4 flex flex-wrap items-center gap-x-5 gap-y-2 text-sm text-muted-foreground">
                <span className="inline-flex items-center gap-1.5">
                  <MapPin className="size-3.5" />
                  {siteConfig.location}
                </span>
                <a
                  href={`mailto:${siteConfig.email}`}
                  className="inline-flex items-center gap-1.5 transition-colors hover:text-foreground"
                >
                  <Mail className="size-3.5" />
                  {siteConfig.email}
                </a>
                {socialLinks
                  .filter((link) => link.platform !== "email")
                  .map((link) => (
                    <a
                      key={link.platform}
                      href={link.href}
                      target="_blank"
                      rel="noreferrer noopener"
                      className="transition-colors hover:text-accent"
                    >
                      {link.label}
                    </a>
                  ))}
              </div>
            </div>

            <a
              href={siteConfig.resumePath}
              download
              className={buttonStyles({ variant: "primary", size: "lg" })}
            >
              <Download className="size-4" />
              Download PDF
            </a>
          </Reveal>
        </Container>
      </header>

      <Container size="narrow" className="py-16 lg:py-20">
        <div className="flex flex-col gap-14">
          <ResumeSection title="Education">
            <div className="flex flex-col gap-6">
              {education.map((item) => (
                <div key={item.id}>
                  <div className="flex flex-wrap items-baseline justify-between gap-x-4">
                    <h3 className="font-semibold">{item.institution}</h3>
                    <span className="font-mono text-xs text-subtle-foreground">
                      {item.startDate} — {item.endDate}
                    </span>
                  </div>
                  <p className="mt-1 text-sm text-muted-foreground">
                    {item.credential}
                    {item.detail ? ` · ${item.detail}` : ""}
                    {item.gpa ? ` · GPA ${item.gpa}` : ""}
                  </p>
                  <p className="text-sm text-subtle-foreground">{item.location}</p>
                </div>
              ))}
            </div>
          </ResumeSection>

          <ResumeSection title="Experience">
            <div className="flex flex-col gap-8">
              {experience.map((item) => (
                <div key={item.id}>
                  <div className="flex flex-wrap items-baseline justify-between gap-x-4">
                    <h3 className="font-semibold">{item.role}</h3>
                    <span className="font-mono text-xs text-subtle-foreground">
                      {item.startDate} — {item.endDate}
                    </span>
                  </div>
                  <p className="mt-1 text-sm text-muted-foreground">
                    {item.organization}
                    <span className="text-subtle-foreground"> · {item.location}</span>
                  </p>
                  <ul className="mt-3 flex flex-col gap-2">
                    {item.highlights.map((highlight) => (
                      <li
                        key={highlight.slice(0, 32)}
                        className="relative pl-5 text-sm leading-relaxed text-muted-foreground"
                      >
                        <span
                          aria-hidden
                          className="absolute top-2 left-0 size-1.5 rounded-full bg-border-strong"
                        />
                        {highlight}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </ResumeSection>

          <ResumeSection title="Projects">
            <div className="flex flex-col gap-8">
              {projects.map((project) => (
                <div key={project.slug}>
                  <div className="flex flex-wrap items-baseline justify-between gap-x-4">
                    <h3 className="font-semibold">{project.title}</h3>
                    <span className="font-mono text-xs text-subtle-foreground">
                      {project.date}
                    </span>
                  </div>
                  <p className="mt-1 text-sm leading-relaxed text-muted-foreground">
                    {project.tagline}
                  </p>
                  <p className="mt-2 font-mono text-xs text-subtle-foreground">
                    {project.stack.join(" · ")}
                  </p>
                  {project.caseStudy ? (
                    <ul className="mt-3 flex flex-col gap-2">
                      {project.caseStudy.approach.map((step) => (
                        <li
                          key={step.slice(0, 32)}
                          className="relative pl-5 text-sm leading-relaxed text-muted-foreground"
                        >
                          <span
                            aria-hidden
                            className="absolute top-2 left-0 size-1.5 rounded-full bg-border-strong"
                          />
                          {step}
                        </li>
                      ))}
                    </ul>
                  ) : null}
                </div>
              ))}
            </div>
          </ResumeSection>

          <ResumeSection title="Technical Skills">
            <dl className="flex flex-col gap-3">
              {skillCategories.map((category) => (
                <div key={category.id} className="grid gap-1 sm:grid-cols-[9rem_1fr] sm:gap-4">
                  <dt className="text-sm font-medium">{category.title}</dt>
                  <dd className="text-sm text-muted-foreground">
                    {category.skills.join(", ")}
                  </dd>
                </div>
              ))}
            </dl>
          </ResumeSection>

          <ResumeSection title="Relevant Coursework">
            <dl className="flex flex-col gap-3">
              {coursework.map((group) => (
                <div key={group.id} className="grid gap-1 sm:grid-cols-[9rem_1fr] sm:gap-4">
                  <dt className="text-sm font-medium">{group.title}</dt>
                  <dd className="text-sm text-muted-foreground">{group.courses.join(", ")}</dd>
                </div>
              ))}
            </dl>
          </ResumeSection>
        </div>
      </Container>
    </>
  );
}

function ResumeSection({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <Reveal>
      <section>
        <h2 className="border-b border-border pb-3 font-mono text-xs font-medium tracking-[0.18em] text-subtle-foreground uppercase">
          {title}
        </h2>
        <div className="mt-6">{children}</div>
      </section>
    </Reveal>
  );
}
