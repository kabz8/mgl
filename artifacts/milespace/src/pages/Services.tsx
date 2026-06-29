import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { ArrowRight, ChevronDown } from "lucide-react";
import { getWhatsAppLink } from "@/lib/whatsapp";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

export default function Services() {
  const [expandedProcess, setExpandedProcess] = useState<string | null>(null);

  const services: Array<{
    id: string; title: string; icon: string; desc: string; features: string[];
    detail?: { why: string; process: { step: string; desc: string }[] };
  }> = [
    {
      id: "web",
      title: "Website Development",
      icon: "🌐",
      desc: "High-performance, scalable websites tailored to your business goals. From rapid WordPress deployments to complex custom React applications.",
      features: [
        "WordPress sites (Corporate & Business)",
        "Custom coded websites (React/Next.js)",
        "Landing pages & Sales funnels",
        "E-commerce platforms (WooCommerce & Custom)",
        "Portfolio & Agency sites"
      ]
    },
    {
      id: "app",
      title: "App Development",
      icon: "📱",
      desc: "Engaging mobile experiences that users love. We build robust native and cross-platform applications that perform flawlessly.",
      features: [
        "Android App Development",
        "iOS App Development",
        "Cross-platform apps (Flutter/React Native)",
        "Progressive Web Apps (PWA)",
        "App maintenance & updates"
      ]
    },
    {
      id: "software",
      title: "Custom Software",
      icon: "⚙️",
      desc: "Tailor-made software solutions designed to streamline your operations, reduce manual work, and scale with your business.",
      features: [
        "Business management systems",
        "CRM & ERP systems",
        "POS & Inventory management",
        "Booking & Scheduling systems",
        "Custom API development & integrations"
      ]
    },
    {
      id: "marketing",
      title: "Digital Marketing",
      icon: "📣",
      desc: "Data-driven marketing strategies that increase visibility, drive qualified traffic, and convert visitors into loyal customers.",
      features: [
        "Search Engine Optimization (SEO)",
        "Social media management",
        "Google Ads & Meta Ads campaigns",
        "Content creation & strategy",
        "Analytics & Performance tracking"
      ]
    },
    {
      id: "design",
      title: "UI/UX Design",
      icon: "🎨",
      desc: "Beautiful, intuitive interfaces backed by user research. We design products that are visually stunning and effortlessly usable.",
      features: [
        "Website & App UI design",
        "User experience (UX) research",
        "Wireframing & Prototyping",
        "Brand identity design",
        "Design systems & Component libraries"
      ]
    },
    {
      id: "seo",
      title: "SEO & AI Optimization",
      icon: "🚀",
      desc: "Dominate search rankings and future-proof your visibility. We combine proven SEO fundamentals with cutting-edge AI tools to drive compounding organic growth for your business.",
      features: [
        "Technical SEO audits & fixes",
        "Keyword research & content strategy",
        "On-page & off-page SEO",
        "AI-powered content generation & optimization",
        "Local SEO for Kenyan & global markets",
        "Schema markup & structured data",
        "Core Web Vitals & performance optimization",
        "Monthly SEO reporting & analytics",
        "Voice & AI search optimization",
        "Link building & authority growth"
      ],
      detail: {
        why: "Search engines are the single largest source of free, high-intent traffic on the internet. Without SEO, your website is invisible to the very customers actively searching for what you offer. Combined with AI, we can produce and optimize content at scale — compressing months of organic growth into weeks.",
        process: [
          { step: "Audit & Discovery", desc: "We crawl your entire site, benchmark your current rankings, and map every technical and content gap holding you back." },
          { step: "Keyword & Competitor Research", desc: "Using AI-assisted tools, we uncover the exact phrases your target audience searches — including long-tail, local, and emerging AI-search queries." },
          { step: "Technical Fixes", desc: "Broken links, slow load times, missing meta tags, poor mobile experience, crawlability issues — we fix everything that stops Google from trusting your site." },
          { step: "Content Strategy & Production", desc: "We build a content calendar and produce SEO-optimized articles, landing pages, and service copy — written for humans, structured for algorithms." },
          { step: "AI & Generative Optimization", desc: "We optimize your content for AI-generated answers (SGE/Gemini/ChatGPT) so you appear when customers ask AI assistants questions in your niche." },
          { step: "Track, Report & Scale", desc: "Monthly rank tracking, traffic analysis, and a roadmap that compounds your results each quarter." },
        ]
      }
    },
    {
      id: "ai",
      title: "AI Integration & Automation",
      icon: "🤖",
      desc: "Transform your business operations with intelligent AI. We design, build, and deploy custom AI solutions — from smart chatbots to full workflow automation — that save time, reduce costs, and create competitive advantage.",
      features: [
        "Custom AI chatbots & virtual assistants",
        "Business process automation (n8n, Zapier, Make)",
        "AI-powered data analysis & dashboards",
        "Predictive analytics & decision support",
        "Document processing & OCR automation",
        "AI content pipelines & copywriting tools",
        "CRM & sales automation with AI scoring",
        "WhatsApp & multi-channel AI agents",
        "OpenAI / Claude / Gemini API integrations",
        "AI readiness audits for SMEs"
      ],
      detail: {
        why: "Businesses that adopt AI automation today will outpace competitors who wait. Whether it's a WhatsApp bot that handles customer queries 24/7, or a pipeline that auto-generates reports from your sales data — AI multiplies your team's output without multiplying your headcount.",
        process: [
          { step: "Business Needs Analysis", desc: "We map your workflows, identify bottleneck tasks, and pinpoint where AI can deliver the fastest and highest ROI." },
          { step: "Solution Design", desc: "We architect the right AI stack for your budget and scale — from lightweight automation scripts to full LLM-powered systems." },
          { step: "Build & Integrate", desc: "We build the AI solution and integrate it with your existing tools — your CRM, website, WhatsApp, email, or any API." },
          { step: "Training & Fine-tuning", desc: "Where needed, we fine-tune models or build custom RAG (retrieval-augmented generation) pipelines on your business data." },
          { step: "Deploy & Monitor", desc: "We deploy securely, monitor for accuracy and edge cases, and iterate based on real usage data." },
          { step: "Team Handover & Training", desc: "Your team gets clear documentation and training so you can manage and expand the AI system confidently going forward." },
        ]
      }
    }
  ];

  return (
    <div className="flex flex-col w-full pb-24">
      <section className="bg-primary text-primary-foreground py-20">
        <div className="container mx-auto px-4 md:px-8">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6">
              Our <span className="text-secondary">Services</span>
            </h1>
            <p className="text-xl text-primary-foreground/80 font-light">
              Comprehensive digital solutions to elevate your brand, streamline your operations, and drive revenue.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 bg-background">
        <div className="container mx-auto px-4 md:px-8">
          <div className="space-y-6">
            {services.map((service, index) => {
              return (
                <motion.div
                  key={service.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-80px" }}
                  transition={{ duration: 0.4, delay: index * 0.05 }}
                  className="rounded-2xl border border-border bg-card p-7 md:p-10 hover:border-primary/20 hover:shadow-md transition-all duration-300"
                >
                  <div className="flex flex-col md:flex-row md:items-start gap-8">
                    <div className="flex-1">
                      <div className="flex items-center gap-4 mb-4">
                        <div className="h-12 w-12 bg-muted rounded-xl flex items-center justify-center shrink-0 text-2xl">
                          {service.icon}
                        </div>
                        <h2 className="text-2xl md:text-3xl font-bold text-foreground">{service.title}</h2>
                      </div>
                      <p className="text-muted-foreground leading-relaxed mb-6 max-w-2xl">{service.desc}</p>

                      <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                        {service.features.map((feature, i) => (
                          <li key={i} className="flex items-center gap-2.5">
                            <div className="rounded-full shrink-0 text-sm">✓</div>
                            <span className="text-sm text-foreground">{feature}</span>
                          </li>
                        ))}
                      </ul>

                      {service.detail && (
                        <div className="mt-6">
                          <button
                            onClick={() => setExpandedProcess(expandedProcess === service.id ? null : service.id)}
                            className="flex items-center gap-2 text-sm font-semibold text-primary hover:text-primary/80 transition-colors"
                          >
                            <ChevronDown
                              size={16}
                              className={`transition-transform duration-300 ${expandedProcess === service.id ? "rotate-180" : ""}`}
                            />
                            {expandedProcess === service.id ? "Hide" : "See"} our process & methodology
                          </button>

                          <AnimatePresence>
                            {expandedProcess === service.id && (
                              <motion.div
                                initial={{ opacity: 0, height: 0 }}
                                animate={{ opacity: 1, height: "auto" }}
                                exit={{ opacity: 0, height: 0 }}
                                transition={{ duration: 0.35, ease: "easeInOut" }}
                                className="overflow-hidden"
                              >
                                <div className="mt-5 pt-5 border-t border-border">
                                  <p className="text-sm text-muted-foreground leading-relaxed mb-6 bg-muted/40 rounded-xl p-4 border border-border">
                                    <span className="font-semibold text-foreground">Why this matters: </span>
                                    {service.detail.why}
                                  </p>
                                  <h3 className="font-semibold text-foreground mb-4 text-sm uppercase tracking-wider">How We Deliver</h3>
                                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                    {service.detail.process.map((item, i) => (
                                      <div key={i} className="flex gap-3">
                                        <div className="shrink-0 w-7 h-7 rounded-full bg-primary/10 text-primary flex items-center justify-center text-xs font-bold mt-0.5">
                                          {i + 1}
                                        </div>
                                        <div>
                                          <p className="font-semibold text-foreground text-sm">{item.step}</p>
                                          <p className="text-sm text-muted-foreground mt-0.5 leading-relaxed">{item.desc}</p>
                                        </div>
                                      </div>
                                    ))}
                                  </div>
                                </div>
                              </motion.div>
                            )}
                          </AnimatePresence>
                        </div>
                      )}
                    </div>

                    <div className="flex flex-col gap-3 shrink-0 sm:flex-row md:flex-col md:justify-start md:pt-1">
                      <Button className="h-11 px-6 bg-primary hover:bg-primary/90" asChild>
                        <a href={getWhatsAppLink(`Hi Milespace, I'm interested in your ${service.title} services.`)} target="_blank" rel="noopener noreferrer">
                          Get a Quote
                        </a>
                      </Button>
                      <Button variant="outline" className="h-11 px-6" asChild>
                        <Link href="/pricing">View Pricing</Link>
                      </Button>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="py-20 bg-muted/30 border-t border-border">
        <div className="container mx-auto px-4 md:px-8 text-center max-w-3xl">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to see our pricing?</h2>
          <p className="text-lg text-muted-foreground mb-10">
            We offer transparent, competitive pricing packages tailored to businesses of all sizes.
          </p>
          <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90 h-14 px-10 text-lg font-semibold" asChild>
            <Link href="/pricing">
              View All Pricing Packages
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
        </div>
      </section>
    </div>
  );
}
