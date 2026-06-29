import { Link } from "wouter";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { getWhatsAppLink } from "@/lib/whatsapp";
import { motion } from "framer-motion";
import { services } from "@/data/services";
import { SEO } from "@/components/SEO";

export default function Services() {
  return (
    <div className="flex flex-col w-full pb-24">
      <SEO
        title="Our Services"
        description="Milespace offers web development, mobile apps, custom software, digital marketing, UI/UX design, SEO & AI optimization, and AI automation for businesses in Kenya and globally."
        canonical="/services"
      />

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
            {services.map((service, index) => (
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
                      <div>
                        <h2 className="text-2xl md:text-3xl font-bold text-foreground">{service.title}</h2>
                        <p className="text-sm text-secondary font-semibold mt-0.5">{service.tagline}</p>
                      </div>
                    </div>
                    <p className="text-muted-foreground leading-relaxed mb-6 max-w-2xl">{service.shortDesc}</p>

                    <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 mb-6">
                      {service.features.slice(0, 6).map((feature, i) => (
                        <li key={i} className="flex items-center gap-2.5">
                          <div className="rounded-full shrink-0 text-sm text-primary">✓</div>
                          <span className="text-sm text-foreground">{feature}</span>
                        </li>
                      ))}
                      {service.features.length > 6 && (
                        <li className="flex items-center gap-2.5">
                          <div className="rounded-full shrink-0 text-sm text-muted-foreground">+</div>
                          <span className="text-sm text-muted-foreground">{service.features.length - 6} more included</span>
                        </li>
                      )}
                    </ul>

                    <Link
                      href={`/services/${service.slug}`}
                      className="inline-flex items-center gap-1.5 text-sm font-semibold text-primary hover:text-primary/80 transition-colors"
                    >
                      See full details, process & FAQs <ArrowRight size={14} />
                    </Link>
                  </div>

                  <div className="flex flex-col gap-3 shrink-0 sm:flex-row md:flex-col md:justify-start md:pt-1">
                    <Button className="h-11 px-6 bg-primary hover:bg-primary/90" asChild>
                      <a href={getWhatsAppLink(`Hi Milespace, I'm interested in your ${service.title} service.`)} target="_blank" rel="noopener noreferrer">
                        Get a Quote
                      </a>
                    </Button>
                    <Button variant="outline" className="h-11 px-6" asChild>
                      <Link href={`/services/${service.slug}`}>Learn More</Link>
                    </Button>
                  </div>
                </div>
              </motion.div>
            ))}
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
