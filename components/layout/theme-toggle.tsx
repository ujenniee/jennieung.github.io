"use client";

import { useTheme } from "next-themes";
import { Moon, Sun } from "lucide-react";
import { cn } from "@/lib/utils";

export function ThemeToggle({ className }: { className?: string }) {
  const { resolvedTheme, setTheme } = useTheme();

  return (
    <button
      type="button"
      onClick={() => setTheme(resolvedTheme === "dark" ? "light" : "dark")}
      aria-label="Toggle color theme"
      className={cn(
        "relative flex size-9 items-center justify-center rounded-lg border border-border bg-surface text-muted-foreground transition-colors duration-200 hover:border-border-strong hover:text-foreground",
        className,
      )}
    >
      {/* Driven by the html.dark class so it stays correct without waiting for hydration. */}
      <Sun className="size-4 transition-transform duration-300 dark:hidden" />
      <Moon className="hidden size-4 transition-transform duration-300 dark:block" />
    </button>
  );
}
