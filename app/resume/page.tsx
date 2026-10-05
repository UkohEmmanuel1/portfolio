"use client";

import { motion } from "framer-motion";
import { FaArrowLeft, FaPrint } from "react-icons/fa";
import Link from "next/link";

const experienceData = [
  {
    role: "Senior Software Engineer · ML & AI",
    company: "Freelance & Consulting",
    period: "2021 — 2023",
    desc: "Delivered 80+ high-performance web systems, ML inference APIs, and custom enterprise databases.",
    highlights: [
      "Developed custom classification and predictive models inside Next.js and Python services.",
      "Engineered PostgreSQL schemas with caching layers, cutting API latency by 45%.",
      "Built resilient CI/CD pipelines with GitHub Actions and Docker containerisation.",
    ],
  },
];

const educationData = [
  {
    degree: "BSc in Computer Science",
    institution: "University of Ibadan",
    period: "In Progress",
    focus:
      "Data Structures, Algorithms, Distributed Computing, Artificial Intelligence & Machine Learning",
  },
];

export default function ResumePage() {
  return (
    <div className="min-h-screen" style={{ background: "var(--ink)", padding: "clamp(2.5rem, 5vw, 4rem) 0" }}>
      <div className="shell" style={{ maxWidth: "62rem" }}>
        {/* Top bar */}
        <div className="flex items-center justify-between gap-4 mb-10">
          <Link
            href="/"
            className="mono-sm inline-flex items-center gap-2"
            style={{ color: "var(--on-dark-3)" }}
          >
            <FaArrowLeft size={12} />
            <span>Back to portfolio</span>
          </Link>

          <button onClick={() => window.print()} className="btn btn-primary">
            <FaPrint size={14} />
            <span>Print / PDF</span>
          </button>
        </div>

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="pb-6 mb-9"
          style={{ borderTop: "1px solid var(--line-strong)" }}
        >
          <div className="mono-label pt-5 mb-2.5" style={{ color: "var(--on-dark-4)" }}>
            Curriculum vitae
          </div>
          <h1 className="display-lg">Emmanuel David</h1>
          <p className="lead mt-2" style={{ color: "var(--on-dark-2)" }}>
            Software Engineer · Machine Learning · AI · Creative
          </p>

          <div
            className="flex flex-wrap gap-x-7 gap-y-1.5 mt-5 pt-4"
            style={{ borderTop: "1px solid var(--line-soft)" }}
          >
            {[
              "emmanuelukoh08@gmail.com",
              "+234 816 794 9054",
              "github.com/UkohEmmanuel1",
              "linkedin.com/in/emmanuel-david",
            ].map((c) => (
              <span key={c} className="mono-sm" style={{ color: "var(--on-dark-3)" }}>
                {c}
              </span>
            ))}
          </div>
        </motion.div>

        {/* Summary */}
        <section className="mb-12">
          <div className="eyebrow">
            <span className="eyebrow-index">01</span>
            <span className="eyebrow-rule" />
            <span>Executive summary</span>
          </div>
          <p className="lead" style={{ color: "var(--on-dark-2)", maxWidth: "72ch" }}>
            Software engineer working across machine learning, applied AI, and creative
            practice, with over five years designing distributed cloud systems, ML
            pipelines, and high-performance web platforms — alongside a personal practice
            in photography, film, and visual identity.
          </p>
        </section>

        {/* Experience */}
        <section className="mb-12">
          <div
            className="eyebrow"
            style={{ borderTop: "1px solid var(--line-strong)", paddingTop: "1.25rem" }}
          >
            <span className="eyebrow-index">02</span>
            <span className="eyebrow-rule" />
            <span>Professional experience</span>
          </div>

          {experienceData.map((job) => (
            <div
              key={job.role}
              className="grid grid-cols-1 md:grid-cols-[1fr_auto] gap-x-6 gap-y-3 py-5"
              style={{ borderTop: "1px solid var(--line-soft)" }}
            >
              <div>
                <h3 className="display-sm">{job.role}</h3>
                <div className="mono-sm mt-1.5" style={{ color: "var(--on-dark-4)" }}>
                  {job.company}
                </div>
              </div>

              <div className="mono-label md:pt-1" style={{ color: "var(--on-dark-4)" }}>
                {job.period}
              </div>

              <div className="md:col-span-2">
                <p className="body-text mb-3" style={{ color: "var(--on-dark-3)" }}>
                  {job.desc}
                </p>
                <ul className="flex flex-col gap-1.5">
                  {job.highlights.map((h) => (
                    <li
                      key={h}
                      className="body-text flex items-start gap-3"
                      style={{ color: "var(--on-dark-3)" }}
                    >
                      <span aria-hidden="true" style={{ color: "var(--signal)", lineHeight: 1.65 }}>
                        —
                      </span>
                      <span>{h}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </section>

        {/* Education */}
        <section className="mb-12">
          <div
            className="eyebrow"
            style={{ borderTop: "1px solid var(--line-strong)", paddingTop: "1.25rem" }}
          >
            <span className="eyebrow-index">03</span>
            <span className="eyebrow-rule" />
            <span>Education</span>
          </div>

          {educationData.map((edu) => (
            <div
              key={edu.degree}
              className="grid grid-cols-1 md:grid-cols-[1fr_auto] gap-x-6 gap-y-3 py-5"
              style={{ borderTop: "1px solid var(--line-soft)" }}
            >
              <div>
                <h3 className="display-sm">{edu.degree}</h3>
                <div className="mono-sm mt-1.5" style={{ color: "var(--on-dark-4)" }}>
                  {edu.institution}
                </div>
              </div>
              <div className="mono-label md:pt-1" style={{ color: "var(--on-dark-4)" }}>
                {edu.period}
              </div>
              <p className="body-text md:col-span-2" style={{ color: "var(--on-dark-3)" }}>
                {edu.focus}
              </p>
            </div>
          ))}
        </section>

        <div className="rule-ink-soft" />
        <p className="mono-label pt-6" style={{ color: "var(--on-dark-5)" }}>
          Emmanuel David — Software Engineer · Machine Learning · AI · Creative
        </p>
      </div>
    </div>
  );
}
