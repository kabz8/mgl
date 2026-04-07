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
      icon: <Code className="h-8 w-8 text-secondary" />,
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
      icon: <Smartphone className="h-8 w-8 text-secondary" />,
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
      icon: <Database className="h-8 w-8 text-secondary" />,
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
      icon: <Megaphone className="h-8 w-8 text-secondary" />,
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
      icon: <PenTool className="h-8 w-8 text-secondary" />,
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

      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 md:px-8">
          <div className="space-y-24">
            {services.map((service, index) => (
              <motion.div 
                key={service.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                className={`flex flex-col lg:flex-row gap-12 lg:gap-20 items-center ${index % 2 !== 0 ? 'lg:flex-row-reverse' : ''}`}
              >
                <div className="flex-1 space-y-6 w-full">
                  <div className="h-16 w-16 bg-primary/5 rounded-2xl flex items-center justify-center mb-4">
                    {service.icon}
                  </div>
                  <h2 className="text-3xl md:text-4xl font-bold text-foreground">{service.title}</h2>
                  <p className="text-lg text-muted-foreground leading-relaxed">{service.desc}</p>
                  
                  <ul className="space-y-3 py-4">
                    {service.features.map((feature, i) => (
                      <li key={i} className="flex items-start gap-3">
                        <div className="mt-1 bg-primary/10 rounded-full p-1">
                          <Check className="h-4 w-4 text-primary" />
                        </div>
                        <span className="text-foreground font-medium">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="flex flex-wrap gap-4 pt-4">
                    <Button size="lg" className="h-12 px-8" asChild>
                      <a href={getWhatsAppLink(`Hi Milespace, I'm interested in your ${service.title} services and would like to get a quote.`)} target="_blank" rel="noopener noreferrer">
                        Get a Quote
                      </a>
                    </Button>
                    <Button size="lg" variant="outline" className="h-12 px-8" asChild>
                      <Link href={`/pricing`}>View Pricing</Link>
                    </Button>
                  </div>
                </div>
                
                <div className="flex-1 w-full bg-muted rounded-3xl p-8 md:p-12 border border-border flex items-center justify-center min-h-[400px] relative overflow-hidden">
                   {/* Abstract visual representation based on service */}
                   <div className="absolute inset-0 opacity-20 bg-[url('https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=2070&auto=format&fit=crop')] bg-cover mix-blend-overlay" />
                   {service.icon}
                   <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-secondary/20 blur-[100px] rounded-full" />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-muted/30 border-t border-border mt-12">
        <div className="container mx-auto px-4 md:px-8 text-center max-w-3xl">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to see our pricing?</h2>
          <p className="text-xl text-muted-foreground mb-10">
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
