"use client";


import {
  SiNextdotjs,
  SiTensorflow,
  SiOpenai,
  SiFigma,
} from "react-icons/si";


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

export default function Expertise() {
 return <section id="expertise" className="section section-ink"><div className="shell"><div className="section-heading"><div><p className="eyebrow"><span className="eyebrow-index">02</span> Expertise</p><h2 className="display-lg">Different disciplines.<br />One considered approach.</h2></div><p className="body-text">Engineering, modelling, and visual craft — connected from the first idea to the final detail.</p></div><div className="expertise-grid">{disciplines.map((discipline, index) => <DisciplineCard key={discipline.title} discipline={discipline} index={index} />)}</div></div></section>;
}
