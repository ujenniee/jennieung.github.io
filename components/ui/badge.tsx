import { cn } from "@/lib/utils";

type BadgeProps = React.ComponentPropsWithoutRef<"span"> & {
  variant?: "default" | "accent" | "outline";
  interactive?: boolean;
};

const variants = {
  default: "bg-surface-muted text-muted-foreground border-border",
  accent: "bg-accent-soft text-accent border-transparent",
  outline: "bg-transparent text-muted-foreground border-border-strong",
} as const;

export function Badge({
  variant = "default",
  interactive = false,
  className,
  ...props
}: BadgeProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-md border px-2.5 py-1 text-xs font-medium transition-colors duration-200",
        variants[variant],
        interactive && "cursor-default hover:border-border-strong hover:text-foreground",
        className,
      )}
      {...props}
    />
  );
}
