import Link from "next/link";
import { ArrowUpRight, Download, FileText } from "lucide-react";
import { siteConfig } from "@/data/site";
import { buttonStyles } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { Reveal } from "@/components/ui/reveal";

export function ResumeCallout() {
  return (
    <section className="py-16 lg:py-20">
      <Container>
        <Reveal>
          <div className="rounded-xl border border-border bg-surface-muted p-8 lg:p-10">
            <div className="flex flex-col items-start gap-8 lg:flex-row lg:items-center lg:justify-between">
              <div className="max-w-xl">
                <span className="inline-flex size-10 items-center justify-center rounded-lg border border-border bg-surface text-foreground">
                  <FileText className="size-4" />
                </span>
                <h2 className="mt-4 text-xl font-semibold sm:text-2xl">The one-page version</h2>
                <p className="mt-3 text-base leading-relaxed text-muted-foreground">
                  Experience, projects, and coursework on a single ATS-friendly page.
                </p>
              </div>

              <div className="flex w-full flex-col gap-3 sm:w-auto sm:flex-row lg:flex-col xl:flex-row">
                <a
                  href={siteConfig.resumePath}
                  download
                  className={buttonStyles({ variant: "primary", size: "lg" })}
                >
                  <Download className="size-4" />
                  Download PDF
                </a>
                <Link href="/resume" className={buttonStyles({ variant: "outline", size: "lg" })}>
                  View in browser
                  <ArrowUpRight className="size-4" />
                </Link>
              </div>
            </div>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
