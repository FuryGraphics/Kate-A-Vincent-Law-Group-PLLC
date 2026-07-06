/**
 * Divorce — Kate A Vincent Law Group PLLC
 * URL: /family-law/divorce
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
  { number: 1, title: "Free Consultation", description: "Kate explains Florida divorce law, your rights, and what to expect — helping you make informed decisions from the start." },
  { number: 2, title: "Filing & Negotiation", description: "We file the petition, negotiate property division, support, and custody arrangements — always with your long-term interests in mind." },
  { number: 3, title: "Resolution", description: "We work toward a fair settlement through mediation or, when necessary, take your case to trial to protect your rights." },
];

const whatWeHandle = [
  "Contested divorce",
  "Uncontested divorce",
  "High-asset divorce",
  "Equitable distribution of marital property",
  "Alimony and spousal support",
  "Child custody and timesharing in divorce",
  "Child support in divorce",
  "Business valuation in divorce",
  "Retirement account division (QDROs)",
  "Post-divorce modifications",
];

const faqItems = [
  {
    question: "Do I need a reason to get divorced in Florida?",
    answer: "No. Florida is a 'no-fault' divorce state. The only ground required for divorce is that the marriage is 'irretrievably broken.' You do not need to prove adultery, abandonment, or any other fault. Either spouse can file for divorce without the other's consent.",
  },
  {
    question: "How long does a divorce take in Florida?",
    answer: "An uncontested divorce (where both parties agree on all issues) can be finalized in as little as 3-4 weeks after filing. A contested divorce — where the parties disagree on property, custody, or support — can take anywhere from several months to over a year, depending on the complexity of the issues and the court's schedule.",
  },
  {
    question: "How is property divided in a Florida divorce?",
    answer: "Florida follows the principle of 'equitable distribution,' meaning marital property is divided fairly — though not necessarily equally. The court considers factors such as the length of the marriage, each spouse's economic circumstances, contributions to the marriage, and any intentional dissipation of assets. Separate property (owned before marriage or received as a gift/inheritance) is generally not subject to division.",
  },
  {
    question: "Will I have to pay alimony in Florida?",
    answer: "Florida law was significantly reformed in 2023. Permanent alimony was eliminated. The court may now award bridge-the-gap, rehabilitative, durational, or temporary alimony based on factors including the length of the marriage, each party's financial resources, the standard of living during the marriage, and each party's earning capacity. Durational alimony cannot exceed 50% of the length of the marriage for marriages under 20 years.",
  },
  {
    question: "What happens to the family home in a Florida divorce?",
    answer: "The family home is typically the largest marital asset. Options include: one spouse buys out the other's interest and keeps the home, the home is sold and proceeds divided, or the home is temporarily awarded to the custodial parent for the children's stability. The right approach depends on your specific financial situation and custody arrangement.",
  },
  {
    question: "Can I get divorced if my spouse doesn't want to?",
    answer: "Yes. Florida is a no-fault state, and one spouse cannot prevent a divorce. If your spouse refuses to participate in the process, you can still obtain a divorce — the court will proceed and make decisions on your behalf if necessary.",
  },
];

export default function Divorce() {
  return (
    <PageLayout
      title="Hollywood FL Divorce Attorney | Kate A Vincent Law Group"
      description="Divorce attorney in Hollywood, FL. Contested and uncontested divorce, property division, alimony, and custody throughout Broward County. Free consultation — (786) 709-3423."
    >
      <HeroSection
        h1="Divorce Attorney in Hollywood, FL"
        subhead="Divorce is one of life's most difficult transitions. Kate A Vincent guides you through it with clarity, strategy, and unwavering advocacy."
        backgroundImage="/manus-storage/hero-family_fe0b7754.jpg"
        breadcrumbs={[
          { label: "Practice Areas", href: "/practice-areas" },
          { label: "Family Law", href: "/family-law" },
          { label: "Divorce" },
        ]}
        ctas={[
          { label: "Free Consultation", href: "/contact", variant: "gold" },
          { label: "Call (786) 709-3423", href: "tel:+17867093423", variant: "outline" },
        ]}
      />

      <section className="py-20" style={{ background: "#0a0a0a" }}>
        <div className="container mx-auto px-4 lg:px-8" style={{ maxWidth: "1280px" }}>
          <div className="max-w-3xl">
            <Reveal>
              <h2 className="gold-underline text-3xl md:text-4xl mb-6" style={{ fontFamily: "'Playfair Display', serif", color: "#F5F0E8" }}>
                Florida Divorce — Protecting Your Rights and Your Future
              </h2>
            </Reveal>
            <Reveal delay={0.1}>
              <p className="text-base mb-4" style={{ color: "#C8C0B0" }}>
                Divorce is never easy, but the decisions made during this process will shape your financial future and your relationship with your children for years to come. Florida's divorce laws — including the 2023 alimony reform — have changed significantly, and having an attorney who understands these changes is critical.
              </p>
              <p className="text-base mb-4" style={{ color: "#C8C0B0" }}>
                Whether your divorce is amicable and uncontested, or involves complex property division, business interests, and contested custody, Kate A Vincent Law Group PLLC provides the strategic guidance and aggressive advocacy you need. Kate works directly with every client to understand their goals and build a strategy designed to achieve them.
              </p>
              <p className="text-base" style={{ color: "#C8C0B0" }}>
                We represent divorce clients throughout Broward County, including Hollywood, Miramar, and Fort Lauderdale. Call us today for a confidential, free consultation.
              </p>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="py-20 section-navy">
        <div className="container mx-auto px-4 lg:px-8" style={{ maxWidth: "1280px" }}>
          <SectionHeader label="Case Types" title="Divorce Matters We Handle" />
          <WhatWeHandle items={whatWeHandle} />
        </div>
      </section>

      <section className="py-20" style={{ background: "#0a0a0a" }}>
        <div className="container mx-auto px-4 lg:px-8" style={{ maxWidth: "1280px" }}>
          <SectionHeader label="How It Works" title="The Divorce Process" />
          <ProcessSteps steps={processSteps} />
        </div>
      </section>

      <section className="py-20 section-navy">
        <div className="container mx-auto px-4 lg:px-8" style={{ maxWidth: "1280px" }}>
          <SectionHeader label="Common Questions" title="Florida Divorce FAQ" />
          <div className="max-w-3xl">
            <FAQAccordion items={faqItems} />
          </div>
        </div>
      </section>

      <section className="py-12" style={{ background: "#0a0a0a" }}>
        <div className="container mx-auto px-4 lg:px-8" style={{ maxWidth: "1280px" }}>
          <Reveal>
            <div className="flex flex-wrap gap-4">
              <Link href="/family-law/child-custody" className="btn-outline text-sm">Child Custody</Link>
              <Link href="/family-law" className="btn-outline text-sm">All Family Law</Link>
              <Link href="/contact" className="btn-gold text-sm">Free Consultation</Link>
            </div>
          </Reveal>
        </div>
      </section>

      <CTABand headline="Going through a divorce? Get your free consultation today." />
    </PageLayout>
  );
}
