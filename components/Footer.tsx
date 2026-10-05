"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import {
  FaGithub,
  FaLinkedinIn,
  FaTwitter,
  FaInstagram,
  FaArrowUp,
} from "react-icons/fa";
import Link from "next/link";
import { VIEWPORT, fadeUp, stagger } from "@/components/motion";

const columns = [
  {
    title: "Navigate",
    links: [
      { name: "Home", href: "#home" },
      { name: "About", href: "#about" },
      { name: "Projects", href: "#projects" },
      { name: "Expertise", href: "#expertise" },
    ],
  },
  {
    title: "Capabilities",
    links: [
      { name: "Software Engineering", href: "#expertise" },
      { name: "Machine Learning", href: "#expertise" },
      { name: "Applied AI", href: "#expertise" },
    ],
  },
  {
    title: "Connect",
    links: [
      { name: "GitHub", href: "https://github.com/UkohEmmanuel1" },
      { name: "LinkedIn", href: "https://www.linkedin.com/in/emmanuel-david-77606131b/" },
      { name: "X / Twitter", href: "https://x.com/emma_nuel_david" },
      { name: "Instagram", href: "https://www.instagram.com/emma_nuel_david/" },
    ],
  },
];

const socialLinks = [
  { icon: FaGithub, href: "https://github.com/UkohEmmanuel1", label: "GitHub" },
  {
    icon: FaLinkedinIn,
    href: "https://www.linkedin.com/in/emmanuel-david-77606131b/",
    label: "LinkedIn",
  },
  { icon: FaTwitter, href: "https://x.com/emma_nuel_david", label: "X" },
  {
    icon: FaInstagram,
    href: "https://www.instagram.com/emma_nuel_david/",
    label: "Instagram",
  },
];

export default function Footer() {
  const year = new Date().getFullYear();
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end end"],
  });
  const markY = useTransform(scrollYProgress, [0, 1], ["22%", "0%"]);

  return (
    <footer
      ref={ref}
      className="relative overflow-hidden rule-faint"
      style={{ background: "var(--ink)" }}
    >
      {/* Giant ghost wordmark, drifting as the footer scrolls in */}
      <motion.div
        aria-hidden="true"
        className="pointer-events-none select-none absolute inset-x-0 bottom-0 flex justify-center overflow-hidden"
        style={{ opacity: 0.055, zIndex: 0 }}
      >
        <motion.span
          style={{
            y: markY,
            color: "var(--offwhite)",
            marginBottom: "-0.12em",
            fontSize: "clamp(2.5rem, 9vw, 7rem)",
            fontWeight: 600,
            lineHeight: 1,
            letterSpacing: "-0.045em",
            whiteSpace: "nowrap",
          }}
        >
          EMMANUEL DAVID
        </motion.span>
      </motion.div>

      <div className="relative" style={{ paddingTop: "6rem", zIndex: 1 }}>
        <div className="shell">
          {/* Link grid */}
          <motion.div
            variants={stagger(0.07)}
            initial="hidden"
            whileInView="visible"
            viewport={VIEWPORT}
            className="grid grid-cols-2 md:grid-cols-3 gap-x-8 gap-y-10"
            style={{ marginBottom: "4rem" }}
          >
            {columns.map((col) => (
              <motion.div key={col.title} variants={fadeUp}>
                <div
                  className="mono-label"
                  style={{ color: "var(--on-dark-4)", marginBottom: "1rem" }}
                >
                  {col.title}
                </div>
                <ul className="flex flex-col gap-2.5">
                  {col.links.map((link) => (
                    <li key={link.name}>
                      <Link
                        href={link.href}
                        className="mono-sm transition-colors duration-200"
                        style={{ color: "var(--offwhite)", opacity: 0.68 }}
                      >
                        {link.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </motion.div>

          {/* Meta row */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={VIEWPORT}
            className="grid grid-cols-1 md:grid-cols-[1fr_auto_1fr] items-center gap-5 pt-5"
            style={{ borderTop: "1px solid var(--line-faint)" }}
          >
            <div className="flex items-center gap-1.5">
              {socialLinks.map((s) => {
                const Icon = s.icon;
                return (
                  <motion.a
                    key={s.label}
                    href={s.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={s.label}
                    whileHover={{ y: -2 }}
                    className="flex items-center justify-center"
                    style={{
                      width: "2.1rem",
                      height: "2.1rem",
                      borderRadius: "999px",
                      border: "1px solid var(--line-faint)",
                      color: "var(--on-dark-2)",
                    }}
                  >
                    <Icon size={14} />
                  </motion.a>
                );
              })}
            </div>

            <div className="mono-label text-center" style={{ color: "var(--on-dark-5)" }}>
              © {year} Emmanuel David
            </div>

            <div className="flex items-center gap-4 md:justify-end">
              <Link
                href="/resume"
                className="mono-sm"
                style={{ color: "var(--on-dark-4)" }}
              >
                Resume
              </Link>
              <motion.button
                onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
                whileHover={{ y: -2 }}
                aria-label="Back to top"
                className="flex items-center justify-center cursor-pointer"
                style={{
                  width: "2.1rem",
                  height: "2.1rem",
                  borderRadius: "999px",
                  border: "1px solid var(--line-faint)",
                  background: "transparent",
                  color: "var(--on-dark-2)",
                }}
              >
                <FaArrowUp size={12} />
              </motion.button>
            </div>
          </motion.div>
        </div>

        {/* Clearance for the ghost wordmark */}
        <div style={{ height: "clamp(4rem, 9vw, 7.5rem)" }} />
      </div>
    </footer>
  );
}
