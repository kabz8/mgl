import { motion } from "framer-motion";
import { Link } from "wouter";
import { Clock3, ShieldCheck, Users2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { getWhatsAppLink } from "@/lib/whatsapp";
import { usePageMetadata } from "@/hooks/usePageMetadata";
import { DemoBookingSection } from "@/components/saas/DemoBookingSection";

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

      <section className="py-16 bg-background">
        <div className="container mx-auto px-4 md:px-8">
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { icon: Clock3, title: "Timezone-Aligned Delivery", text: "Planned ceremonies and async updates tailored for UK working rhythms." },
              { icon: ShieldCheck, title: "Low-Risk Execution", text: "Release discipline, QA checkpoints, and transparent issue escalation." },
              { icon: Users2, title: "Senior Team Access", text: "Direct communication with product and engineering leads, not handoffs." },
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
            <h2 className="text-3xl md:text-4xl font-bold mb-4">What UK Teams Hire Us For</h2>
            <p className="text-muted-foreground">
              We focus on serious implementation work where reliability and clarity matter as much as design quality.
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
              <CardHeader><CardTitle className="text-2xl">UK Delivery Framework</CardTitle></CardHeader>
              <CardContent className="space-y-3">
                {[
                  "Commercial discovery: align on measurable outcomes and risk profile",
                  "Technical framing: define architecture, integrations, and timeline",
                  "Sprint execution: ship features in controlled increments",
                  "Release hardening: QA, UAT, and go-live checklist",
                  "Post-launch support: optimize based on user and business signals",
                ].map((step, i) => (
                  <p key={step} className="text-sm text-foreground"><span className="font-semibold">{i + 1}. </span>{step}</p>
                ))}
              </CardContent>
            </Card>
            <Card className="border-border/70">
              <CardHeader><CardTitle className="text-2xl">Best-Fit UK Clients</CardTitle></CardHeader>
              <CardContent className="space-y-2 text-sm text-muted-foreground">
                {[
                  "Agencies and SMBs needing dependable implementation partners",
                  "Ops-heavy teams replacing spreadsheets and manual follow-ups",
                  "Founders under pressure to launch without quality compromise",
                  "Service businesses building client portals and internal systems",
                  "Organizations modernizing old platforms without disruptive rewrites",
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
            <h2 className="text-3xl md:text-4xl font-bold mb-4">UK Partner Expectations</h2>
            <p className="text-muted-foreground">How we keep projects professional, predictable, and commercially aligned.</p>
          </div>
          <div className="grid md:grid-cols-3 gap-4">
            {[
              ["Communication cadence", "Weekly milestone updates plus async daily status when needed."],
              ["Contracting model", "Fixed-scope milestones or retainer-based product support options."],
              ["Quality guardrails", "Structured QA, staging verification, and release notes for accountability."],
            ].map(([title, text]) => (
              <Card key={title} className="border-border/70">
                <CardHeader><CardTitle className="text-lg">{title}</CardTitle></CardHeader>
                <CardContent><CardDescription>{text}</CardDescription></CardContent>
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
        mode="project"
        title="Start a UK Project Discovery Session"
        description="Tell us what you need delivered, your timeline pressure, and your current blockers. We will return with a practical execution plan."
        submitLabel="Request UK Delivery Plan"
        primarySelectLabel="Project Type *"
        primarySelectPlaceholder="Select project type"
        primarySelectOptions={["Website + Conversion Upgrade", "Custom Internal System", "Client Portal / Dashboard", "Shopify + Ops Integration", "Legacy System Modernization"]}
        secondarySelectLabel="Delivery Priority *"
        secondarySelectPlaceholder="Select priority"
        secondarySelectOptions={["Ship quickly", "Reduce operational risk", "Improve user experience", "Improve reporting visibility", "Need all three"]}
        organizationLabel="Company / Organization Name *"
        organizationPlaceholder="Example: Northfield Logistics Ltd"
        teamLabel="Who will be involved on your side? *"
        teamPlaceholder="Example: Founder, Operations Manager, 1 technical lead"
        messageLabel="What has to be true after launch? *"
        messagePlaceholder="Describe the business outcomes and non-negotiables for this project."
      />
    </div>
  );
}
