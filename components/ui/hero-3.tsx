"use client";

import * as React from "react";
import Link from "next/link";
import { motion, useReducedMotion, type Variants } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

import { cn } from "@/lib/utils";

interface AnimatedMarqueeHeroProps {
  tagline: string;
  title: React.ReactNode;
  description: string;
  ctaText: string;
  ctaHref?: string;
  images: string[];
  className?: string;
}

const FADE_IN_ANIMATION_VARIANTS: Variants = {
  hidden: { opacity: 0, y: 14 },
  show: {
    opacity: 1,
    y: 0,
    transition: { type: "spring", stiffness: 100, damping: 20 },
  },
};

function ActionButton({
  children,
  href,
}: {
  children: React.ReactNode;
  href: string;
}) {
  return (
    <motion.div whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.97 }}>
      <Link
        href={href}
        className="group inline-flex h-12 items-center justify-center gap-3 rounded-full bg-brand px-7 text-sm font-semibold text-brand-foreground shadow-lg shadow-black/20 transition-colors hover:bg-brand-strong focus:outline-none focus-visible:ring-2 focus-visible:ring-brand/60 focus-visible:ring-offset-2 focus-visible:ring-offset-background"
      >
        {children}
        <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
      </Link>
    </motion.div>
  );
}

export function AnimatedMarqueeHero({
  tagline,
  title,
  description,
  ctaText,
  ctaHref = "/projects",
  images,
  className,
}: AnimatedMarqueeHeroProps) {
  const shouldReduceMotion = useReducedMotion();
  const imageCopies = [0, 1];

  return (
    <section
      className={cn(
        "relative h-[100svh] min-h-[760px] w-full overflow-hidden bg-background/90 text-center",
        className,
      )}
    >
      <style>{`
        @keyframes project-marquee-loop {
          from { transform: translate3d(0, 0, 0); }
          to { transform: translate3d(-50%, 0, 0); }
        }

        .project-marquee-track {
          animation: project-marquee-loop 48s linear infinite;
          will-change: transform;
        }
      `}</style>

      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-brand/45" />
      <div className="pointer-events-none absolute left-1/2 top-[18%] h-56 w-56 -translate-x-1/2 rounded-full bg-brand/5 blur-3xl" />

      <div className="relative z-10 flex h-[61%] flex-col items-center justify-center px-5 pb-8 pt-24 sm:px-8 md:h-[60%] md:pt-28">
        <motion.div
          initial={shouldReduceMotion ? false : "hidden"}
          animate="show"
          variants={FADE_IN_ANIMATION_VARIANTS}
          className="mb-5 inline-flex items-center gap-3 rounded-full border border-border/80 bg-card/55 px-4 py-2 text-[10px] font-medium uppercase tracking-[0.24em] text-muted-foreground shadow-sm backdrop-blur-xl sm:text-xs"
        >
          <span className="h-1.5 w-1.5 rounded-full bg-brand" />
          {tagline}
        </motion.div>

        <motion.h1
          initial={shouldReduceMotion ? false : "hidden"}
          animate="show"
          variants={
            typeof title === "string"
              ? {
                  hidden: {},
                  show: { transition: { staggerChildren: 0.08 } },
                }
              : FADE_IN_ANIMATION_VARIANTS
          }
          className="max-w-6xl text-balance text-[clamp(3.25rem,7.3vw,7.7rem)] font-bold leading-[0.9] tracking-[-0.065em] text-foreground"
        >
          {typeof title === "string"
            ? title.split(" ").map((word, index) => (
                <motion.span
                  key={`${word}-${index}`}
                  variants={FADE_IN_ANIMATION_VARIANTS}
                  className="inline-block"
                >
                  {word}&nbsp;
                </motion.span>
              ))
            : title}
        </motion.h1>

        <motion.p
          initial={shouldReduceMotion ? false : "hidden"}
          animate="show"
          variants={FADE_IN_ANIMATION_VARIANTS}
          transition={{ delay: 0.35 }}
          className="mt-6 max-w-xl text-balance text-sm leading-6 text-muted-foreground sm:text-base sm:leading-7 md:text-lg"
        >
          {description}
        </motion.p>

        <motion.div
          initial={shouldReduceMotion ? false : "hidden"}
          animate="show"
          variants={FADE_IN_ANIMATION_VARIANTS}
          transition={{ delay: 0.45 }}
          className="mt-7"
        >
          <ActionButton href={ctaHref}>{ctaText}</ActionButton>
        </motion.div>
      </div>

      <div
        aria-hidden="true"
        className="absolute inset-x-0 bottom-0 h-[42%] overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_7%,black_93%,transparent)]"
      >
        <div className="h-full [mask-image:linear-gradient(to_bottom,transparent,black_16%,black_88%,transparent)]">
          <div className="project-marquee-track flex h-full w-max items-center">
            {imageCopies.map((copyIndex) => (
              <div
                key={copyIndex}
                className="flex shrink-0 items-center gap-4 pr-4 md:gap-6 md:pr-6"
              >
                {images.map((src, imageIndex) => (
                  <div
                    key={`${copyIndex}-${src}-${imageIndex}`}
                    className="relative aspect-[8/5] w-[72vw] max-w-[340px] shrink-0 overflow-hidden rounded-xl border border-border/75 bg-card shadow-2xl shadow-black/20 sm:w-[340px] md:max-w-none lg:w-[400px]"
                    style={{
                      rotate: `${imageIndex % 2 === 0 ? -1.25 : 1.25}deg`,
                      marginTop: `${(imageIndex % 3) * 10}px`,
                    }}
                  >
                    <img
                      src={src}
                      alt=""
                      loading={imageIndex < 4 ? "eager" : "lazy"}
                      decoding="async"
                      draggable={false}
                      className="h-full w-full object-contain"
                    />
                    <div className="pointer-events-none absolute inset-0 ring-1 ring-inset ring-white/10" />
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default AnimatedMarqueeHero;
