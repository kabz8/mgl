import { Link } from "wouter";
import { motion } from "framer-motion";
import {
  BellRing,
  CheckCircle2,
  ClipboardCheck,
  Clock3,
  FileCheck2,
  FileText,
  Fingerprint,
  HandCoins,
  LayoutDashboard,
  Megaphone,
  ShieldCheck,
  Users,
  WalletCards,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { getWhatsAppLink } from "@/lib/whatsapp";
import { usePageMetadata } from "@/hooks/usePageMetadata";
import { DemoBookingSection } from "@/components/saas/DemoBookingSection";

const featureCards = [
  { icon: Users, title: "Member Registration & Profiles", description: "Capture complete member records and profile history for cleaner governance." },
  { icon: LayoutDashboard, title: "Role-Based Dashboards", description: "Give members and officials the exact visibility they need by role." },
  { icon: Fingerprint, title: "Multi-Role Access Under One Login", description: "One identity can switch between member and official views without duplicate accounts." },
  { icon: FileCheck2, title: "Account Details & KYC Tracking", description: "Track member account details and compliance checkpoints in one place." },
  { icon: Clock3, title: "Meeting Creation & Flow Management", description: "Run meeting cycles with structure from opening remarks to close." },
  { icon: ClipboardCheck, title: "Agenda, Attendance & Minutes", description: "Set agendas, record attendance, and publish minutes for full member visibility." },
  { icon: HandCoins, title: "Contributions & Payment Proof", description: "Log entries with references and proof uploads for better financial traceability." },
  { icon: ShieldCheck, title: "Verification & Cash Entry Controls", description: "Apply review workflows and permission checks before entries are treated as final." },
  { icon: WalletCards, title: "Loans, Guarantees & Repayments", description: "Handle requests, guarantor responses, approvals, and repayment status with clarity." },
  { icon: BellRing, title: "Notices & Notification Center", description: "Keep everyone aligned with announcements, reminders, and in-app alerts." },
  { icon: FileText, title: "Reports, Statements & Audit Trails", description: "Generate historical visibility and accountability records for leaders and members." },
  { icon: Megaphone, title: "Free Tier + Premium Upgrade Path", description: "Start free for core operations, then unlock advanced controls as your group matures." },
];

export default function SaaSChamaDesk() {
  usePageMetadata({
    title: "Milespace ChamaDesk | Digital Chama & Group Management Software",
    description:
      "Milespace ChamaDesk helps chamas, family SACCOs, welfare groups, and community finance groups manage meetings, contributions, loans, guarantees, records, and accountability in one system.",
    path: "/saas/milespace-chamadesk",
  });

  return (
    <div className="flex w-full flex-col bg-background">
      <section className="relative overflow-hidden bg-primary py-20 text-primary-foreground md:py-28">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(255,255,255,0.18),transparent_38%),radial-gradient(circle_at_bottom_right,rgba(234,179,8,0.22),transparent_36%)]" />
        <div className="container relative z-10 mx-auto px-4 md:px-8">
          <div className="grid items-center gap-10 lg:grid-cols-[1.1fr_0.9fr]">
            <div>
              <p className="mb-4 text-sm font-semibold uppercase tracking-[0.18em] text-secondary">Milespace SaaS Product - Digital Group Management</p>
              <h1 className="mb-6 text-4xl font-bold leading-tight tracking-tight md:text-6xl">
                Run Your Group Smarter with <span className="text-secondary">Milespace ChamaDesk</span>
              </h1>
              <p className="mb-8 max-w-3xl text-lg text-primary-foreground/85 md:text-xl">
                A digital operating system for chamas, family SACCOs, welfare groups, and community finance teams to manage meetings, contributions, loans, approvals, notices, and accountability in one structured workflow.
              </p>
              <div className="flex flex-col gap-4 sm:flex-row">
                <Button asChild size="lg" className="h-14 bg-secondary px-8 font-semibold text-primary hover:bg-secondary/90" id="chamadesk-hero-demo-button" data-cta="book-demo">
                  <a href="#chamadesk-demo-form">Book a Demo</a>
                </Button>
                <Button asChild size="lg" variant="outline" className="h-14 border-white/40 px-8 font-semibold text-white hover:bg-white/10 hover:text-white" id="chamadesk-hero-pricing-button" data-cta="request-pricing">
                  <a href="#chamadesk-demo-form">Request Pricing</a>
                </Button>
                <Button asChild size="lg" variant="ghost" className="h-14 px-8 font-semibold text-white hover:bg-white/10" id="chamadesk-hero-contact-button" data-cta="whatsapp-contact">
                  <a href={getWhatsAppLink("Hi Milespace, we want to discuss Milespace ChamaDesk for our group operations.")} target="_blank" rel="noopener noreferrer">
                    Talk to Milespace
                  </a>
                </Button>
              </div>
              <div className="mt-7 grid gap-2 text-sm text-primary-foreground/80 md:grid-cols-2">
                {["Structured meeting flows", "Traceable records and approvals", "Role-based dashboards", "Designed for real group operations"].map((item) => (
                  <p key={item} className="flex items-center gap-2">
                    <CheckCircle2 className="h-4 w-4 text-secondary" />
                    {item}
                  </p>
                ))}
              </div>
            </div>
            <Card className="border-white/15 bg-white/10 text-primary-foreground backdrop-blur">
              <CardHeader>
                <CardTitle className="text-2xl">Milespace ChamaDesk Snapshot</CardTitle>
                <CardDescription className="text-primary-foreground/70">A single source of truth for operations, not a money-processing app.</CardDescription>
              </CardHeader>
              <CardContent className="space-y-3 text-sm">
                <p>Meetings, agendas, attendance, and minutes in one timeline.</p>
                <p>Contributions, payment proof, loan requests, and guarantor workflows with accountability checks.</p>
                <p>Clear dashboards for members, treasurers, secretaries, chairpersons, and admins.</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section className="border-b border-border py-20">
        <div className="container mx-auto px-4 md:px-8">
          <div className="mb-8 max-w-3xl">
            <h2 className="mb-4 text-3xl font-bold md:text-4xl">Manual Group Operations Create Costly Confusion</h2>
            <p className="text-muted-foreground">Lost records, unclear contributions, missing minutes, and weak follow-up create avoidable conflict and low trust.</p>
          </div>
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {[
              "Lost records and unverifiable cash entries",
              "Confusion during meetings and missing agenda continuity",
              "Poor follow-up on loans, guarantees, and repayments",
              "Members feeling out of the loop after decisions",
              "Weak accountability across officials and committees",
              "Scattered WhatsApp threads and spreadsheet versions",
            ].map((problem) => (
              <Card key={problem} className="border-border/70">
                <CardContent className="pt-6 text-sm text-foreground">{problem}</CardContent>
              </Card>
            ))}
          </div>
          <p className="mt-8 text-base font-medium text-foreground">
            Milespace ChamaDesk solves this operational chaos with structure, traceability, and disciplined workflows.
          </p>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-4 md:px-8">
          <div className="grid gap-6 lg:grid-cols-3">
            <Card className="border-border/70 lg:col-span-2">
              <CardHeader>
                <CardTitle className="text-3xl">What Is Milespace ChamaDesk?</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4 text-muted-foreground">
                <p>
                  Milespace ChamaDesk is a digital operating system for chamas, family groups, welfare groups, table banking groups, SACCO-like structures, and community finance organizations that need structured daily operations.
                </p>
                <p>
                  It helps you manage member records, meetings, agendas, minutes, contributions, payment proof, loan requests, guarantor workflows, official dashboards, notices, reports, and full auditability.
                </p>
                <p className="font-medium text-foreground">
                  Milespace ChamaDesk does not directly hold or process group funds. It is a management and accountability platform for records, verification workflows, and controlled operational tracking.
                </p>
              </CardContent>
            </Card>
            <Card className="border-border/70 bg-muted/30">
              <CardHeader>
                <CardTitle>Who It Is For</CardTitle>
              </CardHeader>
              <CardContent className="space-y-2 text-sm text-foreground">
                <p>Chamas and investment groups</p>
                <p>Family welfare and table banking groups</p>
                <p>Community and church savings teams</p>
                <p>Professional associations with pooled funds</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section className="border-y border-border bg-muted/30 py-20">
        <div className="container mx-auto px-4 md:px-8">
          <div className="mb-10 max-w-3xl">
            <h2 className="mb-4 text-3xl font-bold md:text-4xl">Who Milespace ChamaDesk Is Built For</h2>
          </div>
          <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
            {[
              ["Chamas", "Run structured meetings, contributions, and loan decisions with less confusion."],
              ["Family Investment Groups", "Keep family-led pooled funds transparent with clean reporting."],
              ["Welfare & Community Groups", "Track support contributions and disbursement approvals responsibly."],
              ["Table Banking & SACCO-like Teams", "Manage recurring finance cycles with role-controlled processes."],
              ["Church / Faith Finance Groups", "Improve discipline for offerings, welfare initiatives, and records."],
              ["Professional Associations", "Coordinate pooled funds and approvals across accountable leadership."],
              ["Community Savings Groups", "Build trust with visible history and audit-friendly entries."],
              ["Growing Multi-Chapter Groups", "Scale operations without losing continuity across meetings and officials."],
            ].map(([title, text]) => (
              <Card key={title} className="border-border/70">
                <CardHeader>
                  <CardTitle className="text-lg">{title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription>{text}</CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-4 md:px-8">
          <div className="mb-10 max-w-3xl">
            <h2 className="mb-4 text-3xl font-bold md:text-4xl">Key Features</h2>
            <p className="text-muted-foreground">Premium, practical capabilities for real group governance and continuity.</p>
          </div>
          <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
            {featureCards.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <motion.div key={feature.title} initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.35, delay: index * 0.03 }}>
                  <Card className="h-full border-border/70 shadow-sm transition-shadow hover:shadow-lg">
                    <CardHeader>
                      <Icon className="h-5 w-5 text-secondary" />
                      <CardTitle className="text-xl">{feature.title}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <CardDescription>{feature.description}</CardDescription>
                    </CardContent>
                  </Card>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="border-y border-border bg-primary py-20 text-primary-foreground">
        <div className="container mx-auto px-4 md:px-8">
          <div className="mb-9 max-w-4xl">
            <h2 className="mb-4 text-3xl font-bold md:text-4xl">Why Choose Milespace ChamaDesk Instead of Spreadsheets + WhatsApp?</h2>
          </div>
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {[
              "Centralized one-source-of-truth operations",
              "Official workflows with role-aware access",
              "Clear visibility for members and officials",
              "Traceable logs for stronger accountability",
              "Easier meeting continuity and handover",
              "Professional image for structured groups",
              "Scalable setup as membership grows",
              "Built by Milespace Group with product-grade thinking",
            ].map((item) => (
              <Card key={item} className="border-white/15 bg-white/10 text-primary-foreground">
                <CardContent className="pt-6 text-sm">{item}</CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-4 md:px-8">
          <div className="mb-10 max-w-3xl">
            <h2 className="mb-4 text-3xl font-bold md:text-4xl">How It Works</h2>
          </div>
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {[
              "Register the group and members",
              "Assign officials and governance roles",
              "Run meetings digitally with agendas",
              "Record contributions and payment proof",
              "Manage loans, guarantees, and repayments",
              "Publish minutes, notices, and reports",
            ].map((step, index) => (
              <Card key={step} className="border-border/70">
                <CardHeader>
                  <CardTitle className="text-base">{`${index + 1}. ${step}`}</CardTitle>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="border-y border-border bg-muted/30 py-20">
        <div className="container mx-auto px-4 md:px-8">
          <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr]">
            <div>
              <h2 className="mb-4 text-3xl font-bold md:text-4xl">One Login. Multiple Dashboards. One Identity.</h2>
              <p className="mb-5 text-muted-foreground">
                A member who is also an official does not need separate accounts. Milespace ChamaDesk supports clean dashboard switching under one identity for better accountability and adoption.
              </p>
              <div className="grid gap-3 text-sm text-foreground sm:grid-cols-2">
                {["Member dashboard", "Treasurer dashboard", "Secretary dashboard", "Chairperson dashboard", "Group admin dashboard"].map((item) => (
                  <p key={item} className="rounded-lg border border-border bg-background px-4 py-3">{item}</p>
                ))}
              </div>
            </div>
            <Card className="border-border/70">
              <CardHeader>
                <CardTitle>Why It Matters</CardTitle>
              </CardHeader>
              <CardContent className="space-y-2 text-sm text-muted-foreground">
                <p>Less confusion and easier onboarding for officials.</p>
                <p>Consistent accountability tied to one user identity.</p>
                <p>Faster adoption for groups where leaders are also members.</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-4 md:px-8">
          <div className="mb-8 max-w-4xl">
            <h2 className="mb-4 text-3xl font-bold md:text-4xl">Meeting Flow Designed for Real Group Sessions</h2>
          </div>
          <div className="grid gap-3 md:grid-cols-2 lg:grid-cols-3">
            {[
              "Create meeting and schedule member notifications",
              "Setup agenda and confirm attendance",
              "Capture prayer/opening remarks and prior minutes review",
              "Run contributions and repayment segments",
              "Handle new loan requests and guarantee discussions",
              "Capture expenses, investment updates, and action items",
              "Run reconciliation and close meeting with published minutes",
            ].map((item) => (
              <Card key={item} className="border-border/70">
                <CardContent className="pt-6 text-sm">{item}</CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="border-y border-border bg-muted/30 py-20">
        <div className="container mx-auto px-4 md:px-8">
          <div className="grid gap-6 lg:grid-cols-2">
            <Card className="border-border/70">
              <CardHeader>
                <CardTitle className="text-3xl">Loans & Guarantor Workflow</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3 text-muted-foreground">
                <p>Handle loan requests, official review, approvals, guarantor decisions, and repayment tracking in one transparent flow.</p>
                <p>Members can request guarantees, and guarantors can accept or decline while the system tracks exposure and status changes.</p>
                <p className="font-medium text-foreground">
                  Example: Member B requests Member A to guarantee a loan amount. Milespace ChamaDesk records the request, response, approval status, and resulting loan timeline for full accountability.
                </p>
              </CardContent>
            </Card>
            <Card className="border-border/70">
              <CardHeader>
                <CardTitle className="text-2xl">Notifications & Visibility</CardTitle>
              </CardHeader>
              <CardContent className="space-y-2 text-sm text-muted-foreground">
                <p>In-app notification center for updates and reminders.</p>
                <p>Meeting reminders, contribution prompts, and payment status visibility.</p>
                <p>Minutes publication and notice announcements for member alignment.</p>
                <p>WhatsApp-ready workflows with integration-friendly notification architecture.</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-4 md:px-8">
          <div className="mb-10 max-w-3xl">
            <h2 className="mb-4 text-3xl font-bold md:text-4xl">Free vs Premium</h2>
          </div>
          <div className="grid gap-6 md:grid-cols-2">
            <Card className="border-border/70">
              <CardHeader>
                <CardTitle className="text-2xl">Free Tier</CardTitle>
                <CardDescription>Digitize your group operations and build discipline from day one.</CardDescription>
              </CardHeader>
              <CardContent className="space-y-2">
                {[
                  "Member records and profiles",
                  "Meeting flow management",
                  "Contribution logging",
                  "Loan request logging",
                  "Notices and announcements",
                  "History and dashboards",
                  "Digitized day-to-day operations",
                ].map((item) => (
                  <p key={item} className="flex items-start gap-2 text-sm text-foreground">
                    <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-secondary" />
                    <span>{item}</span>
                  </p>
                ))}
              </CardContent>
            </Card>
            <Card className="border-border/70 bg-primary text-primary-foreground">
              <CardHeader>
                <CardTitle className="text-2xl">Premium</CardTitle>
                <CardDescription className="text-primary-foreground/75">Advanced control, reporting, and enterprise-grade governance support.</CardDescription>
              </CardHeader>
              <CardContent className="space-y-2">
                {[
                  "Verification workflows",
                  "Advanced audit logs",
                  "Enhanced reports and statements",
                  "Advanced admin controls and permissions",
                  "Advanced notification workflows",
                  "Custom branding and customization",
                  "Advanced exports",
                  "Priority support and future integrations",
                ].map((item) => (
                  <p key={item} className="flex items-start gap-2 text-sm text-primary-foreground">
                    <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-secondary" />
                    <span>{item}</span>
                  </p>
                ))}
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section className="border-y border-border bg-muted/30 py-20">
        <div className="container mx-auto px-4 md:px-8">
          <div className="mb-9 max-w-3xl">
            <h2 className="mb-4 text-3xl font-bold md:text-4xl">Outcomes for Your Group</h2>
          </div>
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {[
              "Improved transparency and member confidence",
              "Stronger accountability across officials",
              "Cleaner financial records and easier reconciliation",
              "Better meeting continuity and fewer operational gaps",
              "Less confusion, conflict, and follow-up delays",
              "Professionalized governance for growth-ready groups",
            ].map((item) => (
              <Card key={item} className="border-border/70">
                <CardContent className="pt-6 text-sm font-medium text-foreground">{item}</CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-4 md:px-8">
          <div className="mb-10 max-w-3xl">
            <h2 className="mb-4 text-3xl font-bold md:text-4xl">Trust and Confidence</h2>
          </div>
          <div className="grid gap-4 md:grid-cols-3">
            {[
              ["Built by Milespace Group", "A software company focused on practical systems for real operational environments."],
              ["Tailored for Group Reality", "Designed for the way chamas, welfare, and community finance groups actually operate."],
              ["Ready for Growth", "Supports customization, onboarding support, and future expansion as your structure matures."],
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

      <section className="border-y border-border bg-muted/30 py-20">
        <div className="container mx-auto px-4 md:px-8">
          <div className="mb-10 max-w-4xl">
            <h2 className="mb-4 text-3xl font-bold md:text-4xl">Frequently Asked Questions</h2>
          </div>
          <div className="grid gap-4 md:grid-cols-2">
            {[
              ["What is Milespace ChamaDesk?", "It is a digital operating system for group operations, including meetings, records, contributions, loans, and governance workflows."],
              ["Does Milespace ChamaDesk hold or process money?", "No. It does not directly hold, send, or process funds. It manages records, approvals, and accountability workflows."],
              ["Can members upload payment proof?", "Yes. Members can submit references and payment proof entries for official review and verification."],
              ["Can one user be both a member and an official?", "Yes. One login can switch between member, treasurer, secretary, chairperson, or admin views where assigned."],
              ["Can officials manage meeting flow digitally?", "Yes. Officials can run agendas, attendance, minutes, and follow-up action tracking digitally."],
              ["Can members access minutes after publication?", "Yes. Published minutes can be shared with members for transparency and continuity."],
              ["Is there a free version?", "Yes. The free tier supports core digitized operations for meetings, records, and daily tracking."],
              ["What does premium include?", "Premium includes verification workflows, advanced audit logs, enhanced reporting, advanced controls, and priority support."],
              ["Can Milespace ChamaDesk be customized?", "Yes. Premium rollout can include customization and group-specific configuration."],
              ["Does it support loans and guarantor workflows?", "Yes. It supports loan requests, guarantor responses, review processes, and repayment tracking."],
              ["Can it work for family groups and welfare groups?", "Yes. It is built for chamas, family groups, welfare groups, and community finance organizations."],
              ["Is it mobile friendly?", "Yes. The platform is designed for mobile-responsive access to support officials and members on the go."],
            ].map(([q, a]) => (
              <Card key={q} className="border-border/70">
                <CardHeader>
                  <CardTitle className="text-lg">{q}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-sm">{a}</CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <DemoBookingSection
        context="chamadesk"
        title="Book a Milespace ChamaDesk Demo"
        description="Share your setup and priorities. We will tailor a walkthrough around your meeting structure, member accountability needs, and growth stage."
        defaultProduct="Milespace ChamaDesk"
        submitLabel="Book a Demo"
        primarySelectLabel="Group Type *"
        primarySelectPlaceholder="Select group type"
        primarySelectOptions={[
          "Chama",
          "Family investment group",
          "Welfare group",
          "Table banking group",
          "SACCO-like group",
          "Community savings group",
          "Church/community finance group",
          "Professional association",
        ]}
        secondarySelectLabel="What You Need Help With *"
        secondarySelectPlaceholder="Select priority"
        secondarySelectOptions={[
          "Meeting workflow management",
          "Contributions and payment proof tracking",
          "Loan and guarantor workflows",
          "Reports and accountability controls",
          "Full group digitization and onboarding",
        ]}
        organizationLabel="Group / Organization Name *"
        organizationPlaceholder="Example: Umoja Family Investment Group"
        teamLabel="Estimated Member Count *"
        teamPlaceholder="Example: 35 members"
        messageLabel="What You Need Help With *"
        messagePlaceholder="Share your current process and the result you want from Milespace ChamaDesk."
      />

      <section className="bg-primary py-20 text-primary-foreground">
        <div className="container mx-auto max-w-4xl px-4 text-center md:px-8">
          <h2 className="mb-5 text-3xl font-bold md:text-5xl">Move from Meeting Confusion to Structured Accountability</h2>
          <p className="mb-9 text-lg text-primary-foreground/80">
            If your group is ready for cleaner records, stronger governance, and better visibility for members and officials, Milespace ChamaDesk is built for you.
          </p>
          <div className="flex flex-col justify-center gap-4 sm:flex-row">
            <Button asChild size="lg" className="h-14 bg-secondary px-8 font-semibold text-primary hover:bg-secondary/90" id="chamadesk-final-book-demo" data-cta="book-demo">
              <a href="#chamadesk-demo-form">Book a Demo</a>
            </Button>
            <Button asChild size="lg" variant="outline" className="h-14 border-white/40 px-8 font-semibold text-white hover:bg-white/10 hover:text-white" id="chamadesk-final-contact" data-cta="whatsapp-contact">
              <a href={getWhatsAppLink("Hi Milespace, we want to adopt Milespace ChamaDesk for our group.")} target="_blank" rel="noopener noreferrer">
                Talk to Milespace
              </a>
            </Button>
          </div>
          <p className="mt-6 text-sm text-primary-foreground/70">
            Prefer product overview first?{" "}
            <Link href="/saas" className="underline underline-offset-4 hover:text-white">
              Explore all Milespace SaaS products
            </Link>
            .
          </p>
        </div>
      </section>
    </div>
  );
}
