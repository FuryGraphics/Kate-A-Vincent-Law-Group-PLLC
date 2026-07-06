/**
 * Personal Injury Parent Page — Kate A Vincent Law Group PLLC
 * URL: /personal-injury
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
import { CarIcon, SlipIcon, TruckIcon, MotorcycleIcon, DoveIcon, PedestrianIcon } from "../components/LegalIcons";

const subPracticeCards = [
  { title: "Car Accidents", description: "Rear-end collisions, hit and run, uninsured motorist, rideshare accidents — we fight for maximum compensation.", href: "/personal-injury/car-accidents", icon: <CarIcon size={28} />, live: true },
  { title: "Slip & Fall", description: "Property owner negligence causing injury — we hold them accountable and pursue full compensation.", href: "/personal-injury/slip-and-fall", icon: <SlipIcon size={28} />, live: true },
  { title: "Truck Accidents", description: "Commercial truck accidents often involve multiple liable parties and serious injuries.", href: "/personal-injury", icon: <TruckIcon size={28} />, live: false },
  { title: "Motorcycle Accidents", description: "Motorcyclists face unique dangers and unique legal challenges on Florida roads.", href: "/personal-injury", icon: <MotorcycleIcon size={28} />, live: false },
  { title: "Wrongful Death", description: "When negligence costs a life, we fight for the family left behind.", href: "/personal-injury", icon: <DoveIcon size={28} />, live: false },
  { title: "Pedestrian Accidents", description: "Pedestrians struck by vehicles deserve full and fair compensation.", href: "/personal-injury", icon: <PedestrianIcon size={28} />, live: false },
];

const processSteps = [
  { number: 1, title: "Free Case Review", description: "We evaluate your case at no cost, explain your rights, and tell you honestly what your claim may be worth." },
  { number: 2, title: "Investigation", description: "We gather evidence, obtain accident reports, interview witnesses, and work with experts to build the strongest possible case." },
  { number: 3, title: "Negotiation & Trial", description: "We negotiate aggressively with insurance companies for maximum compensation — and take your case to trial if they won't pay what you deserve." },
];

const whatWeHandle = [
  "Car accidents and multi-vehicle collisions",
  "Slip, trip, and fall accidents",
  "Truck and commercial vehicle accidents",
  "Motorcycle accidents",
  "Pedestrian and bicycle accidents",
  "Rideshare accidents (Uber, Lyft)",
  "Uninsured/underinsured motorist claims",
  "Wrongful death",
  "Premises liability",
  "Hit and run accidents",
];

export default function PersonalInjury() {
  return (
    <PageLayout
      title="Hollywood FL Personal Injury Attorney | Kate A Vincent Law Group"
      description="Personal injury attorney in Hollywood, FL. Car accidents, slip and fall, wrongful death. No fee unless we win. Free consultation — call (786) 709-3423."
    >
      <HeroSection
        h1="Personal Injury Attorney in Hollywood, FL"
        subhead="When someone else's negligence injures you, you deserve full and fair compensation. Kate A Vincent fights for maximum recovery throughout Broward County."
        backgroundImage="/manus-storage/hero-injury_ab9c2df4.jpg"
        breadcrumbs={[
          { label: "Practice Areas", href: "/practice-areas" },
          { label: "Personal Injury" },
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
              <SectionHeader title="You Deserve Full and Fair Compensation" />
              <Reveal>
                <p className="text-base mb-4" style={{ color: "#C8C0B0" }}>
                  When you're injured because of someone else's negligence, you shouldn't have to fight the insurance company alone. Insurance adjusters are trained to minimize your claim — they will offer you less than you deserve, and they count on you not knowing your rights.
                </p>
                <p className="text-base mb-4" style={{ color: "#C8C0B0" }}>
                  At Kate A Vincent Law Group PLLC, we level the playing field. We handle every aspect of your personal injury claim — from gathering evidence and negotiating with insurers to taking your case to trial if necessary. Our goal is to maximize your recovery so you can focus on healing.
                </p>
                <p className="text-base" style={{ color: "#C8C0B0" }}>
                  We serve injury victims throughout Broward County, including Hollywood, Miramar, and Fort Lauderdale. Call us immediately after an accident — the sooner we get involved, the stronger your case.
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
                  Injured? Get Help Now.
                </h3>
                <p className="text-sm mb-5" style={{ color: "#9A9080" }}>
                  Time is critical in injury cases. Call Kate now for a free, no-obligation case review.
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
          <SectionHeader label="Case Types" title="Personal Injury Practice Areas" />
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
          <SectionHeader label="How It Works" title="The Injury Claim Process" />
          <ProcessSteps steps={processSteps} />
        </div>
      </section>

      {/* No Fee Section */}
      <section className="py-20" style={{ background: "#0a0a0a" }}>
        <div className="container mx-auto px-4 lg:px-8" style={{ maxWidth: "1280px" }}>
          <div className="max-w-3xl">
            <SectionHeader label="Our Promise" title="No Fee Unless We Win" />
            <Reveal>
              <p className="text-base mb-4" style={{ color: "#C8C0B0" }}>
                We handle personal injury cases on a contingency fee basis. This means you pay no attorney fees unless we recover compensation for you. There are no upfront costs, no hourly fees, and no financial risk to you. We only get paid when you get paid — which means we are fully motivated to maximize your recovery.
              </p>
              <p className="text-base" style={{ color: "#C8C0B0" }}>
                During your free consultation, Kate will review your case, explain your options, and outline the fee arrangement in plain language. You'll know exactly what to expect before signing anything.
              </p>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Locations */}
      <section className="py-20 section-navy">
        <div className="container mx-auto px-4 lg:px-8" style={{ maxWidth: "1280px" }}>
          <SectionHeader label="Where We Serve" title="Personal Injury Representation Across Broward County" />
          <LocationCards />
        </div>
      </section>

      <CTABand headline="Injured in an accident? Get your free case review today." />
    </PageLayout>
  );
}
