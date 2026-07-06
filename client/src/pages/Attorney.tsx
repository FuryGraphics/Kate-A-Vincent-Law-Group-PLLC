/**
 * Attorney Bio — Kate A Vincent Law Group PLLC
 * URL: /attorney
 * Design: Sovereign Counsel — large portrait, credentials, practice focus, CTA.
 */
import { Link } from "wouter";
import { ArrowRight, Scale, Award, BookOpen, Users } from "lucide-react";
import {
  PageLayout,
  HeroSection,
  CTABand,
  PracticeAreaCards,
  Reveal,
  SectionHeader,
} from "../components/Layout";

const practiceCards = [
  {
    title: "Criminal Defense",
    description: "Aggressive defense for DUI, domestic violence, drug charges, and all criminal matters.",
    href: "/criminal-defense",
    icon: "⚖️",
  },
  {
    title: "Personal Injury",
    description: "Fighting for maximum compensation after car accidents, slip and falls, and serious injuries.",
    href: "/personal-injury",
    icon: "🛡️",
  },
  {
    title: "Family Law",
    description: "Protecting your family in divorce, child custody, and all family law matters.",
    href: "/family-law",
    icon: "🏛️",
  },
];

const credentials = [
  { icon: <Scale size={20} />, label: "Florida Bar", detail: "Licensed to practice in the State of Florida" },
  { icon: <Award size={20} />, label: "Bar Admissions", detail: "Florida State Bar" },
  { icon: <BookOpen size={20} />, label: "Education", detail: "Juris Doctor (J.D.) | Florida-licensed attorney" },
  { icon: <Users size={20} />, label: "Associations", detail: "Florida Bar Association | Broward County Bar Association" },
];

export default function Attorney() {
  return (
    <PageLayout
      title="Kate Vincent Hollywood FL Lawyer | Kate A Vincent Law Group"
      description="Meet Attorney Kate Abia Vincent — founder of Kate A Vincent Law Group PLLC. Criminal defense, personal injury, and family law in Hollywood, FL. Free consultation."
    >
      <HeroSection
        h1="Meet Kate Abia Vincent"
        subhead="Founder, Kate A Vincent Law Group PLLC"
        backgroundImage="/manus-storage/hero-main_a33af5b3.jpg"
        breadcrumbs={[{ label: "Attorney" }]}
        ctas={[
          { label: "Free Consultation", href: "/contact", variant: "gold" },
        ]}
      />

      {/* Bio Section */}
      <section className="py-20" style={{ background: "#0a0a0a" }}>
        <div className="container mx-auto px-4 lg:px-8" style={{ maxWidth: "1280px" }}>
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 items-start">
            {/* Portrait */}
            <Reveal className="lg:col-span-2">
              <div
                className="rounded-lg overflow-hidden sticky top-24"
                style={{ border: "1px solid rgba(201,168,76,0.25)" }}
              >
                <img
                  src="/manus-storage/kate-vincent-photo_26c1ef22.png"
                  alt="Attorney Kate Abia Vincent, Kate A Vincent Law Group PLLC, Hollywood FL"
                  className="w-full object-cover"
                  loading="lazy"
                />
                <div
                  className="p-5"
                  style={{ background: "#111827", borderTop: "1px solid rgba(201,168,76,0.15)" }}
                >
                  <div
                    className="font-bold text-xl mb-1"
                    style={{ fontFamily: "'Playfair Display', serif", color: "#F5F0E8" }}
                  >
                    Kate Abia Vincent
                  </div>
                  <div className="text-sm mb-3" style={{ color: "#C9A84C" }}>
                    Attorney & Founder
                  </div>
                  <div className="text-sm" style={{ color: "#9A9080" }}>
                    Kate A Vincent Law Group PLLC<br />
                    3440 Hollywood Blvd, Suite 415<br />
                    Hollywood, FL 33021
                  </div>
                </div>
              </div>
            </Reveal>

            {/* Bio Content */}
            <div className="lg:col-span-3">
              <Reveal>
                <div
                  className="text-xs font-semibold uppercase tracking-widest mb-3"
                  style={{ color: "#C9A84C", letterSpacing: "0.15em", fontFamily: "'Inter', sans-serif" }}
                >
                  About Kate
                </div>
                <h2
                  className="gold-underline text-3xl md:text-4xl mb-6"
                  style={{ fontFamily: "'Playfair Display', serif", color: "#F5F0E8" }}
                >
                  A Relentless Advocate for Her Clients
                </h2>
              </Reveal>
              <Reveal delay={0.1}>
                <p className="text-base mb-4" style={{ color: "#C8C0B0" }}>
                  Attorney Kate Abia Vincent founded Kate A Vincent Law Group PLLC after years of experience in the Florida legal system, driven by a simple but powerful belief: every person facing a legal crisis deserves a skilled, dedicated attorney who will fight for them personally — not pass them off to a paralegal or junior associate.
                </p>
                <p className="text-base mb-4" style={{ color: "#C8C0B0" }}>
                  Licensed to practice in the State of Florida, Kate has built her practice around three core areas: criminal defense, personal injury, and family law. She understands that these are not just legal matters — they are defining moments in her clients' lives. A criminal charge can threaten your freedom. A serious injury can upend your family's financial security. A divorce or custody battle can reshape your children's future. Kate approaches every case with that weight in mind.
                </p>
                <p className="text-base mb-6" style={{ color: "#C8C0B0" }}>
                  Based in Hollywood, FL, Kate serves clients throughout Broward County, including Miramar and Fort Lauderdale. Her philosophy is simple: direct access, honest communication, and aggressive advocacy from the first consultation to the final resolution.
                </p>
              </Reveal>

              {/* Credentials */}
              <Reveal delay={0.15}>
                <h3
                  className="text-xl mb-5"
                  style={{ fontFamily: "'Playfair Display', serif", color: "#F5F0E8" }}
                >
                  Credentials & Admissions
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
                  {credentials.map((cred, i) => (
                    <div
                      key={i}
                      className="p-4 rounded-lg"
                      style={{ background: "#111827", border: "1px solid rgba(201,168,76,0.12)" }}
                    >
                      <div className="flex items-center gap-2 mb-2" style={{ color: "#C9A84C" }}>
                        {cred.icon}
                        <span className="font-semibold text-sm" style={{ fontFamily: "'Inter', sans-serif" }}>
                          {cred.label}
                        </span>
                      </div>
                      <p className="text-xs" style={{ color: "#9A9080" }}>{cred.detail}</p>
                    </div>
                  ))}
                </div>
              </Reveal>

              {/* Community */}
              <Reveal delay={0.2}>
                <h3
                  className="text-xl mb-3"
                  style={{ fontFamily: "'Playfair Display', serif", color: "#F5F0E8" }}
                >
                  Community & Personal Note
                </h3>
                <p className="text-base mb-6" style={{ color: "#C8C0B0" }}>
                  Kate is deeply committed to the Hollywood, FL community. She understands that access to quality legal representation should not depend on wealth or connections. Her practice is built on the belief that every person — regardless of background — deserves a skilled, dedicated attorney who will fight for them personally. Kate is proud to serve the diverse communities of Broward County.
                </p>
              </Reveal>

              <Reveal delay={0.25}>
                <div className="flex flex-wrap gap-4">
                  <Link href="/contact" className="btn-gold inline-flex items-center gap-2">
                    Schedule a Consultation <ArrowRight size={16} />
                  </Link>
                  <Link href="/testimonials" className="btn-outline inline-flex items-center gap-2">
                    Read Client Reviews
                  </Link>
                </div>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      {/* Practice Focus */}
      <section className="py-20 section-navy">
        <div className="container mx-auto px-4 lg:px-8" style={{ maxWidth: "1280px" }}>
          <SectionHeader
            label="Practice Focus"
            title="Areas of Law"
            subtitle="Kate handles criminal defense, personal injury, and family law cases throughout Broward County."
          />
          <PracticeAreaCards cards={practiceCards} />
        </div>
      </section>

      <CTABand
        headline="Work directly with Kate — schedule your free consultation."
        subtext="No junior associates. No runaround. Direct attorney access from day one."
      />
    </PageLayout>
  );
}
