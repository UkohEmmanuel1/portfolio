"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { EASE } from "@/components/motion";

/* Icons are inlined rather than pulled from a package: three 24px
   outlines are cheaper than a dependency, and these paths are the
   lucide geometry, so swapping in lucide later is a one-line change
   per icon. The wrapper only exists to hold the shared attributes. */
function Icon({ children }: { children: React.ReactNode }) {
  return (
    <svg
      width={18}
      height={18}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      {children}
    </svg>
  );
}

function EyeIcon() {
  return (
    <Icon>
      <path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z" />
      <circle cx="12" cy="12" r="3" />
    </Icon>
  );
}

function MessageIcon() {
  return (
    <Icon>
      <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
    </Icon>
  );
}

function DownloadIcon() {
  return (
    <Icon>
      <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
      <polyline points="7 10 12 15 17 10" />
      <line x1="12" y1="15" y2="3" />
    </Icon>
  );
}

export default function Hero() {
  return (
    <section id="home" className="hero">
      <motion.div
        initial={{ opacity: 0, y: 18 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: EASE }}
        className="hero-inner"
      >
        {/* One h1 for the page. The role line is a p rather than a
           second h1 — same visual treatment, but it leaves a single
           document subject instead of two competing ones.

           Greeting and role pin under the navbar while the paragraphs
           and pills below scroll beneath them. A plain div, not a
           motion one: the entrance transform lives on .hero-inner, and
           a transformed ancestor does not create a scrollport, so the
           sticky is unaffected either way. */}
        <div className="section-head">
          <h1 className="hero-greeting">Hi, I&rsquo;m Emmanuel David.</h1>

          <p className="hero-role">
            Software Engineer <span aria-hidden="true">&middot;</span> Machine
            Learning <span aria-hidden="true">&middot;</span> AI{" "}
            <span aria-hidden="true">&middot;</span> Creative
          </p>
        </div>

        <p className="hero-body" style={{ marginTop: "1.5rem", marginBottom: "1.5rem" }}>
          I build software that holds up — machine learning systems, applied AI,
          and the visual and interaction design that makes them feel considered
          rather than merely functional.
        </p>

        <p className="hero-body" style={{ marginBottom: "3rem" }}>
          Most of my work sits where engineering and craft overlap: shipping an
          interface, then the models and infrastructure behind it.
        </p>

        <div className="hero-actions">
          <a href="#expertise" className="hero-pill">
            <EyeIcon />
            View expertise
          </a>
          <a href="#contact" className="hero-pill">
            <MessageIcon />
            Start a project
          </a>
          <Link href="/resume" className="hero-pill">
            <DownloadIcon />
            Resume
          </Link>
        </div>
      </motion.div>
    </section>
  );
}