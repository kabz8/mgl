import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { ArrowRight, CheckCircle2, Users, Zap, Shield } from "lucide-react";
import { getWhatsAppLink } from "@/lib/whatsapp";
import { motion } from "framer-motion";

export default function About() {
  return (
    <div className="flex flex-col w-full pb-24">
      {/* Page Header */}
      <section className="bg-primary text-primary-foreground py-20">
        <div className="container mx-auto px-4 md:px-8">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6">
              About <span className="text-secondary">Milespace</span>
            </h1>
            <p className="text-xl text-primary-foreground/80 font-light">
              We are a premium digital agency built in Kenya, designing and developing products for businesses that demand excellence.
            </p>
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 md:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <h2 className="text-3xl md:text-4xl font-bold">Our Story</h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Founded in Kenya, Milespace was born out of a clear need: African businesses require world-class digital products that combine stunning design with robust functionality.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                We don't just build websites and apps; we build engines for growth. From complex corporate portals to high-converting e-commerce platforms and intelligent custom software, our work is defined by precision, performance, and purpose.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Our approach is deeply collaborative. We work alongside our clients to understand their market, their challenges, and their vision, translating that into digital experiences that work seamlessly across the continent and beyond.
              </p>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative rounded-2xl overflow-hidden shadow-xl aspect-square md:aspect-[4/3] bg-muted"
            >
              <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=2070&auto=format&fit=crop')] bg-cover bg-center" />
              <div className="absolute inset-0 bg-primary/20 mix-blend-multiply" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-muted/30 border-y border-border">
        <div className="container mx-auto px-4 md:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Core Values</h2>
            <p className="text-muted-foreground text-lg">The principles that guide every line of code we write and every pixel we place.</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card value="Speed" icon={<Zap className="h-8 w-8 text-secondary" />} desc="Fast execution, fast communication, and fast-loading digital products. We respect your time." />
            <Card value="Quality" icon={<CheckCircle2 className="h-8 w-8 text-secondary" />} desc="Zero compromises on code quality, design aesthetics, or user experience. Excellence is standard." />
            <Card value="Reliability" icon={<Shield className="h-8 w-8 text-secondary" />} desc="We deliver what we promise, when we promise it. A partner you can trust implicitly." />
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 md:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-10 text-center">Why Choose Milespace?</h2>
            
            <div className="space-y-6">
              {[
                "Deep understanding of the African digital landscape and consumer behavior.",
                "Technical expertise across modern stacks (React, Next.js, Flutter, Node.js).",
                "Conversion-focused design thinking — we build to generate revenue.",
                "Transparent pricing and clear communication throughout the project lifecycle.",
                "Long-term support and maintenance to ensure your product continues to thrive."
              ].map((point, i) => (
                <motion.div 
                  key={i}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="flex items-start gap-4 p-6 rounded-xl bg-card border border-border shadow-sm"
                >
                  <div className="mt-1 bg-secondary/10 p-2 rounded-full">
                    <CheckCircle2 className="h-6 w-6 text-secondary" />
                  </div>
                  <p className="text-lg font-medium pt-1 text-foreground">{point}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="mt-10">
        <div className="container mx-auto px-4 md:px-8">
          <div className="bg-primary text-primary-foreground rounded-2xl p-10 md:p-16 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Let's build something great together.</h2>
            <p className="text-xl text-primary-foreground/80 mb-10 max-w-2xl mx-auto font-light">
              Bring us your challenges. We'll bring the solutions.
            </p>
            <Button size="lg" className="bg-secondary text-primary hover:bg-secondary/90 h-14 px-8 text-lg font-semibold" asChild>
              <a href={getWhatsAppLink("Hi Milespace, I'd like to discuss a potential project with your team.")} target="_blank" rel="noopener noreferrer">
                Contact Our Team
                <ArrowRight className="ml-2 h-5 w-5" />
              </a>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}

function Card({ value, icon, desc }: { value: string, icon: React.ReactNode, desc: string }) {
  return (
    <motion.div 
      whileHover={{ y: -5 }}
      className="bg-card p-8 rounded-xl border border-border text-center shadow-sm"
    >
      <div className="h-16 w-16 mx-auto bg-primary/5 rounded-2xl flex items-center justify-center mb-6">
        {icon}
      </div>
      <h3 className="text-2xl font-bold mb-4">{value}</h3>
      <p className="text-muted-foreground leading-relaxed">{desc}</p>
    </motion.div>
  );
}
