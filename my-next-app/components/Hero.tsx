import Image from "next/image";
import Link from "next/link";
export default function Hero() {
  return <section id="home" className="hero shell">
    <div className="hero-copy">
      <p className="eyebrow"><span className="signal-dot" /> Engineering meets creative practice</p>
      <h1>Thoughtful software.<br /><span>Intelligent systems.</span></h1>
      <p className="hero-intro">Hi, I’m Emmanuel David — a software engineer working across machine learning, applied AI, and visual design.</p>
      <p className="hero-note">From the interface you touch to the infrastructure behind it, I build with equal parts engineering and craft.</p>
      <div className="hero-actions"><a href="#projects" className="btn btn-primary">Explore my work ↗</a><Link href="/resume" className="btn btn-glass">View resume ↗</Link></div>
      <div className="hero-footnote"><span>Software / ML / AI / Creative</span><a href="#about">Scroll to discover ↓</a></div>
    </div>
    <figure className="hero-portrait"><Image src="/image/emma.png" alt="Emmanuel David" fill priority sizes="(max-width: 760px) 90vw, 420px" /><figcaption><span>Emmanuel David</span><span>Engineer & creative</span></figcaption><span className="portrait-mark" aria-hidden="true">ED.</span></figure>
  </section>;
}
