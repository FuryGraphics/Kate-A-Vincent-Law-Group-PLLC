/**
 * Fort Lauderdale, FL Location Page — Kate A Vincent Law Group PLLC
 * URL: /fort-lauderdale-fl
 */
import { Link } from "wouter";
import { MapPin, Phone, Mail } from "lucide-react";
import {
  PageLayout,
  HeroSection,
  PracticeAreaCards,
  CTABand,
  Reveal,
  SectionHeader,
} from "../components/Layout";
import { MapView } from "../components/Map";
import { ScaleIcon, ShieldIcon, CourthouseIcon } from "../components/LegalIcons";

const practiceCards = [
  { title: "Criminal Defense", description: "DUI, domestic violence, drug charges, and all criminal matters for Fort Lauderdale residents.", href: "/criminal-defense", icon: <ScaleIcon size={32} /> },
  { title: "Personal Injury", description: "Car accidents, slip and fall, and serious injury claims for Fort Lauderdale residents. No fee unless we win.", href: "/personal-injury", icon: <ShieldIcon size={32} /> },
  { title: "Family Law", description: "Divorce, child custody, and family law matters for Fort Lauderdale families.", href: "/family-law", icon: <CourthouseIcon size={32} /> },
];

export default function FortLauderdaleFL() {
  return (
    <PageLayout
      title="Fort Lauderdale FL Attorney | Kate A Vincent Law Group"
      description="Kate A Vincent Law Group PLLC — criminal defense, personal injury, and family law attorney serving Fort Lauderdale, FL. Free consultation — (786) 709-3423."
    >
      <HeroSection
        h1="Fort Lauderdale, FL Criminal, Injury & Family Law Attorney"
        subhead="Kate A Vincent Law Group PLLC serves clients throughout Fort Lauderdale and Broward County. Call for a free consultation."
        backgroundImage="/manus-storage/hero-main_a33af5b3.jpg"
        breadcrumbs={[{ label: "Fort Lauderdale, FL" }]}
        ctas={[
          { label: "Free Consultation", href: "/contact", variant: "gold" },
          { label: "Call (786) 709-3423", href: "tel:+17867093423", variant: "outline" },
        ]}
      />

      {/* Office Info */}
      <section className="py-20" style={{ background: "#0a0a0a" }}>
        <div className="container mx-auto px-4 lg:px-8" style={{ maxWidth: "1280px" }}>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <SectionHeader label="Serving Fort Lauderdale" title="Legal Representation for Fort Lauderdale Residents" />
              <Reveal>
                <p className="text-base mb-6" style={{ color: "#C8C0B0" }}>
                  Kate A Vincent Law Group PLLC serves clients throughout Fort Lauderdale, FL. Our Hollywood office is conveniently located to serve Fort Lauderdale residents facing criminal charges, personal injury claims, or family law matters throughout Broward County.
                </p>
                <div className="space-y-4 mb-8">
                  <div className="flex items-start gap-3">
                    <MapPin size={18} className="flex-shrink-0 mt-0.5" style={{ color: "#C9A84C" }} />
                    <div>
                      <div className="font-semibold text-sm mb-0.5" style={{ color: "#F5F0E8" }}>Office Address</div>
                      <div className="text-sm" style={{ color: "#9A9080" }}>3440 Hollywood Blvd, Suite 415<br />Hollywood, FL 33021</div>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Phone size={18} className="flex-shrink-0 mt-0.5" style={{ color: "#C9A84C" }} />
                    <div>
                      <div className="font-semibold text-sm mb-0.5" style={{ color: "#F5F0E8" }}>Phone</div>
                      <a href="tel:+17867093423" className="text-sm" style={{ color: "#9A9080" }}>(786) 709-3423</a>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Mail size={18} className="flex-shrink-0 mt-0.5" style={{ color: "#C9A84C" }} />
                    <div>
                      <div className="font-semibold text-sm mb-0.5" style={{ color: "#F5F0E8" }}>Email</div>
                      <a href="mailto:Info@kateavincentlawgroup.com" className="text-sm" style={{ color: "#9A9080" }}>Info@kateavincentlawgroup.com</a>
                    </div>
                  </div>
                </div>
                <div className="flex flex-wrap gap-3">
                  <a href="tel:+17867093423" className="btn-gold text-sm">
                    <Phone size={14} />
                    Call Now
                  </a>
                  <Link href="/contact" className="btn-outline text-sm">Free Consultation</Link>
                </div>
              </Reveal>
            </div>
            <Reveal delay={0.1}>
              <div
                className="rounded-lg overflow-hidden"
                style={{ height: "360px", border: "1px solid rgba(201,168,76,0.2)" }}
              >
                <MapView
                  initialCenter={{ lat: 26.1224, lng: -80.1373 }}
                  initialZoom={13}
                  className="w-full h-full"
                />
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Practice Areas */}
      <section className="py-20 section-navy">
        <div className="container mx-auto px-4 lg:px-8" style={{ maxWidth: "1280px" }}>
          <SectionHeader label="Legal Services" title="Practice Areas in Fort Lauderdale, FL" />
          <PracticeAreaCards cards={practiceCards} />
        </div>
      </section>

      {/* Courthouse Info */}
      <section className="py-20" style={{ background: "#0a0a0a" }}>
        <div className="container mx-auto px-4 lg:px-8" style={{ maxWidth: "1280px" }}>
          <SectionHeader label="Local Courts" title="Broward County Courthouse" />
          <Reveal>
            <div className="p-6 rounded-lg max-w-2xl" style={{ background: "#111827", border: "1px solid rgba(201,168,76,0.15)" }}>
              <h3 className="text-lg mb-3" style={{ fontFamily: "'Playfair Display', serif", color: "#F5F0E8" }}>Broward County Courthouse</h3>
              <p className="text-sm mb-2" style={{ color: "#9A9080" }}>201 SE 6th St, Fort Lauderdale, FL 33301</p>
              <p className="text-sm" style={{ color: "#9A9080" }}>
                The Broward County Courthouse is the primary venue for criminal, civil, and family law proceedings in Broward County. Kate A Vincent Law Group PLLC regularly appears here on behalf of Fort Lauderdale and Broward County clients.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      <CTABand headline="Fort Lauderdale resident facing a legal issue? Call Kate today." />
    </PageLayout>
  );
}
