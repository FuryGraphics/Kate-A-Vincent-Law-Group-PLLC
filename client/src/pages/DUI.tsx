/**
 * DUI Defense — Kate A Vincent Law Group PLLC
 * URL: /criminal-defense/dui
 */
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
import { Link } from "wouter";

const processSteps = [
  { number: 1, title: "Immediate Consultation", description: "Call us right away. We advise you on what to say (and not say) to law enforcement and begin building your defense from day one." },
  { number: 2, title: "Case Investigation", description: "We scrutinize the traffic stop, field sobriety tests, breathalyzer calibration, and arrest procedure for any constitutional violations." },
  { number: 3, title: "Defense & Resolution", description: "We negotiate for dismissal or reduction, challenge evidence in court, and fight for your driving privileges at the DMV hearing." },
];

const whatWeHandle = [
  "First-time DUI charges",
  "Repeat / multiple DUI offenses",
  "Felony DUI (serious bodily injury or death)",
  "Underage DUI",
  "DUI with property damage",
  "Breathalyzer and field sobriety test challenges",
  "License suspension hearings (DHSMV)",
  "DUI manslaughter defense",
  "Refusal to submit to testing",
  "Commercial driver DUI",
];

const faqItems = [
  {
    question: "Can I refuse a breathalyzer in Florida?",
    answer: "Yes, you can refuse a breathalyzer in Florida, but there are consequences. Under Florida's implied consent law, refusing a breathalyzer results in an automatic license suspension of one year for a first refusal, and 18 months for a second or subsequent refusal. A second refusal is also a misdemeanor offense. However, refusing the test may make it harder for the prosecution to prove the DUI charge, which is why it's important to consult an attorney immediately.",
  },
  {
    question: "Will I lose my license after a DUI in Florida?",
    answer: "A DUI conviction in Florida carries a mandatory license suspension of 180 days to one year for a first offense. However, you have 10 days from the date of arrest to request a formal review hearing with the DHSMV to challenge the suspension. Acting quickly is critical. Kate can help you request this hearing and fight to protect your driving privileges.",
  },
  {
    question: "Is jail time mandatory for a first DUI in Florida?",
    answer: "For a first-offense DUI in Florida, jail time is not always mandatory, but it is possible. A first DUI can result in up to 6 months in jail (up to 9 months if the BAC was 0.15 or higher, or if a minor was in the vehicle). However, many first-time offenders avoid jail through probation, community service, and DUI school. An experienced attorney can significantly improve your chances of avoiding incarceration.",
  },
  {
    question: "How much does a DUI lawyer cost in Florida?",
    answer: "DUI attorney fees in Florida vary based on the complexity of the case, the attorney's experience, and whether the case goes to trial. Kate A Vincent Law Group PLLC offers free initial consultations and transparent fee structures. Contact us to discuss your specific situation and get a clear understanding of costs.",
  },
  {
    question: "Can a DUI be expunged in Florida?",
    answer: "A DUI conviction cannot be expunged or sealed in Florida — it is a permanent record. However, if your DUI charge was dismissed, you were found not guilty, or you completed a diversion program, you may be eligible for expungement or sealing. This is one of the most important reasons to fight a DUI charge aggressively rather than simply accepting a plea.",
  },
  {
    question: "What happens at my first court date after a DUI arrest?",
    answer: "Your first court date after a DUI arrest is typically an arraignment, where you will be formally charged and asked to enter a plea. It is critical to have an attorney present at this hearing. Kate will appear with you, advise you on your plea, and begin the process of challenging the evidence against you.",
  },
];

export default function DUI() {
  return (
    <PageLayout
      title="Hollywood FL DUI Lawyer | Kate A Vincent Law Group"
      description="DUI defense attorney in Hollywood, FL. Challenging breathalyzer results, protecting your license, and fighting for dismissal. Free consultation — (786) 709-3423."
    >
      <HeroSection
        h1="DUI Defense Attorney in Hollywood, FL"
        subhead="A DUI charge can cost you your license, your job, and your freedom. Kate A Vincent fights to protect all three."
        backgroundImage="/manus-storage/hero-criminal_f10d9655.jpg"
        breadcrumbs={[
          { label: "Practice Areas", href: "/practice-areas" },
          { label: "Criminal Defense", href: "/criminal-defense" },
          { label: "DUI" },
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
                Florida DUI Charges Are Serious — Act Now
              </h2>
            </Reveal>
            <Reveal delay={0.1}>
              <p className="text-base mb-4" style={{ color: "#C8C0B0" }}>
                In Florida, a DUI (Driving Under the Influence) conviction carries severe consequences — mandatory license suspension, fines, possible jail time, probation, DUI school, and a permanent criminal record that cannot be expunged. Even a first-time DUI can derail your career, your insurance rates, and your life.
              </p>
              <p className="text-base mb-4" style={{ color: "#C8C0B0" }}>
                But a DUI charge is not a conviction. Florida DUI law is complex, and there are many ways to challenge the evidence against you — from the legality of the traffic stop to the accuracy of the breathalyzer or field sobriety tests. Attorney Kate Abia Vincent knows these defenses and uses them aggressively.
              </p>
              <p className="text-base" style={{ color: "#C8C0B0" }}>
                If you've been arrested for DUI in Hollywood, Miramar, Fort Lauderdale, or anywhere in Broward County, call Kate immediately. You have only 10 days from your arrest to request a hearing to protect your driving privileges — don't wait.
              </p>
            </Reveal>
          </div>
        </div>
      </section>

      {/* What We Handle */}
      <section className="py-20 section-navy">
        <div className="container mx-auto px-4 lg:px-8" style={{ maxWidth: "1280px" }}>
          <SectionHeader label="Case Types" title="DUI Cases We Handle" />
          <WhatWeHandle items={whatWeHandle} />
        </div>
      </section>

      {/* Process */}
      <section className="py-20" style={{ background: "#0a0a0a" }}>
        <div className="container mx-auto px-4 lg:px-8" style={{ maxWidth: "1280px" }}>
          <SectionHeader label="How It Works" title="The DUI Defense Process" />
          <ProcessSteps steps={processSteps} />
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 section-navy">
        <div className="container mx-auto px-4 lg:px-8" style={{ maxWidth: "1280px" }}>
          <SectionHeader label="Common Questions" title="DUI Defense FAQ" />
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
              <Link href="/criminal-defense/domestic-violence" className="btn-outline text-sm">
                Domestic Violence Defense
              </Link>
              <Link href="/criminal-defense" className="btn-outline text-sm">
                All Criminal Defense
              </Link>
              <Link href="/contact" className="btn-gold text-sm">
                Free Consultation
              </Link>
            </div>
          </Reveal>
        </div>
      </section>

      <CTABand headline="Arrested for DUI? Call Kate now — every hour counts." />
    </PageLayout>
  );
}
