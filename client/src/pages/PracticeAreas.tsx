/**
 * Practice Areas Hub — Kate A Vincent Law Group PLLC
 * URL: /practice-areas
 */
import { Link } from "wouter";
import { CheckCircle2 } from "lucide-react";
import {
  PageLayout,
  HeroSection,
  PracticeAreaCards,
  CTABand,
  Reveal,
  SectionHeader,
} from "../components/Layout";
import { ScaleIcon, ShieldIcon, CourthouseIcon } from "../components/LegalIcons";

const practiceCards = [
  {
    title: "Criminal Defense",
    description: "Facing criminal charges is one of the most frightening experiences of your life. Kate fights aggressively to protect your freedom, your record, and your future.",
    href: "/criminal-defense",
    icon: <ScaleIcon size={36} />,
  },
  {
    title: "Personal Injury",
    description: "When someone else's negligence causes your injury, you deserve full and fair compensation. We handle the legal fight so you can focus on recovery.",
    href: "/personal-injury",
    icon: <ShieldIcon size={36} />,
  },
  {
    title: "Family Law",
    description: "Divorce, child custody, and family disputes require both legal expertise and compassionate guidance. Kate protects what matters most — your family.",
    href: "/family-law",
    icon: <CourthouseIcon size={36} />,
  },
];

const whyHireUs = [
  "Local Broward County focus — rooted in the community we serve",
  "Direct attorney access — you work with Kate, not a paralegal",
  "Free initial consultation — no cost to discuss your case",
  "Flat fee and contingency fee options available depending on case type",
  "24/7 phone availability for urgent criminal and injury matters",
  "Serving Hollywood, Miramar, Fort Lauderdale, and all of Broward County",
];

export default function PracticeAreas() {
  return (
    <PageLayout
      title="Practice Areas | Kate A Vincent Law Group — Hollywood FL"
      description="Criminal defense, personal injury, and family law in Hollywood, FL. Kate A Vincent Law Group PLLC serves all of Broward County. Free consultation — (786) 709-3423."
    >
      <HeroSection
        h1="Practice Areas"
        subhead="Kate A Vincent Law Group PLLC handles criminal defense, personal injury, and family law cases throughout Broward County, Florida."
        backgroundImage="/manus-storage/hero-main_a33af5b3.jpg"
        breadcrumbs={[{ label: "Practice Areas" }]}
        ctas={[
          { label: "Free Consultation", href: "/contact", variant: "gold" },
          { label: "Call (786) 709-3423", href: "tel:+17867093423", variant: "outline" },
        ]}
      />

      {/* Practice Cards */}
      <section className="py-20" style={{ background: "#0a0a0a" }}>
        <div className="container mx-auto px-4 lg:px-8" style={{ maxWidth: "1280px" }}>
          <SectionHeader
            label="Areas of Practice"
            title="How We Can Help"
            subtitle="Whether you're facing criminal charges, recovering from an injury, or navigating a family law matter, Kate A Vincent Law Group PLLC is ready to fight for you."
          />
          <PracticeAreaCards cards={practiceCards} />
        </div>
      </section>

      {/* Why Hire Us */}
      <section className="py-20 section-navy">
        <div className="container mx-auto px-4 lg:px-8" style={{ maxWidth: "1280px" }}>
          <SectionHeader
            label="Why Choose Us"
            title="The Kate A Vincent Difference"
            subtitle="Not all law firms are the same. Here's what sets Kate A Vincent Law Group PLLC apart."
          />
          <Reveal>
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-3xl">
              {whyHireUs.map((item, i) => (
                <li key={i} className="flex items-start gap-3">
                  <CheckCircle2
                    size={18}
                    className="flex-shrink-0 mt-0.5"
                    style={{ color: "#C9A84C" }}
                  />
                  <span className="text-sm" style={{ color: "#C8C0B0" }}>{item}</span>
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </section>

      <CTABand headline="Ready to discuss your case? Get a free consultation today." />
    </PageLayout>
  );
}
