import { Link } from "wouter";
import { motion } from "framer-motion";
import { ArrowRight, BarChart3, Handshake, ShieldCheck, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { getWhatsAppLink } from "@/lib/whatsapp";
import { usePageMetadata } from "@/hooks/usePageMetadata";
import { DemoBookingSection } from "@/components/saas/DemoBookingSection";

const products = [
  {
    id: "chamadesk",
    name: "ChamaDesk",
    summary: "A digital operating system for chamas, family groups, and SACCO-like member organisations.",
    highlights: [
      "Meeting flow and member management",
      "Contribution and loan workflow tracking",
      "Transaction history with date/time traceability",
      "Free tier with optional premium controls",
    ],
    href: "/saas/chamadesk",
  },
  {
    id: "pos",
    name: "POS",
    summary: "A clean, modern point-of-sale system for cafés, pastry shops, stores, and growing retail teams.",
    highlights: [
      "Fast checkout and daily sales summaries",
      "Stock movement and low stock visibility",
      "Cashier/staff performance tracking",
      "Expense tracking and business insights dashboard",
    ],
    href: "/saas/pos",
  },
];

export default function SaaS() {
  usePageMetadata({
    title: "Milespace SaaS Products | ChamaDesk & POS",
    description:
      "Explore Milespace SaaS products including ChamaDesk for chamas and group management, and POS for modern business operations.",
    path: "/saas",
  });

  return (
    <div className="flex flex-col w-full bg-background">
      <section className="relative overflow-hidden bg-primary text-primary-foreground py-20 md:py-28">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(255,255,255,0.12),transparent_45%)]" />
        <div className="container relative z-10 mx-auto px-4 md:px-8">
          <div className="grid lg:grid-cols-[1.1fr_0.9fr] gap-8 items-center">
            <div>
              <p className="text-sm uppercase tracking-[0.18em] text-secondary font-semibold mb-4">Milespace SaaS</p>
              <h1 className="text-4xl md:text-6xl font-bold tracking-tight leading-tight mb-6">
                Product Software That Feels Premium and Runs the Business
              </h1>
              <p className="text-lg md:text-xl text-primary-foreground/80 max-w-3xl mb-8">
                We are not shipping templates. Every SaaS product is built around a specific operational problem, with the UX quality and reliability needed for real daily usage.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button asChild size="lg" className="h-14 px-8 bg-secondary text-primary hover:bg-secondary/90 font-semibold" id="saas-explore-chamadesk" data-cta="book-demo">
                  <Link href="/saas/chamadesk">Explore ChamaDesk</Link>
                </Button>
                <Button asChild size="lg" variant="outline" className="h-14 px-8 border-white/40 text-white hover:bg-white/10 hover:text-white font-semibold" id="saas-explore-pos" data-cta="book-demo">
                  <Link href="/saas/pos">Explore POS</Link>
                </Button>
              </div>
            </div>
            <Card className="border-white/20 bg-white/10 text-white backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="text-2xl">What We Optimize For</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3 text-sm">
                {[
                  "Fast onboarding and low learning curve",
                  "Operational traceability and role clarity",
                  "Performance dashboards leaders can trust",
                  "Continuous improvements after launch",
                ].map((line) => (
                  <p key={line} className="text-primary-foreground/90">
                    {line}
                  </p>
                ))}
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section className="py-16 bg-background">
        <div className="container mx-auto px-4 md:px-8">
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { icon: Zap, title: "Speed to Value", text: "Launch with the workflows that matter first, then layer advanced capability." },
              { icon: ShieldCheck, title: "Trust by Design", text: "Permissions, logs, and accountability are built in from the foundation." },
              { icon: BarChart3, title: "Decision Visibility", text: "Dashboards are designed for managers, not just for technical teams." },
            ].map((item) => {
              const Icon = item.icon;
              return (
                <Card key={item.title} className="border-border/70">
                  <CardHeader>
                    <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-primary/5">
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
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Our SaaS Product Line</h2>
            <p className="text-muted-foreground text-lg">
              Two focused products, two different markets, one shared standard: software that makes operations cleaner and decisions faster.
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            {products.map((product, index) => (
              <motion.div key={product.id} initial={{ opacity: 0, y: 14 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.35, delay: index * 0.08 }}>
                <Card className="h-full border-border/70 hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <CardTitle className="text-2xl">{product.name}</CardTitle>
                    <CardDescription className="text-sm leading-relaxed">{product.summary}</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-5">
                    <ul className="space-y-2 text-sm">
                      {product.highlights.map((item) => (
                        <li key={item}>{item}</li>
                      ))}
                    </ul>
                    <div className="flex flex-col sm:flex-row gap-3">
                      <Button asChild className="flex-1 bg-primary hover:bg-primary/90" id={`${product.id}-view-product`} data-cta="request-pricing">
                        <Link href={product.href}>
                          View Product <ArrowRight className="ml-2 h-4 w-4" />
                        </Link>
                      </Button>
                      <Button asChild variant="outline" className="flex-1" id={`${product.id}-book-demo`} data-cta="book-demo">
                        <a href="#saas-demo-form">Get Live Walkthrough</a>
                      </Button>
                    </div>
                  </CardContent>
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
              <CardHeader>
                <CardTitle className="text-2xl">Why Teams Choose Milespace SaaS</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4 text-muted-foreground">
                <p>Most software looks good in demos and breaks in real operations. We design around real users, real process friction, and daily constraints.</p>
                <p>That means faster adoption, lower support burden, and clearer outcomes for the business owner or operations lead.</p>
                <p className="text-foreground font-medium">You get a product partner that thinks in workflows, not feature checklists.</p>
              </CardContent>
            </Card>
            <Card className="border-border/70">
              <CardHeader>
                <CardTitle className="text-2xl">Engagement Model</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3 text-sm text-muted-foreground">
                <p>1. Discovery call around your current operations.</p>
                <p>2. Product fit recommendation (ChamaDesk, POS, or both).</p>
                <p>3. Guided onboarding plan and implementation scope.</p>
                <p>4. Training and launch support with improvement loop.</p>
                <p>5. Ongoing enhancements based on business usage data.</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section className="py-20 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 md:px-8 text-center max-w-3xl">
          <h2 className="text-3xl md:text-5xl font-bold mb-5">Want Software That Your Team Actually Uses?</h2>
          <p className="text-primary-foreground/80 text-lg mb-9">
            Tell us what is slowing your operations down and we will show you the right product path.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="h-14 px-8 bg-secondary text-primary hover:bg-secondary/90 font-semibold" id="saas-final-book-demo" data-cta="book-demo">
              <a href="#saas-demo-form">Book Strategy Session</a>
            </Button>
            <Button asChild size="lg" variant="outline" className="h-14 px-8 border-white/40 text-white hover:bg-white/10 hover:text-white font-semibold" id="saas-final-whatsapp" data-cta="whatsapp-contact">
              <a href={getWhatsAppLink("Hi Milespace, I want to discuss which SaaS product fits my operation.")} target="_blank" rel="noopener noreferrer">
                Chat on WhatsApp
              </a>
            </Button>
          </div>
        </div>
      </section>

      <section className="py-14 bg-muted/30 border-y border-border">
        <div className="container mx-auto px-4 md:px-8">
          <div className="grid md:grid-cols-2 gap-6">
            <Card className="border-border/70">
              <CardHeader>
                <CardTitle className="text-xl flex items-center gap-2">
                  <Handshake className="h-5 w-5 text-secondary" />
                  ChamaDesk
                </CardTitle>
                <CardDescription>For chamas, SACCO-like groups, and structured member organizations.</CardDescription>
              </CardHeader>
              <CardContent>
                <Button asChild variant="outline">
                  <Link href="/saas/chamadesk">Go to ChamaDesk</Link>
                </Button>
              </CardContent>
            </Card>
            <Card className="border-border/70">
              <CardHeader>
                <CardTitle className="text-xl flex items-center gap-2">
                  <BarChart3 className="h-5 w-5 text-secondary" />
                  POS
                </CardTitle>
                <CardDescription>For cafes, retail teams, and owner-led businesses needing clean daily control.</CardDescription>
              </CardHeader>
              <CardContent>
                <Button asChild variant="outline">
                  <Link href="/saas/pos">Go to POS</Link>
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <DemoBookingSection
        context="saas"
        title="Book a SaaS Strategy Session"
        description="Share your business model and current workflow issues. We will recommend the best product path and onboarding plan."
        submitLabel="Get Product Recommendation"
        primarySelectLabel="What are you evaluating? *"
        primarySelectPlaceholder="Select product interest"
        primarySelectOptions={["ChamaDesk", "POS", "Both Products", "Not Sure Yet"]}
        secondarySelectLabel="Primary Challenge *"
        secondarySelectPlaceholder="Select challenge"
        secondarySelectOptions={["Poor record visibility", "Manual operations overload", "Stock & sales control", "Member accountability", "Need system upgrade"]}
        organizationLabel="Business / Group Name *"
        organizationPlaceholder="Example: Haraka Chama or Bright Retail"
        teamLabel="Current Team / Member Size *"
        teamPlaceholder="Example: 6 staff, 45 members"
        messageLabel="What should this software fix first? *"
        messagePlaceholder="Describe your current process and the one outcome you need in the first 60 days."
      />
    </div>
  );
}
