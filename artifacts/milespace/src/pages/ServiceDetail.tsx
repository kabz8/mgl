import { useRoute, Link } from "wouter";
import { motion } from "framer-motion";
import { ArrowLeft, ArrowRight, CheckCircle2, ChevronDown } from "lucide-react";
import { services } from "@/data/services";
import { Button } from "@/components/ui/button";
import { getWhatsAppLink } from "@/lib/whatsapp";
import { SEO } from "@/components/SEO";
import { useState } from "react";
import NotFound from "@/pages/not-found";

export default function ServiceDetail() {
  const [, params] = useRoute("/services/:slug");
  const slug = params?.slug;
  const service = services.find((s) => s.slug === slug);
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  if (!service) return <NotFound />;

  const related = services.filter((s) => s.slug !== slug).slice(0, 3);

  return (
    <div className="flex flex-col w-full pb-24">
      <SEO
        title={service.metaTitle.replace(/ \| Milespace$/, "")}
        description={service.metaDesc}
        canonical={`/services/${service.slug}`}
      />

      {/* Back */}
      <div className="bg-muted/30 border-b border-border">
        <div className="container mx-auto px-4 md:px-8 py-4">
          <Link href="/services" className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors">
            <ArrowLeft size={16} /> All Services
          </Link>
        </div>
      </div>

      {/* Hero */}
      <section className="bg-primary text-primary-foreground py-20">
        <div className="container mx-auto px-4 md:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45 }}
            className="max-w-3xl"
          >
            <div className="inline-flex items-center justify-center w-16 h-16 text-4xl bg-white/10 rounded-2xl mb-6">
              {service.icon}
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-4">
              {service.title}
            </h1>
            <p className="text-xl text-secondary font-semibold mb-5">{service.tagline}</p>
            <p className="text-lg text-primary-foreground/75 leading-relaxed mb-8 max-w-2xl">
              {service.longDesc}
            </p>
            <div className="flex flex-col sm:flex-row gap-3">
              <Button asChild size="lg" className="bg-secondary text-primary hover:bg-secondary/90 font-bold h-14 px-8">
                <a href={getWhatsAppLink(`Hi Milespace, I'm interested in your ${service.title} service.`)} target="_blank" rel="noopener noreferrer">
                  Get a Free Quote <ArrowRight className="ml-2 h-4 w-4" />
                </a>
              </Button>
              <Button asChild size="lg" variant="outline" className="border-white/30 text-white hover:bg-white/10 h-14 px-8">
                <Link href="/pricing">View Pricing</Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* What's Included */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4 md:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4 }}
            >
              <h2 className="text-3xl font-bold mb-2">What's Included</h2>
              <p className="text-muted-foreground mb-8">Everything covered under this service.</p>
              <ul className="grid grid-cols-1 gap-3">
                {service.features.map((f, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <CheckCircle2 size={18} className="text-primary shrink-0 mt-0.5" />
                    <span className="text-foreground text-sm leading-relaxed">{f}</span>
                  </li>
                ))}
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.1 }}
            >
              <h2 className="text-3xl font-bold mb-2">Why Choose Milespace</h2>
              <p className="text-muted-foreground mb-8">What makes our delivery different.</p>
              <div className="flex flex-col gap-5">
                {service.benefits.map((b, i) => (
                  <div key={i} className="flex gap-4 p-5 rounded-xl border border-border bg-card hover:border-primary/20 transition-colors">
                    <div className="shrink-0 w-8 h-8 rounded-full bg-primary/10 text-primary flex items-center justify-center font-bold text-sm mt-0.5">
                      {i + 1}
                    </div>
                    <div>
                      <p className="font-semibold text-foreground">{b.title}</p>
                      <p className="text-sm text-muted-foreground mt-1 leading-relaxed">{b.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Our Process */}
      <section className="py-16 bg-muted/30 border-y border-border">
        <div className="container mx-auto px-4 md:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-3">How We Deliver</h2>
            <p className="text-muted-foreground text-lg">A clear, structured process so you always know what's happening and what's next.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {service.process.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.35, delay: i * 0.07 }}
                className="bg-card rounded-2xl border border-border p-6 hover:border-primary/20 hover:shadow-sm transition-all"
              >
                <div className="w-9 h-9 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold text-sm mb-4">
                  {i + 1}
                </div>
                <h3 className="font-bold text-foreground mb-2">{item.step}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4 md:px-8 max-w-3xl">
          <h2 className="text-3xl md:text-4xl font-bold mb-3 text-center">Frequently Asked Questions</h2>
          <p className="text-muted-foreground text-center mb-10">Everything you need to know before getting started.</p>
          <div className="flex flex-col gap-3">
            {service.faqs.map((faq, i) => (
              <div key={i} className="rounded-xl border border-border bg-card overflow-hidden">
                <button
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  className="w-full flex items-center justify-between gap-4 p-5 text-left hover:bg-muted/30 transition-colors"
                >
                  <span className="font-semibold text-foreground text-sm">{faq.q}</span>
                  <ChevronDown
                    size={18}
                    className={`shrink-0 text-muted-foreground transition-transform duration-300 ${openFaq === i ? "rotate-180" : ""}`}
                  />
                </button>
                {openFaq === i && (
                  <div className="px-5 pb-5 text-sm text-muted-foreground leading-relaxed border-t border-border pt-4">
                    {faq.a}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 md:px-8 max-w-3xl text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to get started?</h2>
          <p className="text-primary-foreground/70 mb-8 text-lg">
            Chat with our team today. We'll scope your project, answer your questions, and give you a clear proposal.
          </p>
          <Button asChild size="lg" className="bg-secondary text-primary hover:bg-secondary/90 font-bold h-14 px-10 text-lg">
            <a href={getWhatsAppLink(`Hi Milespace, I'd like to discuss your ${service.title} service.`)} target="_blank" rel="noopener noreferrer">
              Chat on WhatsApp <ArrowRight className="ml-2 h-5 w-5" />
            </a>
          </Button>
        </div>
      </section>

      {/* Other Services */}
      <section className="py-14 bg-muted/20 border-t border-border">
        <div className="container mx-auto px-4 md:px-8">
          <h2 className="text-xl font-semibold text-muted-foreground uppercase tracking-widest mb-6">Other Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {related.map((s) => (
              <Link
                key={s.slug}
                href={`/services/${s.slug}`}
                className="group flex items-start gap-4 p-5 rounded-xl border border-border bg-card hover:border-primary/30 hover:shadow-md transition-all duration-300"
              >
                <div className="text-2xl shrink-0">{s.icon}</div>
                <div>
                  <p className="font-bold text-foreground group-hover:text-primary transition-colors">{s.title}</p>
                  <p className="text-sm text-muted-foreground mt-1 line-clamp-2">{s.shortDesc}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
