"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useInView, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { EASE } from "@/components/motion";

function ArrowRight({ size = 13 }: { size?: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.9}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M5 12h14" />
      <path d="m13 6 6 6-6 6" />
    </svg>
  );
}

function Counter({ to, suffix = "" }: { to: number; suffix?: string }) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-40px" });

  useEffect(() => {
    if (!inView) return;

    let frame = 0;
    const total = 90;
    const tick = () => {
      frame++;
      const t = frame / total;
      const eased = 1 - Math.pow(2, -10 * t);
      setCount(Math.round(to * Math.min(eased, 1)));
      if (frame < total) requestAnimationFrame(tick);
    };
    requestAnimationFrame(tick);
  }, [inView, to]);

  return (
    <span ref={ref}>
      {count}
      {suffix}
    </span>
  );
}

const stats = [
  { value: 5, suffix: "+", label: "Years in production" },
  { value: 84, suffix: "+", label: "Projects delivered" },
  { value: 14, suffix: "+", label: "Systems architected" },
];

export default function Hero() {
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  });

  const imageY = useTransform(scrollYProgress, [0, 1], ["0%", "16%"]);
  const contentY = useTransform(scrollYProgress, [0, 1], [0, 44]);
  const contentFade = useTransform(scrollYProgress, [0, 0.9], [1, 0.15]);

  return (
    <section
      ref={sectionRef}
      id="home"
      className="relative flex flex-col justify-end overflow-hidden"
      style={{ minHeight: "100dvh", background: "#050505" }}
    >
      {/* Full-bleed photograph, heavily dimmed into the black, parallaxing */}
      <motion.div
        initial={{ opacity: 0, scale: 1.05 }}
        animate={{ opacity: 0.25, scale: 1.01 }}
        transition={{ duration: 1.8, ease: EASE }}
        className="mask-dissolve absolute inset-0 -z-10 overflow-hidden"
      >
        <motion.div style={{ y: imageY }} className="absolute inset-[-12%]">
          <Image
            src="/image/myemma.jpg"
            alt=""
            fill
            priority
            sizes="100vw"
            className="object-cover"
            style={{ objectPosition: "center 40%" }}
          />
        </motion.div>
      </motion.div>

      {/* Legibility shading */}
      <div
        className="absolute inset-0 -z-10"
        style={{
          background:
            "linear-gradient(90deg, rgba(5,5,5,0.55), transparent 58%), linear-gradient(180deg, rgba(5,5,5,0.4), transparent 24%, transparent 55%, rgba(5,5,5,0.95))",
        }}
      />

      <motion.div
        style={{ y: contentY, opacity: contentFade }}
        className="shell w-full relative"
      >
        <div style={{ paddingBottom: "clamp(2rem, 4vw, 3rem)" }}>
          {/* Availability */}
          <motion.div
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.18, ease: EASE }}
            className="eyebrow"
          >
            <span className="signal-dot" />
            <span style={{ color: "var(--on-dark-3)" }}>Available for new projects</span>
          </motion.div>

          {/* Name */}
          <motion.h1
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.26, ease: EASE }}
            className="display-xl"
            style={{ color: "#fff" }}
          >
            Emmanuel David
          </motion.h1>

          {/* Lede + second line */}
          <motion.p
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.34, ease: EASE }}
            className="lead-lg"
            style={{
              color: "var(--on-dark-2)",
              maxWidth: "52ch",
              marginTop: "0.875rem",
            }}
          >
            Crafting scalable web systems and intelligent APIs that power modern AI and
            data-driven applications.
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4, ease: EASE }}
            className="body-text"
            style={{
              color: "var(--on-dark-3)",
              maxWidth: "52ch",
              marginTop: "0.5rem",
            }}
          >
            Specializing in machine learning integration, database architecture, and
            full-stack development to deliver enterprise-grade solutions built for
            performance, security, and growth.
          </motion.p>

          {/* Actions */}
          <motion.div
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.46, ease: EASE }}
            className="flex flex-wrap items-center gap-2"
            style={{ marginTop: "1.5rem" }}
          >
            <a href="#expertise" className="btn btn-primary btn-lg">
              <span>View expertise</span>
              <ArrowRight />
            </a>
            <a href="#contact" className="btn btn-glass btn-lg">
              Start a project
            </a>
            <Link href="/resume" className="btn btn-outline btn-lg">
              Resume
            </Link>
          </motion.div>

          {/* Stat rail with a rule that draws itself */}
          <div className="relative" style={{ marginTop: "2.25rem" }}>
            <motion.div
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ duration: 1, delay: 0.6, ease: EASE }}
              className="absolute inset-x-0 top-0 h-px origin-left"
              style={{ background: "var(--line-soft)" }}
            />

            <motion.div
              initial="hidden"
              animate="visible"
              variants={{
                hidden: {},
                visible: { transition: { staggerChildren: 0.08, delayChildren: 0.7 } },
              }}
              className="grid grid-cols-3 gap-6"
              style={{ paddingTop: "1.25rem", maxWidth: "44rem" }}
            >
              {stats.map((s) => (
                <motion.div
                  key={s.label}
                  variants={{
                    hidden: { opacity: 0, y: 8 },
                    visible: {
                      opacity: 1,
                      y: 0,
                      transition: { duration: 0.5, ease: EASE },
                    },
                  }}
                >
                  <div
                    className="display-md"
                    style={{ color: "#fff", marginBottom: "0.2rem" }}
                  >
                    <Counter to={s.value} suffix={s.suffix} />
                  </div>
                  <div className="mono-label" style={{ color: "var(--on-dark-4)" }}>
                    {s.label}
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
