/**
 * Slip & Fall — Kate A Vincent Law Group PLLC
 * URL: /personal-injury/slip-and-fall
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
  { number: 1, title: "Free Case Review", description: "We evaluate your slip and fall accident, assess liability, and explain your rights under Florida premises liability law — at no cost." },
  { number: 2, title: "Evidence & Investigation", description: "We act quickly to preserve surveillance footage, incident reports, and witness statements before they disappear. We document your injuries and damages thoroughly." },
  { number: 3, title: "Negotiation & Trial", description: "We hold negligent property owners and businesses accountable — negotiating aggressively for maximum compensation or taking your case to trial." },
];

const whatWeHandle = [
  "Wet floor slip and fall accidents",
  "Uneven pavement and sidewalk trips",
  "Broken or defective stairs",
  "Inadequate lighting causing falls",
  "Supermarket and retail store accidents",
  "Restaurant and hotel slip and falls",
  "Parking lot accidents",
  "Construction site falls",
  "Swimming pool accidents",
  "Negligent security leading to injury",
];

const faqItems = [
  {
    question: "What do I need to prove in a Florida slip and fall case?",
    answer: "In Florida, to win a slip and fall case you must prove that: (1) the property owner owed you a duty of care, (2) there was a dangerous condition on the property, (3) the owner knew or should have known about the condition, (4) the owner failed to fix it or warn you, and (5) this failure caused your injury. Florida's 2023 premises liability reforms made it more challenging to prove these cases, which is why experienced legal representation is critical.",
  },
  {
    question: "How long do I have to file a slip and fall claim in Florida?",
    answer: "Under Florida's 2023 tort reform, the statute of limitations for negligence-based personal injury claims (including slip and fall) was reduced to 2 years from the date of the accident. This is a significant change from the previous 4-year limit. Do not delay — contact an attorney as soon as possible after your accident.",
  },
  {
    question: "What if I was partially at fault for my slip and fall?",
    answer: "Florida uses a modified comparative negligence system. Under the 2023 reforms, if you are found to be more than 50% at fault for your own injury, you cannot recover any damages. If you are 50% or less at fault, your recovery is reduced by your percentage of fault. This makes it critical to have an attorney who can build the strongest possible case for the property owner's liability.",
  },
  {
    question: "What damages can I recover in a slip and fall case?",
    answer: "In a Florida slip and fall case, you may be entitled to recover medical expenses (past and future), lost wages and loss of earning capacity, pain and suffering, emotional distress, and loss of enjoyment of life. In cases of gross negligence, punitive damages may also be available.",
  },
  {
    question: "What should I do immediately after a slip and fall accident?",
    answer: "Seek medical attention immediately — even if you feel fine. Report the accident to the property owner or manager and get a copy of the incident report. Document the scene with photos (the hazard, your injuries, the area). Get contact information from any witnesses. Do not sign any documents from the property owner or their insurance company without consulting an attorney.",
  },
  {
    question: "Does the property owner's insurance company have to pay my medical bills?",
    answer: "Not automatically. The property owner's liability insurance will only pay if you can establish their negligence. Their insurance company will investigate the claim and may dispute liability or the extent of your injuries. Having an attorney negotiate on your behalf significantly improves your chances of a fair settlement.",
  },
];

export default function SlipAndFall() {
  return (
    <PageLayout
      title="Hollywood FL Slip and Fall Lawyer | Kate A Vincent Law Group"
      description="Slip and fall attorney in Hollywood, FL. Premises liability cases against negligent property owners throughout Broward County. Free consultation — (786) 709-3423."
    >
      <HeroSection
        h1="Slip & Fall Attorney in Hollywood, FL"
        subhead="Property owners have a duty to keep their premises safe. When they fail, Kate A Vincent holds them accountable."
        backgroundImage="/manus-storage/hero-injury_ab9c2df4.jpg"
        breadcrumbs={[
          { label: "Practice Areas", href: "/practice-areas" },
          { label: "Personal Injury", href: "/personal-injury" },
          { label: "Slip & Fall" },
        ]}
        ctas={[
          { label: "Free Case Review", href: "/contact", variant: "gold" },
          { label: "Call (786) 709-3423", href: "tel:+17867093423", variant: "outline" },
        ]}
      />

      <section className="py-20" style={{ background: "#0a0a0a" }}>
        <div className="container mx-auto px-4 lg:px-8" style={{ maxWidth: "1280px" }}>
          <div className="max-w-3xl">
            <Reveal>
              <h2 className="gold-underline text-3xl md:text-4xl mb-6" style={{ fontFamily: "'Playfair Display', serif", color: "#F5F0E8" }}>
                Florida Premises Liability — Know Your Rights
              </h2>
            </Reveal>
            <Reveal delay={0.1}>
              <p className="text-base mb-4" style={{ color: "#C8C0B0" }}>
                Slip and fall accidents can cause serious injuries — broken bones, traumatic brain injuries, spinal cord damage, and more. When a property owner's negligence causes your injury, Florida law gives you the right to seek compensation. But Florida's premises liability laws are complex, and recent 2023 tort reform changes make these cases more challenging than ever.
              </p>
              <p className="text-base mb-4" style={{ color: "#C8C0B0" }}>
                Insurance companies for property owners and businesses are experienced at minimizing slip and fall claims. They will investigate quickly, gather evidence, and look for any way to blame you for your own injury. You need an attorney who acts just as quickly — preserving evidence, documenting your damages, and building a strong liability case.
              </p>
              <p className="text-base" style={{ color: "#C8C0B0" }}>
                Kate A Vincent Law Group PLLC handles slip and fall cases on a contingency fee basis — no fee unless we win. Call us today for a free case evaluation.
              </p>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="py-20 section-navy">
        <div className="container mx-auto px-4 lg:px-8" style={{ maxWidth: "1280px" }}>
          <SectionHeader label="Case Types" title="Slip & Fall Cases We Handle" />
          <WhatWeHandle items={whatWeHandle} />
        </div>
      </section>

      <section className="py-20" style={{ background: "#0a0a0a" }}>
        <div className="container mx-auto px-4 lg:px-8" style={{ maxWidth: "1280px" }}>
          <SectionHeader label="How It Works" title="The Slip & Fall Claim Process" />
          <ProcessSteps steps={processSteps} />
        </div>
      </section>

      <section className="py-20 section-navy">
        <div className="container mx-auto px-4 lg:px-8" style={{ maxWidth: "1280px" }}>
          <SectionHeader label="Common Questions" title="Slip & Fall FAQ" />
          <div className="max-w-3xl">
            <FAQAccordion items={faqItems} />
          </div>
        </div>
      </section>

      <section className="py-12" style={{ background: "#0a0a0a" }}>
        <div className="container mx-auto px-4 lg:px-8" style={{ maxWidth: "1280px" }}>
          <Reveal>
            <div className="flex flex-wrap gap-4">
              <Link href="/personal-injury/car-accidents" className="btn-outline text-sm">Car Accidents</Link>
              <Link href="/personal-injury" className="btn-outline text-sm">All Personal Injury</Link>
              <Link href="/contact" className="btn-gold text-sm">Free Case Review</Link>
            </div>
          </Reveal>
        </div>
      </section>

      <CTABand headline="Injured in a slip and fall? Get your free case review today." />
    </PageLayout>
  );
}
