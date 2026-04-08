import { Link } from "wouter";
import { WHATSAPP_DIRECT_LINK } from "@/lib/whatsapp";
import { MessageSquare } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground pt-14 pb-8">
      <div className="container mx-auto px-4 md:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-10">
          <div className="col-span-2">
            <Link href="/" className="inline-block mb-5">
              <img src="/logo.png" alt="Milespace" className="h-[120px] w-auto brightness-0 invert" />
            </Link>
            <p className="text-primary-foreground/60 text-sm leading-relaxed max-w-xs mb-6">
              A premium Kenyan digital agency. We engineer experiences, orchestrate revolutions, and build digital products that dominate.
            </p>
            <a
              href={WHATSAPP_DIRECT_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-3 bg-[#25D366] hover:bg-[#1ebe5d] active:scale-95 text-white font-semibold text-base px-6 py-3.5 rounded-full shadow-lg shadow-[#25D366]/30 hover:shadow-[#25D366]/50 transition-all duration-300"
            >
              <span className="bg-white/20 group-hover:bg-white/30 rounded-full p-1.5 transition-colors">
                <MessageSquare size={18} className="fill-white" />
              </span>
              Chat on WhatsApp
            </a>
          </div>

          <div>
            <h3 className="font-semibold text-sm uppercase tracking-wider text-white/50 mb-4">Navigate</h3>
            <ul className="space-y-3 text-sm">
              {[
                { href: "/about", label: "About Us" },
                { href: "/services", label: "Services" },
                { href: "/pricing", label: "Pricing" },
                { href: "/portfolio", label: "Portfolio" },
                { href: "/contact", label: "Contact" },
              ].map(link => (
                <li key={link.href}>
                  <Link href={link.href} className="text-primary-foreground/60 hover:text-white transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-sm uppercase tracking-wider text-white/50 mb-4">Contact</h3>
            <ul className="space-y-3 text-sm text-primary-foreground/60">
              <li>Nairobi, Kenya</li>
              <li>
                <a href="tel:+254720176247" className="hover:text-white transition-colors">
                  +254 720 176 247
                </a>
              </li>
              <li>
                <a href="mailto:hello@milespace.co.ke" className="hover:text-white transition-colors break-all">
                  hello@milespace.co.ke
                </a>
              </li>
              <li>
                <a href="https://milespace.co.ke" className="hover:text-white transition-colors">
                  milespace.co.ke
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 flex flex-col sm:flex-row justify-between items-center gap-4 text-xs text-primary-foreground/40">
          <p>&copy; {new Date().getFullYear()} Milespace Group. All rights reserved.</p>

          <div className="flex flex-wrap items-center justify-center gap-x-4 gap-y-1">
            <Link href="/legal?tab=privacy" className="hover:text-white transition-colors">Privacy Policy</Link>
            <span className="text-white/20">·</span>
            <Link href="/legal?tab=terms" className="hover:text-white transition-colors">Terms & Conditions</Link>
            <span className="text-white/20">·</span>
            <Link href="/legal?tab=refund" className="hover:text-white transition-colors">Refund Policy</Link>
            <span className="text-white/20">·</span>
            <Link href="/legal?tab=changes" className="hover:text-white transition-colors">Change Policy</Link>
          </div>

          <p>Where vision meets velocity.</p>
        </div>
      </div>
    </footer>
  );
}
