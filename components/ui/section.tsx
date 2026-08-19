import { cn } from "@/lib/utils";
import { Container } from "@/components/ui/container";
import { Reveal } from "@/components/ui/reveal";

type SectionProps = React.ComponentPropsWithoutRef<"section"> & {
  containerSize?: "default" | "wide" | "narrow";
  muted?: boolean;
};

export function Section({
  containerSize = "default",
  muted = false,
  className,
  children,
  ...props
}: SectionProps) {
  return (
    <section
      className={cn(
        "relative scroll-mt-22 py-16 lg:py-20",
        muted && "bg-surface-muted border-y border-border",
        className,
      )}
      {...props}
    >
      <Container size={containerSize}>{children}</Container>
    </section>
  );
}

type SectionHeadingProps = {
  title: string;
  align?: "left" | "center";
  className?: string;
};

export function SectionHeading({ title, align = "left", className }: SectionHeadingProps) {
  return (
    <Reveal className={cn(align === "center" && "text-center", className)}>
      <h2 className="text-2xl font-semibold sm:text-3xl">{title}</h2>
    </Reveal>
  );
}
