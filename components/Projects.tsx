"use client";


import { FaCamera, FaGithub } from "react-icons/fa";
import {
  SiBitcoin,
  SiNextdotjs,
  SiOpenai,
  SiShieldsdotio,
  SiTensorflow,
} from "react-icons/si";



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

export default function Projects() {
 return <section id="projects" className="section section-ink"><div className="shell"><div className="section-heading"><div><p className="eyebrow"><span className="eyebrow-index">03</span> Selected projects</p><h2 className="display-lg">Ideas turned into<br />real-world systems.</h2></div><p className="body-text">A selection across applied AI, software infrastructure, fintech, Web3, and visual work.</p></div><div className="projects-grid">{projects.map((project,index) => <ProjectCard key={project.title} project={project} index={index} />)}</div><a className="text-link project-source" href="https://github.com/UkohEmmanuel1" target="_blank" rel="noopener noreferrer"><FaGithub /> Explore GitHub ↗</a></div></section>;
}
