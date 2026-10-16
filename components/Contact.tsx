"use client";

import { useState, type ChangeEvent, type FormEvent } from "react";
import { FaTwitter, FaLinkedinIn, FaGithub, FaInstagram } from "react-icons/fa";

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

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [sent, setSent] = useState(false);
  const [error, setError] = useState("");

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError("");
    setSent(false);

    const escapeHtml = (value: string) => value.replace(/[&<>"']/g, char => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", "\"": "&quot;", "'": "&#39;" }[char] || char));
    const emailHtml = `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; border: 1px solid #222; background: #f4f4ef; color: #080808; border-radius: 12px;">
        <h2 style="color: #080808; border-bottom: 1px solid #ccc; padding-bottom: 10px;">New Portfolio Inquiry</h2>
        <p><strong>From:</strong> ${escapeHtml(formData.name)} (${escapeHtml(formData.email)})</p>
        <p><strong>Subject:</strong> ${escapeHtml(formData.subject)}</p>
        <div style="background: #e9e8e2; padding: 16px; border-radius: 8px; margin: 20px 0; border: 1px solid #d6d5cf;">
          <p style="white-space: pre-line; line-height: 1.6; color: #080808;">${escapeHtml(formData.message)}</p>
        </div>
      </div>
    `;

    try {
      const response = await fetch("https://techxmail.onrender.com/sendmail", {
        method: "POST",
        body: JSON.stringify({
          name: formData.name,
          mail: "emmanuelukoh08@gmail.com",
          html: emailHtml,
          subject: `Portfolio Message: ${formData.subject || "Project Inquiry"}`,
        }),
        headers: { "Content-Type": "application/json" },
        signal: AbortSignal.timeout(20000),
      });
      if (!response.ok) throw new Error("Message delivery failed");
      setSent(true);
      setFormData({ name: "", email: "", subject: "", message: "" });
    } catch {
      setError("Your message could not be sent. Please try again or email me directly.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="section section-ink">
      <div className="shell contact-grid">
        <div>
          <p className="eyebrow"><span className="eyebrow-index">04</span> Get in touch</p>
          <h2 className="display-lg">Good work starts<br />with a conversation.</h2>
          <p className="contact-intro">Have an idea, an interesting challenge, or a project in mind? Tell me a little about it.</p>
          <a className="text-link contact-email" href="mailto:emmanuelukoh08@gmail.com">emmanuelukoh08@gmail.com ↗</a>
          <a className="contact-phone" href="https://wa.me/2348167949054" target="_blank" rel="noopener noreferrer">WhatsApp · +234 816 794 9054 ↗</a>
          <div className="contact-socials">
            {socialLinks.map(({icon: Icon, href, label}) => <a key={label} href={href} target="_blank" rel="noopener noreferrer" aria-label={label}><Icon size={17} /></a>)}
          </div>
        </div>
        <div className="contact-form">
          <h3 className="display-sm">Tell me what you’re working on</h3>
          <p className="body-text contact-form-note">A few details are all it takes to get started.</p>
          {sent && <p role="status" className="form-success">Message sent. Thank you — I’ll be in touch.</p>}
          {error && <p role="alert" className="form-error">{error}</p>}
          <form onSubmit={handleSubmit} className="flex flex-col gap-5">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              <label className="block"><span className="form-label">Your name</span><input type="text" autoComplete="name" name="name" value={formData.name} onChange={handleChange} required placeholder="Your name" className="field" /></label>
              <label className="block"><span className="form-label">Email address</span><input type="email" autoComplete="email" name="email" value={formData.email} onChange={handleChange} required placeholder="you@company.com" className="field" /></label>
            </div>
            <label className="block"><span className="form-label">What’s the project?</span><input type="text" name="subject" value={formData.subject} onChange={handleChange} required placeholder="A platform, an AI idea, something new…" className="field" /></label>
            <label className="block"><span className="form-label">A little more detail</span><textarea name="message" value={formData.message} onChange={handleChange} required rows={5} placeholder="The idea, your timeline, and what you’d like to achieve." className="field" /></label>
            <button type="submit" disabled={isSubmitting} className="btn btn-primary self-start">{isSubmitting ? "Sending…" : "Send message ↗"}</button>
          </form>
        </div>
      </div>
    </section>
  );
}
