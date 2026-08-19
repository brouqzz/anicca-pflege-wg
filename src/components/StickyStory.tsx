"use client";

import {
  motion,
  useMotionValueEvent,
  useReducedMotion,
  useScroll,
  useTransform,
  type MotionValue,
} from "framer-motion";
import Image from "next/image";
import { useRef, useState, type ReactNode } from "react";

export interface StoryPanel {
  id?: string;
  content: ReactNode;
  wide?: boolean;
}

function Panel({
  progress,
  index,
  total,
  active,
  wide,
  children,
}: {
  progress: MotionValue<number>;
  index: number;
  total: number;
  active: boolean;
  wide?: boolean;
  children: ReactNode;
}) {
  const span = 1 / total;
  const start = index * span;
  const fade = Math.min(0.14, span * 0.28);

  const opacity = useTransform(
    progress,
    [start, start + fade, start + span - fade, start + span],
    index === 0
      ? [1, 1, 1, 0]
      : index === total - 1
        ? [0, 1, 1, 1]
        : [0, 1, 1, 0]
  );

  return (
    <motion.div
      style={{ opacity }}
      className={`absolute inset-0 flex items-end ${active ? "pointer-events-auto" : "pointer-events-none"}`}
      aria-hidden={!active}
    >
      <div className="w-full px-4 pb-[max(2.25rem,calc(env(safe-area-inset-bottom)+1rem))] sm:px-10 sm:pb-16 lg:px-16 lg:pb-20">
        <div
          className={
            wide
              ? "max-h-[calc(100svh-6.5rem)] w-full max-w-xl overflow-y-auto overscroll-contain"
              : "max-w-3xl"
          }
        >
          {children}
        </div>
      </div>
    </motion.div>
  );
}

export default function StickyStory({
  image,
  alt,
  panels,
  className,
}: {
  image: string;
  alt: string;
  panels: StoryPanel[];
  className?: string;
}) {
  const reduced = useReducedMotion();
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end end"],
  });
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.14]);
  const [active, setActive] = useState(0);

  useMotionValueEvent(scrollYProgress, "change", (v) => {
    const next = Math.min(panels.length - 1, Math.floor(v * panels.length + 0.001));
    setActive(next);
  });

  if (reduced) {
    return (
      <section className={className}>
        <div className="relative h-[55vh] min-h-[320px]">
          <Image src={image} alt={alt} fill quality={90} sizes="100vw" className="object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-ink-900/70 to-ink-900/20" aria-hidden />
        </div>
        {panels.map((panel, i) => (
          <div
            key={panel.id ?? i}
            id={panel.id}
            className="scroll-mt-20 bg-ink-900 px-4 py-10 text-paper-50 sm:px-10 sm:py-14 lg:px-16"
          >
            <div className="max-w-3xl">{panel.content}</div>
          </div>
        ))}
      </section>
    );
  }

  return (
    <section
      ref={ref}
      className={`relative ${className ?? ""}`}
      style={{ height: `${panels.length * 100}vh` }}
    >
      {panels.map((panel, i) =>
        panel.id ? (
          <div
            key={panel.id}
            id={panel.id}
            className="pointer-events-none absolute left-0 h-px w-px"
            style={{ top: `${(i / panels.length) * 100}%` }}
          />
        ) : null
      )}

      <div className="sticky top-0 h-[100svh] overflow-hidden">
        <motion.div style={{ scale }} className="absolute inset-0">
          <Image
            src={image}
            alt={alt}
            fill
            quality={90}
            sizes="100vw"
            className="object-cover"
          />
        </motion.div>
        <div
          className="absolute inset-0 bg-gradient-to-t from-ink-900/85 via-ink-900/35 to-ink-900/25"
          aria-hidden
        />

        {panels.map((panel, i) => (
          <Panel
            key={panel.id ?? i}
            progress={scrollYProgress}
            index={i}
            total={panels.length}
            active={active === i}
            wide={panel.wide}
          >
            {panel.content}
          </Panel>
        ))}
      </div>
    </section>
  );
}
