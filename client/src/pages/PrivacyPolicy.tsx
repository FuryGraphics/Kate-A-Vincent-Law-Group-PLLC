/**
 * Privacy Policy — Kate A Vincent Law Group PLLC
 * URL: /privacy-policy
 */
import { PageLayout, HeroSection, Reveal } from "../components/Layout";

export default function PrivacyPolicy() {
  return (
    <PageLayout
      title="Privacy Policy | Kate A Vincent Law Group"
      description="Privacy policy for Kate A Vincent Law Group PLLC — Hollywood, FL."
    >
      <HeroSection
        h1="Privacy Policy"
        subhead="How Kate A Vincent Law Group PLLC collects, uses, and protects your information."
        backgroundImage="/manus-storage/hero-main_a33af5b3.jpg"
        breadcrumbs={[{ label: "Privacy Policy" }]}
      />

      <section className="py-20" style={{ background: "#0a0a0a" }}>
        <div className="container mx-auto px-4 lg:px-8" style={{ maxWidth: "1280px" }}>
          <div className="max-w-3xl">
            <Reveal>
              <p style={{ color: "#6B6358", marginBottom: "2rem", fontSize: "0.875rem" }}>
                Last Updated: July 2025
              </p>
              <div className="prose-dark space-y-8">
                {[
                  {
                    title: "Information We Collect",
                    content: `We may collect the following types of information when you visit our website or contact us:

Personal Information: When you submit a contact form, we collect your name, phone number, email address, and any information you provide in your message.

Usage Data: We may collect information about how you interact with our website, including your IP address, browser type, pages visited, and time spent on pages. This information is collected through analytics tools and is used to improve our website.

Cookies: Our website may use cookies to enhance your browsing experience. You can control cookie settings through your browser preferences.`
                  },
                  {
                    title: "How We Use Your Information",
                    content: `We use the information we collect to:
• Respond to your inquiries and provide legal services
• Communicate with you about your case or potential representation
• Improve our website and services
• Comply with legal obligations

We do not sell, rent, or share your personal information with third parties for marketing purposes.`
                  },
                  {
                    title: "Attorney-Client Privilege",
                    content: `Information shared with our attorneys in the context of a confirmed attorney-client relationship is protected by attorney-client privilege. However, information submitted through our website contact form before an attorney-client relationship is established is not necessarily privileged. Please call our office directly at (786) 709-3423 for sensitive communications.`
                  },
                  {
                    title: "Data Security",
                    content: `We implement reasonable security measures to protect your personal information from unauthorized access, disclosure, or destruction. However, no method of transmission over the internet or electronic storage is 100% secure, and we cannot guarantee absolute security.`
                  },
                  {
                    title: "Third-Party Services",
                    content: `Our website may use third-party services such as Google Analytics and Google Maps. These services have their own privacy policies, and we encourage you to review them. We are not responsible for the privacy practices of third-party services.`
                  },
                  {
                    title: "Children's Privacy",
                    content: `Our website is not directed to children under the age of 13, and we do not knowingly collect personal information from children under 13. If you believe we have inadvertently collected information from a child, please contact us immediately.`
                  },
                  {
                    title: "Your Rights",
                    content: `You may have certain rights regarding your personal information, including the right to access, correct, or delete your information. To exercise these rights, please contact us at Info@kateavincentlawgroup.com or (786) 709-3423.`
                  },
                  {
                    title: "Changes to This Policy",
                    content: `We may update this Privacy Policy from time to time. We will notify you of any material changes by posting the new policy on this page with an updated date. Your continued use of our website after any changes constitutes your acceptance of the updated policy.`
                  },
                  {
                    title: "Contact Us",
                    content: `If you have questions about this Privacy Policy, please contact us at:

Kate A Vincent Law Group PLLC
3440 Hollywood Blvd, Suite 415
Hollywood, FL 33021
Phone: (786) 709-3423
Email: Info@kateavincentlawgroup.com`
                  },
                ].map((section, i) => (
                  <div key={i}>
                    <h2 style={{ fontFamily: "'Playfair Display', serif", color: "#F5F0E8", fontSize: "1.5rem", marginBottom: "1rem" }}>
                      {section.title}
                    </h2>
                    <p style={{ color: "#C8C0B0", lineHeight: "1.8", whiteSpace: "pre-line" }}>
                      {section.content}
                    </p>
                  </div>
                ))}
              </div>
            </Reveal>
          </div>
        </div>
      </section>
    </PageLayout>
  );
}
