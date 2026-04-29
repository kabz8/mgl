import { Link } from "wouter";
import { motion } from "framer-motion";
import { ArrowRight, CheckCircle2, ShieldCheck } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { getWhatsAppLink } from "@/lib/whatsapp";
import { usePageMetadata } from "@/hooks/usePageMetadata";
import { DemoBookingSection } from "@/components/saas/DemoBookingSection";

const features = [
  "Member registration and profile management",
  "Secure login with role-based access",
  "Monthly meeting flow and agenda/minutes capture",
  "Contribution and repayment records",
  "Loan request and approval workflows",
  "Share/savings tracking",
  "Treasurer and officials dashboard",
  "Transaction records with date/time traceability",
  "Audit trail for edits and actions",
  "Broadcast notices and announcements",
  "Verification workflows for premium users",
];

const freeTier = [
  "Meeting flow management",
  "Member records",
  "Transaction logging",
  "Contribution records",
  "Basic dashboards",
  "Loan request logging",
  "Reports and history",
  "Group operations digitization",
];

const premiumTier = [
  "Verification workflows",
  "Advanced admin controls",
  "Advanced audit and compliance controls",
  "Enhanced reports",
  "Advanced notifications",
  "Custom branding and customization",
  "Priority support",
  "Future integration readiness",
];

export default function SaaSChamaDesk() {
  usePageMetadata({
    title: "ChamaDesk | Chama & Group Management Software by Milespace",
    description:
      "ChamaDesk helps chamas, SACCO-like groups, and family groups manage meetings, contributions, loans, records, and accountability in one system.",
    path: "/saas/chamadesk",
  });

  return (
    <div className="flex flex-col w-full bg-[radial-gradient(circle_at_top_left,rgba(16,185,129,0.08),transparent_34%),radial-gradient(circle_at_bottom_right,rgba(59,130,246,0.07),transparent_40%)]">
      <section className="relative overflow-hidden bg-primary text-primary-foreground py-20 md:py-28">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(255,255,255,0.1),transparent_45%)]" />
        <div className="container relative z-10 mx-auto px-4 md:px-8">
          <div className="max-w-4xl">
            <p className="text-sm uppercase tracking-[0.18em] text-secondary font-semibold mb-4">Milespace SaaS - ChamaDesk</p>
            <h1 className="text-4xl md:text-6xl font-bold tracking-tight leading-tight mb-6">
              Run Your Chama Smarter with ChamaDesk
            </h1>
            <p className="text-lg md:text-xl text-primary-foreground/80 max-w-3xl mb-8">
              A digital operating system for chamas, family groups, SACCO-like groups, and community savings teams to manage meetings, contributions, loans, and records in one place.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button asChild size="lg" className="h-14 px-8 bg-secondary text-primary hover:bg-secondary/90 font-semibold" id="chamadesk-book-demo" data-cta="book-demo">
                <a href="#chamadesk-demo-form">Book a Demo</a>
              </Button>
              <Button asChild size="lg" variant="outline" className="h-14 px-8 border-white/40 text-white hover:bg-white/10 hover:text-white font-semibold" id="chamadesk-request-pricing" data-cta="request-pricing">
                <a href={getWhatsAppLink("Hi Milespace, I want pricing details for ChamaDesk.")} target="_blank" rel="noopener noreferrer">
                  Request Pricing / Talk to Us
                </a>
              </Button>
            </div>
            <p className="mt-5 text-sm text-primary-foreground/70">Web-based access, role controls, traceable records, and stronger accountability for officials and members.</p>
          </div>
        </div>
      </section>

      <section className="py-12 bg-transparent">
        <div className="container mx-auto px-4 md:px-8">
          <div className="rounded-2xl border border-border/70 bg-card/80 p-4 md:p-6 shadow-sm">
            <img src="/illustrations/chamadesk.svg" alt="ChamaDesk workflow illustration" className="w-full h-auto rounded-xl" loading="lazy" />
          </div>
        </div>
      </section>

      <section className="py-10 bg-transparent">
        <div className="container mx-auto px-4 md:px-8">
          <div className="grid md:grid-cols-3 gap-4">
            {[
              { title: "Meeting Illustration", visual: "👥🗓️📝" },
              { title: "Contribution Flow", visual: "📲➡️🧾" },
              { title: "Accountability Trail", visual: "🔐📚✅" },
            ].map((item) => (
              <Card key={item.title} className="border-border/70 bg-card/80 backdrop-blur-sm">
                <CardHeader><CardTitle className="text-lg">{item.title}</CardTitle></CardHeader>
                <CardContent><p className="text-2xl tracking-wide">{item.visual}</p></CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 md:px-8">
          <div className="grid lg:grid-cols-2 gap-8">
            <Card className="border-border/70">
              <CardHeader>
                <CardTitle className="text-3xl">What ChamaDesk Solves</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4 text-muted-foreground">
                <p>ChamaDesk helps groups move from fragmented notebooks and chat threads to one structured digital workflow.</p>
                <p>It strengthens transparency, meeting discipline, and traceable records so members and officials always know what happened, when, and by whom.</p>
                <p className="text-foreground font-medium">
                  ChamaDesk does not send, process, or hold actual money. It records workflows, evidence, and accountability data around your group operations.
                </p>
              </CardContent>
            </Card>
            <Card className="border-border/70">
              <CardHeader>
                <CardTitle className="text-3xl">How It Handles Payments</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3 text-muted-foreground">
                <div className="flex gap-3">
                  <ShieldCheck className="h-5 w-5 text-secondary mt-0.5 shrink-0" />
                  <p>Members post payment proof such as M-Pesa, bank, or Unaitas confirmation references.</p>
                </div>
                <div className="flex gap-3">
                  <ShieldCheck className="h-5 w-5 text-secondary mt-0.5 shrink-0" />
                  <p>Verification workflows can be enabled in premium plans for stronger controls.</p>
                </div>
                <div className="flex gap-3">
                  <ShieldCheck className="h-5 w-5 text-secondary mt-0.5 shrink-0" />
                  <p>Cash entries are restricted to authorized officials such as treasurer, with traceable logs.</p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section className="py-20 bg-muted/30 border-y border-border">
        <div className="container mx-auto px-4 md:px-8">
          <div className="max-w-3xl mb-10">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Key Features</h2>
            <p className="text-muted-foreground">Everything needed to professionalize group operations without adding unnecessary complexity.</p>
          </div>
          <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-4">
            {features.map((feature) => (
              <Card key={feature} className="border-border/70">
                <CardContent className="pt-6">
                  <p className="text-sm font-medium text-foreground flex items-start gap-2">
                    <CheckCircle2 className="h-4 w-4 text-secondary mt-0.5 shrink-0" />
                    <span>{feature}</span>
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 md:px-8">
          <div className="grid lg:grid-cols-2 gap-8">
            <Card className="border-border/70">
              <CardHeader>
                <CardTitle className="text-2xl">How It Works</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                {[
                  "Register members and officials with defined roles",
                  "Run monthly meetings digitally with agenda and minutes",
                  "Record contributions, repayments, and key transactions",
                  "Review loans, approvals, and updates with traceability",
                  "Access reports, history, and audit trail when needed",
                ].map((step, i) => (
                  <p key={step} className="text-sm text-foreground">
                    <span className="font-semibold">{i + 1}. </span>
                    {step}
                  </p>
                ))}
              </CardContent>
            </Card>
            <Card className="border-border/70">
              <CardHeader>
                <CardTitle className="text-2xl">Who ChamaDesk Is For</CardTitle>
              </CardHeader>
              <CardContent className="space-y-2 text-sm text-muted-foreground">
                {[
                  "Chamas and investment groups",
                  "Family savings and welfare groups",
                  "SACCO-like member organisations",
                  "Community finance groups",
                  "Officials who need stronger accountability and reporting",
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
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Free vs Premium</h2>
            <p className="text-muted-foreground">Start with core operations in free tier, then unlock stronger controls and compliance workflows as your group grows.</p>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            <Card className="border-border/70">
              <CardHeader>
                <CardTitle className="text-2xl">Free Tier</CardTitle>
                <CardDescription>Digitize group operations at no cost.</CardDescription>
              </CardHeader>
              <CardContent className="space-y-2">
                {freeTier.map((item) => (
                  <p key={item} className="text-sm text-foreground flex items-start gap-2">
                    <CheckCircle2 className="h-4 w-4 text-secondary mt-0.5 shrink-0" />
                    <span>{item}</span>
                  </p>
                ))}
              </CardContent>
            </Card>
            <Card className="border-border/70 bg-primary text-primary-foreground">
              <CardHeader>
                <CardTitle className="text-2xl">Premium</CardTitle>
                <CardDescription className="text-primary-foreground/70">Advanced controls for higher-accountability groups.</CardDescription>
              </CardHeader>
              <CardContent className="space-y-2">
                {premiumTier.map((item) => (
                  <p key={item} className="text-sm text-primary-foreground flex items-start gap-2">
                    <CheckCircle2 className="h-4 w-4 text-secondary mt-0.5 shrink-0" />
                    <span>{item}</span>
                  </p>
                ))}
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 md:px-8">
          <div className="max-w-3xl mx-auto text-center mb-10">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Frequently Asked Questions</h2>
          </div>
          <div className="max-w-4xl mx-auto grid gap-4">
            {[
              { q: "Does ChamaDesk send or hold money?", a: "No. ChamaDesk does not process or hold funds. It manages records, workflows, and accountability." },
              { q: "Can members upload payment confirmation?", a: "Yes. Members can post payment proof references such as M-Pesa, bank, or Unaitas confirmations." },
              { q: "Can officials control who records cash entries?", a: "Yes. Authorized officials like treasurer can be assigned controlled entry permissions." },
              { q: "Is there an audit trail?", a: "Yes. ChamaDesk includes traceable records for key actions and edits." },
              { q: "Is ChamaDesk suitable for family and welfare groups?", a: "Yes. It is designed for chamas, family groups, welfare groups, and SACCO-like structures." },
              { q: "Is there a free version?", a: "Yes. Core meeting and record operations are available in the free tier." },
              { q: "Can it be customized for our group?", a: "Yes. Premium plans can include custom branding and additional controls." },
            ].map((item) => (
              <Card key={item.q} className="border-border/70">
                <CardHeader><CardTitle className="text-lg">{item.q}</CardTitle></CardHeader>
                <CardContent><CardDescription className="text-sm">{item.a}</CardDescription></CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 md:px-8 text-center max-w-3xl">
          <h2 className="text-3xl md:text-5xl font-bold mb-5">Ready to Professionalize Your Group Operations?</h2>
          <p className="text-primary-foreground/80 text-lg mb-9">Book a guided demo and see how ChamaDesk can improve transparency, record keeping, and accountability.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="h-14 px-8 bg-secondary text-primary hover:bg-secondary/90 font-semibold" id="chamadesk-final-book-demo" data-cta="book-demo">
              <a href="#chamadesk-demo-form">Book a Demo</a>
            </Button>
            <Button asChild size="lg" variant="outline" className="h-14 px-8 border-white/40 text-white hover:bg-white/10 hover:text-white font-semibold" id="chamadesk-final-whatsapp" data-cta="whatsapp-contact">
              <a href={getWhatsAppLink("Hi Milespace, I want to discuss ChamaDesk for our group.")} target="_blank" rel="noopener noreferrer">
                Talk to Milespace
              </a>
            </Button>
          </div>
          <p className="mt-6 text-sm text-primary-foreground/70">
            Prefer overview first? <Link href="/saas" className="underline underline-offset-4 hover:text-white">Back to SaaS products</Link>.
          </p>
        </div>
      </section>

      <DemoBookingSection
        context="chamadesk"
        title="Book a ChamaDesk Demo"
        description="Share your group setup and we will tailor a walkthrough around meetings, contributions, loans, and accountability workflows."
        defaultProduct="ChamaDesk"
      />
    </div>
  );
}
