/**
 * Car Accidents — Kate A Vincent Law Group PLLC
 * URL: /personal-injury/car-accidents
 */
import { Link } from "wouter";
import {
  PageLayout,
  HeroSection,
  ProcessSteps,
  WhatWeHandle,
  FAQAccordion,
  CTABand,
  Reveal,
  SectionHeader,
} from "../components/Layout";

const processSteps = [
  { number: 1, title: "Free Case Review", description: "We evaluate your accident, explain Florida's no-fault insurance rules, and tell you honestly what your claim may be worth — at no cost." },
  { number: 2, title: "Investigation & Documentation", description: "We gather police reports, medical records, witness statements, and accident reconstruction evidence to build the strongest possible case." },
  { number: 3, title: "Negotiation & Trial", description: "We negotiate aggressively with insurance companies for maximum compensation — and take your case to trial if they won't pay what you deserve." },
];

const whatWeHandle = [
  "Rear-end collisions",
  "Head-on collisions",
  "Hit and run accidents",
  "Uninsured and underinsured motorist claims",
  "Multi-car pileups",
  "Rideshare accidents (Uber, Lyft)",
  "Intersection and red-light accidents",
  "Distracted driving accidents",
  "Drunk driving accidents",
  "Commercial vehicle accidents",
];

const faqItems = [
  {
    question: "What should I do immediately after a car accident in Florida?",
    answer: "First, ensure everyone's safety and call 911. Seek medical attention even if you feel fine — some injuries appear days later. Document the scene with photos, exchange information with the other driver, and get witness contact information. Do not admit fault or make statements to the other driver's insurance company without consulting an attorney. Call Kate A Vincent Law Group as soon as possible.",
  },
  {
    question: "How long do I have to file a car accident claim in Florida?",
    answer: "Florida's statute of limitations for personal injury claims is generally 2 years from the date of the accident (as of 2023 legislative changes). However, certain claims — such as those against government entities — have shorter deadlines. Do not wait to consult an attorney, as evidence can disappear quickly.",
  },
  {
    question: "Florida is a no-fault state — can I still sue after a car accident?",
    answer: "Florida is a no-fault state, meaning your own Personal Injury Protection (PIP) insurance covers your initial medical expenses regardless of who caused the accident. However, if your injuries meet Florida's 'serious injury threshold' — including significant and permanent loss of an important bodily function, permanent injury, significant scarring, or death — you can step outside the no-fault system and sue the at-fault driver for additional damages.",
  },
  {
    question: "What if the other driver doesn't have insurance?",
    answer: "If the at-fault driver is uninsured or underinsured, you may be able to recover compensation through your own Uninsured/Underinsured Motorist (UM/UIM) coverage. Kate can help you navigate your own insurance policy and maximize your recovery even when the other driver has no insurance.",
  },
  {
    question: "How is compensation calculated in a Florida car accident case?",
    answer: "Compensation in a Florida car accident case can include medical expenses (past and future), lost wages and loss of earning capacity, pain and suffering, emotional distress, property damage, and loss of enjoyment of life. Florida uses a modified comparative negligence rule — if you are found more than 50% at fault, you cannot recover damages.",
  },
  {
    question: "Should I accept the insurance company's first settlement offer?",
    answer: "Almost never. Insurance companies' first offers are typically far below the full value of your claim. They are designed to close your case quickly and cheaply. Once you accept a settlement, you typically cannot seek additional compensation. Always consult an attorney before accepting any settlement offer.",
  },
];

export default function CarAccidents() {
  return (
    <PageLayout
      title="Hollywood FL Car Accident Lawyer | Kate A Vincent Law Group"
      description="Car accident attorney in Hollywood, FL. Fighting for maximum compensation after collisions, hit and run, and rideshare accidents. Free consultation — (786) 709-3423."
    >
      <HeroSection
        h1="Car Accident Attorney in Hollywood, FL"
        subhead="Insurance companies have lawyers working for them. You should too. Kate A Vincent fights for every dollar you deserve after a car accident."
        backgroundImage="/manus-storage/hero-injury_ab9c2df4.jpg"
        breadcrumbs={[
          { label: "Practice Areas", href: "/practice-areas" },
          { label: "Personal Injury", href: "/personal-injury" },
          { label: "Car Accidents" },
        ]}
        ctas={[
          { label: "Free Case Review", href: "/contact", variant: "gold" },
          { label: "Call (786) 709-3423", href: "tel:+17867093423", variant: "outline" },
        ]}
      />

      {/* Intro */}
      <section className="py-20" style={{ background: "#0a0a0a" }}>
        <div className="container mx-auto px-4 lg:px-8" style={{ maxWidth: "1280px" }}>
          <div className="max-w-3xl">
            <Reveal>
              <h2 className="gold-underline text-3xl md:text-4xl mb-6" style={{ fontFamily: "'Playfair Display', serif", color: "#F5F0E8" }}>
                Florida Car Accident Claims Are Complex — Get Help Now
              </h2>
            </Reveal>
            <Reveal delay={0.1}>
              <p className="text-base mb-4" style={{ color: "#C8C0B0" }}>
                Florida's no-fault insurance system and comparative negligence rules make car accident claims more complex than in many other states. Insurance companies know these rules inside and out — and they use them to minimize what they pay you. Without an experienced attorney, you may settle for far less than your claim is worth.
              </p>
              <p className="text-base mb-4" style={{ color: "#C8C0B0" }}>
                At Kate A Vincent Law Group PLLC, we handle car accident cases on a contingency fee basis — you pay nothing unless we win. We investigate your accident thoroughly, document all of your damages, and negotiate aggressively with insurance companies. If they won't pay what you deserve, we take them to court.
              </p>
              <p className="text-base" style={{ color: "#C8C0B0" }}>
                We serve car accident victims throughout Broward County, including Hollywood, Miramar, and Fort Lauderdale. Call us today for a free, no-obligation case review.
              </p>
            </Reveal>
          </div>
        </div>
      </section>

      {/* What We Handle */}
      <section className="py-20 section-navy">
        <div className="container mx-auto px-4 lg:px-8" style={{ maxWidth: "1280px" }}>
          <SectionHeader label="Case Types" title="Car Accident Cases We Handle" />
          <WhatWeHandle items={whatWeHandle} />
        </div>
      </section>

      {/* Process */}
      <section className="py-20" style={{ background: "#0a0a0a" }}>
        <div className="container mx-auto px-4 lg:px-8" style={{ maxWidth: "1280px" }}>
          <SectionHeader label="How It Works" title="The Car Accident Claim Process" />
          <ProcessSteps steps={processSteps} />
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 section-navy">
        <div className="container mx-auto px-4 lg:px-8" style={{ maxWidth: "1280px" }}>
          <SectionHeader label="Common Questions" title="Car Accident FAQ" />
          <div className="max-w-3xl">
            <FAQAccordion items={faqItems} />
          </div>
        </div>
      </section>

      {/* Internal Links */}
      <section className="py-12" style={{ background: "#0a0a0a" }}>
        <div className="container mx-auto px-4 lg:px-8" style={{ maxWidth: "1280px" }}>
          <Reveal>
            <div className="flex flex-wrap gap-4">
              <Link href="/personal-injury/slip-and-fall" className="btn-outline text-sm">Slip & Fall</Link>
              <Link href="/personal-injury" className="btn-outline text-sm">All Personal Injury</Link>
              <Link href="/contact" className="btn-gold text-sm">Free Case Review</Link>
            </div>
          </Reveal>
        </div>
      </section>

      <CTABand headline="Injured in a car accident? Call Kate now — no fee unless we win." />
    </PageLayout>
  );
}
