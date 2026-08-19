import { aboutContent } from "@/data/about";
import { Reveal } from "@/components/ui/reveal";
import { Section, SectionHeading } from "@/components/ui/section";

export function About() {
  return (
    <Section id="about">
      <div className="max-w-2xl">
        <SectionHeading title={aboutContent.heading} />
        <div className="mt-6 flex flex-col gap-5">
          {aboutContent.intro.map((paragraph, index) => (
            <Reveal key={paragraph.slice(0, 24)} delay={0.05 * (index + 1)}>
              <p className="text-base leading-relaxed text-muted-foreground">{paragraph}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </Section>
  );
}
