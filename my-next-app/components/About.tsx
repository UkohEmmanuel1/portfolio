"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { FaGraduationCap } from "react-icons/fa";
import { EASE, VIEWPORT, fadeUp, slideIn, stagger } from "@/components/motion";

export default function About() {
  return (
    <section id="about" className="section section-ink">
      <div className="shell">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-20 items-start">
          {/* Bio */}
          <motion.div
            variants={stagger(0.07)}
            initial="hidden"
            whileInView="visible"
            viewport={VIEWPORT}
          >
            <motion.div variants={fadeUp} className="eyebrow">
              <span className="eyebrow-index">01</span>
              <span className="eyebrow-rule" />
              <span>About</span>
            </motion.div>

            <motion.h2
              variants={fadeUp}
              className="display-lg"
              style={{ maxWidth: "34ch", marginBottom: "1.5rem" }}
            >
              Architecting intelligent, scalable systems
            </motion.h2>

            <motion.div
              variants={stagger(0.06)}
              className="prose"
              style={{ maxWidth: "62ch" }}
            >
              <motion.p
                variants={slideIn}
                className="lead"
                style={{ color: "var(--on-dark-2)" }}
              >
                I&apos;m a{" "}
                <strong style={{ color: "#fff", fontWeight: 600 }}>
                  Full-Stack Developer, Machine Learning Developer, and Business
                  Intelligence Specialist
                </strong>{" "}
                with 5+ years of experience, specializing in building scalable web
                applications, intelligent systems, and data-driven solutions that power
                enterprise-level businesses.
              </motion.p>

              <motion.p
                variants={slideIn}
                className="body-text"
                style={{ color: "var(--on-dark-3)" }}
              >
                My expertise lies in designing robust digital solutions that combine web
                development, machine learning, and business intelligence to solve complex
                problems while ensuring performance, security, and scalability.
              </motion.p>

              <motion.p
                variants={slideIn}
                className="body-text"
                style={{ color: "var(--on-dark-3)" }}
              >
                I approach every project with analytical thinking, technical precision,
                and creative problem-solving. I focus on delivering solutions that drive
                real results.
              </motion.p>

              <motion.p
                variants={slideIn}
                className="body-text"
                style={{ color: "var(--on-dark-3)" }}
              >
                Curious by nature, I thrive on challenging projects that require
                innovative solutions and meticulous execution.
              </motion.p>

              <motion.p
                variants={slideIn}
                className="body-text"
                style={{ color: "var(--on-dark-3)" }}
              >
                Beyond development, I&apos;m passionate about exploring emerging
                technologies.
              </motion.p>
            </motion.div>
          </motion.div>

          {/* Portrait + education, sticky alongside the bio */}
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={VIEWPORT}
            transition={{ duration: 0.8, ease: EASE }}
            className="flex flex-col gap-4 lg:sticky lg:top-24"
          >
            <div className="media-frame group">
              <Image
                src="/image/about.jpg"
                alt="Emmanuel David"
                fill
                sizes="(max-width: 1024px) 100vw, 40rem"
                className="object-cover"
                style={{ objectPosition: "center 30%" }}
              />
            </div>

            <div className="flex items-start justify-between gap-5 pt-4 rule-faint">
              <div>
                <div
                  className="mono-label"
                  style={{ color: "var(--on-dark-4)", marginBottom: "0.5rem" }}
                >
                  Degree &amp; focus
                </div>
                <h3 className="display-sm" style={{ color: "#fff" }}>
                  BSc in Computer Science
                </h3>
                <p
                  className="body-text"
                  style={{ color: "var(--on-dark-3)", marginTop: "0.25rem" }}
                >
                  University of Ibadan — in progress
                </p>
              </div>

              <div
                className="flex items-center justify-center shrink-0"
                style={{
                  width: "2.5rem",
                  height: "2.5rem",
                  borderRadius: "0.9rem",
                  border: "1px solid var(--line)",
                  color: "var(--signal)",
                }}
              >
                <FaGraduationCap size={18} />
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
