import { motion } from "framer-motion";
import { Link } from "wouter";
import { ArrowRight, BarChart3, CheckCircle2, GaugeCircle, Layers3 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { getWhatsAppLink } from "@/lib/whatsapp";
import { usePageMetadata } from "@/hooks/usePageMetadata";
import { DemoBookingSection } from "@/components/saas/DemoBookingSection";
import { IconTiles } from "@/components/marketing/IconTiles";

export default function USA() {
  usePageMetadata({
    title: "Custom Software Development for US Businesses | Milespace",
    description:
      "Milespace builds scalable software, web apps, websites, Shopify solutions, and business systems for US companies.",
    path: "/usa",
  });

  return (
    <div className="flex flex-col w-full bg-background">
      <section className="relative overflow-hidden bg-primary text-primary-foreground py-20 md:py-28">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(255,255,255,0.12),transparent_45%)]" />
        <div className="container relative z-10 mx-auto px-4 md:px-8">
          <div className="grid lg:grid-cols-[1.15fr_0.85fr] gap-8 items-center">
            <div>
              <p className="text-sm uppercase tracking-[0.18em] text-secondary font-semibold mb-4">Milespace USA</p>
              <h1 className="text-4xl md:text-6xl font-bold tracking-tight leading-tight mb-6">
                Scalable Web, App & Software Solutions for US Companies
              </h1>
              <p className="text-lg md:text-xl text-primary-foreground/80 max-w-3xl mb-8">
                Milespace helps US teams execute faster with scalable architecture, cleaner product delivery, and systems built for growth-stage and mature operations.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button asChild size="lg" className="h-14 px-8 bg-secondary text-primary hover:bg-secondary/90 font-semibold" id="usa-book-call" data-cta="book-call">
                  <a href={getWhatsAppLink("Hi Milespace, we are a US business and want to book a discovery call.")} target="_blank" rel="noopener noreferrer">
                    Book a Discovery Call
                  </a>
                </Button>
                <Button asChild size="lg" variant="outline" className="h-14 px-8 border-white/40 text-white hover:bg-white/10 hover:text-white font-semibold" id="usa-request-estimate" data-cta="request-quote">
                  <a href="#usa-demo-form">Request an Estimate</a>
                </Button>
              </div>
              <p className="mt-5 text-sm text-primary-foreground/70">Fast execution, transparent milestones, and scalable systems for growth-oriented teams.</p>
            </div>

            <Card className="border-white/15 bg-white/[0.06] backdrop-blur-sm text-white">
              <CardHeader>
                <CardTitle className="text-2xl">Execution Metrics That Matter</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                {[
                  "Time-to-market acceleration through scope discipline",
                  "Scalable architecture for growth and integrations",
                  "Clear sprint visibility for product and ops teams",
                ].map((line) => (
                  <p key={line} className="text-sm text-primary-foreground/90 flex items-start gap-2">
                    <CheckCircle2 className="h-4 w-4 text-secondary mt-0.5 shrink-0" />
                    <span>{line}</span>
                  </p>
                ))}
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section className="py-12 bg-background">
        <div className="container mx-auto px-4 md:px-8 max-w-4xl">
          <IconTiles
            items={[
              { icon: "🚀", title: "Execution Speed", subtitle: "Move from scope to shipped outcomes faster" },
              { icon: "📈", title: "Growth-Ready", subtitle: "Architecture designed for scale and expansion" },
              { icon: "🧠", title: "Clear Decisions", subtitle: "Better visibility for product and ops teams" },
              { icon: "🛠️", title: "Hands-On Delivery", subtitle: "Practical build support across roadmap phases" },
            ]}
          />
        </div>
      </section>

      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 md:px-8">
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { icon: GaugeCircle, title: "Speed", text: "Move from roadmap to shipped features with less internal friction." },
              { icon: Layers3, title: "Scalability", text: "Build once with architecture that supports future growth and complexity." },
              { icon: BarChart3, title: "Operational Clarity", text: "Improve visibility into product, workflows, and performance outcomes." },
            ].map((item) => {
              const Icon = item.icon;
              return (
                <Card key={item.title} className="border-border/70">
                  <CardHeader>
                    <div className="h-12 w-12 rounded-xl bg-primary/5 flex items-center justify-center mb-4">
                      <Icon className="h-6 w-6 text-secondary" />
                    </div>
                    <CardTitle className="text-xl">{item.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription>{item.text}</CardDescription>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      <section className="py-20 bg-muted/30 border-y border-border">
        <div className="container mx-auto px-4 md:px-8">
          <div className="max-w-3xl mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Solutions We Build for US Teams</h2>
            <p className="text-muted-foreground">
              Product-minded implementation focused on customer growth, system reliability, and operational leverage.
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            {[
              ["Custom Software Development", "Internal and customer-facing systems aligned with business logic and growth goals."],
              ["Web App Development", "Robust web apps with clean UX, secure architecture, and scalable service layers."],
              ["Website & Conversion Systems", "Marketing and product websites engineered for performance and conversion outcomes."],
              ["Shopify & Commerce", "Commerce experiences with custom integrations and operational reporting."],
              ["Business Automation", "Workflow automation and connected systems that reduce manual load."],
              ["Dashboards & Portals", "Decision-oriented dashboards for teams, operations, and leadership visibility."],
            ].map(([title, desc], i) => (
              <motion.div key={title} initial={{ opacity: 0, y: 14 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.3, delay: i * 0.05 }}>
                <Card className="h-full border-border/70">
                  <CardHeader><CardTitle className="text-xl">{title}</CardTitle></CardHeader>
                  <CardContent><CardDescription>{desc}</CardDescription></CardContent>
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
              <CardHeader><CardTitle className="text-2xl">Product Delivery Workflow</CardTitle></CardHeader>
              <CardContent className="space-y-3">
                {[
                  "Discovery and metrics alignment",
                  "Scope planning and technical framing",
                  "Design and engineering in delivery sprints",
                  "Testing, release, and post-launch monitoring",
                  "Iteration against user and business signals",
                ].map((step, i) => (
                  <p key={step} className="text-sm text-foreground"><span className="font-semibold">{i + 1}. </span>{step}</p>
                ))}
              </CardContent>
            </Card>
            <Card className="border-border/70">
              <CardHeader><CardTitle className="text-2xl">Best Fit</CardTitle></CardHeader>
              <CardContent className="space-y-2 text-sm text-muted-foreground">
                {[
                  "SaaS and product teams needing faster throughput",
                  "Growing companies replacing manual operations",
                  "Retail/ops businesses needing scalable internal tooling",
                  "Teams modernizing brittle or legacy applications",
                  "Leaders who need dependable implementation partners",
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
              ["Do you work with US companies remotely?", "Yes. We work remote-first with clear planning rhythms, milestone updates, and decision visibility."],
              ["Can you support ongoing product development?", "Yes. We can continue as your product development partner across roadmap phases."],
              ["Can you improve an existing product without rebuilding?", "Yes. We can refactor critical areas, improve performance, and add capabilities incrementally."],
              ["How fast can projects start?", "After discovery and scope alignment, projects can begin quickly with practical sprint planning."],
              ["Do you work with startups and established teams?", "Yes. We support both growth-stage and mature organizations needing execution capacity."],
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
          <h2 className="text-3xl md:text-5xl font-bold mb-5">Need a Product Development Partner That Delivers?</h2>
          <p className="text-primary-foreground/80 text-lg mb-9">
            Share your priorities and we will map the fastest path from scope to usable outcomes.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="h-14 px-8 bg-secondary text-primary hover:bg-secondary/90 font-semibold" id="usa-final-book-call" data-cta="book-call">
              <a href={getWhatsAppLink("Hi Milespace, we'd like to discuss our US product roadmap.")} target="_blank" rel="noopener noreferrer">
                Book a Discovery Call
              </a>
            </Button>
            <Button asChild size="lg" variant="outline" className="h-14 px-8 border-white/40 text-white hover:bg-white/10 hover:text-white font-semibold" id="usa-final-request-estimate" data-cta="request-quote">
              <a href="#usa-demo-form">Request Estimate</a>
            </Button>
          </div>
          <p className="mt-6 text-sm text-primary-foreground/70">
            Need UK-focused positioning? <Link href="/uk" className="underline underline-offset-4 hover:text-white">View UK page</Link>.
          </p>
        </div>
      </section>

      <DemoBookingSection
        context="usa"
        title="Book a USA Discovery Session"
        description="Tell us your product goals, team constraints, and timeline so we can prepare a focused discovery conversation."
      />
    </div>
  );
}
