/**
 * Criminal Defense Parent Page — Kate A Vincent Law Group PLLC
 * URL: /criminal-defense
 */
import { Link } from "wouter";
import { ArrowRight, Phone } from "lucide-react";
import {
  PageLayout,
  HeroSection,
  ProcessSteps,
  WhatWeHandle,
  CTABand,
  LocationCards,
  Reveal,
  SectionHeader,
} from "../components/Layout";
import { ScaleIcon, GavelIcon, PillIcon, LockIcon, FistIcon, TrafficLightIcon } from "../components/LegalIcons";

const subPracticeCards = [
  { title: "DUI Defense", description: "Challenging DUI charges, protecting your license, and fighting for the best possible outcome.", href: "/criminal-defense/dui", icon: <GavelIcon size={28} />, live: true },
  { title: "Domestic Violence", description: "Defending against domestic violence charges and injunctions with a strategic, thorough approach.", href: "/criminal-defense/domestic-violence", icon: <ScaleIcon size={28} />, live: true },
  { title: "Drug Charges", description: "Defending against possession, trafficking, and distribution charges.", href: "/criminal-defense", icon: <PillIcon size={28} />, live: false },
  { title: "Theft & Burglary", description: "Aggressive defense for theft, burglary, and robbery charges.", href: "/criminal-defense", icon: <LockIcon size={28} />, live: false },
  { title: "Assault & Battery", description: "Strategic defense for assault, battery, and aggravated assault charges.", href: "/criminal-defense", icon: <FistIcon size={28} />, live: false },
  { title: "Traffic Felonies", description: "Defense for serious traffic-related felonies and license matters.", href: "/criminal-defense", icon: <TrafficLightIcon size={28} />, live: false },
];

const processSteps = [
  { number: 1, title: "Arrest / Charge", description: "You've been arrested or charged. Call us immediately — early intervention is critical to your defense." },
  { number: 2, title: "Consultation & Strategy", description: "Kate reviews every detail of your case, identifies weaknesses in the prosecution's evidence, and builds your defense." },
  { number: 3, title: "Defense & Resolution", description: "We negotiate aggressively for dismissal or reduction, and take your case to trial when necessary." },
];

const whatWeHandle = [
  "DUI and DWI charges (first offense, repeat, felony)",
  "Drug possession and trafficking",
  "Domestic violence and battery",
  "Theft, burglary, and robbery",
  "Assault and aggravated assault",
  "Traffic-related felonies",
  "Weapons charges",
  "Probation violations",
  "Expungements and record sealing",
  "White-collar crime",
];

export default function CriminalDefense() {
  return (
    <PageLayout
      title="Hollywood FL Criminal Defense Attorney | Kate A Vincent Law Group"
      description="Aggressive criminal defense in Hollywood, FL. DUI, domestic violence, drug charges, assault, and more. Free consultation — call (786) 709-3423."
    >
      <HeroSection
        h1="Criminal Defense Attorney in Hollywood, FL"
        subhead="When your freedom is on the line, you need a fighter. Kate A Vincent defends clients against criminal charges throughout Broward County."
        backgroundImage="/manus-storage/hero-criminal_f10d9655.jpg"
        breadcrumbs={[
          { label: "Practice Areas", href: "/practice-areas" },
          { label: "Criminal Defense" },
        ]}
        ctas={[
          { label: "Free Consultation", href: "/contact", variant: "gold" },
          { label: "Call (786) 709-3423", href: "tel:+17867093423", variant: "outline" },
        ]}
      />

      {/* Intro */}
      <section className="py-20" style={{ background: "#0a0a0a" }}>
        <div className="container mx-auto px-4 lg:px-8" style={{ maxWidth: "1280px" }}>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2">
              <SectionHeader title="Your Freedom Deserves a Fierce Defense" />
              <Reveal>
                <p className="text-base mb-4" style={{ color: "#C8C0B0" }}>
                  A criminal charge in Florida is not just a legal problem — it's a threat to your freedom, your career, your family, and your future. Florida prosecutors are aggressive, and the consequences of a conviction can follow you for life. Whether you're facing a misdemeanor or a serious felony, you need an attorney who will fight just as hard as the prosecution.
                </p>
                <p className="text-base mb-4" style={{ color: "#C8C0B0" }}>
                  At Kate A Vincent Law Group PLLC, we approach every criminal case with the same intensity: thorough investigation, aggressive motion practice, and relentless advocacy — whether at the negotiating table or in front of a jury. Kate personally handles every case, ensuring you receive the direct attention and strategic defense your situation demands.
                </p>
                <p className="text-base" style={{ color: "#C8C0B0" }}>
                  We serve clients throughout Broward County, including Hollywood, Miramar, and Fort Lauderdale. Call us immediately after an arrest — early intervention can make all the difference.
                </p>
              </Reveal>
            </div>
            <Reveal delay={0.1}>
              <div
                className="p-6 rounded-lg"
                style={{ background: "#111827", border: "1px solid rgba(201,168,76,0.2)" }}
              >
                <h3
                  className="text-lg mb-4"
                  style={{ fontFamily: "'Playfair Display', serif", color: "#F5F0E8" }}
                >
                  Charged with a Crime?
                </h3>
                <p className="text-sm mb-5" style={{ color: "#9A9080" }}>
                  Don't wait. Every hour after an arrest matters. Call Kate now for a free, confidential consultation.
                </p>
                <a href="tel:+17867093423" className="btn-gold w-full justify-center mb-3 text-sm">
                  <Phone size={14} />
                  Call (786) 709-3423
                </a>
                <Link href="/contact" className="btn-outline w-full justify-center text-sm">
                  Send a Message
                </Link>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Sub-practice cards */}
      <section className="py-20 section-navy">
        <div className="container mx-auto px-4 lg:px-8" style={{ maxWidth: "1280px" }}>
          <SectionHeader label="Case Types" title="Criminal Defense Practice Areas" />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {subPracticeCards.map((card, i) => (
              <Reveal key={i} delay={i * 0.08}>
                <Link href={card.href} className="practice-card h-full block">
                  <div className="mb-3" style={{ filter: "drop-shadow(0 0 8px rgba(201,168,76,0.3))" }}>
                    {card.icon}
                  </div>
                  <h3 className="text-lg mb-2" style={{ fontFamily: "'Playfair Display', serif", color: "#F5F0E8" }}>
                    {card.title}
                  </h3>
                  <p className="text-sm mb-3" style={{ color: "#9A9080" }}>{card.description}</p>
                  {card.live ? (
                    <span className="inline-flex items-center gap-1 text-sm font-semibold" style={{ color: "#C9A84C" }}>
                      Learn More <ArrowRight size={14} />
                    </span>
                  ) : (
                    <span className="text-xs px-2 py-1 rounded" style={{ background: "rgba(201,168,76,0.1)", color: "#9A9080" }}>
                      Contact for details
                    </span>
                  )}
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* What We Handle */}
      <section className="py-20" style={{ background: "#0a0a0a" }}>
        <div className="container mx-auto px-4 lg:px-8" style={{ maxWidth: "1280px" }}>
          <SectionHeader label="Case Types" title="What We Handle" />
          <WhatWeHandle items={whatWeHandle} />
        </div>
      </section>

      {/* Process */}
      <section className="py-20 section-navy">
        <div className="container mx-auto px-4 lg:px-8" style={{ maxWidth: "1280px" }}>
          <SectionHeader label="How It Works" title="The Defense Process" />
          <ProcessSteps steps={processSteps} />
        </div>
      </section>

      {/* Why Private Defense */}
      <section className="py-20" style={{ background: "#0a0a0a" }}>
        <div className="container mx-auto px-4 lg:px-8" style={{ maxWidth: "1280px" }}>
          <div className="max-w-3xl">
            <SectionHeader label="Your Rights" title="Why Hire a Private Criminal Defense Attorney?" />
            <Reveal>
              <p className="text-base mb-4" style={{ color: "#C8C0B0" }}>
                A public defender is overworked and underfunded — they may handle hundreds of cases at once. A private criminal defense attorney like Kate has the time, resources, and motivation to dedicate to your case. That means more thorough investigation, more aggressive motion practice, and a stronger defense strategy tailored specifically to your situation.
              </p>
              <p className="text-base" style={{ color: "#C8C0B0" }}>
                The difference between a public defender and a private attorney can be the difference between a conviction and a dismissal. Your freedom is worth the investment.
              </p>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Locations */}
      <section className="py-20 section-navy">
        <div className="container mx-auto px-4 lg:px-8" style={{ maxWidth: "1280px" }}>
          <SectionHeader label="Where We Serve" title="Criminal Defense Across Broward County" />
          <LocationCards />
        </div>
      </section>

      <CTABand headline="Charged with a crime? Get your free defense consultation today." />
    </PageLayout>
  );
}
