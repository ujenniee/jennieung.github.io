import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { featuredProjects } from "@/data/projects";
import { ProjectCard } from "@/components/projects/project-card";
import { buttonStyles } from "@/components/ui/button";
import { Reveal, RevealGroup, RevealItem } from "@/components/ui/reveal";
import { Section, SectionHeading } from "@/components/ui/section";

export function FeaturedProjects() {
  return (
    <Section id="projects" containerSize="wide" muted>
      <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
        <SectionHeading title="Projects" />
        <Reveal delay={0.1}>
          <Link href="/projects" className={buttonStyles({ variant: "outline", size: "md" })}>
            All case studies
            <ArrowRight className="size-4" />
          </Link>
        </Reveal>
      </div>

      <RevealGroup className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {featuredProjects.map((project) => (
          <RevealItem key={project.slug} className="h-full">
            <ProjectCard project={project} />
          </RevealItem>
        ))}
      </RevealGroup>
    </Section>
  );
}
