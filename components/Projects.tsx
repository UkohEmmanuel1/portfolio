"use client";

import { motion } from "framer-motion";
import { FaCamera, FaGithub } from "react-icons/fa";
import {
  SiBitcoin,
  SiNextdotjs,
  SiOpenai,
  SiShieldsdotio,
  SiTensorflow,
} from "react-icons/si";
import { EASE, VIEWPORT, fadeIn, fadeUp, stagger } from "@/components/motion";

const projects = [
  {
    title: "Nexus AI",
    desc: "Retrieval-augmented generation platform for working through large document sets — grounded answers, citations, and evaluation on every query.",
    Icon: SiOpenai,
    href: undefined as string | undefined,
  },
  {
    title: "Apex Autonomous Market Intelligence Agent",
    desc: "Autonomous agents combining computer vision and vector search to analyse market data and surface the insight worth acting on.",
    Icon: SiTensorflow,
    href: undefined as string | undefined,
  },
  {
    title: "DigiDrop",
    desc: "Web3 platform with wallet authentication, blockchain infrastructure, referral systems, and an interface that stays fast as it grows.",
    Icon: SiNextdotjs,
    href: undefined as string | undefined,
  },
  {
    title: "AI Blockchain Personal Finance Guardian",
    desc: "A financial assistant that tracks activity and explains it in plain language, so on-chain behaviour is legible instead of cryptic.",
    Icon: SiBitcoin,
    href: undefined as string | undefined,
  },
  {
    title: "Deep Learning Cybersecurity Suite",
    desc: "Machine-learning detection for live network traffic — anomaly scoring and threat analysis at the pace real systems produce events.",
    Icon: SiShieldsdotio,
    href: undefined as string | undefined,
  },
  {
    title: "Visual Practice",
    desc: "Ongoing photography, film, and brand work — portraiture, product imagery, and identity systems built to be used rather than just admired.",
    Icon: FaCamera,
    href: undefined as string | undefined,
  },
];

function ArrowOut({ size = 12 }: { size?: number }) {
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
      <path d="M7 17 17 7" />
      <path d="M8 7h9v9" />
    </svg>
  );
}

function ProjectCard({
  project,
  index,
}: {
  project: (typeof projects)[number];
  index: number;
}) {
  return (
    <article className="marquee-card marquee-card--panel group">
      <div className="card-head">
        <span className="card-icon">
          <project.Icon size={17} />
        </span>
        <span className="mono-label card-index">
          {String(index + 1).padStart(2, "0")}
        </span>
      </div>

      {project.href ? (
        <a
          href={project.href}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-baseline gap-2 no-underline"
          style={{ color: "inherit" }}
        >
          <h3 className="display-sm card-title transition-colors duration-200 group-hover:text-[var(--signal)]">
            {project.title}
          </h3>
          <ArrowOut />
        </a>
      ) : (
        <h3 className="display-sm card-title">{project.title}</h3>
      )}

      <p className="body-text card-desc">{project.desc}</p>
    </article>
  );
}

/* Fragment, not a wrapper, so the track's own gap stays the only
   spacing and the duplicate set lines up with the original. The
   offset keeps the 01..06 labels running across both rows instead
   of restarting at 01 in the second one. */
function ProjectRow({
  items,
  offset,
}: {
  items: (typeof projects)[number][];
  offset: number;
}) {
  return (
    <>
      {items.map((project, i) => (
        <ProjectCard
          key={project.title}
          project={project}
          index={offset + i}
        />
      ))}
    </>
  );
}

/* Three per row, so each row scrolls as its own loop. The track
   translates exactly one set, which is three cards plus three
   gaps — matching the -50% - gap/2 keyframe. */
const ROWS = [projects.slice(0, 3), projects.slice(3, 6)];

export default function Projects() {
  return (
    <section id="projects" className="section section-ink">
      <div className="shell">
        <motion.div
          variants={stagger(0.08)}
          initial="hidden"
          whileInView="visible"
          viewport={VIEWPORT}
        >
          <motion.div variants={fadeUp} className="eyebrow">
            <span className="eyebrow-index">02</span>
            <span className="eyebrow-rule" />
            <span>Selected projects</span>
          </motion.div>

          <div
            className="grid grid-cols-1 lg:grid-cols-[1.15fr_1fr] gap-x-8 gap-y-3 items-end"
            style={{ marginBottom: "var(--space-head)" }}
          >
            <motion.h2 variants={fadeUp} className="display-lg" style={{ maxWidth: "30ch" }}>
              Things I&apos;ve designed, built, and shipped
            </motion.h2>
            <motion.p
              variants={fadeUp}
              className="body-text lg:text-right"
              style={{ color: "var(--on-dark-3)", maxWidth: "46ch" }}
            >
              A selection across applied AI, software infrastructure, fintech, Web3, and
              visual work — each one something I took from idea to shipped.
            </motion.p>
          </div>
        </motion.div>
      </div>

      {/* Full-bleed marquees — two rows of three. Row two runs
          reversed and shifted half a card, so the card edges
          stagger instead of lining up with row one. */}
      <div
        className="flex flex-col gap-[var(--gap-card)]"
        style={{ marginTop: "var(--space-head)" }}
      >
        {ROWS.map((row, r) => (
          <motion.div
            key={row[0].title}
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={VIEWPORT}
            transition={{ duration: 0.8, ease: EASE }}
            className="marquee marquee--stack"
          >
            <div
              className={
                r === 1
                  ? "marquee-track marquee-track--reverse marquee-track--offset"
                  : "marquee-track"
              }
            >
              <ProjectRow items={row} offset={r * 3} />
              <div aria-hidden="true" className="marquee-dupe">
                <ProjectRow items={row} offset={r * 3} />
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      <div className="shell">
        {/* Source link */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={VIEWPORT}
          transition={{ duration: 0.6 }}
          className="flex items-center justify-end"
          style={{ marginTop: "var(--space-head)" }}
        >
          <a
            href="https://github.com/UkohEmmanuel1"
            target="_blank"
            rel="noopener noreferrer"
            className="mono-sm inline-flex items-center gap-2"
            style={{ color: "var(--on-dark-3)" }}
          >
            <FaGithub size={14} />
            <span>All source on GitHub</span>
          </a>
        </motion.div>
      </div>
    </section>
  );
}
