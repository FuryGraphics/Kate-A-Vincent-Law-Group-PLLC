/**
 * Footer — Sovereign Counsel Design System
 * Dark (#0d0d0d), gold firm name, full address/phone/email/links.
 * Logo with glow treatment.
 */
import { Link } from "wouter";
import { Phone, Mail, MapPin, Scale } from "lucide-react";

const PHONE = "(786) 709-3423";
const PHONE_HREF = "tel:+17867093423";
const EMAIL = "Info@kateavincentlawgroup.com";
const ADDRESS = "3440 Hollywood Blvd, Suite 415, Hollywood, FL 33021";

export default function Footer() {
  return (
    <footer style={{ background: "#0d0d0d", borderTop: "1px solid rgba(201,168,76,0.2)" }}>
      <div className="container mx-auto px-4 lg:px-8 py-16" style={{ maxWidth: "1280px" }}>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand column */}
          <div className="lg:col-span-1">
            <Link href="/" className="flex items-center gap-3 mb-4">
              <div
                className="flex items-center justify-center w-10 h-10 rounded"
                style={{
                  background: "rgba(201,168,76,0.12)",
                  border: "1px solid rgba(201,168,76,0.4)",
                  boxShadow: "0 0 12px rgba(201,168,76,0.3)",
                }}
              >
                <img
                  src="/manus-storage/logo-icon_ab3f0725.png"
                  alt="KV Logo"
                  className="w-7 h-7 object-contain logo-glow"
                  loading="lazy"
                />
              </div>
              <div>
                <div
                  className="font-bold text-sm leading-tight"
                  style={{
                    fontFamily: "'Playfair Display', serif",
                    color: "#F5F0E8",
                    textShadow: "0 0 16px rgba(201,168,76,0.35)",
                  }}
                >
                  Kate A Vincent
                </div>
                <div
                  className="text-xs tracking-widest uppercase"
                  style={{ color: "#C9A84C", letterSpacing: "0.12em" }}
                >
                  Law Group PLLC
                </div>
              </div>
            </Link>
            <p className="text-sm leading-relaxed mb-4" style={{ color: "#9A9080" }}>
              Aggressive representation for criminal, injury, and family law matters across Broward County, FL.
            </p>
            <div className="flex flex-col gap-2">
              <a
                href={PHONE_HREF}
                className="flex items-center gap-2 text-sm transition-colors"
                style={{ color: "#C9A84C" }}
              >
                <Phone size={14} />
                {PHONE}
              </a>
              <a
                href={`mailto:${EMAIL}`}
                className="flex items-center gap-2 text-sm transition-colors"
                style={{ color: "#9A9080" }}
                onMouseEnter={(e) => (e.currentTarget.style.color = "#C9A84C")}
                onMouseLeave={(e) => (e.currentTarget.style.color = "#9A9080")}
              >
                <Mail size={14} />
                {EMAIL}
              </a>
              <div className="flex items-start gap-2 text-sm" style={{ color: "#9A9080" }}>
                <MapPin size={14} className="mt-0.5 flex-shrink-0" />
                <span>{ADDRESS}</span>
              </div>
            </div>
          </div>

          {/* Practice Areas */}
          <div>
            <h4
              className="text-sm font-semibold uppercase tracking-widest mb-4"
              style={{ color: "#C9A84C", letterSpacing: "0.12em", fontFamily: "'Inter', sans-serif" }}
            >
              Practice Areas
            </h4>
            <ul className="space-y-2">
              {[
                { label: "Criminal Defense", href: "/criminal-defense" },
                { label: "DUI Defense", href: "/criminal-defense/dui" },
                { label: "Domestic Violence", href: "/criminal-defense/domestic-violence" },
                { label: "Personal Injury", href: "/personal-injury" },
                { label: "Car Accidents", href: "/personal-injury/car-accidents" },
                { label: "Slip & Fall", href: "/personal-injury/slip-and-fall" },
                { label: "Family Law", href: "/family-law" },
                { label: "Divorce", href: "/family-law/divorce" },
                { label: "Child Custody", href: "/family-law/child-custody" },
              ].map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-sm transition-colors"
                    style={{ color: "#9A9080" }}
                    onMouseEnter={(e) => (e.currentTarget.style.color = "#C9A84C")}
                    onMouseLeave={(e) => (e.currentTarget.style.color = "#9A9080")}
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Locations */}
          <div>
            <h4
              className="text-sm font-semibold uppercase tracking-widest mb-4"
              style={{ color: "#C9A84C", letterSpacing: "0.12em", fontFamily: "'Inter', sans-serif" }}
            >
              Locations Served
            </h4>
            <ul className="space-y-2 mb-6">
              {[
                { label: "Hollywood, FL (HQ)", href: "/hollywood-fl" },
                { label: "Miramar, FL", href: "/miramar-fl" },
                { label: "Fort Lauderdale, FL", href: "/fort-lauderdale-fl" },
              ].map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-sm transition-colors"
                    style={{ color: "#9A9080" }}
                    onMouseEnter={(e) => (e.currentTarget.style.color = "#C9A84C")}
                    onMouseLeave={(e) => (e.currentTarget.style.color = "#9A9080")}
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
            <h4
              className="text-sm font-semibold uppercase tracking-widest mb-4"
              style={{ color: "#C9A84C", letterSpacing: "0.12em", fontFamily: "'Inter', sans-serif" }}
            >
              Quick Links
            </h4>
            <ul className="space-y-2">
              {[
                { label: "About Attorney Kate", href: "/attorney" },
                { label: "Testimonials", href: "/testimonials" },
                { label: "Blog & Resources", href: "/blog" },
                { label: "Contact Us", href: "/contact" },
              ].map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-sm transition-colors"
                    style={{ color: "#9A9080" }}
                    onMouseEnter={(e) => (e.currentTarget.style.color = "#C9A84C")}
                    onMouseLeave={(e) => (e.currentTarget.style.color = "#9A9080")}
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* CTA column */}
          <div>
            <h4
              className="text-sm font-semibold uppercase tracking-widest mb-4"
              style={{ color: "#C9A84C", letterSpacing: "0.12em", fontFamily: "'Inter', sans-serif" }}
            >
              Free Consultation
            </h4>
            <p className="text-sm mb-4" style={{ color: "#9A9080" }}>
              Available 24/7. Call now or send a message — we respond quickly.
            </p>
            <a href={PHONE_HREF} className="btn-gold w-full justify-center mb-3 text-sm">
              <Phone size={14} />
              Call Now
            </a>
            <Link href="/contact" className="btn-outline w-full justify-center text-sm">
              Send a Message
            </Link>
            <div className="mt-6 p-3 rounded" style={{ background: "rgba(201,168,76,0.08)", border: "1px solid rgba(201,168,76,0.15)" }}>
              <div className="flex items-center gap-2 mb-1">
                <Scale size={14} style={{ color: "#C9A84C" }} />
                <span className="text-xs font-semibold uppercase tracking-wide" style={{ color: "#C9A84C" }}>Office Hours</span>
              </div>
              <p className="text-xs" style={{ color: "#9A9080" }}>Mon–Fri: 9:00 AM – 6:00 PM</p>
              <p className="text-xs" style={{ color: "#9A9080" }}>24/7 Phone Available</p>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div style={{ borderTop: "1px solid rgba(201,168,76,0.1)", background: "#080808" }}>
        <div className="container mx-auto px-4 lg:px-8 py-5" style={{ maxWidth: "1280px" }}>
          <div className="flex flex-col md:flex-row items-center justify-between gap-3">
            <p className="text-xs text-center md:text-left" style={{ color: "#6B6358" }}>
              © {new Date().getFullYear()} Kate A Vincent Law Group PLLC. All rights reserved. | Attorney advertising. Prior results do not guarantee a similar outcome.
            </p>
            <div className="flex items-center gap-4">
              <Link
                href="/disclaimer"
                className="text-xs transition-colors"
                style={{ color: "#6B6358" }}
                onMouseEnter={(e) => (e.currentTarget.style.color = "#C9A84C")}
                onMouseLeave={(e) => (e.currentTarget.style.color = "#6B6358")}
              >
                Disclaimer
              </Link>
              <Link
                href="/privacy-policy"
                className="text-xs transition-colors"
                style={{ color: "#6B6358" }}
                onMouseEnter={(e) => (e.currentTarget.style.color = "#C9A84C")}
                onMouseLeave={(e) => (e.currentTarget.style.color = "#6B6358")}
              >
                Privacy Policy
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
