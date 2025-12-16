import { AnnouncementBar } from "@/components/layout/AnnouncementBar";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { AgeVerificationModal } from "@/components/modals/AgeVerificationModal";

const Terms = () => {
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
              Terms & Conditions
            </h1>
            <p className="text-muted-foreground text-lg max-w-2xl">
              Please read these terms and conditions carefully before using our website or purchasing our products.
            </p>
            <p className="text-muted-foreground text-sm mt-4">
              Last updated: {new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}
            </p>
          </div>
        </section>

        {/* Terms Content */}
        <section className="py-12 lg:py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto prose prose-gray dark:prose-invert">
              
              {/* Research Use Disclaimer */}
              <div className="bg-destructive/10 border border-destructive/30 rounded-lg p-6 mb-8">
                <h2 className="text-destructive font-display text-xl font-bold mt-0 mb-3">
                  Important: Research Use Only
                </h2>
                <p className="text-foreground mb-0">
                  All compounds and research materials provided by Helix Research are strictly for laboratory and research use only. They are not approved for human consumption by the Food and Drug Administration (FDA). These products should not be used for any form of in vivo experimentation or for any other non-laboratory purpose. By purchasing these products, you acknowledge that they will be used exclusively within a controlled and qualified research environment.
                </p>
              </div>

              {/* Acceptance of Terms */}
              <div className="mb-10">
                <h2 className="font-display text-2xl font-bold text-foreground mb-4">
                  1. Acceptance of Terms
                </h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  By accessing and using the Helix Research website and purchasing our products, you accept and agree to be bound by these Terms and Conditions, our Privacy Policy, and all applicable laws and regulations. If you do not agree with any of these terms, you are prohibited from using or accessing this site.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  We reserve the right to modify these terms at any time. Changes will be effective immediately upon posting to the website. Your continued use of the website following any changes constitutes your acceptance of the new terms.
                </p>
              </div>

              {/* Age Requirements */}
              <div className="mb-10">
                <h2 className="font-display text-2xl font-bold text-foreground mb-4">
                  2. Age Requirements
                </h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  You must be at least 21 years of age to access this website and purchase products from Helix Research. By using this website, you represent and warrant that you are at least 21 years old and have the legal capacity to enter into a binding agreement.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  We reserve the right to request proof of age at any time and to refuse service to any individual who cannot provide satisfactory proof of age.
                </p>
              </div>

              {/* Intended Use */}
              <div className="mb-10">
                <h2 className="font-display text-2xl font-bold text-foreground mb-4">
                  3. Intended Use of Products
                </h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  All products sold by Helix Research are intended for research and laboratory use only. By purchasing our products, you agree to the following:
                </p>
                <ul className="text-muted-foreground space-y-2 mb-4">
                  <li>Products will be used exclusively for legitimate scientific research purposes</li>
                  <li>Products will not be used for human or animal consumption</li>
                  <li>Products will not be used for in vivo experimentation</li>
                  <li>Products will be handled only by qualified researchers in appropriate laboratory settings</li>
                  <li>All applicable safety protocols and regulations will be followed</li>
                  <li>Products will not be resold for purposes other than research</li>
                </ul>
                <p className="text-muted-foreground leading-relaxed">
                  Any use of our products outside of these guidelines is strictly prohibited and may result in legal action.
                </p>
              </div>

              {/* Purchase Terms */}
              <div className="mb-10">
                <h2 className="font-display text-2xl font-bold text-foreground mb-4">
                  4. Purchase Terms
                </h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  All purchases are subject to product availability. We reserve the right to limit quantities, refuse orders, or discontinue products at any time without prior notice.
                </p>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Prices are subject to change without notice. We are not responsible for typographical errors in pricing. If a product is listed at an incorrect price, we reserve the right to cancel the order and notify you of the error.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  Payment must be received in full before orders are processed and shipped.
                </p>
              </div>

              {/* Shipping and Delivery */}
              <div className="mb-10">
                <h2 className="font-display text-2xl font-bold text-foreground mb-4">
                  5. Shipping and Delivery
                </h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  We ship to addresses within the United States. Shipping times are estimates and are not guaranteed. Helix Research is not responsible for delays caused by shipping carriers, customs, weather, or other circumstances beyond our control.
                </p>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Risk of loss and title for products pass to you upon delivery to the carrier. You are responsible for providing accurate shipping information. We are not responsible for packages delivered to incorrect addresses due to customer error.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  Some products may have shipping restrictions based on local, state, or federal regulations. It is your responsibility to ensure that ordering and receiving our products is legal in your jurisdiction.
                </p>
              </div>

              {/* Returns and Refunds */}
              <div className="mb-10">
                <h2 className="font-display text-2xl font-bold text-foreground mb-4">
                  6. Returns and Refunds
                </h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Due to the nature of our products, all sales are final. We do not accept returns on opened products for safety and quality control reasons.
                </p>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  If you receive a damaged or defective product, please contact us within 7 days of receipt. We may, at our discretion, offer a replacement or refund for verified damaged or defective items.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  Refunds, when approved, will be processed using the original payment method within 10 business days.
                </p>
              </div>

              {/* Disclaimer of Warranties */}
              <div className="mb-10">
                <h2 className="font-display text-2xl font-bold text-foreground mb-4">
                  7. Disclaimer of Warranties
                </h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Products are provided "as is" without any warranties, express or implied. We do not warrant that products will meet your specific research requirements or that they are suitable for any particular purpose.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  While we strive to maintain high quality standards, we make no representations about the accuracy of product descriptions, specifications, or other content on this website.
                </p>
              </div>

              {/* Limitation of Liability */}
              <div className="mb-10">
                <h2 className="font-display text-2xl font-bold text-foreground mb-4">
                  8. Limitation of Liability
                </h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  To the fullest extent permitted by law, Helix Research shall not be liable for any indirect, incidental, special, consequential, or punitive damages arising out of or related to your use of our products or website.
                </p>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Our total liability for any claims arising from your purchase shall not exceed the amount you paid for the product in question.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  You agree to indemnify and hold harmless Helix Research, its officers, directors, employees, and agents from any claims, damages, or expenses arising from your misuse of products or violation of these terms.
                </p>
              </div>

              {/* Intellectual Property */}
              <div className="mb-10">
                <h2 className="font-display text-2xl font-bold text-foreground mb-4">
                  9. Intellectual Property
                </h2>
                <p className="text-muted-foreground leading-relaxed">
                  All content on this website, including text, graphics, logos, images, and software, is the property of Helix Research and is protected by copyright and other intellectual property laws. You may not reproduce, distribute, or create derivative works from this content without our express written permission.
                </p>
              </div>

              {/* Privacy */}
              <div className="mb-10">
                <h2 className="font-display text-2xl font-bold text-foreground mb-4">
                  10. Privacy
                </h2>
                <p className="text-muted-foreground leading-relaxed">
                  Your use of this website is also governed by our Privacy Policy. Please review our Privacy Policy to understand our practices regarding your personal information.
                </p>
              </div>

              {/* Governing Law */}
              <div className="mb-10">
                <h2 className="font-display text-2xl font-bold text-foreground mb-4">
                  11. Governing Law
                </h2>
                <p className="text-muted-foreground leading-relaxed">
                  These Terms and Conditions shall be governed by and construed in accordance with the laws of the United States. Any disputes arising under these terms shall be subject to the exclusive jurisdiction of the courts in our principal place of business.
                </p>
              </div>

              {/* Severability */}
              <div className="mb-10">
                <h2 className="font-display text-2xl font-bold text-foreground mb-4">
                  12. Severability
                </h2>
                <p className="text-muted-foreground leading-relaxed">
                  If any provision of these Terms and Conditions is found to be unenforceable or invalid, that provision shall be limited or eliminated to the minimum extent necessary, and the remaining provisions shall remain in full force and effect.
                </p>
              </div>

              {/* Contact Information */}
              <div className="mb-10">
                <h2 className="font-display text-2xl font-bold text-foreground mb-4">
                  13. Contact Information
                </h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  If you have any questions about these Terms and Conditions, please contact us at:
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

export default Terms;
