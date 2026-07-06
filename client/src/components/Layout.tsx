/**
 * Layout.tsx — Sovereign Counsel Design System
 * Shared layout components used across all 20 pages.
 * Background: #0a0a0a | Accent: #C9A84C | Headline: Playfair Display | Body: Inter
 */
import { ReactNode, useEffect, useRef, useState, isValidElement } from "react";
import { Link } from "wouter";
import { Phone, ChevronRight, Star, ArrowRight } from "lucide-react";
import { motion, useInView } from "framer-motion";
import Navbar from "./Navbar";
import Footer from "./Footer";

const PHONE = "(786) 709-3423";
const PHONE_HREF = "tel:+17867093423";

// ─── Page Layout Wrapper ─────────────────────────────────────────────────────
export function PageLayout({ children, title, description }: {
  children: ReactNode;
  title?: string;
  description?: string;
}) {
  useEffect(() => {
    if (title) document.title = title;
    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc && description) metaDesc.setAttribute("content", description);
    window.scrollTo(0, 0);
  }, [title, description]);

  return (
    <div style={{ background: "#0a0a0a", minHeight: "100vh" }}>
      <Navbar />
      <main>{children}</main>
      <Footer />
    </div>
  );
}

// ─── Floating Call Button (mobile only) ──────────────────────────────────────
export function FloatingCallButton() {
  return (
    <a
      href={PHONE_HREF}
      className="float-call-btn lg:hidden"
      aria-label="Call Kate A Vincent Law Group"
    >
      <Phone size={16} />
      <span>Call Now</span>
    </a>
  );
}

// ─── Scroll Reveal Wrapper ────────────────────────────────────────────────────
export function Reveal({ children, delay = 0, className = "" }: {
  children: ReactNode;
  delay?: number;
  className?: string;
}) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 22 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay, ease: [0.23, 1, 0.32, 1] }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

// ─── Hero Section ─────────────────────────────────────────────────────────────
interface HeroProps {
  h1: string;
  subhead?: string;
  backgroundImage?: string;
  ctas?: { label: string; href: string; variant?: "gold" | "outline" }[];
  breadcrumbs?: { label: string; href?: string }[];
  isHome?: boolean;
}

export function HeroSection({ h1, subhead, backgroundImage, ctas, breadcrumbs, isHome }: HeroProps) {
  return (
    <section
      className={`hero-section ${isHome ? "" : "inner-hero"}`}
      style={{
        backgroundImage: backgroundImage ? `url(${backgroundImage})` : undefined,
        backgroundSize: "cover",
        backgroundPosition: "center",
        paddingTop: "5rem",
      }}
    >
      <div className="hero-overlay" />
      <div className="hero-content container mx-auto px-4 lg:px-8 py-16" style={{ maxWidth: "1280px" }}>
        {breadcrumbs && breadcrumbs.length > 0 && (
          <div className="breadcrumb mb-6">
            <Link href="/">Home</Link>
            {breadcrumbs.map((crumb, i) => (
              <span key={i} className="flex items-center gap-1">
                <ChevronRight size={12} style={{ color: "#6B6358" }} />
                {crumb.href ? (
                  <Link href={crumb.href}>{crumb.label}</Link>
                ) : (
                  <span style={{ color: "#C9A84C" }}>{crumb.label}</span>
                )}
              </span>
            ))}
          </div>
        )}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.23, 1, 0.32, 1] }}
        >
          <h1
            className={`gold-underline mb-6 ${isHome ? "text-4xl md:text-5xl lg:text-6xl" : "text-3xl md:text-4xl lg:text-5xl"}`}
            style={{ fontFamily: "'Playfair Display', serif", color: "#F5F0E8", maxWidth: "800px" }}
          >
            {h1}
          </h1>
        </motion.div>
        {subhead && (
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.15, ease: [0.23, 1, 0.32, 1] }}
            className="text-lg md:text-xl mb-8 max-w-2xl"
            style={{ color: "#C8C0B0" }}
          >
            {subhead}
          </motion.p>
        )}
        {ctas && ctas.length > 0 && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.25, ease: [0.23, 1, 0.32, 1] }}
            className="flex flex-wrap gap-4"
          >
            {ctas.map((cta) =>
              cta.variant === "outline" ? (
                <a key={cta.href} href={cta.href} className="btn-outline">
                  {cta.label}
                </a>
              ) : (
                <a key={cta.href} href={cta.href} className="btn-gold">
                  {cta.label}
                </a>
              )
            )}
          </motion.div>
        )}
      </div>
    </section>
  );
}

// ─── CTA Band ─────────────────────────────────────────────────────────────────
export function CTABand({ headline, subtext }: { headline?: string; subtext?: string }) {
  return (
    <section className="cta-band">
      <div className="container mx-auto px-4 lg:px-8" style={{ maxWidth: "1280px" }}>
        <Reveal>
          <h2
            className="text-3xl md:text-4xl mb-4"
            style={{ fontFamily: "'Playfair Display', serif", color: "#F5F0E8" }}
          >
            {headline || "Facing a legal issue? Get a free consultation today."}
          </h2>
          <p className="text-lg mb-8 max-w-xl mx-auto" style={{ color: "#9A9080" }}>
            {subtext || "Call us 24/7 or send a message. We respond quickly and fight hard for you."}
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <a href={PHONE_HREF} className="btn-gold text-base">
              <Phone size={16} />
              Call {PHONE}
            </a>
            <Link href="/contact" className="btn-outline text-base">
              Free Consultation
            </Link>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

// ─── Trust Bar ────────────────────────────────────────────────────────────────
export function TrustBar() {
  const stats = [
    { number: "15+", label: "Years of Experience" },
    { number: "500+", label: "Cases Handled" },
    { number: "Free", label: "Initial Consultation" },
    { number: "24/7", label: "Phone Available" },
  ];
  return (
    <section style={{ background: "#0f1520", borderTop: "1px solid rgba(201,168,76,0.15)", borderBottom: "1px solid rgba(201,168,76,0.15)" }}>
      <div className="container mx-auto px-4 lg:px-8" style={{ maxWidth: "1280px" }}>
        <div className="grid grid-cols-2 md:grid-cols-4">
          {stats.map((stat, i) => (
            <Reveal key={i} delay={i * 0.08}>
              <div className="trust-stat border-r last:border-r-0" style={{ borderColor: "rgba(201,168,76,0.1)" }}>
                <div className="trust-stat-number">{stat.number}</div>
                <div className="trust-stat-label">{stat.label}</div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── Practice Area Cards ──────────────────────────────────────────────────────
interface PracticeCard {
  title: string;
  description: string;
  href: string;
  icon: string | ReactNode;
}

export function PracticeAreaCards({ cards }: { cards: PracticeCard[] }) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      {cards.map((card, i) => (
        <Reveal key={card.href} delay={i * 0.1}>
          <Link href={card.href} className="practice-card h-full">
            <div
              className="mb-4"
              style={{ filter: "drop-shadow(0 0 10px rgba(201,168,76,0.35))" }}
            >
              {isValidElement(card.icon) ? card.icon : <span className="text-3xl">{card.icon as string}</span>}
            </div>
            <h3
              className="text-xl mb-3"
              style={{ fontFamily: "'Playfair Display', serif", color: "#F5F0E8" }}
            >
              {card.title}
            </h3>
            <p className="text-sm mb-4" style={{ color: "#9A9080" }}>
              {card.description}
            </p>
            <span
              className="inline-flex items-center gap-1 text-sm font-semibold"
              style={{ color: "#C9A84C", fontFamily: "'Inter', sans-serif" }}
            >
              Learn More <ArrowRight size={14} />
            </span>
          </Link>
        </Reveal>
      ))}
    </div>
  );
}

// ─── Process Steps ────────────────────────────────────────────────────────────
interface ProcessStep {
  number: number;
  title: string;
  description: string;
}

export function ProcessSteps({ steps }: { steps: ProcessStep[] }) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
      {steps.map((step, i) => (
        <Reveal key={i} delay={i * 0.1}>
          <div className="process-step flex-col items-start">
            <div className="flex items-center gap-4 mb-3">
              <div className="process-number">{step.number}</div>
              <h3
                className="text-lg font-semibold"
                style={{ fontFamily: "'Playfair Display', serif", color: "#F5F0E8" }}
              >
                {step.title}
              </h3>
            </div>
            <p className="text-sm" style={{ color: "#9A9080" }}>
              {step.description}
            </p>
          </div>
        </Reveal>
      ))}
    </div>
  );
}

// ─── FAQ Accordion ────────────────────────────────────────────────────────────
interface FAQItem {
  question: string;
  answer: string;
}

export function FAQAccordion({ items }: { items: FAQItem[] }) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <div>
      {items.map((item, i) => (
        <Reveal key={i} delay={i * 0.05}>
          <div className="faq-item">
            <button
              className="w-full flex items-center justify-between py-5 text-left"
              onClick={() => setOpenIndex(openIndex === i ? null : i)}
            >
              <span
                className="text-base font-semibold pr-4"
                style={{ fontFamily: "'Playfair Display', serif", color: "#F5F0E8" }}
              >
                {item.question}
              </span>
              <span
                className="flex-shrink-0 transition-transform duration-200"
                style={{
                  color: "#C9A84C",
                  transform: openIndex === i ? "rotate(45deg)" : "rotate(0deg)",
                }}
              >
                <ChevronRight size={20} />
              </span>
            </button>
            <motion.div
              initial={false}
              animate={{ height: openIndex === i ? "auto" : 0, opacity: openIndex === i ? 1 : 0 }}
              transition={{ duration: 0.3, ease: [0.23, 1, 0.32, 1] }}
              style={{ overflow: "hidden" }}
            >
              <p className="pb-5 text-sm leading-relaxed" style={{ color: "#9A9080" }}>
                {item.answer}
              </p>
            </motion.div>
          </div>
        </Reveal>
      ))}
    </div>
  );
}

// ─── Testimonial Cards ────────────────────────────────────────────────────────
interface TestimonialItem {
  name: string;
  text: string;
  rating?: number;
  practice?: string;
}

export function TestimonialCards({ items }: { items: TestimonialItem[] }) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {items.map((item, i) => (
        <Reveal key={i} delay={i * 0.08}>
          <div className="testimonial-card h-full flex flex-col">
            <div className="flex gap-1 mb-3">
              {Array.from({ length: item.rating ?? 5 }).map((_, j) => (
                <Star key={j} size={14} fill="#C9A84C" style={{ color: "#C9A84C" }} />
              ))}
            </div>
            <p className="text-sm leading-relaxed flex-1 mb-4" style={{ color: "#C8C0B0" }}>
              "{item.text}"
            </p>
            <div>
              <div className="font-semibold text-sm" style={{ color: "#F5F0E8", fontFamily: "'Inter', sans-serif" }}>
                {item.name}
              </div>
              {item.practice && (
                <div className="text-xs mt-0.5" style={{ color: "#C9A84C" }}>
                  {item.practice}
                </div>
              )}
            </div>
          </div>
        </Reveal>
      ))}
    </div>
  );
}

// ─── Section Header ───────────────────────────────────────────────────────────
export function SectionHeader({ label, title, subtitle }: {
  label?: string;
  title: string;
  subtitle?: string;
}) {
  return (
    <Reveal>
      <div className="mb-12">
        {label && (
          <div
            className="text-xs font-semibold uppercase tracking-widest mb-3"
            style={{ color: "#C9A84C", letterSpacing: "0.15em", fontFamily: "'Inter', sans-serif" }}
          >
            {label}
          </div>
        )}
        <h2
          className="gold-underline text-3xl md:text-4xl mb-4"
          style={{ fontFamily: "'Playfair Display', serif", color: "#F5F0E8" }}
        >
          {title}
        </h2>
        {subtitle && (
          <p className="text-base max-w-2xl mt-4" style={{ color: "#9A9080" }}>
            {subtitle}
          </p>
        )}
      </div>
    </Reveal>
  );
}

// ─── What We Handle List ──────────────────────────────────────────────────────
export function WhatWeHandle({ items }: { items: string[] }) {
  return (
    <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
      {items.map((item, i) => (
        <li key={i} className="flex items-start gap-3">
          <span
            className="mt-1 flex-shrink-0 w-5 h-5 rounded-full flex items-center justify-center text-xs font-bold"
            style={{ background: "rgba(201,168,76,0.15)", color: "#C9A84C" }}
          >
            ✓
          </span>
          <span className="text-sm" style={{ color: "#C8C0B0" }}>{item}</span>
        </li>
      ))}
    </ul>
  );
}

// ─── Location Cards ───────────────────────────────────────────────────────────
export function LocationCards() {
  const locations = [
    { city: "Hollywood, FL", note: "Primary Office", href: "/hollywood-fl" },
    { city: "Miramar, FL", note: "Service Area", href: "/miramar-fl" },
    { city: "Fort Lauderdale, FL", note: "Service Area", href: "/fort-lauderdale-fl" },
  ];
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      {locations.map((loc, i) => (
        <Reveal key={loc.href} delay={i * 0.1}>
          <Link href={loc.href} className="location-card">
            <div className="mb-3 flex justify-center">
              <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M14 3C10.134 3 7 6.134 7 10C7 15.5 14 25 14 25C14 25 21 15.5 21 10C21 6.134 17.866 3 14 3Z" stroke="#C9A84C" strokeWidth="1.5" strokeLinejoin="round"/>
                <circle cx="14" cy="10" r="3" stroke="#C9A84C" strokeWidth="1.5"/>
              </svg>
            </div>
            <h3
              className="text-lg font-bold mb-1"
              style={{ fontFamily: "'Playfair Display', serif", color: "#F5F0E8" }}
            >
              {loc.city}
            </h3>
            <p className="text-xs uppercase tracking-wide" style={{ color: "#C9A84C" }}>
              {loc.note}
            </p>
          </Link>
        </Reveal>
      ))}
    </div>
  );
}
