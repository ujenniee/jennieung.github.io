"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion } from "motion/react";
import { Menu } from "lucide-react";
import { homeSectionIds, navItems } from "@/data/navigation";
import { siteConfig } from "@/data/site";
import { useScrollSpy } from "@/hooks/use-scroll-spy";
import { ThemeToggle } from "@/components/layout/theme-toggle";
import { MobileMenu } from "@/components/layout/mobile-menu";
import { buttonStyles } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { cn } from "@/lib/utils";

export function Navbar() {
  const pathname = usePathname();
  const isHome = pathname === "/";
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [lastPathname, setLastPathname] = useState(pathname);

  // Close the mobile menu on navigation, including browser back/forward.
  if (pathname !== lastPathname) {
    setLastPathname(pathname);
    setMenuOpen(false);
  }

  const spyId = useScrollSpy(isHome ? homeSectionIds : []);
  const activeId = isHome ? spyId : pathname.startsWith("/projects") ? "projects" : null;

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <header
        className={cn(
          "fixed inset-x-0 top-0 z-40 transition-all duration-300",
          scrolled
            ? "border-b border-border bg-[var(--nav-surface)] backdrop-blur-xl backdrop-saturate-150"
            : "border-b border-transparent bg-transparent",
        )}
      >
        <Container size="wide">
          <div className="flex h-16 items-center justify-between gap-4 lg:h-18">
            <Link
              href="/"
              className="group flex items-center gap-2.5 text-sm font-semibold tracking-tight"
            >
              <span className="flex size-8 items-center justify-center rounded-lg bg-foreground font-mono text-xs text-background">
                JU
              </span>
              <span className="hidden sm:inline">{siteConfig.name}</span>
            </Link>

            <nav aria-label="Primary" className="hidden md:block">
              <ul className="flex items-center gap-1">
                {navItems.map((item) => {
                  const isActive = activeId === item.sectionId;

                  return (
                    <li key={item.href} className="relative">
                      <Link
                        href={item.href}
                        aria-current={isActive ? "true" : undefined}
                        className={cn(
                          "relative block rounded-full px-3.5 py-2 text-sm font-medium transition-colors duration-200",
                          isActive
                            ? "text-accent"
                            : "text-muted-foreground hover:text-foreground",
                        )}
                      >
                        {isActive ? (
                          <motion.span
                            layoutId="nav-active-pill"
                            className="absolute inset-0 -z-10 rounded-full bg-accent-soft"
                            transition={{ type: "spring", stiffness: 380, damping: 32 }}
                          />
                        ) : null}
                        {item.label}
                      </Link>
                    </li>
                  );
                })}
              </ul>
            </nav>

            <div className="flex items-center gap-2">
              <ThemeToggle />
              <Link
                href="/resume"
                className={buttonStyles({
                  variant: "primary",
                  size: "sm",
                  className: "hidden sm:inline-flex",
                })}
              >
                Resume
              </Link>
              <button
                type="button"
                onClick={() => setMenuOpen(true)}
                aria-label="Open menu"
                aria-expanded={menuOpen}
                aria-controls="mobile-menu"
                className="flex size-9 items-center justify-center rounded-lg border border-border bg-surface text-muted-foreground transition-colors hover:border-border-strong hover:text-foreground md:hidden"
              >
                <Menu className="size-4" />
              </button>
            </div>
          </div>
        </Container>
      </header>

      <MobileMenu open={menuOpen} onClose={() => setMenuOpen(false)} activeId={activeId} />
    </>
  );
}
