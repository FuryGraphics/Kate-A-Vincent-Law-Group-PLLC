/**
 * Child Custody — Kate A Vincent Law Group PLLC
 * URL: /family-law/child-custody
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
  { number: 1, title: "Free Consultation", description: "Kate explains Florida's timesharing laws, your parental rights, and what the court considers in custody determinations." },
  { number: 2, title: "Parenting Plan Development", description: "We develop a comprehensive parenting plan that protects your relationship with your children and serves their best interests." },
  { number: 3, title: "Resolution", description: "We negotiate with the other parent, mediate when appropriate, and litigate aggressively when necessary to protect your parental rights." },
];

const whatWeHandle = [
  "Parenting plans and timesharing schedules",
  "Shared parental responsibility",
  "Sole parental responsibility",
  "Relocation with children (out-of-state moves)",
  "Modification of existing custody orders",
  "Emergency custody motions",
  "Paternity and custody for unmarried parents",
  "Grandparent visitation rights",
  "International custody disputes",
  "Enforcement of custody orders",
];

const faqItems = [
  {
    question: "What is a parenting plan in Florida?",
    answer: "In Florida, 'custody' is referred to as 'timesharing' and is governed by a parenting plan. A parenting plan is a comprehensive document that describes how parents will share time with their children, who makes decisions about the child's health, education, and welfare, and how parents will communicate about the child. All Florida custody cases require a parenting plan, either agreed upon by the parents or ordered by the court.",
  },
  {
    question: "How does the court decide custody in Florida?",
    answer: "Florida courts determine timesharing based on the 'best interests of the child.' The court considers numerous factors, including each parent's ability to provide a stable home environment, the child's relationship with each parent, each parent's willingness to support the child's relationship with the other parent, the geographic distance between the parents, any history of domestic violence or substance abuse, and the child's own preferences (depending on age and maturity).",
  },
  {
    question: "Can I move out of state with my child?",
    answer: "Relocating with a child more than 50 miles from the current residence requires either the written consent of the other parent or court approval. Florida's relocation statute requires advance notice and, if contested, a court hearing. The court will consider whether the relocation is in the child's best interests. This is a complex area of law — consult an attorney before making any plans to relocate.",
  },
  {
    question: "How do I modify a custody order in Florida?",
    answer: "To modify a Florida custody order, you must show a 'substantial change in circumstances' since the original order was entered. This could include a parent's relocation, a change in the child's needs, a parent's substance abuse, or other significant life changes. The modification must also be in the child's best interests. Kate can help you determine whether your situation qualifies and guide you through the modification process.",
  },
  {
    question: "What are my rights as a father in Florida?",
    answer: "Florida law does not favor mothers over fathers in custody determinations. Both parents have equal rights, and courts are required to consider both parents' ability to provide for the child. If you are not married to the child's mother, you must first establish paternity before you have legal rights to timesharing. Kate represents fathers in custody cases throughout Broward County.",
  },
  {
    question: "Do children get to choose which parent to live with in Florida?",
    answer: "Florida law does not set a specific age at which a child can choose their custodial parent. However, the court may consider the child's preference as one factor in the best interests analysis, particularly for older and more mature children. The child's preference is not determinative — the court will weigh it along with all other relevant factors.",
  },
];

export default function ChildCustody() {
  return (
    <PageLayout
      title="Hollywood FL Child Custody Lawyer | Kate A Vincent Law Group"
      description="Child custody attorney in Hollywood, FL. Parenting plans, timesharing, relocation, and custody modifications throughout Broward County. Free consultation — (786) 709-3423."
    >
      <HeroSection
        h1="Child Custody Attorney in Hollywood, FL"
        subhead="Your children deserve stability, security, and both parents in their lives. Kate A Vincent fights to protect your parental rights and your children's future."
        backgroundImage="/manus-storage/hero-family_fe0b7754.jpg"
        breadcrumbs={[
          { label: "Practice Areas", href: "/practice-areas" },
          { label: "Family Law", href: "/family-law" },
          { label: "Child Custody" },
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
                Florida Timesharing — Protecting Your Relationship with Your Children
              </h2>
            </Reveal>
            <Reveal delay={0.1}>
              <p className="text-base mb-4" style={{ color: "#C8C0B0" }}>
                In Florida, what most people call "child custody" is legally referred to as "timesharing" and "parental responsibility." Florida law presumes that it is in the best interests of children to have frequent and continuing contact with both parents — but that presumption can be overcome when circumstances warrant.
              </p>
              <p className="text-base mb-4" style={{ color: "#C8C0B0" }}>
                Whether you are establishing a parenting plan for the first time, seeking to modify an existing order, or dealing with a parent who is violating the current arrangement, Kate A Vincent Law Group PLLC provides the aggressive, knowledgeable representation you need. Kate understands that these cases are not just legal matters — they are about your children's lives and your relationship with them.
              </p>
              <p className="text-base" style={{ color: "#C8C0B0" }}>
                We represent parents in child custody cases throughout Broward County, including Hollywood, Miramar, and Fort Lauderdale. Call us today for a confidential, free consultation.
              </p>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="py-20 section-navy">
        <div className="container mx-auto px-4 lg:px-8" style={{ maxWidth: "1280px" }}>
          <SectionHeader label="Case Types" title="Child Custody Matters We Handle" />
          <WhatWeHandle items={whatWeHandle} />
        </div>
      </section>

      <section className="py-20" style={{ background: "#0a0a0a" }}>
        <div className="container mx-auto px-4 lg:px-8" style={{ maxWidth: "1280px" }}>
          <SectionHeader label="How It Works" title="The Custody Process" />
          <ProcessSteps steps={processSteps} />
        </div>
      </section>

      <section className="py-20 section-navy">
        <div className="container mx-auto px-4 lg:px-8" style={{ maxWidth: "1280px" }}>
          <SectionHeader label="Common Questions" title="Child Custody FAQ" />
          <div className="max-w-3xl">
            <FAQAccordion items={faqItems} />
          </div>
        </div>
      </section>

      <section className="py-12" style={{ background: "#0a0a0a" }}>
        <div className="container mx-auto px-4 lg:px-8" style={{ maxWidth: "1280px" }}>
          <Reveal>
            <div className="flex flex-wrap gap-4">
              <Link href="/family-law/divorce" className="btn-outline text-sm">Divorce</Link>
              <Link href="/criminal-defense/domestic-violence" className="btn-outline text-sm">Domestic Violence</Link>
              <Link href="/family-law" className="btn-outline text-sm">All Family Law</Link>
              <Link href="/contact" className="btn-gold text-sm">Free Consultation</Link>
            </div>
          </Reveal>
        </div>
      </section>

      <CTABand headline="Fighting for your children? Call Kate today — your parental rights matter." />
    </PageLayout>
  );
}
