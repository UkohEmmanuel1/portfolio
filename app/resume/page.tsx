"use client";

import type { ReactNode } from "react";
import { motion } from "framer-motion";
import { FaArrowLeft, FaDownload, FaPrint } from "react-icons/fa";
import Link from "next/link";

const experience = [
  {
    role: "Software Developer",
    company: "Marque Group",
    period: "Feb 2026 to Present",
    description: "Develop backend microservices, data pipelines, and relational models. Work includes secure authentication, role-based access control, internal administration portals, deployment configuration, and production incident response.",
  },
  {
    role: "Full Stack Developer Intern",
    company: "XStakUp",
    period: "Aug 2025 to Present",
    description: "Built and optimised responsive interfaces, integrated asynchronous REST APIs, improved rendering efficiency, resolved linting and CI/CD issues, and collaborated during Agile sprints on accessibility and performance improvements.",
  },
];

const skills = [
  ["Machine Learning & AI", "Retrieval-augmented generation (RAG), FAISS vector search, PyTorch, OpenCV, MediaPipe, LLMs, model benchmarking and calibration."],
  ["Programming Languages", "Python, TypeScript, C++, SQL."],
  ["Backend Engineering", "Django, Django REST Framework, FastAPI, Node.js, Express, REST APIs, microservices, distributed systems."],
  ["Frontend Development", "Next.js, React, React Native, Tailwind CSS, Zustand, Redux, Framer Motion."],
  ["Databases & Analytics", "PostgreSQL, MongoDB, Supabase, database design and optimisation, BI analytics."],
  ["Cloud & Developer Tools", "Git, Docker, Kubernetes, Linux/Bash, CI/CD."],
];

const projects = [
  {
    title: "Nexus AI",
    description: "Developed an open-source LLM framework and full-stack AI platform with advanced reasoning, multimodal processing, autonomous agents, Mixture-of-Experts (MoE), retrieval-augmented generation, semantic search, real-time streaming, and scalable backend infrastructure.",
  },
  {
    title: "The Confident Failure Benchmark (CFB)",
    description: "Designed an AI evaluation framework for model self-calibration, confidence scoring, and hallucination rates on STEM reasoning tasks. Constructed deterministic datasets, developed ground-truth scoring procedures, and documented the framework for an AI/AGI research hackathon submission.",
  },
  {
    title: "Aurikrex Academy (FalkeAI)",
    description: "Built an adaptive AI educational engine with automated lesson-tree generation, modular learning pathways, email OTP authentication, JWT sessions, activity tracking, and adaptive feedback based on learner performance.",
  },
  {
    title: "Digidrops",
    description: "Developed a BNB Smart Chain application platform with Soulbound Token quest tracking and referral incentives. Integrated multiple wallet adapters and optimised smart-contract RPC interactions.",
  },
  {
    title: "Elium AI",
    description: "Developed a lightweight, multilingual offline STEM tutor for learners with limited internet connectivity. Deployed a quantised Qwen3 model, with the CV reporting 84% offline operation on budget hardware.",
  },
];

function ResumeSection({ index, title, children }: { index: string; title: string; children: ReactNode }) {
  return (
    <section className="mb-12" aria-labelledby={`resume-section-${index}`}>
      <h2 id={`resume-section-${index}`} className="eyebrow" style={{ borderTop: "1px solid var(--line-strong)", paddingTop: "1.25rem" }}>
        <span className="eyebrow-index" aria-hidden="true">{index}</span>
        <span className="eyebrow-rule" aria-hidden="true" />
        <span>{title}</span>
      </h2>
      {children}
    </section>
  );
}

export default function ResumePage() {
  return (
    <main id="main-content" className="min-h-screen" style={{ background: "var(--ink)", padding: "clamp(2.5rem, 5vw, 4rem) 0" }}>
      <div className="shell">
        <div className="flex flex-wrap items-center justify-between gap-4 mb-10 print:hidden">
          <Link href="/" className="mono-sm inline-flex items-center gap-2" style={{ color: "var(--on-dark-3)" }}>
            <FaArrowLeft size={12} aria-hidden="true" />
            <span>Back to portfolio</span>
          </Link>
          <div className="flex flex-wrap gap-2">
            <a href="/Ukoh_Emmanuel_David_CV.pdf" download className="btn btn-primary">
              <FaDownload size={14} aria-hidden="true" />
              <span>Download CV</span>
            </a>
            <button onClick={() => window.print()} className="btn btn-glass">
              <FaPrint size={14} aria-hidden="true" />
              <span>Print</span>
            </button>
          </div>
        </div>

        <motion.div initial={{ opacity: 0, y: 14 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }} className="pb-6 mb-9" style={{ borderTop: "1px solid var(--line-strong)" }}>
          <div className="mono-label pt-5 mb-2.5" style={{ color: "var(--on-dark-4)" }}>Curriculum vitae</div>
          <h1 className="display-lg">Ukoh Emmanuel David</h1>
          <p className="lead mt-2" style={{ color: "var(--on-dark-2)" }}>Full Stack and Machine Learning Engineer</p>
          <div className="flex flex-wrap gap-x-7 gap-y-2 mt-5 pt-4 mono-sm" style={{ borderTop: "1px solid var(--line-soft)", color: "var(--on-dark-3)" }}>
            <a href="mailto:emmanuelukoh08@gmail.com" className="break-all">emmanuelukoh08@gmail.com</a>
            <a href="tel:+2348167949054">+234 816 794 9054</a>
            <span>Lagos, Nigeria</span>
            <a href="https://github.com/UkohEmmanuel1" target="_blank" rel="noopener noreferrer">GitHub</a>
            <a href="https://www.linkedin.com/in/emmanueldavidukoh" target="_blank" rel="noopener noreferrer">LinkedIn</a>
          </div>
        </motion.div>

        <ResumeSection index="01" title="Professional summary">
          <p className="lead" style={{ color: "var(--on-dark-2)", maxWidth: "72ch" }}>
            Full Stack and Machine Learning Engineer with hands-on experience delivering production web platforms and AI-driven systems using Django, FastAPI, Next.js, React, and applied machine learning. Directing architecture and engineering delivery while contributing to enterprise interfaces and backend services. Experienced across API design, data modelling, retrieval-augmented generation, deployment, and production monitoring.
          </p>
        </ResumeSection>

        <ResumeSection index="02" title="Core skills and tools">
          <dl className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-5">
            {skills.map(([name, tools]) => (
              <div key={name}>
                <dt className="mono-sm mb-1.5" style={{ color: "var(--offwhite)" }}>{name}</dt>
                <dd className="body-text" style={{ color: "var(--on-dark-3)" }}>{tools}</dd>
              </div>
            ))}
          </dl>
        </ResumeSection>

        <ResumeSection index="03" title="Professional experience">
          {experience.map(job => (
            <article key={job.company} className="grid grid-cols-1 md:grid-cols-[1fr_auto] gap-x-6 gap-y-3 py-5" style={{ borderTop: "1px solid var(--line-soft)" }}>
              <div><h3 className="display-sm">{job.role}</h3><p className="mono-sm mt-1.5" style={{ color: "var(--on-dark-4)" }}>{job.company}</p></div>
              <p className="mono-label md:pt-1" style={{ color: "var(--on-dark-4)" }}>{job.period}</p>
              <p className="body-text md:col-span-2" style={{ color: "var(--on-dark-3)" }}>{job.description}</p>
            </article>
          ))}
        </ResumeSection>

        <ResumeSection index="04" title="Featured projects">
          {projects.map(project => (
            <article key={project.title} className="py-5" style={{ borderTop: "1px solid var(--line-soft)" }}>
              <h3 className="display-sm mb-3">{project.title}</h3>
              <p className="body-text" style={{ color: "var(--on-dark-3)" }}>{project.description}</p>
            </article>
          ))}
        </ResumeSection>

        <ResumeSection index="05" title="Education">
          <div className="grid grid-cols-1 md:grid-cols-[1fr_auto] gap-x-6 gap-y-3 py-5">
            <div><h3 className="display-sm">B.Sc. Computer Science</h3><p className="mono-sm mt-1.5" style={{ color: "var(--on-dark-4)" }}>University of Ibadan</p></div>
            <p className="mono-label md:pt-1" style={{ color: "var(--on-dark-4)" }}>2025 to 2029</p>
            <p className="body-text md:col-span-2" style={{ color: "var(--on-dark-3)" }}>In progress</p>
          </div>
        </ResumeSection>

        <ResumeSection index="06" title="Certifications">
          <ul className="body-text flex flex-col gap-3" style={{ color: "var(--on-dark-3)" }}>
            <li>Google Project Management Professional, Coursera</li>
            <li>System Design &amp; API Architecture Fundamentals</li>
            <li>Frontend and backend development</li>
          </ul>
        </ResumeSection>

        <div className="rule-ink-soft" />
        <p className="mono-label pt-6" style={{ color: "var(--on-dark-5)" }}>Ukoh Emmanuel David | Full Stack and Machine Learning Engineer</p>
      </div>
    </main>
  );
}
