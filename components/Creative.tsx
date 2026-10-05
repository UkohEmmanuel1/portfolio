"use client";

import { motion } from "framer-motion";
import { FaCamera, FaFilm, FaPenNib } from "react-icons/fa";
import { SiFigma } from "react-icons/si";
import { VIEWPORT, fadeIn, fadeUp, stagger } from "@/components/motion";

const practices = [
  {
    title: "Photography",
    blurb:
      "Portrait, product, and documentary work — natural light where possible, and a lot of waiting for the frame that says more than the obvious one.",
    Icon: FaCamera,
  },
  {
    title: "Film & Motion",
    blurb:
      "Short-form video, brand motion, and editing. Cut for rhythm first, then trimmed until nothing is left that only exists to fill time.",
    Icon: FaFilm,
  },
  {
    title: "Visual Identity",
    blurb:
      "Marks, type systems, and design languages built to survive contact with real products — guidelines that a team will actually open.",
    Icon: SiFigma,
  },
  {
    title: "Art Direction",
    blurb:
      "Setting the visual logic of a project end to end, from the reference board through to the last component state and export.",
    Icon: FaPenNib,
  },
];

export default function Creative() {
  return (
    <section id="creative" className="section section-ink">
      <div className="shell">
        <motion.div
          variants={stagger(0.08)}
          initial="hidden"
          whileInView="visible"
          viewport={VIEWPORT}
        >
          <motion.div variants={fadeUp} className="eyebrow">
            <span className="eyebrow-index">04</span>
            <span className="eyebrow-rule" />
            <span>Creative</span>
          </motion.div>

          <div
            className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-4"
            style={{ marginBottom: "var(--space-head)" }}
          >
            <motion.h2
              variants={fadeUp}
              className="display-xl"
              style={{ color: "#fff", maxWidth: "24ch" }}
            >
              I make things look the way they work
            </motion.h2>
            <motion.p
              variants={fadeUp}
              className="body-text lg:text-right"
              style={{ color: "var(--on-dark-3)", maxWidth: "42ch" }}
            >
              Photography, film, and brand work — the same attention to detail as the
              engineering, pointed at how something looks and feels instead of how it
              computes.
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
          {practices.map((practice, i) => (
            <motion.article
              key={practice.title}
              variants={fadeIn}
              className="card group"
            >
              <div className="card-head">
                <span className="card-icon">
                  <practice.Icon size={17} />
                </span>
                <span className="mono-label card-index">
                  {String(i + 1).padStart(2, "0")}
                </span>
              </div>

              <h3 className="display-sm card-title" style={{ color: "#fff" }}>
                {practice.title}
              </h3>

              <p className="body-text card-desc">{practice.blurb}</p>
            </motion.article>
          ))}
        </motion.div>

        <motion.p
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={VIEWPORT}
          className="about-copy"
          style={{
            marginTop: "var(--space-head)",
            maxWidth: "62ch",
            color: "var(--on-dark-3)",
          }}
        >
          The two halves feed each other. Working on the visuals made me stricter
          about hierarchy and spacing in the products; building the products taught me
          that a design system nobody can maintain is just a mood board with extra
          steps.
        </motion.p>
      </div>
    </section>
  );
}