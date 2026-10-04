"use client";

import { motion } from "framer-motion";
import {
  SiNextdotjs,
  SiFastapi,
  SiPandas,
  SiTensorflow,
  SiDocker,
} from "react-icons/si";
import { VIEWPORT, fadeIn, fadeUp, stagger } from "@/components/motion";

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
          className="card-grid"
        >
          {disciplines.map((d, i) => (
            <motion.article key={d.title} variants={fadeIn} className="card">
              <div className="card-head">
                <span className="card-icon">
                  <d.Icon size={17} />
                </span>
                <span className="mono-label card-index">
                  {String(i + 1).padStart(2, "0")}
                </span>
              </div>

              <h3 className="display-sm card-title" style={{ color: "#fff" }}>
                {d.title}
              </h3>

              <p className="body-text card-desc">{d.blurb}</p>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
