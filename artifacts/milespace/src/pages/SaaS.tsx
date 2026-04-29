import { Link } from "wouter";
import { motion } from "framer-motion";
import { ArrowRight, CheckCircle2, LayoutGrid, ShieldCheck, Sparkles } from "lucide-react";
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
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(255,255,255,0.1),transparent_45%)]" />
        <div className="container relative z-10 mx-auto px-4 md:px-8">
          <div className="max-w-4xl">
            <p className="text-sm uppercase tracking-[0.18em] text-secondary font-semibold mb-4">Milespace SaaS</p>
            <h1 className="text-4xl md:text-6xl font-bold tracking-tight leading-tight mb-6">
              SaaS Products Built for Real Businesses
            </h1>
            <p className="text-lg md:text-xl text-primary-foreground/80 max-w-3xl mb-8">
              Milespace builds software products that solve real operational problems for businesses, groups, and growing organizations - with premium UX and practical functionality.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button asChild size="lg" className="h-14 px-8 bg-secondary text-primary hover:bg-secondary/90 font-semibold" id="saas-explore-chamadesk" data-cta="book-demo">
                <Link href="/saas/chamadesk">Explore ChamaDesk</Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="h-14 px-8 border-white/40 text-white hover:bg-white/10 hover:text-white font-semibold" id="saas-explore-pos" data-cta="book-demo">
                <Link href="/saas/pos">Explore POS</Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="h-14 px-8 border-white/40 text-white hover:bg-white/10 hover:text-white font-semibold" id="saas-book-demo" data-cta="book-demo">
                <a href="#saas-demo-form">Book a Demo</a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 md:px-8">
          <div className="max-w-3xl mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Software Products for Day-to-Day Operations</h2>
            <p className="text-muted-foreground text-lg">
              Our SaaS products are designed to simplify operations, improve visibility, and help teams make better decisions with cleaner records and faster workflows.
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
                    <ul className="space-y-2">
                      {product.highlights.map((item) => (
                        <li key={item} className="text-sm text-foreground flex items-start gap-2">
                          <CheckCircle2 className="h-4 w-4 text-secondary mt-0.5 shrink-0" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                    <div className="flex flex-col sm:flex-row gap-3">
                      <Button asChild className="flex-1 bg-primary hover:bg-primary/90" id={`${product.id}-view-product`} data-cta="request-pricing">
                        <Link href={product.href}>
                          View Product <ArrowRight className="ml-2 h-4 w-4" />
                        </Link>
                      </Button>
                      <Button asChild variant="outline" className="flex-1" id={`${product.id}-book-demo`} data-cta="book-demo">
                        <a href="#saas-demo-form">Book Demo</a>
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-muted/30 border-y border-border">
        <div className="container mx-auto px-4 md:px-8">
          <div className="max-w-3xl mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Why Our SaaS Products</h2>
            <p className="text-muted-foreground">
              Our products are built by a software engineering team focused on practical value, not marketing hype.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { icon: LayoutGrid, title: "Practical Product Design", text: "Built around real operations, workflows, and everyday usage patterns." },
              { icon: ShieldCheck, title: "Trust and Traceability", text: "Strong emphasis on visibility, records, accountability, and role-based control." },
              { icon: Sparkles, title: "Premium UX + Clear Value", text: "Modern, clean interface design with business impact that users can feel quickly." },
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
                    <CardDescription className="text-sm leading-relaxed">{item.text}</CardDescription>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      <section className="py-20 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 md:px-8 text-center max-w-3xl">
          <h2 className="text-3xl md:text-5xl font-bold mb-5">Ready to See the Products in Action?</h2>
          <p className="text-primary-foreground/80 text-lg mb-9">
            Book a guided demo and we will walk you through the workflows, controls, and business outcomes relevant to your team.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="h-14 px-8 bg-secondary text-primary hover:bg-secondary/90 font-semibold" id="saas-final-book-demo" data-cta="book-demo">
              <a href="#saas-demo-form">Book a Demo</a>
            </Button>
            <Button asChild size="lg" variant="outline" className="h-14 px-8 border-white/40 text-white hover:bg-white/10 hover:text-white font-semibold" id="saas-final-whatsapp" data-cta="whatsapp-contact">
              <a href={getWhatsAppLink("Hi Milespace, I want to learn more about your SaaS products.")} target="_blank" rel="noopener noreferrer">
                Talk to Us on WhatsApp
              </a>
            </Button>
          </div>
        </div>
      </section>

      <DemoBookingSection context="saas" title="Book a SaaS Product Demo" description="Request a live walkthrough for ChamaDesk or POS and we will tailor the demo to your setup." />
    </div>
  );
}
