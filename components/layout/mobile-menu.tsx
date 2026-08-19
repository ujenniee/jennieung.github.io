"use client";

import { useEffect } from "react";
import Link from "next/link";
import { AnimatePresence, motion } from "motion/react";
import { FileText, X } from "lucide-react";
import { navItems } from "@/data/navigation";
import { siteConfig } from "@/data/site";
import { SocialLinks } from "@/components/ui/social-links";
import { buttonStyles } from "@/components/ui/button";
import { cn } from "@/lib/utils";

type MobileMenuProps = {
  open: boolean;
  onClose: () => void;
  activeId: string | null;
};

export function MobileMenu({ open, onClose, activeId }: MobileMenuProps) {
  useEffect(() => {
    if (!open) return;

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") onClose();
    };

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [open, onClose]);

  return (
    <AnimatePresence>
      {open ? (
        <motion.div
          key="mobile-menu"
          id="mobile-menu"
          className="fixed inset-0 z-50 md:hidden"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
        >
          <button
            type="button"
            aria-label="Close menu"
            onClick={onClose}
            className="absolute inset-0 h-full w-full bg-background/80 backdrop-blur-sm"
          />

          <motion.nav
            aria-label="Mobile"
            className="absolute inset-x-3 top-3 rounded-xl border border-border bg-surface p-6 shadow-card-hover"
            initial={{ opacity: 0, y: -12, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -12, scale: 0.98 }}
            transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="flex items-center justify-between">
              <span className="font-mono text-sm font-medium tracking-tight">
                {siteConfig.shortName}
              </span>
              <button
                type="button"
                onClick={onClose}
                aria-label="Close menu"
                className="flex size-9 items-center justify-center rounded-lg border border-border text-muted-foreground transition-colors hover:border-border-strong hover:text-foreground"
              >
                <X className="size-4" />
              </button>
            </div>

            <ul className="mt-6 flex flex-col gap-1">
              {navItems.map((item, index) => (
                <motion.li
                  key={item.href}
                  initial={{ opacity: 0, x: -8 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.04 * index + 0.08, duration: 0.3 }}
                >
                  <Link
                    href={item.href}
                    onClick={onClose}
                    className={cn(
                      "flex items-center justify-between rounded-xl px-4 py-3 text-base font-medium transition-colors",
                      activeId === item.sectionId
                        ? "bg-accent-soft text-accent"
                        : "text-muted-foreground hover:bg-surface-muted hover:text-foreground",
                    )}
                  >
                    {item.label}
                    <span className="font-mono text-xs text-subtle-foreground">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                  </Link>
                </motion.li>
              ))}
            </ul>

            <div className="mt-6 flex flex-col gap-4 border-t border-border pt-6">
              <Link
                href="/resume"
                onClick={onClose}
                className={buttonStyles({ variant: "primary", size: "md", className: "w-full" })}
              >
                <FileText className="size-4" />
                View Resume
              </Link>
              <SocialLinks size="sm" className="justify-center" />
            </div>
          </motion.nav>
        </motion.div>
      ) : null}
    </AnimatePresence>
  );
}
