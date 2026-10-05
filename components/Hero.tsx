"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
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
        <div className="flex flex-col items-center text-center md:items-center md:text-center" style={{ paddingBottom: "clamp(2rem, 4vw, 3rem)" }}>
          {/* Availability */}
          <motion.div
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.18, ease: EASE }}
            className="eyebrow md:justify-center"
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

          {/* Identity line — the four pillars stated plainly */}
          <motion.p
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.32, ease: EASE }}
            className="lead-lg"
            style={{
              color: "#fff",
              maxWidth: "52ch",
              marginTop: "0.6rem",
            }}
          >
            Software Engineer <span style={{ opacity: 0.4 }}>·</span> Machine Learning{" "}
            <span style={{ opacity: 0.4 }}>·</span> AI{" "}
            <span style={{ opacity: 0.4 }}>·</span> Creative
          </motion.p>

          {/* Lede + second line */}
          <motion.p
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.38, ease: EASE }}
            className="body-text"
            style={{
              color: "var(--on-dark-3)",
              maxWidth: "52ch",
              marginTop: "0.875rem",
            }}
          >
            I build software that holds up — machine learning systems, applied AI, and
            the visual and interaction design that makes them feel considered rather
            than merely functional.
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.44, ease: EASE }}
            className="body-text"
            style={{
              color: "var(--on-dark-4)",
              maxWidth: "52ch",
              marginTop: "0.5rem",
            }}
          >
            Most of my work sits where engineering and craft overlap: shipping an
            interface, then the models and infrastructure behind it.
          </motion.p>

          {/* Actions */}
          <motion.div
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.46, ease: EASE }}
            className="flex flex-wrap items-center justify-center gap-2"
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
        </div>
      </motion.div>
    </section>
  );
}
