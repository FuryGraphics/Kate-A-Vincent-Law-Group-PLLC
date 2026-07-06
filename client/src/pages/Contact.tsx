/**
 * Contact — Kate A Vincent Law Group PLLC
 * URL: /contact
 * Design: Sovereign Counsel — dark/gold, Playfair Display headlines, Inter body
 */
import { useEffect } from "react";
import { Phone, Mail, MapPin, Clock } from "lucide-react";
import {
  PageLayout,
  HeroSection,
  Reveal,
} from "../components/Layout";
import { MapView } from "../components/Map";

export default function Contact() {
  // Load CaseClimb form embed script
  useEffect(() => {
    const existing = document.getElementById("caseclimb-embed-script");
    if (!existing) {
      const script = document.createElement("script");
      script.id = "caseclimb-embed-script";
      script.src = "https://services.caseclimb.com/js/form_embed.js";
      script.async = true;
      document.body.appendChild(script);
    }
  }, []);

  return (
    <PageLayout
      title="Free Consultation Hollywood FL | Kate A Vincent Law Group"
      description="Contact Kate A Vincent Law Group PLLC for a free consultation. Criminal defense, personal injury, and family law in Hollywood, FL. Call (786) 709-3423."
    >
      <HeroSection
        h1="Free Consultation — Hollywood, FL"
        subhead="Call us 24/7 or send a message. We respond quickly and fight hard for you."
        backgroundImage="/manus-storage/hero-main_a33af5b3.jpg"
        breadcrumbs={[{ label: "Contact" }]}
        ctas={[
          { label: "Call (786) 709-3423", href: "tel:+17867093423", variant: "gold" },
        ]}
      />

      {/* Contact Form + Info */}
      <section className="py-20" style={{ background: "#0a0a0a" }}>
        <div className="container mx-auto px-4 lg:px-8" style={{ maxWidth: "1280px" }}>
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
            {/* CaseClimb Embedded Form */}
            <div className="lg:col-span-3">


              <Reveal delay={0.1}>
                <div
                  className="rounded-lg overflow-hidden"
                  style={{ border: "1px solid rgba(201,168,76,0.15)", minHeight: "560px" }}
                >
                  <iframe
                    src="https://services.caseclimb.com/widget/form/jVYzbO2gKBkPQLb03IIO"
                    style={{ width: "100%", height: "541px", border: "none", borderRadius: "10px" }}
                    id="inline-jVYzbO2gKBkPQLb03IIO"
                    data-layout='{"id":"INLINE"}'
                    data-trigger-type="alwaysShow"
                    data-trigger-value=""
                    data-activation-type="alwaysActivated"
                    data-activation-value=""
                    data-deactivation-type="neverDeactivate"
                    data-deactivation-value=""
                    data-form-name="Website Form (Kate A Vincent Law Group PLLC)"
                    data-height="541"
                    data-layout-iframe-id="inline-jVYzbO2gKBkPQLb03IIO"
                    data-form-id="jVYzbO2gKBkPQLb03IIO"
                    title="Website Form (Kate A Vincent Law Group PLLC)"
                  />
                </div>
              </Reveal>
            </div>

            {/* Office Info */}
            <div className="lg:col-span-2">
              <Reveal delay={0.15}>
                <div
                  className="p-6 rounded-lg mb-6"
                  style={{ background: "#111827", border: "1px solid rgba(201,168,76,0.2)" }}
                >
                  <h3
                    className="text-xl mb-5"
                    style={{ fontFamily: "'Playfair Display', serif", color: "#F5F0E8" }}
                  >
                    Office Information
                  </h3>
                  <div className="space-y-4">
                    <div className="flex items-start gap-3">
                      <MapPin size={18} className="mt-0.5 flex-shrink-0" style={{ color: "#C9A84C" }} />
                      <div>
                        <div className="text-sm font-semibold mb-0.5" style={{ color: "#F5F0E8" }}>Address</div>
                        <div className="text-sm" style={{ color: "#9A9080" }}>
                          3440 Hollywood Blvd, Suite 415<br />Hollywood, FL 33021
                        </div>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <Phone size={18} className="mt-0.5 flex-shrink-0" style={{ color: "#C9A84C" }} />
                      <div>
                        <div className="text-sm font-semibold mb-0.5" style={{ color: "#F5F0E8" }}>Phone</div>
                        <a href="tel:+17867093423" className="text-sm" style={{ color: "#9A9080" }}>
                          (786) 709-3423
                        </a>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <Mail size={18} className="mt-0.5 flex-shrink-0" style={{ color: "#C9A84C" }} />
                      <div>
                        <div className="text-sm font-semibold mb-0.5" style={{ color: "#F5F0E8" }}>Email</div>
                        <a href="mailto:Info@kateavincentlawgroup.com" className="text-sm" style={{ color: "#9A9080" }}>
                          Info@kateavincentlawgroup.com
                        </a>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <Clock size={18} className="mt-0.5 flex-shrink-0" style={{ color: "#C9A84C" }} />
                      <div>
                        <div className="text-sm font-semibold mb-0.5" style={{ color: "#F5F0E8" }}>Hours</div>
                        <div className="text-sm" style={{ color: "#9A9080" }}>
                          Mon–Fri: 9:00 AM – 6:00 PM<br />
                          24/7 Phone Available
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </Reveal>

              {/* Map */}
              <Reveal delay={0.2}>
                <div
                  className="rounded-lg overflow-hidden"
                  style={{ border: "1px solid rgba(201,168,76,0.2)", height: "280px" }}
                >
                  <MapView
                    onMapReady={(map: google.maps.Map) => {
                      const pos = { lat: 26.0112, lng: -80.1495 };
                      map.setCenter(pos);
                      map.setZoom(15);
                      new google.maps.Marker({
                        position: pos,
                        map,
                        title: "Kate A Vincent Law Group PLLC",
                      });
                    }}
                  />
                </div>
              </Reveal>
            </div>
          </div>
        </div>
      </section>
    </PageLayout>
  );
}
