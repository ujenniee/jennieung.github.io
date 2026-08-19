import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, Lock } from "lucide-react";
import type { Project } from "@/lib/types";
import { Badge } from "@/components/ui/badge";
import { GithubIcon } from "@/components/ui/brand-icons";
import { Card } from "@/components/ui/card";

export function ProjectCard({ project }: { project: Project }) {
  const hasCaseStudy = Boolean(project.caseStudy);

  return (
    <Card hover className="flex h-full flex-col overflow-hidden">
      <ProjectArtwork project={project} />

      <div className="flex flex-1 flex-col p-6">
        <div className="flex items-center justify-between gap-3">
          <h3 className="text-base font-semibold">{project.title}</h3>
          <span className="text-xs text-subtle-foreground">{project.date}</span>
        </div>

        <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{project.description}</p>

        <dl className="mt-5 grid grid-cols-3 gap-4 border-t border-border pt-5">
          {project.outcomes.map((outcome) => (
            <div key={outcome.label}>
              <dt className="text-sm font-semibold text-foreground">{outcome.metric}</dt>
              <dd className="mt-1 text-xs leading-snug text-muted-foreground">{outcome.label}</dd>
            </div>
          ))}
        </dl>

        <ul className="mt-5 flex flex-wrap gap-1.5">
          {project.stack.map((tech) => (
            <li key={tech}>
              <Badge>{tech}</Badge>
            </li>
          ))}
        </ul>

        <div className="mt-6 flex flex-wrap items-center gap-x-5 gap-y-3 border-t border-border pt-5">
          {hasCaseStudy ? (
            <Link
              href={`/projects#${project.slug}`}
              className="inline-flex items-center gap-1.5 text-sm font-medium text-foreground hover:underline"
            >
              Case study
              <ArrowUpRight className="size-4" />
            </Link>
          ) : null}

          {project.proprietary ? (
            <span className="inline-flex items-center gap-1.5 text-sm text-subtle-foreground">
              <Lock className="size-3.5" />
              Internal tool — source not public
            </span>
          ) : (
            <>
              <ProjectLink href={project.links.github} label="Code" icon={GithubIcon} />
              <ProjectLink href={project.links.demo} label="Live demo" icon={ArrowUpRight} />
            </>
          )}
        </div>
      </div>
    </Card>
  );
}

function ProjectArtwork({ project }: { project: Project }) {
  if (!project.image) return null;

  return (
    <div className="relative aspect-[16/9] overflow-hidden border-b border-border">
      <Image
        src={project.image}
        alt={`${project.title} interface`}
        fill
        sizes="(max-width: 1024px) 100vw, 33vw"
        className="object-cover"
      />
    </div>
  );
}

function ProjectLink({
  href,
  label,
  icon: Icon,
}: {
  href?: string;
  label: string;
  icon: React.ComponentType<{ className?: string }>;
}) {
  if (!href) {
    return (
      <span
        className="inline-flex cursor-not-allowed items-center gap-1.5 text-sm text-subtle-foreground"
        title={`${label} link not added yet`}
      >
        <Lock className="size-3.5" />
        {label}
      </span>
    );
  }

  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer noopener"
      className="inline-flex items-center gap-1.5 text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
    >
      <Icon className="size-4" />
      {label}
    </a>
  );
}
