import { AgeVerificationModal } from "@/components/modals/AgeVerificationModal";
import { AnnouncementBar } from "@/components/layout/AnnouncementBar";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const FAQ = () => {
  const productQuestions = [
    {
      question: "What are research compounds?",
      answer: "Research compounds are chemical substances used exclusively for laboratory research, scientific study, and educational purposes. Our products are synthesized to high purity standards and are intended for qualified researchers and institutions."
    },
    {
      question: "What purity levels do your products have?",
      answer: "All Helix Research compounds are synthesized to a minimum of 98% purity, with many products exceeding 99% purity. Each product comes with a Certificate of Analysis (COA) documenting the exact purity level and testing methodology."
    },
    {
      question: "Are your products FDA approved?",
      answer: "No. Our products are research chemicals intended exclusively for laboratory research and scientific study. They are NOT approved by the FDA for human consumption and must not be used for any in vivo experimentation or clinical applications."
    },
    {
      question: "Do you provide Certificates of Analysis?",
      answer: "Yes, every product ships with a detailed Certificate of Analysis (COA) that includes purity testing results, batch number, synthesis date, and analytical methodology used. Additional COAs can be requested for specific batches."
    },
    {
      question: "What is the shelf life of your products?",
      answer: "Most of our research compounds have a shelf life of 2-3 years when stored properly according to the specifications provided. Storage conditions vary by product and are detailed on each product page and included documentation."
    },
    {
      question: "How should I store the research compounds?",
      answer: "Storage requirements vary by product. Generally, most compounds should be stored in a cool, dry place away from direct light. Some products require refrigeration or freezer storage. Specific storage instructions are provided with each product and on the product detail page."
    }
  ];

  const orderQuestions = [
    {
      question: "What payment methods do you accept?",
      answer: "We accept major credit cards (Visa, MasterCard, American Express, Discover), institutional purchase orders from verified research institutions, and bank wire transfers for orders over $500."
    },
    {
      question: "Is there a minimum order amount?",
      answer: "There is no minimum order amount for credit card purchases. For institutional purchase orders, the minimum order is $100. Wire transfer orders require a minimum of $500."
    },
    {
      question: "Can I modify or cancel my order?",
      answer: "Orders can be modified or cancelled within 1 hour of placement. After this window, orders enter processing and cannot be changed. Please contact our customer service immediately if you need to make changes."
    },
    {
      question: "Do you offer bulk or wholesale pricing?",
      answer: "Yes, we offer tiered pricing for bulk orders. Discounts typically begin at 10+ units of the same product. For institutional accounts and recurring orders, please contact us for custom pricing arrangements."
    },
    {
      question: "How do I track my order?",
      answer: "Once your order ships, you'll receive an email with tracking information. You can also track your order by logging into your account on our website. Orders typically ship within 1-2 business days."
    },
    {
      question: "Do you offer expedited shipping?",
      answer: "Yes, we offer Priority (2-3 business days) and Express (1-2 business days) shipping options at checkout. Expedited shipping is available for most products within the continental United States."
    }
  ];

  const researchQuestions = [
    {
      question: "Who can purchase from Helix Research?",
      answer: "Our products are available to qualified researchers, academic institutions, pharmaceutical companies, and licensed laboratories. All purchasers must be at least 21 years of age and agree to our terms of service regarding research-only use."
    },
    {
      question: "Can I use these products for human consumption?",
      answer: "Absolutely not. All Helix Research products are strictly for laboratory research purposes only. They are not intended for human or animal consumption, in vivo experimentation, or any clinical applications. Violation of these terms may result in account termination and legal action."
    },
    {
      question: "Do you ship internationally?",
      answer: "Currently, we only ship within the United States. International shipping is not available due to varying regulations regarding research compounds in different countries. We are exploring options for future international expansion."
    },
    {
      question: "What documentation do you provide with orders?",
      answer: "Each order includes a Certificate of Analysis (COA), Safety Data Sheet (SDS), and product documentation including storage instructions and handling guidelines. Additional documentation can be provided upon request for institutional compliance requirements."
    },
    {
      question: "How do you ensure product quality?",
      answer: "We maintain rigorous quality control through third-party laboratory testing, HPLC analysis, and mass spectrometry verification. Each batch is tested before release, and we maintain detailed records for full traceability."
    },
    {
      question: "Can I request custom synthesis?",
      answer: "Yes, we offer custom synthesis services for qualified institutions and researchers. Custom projects have minimum order requirements and lead times vary based on complexity. Please contact us with your specifications for a quote."
    }
  ];

  return (
    <>
      <AgeVerificationModal />
      <div className="min-h-screen bg-background flex flex-col">
        <AnnouncementBar />
        <Header />
        
        <main className="flex-1">
          {/* Hero Section */}
          <section className="bg-primary py-16">
            <div className="container mx-auto px-4 text-center">
              <h1 className="text-4xl md:text-5xl font-bold text-primary-foreground mb-4">
                Frequently Asked Questions
              </h1>
              <p className="text-primary-foreground/80 text-lg max-w-2xl mx-auto">
                Find answers to common questions about our products, ordering process, and research compounds.
              </p>
            </div>
          </section>

          {/* FAQ Content */}
          <section className="py-16">
            <div className="container mx-auto px-4 max-w-4xl">
              
              {/* Products Section */}
              <div className="mb-12">
                <h2 className="text-2xl font-bold text-foreground mb-6 flex items-center gap-3">
                  <span className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center text-primary text-lg">
                    1
                  </span>
                  Products & Quality
                </h2>
                <Accordion type="single" collapsible className="space-y-2">
                  {productQuestions.map((item, index) => (
                    <AccordionItem 
                      key={index} 
                      value={`product-${index}`}
                      className="border border-border rounded-lg px-4 data-[state=open]:bg-muted/30"
                    >
                      <AccordionTrigger className="text-left font-medium hover:no-underline">
                        {item.question}
                      </AccordionTrigger>
                      <AccordionContent className="text-muted-foreground">
                        {item.answer}
                      </AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
              </div>

              {/* Orders Section */}
              <div className="mb-12">
                <h2 className="text-2xl font-bold text-foreground mb-6 flex items-center gap-3">
                  <span className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center text-primary text-lg">
                    2
                  </span>
                  Orders & Shipping
                </h2>
                <Accordion type="single" collapsible className="space-y-2">
                  {orderQuestions.map((item, index) => (
                    <AccordionItem 
                      key={index} 
                      value={`order-${index}`}
                      className="border border-border rounded-lg px-4 data-[state=open]:bg-muted/30"
                    >
                      <AccordionTrigger className="text-left font-medium hover:no-underline">
                        {item.question}
                      </AccordionTrigger>
                      <AccordionContent className="text-muted-foreground">
                        {item.answer}
                      </AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
              </div>

              {/* Research Section */}
              <div className="mb-12">
                <h2 className="text-2xl font-bold text-foreground mb-6 flex items-center gap-3">
                  <span className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center text-primary text-lg">
                    3
                  </span>
                  Research & Compliance
                </h2>
                <Accordion type="single" collapsible className="space-y-2">
                  {researchQuestions.map((item, index) => (
                    <AccordionItem 
                      key={index} 
                      value={`research-${index}`}
                      className="border border-border rounded-lg px-4 data-[state=open]:bg-muted/30"
                    >
                      <AccordionTrigger className="text-left font-medium hover:no-underline">
                        {item.question}
                      </AccordionTrigger>
                      <AccordionContent className="text-muted-foreground">
                        {item.answer}
                      </AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
              </div>

              {/* Contact CTA */}
              <div className="bg-muted/50 rounded-xl p-8 text-center">
                <h3 className="text-xl font-semibold text-foreground mb-2">
                  Still have questions?
                </h3>
                <p className="text-muted-foreground mb-4">
                  Our support team is here to help with any additional questions you may have.
                </p>
                <a 
                  href="/contact" 
                  className="inline-flex items-center justify-center rounded-md bg-primary px-6 py-3 text-sm font-medium text-primary-foreground hover:bg-primary/90 transition-colors"
                >
                  Contact Us
                </a>
              </div>

            </div>
          </section>
        </main>

        <Footer />
      </div>
    </>
  );
};

export default FAQ;
