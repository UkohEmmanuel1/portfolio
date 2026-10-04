"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { EASE } from "@/components/motion";

const navItems = [
  { name: "About", href: "#about" },
  { name: "Projects", href: "#projects" },
  { name: "Expertise", href: "#expertise" },
  { name: "Contact", href: "#contact" },
];

function ArrowOut({ size = 14 }: { size?: number }) {
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

export default function Navbar() {
  const [activeSection, setActiveSection] = useState("home");
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const sections = ["home", "about", "projects", "expertise", "contact"];

    const handleScroll = () => {
      const probe = window.scrollY + window.innerHeight * 0.35;
      for (const id of sections) {
        const el = document.getElementById(id);
        if (el && probe >= el.offsetTop && probe < el.offsetTop + el.offsetHeight) {
          setActiveSection(id);
          return;
        }
      }
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  return (
    <>
      <motion.header
        initial={{ opacity: 0, y: -16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.1, ease: EASE }}
        className="sticky top-0 z-30 grid grid-cols-[1fr_auto] md:grid-cols-[minmax(12rem,1fr)_auto_minmax(12rem,1fr)] items-center min-h-20 px-5 md:px-9"
      >
        {/* Left: wordmark */}
        <Link
          href="#home"
          className="justify-self-start group flex items-center gap-2.5"
        >
          <span className="relative w-7 h-7 overflow-hidden rounded-full shrink-0">
            <Image
              src="/image/emma.png"
              alt=""
              fill
              priority
              sizes="28px"
              className="object-cover"
            />
          </span>
          <span
            className="hidden sm:block text-[0.86rem] font-extrabold tracking-[0.14em] uppercase"
            style={{ color: "#fff" }}
          >
            Emmanuel David
          </span>
        </Link>

        {/* Center: glass nav pill */}
        <nav
          className="hidden md:flex items-center justify-self-center"
          style={{
            padding: "0.6rem 1rem",
            background: "rgba(255,255,255,0.05)",
            border: "1px solid var(--line-faint)",
            backdropFilter: "blur(12px)",
            WebkitBackdropFilter: "blur(12px)",
            borderRadius: "0.65rem",
            gap: "clamp(1.1rem, 2vw, 2rem)",
          }}
        >
          {navItems.map((item) => {
            const isActive = activeSection === item.href.slice(1);
            return (
              <a
                key={item.name}
                href={item.href}
                className="relative py-1"
                style={{
                  fontSize: "0.8125rem",
                  letterSpacing: "-0.005em",
                  color: isActive ? "var(--signal)" : "#fff",
                  opacity: isActive ? 1 : 0.68,
                  transition: "color 0.18s ease, opacity 0.18s ease",
                }}
              >
                {item.name}
                {isActive && (
                  <motion.span
                    layoutId="navActive"
                    className="absolute inset-x-0 -bottom-0.5 h-px origin-left"
                    style={{ background: "var(--signal)" }}
                    transition={{ type: "spring", stiffness: 380, damping: 32 }}
                  />
                )}
              </a>
            );
          })}
        </nav>

        {/* Right: actions */}
        <div className="hidden md:flex items-center justify-self-end gap-1.4rem">
          <Link href="/resume" className="btn btn-glass">
            Resume
          </Link>
          <a href="#contact" className="btn btn-primary">
            <span>Let&apos;s talk</span>
            <ArrowOut />
          </a>
        </div>

        {/* Mobile: menu trigger */}
        <button
          onClick={() => setMenuOpen(true)}
          className="md:hidden justify-self-end"
          style={{
            fontFamily: "var(--font-mono-jb), ui-monospace, monospace",
            fontSize: "0.9rem",
            letterSpacing: "0.1em",
            textTransform: "uppercase",
            color: "#fff",
            background: "none",
            border: 0,
            cursor: "pointer",
          }}
        >
          Menu
        </button>
      </motion.header>

      {/* Mobile fullscreen overlay */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -16 }}
            transition={{ duration: 0.3, ease: EASE }}
            className="md:hidden fixed inset-0 z-40 flex flex-col"
            style={{ background: "#070707", padding: "5rem 1.25rem 1.5rem" }}
          >
            <button
              onClick={() => setMenuOpen(false)}
              className="absolute top-0 right-0 px-5 h-20 flex items-center"
              style={{
                fontFamily: "var(--font-mono-jb), ui-monospace, monospace",
                fontSize: "0.9rem",
                letterSpacing: "0.1em",
                textTransform: "uppercase",
                color: "rgba(255,255,255,0.6)",
                background: "none",
                border: 0,
                cursor: "pointer",
              }}
            >
              Close
            </button>

            <nav className="flex-1 flex flex-col justify-center gap-1">
              {navItems.map((item, i) => (
                <motion.a
                  key={item.name}
                  href={item.href}
                  onClick={() => setMenuOpen(false)}
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{
                    duration: 0.4,
                    delay: 0.05 + i * 0.05,
                    ease: EASE,
                  }}
                  className="display-lg border-b"
                  style={{
                    borderColor: "rgba(255,255,255,0.11)",
                    color: "#fff",
                    paddingBottom: "0.6rem",
                    textDecoration: "none",
                  }}
                >
                  {item.name}
                </motion.a>
              ))}
            </nav>

            <div className="flex flex-col gap-2 pt-8">
              <a
                href="#contact"
                onClick={() => setMenuOpen(false)}
                className="btn btn-primary btn-lg w-full"
              >
                <span>Let&apos;s talk</span>
                <ArrowOut />
              </a>
              <Link href="/resume" className="btn btn-glass btn-lg w-full">
                Resume
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
