import { motion } from "framer-motion";
import { Link } from "wouter";
import { Gauge, Layers3, Rocket } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { getWhatsAppLink } from "@/lib/whatsapp";
import { usePageMetadata } from "@/hooks/usePageMetadata";
import { DemoBookingSection } from "@/components/saas/DemoBookingSection";

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
                <CardTitle className="text-2xl">Execution Outcomes We Track</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                {[
                  "Time-to-value from scoped backlog to shipped release",
                  "Feature reliability under real usage load",
                  "Delivery confidence for founders and product leaders",
                ].map((line) => (
                  <p key={line} className="text-sm text-primary-foreground/90 flex items-start gap-2">
                    <span>{line}</span>
                  </p>
                ))}
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section className="py-16 bg-background">
        <div className="container mx-auto px-4 md:px-8">
          <div className="mb-8 overflow-hidden rounded-2xl border border-border/70">
            <img
              src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1600&q=80"
              alt="USA skyline and business technology context"
              className="h-[240px] w-full object-cover md:h-[320px]"
              loading="lazy"
            />
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { icon: Rocket, title: "Growth Velocity", text: "Roadmaps are broken into launchable milestones, not endless backlog discussions." },
              { icon: Layers3, title: "Scalable Stack", text: "Architecture choices support expansion, integrations, and multi-team development." },
              { icon: Gauge, title: "Performance Focus", text: "UX speed and stability are treated as core product outcomes, not afterthoughts." },
            ].map((item) => {
              const Icon = item.icon;
              return (
                <Card key={item.title} className="border-border/70">
                  <CardHeader>
                    <div className="h-11 w-11 rounded-lg bg-primary/5 flex items-center justify-center mb-4">
                      <Icon className="h-5 w-5 text-secondary" />
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
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Capabilities for Product-Driven US Teams</h2>
            <p className="text-muted-foreground">
              Delivery support for teams that need speed, stability, and clarity at the same time.
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            {[
              ["Product Engineering", "Roadmap execution with scalable architecture and release discipline."],
              ["Customer-Facing Platforms", "Web apps designed around activation, retention, and user trust."],
              ["Internal Operations Software", "Systems that reduce manual work and improve decision speed."],
              ["Commerce + Fulfillment Flows", "Integrations between storefront, ops, and reporting layers."],
              ["Data Visibility Layers", "Dashboards that leadership can use for weekly decisions."],
              ["Platform Refactoring", "Incremental modernization for brittle apps that cannot be replaced at once."],
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
              <CardHeader><CardTitle className="text-2xl">US Product Delivery Model</CardTitle></CardHeader>
              <CardContent className="space-y-3">
                {[
                  "Roadmap alignment around business and product KPIs",
                  "Technical architecture and risk planning",
                  "Sprint-based implementation with demo checkpoints",
                  "Quality validation and release readiness",
                  "Post-launch iteration loop tied to usage signals",
                ].map((step, i) => (
                  <p key={step} className="text-sm text-foreground"><span className="font-semibold">{i + 1}. </span>{step}</p>
                ))}
              </CardContent>
            </Card>
            <Card className="border-border/70">
              <CardHeader><CardTitle className="text-2xl">Ideal Engagement Profile</CardTitle></CardHeader>
              <CardContent className="space-y-2 text-sm text-muted-foreground">
                {[
                  "SaaS teams needing additional execution capacity",
                  "Founder-led companies moving from MVP to structured scale",
                  "Ops-heavy businesses needing custom internal tooling",
                  "Product teams shipping under tight timeline pressure",
                  "Companies modernizing legacy stacks without service disruption",
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
          <div className="max-w-3xl mb-10">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">How We Work with US Teams</h2>
            <p className="text-muted-foreground">Clear answers to the delivery questions that matter before kickoff.</p>
          </div>
          <div className="grid md:grid-cols-2 gap-4">
            {[
              ["Can you work with our in-house engineers?", "Yes. We can plug into your sprint rhythm, tools, and engineering standards."],
              ["Can we start with one scoped module?", "Yes. Most engagements begin with a focused module to prove execution fit."],
              ["How do you handle product ambiguity?", "We run discovery sprints to translate ambiguity into clear build priorities."],
              ["Do you provide post-launch optimization?", "Yes. We support iteration based on user behavior and business metrics."],
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
        mode="project"
        title="Book a USA Product Discovery Call"
        description="Share your roadmap pressure, current bottlenecks, and expected outcomes. We will prepare a focused delivery proposal."
        submitLabel="Request USA Discovery Call"
        primarySelectLabel="Primary Initiative *"
        primarySelectPlaceholder="Select initiative"
        primarySelectOptions={["Build new SaaS feature set", "Redesign existing web app", "Scale backend and architecture", "Build internal operations platform", "Modernize legacy product"]}
        secondarySelectLabel="Urgency Window *"
        secondarySelectPlaceholder="Select timeline"
        secondarySelectOptions={["Need kickoff in 1-2 weeks", "Kickoff this month", "Kickoff this quarter", "Exploring options"]}
        organizationLabel="Company Name *"
        organizationPlaceholder="Example: Nova Growth Labs"
        teamLabel="Current Product Team Setup *"
        teamPlaceholder="Example: PM, designer, 3 engineers"
        messageLabel="What business metric should improve first? *"
        messagePlaceholder="Describe the key metric, current bottleneck, and expected impact after delivery."
      />
    </div>
  );
}
