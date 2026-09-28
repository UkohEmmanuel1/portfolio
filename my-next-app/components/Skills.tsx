"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  FaReact,
  FaNodeJs,
  FaAws,
  FaDocker,
  FaGitAlt,
  FaPython,
} from "react-icons/fa";
import {
  SiTypescript,
  SiJavascript,
  SiMongodb,
  SiPostgresql,
  SiExpress,
  SiNestjs,
  SiAwslambda,
  SiAmazoncloudwatch,
  SiTerraform,
  SiJenkins,
  SiKubernetes,
  SiDynatrace,
  SiElasticsearch,
  SiCplusplus,
  SiJira,
  SiGrafana,
  SiPrometheus,
  SiAmazonrds,
  SiFirebase,
  SiPuppeteer,
  SiNextdotjs,
  SiTailwindcss,
  SiRedux,
  SiPytorch,
  SiTensorflow,
  SiScikitlearn,
  SiRedis,
  SiOpenai,
} from "react-icons/si";
import { EASE, VIEWPORT, fadeUp, stagger } from "@/components/motion";

type CategoryKey = "all" | "languages" | "web" | "ml" | "cloud" | "data";

interface Skill {
  name: string;
  category: Exclude<CategoryKey, "all">;
  icon: React.ComponentType<{ size?: number }>;
}

const allSkills: Skill[] = [
  { name: "Python", category: "languages", icon: FaPython },
  { name: "TypeScript", category: "languages", icon: SiTypescript },
  { name: "JavaScript", category: "languages", icon: SiJavascript },
  { name: "C++", category: "languages", icon: SiCplusplus },

  { name: "Next.js", category: "web", icon: SiNextdotjs },
  { name: "React", category: "web", icon: FaReact },
  { name: "Node.js", category: "web", icon: FaNodeJs },
  { name: "Express.js", category: "web", icon: SiExpress },
  { name: "NestJS", category: "web", icon: SiNestjs },
  { name: "Tailwind CSS", category: "web", icon: SiTailwindcss },
  { name: "Redux", category: "web", icon: SiRedux },
  { name: "Puppeteer", category: "web", icon: SiPuppeteer },

  { name: "PyTorch", category: "ml", icon: SiPytorch },
  { name: "TensorFlow", category: "ml", icon: SiTensorflow },
  { name: "Scikit-Learn", category: "ml", icon: SiScikitlearn },
  { name: "OpenAI / LLMs", category: "ml", icon: SiOpenai },

  { name: "AWS", category: "cloud", icon: FaAws },
  { name: "Docker", category: "cloud", icon: FaDocker },
  { name: "Kubernetes", category: "cloud", icon: SiKubernetes },
  { name: "Terraform", category: "cloud", icon: SiTerraform },
  { name: "AWS Lambda", category: "cloud", icon: SiAwslambda },
  { name: "Jenkins", category: "cloud", icon: SiJenkins },
  { name: "Git", category: "cloud", icon: FaGitAlt },
  { name: "Grafana", category: "cloud", icon: SiGrafana },
  { name: "Prometheus", category: "cloud", icon: SiPrometheus },
  { name: "ELK Stack", category: "cloud", icon: SiElasticsearch },
  { name: "Dynatrace", category: "cloud", icon: SiDynatrace },
  { name: "Jira", category: "cloud", icon: SiJira },
  { name: "CloudWatch", category: "cloud", icon: SiAmazoncloudwatch },

  { name: "PostgreSQL", category: "data", icon: SiPostgresql },
  { name: "MongoDB", category: "data", icon: SiMongodb },
  { name: "Redis", category: "data", icon: SiRedis },
  { name: "Amazon RDS", category: "data", icon: SiAmazonrds },
  { name: "Firebase", category: "data", icon: SiFirebase },
];

const categories: { key: CategoryKey; label: string }[] = [
  { key: "all", label: "All" },
  { key: "languages", label: "Languages" },
  { key: "web", label: "Web" },
  { key: "ml", label: "AI & ML" },
  { key: "cloud", label: "Cloud" },
  { key: "data", label: "Data" },
];

export default function Skills() {
  const [active, setActive] = useState<CategoryKey>("all");

  const visible =
    active === "all" ? allSkills : allSkills.filter((s) => s.category === active);

  return (
    <section id="skills" className="section section-ink">
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
            <span>Technical stack</span>
          </motion.div>

          <div
            className="grid grid-cols-1 lg:grid-cols-[1.15fr_1fr] gap-x-8 gap-y-3 items-end"
            style={{ marginBottom: "var(--space-head)" }}
          >
            <motion.h2 variants={fadeUp} className="display-lg" style={{ maxWidth: "30ch" }}>
              Tools chosen for the problem
            </motion.h2>
            <motion.p
              variants={fadeUp}
              className="body-text lg:text-right"
              style={{ color: "var(--on-dark-3)", maxWidth: "46ch" }}
            >
              A stack picked for high availability, inference workloads, distributed
              services, and products that need to scale past the first thousand users.
            </motion.p>
          </div>
        </motion.div>

        {/* Filters — the active pill slides between options */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={VIEWPORT}
          transition={{ duration: 0.5, ease: EASE }}
          className="flex flex-wrap items-center gap-1.5"
          style={{ borderTop: "1px solid var(--line-strong)", paddingTop: "1rem" }}
        >
          {categories.map((cat) => {
            const isActive = active === cat.key;
            return (
              <button
                key={cat.key}
                onClick={() => setActive(cat.key)}
                className="relative"
                style={{
                  padding: "0.4rem 0.7rem",
                  borderRadius: "999px",
                  cursor: "pointer",
                  fontFamily: "var(--font-mono-jb), ui-monospace, monospace",
                  fontSize: "0.6875rem",
                  letterSpacing: "0.1em",
                  textTransform: "uppercase",
                  lineHeight: 1,
                  color: isActive ? "#050505" : "var(--on-dark-3)",
                  transition: "color 0.18s ease",
                }}
              >
                {isActive && (
                  <motion.span
                    layoutId="skillPill"
                    className="absolute inset-0 rounded-full"
                    style={{ background: "#f4f4ef" }}
                    transition={{ type: "spring", stiffness: 400, damping: 34 }}
                  />
                )}
                <span className="relative" style={{ padding: "0 0.1rem" }}>
                  {cat.label}
                </span>
              </button>
            );
          })}
        </motion.div>

        {/* Tag cloud */}
        <motion.div
          layout
          className="flex flex-wrap gap-x-7 gap-y-2.5"
          style={{ borderTop: "1px solid var(--line-soft)", paddingTop: "1.25rem" }}
        >
          <AnimatePresence mode="popLayout">
            {visible.map((skill) => {
              const Icon = skill.icon;
              return (
                <motion.span
                  layout
                  key={skill.name}
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -8 }}
                  transition={{ duration: 0.25, ease: EASE }}
                  whileHover={{ y: -2 }}
                  className="inline-flex items-center gap-1.5"
                  style={{ color: "var(--on-dark-5)" }}
                >
                  <Icon size={14} />
                  <span className="mono-sm" style={{ color: "var(--on-dark-2)" }}>
                    {skill.name}
                  </span>
                </motion.span>
              );
            })}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}
