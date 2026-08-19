import { Mail } from "lucide-react";
import { socialLinks } from "@/data/site";
import type { SocialPlatform } from "@/lib/types";
import { cn } from "@/lib/utils";
import { GithubIcon, LinkedinIcon } from "@/components/ui/brand-icons";

const icons: Record<SocialPlatform, React.ComponentType<{ className?: string }>> = {
  github: GithubIcon,
  linkedin: LinkedinIcon,
  email: Mail,
};

type SocialLinksProps = {
  className?: string;
  size?: "sm" | "md";
};

export function SocialLinks({ className, size = "md" }: SocialLinksProps) {
  const dimension = size === "sm" ? "size-9" : "size-11";
  const iconSize = size === "sm" ? "size-4" : "size-[1.15rem]";

  return (
    <ul className={cn("flex items-center gap-2", className)}>
      {socialLinks.map((link) => {
        const Icon = icons[link.platform];
        const isExternal = link.href.startsWith("http");

        return (
          <li key={link.platform}>
            <a
              href={link.href}
              aria-label={link.label}
              {...(isExternal ? { target: "_blank", rel: "noreferrer noopener" } : {})}
              className={cn(
                "flex items-center justify-center rounded-lg border border-border bg-surface text-muted-foreground transition-colors duration-200 hover:border-border-strong hover:text-foreground",
                dimension,
              )}
            >
              <Icon className={iconSize} />
            </a>
          </li>
        );
      })}
    </ul>
  );
}
