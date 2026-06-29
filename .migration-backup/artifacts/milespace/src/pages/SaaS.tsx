import { Link } from "wouter";
import { motion } from "framer-motion";
import { ArrowRight, Layers3, ShieldCheck, Timer, TrendingUp } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { getWhatsAppLink } from "@/lib/whatsapp";
import { usePageMetadata } from "@/hooks/usePageMetadata";
import { DemoBookingSection } from "@/components/saas/DemoBookingSection";

const products = [
  {
    id: "chamadesk",
    name: "Milespace ChamaDesk",
    market: "Chamas and member-led groups",
    summary: "A structured operating system for meetings, contributions, loans, and governance.",
    value: "Move from informal record-keeping to traceable and trusted group operations.",
    href: "/saas/milespace-chamadesk",
  },
  {
    id: "pos",
    name: "Milespace POS",
    market: "Retail and service stores",
    summary: "A performance-focused point-of-sale for checkout speed, stock control, and reporting clarity.",
    value: "Run daily operations with confidence and fewer margin leaks.",
    href: "/saas/pos",
  },
];

export default function SaaS() {
  usePageMetadata({
    title: "Milespace SaaS Products | Milespace ChamaDesk & Milespace POS",
    description:
      "Discover Milespace SaaS products: Milespace ChamaDesk for group governance and Milespace POS for modern retail operations.",
    path: "/saas",
  });

  return (
    <div className="flex w-full flex-col bg-background">
      <section className="relative overflow-hidden bg-primary py-20 text-primary-foreground md:py-28">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(255,255,255,0.15),transparent_40%),radial-gradient(circle_at_bottom_right,rgba(234,179,8,0.2),transparent_35%)]" />
        <div className="container relative z-10 mx-auto px-4 md:px-8">
          <div className="max-w-5xl">
            <p className="mb-4 text-sm font-semibold uppercase tracking-[0.18em] text-secondary">Milespace SaaS</p>
            <h1 className="mb-6 text-4xl font-bold leading-tight tracking-tight md:text-6xl">
              Software Products Built for <span className="text-secondary">Real Operational Pressure</span>
            </h1>
            <p className="mb-8 max-w-3xl text-lg text-primary-foreground/85 md:text-xl">
              Milespace SaaS is for teams that have outgrown manual work and need systems that deliver clarity, accountability, and speed every single day.
            </p>
            <div className="flex flex-col gap-4 sm:flex-row">
              <Button asChild size="lg" className="h-14 px-8 bg-secondary text-primary hover:bg-secondary/90 font-semibold" id="saas-explore-chamadesk" data-cta="book-demo">
                <Link href="/saas/milespace-chamadesk">View Milespace ChamaDesk</Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="h-14 px-8 border-white/40 text-white hover:bg-white/10 hover:text-white font-semibold" id="saas-explore-pos" data-cta="book-demo">
                <Link href="/saas/pos">View Milespace POS</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <section className="border-b border-border py-14">
        <div className="container mx-auto grid gap-5 px-4 md:grid-cols-4 md:px-8">
          {[
            { icon: Timer, title: "Faster Time-to-Value", text: "Launch core workflows first, then expand." },
            { icon: ShieldCheck, title: "Trust & Traceability", text: "Role-based actions and clean audit trails." },
            { icon: Layers3, title: "Operational Structure", text: "Clear process over scattered tools and chat threads." },
            { icon: TrendingUp, title: "Decision Visibility", text: "Reports leaders can use for weekly execution." },
          ].map((item) => {
            const Icon = item.icon;
            return (
              <Card key={item.title} className="border-border/70 bg-card/70">
                <CardHeader className="pb-3">
                  <Icon className="h-5 w-5 text-secondary" />
                  <CardTitle className="text-base">{item.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription>{item.text}</CardDescription>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-4 md:px-8">
          <div className="mb-10 max-w-3xl">
            <h2 className="mb-4 text-3xl font-bold md:text-4xl">Two Products. Two Clear Outcomes.</h2>
            <p className="text-lg text-muted-foreground">Choose the product that matches your current operational bottleneck and growth direction.</p>
          </div>
          <div className="grid gap-6 md:grid-cols-2">
            {products.map((product, index) => (
              <motion.div key={product.id} initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.35, delay: index * 0.08 }}>
                <Card className="h-full border-border/70 shadow-sm transition-shadow hover:shadow-lg">
                  <CardHeader>
                    <p className="text-xs font-semibold uppercase tracking-wide text-secondary">{product.market}</p>
                    <CardTitle className="text-2xl">{product.name}</CardTitle>
                    <CardDescription>{product.summary}</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-5">
                    <p className="text-sm text-foreground">{product.value}</p>
                    <Button asChild className="w-full bg-primary hover:bg-primary/90" id={`${product.id}-view-product`} data-cta="request-pricing">
                      <Link href={product.href}>
                        Open Product Page <ArrowRight className="ml-2 h-4 w-4" />
                      </Link>
                    </Button>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="border-y border-border bg-muted/30 py-20">
        <div className="container mx-auto px-4 md:px-8">
          <div className="grid gap-8 md:grid-cols-3">
            {[
              ["Discovery", "We map your workflow friction and define what software should fix first."],
              ["Implementation", "We align onboarding, user roles, and rollout so the team adopts quickly."],
              ["Optimization", "We improve based on usage reality, not assumptions from day one."],
            ].map(([title, text]) => (
              <Card key={title} className="border-border/70">
                <CardHeader>
                  <CardTitle>{title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription>{text}</CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-primary py-20 text-primary-foreground">
        <div className="container mx-auto max-w-3xl px-4 text-center md:px-8">
          <h2 className="mb-5 text-3xl font-bold md:text-5xl">Ready to Pick the Right Product Path?</h2>
          <p className="mb-9 text-lg text-primary-foreground/85">Share your operations setup and we will recommend the fastest route to measurable improvement.</p>
          <div className="flex flex-col justify-center gap-4 sm:flex-row">
            <Button asChild size="lg" className="h-14 px-8 bg-secondary text-primary hover:bg-secondary/90 font-semibold" id="saas-final-book-demo" data-cta="book-demo">
              <a href="#saas-demo-form">Book SaaS Strategy Session</a>
            </Button>
            <Button asChild size="lg" variant="outline" className="h-14 px-8 border-white/40 text-white hover:bg-white/10 hover:text-white font-semibold" id="saas-final-whatsapp" data-cta="whatsapp-contact">
              <a href={getWhatsAppLink("Hi Milespace, I need help choosing between Milespace ChamaDesk and Milespace POS.")} target="_blank" rel="noopener noreferrer">
                Talk on WhatsApp
              </a>
            </Button>
          </div>
        </div>
      </section>

      <DemoBookingSection
        context="saas"
        title="Book a Milespace SaaS Strategy Session"
        description="Tell us your business model, current bottlenecks, and the result you need in the next 60 days."
        submitLabel="Get My SaaS Recommendation"
        primarySelectLabel="What product path are you considering? *"
        primarySelectPlaceholder="Select product path"
        primarySelectOptions={["Milespace ChamaDesk", "Milespace POS", "Both Products", "Need Guidance"]}
        secondarySelectLabel="Most urgent challenge *"
        secondarySelectPlaceholder="Select urgent challenge"
        secondarySelectOptions={["Weak records and accountability", "Slow checkout and stock issues", "Manual workflow overload", "Lack of reporting visibility", "Scaling pain"]}
        organizationLabel="Business / Group Name *"
        teamLabel="Current team or member size *"
        messageLabel="What should improve first? *"
      />
    </div>
  );
}
