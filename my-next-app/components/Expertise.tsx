"use client";

import { motion } from "framer-motion";
import {
  SiNextdotjs,
  SiTailwindcss,
  SiFastapi,
  SiNumpy,
  SiPandas,
  SiScikitlearn,
  SiTensorflow,
  SiPostgresql,
  SiMongodb,
  SiLinux,
  SiDocker,
  SiGit,
} from "react-icons/si";
import { VIEWPORT, fadeUp, slideIn, stagger } from "@/components/motion";

const disciplines = [
  {
    title: "Full-Stack Engineering",
    blurb:
      "End-to-end product build with React and Node on the front, Django, Laravel, and Express on the back, wired to the databases and services underneath.",
    Icon: SiNextdotjs,
  },
  {
    title: "Machine Learning",
    blurb:
      "Supervised and unsupervised models, deep learning, and computer vision built with TensorFlow and scikit-learn, containerised for reproducible inference.",
    Icon: SiTensorflow,
  },
  {
    title: "Data & Analytics",
    blurb:
      "Pipelines and aggregation across PostgreSQL and MongoDB, with business intelligence dashboards that turn raw records into decisions.",
    Icon: SiPandas,
  },
  {
    title: "API & Systems Design",
    blurb:
      "REST and realtime API architecture, secure authentication, and system design that holds up under real traffic.",
    Icon: SiFastapi,
  },
  {
    title: "Cloud & DevOps",
    blurb:
      "Deployment and CI/CD, containerised services, Linux administration, and observability that keeps releases boring.",
    Icon: SiDocker,
  },
];

const stack = [
  { name: "Next.js", Icon: SiNextdotjs },
  { name: "Django", Icon: SiFastapi },
  { name: "Laravel", Icon: SiNextdotjs },
  { name: "Tailwind", Icon: SiTailwindcss },
  { name: "NumPy", Icon: SiNumpy },
  { name: "scikit-learn", Icon: SiScikitlearn },
  { name: "TensorFlow", Icon: SiTensorflow },
  { name: "PostgreSQL", Icon: SiPostgresql },
  { name: "MongoDB", Icon: SiMongodb },
  { name: "Linux", Icon: SiLinux },
  { name: "Docker", Icon: SiDocker },
  { name: "Git", Icon: SiGit },
];

export default function Expertise() {
  return (
    <section id="expertise" className="section section-ink">
      <div className="shell">
        <motion.div
          variants={stagger(0.08)}
          initial="hidden"
          whileInView="visible"
          viewport={VIEWPORT}
        >
          <motion.div variants={fadeUp} className="eyebrow">
            <span className="eyebrow-index">03</span>
            <span className="eyebrow-rule" />
            <span>Expertise</span>
          </motion.div>

          <div
            className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-4"
            style={{ marginBottom: "var(--space-head)" }}
          >
            <motion.h2 variants={fadeUp} className="display-lg" style={{ maxWidth: "30ch" }}>
              Five disciplines, one operator
            </motion.h2>
            <motion.p
              variants={fadeUp}
              className="body-text lg:text-right"
              style={{ color: "var(--on-dark-3)", maxWidth: "42ch" }}
            >
              Engineering, modelling, and infrastructure handled in one place — no
              hand-offs between vendors or specialists.
            </motion.p>
          </div>
        </motion.div>

        <motion.div
          variants={stagger(0.06)}
          initial="hidden"
          whileInView="visible"
          viewport={VIEWPORT}
          className="rule-list"
        >
          {disciplines.map((d, i) => (
            <motion.div
              key={d.title}
              variants={slideIn}
              whileHover={{ x: 4 }}
              transition={{ duration: 0.2, ease: "easeOut" }}
              className="rule-row"
            >
              <div
                className="grid grid-cols-[1.6rem_1fr] md:grid-cols-[1.6rem_11rem_1fr] gap-x-4 md:gap-x-6"
              >
                <span className="mono-label rule-index" style={{ color: "var(--on-dark-6)" }}>
                  {String(i + 1).padStart(2, "0")}
                </span>
                <div className="flex items-center gap-2.5" style={{ marginBottom: "0.5rem", gridColumn: "2", gridRow: "1" }}>
                  <d.Icon size={15} style={{ color: "var(--signal)", flex: "none" }} />
                  <span className="display-sm" style={{ color: "#fff" }}>
                    {d.title}
                  </span>
                </div>
                <p
                  className="body-text md:text-right"
                  style={{
                    color: "var(--on-dark-3)",
                    gridColumn: "2",
                    gridRow: "2",
                    maxWidth: "60ch",
                  }}
                >
                  {d.blurb}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={VIEWPORT}
          transition={{ duration: 0.6 }}
          className="flex flex-wrap items-center gap-x-5 gap-y-2.5"
          style={{ marginTop: "clamp(2rem, 4vw, 3rem)" }}
        >
          {stack.map((s) => (
            <span
              key={s.name}
              className="flex items-center gap-1.5"
              style={{ color: "var(--on-dark-4)" }}
            >
              <s.Icon size={13} />
              <span className="mono-sm">{s.name}</span>
            </span>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
