import { experience } from "@/data/experience";
import { Badge } from "@/components/ui/badge";
import { Reveal } from "@/components/ui/reveal";
import { Section, SectionHeading } from "@/components/ui/section";

export function Experience() {
  return (
    <Section id="experience">
      <SectionHeading title="Experience" />

      <ol className="mt-14 relative">
        <span
          aria-hidden
          className="absolute top-2 bottom-2 left-[7px] w-px bg-border sm:left-[9px]"
        />

        {experience.map((item, index) => (
          <li key={item.id} className="relative pb-12 pl-8 last:pb-0 sm:pl-12">
            <Reveal delay={index * 0.08}>
              <span
                aria-hidden
                className="absolute top-1.5 left-0 flex size-4 items-center justify-center rounded-full border-2 border-accent bg-background sm:size-5"
              >
                <span className="size-1.5 rounded-full bg-accent" />
              </span>

              <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
                <h3 className="text-lg font-semibold lg:text-xl">{item.role}</h3>
                <span className="font-mono text-xs text-subtle-foreground">
                  {item.startDate} — {item.endDate}
                </span>
              </div>

              <p className="mt-1 text-sm font-medium text-muted-foreground">
                {item.organization}
                <span className="text-subtle-foreground"> · {item.location}</span>
              </p>

              <p className="mt-4 text-sm leading-relaxed text-muted-foreground lg:text-base">
                {item.summary}
              </p>

              <ul className="mt-5 flex flex-col gap-2.5">
                {item.highlights.map((highlight) => (
                  <li
                    key={highlight.slice(0, 32)}
                    className="relative pl-5 text-sm leading-relaxed text-muted-foreground"
                  >
                    <span
                      aria-hidden
                      className="absolute top-2.5 left-0 size-1.5 rounded-full bg-border-strong"
                    />
                    {highlight}
                  </li>
                ))}
              </ul>

              <ul className="mt-5 flex flex-wrap gap-2">
                {item.skills.map((skill) => (
                  <li key={skill}>
                    <Badge variant="outline">{skill}</Badge>
                  </li>
                ))}
              </ul>
            </Reveal>
          </li>
        ))}
      </ol>
    </Section>
  );
}
