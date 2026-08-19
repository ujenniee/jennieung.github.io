import Link from "next/link";
import { footerLinks } from "@/data/navigation";
import { siteConfig } from "@/data/site";
import { Container } from "@/components/ui/container";
import { SocialLinks } from "@/components/ui/social-links";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-border bg-surface-muted">
      <Container size="wide" className="py-14 lg:py-16">
        <div className="flex flex-col gap-10 lg:flex-row lg:items-start lg:justify-between">
          <div className="max-w-sm">
            <Link href="/" className="flex items-center gap-2.5 text-sm font-semibold">
              <span className="flex size-8 items-center justify-center rounded-lg bg-foreground font-mono text-xs text-background">
                JU
              </span>
              {siteConfig.name}
            </Link>
            <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
              Studying computer science at the University of Washington and building software for
              real users in {siteConfig.location}.
            </p>
            <SocialLinks size="sm" className="mt-6" />
          </div>

          <nav aria-label="Footer">
            <h2 className="font-mono text-xs font-medium tracking-[0.18em] text-subtle-foreground uppercase">
              Explore
            </h2>
            <ul className="mt-5 grid grid-cols-2 gap-x-10 gap-y-3">
              {footerLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-muted-foreground transition-colors hover:text-accent"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>

        <div className="mt-12 flex flex-col gap-3 border-t border-border pt-8 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-xs text-subtle-foreground">
            © {year} {siteConfig.name}. Designed and built from scratch.
          </p>
          <p className="font-mono text-xs text-subtle-foreground">
            Next.js · TypeScript · Tailwind CSS
          </p>
        </div>
      </Container>
    </footer>
  );
}
