import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { AnnouncementBar } from "@/components/layout/AnnouncementBar";
import { Beaker, Target, Users, Award, Microscope, Shield } from "lucide-react";

const About = () => {
  const values = [
    {
      icon: Beaker,
      title: "Scientific Excellence",
      description: "We maintain rigorous quality standards and third-party testing for all research compounds."
    },
    {
      icon: Shield,
      title: "Research Integrity",
      description: "Every product is manufactured following strict protocols to ensure consistency and purity."
    },
    {
      icon: Users,
      title: "Customer Focus",
      description: "We're committed to supporting researchers with exceptional service and technical expertise."
    },
    {
      icon: Award,
      title: "Industry Leadership",
      description: "Pioneering advancements in peptide synthesis and research compound development."
    }
  ];

  const team = [
    {
      name: "Dr. Sarah Chen",
      role: "Chief Scientific Officer",
      bio: "Ph.D. in Biochemistry from MIT with 15+ years in peptide research and development."
    },
    {
      name: "Michael Torres",
      role: "Director of Quality Assurance",
      bio: "Former FDA compliance specialist with expertise in laboratory standards and testing protocols."
    },
    {
      name: "Dr. James Wilson",
      role: "Head of Research",
      bio: "Published researcher with over 50 peer-reviewed papers on peptide applications."
    },
    {
      name: "Emily Rodriguez",
      role: "Customer Success Manager",
      bio: "Dedicated to ensuring researchers have the support and resources they need."
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <AnnouncementBar />
      <Header />
      
      <main className="container mx-auto px-4 py-12">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            About Helix Research
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Advancing scientific discovery through premium research compounds and unwavering commitment to quality.
          </p>
        </div>

        {/* Mission Statement */}
        <section className="mb-16">
          <div className="bg-primary/5 border border-primary/20 rounded-2xl p-8 md:p-12">
            <div className="flex items-center gap-3 mb-6">
              <Target className="h-8 w-8 text-primary" />
              <h2 className="text-2xl font-bold text-foreground">Our Mission</h2>
            </div>
            <p className="text-lg text-muted-foreground leading-relaxed">
              At Helix Research, our mission is to empower the scientific community with the highest quality research compounds available. We believe that groundbreaking discoveries require exceptional materials, and we're dedicated to providing researchers with the tools they need to push the boundaries of knowledge. Every compound we produce undergoes rigorous testing to ensure purity, potency, and consistency—because scientific progress deserves nothing less.
            </p>
          </div>
        </section>

        {/* Company History */}
        <section className="mb-16">
          <div className="flex items-center gap-3 mb-8">
            <Microscope className="h-8 w-8 text-primary" />
            <h2 className="text-2xl font-bold text-foreground">Our Story</h2>
          </div>
          
          <div className="space-y-6 text-muted-foreground">
            <p className="leading-relaxed">
              Helix Research was founded in 2018 by a team of scientists and entrepreneurs who recognized a critical gap in the research compound market. Too often, researchers were forced to compromise on quality or pay exorbitant prices for materials that didn't meet their standards.
            </p>
            <p className="leading-relaxed">
              Starting from a small laboratory facility, we set out to change that. Our founding team brought together decades of experience in peptide synthesis, quality control, and pharmaceutical manufacturing. We invested heavily in state-of-the-art equipment and established partnerships with leading testing laboratories.
            </p>
            <p className="leading-relaxed">
              Today, Helix Research serves thousands of research institutions, universities, and independent laboratories worldwide. Our catalog has grown to include a comprehensive range of peptides and research compounds, all manufactured to the same exacting standards that defined our earliest products.
            </p>
            <p className="leading-relaxed">
              As we continue to grow, our commitment remains unchanged: to provide the scientific community with research materials they can trust, backed by transparent testing and exceptional customer support.
            </p>
          </div>
        </section>

        {/* Core Values */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold text-foreground mb-8 text-center">Our Core Values</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <div 
                key={index}
                className="bg-card border border-border rounded-xl p-6 hover:border-primary/50 transition-colors"
              >
                <value.icon className="h-10 w-10 text-primary mb-4" />
                <h3 className="text-lg font-semibold text-foreground mb-2">{value.title}</h3>
                <p className="text-sm text-muted-foreground">{value.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Team Section */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold text-foreground mb-8 text-center">Our Leadership Team</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {team.map((member, index) => (
              <div 
                key={index}
                className="bg-card border border-border rounded-xl p-6 hover:border-primary/50 transition-colors"
              >
                <div className="flex items-start gap-4">
                  <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <Users className="h-8 w-8 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-foreground">{member.name}</h3>
                    <p className="text-primary text-sm font-medium mb-2">{member.role}</p>
                    <p className="text-sm text-muted-foreground">{member.bio}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Research Disclaimer */}
        <section className="bg-muted/50 border border-border rounded-xl p-6">
          <p className="text-sm text-muted-foreground text-center">
            <strong>Research Use Only:</strong> All Helix Research products are intended strictly for laboratory and research purposes. 
            Our compounds are not approved by the FDA for human consumption and must not be used for in vivo experimentation 
            or any non-laboratory applications.
          </p>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default About;
