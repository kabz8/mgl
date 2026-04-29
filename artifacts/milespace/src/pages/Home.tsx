import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { ArrowRight, Code, Smartphone, Database, CheckCircle2, ChevronRight } from "lucide-react";
import { getWhatsAppLink, WHATSAPP_DIRECT_LINK } from "@/lib/whatsapp";
import { projects } from "@/data/projects";
import { ProjectCard } from "@/components/ProjectCard";
import { motion } from "framer-motion";

export default function Home() {
  const featuredProjects = projects.filter((p) => p.featured).slice(0, 3);

  const stats = [
    { value: "50+", label: "Clients Served" },
    { value: "100+", label: "Projects Delivered" },
    { value: "5+", label: "Years Experience" },
    { value: "100%", label: "Client Satisfaction" },
  ];

  return (
    <div className="flex flex-col w-full">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-primary text-primary-foreground py-16 md:py-24 lg:py-32">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=2072&auto=format&fit=crop')] opacity-10 bg-cover bg-center mix-blend-overlay" />
        <div className="absolute inset-0 bg-gradient-to-t from-primary to-transparent" />
        
        <div className="container relative z-10 mx-auto px-4 md:px-8">
          <div className="max-w-3xl">
            <motion.h1 
              className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-6 leading-tight"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              Building Digital <br />
              <span className="text-secondary">Excellence</span> for Growth.
            </motion.h1>
            <motion.p 
              className="text-lg md:text-xl text-primary-foreground/80 mb-10 max-w-2xl font-light"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              Milespace is a premium Kenyan digital agency specializing in high-performance web development, mobile apps, and custom software solutions.
            </motion.p>
            <motion.div 
              className="flex flex-col sm:flex-row gap-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <Button size="lg" className="bg-secondary text-primary hover:bg-secondary/90 text-lg font-semibold h-14 px-8" asChild>
                <a href={getWhatsAppLink("Hello Milespace, I'm interested in starting a project and would like to get a quote.")} target="_blank" rel="noopener noreferrer">
                  Get a Quote
                  <ArrowRight className="ml-2 h-5 w-5" />
                </a>
              </Button>
              <Button size="lg" variant="outline" className="text-white hover:bg-white/10 hover:text-white border-white/40 text-lg h-14 px-8" asChild>
                <Link href="/portfolio">
                  View Our Work
                </Link>
              </Button>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4 md:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">Our Core Expertise</h2>
            <p className="text-muted-foreground text-lg">We deliver tailored solutions that solve complex business challenges and drive measurable results.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div 
              className="bg-card rounded-xl p-8 border border-border hover:border-secondary/50 transition-colors shadow-sm hover:shadow-md"
              whileHover={{ y: -5 }}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <div className="h-14 w-14 bg-primary/5 rounded-lg flex items-center justify-center mb-6">
                <Code className="h-7 w-7 text-secondary" />
              </div>
              <h3 className="text-2xl font-bold mb-3">Web Development</h3>
              <p className="text-muted-foreground mb-6 line-clamp-3">Custom websites, e-commerce platforms, and corporate sites optimized for speed, SEO, and conversions.</p>
              <Link href="/services" className="text-primary font-semibold flex items-center hover:text-secondary transition-colors">
                Learn more <ChevronRight className="ml-1 h-4 w-4" />
              </Link>
            </motion.div>

            <motion.div 
              className="bg-card rounded-xl p-8 border border-border hover:border-secondary/50 transition-colors shadow-sm hover:shadow-md"
              whileHover={{ y: -5 }}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
            >
              <div className="h-14 w-14 bg-primary/5 rounded-lg flex items-center justify-center mb-6">
                <Smartphone className="h-7 w-7 text-secondary" />
              </div>
              <h3 className="text-2xl font-bold mb-3">App Development</h3>
              <p className="text-muted-foreground mb-6 line-clamp-3">Native and cross-platform mobile applications that provide intuitive user experiences and powerful functionality.</p>
              <Link href="/services" className="text-primary font-semibold flex items-center hover:text-secondary transition-colors">
                Learn more <ChevronRight className="ml-1 h-4 w-4" />
              </Link>
            </motion.div>

            <motion.div 
              className="bg-card rounded-xl p-8 border border-border hover:border-secondary/50 transition-colors shadow-sm hover:shadow-md"
              whileHover={{ y: -5 }}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              <div className="h-14 w-14 bg-primary/5 rounded-lg flex items-center justify-center mb-6">
                <Database className="h-7 w-7 text-secondary" />
              </div>
              <h3 className="text-2xl font-bold mb-3">Custom Software</h3>
              <p className="text-muted-foreground mb-6 line-clamp-3">Scalable business management systems, CRMs, and custom APIs designed specifically for your operational needs.</p>
              <Link href="/services" className="text-primary font-semibold flex items-center hover:text-secondary transition-colors">
                Learn more <ChevronRight className="ml-1 h-4 w-4" />
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Recent Work */}
      <section className="py-24 bg-muted/30 border-y border-border">
        <div className="container mx-auto px-4 md:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
            <div className="max-w-2xl">
              <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">Recent Work</h2>
              <p className="text-muted-foreground text-lg">A selection of our latest projects driving success for businesses across Africa.</p>
            </div>
            <Button variant="outline" asChild>
              <Link href="/portfolio">View All Projects</Link>
            </Button>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {featuredProjects.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
        </div>
      </section>

      {/* Trust / Stats */}
      <section className="py-20 bg-primary text-primary-foreground relative overflow-hidden">
        <div className="absolute inset-0 bg-secondary/5 mix-blend-overlay" />
        <div className="container mx-auto px-4 md:px-8 relative z-10">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center divide-x-0 md:divide-x divide-white/10">
            {stats.map((stat, i) => (
              <motion.div 
                key={i} 
                className="px-4 py-6"
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
              >
                <div className="text-4xl md:text-5xl font-bold text-secondary mb-2">{stat.value}</div>
                <div className="text-primary-foreground/80 font-medium tracking-wide uppercase text-sm">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4 md:px-8">
          <div className="bg-card border border-border rounded-2xl p-8 md:p-16 text-center max-w-4xl mx-auto shadow-sm relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-secondary/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-primary/5 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2" />
            
            <div className="relative z-10">
              <h2 className="text-3xl md:text-5xl font-bold mb-6">Ready to transform your business?</h2>
              <p className="text-xl text-muted-foreground mb-10 max-w-2xl mx-auto">
                Let's discuss your project requirements and see how Milespace can help you achieve your digital goals.
              </p>
              <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
                <Button size="lg" className="h-14 px-8 text-lg font-semibold w-full sm:w-auto" asChild>
                  <a href={WHATSAPP_DIRECT_LINK} target="_blank" rel="noopener noreferrer">
                    Chat on WhatsApp
                  </a>
                </Button>
                <Button size="lg" variant="outline" className="h-14 px-8 text-lg font-semibold w-full sm:w-auto" asChild>
                  <Link href="/pricing">View Pricing</Link>
                </Button>
              </div>
              <p className="mt-6 text-sm text-muted-foreground flex items-center justify-center gap-2">
                <CheckCircle2 className="h-4 w-4 text-green-500" /> Responses typically within 1 hour
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
