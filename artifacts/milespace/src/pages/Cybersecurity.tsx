import { useMemo, useState } from "react";
import { motion } from "framer-motion";
import { Link } from "wouter";
import {
  AlertTriangle,
  BadgeAlert,
  Bug,
  DatabaseZap,
  Flame,
  GlobeLock,
  KeyRound,
  Lock,
  MailWarning,
  Network,
  ServerCrash,
  ShieldAlert,
  ShieldCheck,
  ShieldEllipsis,
  ShieldX,
  Siren,
  TriangleAlert,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { usePageMetadata } from "@/hooks/usePageMetadata";
import { submitLeadViaWhatsAppAndEmail } from "@/lib/leadSubmission";
import { useToast } from "@/hooks/use-toast";

const threatCards = [
  {
    icon: MailWarning,
    title: "Phishing & Email Spoofing",
    description: "Attackers impersonate your domain to trick staff and clients into sharing passwords or payments.",
    risk: "High",
  },
  {
    icon: Bug,
    title: "Website Malware Injection",
    description: "Malicious code can be injected to redirect users, steal data, or blacklist your domain.",
    risk: "Critical",
  },
  {
    icon: KeyRound,
    title: "Weak Admin Passwords",
    description: "Predictable credentials expose admin portals to brute-force and credential stuffing attacks.",
    risk: "High",
  },
  {
    icon: DatabaseZap,
    title: "Exposed Databases",
    description: "Improperly configured databases can leak customer records, transactions, and internal data.",
    risk: "Critical",
  },
  {
    icon: AlertTriangle,
    title: "Outdated WordPress Plugins",
    description: "Attackers commonly exploit old plugins to upload malware, redirect users, or gain admin access.",
    risk: "Critical",
  },
  {
    icon: Network,
    title: "API Vulnerabilities",
    description: "Insecure endpoints can expose sensitive data and allow unauthorized actions.",
    risk: "High",
  },
  {
    icon: Flame,
    title: "Ransomware Attacks",
    description: "Compromised systems can be encrypted, disrupting operations and forcing costly recovery.",
    risk: "Critical",
  },
  {
    icon: ServerCrash,
    title: "Poor Server Configuration",
    description: "Weak server hardening increases exposure to known exploits and unauthorized access.",
    risk: "High",
  },
  {
    icon: ShieldX,
    title: "Fake Login Pages",
    description: "Spoofed login forms capture credentials and compromise internal systems quickly.",
    risk: "Medium",
  },
  {
    icon: TriangleAlert,
    title: "Data Leakage",
    description: "Misconfigured storage, logs, or backup files can expose confidential business data.",
    risk: "Critical",
  },
];

const serviceCards = [
  ["Website Security Audit", "We inspect your website for vulnerabilities, malware, exposed files, weak configurations, outdated plugins, SSL issues, and suspicious behavior."],
  ["WordPress Security Hardening", "We secure WordPress websites through plugin checks, admin protection, login hardening, file permission reviews, firewall setup, backup review, and malware prevention."],
  ["Laravel & Web App Security Review", "We review authentication, roles, permissions, APIs, forms, file uploads, sessions, environment files, database exposure, and common OWASP risks."],
  ["Email Security Setup", "We configure and review SPF, DKIM, DMARC, DNS records, mail authentication, and anti-spoofing protection to improve email trust and delivery."],
  ["Hosting & Server Hardening", "We review cPanel, VPS, DNS, SSL, file permissions, database access, backups, firewall rules, and exposed services."],
  ["API Security Testing", "We test APIs for broken authentication, weak tokens, excessive data exposure, rate-limit issues, and insecure endpoints."],
  ["Incident Response Support", "If your website has been hacked or infected, we help investigate, clean, restore, secure, and prevent repeat attacks."],
  ["Security Monitoring & Maintenance", "Continuous checks for uptime, malware, suspicious changes, expired SSL, backups, login attempts, and website health."],
];

const processSteps = [
  ["Discover", "We identify your website, hosting, email, and system exposure."],
  ["Scan", "We check for vulnerabilities, misconfigurations, malware, weak access points, and outdated software."],
  ["Report", "You receive a clear security report with risk levels and recommended fixes."],
  ["Harden", "We apply practical security improvements based on your system."],
  ["Monitor", "We help you stay protected with alerts, backups, updates, and ongoing checks."],
];

const dashboardWidgets = [
  ["Live Threat Simulation", "Threat Level: High", "text-red-400"],
  ["Blocked Login Attempts", "248 blocked", "text-cyan-300"],
  ["Malware Risk", "Elevated", "text-amber-300"],
  ["Email Spoofing Risk", "SPF/DKIM/DMARC required", "text-amber-300"],
  ["SSL Status", "Active, weak cipher warning", "text-cyan-300"],
  ["Backup Health", "7 days since last backup", "text-red-400"],
  ["Admin Exposure", "3 admin endpoints exposed", "text-amber-300"],
  ["Plugin Risk", "12 risky plugins detected", "text-red-400"],
];

function riskClass(risk: string) {
  if (risk === "Critical") return "bg-red-500/20 text-red-300 border-red-500/30 animate-pulse";
  if (risk === "High") return "bg-amber-500/20 text-amber-300 border-amber-500/30";
  if (risk === "Medium") return "bg-cyan-500/20 text-cyan-200 border-cyan-500/30";
  return "bg-emerald-500/20 text-emerald-300 border-emerald-500/30";
}

function CyberHero() {
  return (
    <section className="relative overflow-hidden bg-[#07111C] py-20 text-white md:py-28">
      <div className="absolute inset-0 bg-[linear-gradient(rgba(16,39,61,0.42)_1px,transparent_1px),linear-gradient(90deg,rgba(16,39,61,0.42)_1px,transparent_1px)] bg-[size:32px_32px]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(6,182,212,0.15),transparent_45%),radial-gradient(circle_at_80%_15%,rgba(59,130,246,0.2),transparent_35%)]" />
      <div className="container relative z-10 mx-auto px-4 md:px-8">
        <div className="grid items-center gap-10 lg:grid-cols-[1.05fr_0.95fr]">
          <div>
            <h1 className="mb-6 text-4xl font-bold leading-tight md:text-6xl">Protect Your Business Before Hackers Find the Weak Spot.</h1>
            <p className="mb-8 max-w-3xl text-lg text-white/80 md:text-xl">
              Milespace Group helps businesses secure websites, systems, emails, hosting environments, and digital infrastructure through practical cybersecurity audits, hardening, monitoring, and threat prevention.
            </p>
            <div className="flex flex-col gap-4 sm:flex-row">
              <Button asChild size="lg" className="h-14 bg-cyan-400 px-8 font-semibold text-slate-900 hover:bg-cyan-300" id="cyber-hero-audit-btn" data-cta="request-security-audit">
                <a href="#cybersecurity-lead-form">Request Security Audit</a>
              </Button>
              <Button asChild size="lg" variant="outline" className="h-14 border-white/40 px-8 font-semibold text-white hover:bg-white/10 hover:text-white" id="cyber-hero-services-btn" data-cta="view-protection-services">
                <a href="#cyber-services">View Protection Services</a>
              </Button>
            </div>
          </div>
          <SecurityDashboardMockup />
        </div>
      </div>
    </section>
  );
}

function SecurityDashboardMockup() {
  return (
    <Card className="border-cyan-500/30 bg-slate-950/80 text-white shadow-[0_0_40px_rgba(6,182,212,0.15)] backdrop-blur">
      <CardHeader>
        <CardTitle className="text-2xl">Sample Security Dashboard</CardTitle>
        <CardDescription className="text-slate-300">Illustrative UI metrics for security posture visibility.</CardDescription>
      </CardHeader>
      <CardContent className="grid gap-3 text-sm">
        {[
          ["Threat Level", "High", "text-red-400"],
          ["Website Scan", "17 vulnerabilities detected", "text-amber-300"],
          ["Email Security", "SPF/DKIM/DMARC check required", "text-amber-300"],
          ["Login Attempts", "248 blocked", "text-cyan-300"],
          ["Firewall Status", "Active", "text-emerald-300"],
          ["Backup Status", "Needs Review", "text-red-400"],
        ].map(([title, value, valueClass]) => (
          <div key={title} className="rounded-lg border border-cyan-500/20 bg-slate-900/70 p-3">
            <p className="text-slate-400">{title}</p>
            <p className={`font-semibold ${valueClass}`}>{value}</p>
          </div>
        ))}
      </CardContent>
    </Card>
  );
}

function ThreatCards() {
  return (
    <section className="bg-[#0A1724] py-20 text-white">
      <div className="container mx-auto px-4 md:px-8">
        <h2 className="mb-8 text-3xl font-bold md:text-4xl">Real Threats Facing Businesses Today</h2>
        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          {threatCards.map((threat) => {
            const Icon = threat.icon;
            return (
              <Card key={threat.title} className="border-slate-700/70 bg-slate-900/70 text-white transition-all hover:border-cyan-400/50 hover:shadow-[0_0_25px_rgba(6,182,212,0.15)]">
                <CardHeader>
                  <Icon className="h-5 w-5 text-cyan-300" />
                  <CardTitle className="text-lg">{threat.title}</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <CardDescription className="text-slate-300">{threat.description}</CardDescription>
                  <span className={`inline-flex rounded-full border px-3 py-1 text-xs font-semibold uppercase tracking-wide ${riskClass(threat.risk)}`}>
                    Risk: {threat.risk}
                  </span>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function CyberServices() {
  return (
    <section id="cyber-services" className="bg-[#07111C] py-20 text-white">
      <div className="container mx-auto px-4 md:px-8">
        <h2 className="mb-8 text-3xl font-bold md:text-4xl">Cybersecurity Services by Milespace</h2>
        <div className="grid gap-4 md:grid-cols-2">
          {serviceCards.map(([title, description]) => (
            <Card key={title} className="border-slate-700/70 bg-slate-900/60 text-white hover:border-cyan-400/40">
              <CardHeader>
                <CardTitle>{title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-slate-300">{description}</CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}

function SecurityProcess() {
  return (
    <section className="bg-[#0A1724] py-20 text-white">
      <div className="container mx-auto px-4 md:px-8">
        <h2 className="mb-10 text-3xl font-bold md:text-4xl">How We Protect You</h2>
        <div className="grid gap-5 md:grid-cols-5">
          {processSteps.map(([title, desc], index) => (
            <Card key={title} className="border-slate-700/70 bg-slate-900/70 text-white">
              <CardHeader>
                <CardTitle className="text-base text-cyan-300">{`Step ${index + 1}: ${title}`}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-slate-300">{desc}</CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}

function ThreatDashboardSection() {
  return (
    <section className="bg-[#07111C] py-20 text-white">
      <div className="container mx-auto px-4 md:px-8">
        <div className="mb-8 max-w-4xl">
          <h2 className="mb-3 text-3xl font-bold md:text-4xl">Sample Security Dashboard</h2>
          <p className="text-slate-300">Illustrative metrics showing how risk exposure can be visualized before and after hardening.</p>
        </div>
        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
          {dashboardWidgets.map(([label, value, color]) => (
            <Card key={label} className="border-slate-700/70 bg-slate-900/70 text-white">
              <CardHeader>
                <CardDescription className="text-slate-400">{label}</CardDescription>
                <CardTitle className={color}>{value}</CardTitle>
              </CardHeader>
            </Card>
          ))}
        </div>
        <Card className="mt-5 border-emerald-500/30 bg-emerald-500/10 text-emerald-200">
          <CardContent className="pt-6 text-sm">
            Security score after hardening: <span className="font-semibold">91%</span>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}

function IndustriesProtected() {
  return (
    <section className="bg-[#0A1724] py-20 text-white">
      <div className="container mx-auto px-4 md:px-8">
        <h2 className="mb-8 text-3xl font-bold md:text-4xl">Industries We Protect</h2>
        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
          {["SMEs", "SACCOs & Chamas", "E-commerce Stores", "Real Estate Companies", "Schools & LMS Platforms", "Clinics & Health Platforms", "Agencies & Startups", "Professional Service Firms"].map((industry) => (
            <Card key={industry} className="border-slate-700/70 bg-slate-900/70 text-white">
              <CardHeader>
                <CardTitle className="text-lg">{industry}</CardTitle>
              </CardHeader>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}

function WhyMilespaceCybersecurity() {
  return (
    <section className="bg-[#07111C] py-20 text-white">
      <div className="container mx-auto px-4 md:px-8">
        <h2 className="mb-8 text-3xl font-bold md:text-4xl">Why Milespace Cybersecurity</h2>
        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          {[
            "Developer-led security understanding",
            "Practical fixes, not fear-based reports",
            "Website, hosting, email, and system coverage",
            "Clear reports clients can understand",
            "Security aligned with business continuity",
            "Local Kenya context with global standards",
          ].map((item) => (
            <Card key={item} className="border-slate-700/70 bg-slate-900/70 text-white">
              <CardHeader>
                <ShieldCheck className="h-5 w-5 text-cyan-300" />
                <CardTitle className="text-lg">{item}</CardTitle>
              </CardHeader>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}

function CyberContactCTA() {
  return (
    <section className="bg-[#0F263A] py-20 text-white">
      <div className="container mx-auto max-w-4xl px-4 text-center md:px-8">
        <h2 className="mb-5 text-3xl font-bold md:text-5xl">Not Sure If Your Website Is Safe?</h2>
        <p className="mb-8 text-lg text-white/80">
          Let Milespace Group review your website, email, hosting, or application before attackers exploit weaknesses.
        </p>
        <div className="flex flex-col justify-center gap-4 sm:flex-row">
          <Button asChild size="lg" className="h-14 bg-cyan-400 px-8 font-semibold text-slate-900 hover:bg-cyan-300">
            <a href="#cybersecurity-lead-form">Book a Cybersecurity Consultation</a>
          </Button>
          <Button asChild size="lg" variant="outline" className="h-14 border-white/40 px-8 font-semibold text-white hover:bg-white/10 hover:text-white">
            <a href="#cybersecurity-lead-form">Request Website Security Check</a>
          </Button>
        </div>
      </div>
    </section>
  );
}

function CyberFAQ() {
  const faqs = [
    ["Do you hack websites?", "No. We only perform authorized cybersecurity audits, hardening, and protection work for systems owned by the client or where written permission is provided."],
    ["Can you secure my WordPress website?", "Yes. We review plugins, themes, admin access, login protection, malware risks, backups, SSL, and hosting configuration."],
    ["Can you check if my email domain is secure?", "Yes. We review SPF, DKIM, DMARC, DNS, mail authentication, and spoofing risks."],
    ["Can you recover a hacked website?", "We can help investigate, clean, restore, and secure websites depending on the level of compromise and available backups."],
    ["Do you provide reports?", "Yes. Clients receive a clear report showing risks, severity, evidence, and recommended fixes."],
  ];

  return (
    <section className="bg-[#07111C] py-20 text-white">
      <div className="container mx-auto max-w-4xl px-4 md:px-8">
        <h2 className="mb-8 text-3xl font-bold md:text-4xl">Frequently Asked Questions</h2>
        <Accordion type="single" collapsible className="rounded-2xl border border-slate-700/70 bg-slate-900/70 px-6">
          {faqs.map(([q, a], index) => (
            <AccordionItem key={q} value={`faq-${index}`} className="border-slate-700/70">
              <AccordionTrigger className="text-base text-white hover:no-underline">{q}</AccordionTrigger>
              <AccordionContent className="text-slate-300">{a}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}

function CyberLeadForm() {
  const { toast } = useToast();
  const [serviceNeeded, setServiceNeeded] = useState("");
  const [form, setForm] = useState({
    name: "",
    businessName: "",
    email: "",
    phone: "",
    websiteUrl: "",
    message: "",
  });

  const canSubmit = useMemo(() => form.name && form.businessName && form.email && form.phone && serviceNeeded && form.message, [form, serviceNeeded]);

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!canSubmit) return;

    submitLeadViaWhatsAppAndEmail({
      subject: "New Cybersecurity Request - Milespace Group",
      lines: [
        "New cybersecurity lead request",
        "",
        `Name: ${form.name}`,
        `Business Name: ${form.businessName}`,
        `Email: ${form.email}`,
        `Phone / WhatsApp: ${form.phone}`,
        `Website URL: ${form.websiteUrl || "Not provided"}`,
        `Service Needed: ${serviceNeeded}`,
        "",
        "Message:",
        form.message,
      ],
    });

    toast({
      title: "Security request submitted",
      description: "WhatsApp and email were opened with your details.",
    });
  };

  return (
    <section id="cybersecurity-lead-form" className="bg-[#0A1724] py-20 text-white">
      <div className="container mx-auto px-4 md:px-8">
        <div className="mx-auto max-w-4xl rounded-2xl border border-slate-700/70 bg-slate-900/80 p-8 shadow-[0_0_35px_rgba(15,38,58,0.45)]">
          <h2 className="mb-2 text-3xl font-bold">Submit a Security Request</h2>
          <p className="mb-7 text-slate-300">Share your exposure concerns and our team will guide the next protection step.</p>
          <form onSubmit={onSubmit} className="space-y-5">
            <div className="grid gap-5 md:grid-cols-2">
              <div className="space-y-2">
                <Label htmlFor="cyber-name">Name</Label>
                <Input id="cyber-name" value={form.name} onChange={(e) => setForm((prev) => ({ ...prev, name: e.target.value }))} className="h-11 border-slate-700 bg-slate-950/70 text-white" required />
              </div>
              <div className="space-y-2">
                <Label htmlFor="cyber-business">Business Name</Label>
                <Input id="cyber-business" value={form.businessName} onChange={(e) => setForm((prev) => ({ ...prev, businessName: e.target.value }))} className="h-11 border-slate-700 bg-slate-950/70 text-white" required />
              </div>
            </div>
            <div className="grid gap-5 md:grid-cols-2">
              <div className="space-y-2">
                <Label htmlFor="cyber-email">Email</Label>
                <Input id="cyber-email" type="email" value={form.email} onChange={(e) => setForm((prev) => ({ ...prev, email: e.target.value }))} className="h-11 border-slate-700 bg-slate-950/70 text-white" required />
              </div>
              <div className="space-y-2">
                <Label htmlFor="cyber-phone">Phone / WhatsApp</Label>
                <Input id="cyber-phone" value={form.phone} onChange={(e) => setForm((prev) => ({ ...prev, phone: e.target.value }))} className="h-11 border-slate-700 bg-slate-950/70 text-white" required />
              </div>
            </div>
            <div className="grid gap-5 md:grid-cols-2">
              <div className="space-y-2">
                <Label htmlFor="cyber-url">Website URL</Label>
                <Input id="cyber-url" value={form.websiteUrl} onChange={(e) => setForm((prev) => ({ ...prev, websiteUrl: e.target.value }))} placeholder="https://yourdomain.com" className="h-11 border-slate-700 bg-slate-950/70 text-white" />
              </div>
              <div className="space-y-2">
                <Label>Service Needed</Label>
                <Select value={serviceNeeded} onValueChange={setServiceNeeded}>
                  <SelectTrigger className="h-11 border-slate-700 bg-slate-950/70 text-white">
                    <SelectValue placeholder="Select service needed" />
                  </SelectTrigger>
                  <SelectContent>
                    {[
                      "Website Security Audit",
                      "WordPress Security",
                      "Laravel/Web App Security",
                      "Email Security",
                      "Hosting/Server Hardening",
                      "Hacked Website Support",
                      "Ongoing Monitoring",
                    ].map((service) => (
                      <SelectItem key={service} value={service}>
                        {service}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
            </div>
            <div className="space-y-2">
              <Label htmlFor="cyber-message">Message</Label>
              <Textarea id="cyber-message" value={form.message} onChange={(e) => setForm((prev) => ({ ...prev, message: e.target.value }))} className="min-h-[140px] border-slate-700 bg-slate-950/70 text-white" required />
            </div>
            <Button id="cyber-form-submit" data-cta="submit-security-request" type="submit" disabled={!canSubmit} className="h-12 w-full bg-cyan-400 font-semibold text-slate-900 hover:bg-cyan-300 disabled:opacity-50">
              Submit Security Request
            </Button>
          </form>
        </div>
      </div>
    </section>
  );
}

export default function CybersecurityPage() {
  usePageMetadata({
    title: "Cybersecurity Services in Kenya | Milespace Group",
    description:
      "Protect your business with Milespace Group cybersecurity services including website security audits, WordPress hardening, Laravel app security, email security, hosting hardening, and monitoring.",
    path: "/cybersecurity",
  });

  return (
    <div className="flex w-full flex-col bg-[#07111C]">
      <CyberHero />
      <ThreatCards />
      <CyberServices />
      <SecurityProcess />
      <ThreatDashboardSection />
      <IndustriesProtected />
      <WhyMilespaceCybersecurity />
      <CyberContactCTA />
      <CyberFAQ />
      <CyberLeadForm />
      <section className="border-t border-slate-800 bg-[#07111C] py-8 text-center text-sm text-slate-400">
        <div className="container mx-auto px-4 md:px-8">
          Looking for other offerings? Explore all <Link href="/services" className="text-cyan-300 underline">Milespace services</Link>.
        </div>
      </section>
    </div>
  );
}
