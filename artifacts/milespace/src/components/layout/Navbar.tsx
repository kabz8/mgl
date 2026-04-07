import { Link, useLocation } from "wouter";
import { Button } from "@/components/ui/button";
import { WHATSAPP_DIRECT_LINK } from "@/lib/whatsapp";
import { Menu, X, ArrowRight, Home, Info, Briefcase, DollarSign, Image, Phone } from "lucide-react";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const links = [
  { href: "/", label: "Home", icon: Home },
  { href: "/about", label: "About", icon: Info },
  { href: "/services", label: "Services", icon: Briefcase },
  { href: "/pricing", label: "Pricing", icon: DollarSign },
  { href: "/portfolio", label: "Portfolio", icon: Image },
  { href: "/contact", label: "Contact", icon: Phone },
];

export function Navbar() {
  const [location] = useLocation();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <header className="sticky top-0 z-50 w-full border-b border-border bg-background shadow-sm">
        <div className="container mx-auto px-4 md:px-8 flex h-16 items-center justify-between">
          <Link href="/" className="flex items-center gap-2 overflow-visible" onClick={() => setIsOpen(false)}>
            <img
              src="/logo.png"
              alt="Milespace"
              className="h-12 w-auto object-contain"
              style={{ maxHeight: "3rem" }}
            />
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-6">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`text-sm font-semibold transition-colors hover:text-primary ${
                  location === link.href ? "text-primary" : "text-muted-foreground"
                }`}
              >
                {link.label}
              </Link>
            ))}
            <Button asChild className="bg-primary text-white hover:bg-primary/90">
              <a href={WHATSAPP_DIRECT_LINK} target="_blank" rel="noopener noreferrer">
                Get Started
              </a>
            </Button>
          </nav>

          {/* Mobile Hamburger */}
          <button
            className="md:hidden flex items-center justify-center w-10 h-10 rounded-lg bg-primary/5 hover:bg-primary/10 transition-colors text-foreground"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            <AnimatePresence mode="wait" initial={false}>
              {isOpen ? (
                <motion.span
                  key="close"
                  initial={{ rotate: -90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: 90, opacity: 0 }}
                  transition={{ duration: 0.15 }}
                >
                  <X size={22} />
                </motion.span>
              ) : (
                <motion.span
                  key="menu"
                  initial={{ rotate: 90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: -90, opacity: 0 }}
                  transition={{ duration: 0.15 }}
                >
                  <Menu size={22} />
                </motion.span>
              )}
            </AnimatePresence>
          </button>
        </div>
      </header>

      {/* Full-screen mobile overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            key="mobile-menu"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.25, ease: "easeOut" }}
            className="fixed inset-0 z-40 md:hidden bg-primary flex flex-col"
            style={{ top: "64px" }}
          >
            {/* Decorative blobs */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-secondary/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-80 h-80 bg-secondary/5 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2 pointer-events-none" />

            <div className="relative z-10 flex flex-col h-full px-6 pt-8 pb-10 overflow-y-auto">
              {/* Nav links */}
              <nav className="flex flex-col gap-2 flex-1">
                {links.map((link, i) => {
                  const Icon = link.icon;
                  const active = location === link.href;
                  return (
                    <motion.div
                      key={link.href}
                      initial={{ opacity: 0, x: -24 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.05 + i * 0.07, duration: 0.3, ease: "easeOut" }}
                    >
                      <Link
                        href={link.href}
                        onClick={() => setIsOpen(false)}
                        className={`flex items-center gap-4 px-4 py-4 rounded-xl transition-all font-semibold text-lg group ${
                          active
                            ? "bg-secondary text-primary"
                            : "text-white/80 hover:bg-white/10 hover:text-white"
                        }`}
                      >
                        <span className={`p-2 rounded-lg ${active ? "bg-primary/20" : "bg-white/10 group-hover:bg-white/20"} transition-colors`}>
                          <Icon size={18} />
                        </span>
                        {link.label}
                        {active && (
                          <span className="ml-auto w-2 h-2 rounded-full bg-primary" />
                        )}
                      </Link>
                    </motion.div>
                  );
                })}
              </nav>

              {/* Bottom CTA */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5, duration: 0.3 }}
                className="mt-6 space-y-3"
              >
                <div className="h-px bg-white/10 mb-6" />
                <p className="text-white/50 text-sm text-center mb-3">Ready to start your project?</p>
                <Button asChild size="lg" className="w-full bg-secondary text-primary hover:bg-secondary/90 font-bold h-14 text-base">
                  <a href={WHATSAPP_DIRECT_LINK} target="_blank" rel="noopener noreferrer" onClick={() => setIsOpen(false)}>
                    Chat on WhatsApp
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </a>
                </Button>
                <p className="text-white/40 text-xs text-center">+254 720 176 247</p>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
