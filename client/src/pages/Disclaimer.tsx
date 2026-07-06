/**
 * Disclaimer — Kate A Vincent Law Group PLLC
 * URL: /disclaimer
 */
import { PageLayout, HeroSection, Reveal } from "../components/Layout";

export default function Disclaimer() {
  return (
    <PageLayout
      title="Legal Disclaimer | Kate A Vincent Law Group"
      description="Legal disclaimer for Kate A Vincent Law Group PLLC — Hollywood, FL."
    >
      <HeroSection
        h1="Legal Disclaimer"
        subhead="Important information about the use of this website and the services of Kate A Vincent Law Group PLLC."
        backgroundImage="/manus-storage/hero-main_a33af5b3.jpg"
        breadcrumbs={[{ label: "Disclaimer" }]}
      />

      <section className="py-20" style={{ background: "#0a0a0a" }}>
        <div className="container mx-auto px-4 lg:px-8" style={{ maxWidth: "1280px" }}>
          <div className="max-w-3xl">
            <Reveal>
              <div className="prose-dark">
                <h2 style={{ fontFamily: "'Playfair Display', serif", color: "#F5F0E8", fontSize: "1.5rem", marginBottom: "1rem" }}>
                  No Attorney-Client Relationship
                </h2>
                <p style={{ color: "#C8C0B0", marginBottom: "1.5rem", lineHeight: "1.8" }}>
                  The information on this website is provided for general informational purposes only and does not constitute legal advice. Visiting this website or submitting a contact form does not create an attorney-client relationship between you and Kate A Vincent Law Group PLLC or any of its attorneys. An attorney-client relationship is only formed upon the execution of a written engagement agreement signed by both the client and the attorney.
                </p>

                <h2 style={{ fontFamily: "'Playfair Display', serif", color: "#F5F0E8", fontSize: "1.5rem", marginBottom: "1rem" }}>
                  Not Legal Advice
                </h2>
                <p style={{ color: "#C8C0B0", marginBottom: "1.5rem", lineHeight: "1.8" }}>
                  The content on this website, including blog posts, practice area descriptions, and FAQ sections, is provided for general informational purposes only. It is not intended to be, and should not be construed as, legal advice for any specific situation. Laws change frequently, and the information on this website may not reflect the most current legal developments. You should not act or refrain from acting based on any information on this website without first seeking advice from a qualified attorney licensed in your jurisdiction.
                </p>

                <h2 style={{ fontFamily: "'Playfair Display', serif", color: "#F5F0E8", fontSize: "1.5rem", marginBottom: "1rem" }}>
                  Prior Results
                </h2>
                <p style={{ color: "#C8C0B0", marginBottom: "1.5rem", lineHeight: "1.8" }}>
                  Any descriptions of past results, case outcomes, or client testimonials on this website are for illustrative purposes only. Prior results do not guarantee a similar outcome in any future matter. Every legal case is unique, and the outcome of any specific case depends on the particular facts and circumstances of that case.
                </p>

                <h2 style={{ fontFamily: "'Playfair Display', serif", color: "#F5F0E8", fontSize: "1.5rem", marginBottom: "1rem" }}>
                  Jurisdiction
                </h2>
                <p style={{ color: "#C8C0B0", marginBottom: "1.5rem", lineHeight: "1.8" }}>
                  Kate A Vincent Law Group PLLC is licensed to practice law in the State of Florida. The information on this website is intended for Florida residents and pertains to Florida law. If you are located outside of Florida, the information on this website may not apply to your situation, and you should consult a licensed attorney in your jurisdiction.
                </p>

                <h2 style={{ fontFamily: "'Playfair Display', serif", color: "#F5F0E8", fontSize: "1.5rem", marginBottom: "1rem" }}>
                  Confidentiality
                </h2>
                <p style={{ color: "#C8C0B0", marginBottom: "1.5rem", lineHeight: "1.8" }}>
                  Any information you submit through this website's contact form is not confidential and does not create an attorney-client relationship. Do not submit confidential or sensitive information through the contact form until an attorney-client relationship has been established. If you have urgent or sensitive legal matters, please call our office directly at (786) 709-3423.
                </p>

                <h2 style={{ fontFamily: "'Playfair Display', serif", color: "#F5F0E8", fontSize: "1.5rem", marginBottom: "1rem" }}>
                  Advertising
                </h2>
                <p style={{ color: "#C8C0B0", marginBottom: "1.5rem", lineHeight: "1.8" }}>
                  This website may constitute attorney advertising under the rules of the Florida Bar. The hiring of a lawyer is an important decision that should not be based solely on advertisements.
                </p>

                <h2 style={{ fontFamily: "'Playfair Display', serif", color: "#F5F0E8", fontSize: "1.5rem", marginBottom: "1rem" }}>
                  Contact
                </h2>
                <p style={{ color: "#C8C0B0", lineHeight: "1.8" }}>
                  If you have questions about this disclaimer or about our legal services, please contact us at:<br />
                  <strong style={{ color: "#F5F0E8" }}>Kate A Vincent Law Group PLLC</strong><br />
                  3440 Hollywood Blvd, Suite 415, Hollywood, FL 33021<br />
                  Phone: (786) 709-3423<br />
                  Email: Info@kateavincentlawgroup.com
                </p>
              </div>
            </Reveal>
          </div>
        </div>
      </section>
    </PageLayout>
  );
}
