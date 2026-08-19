import { GraduationCap } from "lucide-react";
import { certifications, coursework, education } from "@/data/education";
import { Badge } from "@/components/ui/badge";
import { Card, CardBody } from "@/components/ui/card";
import { RevealGroup, RevealItem } from "@/components/ui/reveal";
import { Section, SectionHeading } from "@/components/ui/section";

export function Education() {
  return (
    <Section id="education">
      <SectionHeading title="Education" />

      <RevealGroup className="mt-12 grid gap-4 lg:grid-cols-2">
        {education.map((item) => (
          <RevealItem key={item.id} className="h-full">
            <Card hover className="h-full">
              <CardBody className="flex h-full flex-col">
                <div className="flex items-start justify-between gap-4">
                  <span className="flex size-10 shrink-0 items-center justify-center rounded-lg border border-border bg-surface-muted text-foreground">
                    <GraduationCap className="size-5" />
                  </span>
                  <span className="font-mono text-xs text-subtle-foreground">
                    {item.startDate} — {item.endDate}
                  </span>
                </div>

                <h3 className="mt-5 text-lg font-semibold">{item.institution}</h3>
                <p className="mt-1.5 text-sm text-muted-foreground">{item.credential}</p>
                {item.detail ? (
                  <p className="text-sm text-muted-foreground">{item.detail}</p>
                ) : null}

                <div className="mt-5 flex flex-wrap items-center gap-2 pt-1">
                  <Badge variant="outline">{item.location}</Badge>
                  {item.gpa ? <Badge variant="accent">GPA {item.gpa}</Badge> : null}
                </div>
              </CardBody>
            </Card>
          </RevealItem>
        ))}
      </RevealGroup>

      <RevealGroup className="mt-4 grid gap-4 lg:grid-cols-2">
        {coursework.map((group) => (
          <RevealItem key={group.id} className="h-full">
            <Card className="h-full">
              <CardBody>
                <h3 className="font-mono text-xs font-medium tracking-[0.18em] text-subtle-foreground uppercase">
                  {group.title}
                </h3>
                <ul className="mt-4 flex flex-wrap gap-2">
                  {group.courses.map((course) => (
                    <li key={course}>
                      <Badge interactive>{course}</Badge>
                    </li>
                  ))}
                </ul>
              </CardBody>
            </Card>
          </RevealItem>
        ))}
      </RevealGroup>

      {certifications.length > 0 ? (
        <RevealGroup className="mt-4 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {certifications.map((certification) => (
            <RevealItem key={certification.id} className="h-full">
              <Card hover className="h-full">
                <CardBody>
                  <h3 className="text-sm font-semibold">{certification.name}</h3>
                  <p className="mt-1.5 text-sm text-muted-foreground">{certification.issuer}</p>
                  <p className="mt-3 font-mono text-xs text-subtle-foreground">
                    {certification.date}
                  </p>
                </CardBody>
              </Card>
            </RevealItem>
          ))}
        </RevealGroup>
      ) : null}
    </Section>
  );
}
