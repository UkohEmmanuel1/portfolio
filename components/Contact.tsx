"use client";

import { useRef, useState, type ChangeEvent, type FormEvent } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import {
  FaEnvelope,
  FaWhatsapp,
  FaTwitter,
  FaLinkedinIn,
  FaGithub,
  FaInstagram,
  FaCheck,
} from "react-icons/fa";
import { EASE, VIEWPORT, slideIn, stagger } from "@/components/motion";

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

export default function Contact() {
  const bannerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: bannerRef,
    offset: ["start end", "end start"],
  });
  const bannerY = useTransform(scrollYProgress, [0, 1], ["-6%", "6%"]);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [sent, setSent] = useState(false);

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    const emailHtml = `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; border: 1px solid #222; background: #f4f4ef; color: #080808; border-radius: 12px;">
        <h2 style="color: #080808; border-bottom: 1px solid #ccc; padding-bottom: 10px;">New Portfolio Inquiry</h2>
        <p><strong>From:</strong> ${formData.name} (${formData.email})</p>
        <p><strong>Subject:</strong> ${formData.subject}</p>
        <div style="background: #e9e8e2; padding: 16px; border-radius: 8px; margin: 20px 0; border: 1px solid #d6d5cf;">
          <p style="white-space: pre-line; line-height: 1.6; color: #080808;">${formData.message}</p>
        </div>
      </div>
    `;

    try {
      await fetch("https://techxmail.onrender.com/sendmail", {
        method: "POST",
        body: JSON.stringify({
          name: formData.name,
          mail: "emmanuelukoh08@gmail.com",
          html: emailHtml,
          subject: `Portfolio Message: ${formData.subject || "Project Inquiry"}`,
        }),
        headers: { "Content-Type": "application/json" },
      });
    } catch {
      // Keep the UX graceful if the mail relay is unreachable.
    } finally {
      setSent(true);
      setFormData({ name: "", email: "", subject: "", message: "" });
      setIsSubmitting(false);
      setTimeout(() => setSent(false), 5000);
    }
  };

  return (
    <section id="contact" className="section section-ink">
      <div className="shell">
        {/* CTA banner */}
        <motion.div
          ref={bannerRef}
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={VIEWPORT}
          transition={{ duration: 0.8, ease: EASE }}
          className="photo-panel relative overflow-hidden"
          style={{
            borderRadius: "var(--radius-card)",
            minHeight: "18rem",
            marginBottom: "var(--space-head)",
          }}
        >
          <motion.div
            aria-hidden="true"
            className="absolute inset-0"
            style={{ opacity: 0.22, borderRadius: "var(--radius-card)" }}
          >
            <motion.div style={{ y: bannerY }} className="absolute inset-[-8%]">
              <Image
                src="/image/about.jpg"
                alt=""
                fill
                sizes="100vw"
                className="object-cover"
                style={{ objectPosition: "center 25%" }}
              />
            </motion.div>
          </motion.div>
          <div
            className="absolute inset-0"
            style={{
              borderRadius: "var(--radius-card)",
              background:
                "linear-gradient(180deg, rgba(5,5,5,0.6), rgba(5,5,5,0.45) 45%, rgba(5,5,5,0.75))",
            }}
          />

          <div
            className="relative flex flex-col justify-between h-full w-full"
            style={{
              padding: "clamp(1.5rem, 3vw, 2.5rem)",
              minHeight: "18rem",
              border: "1px solid var(--line-faint)",
              borderRadius: "var(--radius-card)",
            }}
          >
            <div className="eyebrow" style={{ marginBottom: 0 }}>
              <span className="eyebrow-index">04</span>
              <span className="eyebrow-rule" />
              <span>Contact</span>
            </div>

            <div>
              <h2 className="display-lg" style={{ maxWidth: "38ch", marginBottom: "1.5rem" }}>
                Let&apos;s build something that lasts
              </h2>
              <div className="flex flex-wrap gap-2">
                <a
                  href="mailto:emmanuelukoh08@gmail.com"
                  className="btn btn-primary btn-lg"
                >
                  <span>Email me</span>
                  <ArrowOut />
                </a>
                <a
                  href="https://wa.me/+2348167949054"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-glass btn-lg"
                >
                  <FaWhatsapp size={14} />
                  <span>WhatsApp</span>
                </a>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Form + details */}
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.25fr] gap-x-10 gap-y-12 lg:gap-x-20">
          <motion.div
            variants={stagger(0.06)}
            initial="hidden"
            whileInView="visible"
            viewport={VIEWPORT}
          >
            <motion.div variants={slideIn} className="eyebrow">
              <span>Direct channels</span>
            </motion.div>

            <motion.div
              variants={slideIn}
              className="rule-list"
            >
              <motion.a
                variants={slideIn}
                href="mailto:emmanuelukoh08@gmail.com"
                className="rule-row flex items-center gap-2.5"
                style={{ color: "var(--offwhite)", textDecoration: "none" }}
              >
                <FaEnvelope size={14} style={{ color: "var(--on-dark-4)" }} />
                <span className="body-text">emmanuelukoh08@gmail.com</span>
              </motion.a>

              <motion.a
                variants={slideIn}
                href="https://wa.me/+2348167949054"
                target="_blank"
                rel="noopener noreferrer"
                className="rule-row flex items-center gap-2.5"
                style={{ color: "var(--offwhite)", textDecoration: "none" }}
              >
                <FaWhatsapp size={14} style={{ color: "var(--on-dark-4)" }} />
                <span className="body-text">+234 816 794 9054</span>
              </motion.a>

              <motion.div
                variants={slideIn}
                className="rule-row flex items-center gap-2.5"
                style={{ borderTop: "1px solid var(--line-soft)" }}
              >
                <span className="signal-dot" />
                <span className="body-text" style={{ color: "var(--on-dark-3)" }}>
                  Replies within 24 hours
                </span>
              </motion.div>
            </motion.div>

            <motion.div
              variants={slideIn}
              className="flex flex-wrap items-center gap-1.5"
              style={{ marginTop: "1.5rem" }}
            >
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
            </motion.div>
          </motion.div>

          <motion.div
            variants={stagger(0.06)}
            initial="hidden"
            whileInView="visible"
            viewport={VIEWPORT}
          >
            <motion.div variants={slideIn} className="eyebrow">
              <span>Project inquiry</span>
            </motion.div>

            {sent && (
              <motion.div
                initial={{ opacity: 0, y: -8 }}
                animate={{ opacity: 1, y: 0 }}
                className="flex items-center gap-2.5 mono-sm"
                style={{ color: "var(--signal)", marginBottom: "1.5rem" }}
              >
                <FaCheck size={15} />
                <span>Message sent — thank you.</span>
              </motion.div>
            )}

            <form onSubmit={handleSubmit} className="flex flex-col gap-5">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <motion.label variants={slideIn} className="block">
                  <span className="mono-label" style={{ color: "var(--on-dark-4)" }}>
                    Your name
                  </span>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    placeholder="Jane Okafor"
                    className="field"
                    style={{ marginTop: "0.5rem" }}
                  />
                </motion.label>

                <motion.label variants={slideIn} className="block">
                  <span className="mono-label" style={{ color: "var(--on-dark-4)" }}>
                    Your email
                  </span>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    placeholder="jane@company.com"
                    className="field"
                    style={{ marginTop: "0.5rem" }}
                  />
                </motion.label>
              </div>

              <motion.label variants={slideIn} className="block">
                <span className="mono-label" style={{ color: "var(--on-dark-4)" }}>
                  Subject
                </span>
                <input
                  type="text"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  placeholder="Platform build / ML pipeline / architecture review"
                  className="field"
                  style={{ marginTop: "0.5rem" }}
                />
              </motion.label>

              <motion.label variants={slideIn} className="block">
                <span className="mono-label" style={{ color: "var(--on-dark-4)" }}>
                  Message
                </span>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={4}
                  placeholder="Scope, timeline, and what success looks like."
                  className="field resize-none"
                  style={{ marginTop: "0.5rem" }}
                />
              </motion.label>

              <motion.div variants={slideIn} className="pt-1">
                <motion.button
                  type="submit"
                  disabled={isSubmitting}
                  className="btn btn-primary btn-lg"
                  whileHover={{ y: -1 }}
                >
                  {isSubmitting ? <span>Sending…</span> : <span>Send message</span>}
                  {!isSubmitting && <ArrowOut />}
                </motion.button>
              </motion.div>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
