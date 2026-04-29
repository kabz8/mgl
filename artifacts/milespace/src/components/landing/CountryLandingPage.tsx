import { useMemo, useState } from "react";
import { Link } from "wouter";
import { motion } from "framer-motion";
import {
  ArrowRight,
  CheckCircle2,
  ClipboardCheck,
  Cog,
  Globe2,
  LayoutDashboard,
  MessageSquare,
  Rocket,
  Settings2,
  ShoppingCart,
  Smartphone,
  Sparkles,
  Webhook,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { projects } from "@/data/projects";
import { getWhatsAppLink, WHATSAPP_DIRECT_LINK } from "@/lib/whatsapp";
import { useToast } from "@/hooks/use-toast";
import { submitLeadViaWhatsAppAndEmail } from "@/lib/leadSubmission";

type CountryCode = "UK" | "USA";

interface CountryLandingConfig {
  code: CountryCode;
  heroTitle: string;
  heroSubtitle: string;
  heroTrustLine: string;
  quoteCtaLabel: string;
  finalCtaTitle: string;
  finalCtaBody: string;
  whyIntro: string;
  processIntro: string;
  faq: Array<{ q: string; a: string }>;
}

const services = [
  { title: "Custom Software Development", description: "Bespoke systems built around your operations, workflows, and growth goals.", icon: Cog },
  { title: "Web App Development", description: "Fast, secure, and intuitive web apps your team and customers actually enjoy using.", icon: Smartphone },
  { title: "Website Development", description: "Conversion-focused websites designed for trust, speed, and measurable results.", icon: Sparkles },
  { title: "Shopify Development", description: "Modern Shopify builds with custom features, integrations, and conversion improvements.", icon: ShoppingCart },
  { title: "Business Systems & Automation", description: "Automate repetitive workflows and connect tools to remove operational friction.", icon: Settings2 },
  { title: "Admin Dashboards & Portals", description: "Purpose-built dashboards and internal portals for better control and reporting.", icon: LayoutDashboard },
];

const whyMilespaceItems = [
  "Direct communication with the team building your product",
  "Tailored solutions instead of one-size-fits-all templates",
  "Premium UI with reliable architecture and clean code",
  "Strong execution from planning to production launch",
  "Scalable builds suited for startups and established businesses",
];

const processSteps = [
  { title: "Discovery", description: "We align on goals, users, and business outcomes.", icon: MessageSquare },
  { title: "Planning & Scope", description: "We define scope, timeline, and technical approach.", icon: ClipboardCheck },
  { title: "Design & Development", description: "We ship polished interfaces backed by robust engineering.", icon: Webhook },
  { title: "Testing & Launch", description: "We test thoroughly, deploy smoothly, and monitor rollout.", icon: Rocket },
  { title: "Support & Iteration", description: "We refine based on usage and keep improving your product.", icon: CheckCircle2 },
];

function LeadFormSection({ countryCode }: { countryCode: CountryCode }) {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    fullName: "",
    companyName: "",
    email: "",
    phone: "",
    serviceNeeded: "",
    budgetRange: "",
    projectDetails: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSelectChange = (name: "serviceNeeded" | "budgetRange", value: string) => {
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    submitLeadViaWhatsAppAndEmail({
      subject: `New ${countryCode} Project Enquiry - ${formData.companyName || formData.fullName}`,
      lines: [
        `New ${countryCode} landing page enquiry`,
        "",
        `Full Name: ${formData.fullName}`,
        `Company Name: ${formData.companyName}`,
        `Email: ${formData.email}`,
        `Phone / WhatsApp: ${formData.phone}`,
        `Service Needed: ${formData.serviceNeeded}`,
        `Budget Range: ${formData.budgetRange}`,
        "",
        "Project Details:",
        formData.projectDetails,
      ],
    });

    toast({
      title: "Thanks - your enquiry has been captured",
      description: "We opened WhatsApp and email so your enquiry is sent through both channels.",
    });
    setFormData({
      fullName: "",
      companyName: "",
      email: "",
      phone: "",
      serviceNeeded: "",
      budgetRange: "",
      projectDetails: "",
    });
  };

  return (
    <section id="lead-form" className="py-24 bg-background">
      <div className="container mx-auto px-4 md:px-8">
        <div className="max-w-5xl mx-auto rounded-2xl border border-border bg-card p-8 md:p-10 shadow-sm">
          <h2 className="text-3xl md:text-4xl font-bold mb-3">Start Your Project</h2>
          <p className="text-muted-foreground mb-8">
            Share your requirements and we will respond with a clear implementation direction, timeline, and next steps.
          </p>
          <form className="space-y-6" onSubmit={handleSubmit}>
            <div className="grid md:grid-cols-2 gap-5">
              <div className="space-y-2">
                <Label htmlFor={`${countryCode}-fullName`}>Full Name *</Label>
                <Input id={`${countryCode}-fullName`} name="fullName" required value={formData.fullName} onChange={handleChange} className="h-12 bg-background" placeholder="Jane Smith" />
              </div>
              <div className="space-y-2">
                <Label htmlFor={`${countryCode}-companyName`}>Company Name *</Label>
                <Input id={`${countryCode}-companyName`} name="companyName" required value={formData.companyName} onChange={handleChange} className="h-12 bg-background" placeholder="Acme Ltd" />
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-5">
              <div className="space-y-2">
                <Label htmlFor={`${countryCode}-email`}>Email *</Label>
                <Input id={`${countryCode}-email`} name="email" type="email" required value={formData.email} onChange={handleChange} className="h-12 bg-background" placeholder="you@company.com" />
              </div>
              <div className="space-y-2">
                <Label htmlFor={`${countryCode}-phone`}>Phone / WhatsApp *</Label>
                <Input id={`${countryCode}-phone`} name="phone" required value={formData.phone} onChange={handleChange} className="h-12 bg-background" placeholder="+44 ... / +1 ..." />
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-5">
              <div className="space-y-2">
                <Label>Service Needed *</Label>
                <Select value={formData.serviceNeeded} onValueChange={(v) => handleSelectChange("serviceNeeded", v)}>
                  <SelectTrigger className="h-12 bg-background">
                    <SelectValue placeholder="Select a service" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="Custom Software Development">Custom Software Development</SelectItem>
                    <SelectItem value="Web App Development">Web App Development</SelectItem>
                    <SelectItem value="Website Development">Website Development</SelectItem>
                    <SelectItem value="Shopify Development">Shopify Development</SelectItem>
                    <SelectItem value="Business Systems & Automation">Business Systems & Automation</SelectItem>
                    <SelectItem value="Admin Dashboards & Portals">Admin Dashboards & Portals</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="space-y-2">
                <Label>Budget Range *</Label>
                <Select value={formData.budgetRange} onValueChange={(v) => handleSelectChange("budgetRange", v)}>
                  <SelectTrigger className="h-12 bg-background">
                    <SelectValue placeholder="Select budget range" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="Under 5000">Under $5,000 / GBP4,000</SelectItem>
                    <SelectItem value="5000-15000">$5,000 - $15,000 / GBP4,000 - GBP12,000</SelectItem>
                    <SelectItem value="15000-50000">$15,000 - $50,000 / GBP12,000 - GBP40,000</SelectItem>
                    <SelectItem value="50000+">$50,000+ / GBP40,000+</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor={`${countryCode}-projectDetails`}>Project Details *</Label>
              <Textarea
                id={`${countryCode}-projectDetails`}
                name="projectDetails"
                required
                value={formData.projectDetails}
                onChange={handleChange}
                className="min-h-[140px] bg-background resize-none"
                placeholder="Tell us what you need built, your timeline, and desired outcome."
              />
            </div>

            <Button
              type="submit"
              size="lg"
              className="w-full h-14 text-base font-semibold bg-primary hover:bg-primary/90"
              id={`${countryCode.toLowerCase()}-form-submit`}
              data-cta="form-submit"
              data-country={countryCode.toLowerCase()}
            >
              Submit Project Enquiry
            </Button>
          </form>
        </div>
      </div>
    </section>
  );
}

export function CountryLandingPage({ config }: { config: CountryLandingConfig }) {
  const countrySlug = config.code.toLowerCase();
  const featuredProof = useMemo(
    () => projects.filter((project) => project.category === "website" || project.category === "software").slice(0, 3),
    [],
  );

  const discoveryMessage =
    config.code === "UK"
      ? "Hi Milespace, we are a UK business looking to book a discovery call."
      : "Hi Milespace, we are a US business looking to book a discovery call.";

  return (
    <div className="flex flex-col w-full bg-background">
      <section className="relative overflow-hidden bg-primary text-primary-foreground py-24 md:py-32">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(255,255,255,0.09),transparent_45%),radial-gradient(circle_at_bottom_left,rgba(255,255,255,0.05),transparent_42%)]" />
        <div className="container relative z-10 mx-auto px-4 md:px-8">
          <div className="grid lg:grid-cols-[1.2fr_0.8fr] gap-10 items-center">
            <div>
              <p className="text-sm uppercase tracking-[0.18em] text-secondary font-semibold mb-4">Milespace Global Delivery</p>
              <h1 className="text-4xl md:text-6xl font-bold tracking-tight leading-tight mb-6">{config.heroTitle}</h1>
              <p className="text-lg md:text-xl text-primary-foreground/80 max-w-3xl mb-8">{config.heroSubtitle}</p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button asChild size="lg" className="h-14 px-8 bg-secondary text-primary hover:bg-secondary/90 font-semibold" id={`${countrySlug}-book-call`} data-cta="book-call" data-country={countrySlug}>
                  <a href={getWhatsAppLink(discoveryMessage)} target="_blank" rel="noopener noreferrer">Book a Discovery Call</a>
                </Button>
                <Button asChild size="lg" variant="outline" className="h-14 px-8 border-white/40 text-white hover:bg-white/10 hover:text-white font-semibold" id={`${countrySlug}-request-quote`} data-cta="request-quote" data-country={countrySlug}>
                  <a href="#lead-form">{config.quoteCtaLabel}</a>
                </Button>
              </div>
              <p className="mt-5 text-sm text-primary-foreground/70">{config.heroTrustLine}</p>
            </div>
            <Card className="border-white/15 bg-white/[0.06] backdrop-blur-sm text-white shadow-2xl">
              <CardHeader>
                <CardTitle className="text-2xl leading-tight">Built for outcomes, not just deliverables.</CardTitle>
                <CardDescription className="text-primary-foreground/70">Premium engineering and design for international teams that need reliable execution.</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-start gap-3">
                  <Globe2 className="h-5 w-5 text-secondary mt-0.5" />
                  <p className="text-sm text-primary-foreground/90">Cross-timezone collaboration with clear weekly visibility.</p>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="h-5 w-5 text-secondary mt-0.5" />
                  <p className="text-sm text-primary-foreground/90">Conversion-focused UX with scalable backend architecture.</p>
                </div>
                <div className="flex items-start gap-3">
                  <Rocket className="h-5 w-5 text-secondary mt-0.5" />
                  <p className="text-sm text-primary-foreground/90">Faster release cycles with robust quality checks.</p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section className="py-10 bg-background border-b border-border">
        <div className="container mx-auto px-4 md:px-8">
          <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-3">
            {["Custom-built solutions", "Clear communication", "Fast turnaround", "International delivery", "Clean UI + solid backend"].map((item) => (
              <div key={item} className="rounded-xl bg-muted/40 border border-border px-4 py-3 text-sm font-medium text-foreground text-center">
                {item}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 bg-background">
        <div className="container mx-auto px-4 md:px-8">
          <div className="max-w-3xl mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Services for {config.code} Companies</h2>
            <p className="text-muted-foreground">We help teams ship reliable digital products and business systems that support growth and operations.</p>
          </div>
          <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-6">
            {services.map((service, index) => {
              const Icon = service.icon;
              return (
                <motion.div key={service.title} initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.35, delay: index * 0.05 }}>
                  <Card className="h-full border-border/70 hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
                    <CardHeader>
                      <div className="h-12 w-12 rounded-xl bg-primary/5 flex items-center justify-center mb-4">
                        <Icon className="h-6 w-6 text-secondary" />
                      </div>
                      <CardTitle className="text-xl leading-snug">{service.title}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <CardDescription className="text-sm leading-relaxed">{service.description}</CardDescription>
                    </CardContent>
                  </Card>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="py-24 bg-muted/30 border-y border-border">
        <div className="container mx-auto px-4 md:px-8">
          <div className="grid lg:grid-cols-2 gap-8 items-start">
            <Card className="border-border/70 shadow-sm">
              <CardHeader>
                <CardTitle className="text-3xl md:text-4xl">Why Milespace</CardTitle>
                <CardDescription className="text-base">{config.whyIntro}</CardDescription>
              </CardHeader>
              <CardContent className="space-y-3">
                {whyMilespaceItems.map((item) => (
                  <div key={item} className="flex items-start gap-3">
                    <CheckCircle2 className="h-5 w-5 text-secondary mt-0.5 shrink-0" />
                    <p className="text-foreground">{item}</p>
                  </div>
                ))}
              </CardContent>
            </Card>
            <Card className="border-border/70 shadow-sm">
              <CardHeader>
                <CardTitle className="text-2xl">Our Process</CardTitle>
                <CardDescription>{config.processIntro}</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                {processSteps.map((step, index) => {
                  const Icon = step.icon;
                  return (
                    <div key={step.title} className="flex gap-4 rounded-xl bg-muted/30 p-3">
                      <div className="h-10 w-10 rounded-full bg-primary/5 flex items-center justify-center shrink-0">
                        <Icon className="h-5 w-5 text-primary" />
                      </div>
                      <div>
                        <p className="font-semibold">{index + 1}. {step.title}</p>
                        <p className="text-sm text-muted-foreground">{step.description}</p>
                      </div>
                    </div>
                  );
                })}
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section className="py-24 bg-background">
        <div className="container mx-auto px-4 md:px-8">
          <div className="max-w-3xl mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Recent Project Proof</h2>
            <p className="text-muted-foreground">A sample of projects we have delivered. Replace or expand these cards with campaign-specific case studies as needed.</p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {featuredProof.map((project) => (
              <Card key={project.id} className="h-full border-border/70 shadow-sm hover:shadow-lg transition-shadow">
                <CardHeader>
                  <CardTitle className="text-lg">{project.client}</CardTitle>
                  <CardDescription className="uppercase tracking-wide text-xs">{project.category}</CardDescription>
                </CardHeader>
                <CardContent className="space-y-3">
                  <p className="text-sm text-muted-foreground">{project.description}</p>
                  <p className="text-sm font-medium text-foreground">Outcome: Improved clarity, trust, and digital presence for target users.</p>
                  {project.url && project.url !== "#" ? (
                    <a href={project.url} target="_blank" rel="noopener noreferrer" className="inline-flex items-center text-sm font-semibold text-primary hover:underline">
                      View project <ArrowRight className="ml-1 h-4 w-4" />
                    </a>
                  ) : (
                    <span className="text-sm text-muted-foreground">Private project details available on request.</span>
                  )}
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 bg-muted/30 border-y border-border">
        <div className="container mx-auto px-4 md:px-8">
          <div className="max-w-3xl mx-auto text-center mb-10">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Frequently Asked Questions</h2>
            <p className="text-muted-foreground">Everything you need to know before starting your project with Milespace.</p>
          </div>
          <div className="max-w-4xl mx-auto grid gap-4">
            {config.faq.map((item) => (
              <Card key={item.q} className="border-border/70">
                <CardHeader><CardTitle className="text-lg">{item.q}</CardTitle></CardHeader>
                <CardContent><p className="text-muted-foreground">{item.a}</p></CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 md:px-8 text-center max-w-3xl">
          <h2 className="text-3xl md:text-5xl font-bold mb-5">{config.finalCtaTitle}</h2>
          <p className="text-primary-foreground/80 text-lg mb-9">{config.finalCtaBody}</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="h-14 px-8 bg-secondary text-primary hover:bg-secondary/90 font-semibold" id={`${countrySlug}-final-book-call`} data-cta="book-call" data-country={countrySlug}>
              <a href={getWhatsAppLink(discoveryMessage)} target="_blank" rel="noopener noreferrer">Book a Discovery Call</a>
            </Button>
            <Button asChild size="lg" variant="outline" className="h-14 px-8 border-white/40 text-white hover:bg-white/10 hover:text-white font-semibold" id={`${countrySlug}-final-whatsapp`} data-cta="whatsapp-contact" data-country={countrySlug}>
              <a href={WHATSAPP_DIRECT_LINK} target="_blank" rel="noopener noreferrer">WhatsApp Milespace</a>
            </Button>
          </div>
          <p className="mt-6 text-sm text-primary-foreground/70">
            Prefer to browse first? <Link href="/portfolio" className="underline underline-offset-4 hover:text-white">Explore our portfolio</Link>.
          </p>
        </div>
      </section>

      <LeadFormSection countryCode={config.code} />
    </div>
  );
}
