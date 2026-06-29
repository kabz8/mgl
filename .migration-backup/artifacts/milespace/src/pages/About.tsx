import { Button } from "@/components/ui/button";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { getWhatsAppLink } from "@/lib/whatsapp";
import { motion } from "framer-motion";

export default function About() {
  return (
    <div className="flex flex-col w-full pb-16 md:pb-24">
      {/* Page Header */}
      <section className="bg-primary text-primary-foreground py-16 md:py-24">
        <div className="container mx-auto px-4 md:px-8">
          <div className="max-w-3xl">
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-secondary font-semibold uppercase tracking-widest text-sm mb-4"
            >
              Our Story
            </motion.p>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6 leading-tight"
            >
              Milespace Group:<br />
              <span className="text-secondary">A Legacy of Infinite Horizons</span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-lg md:text-xl text-primary-foreground/80 font-light leading-relaxed"
            >
              In the world of innovation, where ambition fuels empires and technology shapes destiny, Milespace Group was not merely founded — it was forged.
            </motion.p>
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-16 md:py-24 bg-background">
        <div className="container mx-auto px-4 md:px-8">
          <div className="grid md:grid-cols-2 gap-10 md:gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
                Conceived at the intersection of <strong className="text-foreground">vision and velocity</strong>, Milespace Group embodies the relentless pursuit of excellence, where every milestone is a conquest and every space an opportunity waiting to be sculpted.
              </p>

              <div className="space-y-4 pl-4 border-l-4 border-secondary">
                <div>
                  <span className="font-bold text-foreground text-lg">Miles</span>
                  <p className="text-muted-foreground mt-1">is a tribute to the relentless journey — the long road traveled by pioneers, dreamers, and architects of the future. It is the measure of distance conquered, the embodiment of ambition that knows no rest.</p>
                </div>
                <div>
                  <span className="font-bold text-foreground text-lg">Space</span>
                  <p className="text-muted-foreground mt-1">is an ode to the infinite — a boundless realm where creativity breathes, where ideas take flight, and where the impossible is merely a challenge waiting to be mastered.</p>
                </div>
              </div>

              <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
                Much like the great explorers who charted unknown territories, <strong className="text-foreground">Milespace Group</strong> was born for those who refuse to be confined by limitations. We do not merely build — we <strong className="text-foreground">engineer experiences</strong>. We do not follow trends — we <strong className="text-foreground">orchestrate revolutions</strong>. Every line of code, every digital infrastructure, and every strategy is designed not just to function, but to <strong className="text-foreground">dominate</strong>.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative rounded-2xl overflow-hidden shadow-xl aspect-[4/3] bg-primary"
            >
              <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=2070&auto=format&fit=crop')] bg-cover bg-center opacity-30" />
              <div className="absolute inset-0 bg-gradient-to-t from-primary via-primary/60 to-transparent" />
              <div className="absolute bottom-0 left-0 p-8 md:p-10">
                <p className="text-white/70 text-sm font-medium uppercase tracking-widest mb-3">Our Philosophy</p>
                <p className="text-white text-xl md:text-2xl font-bold leading-snug">
                  "Where vision meets velocity, the future is not predicted — it is created."
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* What Sets Us Apart */}
      <section className="py-16 md:py-20 bg-muted/30 border-y border-border">
        <div className="container mx-auto px-4 md:px-8">
          <div className="max-w-2xl mx-auto text-center mb-12 md:mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">What Makes Us Different</h2>
            <p className="text-muted-foreground text-base md:text-lg">To work with Milespace Group is to step into a world where the ordinary dissolves into insignificance.</p>
          </div>
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6 md:gap-8">
            <ValueCard
              icon="⚡"
              title="Innovation is the Standard"
              desc="Here, innovation is not an aspiration — it is the standard. Every project pushes beyond what's expected."
            />
            <ValueCard
              icon="✨"
              title="Elegance is the Foundation"
              desc="Elegance is not an afterthought — it is the foundation. Design and engineering meet to create experiences that captivate."
            />
            <ValueCard
              icon="🛡️"
              title="Success is Inevitable"
              desc="And success? It is not a possibility — it is inevitable. We partner with you until the goal is achieved."
            />
          </div>
        </div>
      </section>

      {/* Manifesto Block */}
      <section className="py-16 md:py-24 bg-background">
        <div className="container mx-auto px-4 md:px-8">
          <div className="max-w-3xl mx-auto text-center space-y-6">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-3xl md:text-4xl font-bold"
            >
              This is more than a company.
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-xl md:text-2xl font-bold text-secondary"
            >
              This is Milespace Group.
            </motion.p>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-base md:text-lg text-muted-foreground leading-relaxed"
            >
              Where vision meets velocity, where the future is not predicted — it is created.
            </motion.p>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 md:py-20 bg-muted/30 border-y border-border">
        <div className="container mx-auto px-4 md:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-8 md:mb-10 text-center">Why Choose Milespace?</h2>
            <div className="space-y-4">
              {[
                "Deep understanding of the African digital landscape and consumer behavior.",
                "Technical mastery across modern stacks — React, Next.js, Flutter, Node.js, and beyond.",
                "Conversion-focused design — every pixel and every line of code is built to generate results.",
                "Transparent pricing, clear communication, and no surprises throughout the project lifecycle.",
                "Long-term partnership: we build, then we support — ensuring your product continues to thrive.",
              ].map((point, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.08 }}
                  className="flex items-start gap-4 p-5 md:p-6 rounded-xl bg-card border border-border shadow-sm"
                >
                  <div className="mt-0.5 shrink-0 bg-secondary/10 p-2 rounded-full">
                    <CheckCircle2 className="h-5 w-5 text-secondary" />
                  </div>
                  <p className="text-base md:text-lg font-medium text-foreground">{point}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 md:py-20">
        <div className="container mx-auto px-4 md:px-8">
          <div className="bg-primary text-primary-foreground rounded-2xl p-8 md:p-16 text-center relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-secondary/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 pointer-events-none" />
            <div className="relative z-10">
              <h2 className="text-2xl md:text-4xl font-bold mb-4 md:mb-6">Let's build something great together.</h2>
              <p className="text-base md:text-xl text-primary-foreground/80 mb-8 md:mb-10 max-w-2xl mx-auto font-light">
                Bring us your challenges. We'll bring the solutions.
              </p>
              <Button size="lg" className="bg-secondary text-primary hover:bg-secondary/90 h-12 md:h-14 px-6 md:px-8 text-base md:text-lg font-bold w-full sm:w-auto" asChild>
                <a href={getWhatsAppLink("Hi Milespace Group, I'd like to discuss a potential project with your team.")} target="_blank" rel="noopener noreferrer">
                  Contact Our Team
                  <ArrowRight className="ml-2 h-5 w-5" />
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

function ValueCard({ icon, title, desc }: { icon: string; title: string; desc: string }) {
  return (
    <motion.div
      whileHover={{ y: -4 }}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="bg-card p-6 md:p-8 rounded-xl border border-border shadow-sm"
    >
      <div className="h-14 w-14 bg-muted rounded-2xl flex items-center justify-center mb-5 text-2xl">
        {icon}
      </div>
      <h3 className="text-lg md:text-xl font-bold mb-3">{title}</h3>
      <p className="text-muted-foreground text-sm md:text-base leading-relaxed">{desc}</p>
    </motion.div>
  );
}
