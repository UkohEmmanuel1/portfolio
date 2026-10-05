"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { VIEWPORT, fadeUp, stagger } from "@/components/motion";

const PORTRAIT = {
  src: "/image/about.jpg",
  alt: "Emmanuel David, software engineer working across machine learning, AI, and creative practice",
  width: 509,
  height: 334,
};

const WRAPPED_STATS = [
  { label: "Top genre", value: "Lo-fi & Chill", pct: 92, hue: "#1db954" },
  { label: "Most played", value: "Khruangbin", pct: 74, hue: "#f472b6" },
  { label: "On repeat", value: "Coding podcasts", pct: 61, hue: "#38bdf8" },
];

/* Left card — abstract mesh gradient, no assets */
function MeshCard() {
  return (
    <div
      className="marquee-card"
      style={{ background: "linear-gradient(135deg, #4f46e5 0%, #9333ea 48%, #db2777 100%)" }}
    >
      <div
        className="mesh-blob"
        style={{
          top: "-14%",
          left: "-8%",
          width: "58%",
          height: "72%",
          background: "rgba(255,255,255,0.55)",
        }}
      />
      <div
        className="mesh-blob mesh-blob-2"
        style={{
          right: "-10%",
          bottom: "-18%",
          width: "62%",
          height: "78%",
          background: "rgba(56,189,248,0.55)",
        }}
      />

      {/* fine grid */}
      <div
        className="absolute inset-0"
        style={{
          opacity: 0.22,
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.7) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.7) 1px, transparent 1px)",
          backgroundSize: "30px 30px",
        }}
      />

      {/* concentric rings */}
      <div
        className="absolute"
        style={{
          top: "50%",
          left: "50%",
          width: "62%",
          aspectRatio: "1 / 1",
          transform: "translate(-50%, -50%)",
          borderRadius: "50%",
          border: "1px solid rgba(255,255,255,0.5)",
          boxShadow:
            "0 0 0 34px rgba(255,255,255,0.10), 0 0 0 68px rgba(255,255,255,0.07), 0 0 0 102px rgba(255,255,255,0.045)",
        }}
      />

      <span
        className="absolute bottom-5 left-5 text-[0.6875rem] uppercase tracking-[0.18em] text-white/85"
        style={{ fontFamily: "var(--font-cascadia), ui-monospace, monospace" }}
      >
        mesh 04
      </span>
    </div>
  );
}

/* Middle card — the developer portrait, 509x334 */
function PortraitCard() {
  return (
    <div className="marquee-card" style={{ background: "#e7e5dd" }}>
      <Image
        src={PORTRAIT.src}
        alt={PORTRAIT.alt}
        width={PORTRAIT.width}
        height={PORTRAIT.height}
        sizes="(max-width: 48rem) 78vw, 509px"
        className="h-full w-full object-cover"
        style={{ filter: "saturate(0.98) contrast(1.02)" }}
      />
    </div>
  );
}

/* Right card — dark listening-wrapped stats */
function WrappedCard() {
  return (
    <div
      className="marquee-card flex flex-col justify-between text-white"
      style={{
        padding: "clamp(0.875rem, 3.5vw, 1.5rem)",
        background:
          "radial-gradient(120% 120% at 8% 0%, #1f2937 0%, #111214 55%, #0a0a0b 100%)",
      }}
    >
      <div className="flex items-center justify-between">
        <span className="flex items-center gap-2 text-[0.6875rem] uppercase tracking-[0.18em] text-white/60">
          <span
            style={{
              width: "0.4rem",
              height: "0.4rem",
              borderRadius: "50%",
              background: "#1db954",
            }}
          />
          2025 Wrapped
        </span>
        <span className="hidden text-[0.6875rem] uppercase tracking-[0.18em] text-white/40 sm:inline">
          music · podcasts
        </span>
      </div>

      <div>
        <div
          style={{
            fontFamily: "var(--font-cascadia), ui-monospace, monospace",
            fontSize: "clamp(1.75rem, 8vw, 3.25rem)",
            fontWeight: 700,
            lineHeight: 1,
            letterSpacing: "-0.04em",
          }}
        >
          38,412
        </div>
        <div className="mt-2 text-[0.6875rem] uppercase tracking-[0.18em] text-white/50">
          minutes listened
        </div>
      </div>

      <div className="flex flex-col gap-1.5 sm:gap-2.5">
        {WRAPPED_STATS.map((s) => (
          <div key={s.label}>
            <div className="flex items-baseline justify-between gap-3">
              <span className="shrink-0 text-[0.6875rem] uppercase tracking-[0.14em] text-white/45">
                {s.label}
              </span>
              <span className="truncate text-[0.8125rem] font-semibold text-white">
                {s.value}
              </span>
            </div>
            <div
              className="mt-1.5 h-[3px] w-full overflow-hidden"
              style={{ background: "rgba(255,255,255,0.12)" }}
            >
              <div
                style={{
                  width: `${s.pct}%`,
                  height: "100%",
                  background: s.hue,
                }}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

/* Fragments keep the track's own gap as the only spacing, so the
   duplicate set lines up pixel-for-pixel with the first. */
function CardSet() {
  return (
    <>
      <MeshCard />
      <PortraitCard />
      <WrappedCard />
    </>
  );
}

export default function About() {
  return (
    <section id="about" className="section section-light">
      <div className="shell">
        <motion.div
          variants={stagger(0.08)}
          initial="hidden"
          whileInView="visible"
          viewport={VIEWPORT}
        >
          <motion.div variants={fadeUp} className="eyebrow">
            <span className="eyebrow-index">01</span>
            <span className="eyebrow-rule" />
            <span>About me</span>
          </motion.div>

          <motion.h2 variants={fadeUp} className="about-display">
            About me
          </motion.h2>
        </motion.div>

        <motion.div
          variants={stagger(0.06)}
          initial="hidden"
          whileInView="visible"
          viewport={VIEWPORT}
          className="mt-8 flex flex-col gap-6"
        >
          <motion.p variants={fadeUp} className="about-copy">
            I&apos;m a <strong>Software Engineer</strong> working across{" "}
            <strong>machine learning</strong>, <strong>applied AI</strong>, and{" "}
            <strong>creative practice</strong>. Most of what I build sits at the seam
            between those — systems that are technically sound and still feel like
            someone bothered.
          </motion.p>

          <motion.p variants={fadeUp} className="about-copy">
            In practice that means training and shipping models, wiring them into real
            applications, and designing the interfaces and identities that carry them. I
            care about the unglamorous parts just as much: latency, authentication,
            deployment, and the code somebody else has to read next year.
          </motion.p>

          <motion.p variants={fadeUp} className="about-copy">
            I like problems that refuse to respect a single discipline. A feature might
            need a model, a design system, and an API contract inside the same week, and
            I like being the person who doesn&apos;t have to hand that off.
          </motion.p>

          <motion.p variants={fadeUp} className="about-copy">
            Outside client work I photograph, shoot film, and keep a visual practice
            running. It&apos;s the same instinct as the engineering — pay attention, then
            strip out everything that doesn&apos;t earn its place.
          </motion.p>
        </motion.div>
      </div>

      {/* Full-bleed marquee — three cards, set twice for a seamless loop */}
      <motion.div
        initial={{ opacity: 0, y: 18 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={VIEWPORT}
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        className="marquee"
        style={{ marginTop: "var(--space-head)" }}
      >
        <div className="marquee-track">
          <CardSet />
          <div aria-hidden="true" className="marquee-dupe">
            <CardSet />
          </div>
        </div>
      </motion.div>
    </section>
  );
}