/**
 * Family Law Parent Page — Kate A Vincent Law Group PLLC
 * URL: /family-law
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
import { DocumentIcon, FamilyIcon, CoinsIcon, HomeIcon, ScaleIcon, EditIcon } from "../components/LegalIcons";

const subPracticeCards = [
  { title: "Divorce", description: "Guiding you through contested and uncontested divorce with clarity, strategy, and compassion.", href: "/family-law/divorce", icon: <DocumentIcon size={28} />, live: true },
  { title: "Child Custody", description: "Protecting your parental rights and your children's best interests in timesharing and custody matters.", href: "/family-law/child-custody", icon: <FamilyIcon size={28} />, live: true },
  { title: "Child Support", description: "Establishing, modifying, and enforcing child support orders under Florida law.", href: "/family-law", icon: <CoinsIcon size={28} />, live: false },
  { title: "Property Division", description: "Equitable distribution of marital assets and debts in Florida divorce proceedings.", href: "/family-law", icon: <HomeIcon size={28} />, live: false },
  { title: "Alimony / Spousal Support", description: "Negotiating and litigating alimony and spousal support in Florida divorces.", href: "/family-law", icon: <ScaleIcon size={28} />, live: false },
  { title: "Modifications", description: "Modifying existing custody, support, and alimony orders when circumstances change.", href: "/family-law", icon: <EditIcon size={28} />, live: false },
];

const processSteps = [
  { number: 1, title: "Free Consultation", description: "We listen to your situation, explain Florida family law, and outline your options — with honesty and compassion." },
  { number: 2, title: "Strategy & Filing", description: "Kate develops a strategy tailored to your goals — whether negotiated settlement or aggressive litigation." },
  { number: 3, title: "Resolution", description: "We work toward the best possible outcome for you and your children, whether through mediation, settlement, or trial." },
];

const whatWeHandle = [
  "Contested and uncontested divorce",
  "Parenting plans",
  "Alimony and spousal support",
  "Domestic violence injunctions",
  "Post-judgment modifications",
  "Child custody and timesharing",
  "Child support (establishment and modification)",
  "Equitable distribution of marital assets",
  "Relocation with children",
  "Paternity actions",
];

export default function FamilyLaw() {
  return (
    <PageLayout
      title="Hollywood FL Family Law Attorney | Kate A Vincent Law Group"
      description="Family law attorney in Hollywood, FL. Divorce, child custody, alimony, and property division. Free consultation — call (786) 709-3423."
    >
      <HeroSection
        h1="Family Law Attorney in Hollywood, FL"
        subhead="Protecting your family through divorce, child custody, and all family law matters — with compassion and relentless advocacy."
        backgroundImage="/manus-storage/hero-family_fe0b7754.jpg"
        breadcrumbs={[
          { label: "Practice Areas", href: "/practice-areas" },
          { label: "Family Law" },
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
              <SectionHeader title="Your Family Deserves a Fierce Advocate" />
              <Reveal>
                <p className="text-base mb-4" style={{ color: "#C8C0B0" }}>
                  Family law matters are among the most emotionally and financially significant events in a person's life. Whether you're going through a divorce, fighting for custody of your children, or navigating a complex property division, the decisions made in these cases can affect you and your family for years — even decades.
                </p>
                <p className="text-base mb-4" style={{ color: "#C8C0B0" }}>
                  Kate A Vincent understands that family law is not just about legal strategy — it's about protecting the people you love and securing your future. She approaches every family law case with both the compassion to understand what's at stake and the tenacity to fight for the best possible outcome.
                </p>
                <p className="text-base" style={{ color: "#C8C0B0" }}>
                  From Hollywood to Miramar to Fort Lauderdale, Kate represents clients throughout Broward County in all aspects of Florida family law.
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
                  Protect Your Family
                </h3>
                <p className="text-sm mb-5" style={{ color: "#9A9080" }}>
                  Family law decisions are permanent. Get the right attorney on your side from the start.
                </p>
                <a href="tel:+17867093423" className="btn-gold w-full justify-center mb-3 text-sm">
                  <Phone size={14} />
                  Call (786) 709-3423
                </a>
                <Link href="/contact" className="btn-outline w-full justify-center text-sm">
                  Free Consultation
                </Link>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Sub-practice cards */}
      <section className="py-20 section-navy">
        <div className="container mx-auto px-4 lg:px-8" style={{ maxWidth: "1280px" }}>
          <SectionHeader label="Case Types" title="Family Law Practice Areas" />
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
          <SectionHeader label="How It Works" title="The Family Law Process" />
          <ProcessSteps steps={processSteps} />
        </div>
      </section>

      {/* Locations */}
      <section className="py-20" style={{ background: "#0a0a0a" }}>
        <div className="container mx-auto px-4 lg:px-8" style={{ maxWidth: "1280px" }}>
          <SectionHeader label="Where We Serve" title="Family Law Representation Across Broward County" />
          <LocationCards />
        </div>
      </section>

      <CTABand headline="Facing a family law matter? Get your free consultation today." />
    </PageLayout>
  );
}
