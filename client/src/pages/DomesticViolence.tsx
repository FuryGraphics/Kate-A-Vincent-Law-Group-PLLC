/**
 * Domestic Violence Defense — Kate A Vincent Law Group PLLC
 * URL: /criminal-defense/domestic-violence
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
  { number: 1, title: "Immediate Defense", description: "A domestic violence arrest triggers automatic consequences. Call Kate immediately — she advises you on your rights and begins building your defense." },
  { number: 2, title: "Case Strategy", description: "Kate investigates the evidence, identifies inconsistencies, and develops a defense strategy — whether challenging the charges, negotiating for reduction, or preparing for trial." },
  { number: 3, title: "Resolution", description: "We fight for dismissal, reduction, or acquittal — and work to protect your custody rights, firearm rights, and future employment." },
];

const whatWeHandle = [
  "Domestic battery and aggravated battery",
  "Violation of domestic violence injunction",
  "False accusation defense",
  "Dual-arrest situations",
  "Stalking and cyberstalking charges",
  "Injunction defense (restraining orders)",
  "Repeat violence injunctions",
  "Dating violence charges",
  "Child abuse allegations connected to domestic cases",
  "Probation violations related to domestic charges",
];

const faqItems = [
  {
    question: "What happens if I'm arrested for domestic violence in Florida?",
    answer: "In Florida, a domestic violence arrest typically results in mandatory overnight detention — you cannot be released until you see a judge. The state can prosecute the case even if the alleged victim does not want to press charges. You will likely face a no-contact order, which can prevent you from returning to your own home. An attorney should be contacted immediately.",
  },
  {
    question: "Can domestic violence charges be dropped if the victim recants?",
    answer: "In Florida, the state — not the victim — decides whether to prosecute a domestic violence case. Even if the alleged victim recants or refuses to cooperate, the prosecution may still proceed using other evidence such as police reports, photos, 911 recordings, and witness statements. However, a victim's recantation can significantly impact the strength of the prosecution's case, and an experienced attorney can use this strategically.",
  },
  {
    question: "Will a domestic violence charge affect my child custody?",
    answer: "Yes — a domestic violence conviction or even a pending charge can have serious implications for child custody and timesharing in Florida. Courts consider domestic violence as a major factor in custody determinations. A no-contact order may also prevent you from seeing your children. This is why it's critical to fight the charges aggressively from the start.",
  },
  {
    question: "What is a domestic violence injunction in Florida?",
    answer: "A domestic violence injunction (restraining order) is a court order that prohibits you from having contact with the petitioner. It can require you to leave your home, surrender your firearms, and affect your employment. An injunction can be issued based solely on the petitioner's allegations, without you being present. You have the right to contest the injunction at a hearing, and Kate can represent you at that hearing.",
  },
  {
    question: "Can I get my firearm rights back after a domestic violence conviction?",
    answer: "Under federal law (the Lautenberg Amendment), a domestic violence misdemeanor conviction results in a lifetime ban on possessing firearms. In Florida, a domestic violence conviction also results in loss of firearm rights. Restoring these rights is extremely difficult and often impossible. This is one of the most serious long-term consequences of a domestic violence conviction — another reason to fight the charges.",
  },
  {
    question: "Do I need a lawyer for a first domestic violence offense?",
    answer: "Absolutely. Even a first-offense domestic violence charge in Florida carries serious consequences: possible jail time, probation, mandatory batterers' intervention program, loss of firearm rights, and a permanent criminal record. The consequences extend far beyond the criminal case — affecting custody, employment, and housing. Do not face these charges without experienced legal representation.",
  },
];

export default function DomesticViolence() {
  return (
    <PageLayout
      title="Hollywood FL Domestic Violence Lawyer | Kate A Vincent Law Group"
      description="Domestic violence defense attorney in Hollywood, FL. Fighting false accusations, injunctions, and charges throughout Broward County. Free consultation — (786) 709-3423."
    >
      <HeroSection
        h1="Domestic Violence Defense Attorney in Hollywood, FL"
        subhead="A domestic violence charge can destroy your family, your freedom, and your future. Kate A Vincent fights to protect all three."
        backgroundImage="/manus-storage/hero-criminal_f10d9655.jpg"
        breadcrumbs={[
          { label: "Practice Areas", href: "/practice-areas" },
          { label: "Criminal Defense", href: "/criminal-defense" },
          { label: "Domestic Violence" },
        ]}
        ctas={[
          { label: "Free Consultation", href: "/contact", variant: "gold" },
          { label: "Call (786) 709-3423", href: "tel:+17867093423", variant: "outline" },
        ]}
      />

      {/* Intro */}
      <section className="py-20" style={{ background: "#0a0a0a" }}>
        <div className="container mx-auto px-4 lg:px-8" style={{ maxWidth: "1280px" }}>
          <div className="max-w-3xl">
            <Reveal>
              <h2 className="gold-underline text-3xl md:text-4xl mb-6" style={{ fontFamily: "'Playfair Display', serif", color: "#F5F0E8" }}>
                Domestic Violence Charges Demand Immediate Action
              </h2>
            </Reveal>
            <Reveal delay={0.1}>
              <p className="text-base mb-4" style={{ color: "#C8C0B0" }}>
                Florida takes domestic violence charges extremely seriously. Unlike many other states, Florida law allows prosecutors to pursue domestic violence cases even when the alleged victim does not want to press charges. An arrest can result in mandatory overnight detention, a no-contact order that removes you from your home, loss of firearm rights, and a permanent criminal record.
              </p>
              <p className="text-base mb-4" style={{ color: "#C8C0B0" }}>
                Domestic violence charges are often filed based on one person's word, and false accusations are not uncommon. Whether you are facing genuine misunderstandings, exaggerated claims, or outright false allegations, you deserve a vigorous defense. Attorney Kate Abia Vincent has the determination to challenge the evidence, expose inconsistencies, and fight for your rights.
              </p>
              <p className="text-base" style={{ color: "#C8C0B0" }}>
                Beyond the criminal case, a domestic violence charge can affect your child custody rights, your employment, and your ability to possess firearms. Kate understands the full scope of these consequences and fights on every front.
              </p>
            </Reveal>
          </div>
        </div>
      </section>

      {/* What We Handle */}
      <section className="py-20 section-navy">
        <div className="container mx-auto px-4 lg:px-8" style={{ maxWidth: "1280px" }}>
          <SectionHeader label="Case Types" title="Domestic Violence Cases We Handle" />
          <WhatWeHandle items={whatWeHandle} />
        </div>
      </section>

      {/* Process */}
      <section className="py-20" style={{ background: "#0a0a0a" }}>
        <div className="container mx-auto px-4 lg:px-8" style={{ maxWidth: "1280px" }}>
          <SectionHeader label="How It Works" title="The Defense Process" />
          <ProcessSteps steps={processSteps} />
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 section-navy">
        <div className="container mx-auto px-4 lg:px-8" style={{ maxWidth: "1280px" }}>
          <SectionHeader label="Common Questions" title="Domestic Violence Defense FAQ" />
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
              <Link href="/criminal-defense/dui" className="btn-outline text-sm">DUI Defense</Link>
              <Link href="/criminal-defense" className="btn-outline text-sm">All Criminal Defense</Link>
              <Link href="/family-law/child-custody" className="btn-outline text-sm">Child Custody</Link>
              <Link href="/contact" className="btn-gold text-sm">Free Consultation</Link>
            </div>
          </Reveal>
        </div>
      </section>

      <CTABand headline="Facing domestic violence charges? Call Kate now — your future depends on it." />
    </PageLayout>
  );
}
