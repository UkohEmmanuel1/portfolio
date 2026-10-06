"use client";

import { motion } from "framer-motion";
import {
  SiNextdotjs,
  SiTensorflow,
  SiOpenai,
  SiFigma,
} from "react-icons/si";
import { EASE, VIEWPORT, fadeUp, stagger } from "@/components/motion";

const disciplines = [
  {
    title: "Software Engineering",
    blurb:
      "Web platforms built end to end — React and Node in front, Django, Laravel, and Express behind, wired to the databases and services underneath.",
    Icon: SiNextdotjs,
  },
  {
    title: "Machine Learning",
    blurb:
      "Supervised and unsupervised models, deep learning, and computer vision with TensorFlow and scikit-learn, containerised so inference is reproducible.",
    Icon: SiTensorflow,
  },
  {
    title: "Applied AI",
    blurb:
      "Retrieval, agents, and LLM-backed features moved out of the notebook and into production, with evaluation, guardrails, and cost that stays predictable.",
    Icon: SiOpenai,
  },
  {
    title: "Creative",
    blurb:
      "Photography, film, and visual identity — art direction, type, and design systems made to be used rather than admired and left behind.",
    Icon: SiFigma,
  },
];

function DisciplineCard({
  discipline,
  index,
}: {
  discipline: (typeof disciplines)[number];
  index: number;
}) {
  return (
    <article className="marquee-card marquee-card--panel">
      <div className="card-head">
        <span className="card-icon">
          <discipline.Icon size={17} />
        </span>
        <span className="mono-label card-index">
          {String(index + 1).padStart(2, "0")}
        </span>
      </div>

      <h3 className="display-sm card-title" style={{ color: "var(--offwhite)" }}>
        {discipline.title}
      </h3>

      <p className="body-text card-desc">{discipline.blurb}</p>
    </article>
  );
}

/* Fragment, not a wrapper, so the track's own gap stays the only
   spacing and the duplicate set lines up with the original. */
function DisciplineSet() {
  return (
    <>
      {disciplines.map((discipline, index) => (
        <DisciplineCard key={discipline.title} discipline={discipline} index={index} />
      ))}
    </>
  );
}

export default function Expertise() {
  return (
    <section id="expertise" className="section section-ink">
      {/* Head and marquee are siblings inside .section-stack, not
          siblings inside .shell — the head's direct parent has to
          outlast the marquee for the sticky pin to have anywhere
          to travel. */}
      <div className="section-stack">
        <div className="section-head">
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
                <span>Expertise</span>
              </motion.div>

              <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-4">
                <motion.h2
                  variants={fadeUp}
                  className="display-lg"
                  style={{ maxWidth: "30ch" }}
                >
                  Four clear pillars
                </motion.h2>
                <motion.p
                  variants={fadeUp}
                  className="body-text lg:text-right"
                  style={{ color: "var(--on-dark-3)", maxWidth: "42ch" }}
                >
                  One person carrying the whole thing — engineering, modelling, and visual
                  craft, without the hand-off in the middle.
                </motion.p>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Full-bleed marquee, reversed against the About strip above it
            — four cards, set twice for a seamless loop */}
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={VIEWPORT}
          transition={{ duration: 0.8, ease: EASE }}
          className="marquee marquee--stack"
          style={{ marginTop: "var(--space-head)" }}
        >
          <div className="marquee-track marquee-track--reverse">
            <DisciplineSet />
            <div aria-hidden="true" className="marquee-dupe">
              <DisciplineSet />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
