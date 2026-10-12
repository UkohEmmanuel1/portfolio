"use client";

import { motion } from "framer-motion";
import { FaGithub } from "react-icons/fa";
import {
  SiBitcoin,
  SiNestjs,
  SiNextdotjs,
  SiOpenai,
  SiShieldsdotio,
  SiTensorflow,
} from "react-icons/si";
import { VIEWPORT, fadeIn, fadeUp, stagger } from "@/components/motion";

const projects = [
  {
    title: "Nexus AI",
    desc: "Intelligent retrieval-augmented generation platform for processing documents, retrieving contextual information, and generating grounded responses.",
    Icon: SiOpenai,
    href: undefined as string | undefined,
  },
  {
    title: "Apex Autonomous Market Intelligence Agent",
    desc: "AI-powered market intelligence system combining autonomous agents, computer vision, and vector search to analyse and extract insight from market data.",
    Icon: SiTensorflow,
    href: undefined as string | undefined,
  },
  {
    title: "DigiDrop",
    desc: "Web3 platform integrating wallet authentication, blockchain infrastructure, referral systems, and a modern Next.js interface.",
    Icon: SiNextdotjs,
    href: undefined as string | undefined,
  },
  {
    title: "AI Blockchain Personal Finance Guardian",
    desc: "AI-powered financial assistant designed to help users track, understand, and manage financial activity through automated interactions.",
    Icon: SiBitcoin,
    href: undefined as string | undefined,
  },
  {
    title: "Deep Learning Cybersecurity Suite",
    desc: "Machine-learning security system for real-time anomaly detection and intelligent threat analysis.",
    Icon: SiShieldsdotio,
    href: undefined as string | undefined,
  },
  {
    title: "Aurikrex EdTech",
    desc: "Full-stack education platform with secure authentication, REST APIs, database infrastructure, and scalable backend architecture.",
    Icon: SiNestjs,
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
              Systems I&apos;ve designed and engineered
            </motion.h2>
            <motion.p
              variants={fadeUp}
              className="body-text lg:text-right"
              style={{ color: "var(--on-dark-3)", maxWidth: "46ch" }}
            >
              A selection of work across AI, software infrastructure, fintech, Web3, and
              intelligent applications.
            </motion.p>
          </div>
        </motion.div>

        <motion.div
          variants={stagger(0.06)}
          initial="hidden"
          whileInView="visible"
          viewport={VIEWPORT}
          className="card-grid"
        >
          {projects.map((project, index) => (
            <motion.article key={project.title} variants={fadeIn} className="card group">
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
            </motion.article>
          ))}
        </motion.div>

        {/* Source link */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={VIEWPORT}
          transition={{ duration: 0.6 }}
          className="flex items-center justify-end"
          style={{ marginTop: "1.5rem" }}
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
