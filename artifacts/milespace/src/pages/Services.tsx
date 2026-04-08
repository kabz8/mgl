import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { Code, Smartphone, Database, Megaphone, PenTool, ArrowRight, Check } from "lucide-react";
import { getWhatsAppLink } from "@/lib/whatsapp";
import { motion } from "framer-motion";

export default function Services() {
  const services = [
    {
      id: "web",
      title: "Website Development",
      icon: Code,
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
      icon: Smartphone,
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
      icon: Database,
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
      icon: Megaphone,
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
      icon: PenTool,
      desc: "Beautiful, intuitive interfaces backed by user research. We design products that are visually stunning and effortlessly usable.",
      features: [
        "Website & App UI design",
        "User experience (UX) research",
        "Wireframing & Prototyping",
        "Brand identity design",
        "Design systems & Component libraries"
      ]
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
              const Icon = service.icon;
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
                        <div className="h-12 w-12 bg-primary/5 rounded-xl flex items-center justify-center shrink-0">
                          <Icon className="h-6 w-6 text-secondary" />
                        </div>
                        <h2 className="text-2xl md:text-3xl font-bold text-foreground">{service.title}</h2>
                      </div>
                      <p className="text-muted-foreground leading-relaxed mb-6 max-w-2xl">{service.desc}</p>

                      <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                        {service.features.map((feature, i) => (
                          <li key={i} className="flex items-center gap-2.5">
                            <div className="bg-secondary/10 rounded-full p-1 shrink-0">
                              <Check className="h-3.5 w-3.5 text-secondary" />
                            </div>
                            <span className="text-sm text-foreground">{feature}</span>
                          </li>
                        ))}
                      </ul>
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
