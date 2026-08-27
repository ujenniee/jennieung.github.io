"use client";

import Link from "next/link";
import { motion, useReducedMotion } from "motion/react";
import { ArrowRight, Download, MapPin } from "lucide-react";
import { aboutContent } from "@/data/about";
import { siteConfig } from "@/data/site";
import { buttonStyles } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { SocialLinks } from "@/components/ui/social-links";

const container = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.06, delayChildren: 0.05 } },
};

export function Hero() {
  const reduceMotion = useReducedMotion();

  const item = {
    hidden: reduceMotion ? { opacity: 0 } : { opacity: 0, y: 8 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.4, ease: [0.22, 1, 0.36, 1] as const },
    },
  };

  return (
    <section className="border-b border-border pt-32 pb-20">
      <Container>
        <motion.div variants={container} initial="hidden" animate="visible" className="max-w-3xl">
          <motion.p
            variants={item}
            className="flex items-center gap-1.5 text-sm text-subtle-foreground"
          >
            <MapPin className="size-3.5" />
            {siteConfig.location}
          </motion.p>

          <motion.h1 variants={item} className="mt-5 text-4xl font-semibold sm:text-5xl">
            {siteConfig.name}
          </motion.h1>

          <motion.div variants={item} className="mt-8 flex flex-wrap items-center gap-3">
            <Link href="/#projects" className={buttonStyles({ variant: "primary" })}>
              View my work
              <ArrowRight className="size-4" />
            </Link>
            <a
              href={siteConfig.resumePath}
              download
              className={buttonStyles({ variant: "outline" })}
            >
              <Download className="size-4" />
              Resume
            </a>
          </motion.div>

          <motion.div variants={item} className="mt-8">
            <SocialLinks />
          </motion.div>
        </motion.div>
      </Container>
    </section>
  );
}
