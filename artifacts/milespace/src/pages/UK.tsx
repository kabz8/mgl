import { motion } from "framer-motion";
import { Link } from "wouter";
import { CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { getWhatsAppLink } from "@/lib/whatsapp";
import { usePageMetadata } from "@/hooks/usePageMetadata";
import { DemoBookingSection } from "@/components/saas/DemoBookingSection";
import { IconTiles } from "@/components/marketing/IconTiles";

export default function UK() {
  usePageMetadata({
    title: "Custom Software Development for UK Businesses | Milespace",
    description:
      "Milespace builds custom software, websites, web apps, Shopify solutions, and business systems for UK businesses.",
    path: "/uk",
  });

  return (
    <div className="flex flex-col w-full bg-background">
      <section className="relative overflow-hidden bg-primary text-primary-foreground py-20 md:py-28">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(255,255,255,0.1),transparent_45%)]" />
        <div className="container relative z-10 mx-auto px-4 md:px-8">
          <div className="max-w-4xl">
            <p className="text-sm uppercase tracking-[0.18em] text-secondary font-semibold mb-4">Milespace UK</p>
            <h1 className="text-4xl md:text-6xl font-bold tracking-tight leading-tight mb-6">
              Reliable Web & Software Development Partner for UK Companies
            </h1>
            <p className="text-lg md:text-xl text-primary-foreground/80 max-w-3xl mb-8">
              We help UK teams deliver tailored software, conversion-focused web platforms, and business systems with clear communication, practical scope, and dependable execution.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button asChild size="lg" className="h-14 px-8 bg-secondary text-primary hover:bg-secondary/90 font-semibold" id="uk-book-call" data-cta="book-call">
                <a href={getWhatsAppLink("Hi Milespace, we are a UK business and want to book a discovery call.")} target="_blank" rel="noopener noreferrer">
                  Book a Discovery Call
                </a>
              </Button>
              <Button asChild size="lg" variant="outline" className="h-14 px-8 border-white/40 text-white hover:bg-white/10 hover:text-white font-semibold" id="uk-request-quote" data-cta="request-quote">
                <a href="#uk-demo-form">Request a Project Quote</a>
              </Button>
            </div>
            <p className="mt-5 text-sm text-primary-foreground/70">
              Tailored solution architecture, fast response cycles, and structured delivery across UK time zones.
            </p>
          </div>
        </div>
      </section>

      <section className="py-12 bg-background">
        <div className="container mx-auto px-4 md:px-8 max-w-4xl">
          <IconTiles
            items={[
              { icon: "🎯", title: "Client-Centric", subtitle: "Your commercial outcomes guide delivery" },
              { icon: "⚡", title: "Fast & Reliable", subtitle: "Practical timelines and disciplined shipping" },
              { icon: "🔎", title: "Detail-Oriented", subtitle: "Strong QA and implementation rigor" },
              { icon: "🤝", title: "Proactive Support", subtitle: "We surface risks and options early" },
            ]}
          />
        </div>
      </section>

      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 md:px-8">
          <IconTiles
            items={[
              { icon: "🤝", title: "Direct Collaboration", subtitle: "You work with delivery leads, not account relays." },
              { icon: "⏱️", title: "Timeline Discipline", subtitle: "Practical scope, milestones, and transparent progress." },
              { icon: "🛡️", title: "Business-Ready Quality", subtitle: "Stable builds with strong UX and engineering fundamentals." },
              { icon: "📣", title: "Clear Communication", subtitle: "Consistent updates with decisions and risks surfaced early." },
            ]}
          />
        </div>
      </section>

      <section className="py-20 bg-muted/30 border-y border-border">
        <div className="container mx-auto px-4 md:px-8">
          <div className="max-w-3xl mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Services for UK Growth Teams</h2>
            <p className="text-muted-foreground">
              We focus on delivery work that drives operational efficiency, stronger customer journeys, and clearer business visibility.
            </p>
          </div>
          <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-6">
            {[
              "Custom Software Development",
              "Web App Development",
              "Website Development",
              "Shopify Development",
              "Business Systems & Automation",
              "Admin Dashboards & Portals",
            ].map((service, i) => (
              <motion.div key={service} initial={{ opacity: 0, y: 14 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.3, delay: i * 0.05 }}>
                <Card className="h-full border-border/70">
                  <CardHeader><CardTitle className="text-xl">{service}</CardTitle></CardHeader>
                  <CardContent><CardDescription>Tailored implementation designed around your workflows and commercial goals.</CardDescription></CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 md:px-8">
          <div className="grid lg:grid-cols-2 gap-8">
            <Card className="border-border/70">
              <CardHeader><CardTitle className="text-2xl">Our Delivery Process</CardTitle></CardHeader>
              <CardContent className="space-y-3">
                {[
                  "Discovery: align on business outcomes and constraints",
                  "Planning: define practical scope, estimates, and priorities",
                  "Design & Development: build with quality and iteration in view",
                  "Testing & Launch: validate before release and deploy cleanly",
                  "Support: iterate post-launch as your business evolves",
                ].map((step, i) => (
                  <p key={step} className="text-sm text-foreground"><span className="font-semibold">{i + 1}. </span>{step}</p>
                ))}
              </CardContent>
            </Card>
            <Card className="border-border/70">
              <CardHeader><CardTitle className="text-2xl">Who We Work With</CardTitle></CardHeader>
              <CardContent className="space-y-2 text-sm text-muted-foreground">
                {[
                  "Founders needing execution reliability",
                  "In-house teams needing additional product bandwidth",
                  "Operations teams replacing fragmented manual workflows",
                  "Growing businesses needing scalable digital infrastructure",
                  "Established companies modernizing legacy systems",
                ].map((item) => (
                  <p key={item}>{item}</p>
                ))}
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section className="py-20 bg-muted/30 border-y border-border">
        <div className="container mx-auto px-4 md:px-8">
          <div className="max-w-3xl mx-auto text-center mb-10">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Frequently Asked Questions</h2>
          </div>
          <div className="max-w-4xl mx-auto grid gap-4">
            {[
              ["Do you work with UK clients remotely?", "Yes. We collaborate remotely with UK teams through structured milestones and clear communication rhythms."],
              ["Can you support ongoing maintenance?", "Yes. We provide post-launch support, feature iteration, and technical improvements."],
              ["Can you improve an existing system?", "Yes. We can modernize, refactor, and extend existing platforms without unnecessary rebuilds."],
              ["How long does a typical project take?", "Many projects launch in 4-12 weeks depending on complexity, integration needs, and scope depth."],
              ["Do you work with startups and established businesses?", "Yes. We work with both startup teams and mature organizations needing delivery discipline."],
            ].map(([q, a]) => (
              <Card key={q} className="border-border/70">
                <CardHeader><CardTitle className="text-lg">{q}</CardTitle></CardHeader>
                <CardContent><CardDescription>{a}</CardDescription></CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 md:px-8 text-center max-w-3xl">
          <h2 className="text-3xl md:text-5xl font-bold mb-5">Need a Dependable UK Delivery Partner?</h2>
          <p className="text-primary-foreground/80 text-lg mb-9">
            Share your scope and we will return a practical roadmap with clear next steps and commercial fit.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="h-14 px-8 bg-secondary text-primary hover:bg-secondary/90 font-semibold" id="uk-final-book-call" data-cta="book-call">
              <a href={getWhatsAppLink("Hi Milespace, we are ready to discuss our UK project scope.")} target="_blank" rel="noopener noreferrer">
                Book a Discovery Call
              </a>
            </Button>
            <Button asChild size="lg" variant="outline" className="h-14 px-8 border-white/40 text-white hover:bg-white/10 hover:text-white font-semibold" id="uk-final-request-quote" data-cta="request-quote">
              <a href="#uk-demo-form">Request Quote</a>
            </Button>
          </div>
          <p className="mt-6 text-sm text-primary-foreground/70">
            Looking for US-focused messaging instead? <Link href="/usa" className="underline underline-offset-4 hover:text-white">View USA page</Link>.
          </p>
        </div>
      </section>

      <DemoBookingSection
        context="uk"
        title="Book a UK Discovery Session"
        description="Share your requirements and we will tailor a discovery call around your current stack, priorities, and delivery timeline."
      />
    </div>
  );
}
