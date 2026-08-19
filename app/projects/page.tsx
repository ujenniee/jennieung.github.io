import type { Metadata } from "next";
import { ArrowUpRight, Lock } from "lucide-react";
import { projects } from "@/data/projects";
import { Badge } from "@/components/ui/badge";
import { GithubIcon } from "@/components/ui/brand-icons";
import { Card, CardBody } from "@/components/ui/card";
import { Container } from "@/components/ui/container";
import { Reveal, RevealGroup, RevealItem } from "@/components/ui/reveal";

export const metadata: Metadata = {
  title: "Case Studies",
  description:
    "Deep dives into the projects I've built — the problem, the decisions I made, and what actually shipped.",
};

export default function ProjectsPage() {
  return (
    <>
      <header className="border-b border-border pt-32 pb-16">
        <Container>
          <Reveal>
            <h1 className="text-3xl font-semibold sm:text-4xl">Projects</h1>
          </Reveal>

          <RevealGroup className="mt-8 flex flex-wrap gap-2">
            {projects.map((project) => (
              <RevealItem key={project.slug}>
                <a
                  href={`#${project.slug}`}
                  className="inline-flex items-center gap-2 rounded-lg border border-border bg-surface px-4 py-2 text-sm font-medium transition-colors duration-200 hover:border-border-strong"
                >
                  {project.title}
                  <span className="text-xs text-subtle-foreground">{project.date}</span>
                </a>
              </RevealItem>
            ))}
          </RevealGroup>
        </Container>
      </header>

      {projects.map((project, index) => (
        <section
          key={project.slug}
          id={project.slug}
          className={index % 2 === 1 ? "border-y border-border bg-surface-muted" : undefined}
        >
          <Container className="py-20 lg:py-24">
            <div className="grid gap-12 lg:grid-cols-[minmax(0,1.6fr)_minmax(0,1fr)] lg:gap-16">
              <div>
                <Reveal>
                  <div className="flex flex-wrap items-baseline gap-x-4 gap-y-2">
                    <h2 className="text-3xl font-semibold sm:text-4xl">{project.title}</h2>
                    <span className="font-mono text-xs text-subtle-foreground">
                      {project.date}
                    </span>
                  </div>
                  <p className="mt-3 text-lg text-muted-foreground">{project.tagline}</p>
                  <p className="mt-5 text-base leading-relaxed text-muted-foreground">
                    {project.description}
                  </p>
                </Reveal>

                {project.caseStudy ? (
                  <div className="mt-12 flex flex-col gap-10">
                    <Reveal>
                      <h3 className="font-mono text-xs font-medium tracking-[0.18em] text-subtle-foreground uppercase">
                        The problem
                      </h3>
                      <p className="mt-4 text-base leading-relaxed text-muted-foreground">
                        {project.caseStudy.problem}
                      </p>
                    </Reveal>

                    <Reveal>
                      <h3 className="font-mono text-xs font-medium tracking-[0.18em] text-subtle-foreground uppercase">
                        What I did
                      </h3>
                      <ol className="mt-4 flex flex-col gap-3">
                        {project.caseStudy.approach.map((step, stepIndex) => (
                          <li
                            key={step.slice(0, 32)}
                            className="flex gap-4 text-base leading-relaxed text-muted-foreground"
                          >
                            <span className="mt-0.5 flex size-6 shrink-0 items-center justify-center rounded-md border border-border bg-surface-muted font-mono text-xs font-medium text-muted-foreground">
                              {stepIndex + 1}
                            </span>
                            {step}
                          </li>
                        ))}
                      </ol>
                    </Reveal>

                    <Reveal>
                      <h3 className="font-mono text-xs font-medium tracking-[0.18em] text-subtle-foreground uppercase">
                        Key decisions
                      </h3>
                      <div className="mt-4 grid gap-4">
                        {project.caseStudy.decisions.map((decision) => (
                          <Card key={decision.title} hover>
                            <CardBody>
                              <h4 className="text-base font-semibold">{decision.title}</h4>
                              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                                {decision.body}
                              </p>
                            </CardBody>
                          </Card>
                        ))}
                      </div>
                    </Reveal>

                    <Reveal>
                      <h3 className="font-mono text-xs font-medium tracking-[0.18em] text-subtle-foreground uppercase">
                        The outcome
                      </h3>
                      <p className="mt-4 text-base leading-relaxed text-muted-foreground">
                        {project.caseStudy.result}
                      </p>
                    </Reveal>
                  </div>
                ) : (
                  <Reveal className="mt-10">
                    <Card>
                      <CardBody>
                        <p className="text-sm text-muted-foreground">
                          Case study coming soon.
                        </p>
                      </CardBody>
                    </Card>
                  </Reveal>
                )}
              </div>

              <Reveal delay={0.1}>
                <div className="lg:sticky lg:top-28">
                  <dl className="grid grid-cols-1 gap-px overflow-hidden rounded-xl border border-border bg-border">
                    {project.outcomes.map((outcome) => (
                      <div key={outcome.label} className="bg-surface px-5 py-4">
                        <dt className="text-lg font-semibold">{outcome.metric}</dt>
                        <dd className="mt-1 text-xs leading-snug text-muted-foreground">
                          {outcome.label}
                        </dd>
                      </div>
                    ))}
                  </dl>

                  <h3 className="mt-8 font-mono text-xs font-medium tracking-[0.18em] text-subtle-foreground uppercase">
                    Built with
                  </h3>
                  <ul className="mt-4 flex flex-wrap gap-2">
                    {project.stack.map((tech) => (
                      <li key={tech}>
                        <Badge interactive>{tech}</Badge>
                      </li>
                    ))}
                  </ul>

                  {project.proprietary ? (
                    <p className="mt-8 flex items-center gap-1.5 border-t border-border pt-6 text-sm text-subtle-foreground">
                      <Lock className="size-3.5" />
                      Internal tool — source not public
                    </p>
                  ) : project.links.github || project.links.demo ? (
                    <div className="mt-8 flex flex-wrap gap-4 border-t border-border pt-6">
                      {project.links.github ? (
                        <a
                          href={project.links.github}
                          target="_blank"
                          rel="noreferrer noopener"
                          className="inline-flex items-center gap-1.5 text-sm font-medium transition-colors hover:text-accent"
                        >
                          <GithubIcon className="size-4" />
                          Source
                        </a>
                      ) : null}
                      {project.links.demo ? (
                        <a
                          href={project.links.demo}
                          target="_blank"
                          rel="noreferrer noopener"
                          className="inline-flex items-center gap-1.5 text-sm font-medium transition-colors hover:text-accent"
                        >
                          <ArrowUpRight className="size-4" />
                          Live demo
                        </a>
                      ) : null}
                    </div>
                  ) : null}
                </div>
              </Reveal>
            </div>
          </Container>
        </section>
      ))}
    </>
  );
}
