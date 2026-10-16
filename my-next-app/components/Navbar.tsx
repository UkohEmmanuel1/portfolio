"use client";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
const links = ["About", "Expertise", "Projects", "Contact"];
export default function Navbar() {
  const [open, setOpen] = useState(false);
  const button = useRef<HTMLButtonElement>(null);
  const nav = useRef<HTMLElement>(null);
  useEffect(() => {
    if (!open) return;
    const dismiss = (event: KeyboardEvent) => { if (event.key === "Escape") { setOpen(false); button.current?.focus(); } };
    const outside = (event: PointerEvent) => { if (!nav.current?.contains(event.target as Node) && !button.current?.contains(event.target as Node)) setOpen(false); };
    document.addEventListener("keydown", dismiss); document.addEventListener("pointerdown", outside);
    return () => { document.removeEventListener("keydown", dismiss); document.removeEventListener("pointerdown", outside); };
  }, [open]);
  return <header className="site-header"><div className="shell nav-inner">
    <Link href="/#home" className="wordmark" aria-label="Emmanuel David home">ed<span>.</span><span className="wordmark-name">Emmanuel David</span></Link>
    <button ref={button} className="menu-toggle" aria-expanded={open} aria-controls="main-nav" onClick={() => setOpen(!open)}>{open ? "Close ×" : "Menu +"}</button>
    <nav ref={nav} id="main-nav" aria-label="Main navigation" className={open ? "main-nav is-open" : "main-nav"}>
      {links.map(label => <a key={label} href={"#" + label.toLowerCase()} onClick={() => setOpen(false)}>{label}</a>)}
      <a className="nav-contact" href="#contact" onClick={() => setOpen(false)}>Let’s talk ↗</a>
    </nav>
  </div></header>;
}
