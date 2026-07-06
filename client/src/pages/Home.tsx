/**
 * Homepage — Kate A Vincent Law Group PLLC
 * URL: /
 * Design: Sovereign Counsel — dark hero, trust bar, practice cards, attorney intro,
 *         process steps, cities strip, testimonials, CTA band.
 */
import { Link } from "wouter";
import { Phone, ArrowRight } from "lucide-react";
import {
  PageLayout,
  HeroSection,
  TrustBar,
  PracticeAreaCards,
  ProcessSteps,
  TestimonialCards,
  CTABand,
  LocationCards,
  Reveal,
  SectionHeader,
} from "../components/Layout";
import { ScaleIcon, ShieldIcon, CourthouseIcon } from "../components/LegalIcons";

const PHONE = "(786) 709-3423";
const PHONE_HREF = "tel:+17867093423";

const practiceCards = [
  {
    title: "Criminal Defense",
    description: "Aggressive defense for DUI, domestic violence, drug charges, assault, and all criminal matters across Broward County.",
    href: "/criminal-defense",
    icon: <ScaleIcon size={36} />,
  },
  {
    title: "Personal Injury",
    description: "Fighting for maximum compensation after car accidents, slip and falls, and serious injuries. No fee unless we win.",
    href: "/personal-injury",
    icon: <ShieldIcon size={36} />,
  },
  {
    title: "Family Law",
    description: "Protecting your family in divorce, child custody, timesharing, and all family law matters with compassion and resolve.",
    href: "/family-law",
    icon: <CourthouseIcon size={36} />,
  },
];

const processSteps = [
  {
    number: 1,
    title: "Free Consultation",
    description: "Call or message us 24/7. We listen to your situation, explain your rights, and outline your options — at no cost.",
  },
  {
    number: 2,
    title: "Case Strategy",
    description: "Kate personally reviews your case and builds a tailored defense or claim strategy designed to achieve the best outcome.",
  },
  {
    number: 3,
    title: "Resolution & Trial",
    description: "We negotiate aggressively on your behalf and, when necessary, take your case all the way to trial.",
  },
];

const testimonials = [
  {
    name: "Michael R.",
    text: "Kate fought for me when no one else would. She got my DUI charges reduced and kept my license. She was responsive, honest, and truly cared about my case. I couldn't recommend her more highly.",
    rating: 5,
    practice: "Criminal Defense — DUI",
  },
  {
    name: "Jasmine T.",
    text: "After my car accident, Kate's team recovered far more than I expected. She was responsive, honest, and truly cared about my case — not just the settlement check. She kept me informed throughout.",
    rating: 5,
    practice: "Personal Injury — Car Accident",
  },
  {
    name: "David L.",
    text: "Going through a divorce is hard enough. Kate made the process as smooth as possible and protected my rights as a father. She was direct, knowledgeable, and always available when I had questions.",
    rating: 5,
    practice: "Family Law — Divorce & Custody",
  },
];

export default function Home() {
  return (
    <PageLayout
      title="Hollywood FL Criminal Defense, Injury & Family Law Attorney | Kate A Vincent Law Group"
      description="Kate A Vincent Law Group PLLC — aggressive criminal defense, personal injury, and family law representation in Hollywood, FL. Free consultation. Call (786) 709-3423."
    >
      <HeroSection
        h1="Hollywood, FL Criminal Defense, Injury & Family Law Attorney"
        subhead="Aggressive representation for criminal, injury, and family law matters across Broward County. Your freedom, your family, your future — we fight for all of it."
        backgroundImage="/manus-storage/hero-main_a33af5b3.jpg"
        isHome
        ctas={[
          { label: "Free Consultation", href: "/contact", variant: "gold" },
          { label: `Call ${PHONE}`, href: PHONE_HREF, variant: "outline" },
        ]}
      />

      <TrustBar />

      {/* Practice Areas */}
      <section className="py-20" style={{ background: "#0a0a0a" }}>
        <div className="container mx-auto px-4 lg:px-8" style={{ maxWidth: "1280px" }}>
          <SectionHeader
            label="What We Do"
            title="Practice Areas"
            subtitle="Kate A Vincent Law Group PLLC handles criminal defense, personal injury, and family law cases throughout Broward County, FL."
          />
          <PracticeAreaCards cards={practiceCards} />
          <Reveal>
            <div className="mt-10 text-center">
              <Link href="/practice-areas" className="btn-outline inline-flex items-center gap-2">
                View All Practice Areas <ArrowRight size={16} />
              </Link>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Attorney Intro */}
      <section className="py-20 section-navy">
        <div className="container mx-auto px-4 lg:px-8" style={{ maxWidth: "1280px" }}>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <Reveal>
              <div
                className="rounded-lg overflow-hidden"
                style={{ border: "1px solid rgba(201,168,76,0.2)" }}
              >
                <img
                  src="/manus-storage/kate-vincent-photo_26c1ef22.png"
                  alt="Attorney Kate Abia Vincent"
                  className="w-full object-cover"
                  style={{ maxHeight: "480px", objectPosition: "top" }}
                  loading="lazy"
                />
              </div>
            </Reveal>
            <div>
              <Reveal>
                <div
                  className="text-xs font-semibold uppercase tracking-widest mb-3"
                  style={{ color: "#C9A84C", letterSpacing: "0.15em", fontFamily: "'Inter', sans-serif" }}
                >
                  Meet Your Attorney
                </div>
                <h2
                  className="gold-underline text-3xl md:text-4xl mb-6"
                  style={{ fontFamily: "'Playfair Display', serif", color: "#F5F0E8" }}
                >
                  Kate Abia Vincent
                </h2>
              </Reveal>
              <Reveal delay={0.1}>
                <p className="text-base mb-4" style={{ color: "#C8C0B0" }}>
                  Attorney Kate Abia Vincent founded Kate A Vincent Law Group PLLC with one mission: to give every client the aggressive, personal representation they deserve. Licensed in Florida, Kate brings years of courtroom experience to criminal defense, personal injury, and family law matters throughout Broward County.
                </p>
                <p className="text-base mb-6" style={{ color: "#C8C0B0" }}>
                  When you hire Kate, you work directly with Kate — not a paralegal, not a junior associate. She believes every client deserves direct attorney access and honest communication from day one.
                </p>
              </Reveal>
              <Reveal delay={0.15}>
                <Link href="/attorney" className="btn-gold inline-flex items-center gap-2">
                  Meet Kate <ArrowRight size={16} />
                </Link>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-20" style={{ background: "#0a0a0a" }}>
        <div className="container mx-auto px-4 lg:px-8" style={{ maxWidth: "1280px" }}>
          <SectionHeader label="How It Works" title="The Process" subtitle="From your first call to final resolution, we guide you through every step with clarity and confidence." />
          <ProcessSteps steps={processSteps} />
        </div>
      </section>

      {/* Cities Served */}
      <section className="py-20 section-navy">
        <div className="container mx-auto px-4 lg:px-8" style={{ maxWidth: "1280px" }}>
          <SectionHeader
            label="Where We Serve"
            title="Serving Broward County"
            subtitle="Kate A Vincent Law Group PLLC serves clients throughout Hollywood, Miramar, Fort Lauderdale, and the surrounding Broward County area."
          />
          <LocationCards />
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20" style={{ background: "#0a0a0a" }}>
        <div className="container mx-auto px-4 lg:px-8" style={{ maxWidth: "1280px" }}>
          <SectionHeader
            label="Client Stories"
            title="What Our Clients Say"
            subtitle="Hear from clients Kate has represented across criminal defense, personal injury, and family law matters in Broward County."
          />
          <TestimonialCards items={testimonials} />
          <Reveal>
            <div className="mt-10 text-center">
              <Link href="/testimonials" className="btn-outline inline-flex items-center gap-2">
                Read More Testimonials <ArrowRight size={16} />
              </Link>
            </div>
          </Reveal>
        </div>
      </section>

      {/* CTA Band */}
      <CTABand />
    </PageLayout>
  );
}
