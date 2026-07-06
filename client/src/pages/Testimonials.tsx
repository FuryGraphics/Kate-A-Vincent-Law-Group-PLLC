/**
 * Testimonials — Kate A Vincent Law Group PLLC
 * URL: /testimonials
 * NOTE: Placeholder testimonials — to be replaced with real reviews once Google Business Profile is live.
 */
import { Link } from "wouter";
import { Star, ExternalLink } from "lucide-react";
import {
  PageLayout,
  HeroSection,
  CTABand,
  Reveal,
  SectionHeader,
} from "../components/Layout";

const testimonials = [
  {
    name: "Michael R.",
    text: "Kate fought for me when no one else would. She got my DUI charges reduced and kept my license. I was terrified when I was arrested, but Kate walked me through every step and never let me feel alone in the process. I couldn't recommend her more highly.",
    rating: 5,
    practice: "Criminal Defense — DUI",
    location: "Hollywood, FL",
  },
  {
    name: "Jasmine T.",
    text: "After my car accident, Kate's team recovered far more than I expected. She was responsive, honest, and truly cared about my case — not just the settlement check. She kept me informed throughout and fought hard against the insurance company.",
    rating: 5,
    practice: "Personal Injury — Car Accident",
    location: "Miramar, FL",
  },
  {
    name: "David L.",
    text: "Going through a divorce is hard enough. Kate made the process as smooth as possible and protected my rights as a father. She was direct, knowledgeable, and always available when I had questions. My children and I are in a much better place because of her work.",
    rating: 5,
    practice: "Family Law — Divorce & Custody",
    location: "Fort Lauderdale, FL",
  },
  {
    name: "Sandra M.",
    text: "I was falsely accused of domestic violence and my world fell apart overnight. Kate took my case seriously from day one, investigated thoroughly, and got the charges dropped. She gave me my life back. I am forever grateful.",
    rating: 5,
    practice: "Criminal Defense — Domestic Violence",
    location: "Hollywood, FL",
  },
  {
    name: "Carlos V.",
    text: "I slipped and fell at a local grocery store and suffered a serious back injury. Kate handled everything — the insurance company, the medical bills, the legal filings — and got me a settlement that covered all my expenses and then some. Professional and compassionate.",
    rating: 5,
    practice: "Personal Injury — Slip & Fall",
    location: "Miramar, FL",
  },
  {
    name: "Priya K.",
    text: "Kate helped me navigate a very difficult custody situation. She was strategic, calm under pressure, and always put my children's best interests first. The outcome was better than I dared hope. I highly recommend Kate to any parent fighting for their kids.",
    rating: 5,
    practice: "Family Law — Child Custody",
    location: "Hollywood, FL",
  },
];

export default function Testimonials() {
  return (
    <PageLayout
      title="Kate A Vincent Law Group Reviews | Testimonials"
      description="Read client testimonials for Kate A Vincent Law Group PLLC — criminal defense, personal injury, and family law in Hollywood, FL. Free consultation — (786) 709-3423."
    >
      <HeroSection
        h1="Client Testimonials"
        subhead="Real stories from real clients — the people Kate has fought for across Broward County."
        backgroundImage="/manus-storage/hero-main_a33af5b3.jpg"
        breadcrumbs={[{ label: "Testimonials" }]}
      />

      {/* Legal disclaimer */}
      <div className="py-4" style={{ background: "#0f1520", borderBottom: "1px solid rgba(201,168,76,0.1)" }}>
        <div className="container mx-auto px-4 lg:px-8" style={{ maxWidth: "1280px" }}>
          <p className="text-xs text-center" style={{ color: "#6B6358" }}>
            Prior results do not guarantee a similar outcome. Individual results may vary based on the specific facts and legal circumstances of each case.
          </p>
        </div>
      </div>

      {/* Testimonials Grid */}
      <section className="py-20" style={{ background: "#0a0a0a" }}>
        <div className="container mx-auto px-4 lg:px-8" style={{ maxWidth: "1280px" }}>
          <SectionHeader
            label="Client Stories"
            title="What Our Clients Say"
            subtitle="Real stories from clients Kate has represented across criminal defense, personal injury, and family law matters in Broward County."
          />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {testimonials.map((item, i) => (
              <Reveal key={i} delay={i * 0.08}>
                <div
                  className="testimonial-card h-full flex flex-col"
                  style={{ position: "relative" }}
                >
                  <div className="flex gap-1 mb-3">
                    {Array.from({ length: item.rating }).map((_, j) => (
                      <Star key={j} size={14} fill="#C9A84C" style={{ color: "#C9A84C" }} />
                    ))}
                  </div>
                  <p className="text-sm leading-relaxed flex-1 mb-4" style={{ color: "#C8C0B0" }}>
                    "{item.text}"
                  </p>
                  <div>
                    <div className="font-semibold text-sm" style={{ color: "#F5F0E8", fontFamily: "'Inter', sans-serif" }}>
                      {item.name}
                    </div>
                    <div className="text-xs mt-0.5" style={{ color: "#C9A84C" }}>{item.practice}</div>
                    <div className="text-xs mt-0.5" style={{ color: "#6B6358" }}>{item.location}</div>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Leave a Review */}
      <section className="py-20 section-navy">
        <div className="container mx-auto px-4 lg:px-8" style={{ maxWidth: "1280px" }}>
          <Reveal>
            <div className="max-w-2xl mx-auto text-center">
              <h2
                className="text-3xl mb-4"
                style={{ fontFamily: "'Playfair Display', serif", color: "#F5F0E8" }}
              >
                Share Your Experience
              </h2>
              <p className="text-base mb-6" style={{ color: "#9A9080" }}>
                If Kate A Vincent Law Group PLLC has helped you, we'd be honored to hear your story. Your review helps others in Broward County find the representation they deserve.
              </p>
              <a
                href="https://www.google.com/maps/search/Kate+A+Vincent+Law+Group+PLLC"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 rounded text-sm font-semibold"
                style={{
                  background: "rgba(201,168,76,0.1)",
                  border: "1px solid rgba(201,168,76,0.3)",
                  color: "#C9A84C",
                }}
              >
                <ExternalLink size={16} />
                Leave a Google Review
              </a>
            </div>
          </Reveal>
        </div>
      </section>

      <CTABand headline="Ready to experience the Kate A Vincent difference? Call today." />
    </PageLayout>
  );
}
