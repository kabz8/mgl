import { Link } from "wouter";
import { motion } from "framer-motion";
import { CheckCircle2, Fingerprint, Scale, ShieldCheck } from "lucide-react";
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
    title: "Milespace ChamaDesk | Chama & Group Management Software",
    description:
      "Milespace ChamaDesk helps chamas and SACCO-like groups run meetings, contributions, loans, and governance with clear traceability.",
    path: "/saas/chamadesk",
  });

  return (
    <div className="flex w-full flex-col bg-background">
      <section className="relative overflow-hidden bg-primary py-20 text-primary-foreground md:py-28">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(255,255,255,0.12),transparent_38%),radial-gradient(circle_at_bottom_right,rgba(16,185,129,0.25),transparent_40%)]" />
        <div className="container relative z-10 mx-auto px-4 md:px-8">
          <div className="max-w-4xl">
            <p className="text-sm uppercase tracking-[0.18em] text-secondary font-semibold mb-4">Milespace SaaS - Milespace ChamaDesk</p>
            <h1 className="text-4xl md:text-6xl font-bold tracking-tight leading-tight mb-6">
              Governance Software for Serious Chama Operations
            </h1>
            <p className="text-lg md:text-xl text-primary-foreground/80 max-w-3xl mb-8">
              Milespace ChamaDesk helps group leaders replace scattered records, unclear approvals, and trust gaps with one structured operating workflow.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button asChild size="lg" className="h-14 px-8 bg-secondary text-primary hover:bg-secondary/90 font-semibold" id="chamadesk-book-demo" data-cta="book-demo">
                <a href="#chamadesk-demo-form">Book Governance Demo</a>
              </Button>
              <Button asChild size="lg" variant="outline" className="h-14 px-8 border-white/40 text-white hover:bg-white/10 hover:text-white font-semibold" id="chamadesk-request-pricing" data-cta="request-pricing">
                <a href={getWhatsAppLink("Hi Milespace, I want pricing details for Milespace ChamaDesk.")} target="_blank" rel="noopener noreferrer">
                  Request Pricing / Talk to Us
                </a>
              </Button>
            </div>
            <p className="mt-5 text-sm text-primary-foreground/70">Web-based access, role controls, traceable records, and stronger accountability for officials and members.</p>
          </div>
        </div>
      </section>

      <section className="border-b border-border py-14">
        <div className="container mx-auto px-4 md:px-8">
          <div className="grid md:grid-cols-3 gap-4">
            {[
              { title: "Member Governance", visual: "👥🏛️🗳️" },
              { title: "Contribution Discipline", visual: "🧾💰✅" },
              { title: "Dispute Prevention", visual: "🔐📅📘" },
            ].map((item) => (
              <Card key={item.title} className="border-border/70">
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
                <CardTitle className="text-3xl">The Real Problem It Solves</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4 text-muted-foreground">
                <p>Most chamas do not fail because members are unwilling. They fail because records are inconsistent and decisions are impossible to verify.</p>
                <p>Milespace ChamaDesk creates one source of truth for meetings, contributions, approvals, and follow-up actions.</p>
                <p className="text-foreground font-medium">
                  Milespace ChamaDesk does not send, process, or hold actual money. It records workflows, evidence, and accountability data around your group operations.
                </p>
              </CardContent>
            </Card>
            <Card className="border-border/70">
              <CardHeader>
                <CardTitle className="text-3xl">Control Layers</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3 text-muted-foreground">
                <div className="flex gap-3">
                  <Fingerprint className="h-5 w-5 text-secondary mt-0.5 shrink-0" />
                  <p>Identity-linked entries help track who performed each action and when.</p>
                </div>
                <div className="flex gap-3">
                  <ShieldCheck className="h-5 w-5 text-secondary mt-0.5 shrink-0" />
                  <p>Verification workflow prevents unapproved records from being treated as final.</p>
                </div>
                <div className="flex gap-3">
                  <Scale className="h-5 w-5 text-secondary mt-0.5 shrink-0" />
                  <p>Role permissions ensure only authorized officials manage sensitive financial steps.</p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section className="py-20 bg-muted/30 border-y border-border">
        <div className="container mx-auto px-4 md:px-8">
          <div className="max-w-3xl mb-10">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Governance Feature Stack</h2>
            <p className="text-muted-foreground">Every feature exists to strengthen trust, structure, and continuity.</p>
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
              <CardHeader><CardTitle className="text-2xl">Operational Flow</CardTitle></CardHeader>
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
              <CardHeader><CardTitle className="text-2xl">Where Milespace ChamaDesk Fits Best</CardTitle></CardHeader>
              <CardContent className="space-y-2 text-sm text-muted-foreground">
                {[
                  "Structured chamas with recurring monthly obligations",
                  "Family or welfare groups needing transparent contribution records",
                  "SACCO-like teams needing role-based controls and history",
                  "Groups recovering from reconciliation and trust issues",
                  "Treasurers and officials under pressure for clean reporting",
                ].map((item) => (
                  <p key={item}>{item}</p>
                ))}
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 md:px-8">
          <div className="grid md:grid-cols-3 gap-6">
            {[
              ["Cycle one impact", "Meeting discipline and follow-up visibility improve in the first monthly cycle."],
              ["Cycle two impact", "Contribution and repayment reporting becomes reliable and faster to reconcile."],
              ["Cycle three impact", "Leadership gains stronger confidence in decisions backed by traceable records."],
            ].map(([title, text]) => (
              <Card key={title} className="border-border/70">
                <CardHeader><CardTitle className="text-xl">{title}</CardTitle></CardHeader>
                <CardContent><CardDescription>{text}</CardDescription></CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-muted/30 border-y border-border">
        <div className="container mx-auto px-4 md:px-8">
          <div className="max-w-3xl mb-10">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Free vs Premium</h2>
            <p className="text-muted-foreground">Start with structured basics, then unlock advanced governance controls as your group matures.</p>
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
          <div className="max-w-3xl mb-10">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Decision Questions from Group Leaders</h2>
          </div>
          <div className="grid md:grid-cols-2 gap-4">
            {[
              { q: "Does Milespace ChamaDesk send or hold money?", a: "No. Milespace ChamaDesk does not process or hold funds. It manages records, workflows, and accountability." },
              { q: "Can members upload payment confirmation?", a: "Yes. Members can post payment proof references such as M-Pesa, bank, or Unaitas confirmations." },
              { q: "Can officials control who records cash entries?", a: "Yes. Authorized officials like treasurer can be assigned controlled entry permissions." },
              { q: "Is there an audit trail?", a: "Yes. Milespace ChamaDesk includes traceable records for key actions and edits." },
              { q: "Is Milespace ChamaDesk suitable for family and welfare groups?", a: "Yes. It is designed for chamas, family groups, welfare groups, and SACCO-like structures." },
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
          <h2 className="text-3xl md:text-5xl font-bold mb-5">Ready to Move Your Group from Informal to Structured?</h2>
          <p className="text-primary-foreground/80 text-lg mb-9">Book a guided session and see how Milespace ChamaDesk fits your governance model.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="h-14 px-8 bg-secondary text-primary hover:bg-secondary/90 font-semibold" id="chamadesk-final-book-demo" data-cta="book-demo">
              <a href="#chamadesk-demo-form">Book Governance Session</a>
            </Button>
            <Button asChild size="lg" variant="outline" className="h-14 px-8 border-white/40 text-white hover:bg-white/10 hover:text-white font-semibold" id="chamadesk-final-whatsapp" data-cta="whatsapp-contact">
              <a href={getWhatsAppLink("Hi Milespace, I want to discuss Milespace ChamaDesk for our group.")} target="_blank" rel="noopener noreferrer">
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
        title="Book a Milespace ChamaDesk Governance Session"
        description="Tell us your group setup, current trust gaps, and reporting pain points. We will tailor the walkthrough to your governance needs."
        defaultProduct="Milespace ChamaDesk"
        submitLabel="Get Milespace ChamaDesk Walkthrough"
        primarySelectLabel="What is your main Chama focus? *"
        primarySelectPlaceholder="Select focus"
        primarySelectOptions={["Contribution tracking", "Loan workflow", "Meeting governance", "Member records + transparency", "Full setup"]}
        secondarySelectLabel="Group Category *"
        secondarySelectPlaceholder="Select group category"
        secondarySelectOptions={["Investment chama", "Family welfare group", "SACCO-like group", "Community savings group", "Other"]}
        organizationLabel="Group Name *"
        organizationPlaceholder="Example: Umoja Growth Chama"
        teamLabel="Number of members / officials *"
        teamPlaceholder="Example: 22 members, 4 officials"
        messageLabel="Where is your group losing accountability today? *"
        messagePlaceholder="Share the biggest reporting or contribution pain point your officials face."
      />
    </div>
  );
}
