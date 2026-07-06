/**
 * Navbar — Sovereign Counsel Design System
 * Transparent over hero, transitions to solid dark on scroll.
 * Logo: bright/glow treatment against dark background.
 * Mobile: hamburger menu with full-screen overlay.
 */
import { useState, useEffect } from "react";
import { Link, useLocation } from "wouter";
import { Menu, X, Phone, ChevronDown } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const PHONE = "(786) 709-3423";
const PHONE_HREF = "tel:+17867093423";

const navLinks = [
  { label: "Home", href: "/" },
  {
    label: "Practice Areas",
    href: "/practice-areas",
    children: [
      {
        label: "Criminal Defense",
        href: "/criminal-defense",
        children: [
          { label: "DUI", href: "/criminal-defense/dui" },
          { label: "Domestic Violence", href: "/criminal-defense/domestic-violence" },
        ],
      },
      {
        label: "Personal Injury",
        href: "/personal-injury",
        children: [
          { label: "Car Accidents", href: "/personal-injury/car-accidents" },
          { label: "Slip & Fall", href: "/personal-injury/slip-and-fall" },
        ],
      },
      {
        label: "Family Law",
        href: "/family-law",
        children: [
          { label: "Divorce", href: "/family-law/divorce" },
          { label: "Child Custody", href: "/family-law/child-custody" },
        ],
      },
    ],
  },
  { label: "Attorney", href: "/attorney" },
  { label: "Testimonials", href: "/testimonials" },
  { label: "Blog", href: "/blog" },
  { label: "Contact", href: "/contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const [location] = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
    setOpenDropdown(null);
  }, [location]);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [mobileOpen]);

  return (
    <>
      <header
        className="fixed top-0 left-0 right-0 z-40 transition-all duration-300"
        style={{
          backgroundColor: scrolled ? "rgba(10,10,10,0.97)" : "transparent",
          backdropFilter: scrolled ? "blur(12px)" : "none",
          borderBottom: scrolled ? "1px solid rgba(201,168,76,0.15)" : "1px solid transparent",
          boxShadow: scrolled ? "0 4px 24px rgba(0,0,0,0.4)" : "none",
        }}
      >
        <div className="container mx-auto px-4 lg:px-8" style={{ maxWidth: "1280px" }}>
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <Link href="/" className="flex items-center gap-3 group" aria-label="Kate A Vincent Law Group PLLC Home">
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
                  loading="eager"
                />
              </div>
              <div>
                <div
                  className="font-bold leading-tight text-sm tracking-wide"
                  style={{
                    fontFamily: "'Playfair Display', serif",
                    color: "#F5F0E8",
                    textShadow: "0 0 20px rgba(201,168,76,0.4)",
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

            {/* Desktop Nav */}
            <nav className="hidden lg:flex items-center gap-1">
              {navLinks.map((link) =>
                link.children ? (
                  <div
                    key={link.href}
                    className="relative"
                    onMouseEnter={() => setOpenDropdown(link.href)}
                    onMouseLeave={() => setOpenDropdown(null)}
                  >
                    <button
                      className="flex items-center gap-1 px-3 py-2 text-sm font-medium rounded transition-colors duration-150"
                      style={{ color: "#C8C0B0", fontFamily: "'Inter', sans-serif" }}
                      onMouseEnter={(e) => (e.currentTarget.style.color = "#C9A84C")}
                      onMouseLeave={(e) => (e.currentTarget.style.color = "#C8C0B0")}
                    >
                      {link.label}
                      <ChevronDown size={14} />
                    </button>
                    <AnimatePresence>
                      {openDropdown === link.href && (
                        <motion.div
                          initial={{ opacity: 0, y: 8 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: 8 }}
                          transition={{ duration: 0.18, ease: [0.23, 1, 0.32, 1] }}
                          className="absolute top-full left-0 pt-2 z-50"
                          style={{ minWidth: "220px" }}
                        >
                          <div
                            className="rounded-md overflow-hidden"
                            style={{
                              background: "#111827",
                              border: "1px solid rgba(201,168,76,0.2)",
                              boxShadow: "0 16px 40px rgba(0,0,0,0.6)",
                            }}
                          >
                            <Link
                              href={link.href}
                              className="block px-4 py-3 text-sm font-semibold border-b"
                              style={{
                                color: "#C9A84C",
                                borderColor: "rgba(201,168,76,0.15)",
                                fontFamily: "'Inter', sans-serif",
                              }}
                            >
                              All {link.label}
                            </Link>
                            {link.children.map((child) => (
                              <div key={child.href}>
                                <Link
                                  href={child.href}
                                  className="block px-4 py-2.5 text-sm font-medium transition-colors"
                                  style={{ color: "#F5F0E8", fontFamily: "'Inter', sans-serif" }}
                                  onMouseEnter={(e) => {
                                    (e.currentTarget as HTMLElement).style.color = "#C9A84C";
                                    (e.currentTarget as HTMLElement).style.background = "rgba(201,168,76,0.08)";
                                  }}
                                  onMouseLeave={(e) => {
                                    (e.currentTarget as HTMLElement).style.color = "#F5F0E8";
                                    (e.currentTarget as HTMLElement).style.background = "transparent";
                                  }}
                                >
                                  {child.label}
                                </Link>
                                {child.children?.map((sub) => (
                                  <Link
                                    key={sub.href}
                                    href={sub.href}
                                    className="block pl-8 pr-4 py-2 text-xs transition-colors"
                                    style={{ color: "#9A9080", fontFamily: "'Inter', sans-serif" }}
                                    onMouseEnter={(e) => {
                                      (e.currentTarget as HTMLElement).style.color = "#C9A84C";
                                      (e.currentTarget as HTMLElement).style.background = "rgba(201,168,76,0.06)";
                                    }}
                                    onMouseLeave={(e) => {
                                      (e.currentTarget as HTMLElement).style.color = "#9A9080";
                                      (e.currentTarget as HTMLElement).style.background = "transparent";
                                    }}
                                  >
                                    → {sub.label}
                                  </Link>
                                ))}
                              </div>
                            ))}
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                ) : (
                  <Link
                    key={link.href}
                    href={link.href}
                    className="px-3 py-2 text-sm font-medium rounded transition-colors duration-150"
                    style={{
                      color: location === link.href ? "#C9A84C" : "#C8C0B0",
                      fontFamily: "'Inter', sans-serif",
                    }}
                    onMouseEnter={(e) => (e.currentTarget.style.color = "#C9A84C")}
                    onMouseLeave={(e) => {
                      (e.currentTarget as HTMLElement).style.color = location === link.href ? "#C9A84C" : "#C8C0B0";
                    }}
                  >
                    {link.label}
                  </Link>
                )
              )}
              <a
                href={PHONE_HREF}
                className="btn-gold ml-4 text-xs"
                style={{ padding: "0.625rem 1.25rem" }}
              >
                <Phone size={14} />
                {PHONE}
              </a>
            </nav>

            {/* Mobile hamburger */}
            <button
              className="lg:hidden p-2 rounded"
              style={{ color: "#F5F0E8" }}
              onClick={() => setMobileOpen(!mobileOpen)}
              aria-label="Toggle menu"
            >
              {mobileOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, x: "100%" }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: "100%" }}
            transition={{ duration: 0.3, ease: [0.23, 1, 0.32, 1] }}
            className="fixed inset-0 z-30 overflow-y-auto"
            style={{ background: "#0a0a0a", paddingTop: "5rem" }}
          >
            <div className="container py-8">
              {navLinks.map((link, i) => (
                <motion.div
                  key={link.href}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.06, duration: 0.3 }}
                >
                  <Link
                    href={link.href}
                    className="block py-3 text-xl font-bold border-b"
                    style={{
                      fontFamily: "'Playfair Display', serif",
                      color: "#F5F0E8",
                      borderColor: "rgba(201,168,76,0.15)",
                    }}
                  >
                    {link.label}
                  </Link>
                  {link.children?.map((child) => (
                    <div key={child.href}>
                      <Link
                        href={child.href}
                        className="block py-2 pl-4 text-base border-b"
                        style={{
                          color: "#C9A84C",
                          borderColor: "rgba(201,168,76,0.08)",
                          fontFamily: "'Inter', sans-serif",
                        }}
                      >
                        {child.label}
                      </Link>
                      {child.children?.map((sub) => (
                        <Link
                          key={sub.href}
                          href={sub.href}
                          className="block py-1.5 pl-8 text-sm border-b"
                          style={{
                            color: "#9A9080",
                            borderColor: "rgba(201,168,76,0.06)",
                            fontFamily: "'Inter', sans-serif",
                          }}
                        >
                          {sub.label}
                        </Link>
                      ))}
                    </div>
                  ))}
                </motion.div>
              ))}
              <div className="mt-8">
                <a href={PHONE_HREF} className="btn-gold w-full justify-center text-base">
                  <Phone size={16} />
                  Call {PHONE}
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
