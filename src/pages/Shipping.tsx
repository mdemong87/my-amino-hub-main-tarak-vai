import { AgeVerificationModal } from "@/components/modals/AgeVerificationModal";
import { AnnouncementBar } from "@/components/layout/AnnouncementBar";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";

const Shipping = () => {
  return (
    <div className="min-h-screen bg-background">
      <AgeVerificationModal />
      <AnnouncementBar />
      <Header />
      
      <main className="container mx-auto px-4 py-12 max-w-4xl">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-foreground mb-4">Shipping Policy</h1>
          <p className="text-muted-foreground">Last updated: December 2024</p>
        </div>

        <div className="prose prose-lg max-w-none space-y-8">
          <section className="bg-card rounded-lg p-6 border border-border">
            <h2 className="text-2xl font-semibold text-foreground mb-4">Domestic Shipping (United States)</h2>
            <div className="text-muted-foreground space-y-4">
              <p>Helix Research offers the following shipping options for orders within the United States:</p>
              <div className="overflow-x-auto">
                <table className="w-full border-collapse">
                  <thead>
                    <tr className="border-b border-border">
                      <th className="text-left py-3 px-4 text-foreground">Shipping Method</th>
                      <th className="text-left py-3 px-4 text-foreground">Estimated Delivery</th>
                      <th className="text-left py-3 px-4 text-foreground">Cost</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b border-border">
                      <td className="py-3 px-4">Standard Shipping</td>
                      <td className="py-3 px-4">5-7 Business Days</td>
                      <td className="py-3 px-4">$5.99</td>
                    </tr>
                    <tr className="border-b border-border">
                      <td className="py-3 px-4">Expedited Shipping</td>
                      <td className="py-3 px-4">2-3 Business Days</td>
                      <td className="py-3 px-4">$12.99</td>
                    </tr>
                    <tr className="border-b border-border">
                      <td className="py-3 px-4">Priority Overnight</td>
                      <td className="py-3 px-4">1 Business Day</td>
                      <td className="py-3 px-4">$24.99</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <p className="text-sm"><strong>Free Shipping:</strong> Orders over $150 qualify for free standard shipping within the continental United States.</p>
            </div>
          </section>

          <section className="bg-card rounded-lg p-6 border border-border">
            <h2 className="text-2xl font-semibold text-foreground mb-4">Processing Time</h2>
            <div className="text-muted-foreground space-y-4">
              <p>All orders are processed within 1-2 business days (Monday through Friday, excluding holidays). Orders placed after 2:00 PM EST will be processed the following business day.</p>
              <p>You will receive a shipping confirmation email with tracking information once your order has been dispatched.</p>
            </div>
          </section>

          <section className="bg-card rounded-lg p-6 border border-border">
            <h2 className="text-2xl font-semibold text-foreground mb-4">International Shipping</h2>
            <div className="text-muted-foreground space-y-4">
              <p><strong>Currently, Helix Research ships only within the United States.</strong></p>
              <p>We are working to expand our shipping capabilities to serve international research facilities in the future. Please check back for updates or contact us for special arrangements.</p>
            </div>
          </section>

          <section className="bg-card rounded-lg p-6 border border-border">
            <h2 className="text-2xl font-semibold text-foreground mb-4">Shipping Restrictions</h2>
            <div className="text-muted-foreground space-y-4">
              <p>Due to the nature of our research compounds, certain shipping restrictions apply:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>We cannot ship to P.O. Boxes. A valid street address is required for all orders.</li>
                <li>Signature confirmation is required for all orders over $100.</li>
                <li>We reserve the right to request additional verification for institutional orders.</li>
                <li>Certain compounds may be restricted in specific states. Orders containing restricted items will be canceled and refunded.</li>
                <li>We do not ship to APO/FPO addresses at this time.</li>
              </ul>
            </div>
          </section>

          <section className="bg-card rounded-lg p-6 border border-border">
            <h2 className="text-2xl font-semibold text-foreground mb-4">Packaging & Handling</h2>
            <div className="text-muted-foreground space-y-4">
              <p>All products are packaged with care to ensure they arrive in optimal condition:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Temperature-sensitive compounds are shipped with appropriate cold packs when necessary.</li>
                <li>All packages are discreetly labeled with no indication of contents.</li>
                <li>Light-sensitive compounds are packaged in amber containers and opaque packaging.</li>
                <li>Products are sealed to maintain purity and integrity during transit.</li>
              </ul>
            </div>
          </section>

          <section className="bg-card rounded-lg p-6 border border-border">
            <h2 className="text-2xl font-semibold text-foreground mb-4">Lost or Damaged Shipments</h2>
            <div className="text-muted-foreground space-y-4">
              <p>If your package is lost, damaged, or arrives with compromised contents:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Contact us within 48 hours of delivery (or expected delivery for lost packages).</li>
                <li>Provide your order number and photos of any damage.</li>
                <li>We will investigate with the carrier and provide a replacement or refund as appropriate.</li>
                <li>Do not dispose of damaged products or packaging until the claim is resolved.</li>
              </ul>
            </div>
          </section>

          <section className="bg-card rounded-lg p-6 border border-border">
            <h2 className="text-2xl font-semibold text-foreground mb-4">Order Tracking</h2>
            <div className="text-muted-foreground space-y-4">
              <p>Once your order ships, you will receive an email with tracking information. You can track your package directly through the carrier's website or by contacting our customer service team.</p>
              <p>Please allow 24-48 hours for tracking information to become active after receiving your shipping confirmation.</p>
            </div>
          </section>

          <section className="bg-card rounded-lg p-6 border border-border">
            <h2 className="text-2xl font-semibold text-foreground mb-4">Contact Us</h2>
            <div className="text-muted-foreground space-y-4">
              <p>If you have any questions about shipping or need assistance with your order, please contact us:</p>
              <ul className="list-none space-y-2">
                <li><strong>Email:</strong> shipping@helixresearch.com</li>
                <li><strong>Phone:</strong> 1-800-HELIX-RES (1-800-435-4973)</li>
                <li><strong>Hours:</strong> Monday - Friday, 9:00 AM - 5:00 PM EST</li>
              </ul>
            </div>
          </section>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Shipping;
