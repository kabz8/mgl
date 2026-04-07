import { Link } from "wouter";

export function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground py-12 md:py-16">
      <div className="container mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div className="col-span-1 md:col-span-2">
            <Link href="/" className="inline-block mb-4">
              <span className="font-bold text-2xl tracking-tight text-white">Milespace</span>
            </Link>
            <p className="text-primary-foreground/70 max-w-sm">
              A premium Kenyan digital agency specializing in high-performance web development, mobile apps, and custom software solutions that drive growth.
            </p>
          </div>
          <div>
            <h3 className="font-semibold text-lg mb-4 text-white">Quick Links</h3>
            <ul className="space-y-2 text-primary-foreground/70">
              <li><Link href="/about" className="hover:text-white transition-colors">About Us</Link></li>
              <li><Link href="/services" className="hover:text-white transition-colors">Services</Link></li>
              <li><Link href="/pricing" className="hover:text-white transition-colors">Pricing</Link></li>
              <li><Link href="/portfolio" className="hover:text-white transition-colors">Portfolio</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold text-lg mb-4 text-white">Contact</h3>
            <ul className="space-y-2 text-primary-foreground/70">
              <li>Nairobi, Kenya</li>
              <li><a href="tel:+254720176247" className="hover:text-white transition-colors">+254 720 176 247</a></li>
              <li><a href="mailto:hello@milespace.co.ke" className="hover:text-white transition-colors">hello@milespace.co.ke</a></li>
            </ul>
          </div>
        </div>
        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-primary-foreground/50">
          <p>&copy; {new Date().getFullYear()} Milespace. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
