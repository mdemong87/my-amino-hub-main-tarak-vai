import { AgeVerificationModal } from "@/components/modals/AgeVerificationModal";
import { AnnouncementBar } from "@/components/layout/AnnouncementBar";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";

const Refunds = () => {
  return (
    <div className="min-h-screen bg-background">
      <AgeVerificationModal />
      <AnnouncementBar />
      <Header />
      
      <main className="container mx-auto px-4 py-12 max-w-4xl">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-foreground mb-4">Refund Policy</h1>
          <p className="text-muted-foreground">Last updated: December 2024</p>
        </div>

        <div className="prose prose-lg max-w-none space-y-8">
          <section className="bg-card rounded-lg p-6 border border-border">
            <h2 className="text-2xl font-semibold text-foreground mb-4">Overview</h2>
            <div className="text-muted-foreground space-y-4">
              <p>At Helix Research, we are committed to providing high-quality research compounds. Due to the specialized nature of our products, we have specific policies regarding returns and refunds to ensure product integrity and safety.</p>
            </div>
          </section>

          <section className="bg-card rounded-lg p-6 border border-border">
            <h2 className="text-2xl font-semibold text-foreground mb-4">Eligibility for Returns</h2>
            <div className="text-muted-foreground space-y-4">
              <p>Returns may be accepted under the following conditions:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li><strong>Damaged Products:</strong> Items that arrive damaged or with compromised seals.</li>
                <li><strong>Incorrect Orders:</strong> Products that differ from what was ordered.</li>
                <li><strong>Quality Issues:</strong> Products that do not meet stated purity or specifications.</li>
                <li><strong>Shipping Errors:</strong> Orders delivered to the wrong address due to our error.</li>
              </ul>
              <p className="mt-4"><strong>Return Window:</strong> All return requests must be submitted within 7 days of delivery.</p>
            </div>
          </section>

          <section className="bg-card rounded-lg p-6 border border-border">
            <h2 className="text-2xl font-semibold text-foreground mb-4">Non-Returnable Items</h2>
            <div className="text-muted-foreground space-y-4">
              <p>Due to safety and quality control requirements, the following items cannot be returned:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Products with broken or tampered seals</li>
                <li>Products that have been opened or used</li>
                <li>Products stored improperly after delivery</li>
                <li>Products returned after the 7-day return window</li>
                <li>Custom or special-order compounds</li>
                <li>Products purchased during clearance sales (unless defective)</li>
              </ul>
            </div>
          </section>

          <section className="bg-card rounded-lg p-6 border border-border">
            <h2 className="text-2xl font-semibold text-foreground mb-4">Return Process</h2>
            <div className="text-muted-foreground space-y-4">
              <p>To initiate a return, please follow these steps:</p>
              <ol className="list-decimal pl-6 space-y-3">
                <li><strong>Contact Us:</strong> Email returns@helixresearch.com with your order number, the item(s) you wish to return, and the reason for the return.</li>
                <li><strong>Provide Documentation:</strong> Include clear photos of any damage, defects, or discrepancies.</li>
                <li><strong>Await Authorization:</strong> Our team will review your request within 2 business days and provide a Return Merchandise Authorization (RMA) number if approved.</li>
                <li><strong>Ship the Item:</strong> Package the product securely in its original container and include the RMA number on the outside of the package.</li>
                <li><strong>Inspection:</strong> Upon receipt, our quality team will inspect the returned item within 3-5 business days.</li>
              </ol>
            </div>
          </section>

          <section className="bg-card rounded-lg p-6 border border-border">
            <h2 className="text-2xl font-semibold text-foreground mb-4">Refund Options</h2>
            <div className="text-muted-foreground space-y-4">
              <p>Once your return is approved and inspected, you may choose from the following options:</p>
              <div className="overflow-x-auto">
                <table className="w-full border-collapse">
                  <thead>
                    <tr className="border-b border-border">
                      <th className="text-left py-3 px-4 text-foreground">Option</th>
                      <th className="text-left py-3 px-4 text-foreground">Processing Time</th>
                      <th className="text-left py-3 px-4 text-foreground">Details</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b border-border">
                      <td className="py-3 px-4">Store Credit</td>
                      <td className="py-3 px-4">1-2 Business Days</td>
                      <td className="py-3 px-4">Full value + 10% bonus credit</td>
                    </tr>
                    <tr className="border-b border-border">
                      <td className="py-3 px-4">Product Replacement</td>
                      <td className="py-3 px-4">3-5 Business Days</td>
                      <td className="py-3 px-4">Same product shipped at no charge</td>
                    </tr>
                    <tr className="border-b border-border">
                      <td className="py-3 px-4">Original Payment Refund</td>
                      <td className="py-3 px-4">5-10 Business Days</td>
                      <td className="py-3 px-4">Refunded to original payment method</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </section>

          <section className="bg-card rounded-lg p-6 border border-border">
            <h2 className="text-2xl font-semibold text-foreground mb-4">Return Shipping</h2>
            <div className="text-muted-foreground space-y-4">
              <ul className="list-disc pl-6 space-y-2">
                <li><strong>Our Error:</strong> If the return is due to our error (wrong item, defective product), we will provide a prepaid return shipping label.</li>
                <li><strong>Customer Change of Mind:</strong> Returns for other reasons are not typically accepted. Contact us to discuss exceptional circumstances.</li>
                <li><strong>Shipping Damage:</strong> If damage occurred during shipping, we will file a claim with the carrier and provide a replacement or refund.</li>
              </ul>
            </div>
          </section>

          <section className="bg-card rounded-lg p-6 border border-border">
            <h2 className="text-2xl font-semibold text-foreground mb-4">Cancellations</h2>
            <div className="text-muted-foreground space-y-4">
              <p>Orders may be canceled under the following conditions:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li><strong>Before Processing:</strong> Orders can be canceled for a full refund if they have not yet been processed (within 2 hours of placement).</li>
                <li><strong>After Shipping:</strong> Once an order has shipped, it cannot be canceled. Please follow the return process upon delivery.</li>
              </ul>
              <p>To request a cancellation, contact us immediately at orders@helixresearch.com with your order number.</p>
            </div>
          </section>

          <section className="bg-card rounded-lg p-6 border border-border">
            <h2 className="text-2xl font-semibold text-foreground mb-4">Damaged or Defective Products</h2>
            <div className="text-muted-foreground space-y-4">
              <p>If you receive a damaged or defective product:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Do not dispose of the product or packaging.</li>
                <li>Take clear photos of the damage and the packaging.</li>
                <li>Contact us within 48 hours of delivery.</li>
                <li>We will expedite a replacement or issue a full refund, including any shipping costs.</li>
              </ul>
            </div>
          </section>

          <section className="bg-card rounded-lg p-6 border border-border">
            <h2 className="text-2xl font-semibold text-foreground mb-4">Contact Us</h2>
            <div className="text-muted-foreground space-y-4">
              <p>For any questions regarding returns or refunds, please contact our customer service team:</p>
              <ul className="list-none space-y-2">
                <li><strong>Email:</strong> returns@helixresearch.com</li>
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

export default Refunds;
