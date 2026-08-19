import { cn } from "@/lib/utils";

type CardProps = React.ComponentPropsWithoutRef<"div"> & {
  hover?: boolean;
};

export function Card({ hover = false, className, ...props }: CardProps) {
  return (
    <div
      className={cn(
        "rounded-xl border border-border bg-surface transition-colors duration-200",
        hover && "hover:border-border-strong",
        className,
      )}
      {...props}
    />
  );
}

export function CardBody({ className, ...props }: React.ComponentPropsWithoutRef<"div">) {
  return <div className={cn("p-6", className)} {...props} />;
}
