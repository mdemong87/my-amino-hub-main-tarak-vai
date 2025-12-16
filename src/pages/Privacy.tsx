import { AnnouncementBar } from "@/components/layout/AnnouncementBar";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { AgeVerificationModal } from "@/components/modals/AgeVerificationModal";

const Privacy = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <AgeVerificationModal />
      <AnnouncementBar />
      <Header />

      <main className="flex-1">
        {/* Hero Section */}
        <section className="bg-muted/30 py-12 lg:py-16">
          <div className="container mx-auto px-4">
            <h1 className="font-display text-4xl lg:text-5xl font-bold text-foreground mb-4">
              Privacy Policy
            </h1>
            <p className="text-muted-foreground text-lg max-w-2xl">
              Your privacy is important to us. This policy explains how we collect, use, and protect your personal information.
            </p>
            <p className="text-muted-foreground text-sm mt-4">
              Last updated: {new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}
            </p>
          </div>
        </section>

        {/* Privacy Content */}
        <section className="py-12 lg:py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">

              {/* Introduction */}
              <div className="mb-10">
                <h2 className="font-display text-2xl font-bold text-foreground mb-4">
                  1. Introduction
                </h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Helix Research ("we," "our," or "us") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website and purchase our products.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  By using our website, you consent to the data practices described in this policy. If you do not agree with the terms of this privacy policy, please do not access the site.
                </p>
              </div>

              {/* Information We Collect */}
              <div className="mb-10">
                <h2 className="font-display text-2xl font-bold text-foreground mb-4">
                  2. Information We Collect
                </h2>
                
                <h3 className="font-display text-lg font-semibold text-foreground mb-3">
                  Personal Information
                </h3>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  We may collect personal information that you voluntarily provide when making a purchase or contacting us, including:
                </p>
                <ul className="text-muted-foreground space-y-2 mb-6">
                  <li>Name and contact information (email address, phone number)</li>
                  <li>Billing and shipping addresses</li>
                  <li>Payment information (processed securely through third-party payment processors)</li>
                  <li>Order history and preferences</li>
                  <li>Communications you send to us</li>
                </ul>

                <h3 className="font-display text-lg font-semibold text-foreground mb-3">
                  Automatically Collected Information
                </h3>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  When you visit our website, we may automatically collect certain information, including:
                </p>
                <ul className="text-muted-foreground space-y-2">
                  <li>IP address and browser type</li>
                  <li>Device information and operating system</li>
                  <li>Pages visited and time spent on site</li>
                  <li>Referring website addresses</li>
                  <li>Cookies and similar tracking technologies</li>
                </ul>
              </div>

              {/* How We Use Your Information */}
              <div className="mb-10">
                <h2 className="font-display text-2xl font-bold text-foreground mb-4">
                  3. How We Use Your Information
                </h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  We use the information we collect for the following purposes:
                </p>
                <ul className="text-muted-foreground space-y-2">
                  <li>To process and fulfill your orders</li>
                  <li>To communicate with you about your orders and inquiries</li>
                  <li>To send order confirmations and shipping updates</li>
                  <li>To improve our website and customer experience</li>
                  <li>To detect and prevent fraud</li>
                  <li>To comply with legal obligations</li>
                  <li>To send promotional communications (with your consent)</li>
                  <li>To analyze website usage and trends</li>
                </ul>
              </div>

              {/* Information Sharing */}
              <div className="mb-10">
                <h2 className="font-display text-2xl font-bold text-foreground mb-4">
                  4. Information Sharing and Disclosure
                </h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  We do not sell, trade, or rent your personal information to third parties. We may share your information only in the following circumstances:
                </p>
                <ul className="text-muted-foreground space-y-2">
                  <li><strong>Service Providers:</strong> With trusted third parties who assist us in operating our website, processing payments, and fulfilling orders</li>
                  <li><strong>Shipping Partners:</strong> With carriers to deliver your orders</li>
                  <li><strong>Legal Requirements:</strong> When required by law or to protect our rights and safety</li>
                  <li><strong>Business Transfers:</strong> In connection with a merger, acquisition, or sale of assets</li>
                </ul>
              </div>

              {/* Cookies */}
              <div className="mb-10">
                <h2 className="font-display text-2xl font-bold text-foreground mb-4">
                  5. Cookies and Tracking Technologies
                </h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  We use cookies and similar tracking technologies to enhance your browsing experience. Cookies are small data files stored on your device that help us:
                </p>
                <ul className="text-muted-foreground space-y-2 mb-4">
                  <li>Remember your preferences and settings</li>
                  <li>Maintain your shopping cart</li>
                  <li>Analyze site traffic and usage patterns</li>
                  <li>Personalize content and advertisements</li>
                </ul>
                <p className="text-muted-foreground leading-relaxed">
                  You can control cookie settings through your browser preferences. Note that disabling cookies may affect the functionality of our website.
                </p>
              </div>

              {/* Data Security */}
              <div className="mb-10">
                <h2 className="font-display text-2xl font-bold text-foreground mb-4">
                  6. Data Security
                </h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  We implement appropriate technical and organizational measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction. These measures include:
                </p>
                <ul className="text-muted-foreground space-y-2 mb-4">
                  <li>SSL encryption for data transmission</li>
                  <li>Secure payment processing through PCI-compliant providers</li>
                  <li>Limited access to personal information by authorized personnel only</li>
                  <li>Regular security assessments and updates</li>
                </ul>
                <p className="text-muted-foreground leading-relaxed">
                  While we strive to protect your information, no method of transmission over the Internet is 100% secure. We cannot guarantee absolute security of your data.
                </p>
              </div>

              {/* Data Retention */}
              <div className="mb-10">
                <h2 className="font-display text-2xl font-bold text-foreground mb-4">
                  7. Data Retention
                </h2>
                <p className="text-muted-foreground leading-relaxed">
                  We retain your personal information for as long as necessary to fulfill the purposes outlined in this policy, comply with legal obligations, resolve disputes, and enforce our agreements. When your information is no longer needed, we will securely delete or anonymize it.
                </p>
              </div>

              {/* Your Rights */}
              <div className="mb-10">
                <h2 className="font-display text-2xl font-bold text-foreground mb-4">
                  8. Your Rights
                </h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Depending on your location, you may have certain rights regarding your personal information, including:
                </p>
                <ul className="text-muted-foreground space-y-2 mb-4">
                  <li><strong>Access:</strong> Request a copy of the personal information we hold about you</li>
                  <li><strong>Correction:</strong> Request correction of inaccurate or incomplete information</li>
                  <li><strong>Deletion:</strong> Request deletion of your personal information</li>
                  <li><strong>Opt-out:</strong> Unsubscribe from marketing communications</li>
                  <li><strong>Portability:</strong> Request transfer of your data to another service</li>
                </ul>
                <p className="text-muted-foreground leading-relaxed">
                  To exercise any of these rights, please contact us using the information provided below.
                </p>
              </div>

              {/* California Privacy Rights */}
              <div className="mb-10">
                <h2 className="font-display text-2xl font-bold text-foreground mb-4">
                  9. California Privacy Rights
                </h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  California residents have additional rights under the California Consumer Privacy Act (CCPA), including:
                </p>
                <ul className="text-muted-foreground space-y-2">
                  <li>The right to know what personal information is collected and how it is used</li>
                  <li>The right to delete personal information</li>
                  <li>The right to opt-out of the sale of personal information (we do not sell personal information)</li>
                  <li>The right to non-discrimination for exercising privacy rights</li>
                </ul>
              </div>

              {/* Third-Party Links */}
              <div className="mb-10">
                <h2 className="font-display text-2xl font-bold text-foreground mb-4">
                  10. Third-Party Links
                </h2>
                <p className="text-muted-foreground leading-relaxed">
                  Our website may contain links to third-party websites. We are not responsible for the privacy practices of these external sites. We encourage you to review the privacy policies of any third-party sites you visit.
                </p>
              </div>

              {/* Children's Privacy */}
              <div className="mb-10">
                <h2 className="font-display text-2xl font-bold text-foreground mb-4">
                  11. Children's Privacy
                </h2>
                <p className="text-muted-foreground leading-relaxed">
                  Our website is not intended for individuals under 21 years of age. We do not knowingly collect personal information from anyone under 21. If we become aware that we have collected personal information from someone under 21, we will take steps to delete that information promptly.
                </p>
              </div>

              {/* Changes to Policy */}
              <div className="mb-10">
                <h2 className="font-display text-2xl font-bold text-foreground mb-4">
                  12. Changes to This Privacy Policy
                </h2>
                <p className="text-muted-foreground leading-relaxed">
                  We may update this Privacy Policy from time to time. Any changes will be posted on this page with an updated revision date. We encourage you to review this policy periodically. Your continued use of our website after any changes constitutes your acceptance of the updated policy.
                </p>
              </div>

              {/* Contact Information */}
              <div className="mb-10">
                <h2 className="font-display text-2xl font-bold text-foreground mb-4">
                  13. Contact Us
                </h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  If you have any questions about this Privacy Policy or our data practices, please contact us at:
                </p>
                <div className="bg-muted/50 rounded-lg p-4">
                  <p className="text-foreground font-semibold mb-1">Helix Research</p>
                  <p className="text-muted-foreground">
                    Email: <a href="mailto:helixresearch@protonmail.com" className="text-primary hover:underline">helixresearch@protonmail.com</a>
                  </p>
                </div>
              </div>

            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Privacy;
