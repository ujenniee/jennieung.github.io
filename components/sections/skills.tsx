import { skillCategories } from "@/data/skills";
import { Badge } from "@/components/ui/badge";
import { Card, CardBody } from "@/components/ui/card";
import { RevealGroup, RevealItem } from "@/components/ui/reveal";
import { Section, SectionHeading } from "@/components/ui/section";

export function Skills() {
  return (
    <Section id="skills" muted>
      <SectionHeading title="Skills" />

      <RevealGroup className="mt-12 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {skillCategories.map((category) => (
          <RevealItem key={category.id} className="h-full">
            <Card hover className="group h-full">
              <CardBody className="flex h-full flex-col">
                <h3 className="text-base font-semibold">{category.title}</h3>
                <ul className="mt-4 flex flex-wrap gap-2">
                  {category.skills.map((skill) => (
                    <li key={skill}>
                      <Badge interactive>{skill}</Badge>
                    </li>
                  ))}
                </ul>
              </CardBody>
            </Card>
          </RevealItem>
        ))}
      </RevealGroup>
    </Section>
  );
}
