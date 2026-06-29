import { useParams, Link } from "wouter";
import { useState } from "react";
import { pricingPackages } from "@/data/pricing";
import { Button } from "@/components/ui/button";
import { Switch } from "@/components/ui/switch";
import { Label } from "@/components/ui/label";
import { CheckCircle2, ArrowLeft, Share2 } from "lucide-react";
import { getWhatsAppLink } from "@/lib/whatsapp";
import { useToast } from "@/hooks/use-toast";
import NotFound from "./not-found";

export default function PackageDetail() {
  const params = useParams();
  const { slug } = params;
  const [currency, setCurrency] = useState<"KES" | "USD">("KES");
  const { toast } = useToast();

  const exchangeRate = 130;
  
  const pkg = pricingPackages.find(p => p.slug === slug);
  
  if (!pkg) {
    return <NotFound />;
  }

  const formatPrice = (priceKES: number) => {
    if (currency === "KES") {
      return `KES ${priceKES.toLocaleString()}`;
    }
    return `$${Math.round(priceKES / exchangeRate).toLocaleString()}`;
  };

  const discountedKES = pkg.hasDiscount && pkg.discountPercentage 
    ? pkg.priceKES * (1 - pkg.discountPercentage / 100) 
    : pkg.priceKES;

  const currentPrice = formatPrice(pkg.hasDiscount ? discountedKES : pkg.priceKES);

  const handleShare = () => {
    navigator.clipboard.writeText(window.location.href);
    toast({
      title: "Link copied!",
      description: "Package link copied to clipboard.",
    });
  };

  const relatedPackages = pricingPackages
    .filter(p => p.category === pkg.category && p.id !== pkg.id)
    .slice(0, 3);

  return (
    <div className="flex flex-col w-full pb-24 bg-background">
      <div className="container mx-auto px-4 md:px-8 py-8">
        <Button variant="ghost" className="mb-8 pl-0 hover:bg-transparent hover:text-primary" asChild>
          <Link href="/pricing" className="text-muted-foreground flex items-center">
            <ArrowLeft className="mr-2 h-4 w-4" /> Back to all packages
          </Link>
        </Button>

        <div className="grid lg:grid-cols-3 gap-12">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-10">
            <div>
              <div className="flex items-center gap-4 mb-4">
                <span className="text-sm font-bold uppercase tracking-wider text-secondary bg-secondary/10 px-3 py-1 rounded">
                  {pkg.category}
                </span>
                {pkg.hasDiscount && (
                  <span className="text-sm font-bold uppercase tracking-wider text-white bg-red-500 px-3 py-1 rounded">
                    10% OFF
                  </span>
                )}
              </div>
              <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">{pkg.name}</h1>
              <p className="text-xl text-muted-foreground leading-relaxed">
                A comprehensive solution designed to meet your specific requirements. Everything you need to succeed, bundled into one transparent package.
              </p>
            </div>

            <div className="bg-card border border-border rounded-2xl p-8 md:p-10 shadow-sm">
              <h2 className="text-2xl font-bold mb-6 border-b border-border pb-4">What's Included</h2>
              <ul className="space-y-5">
                {pkg.features.map((feature, idx) => (
                  <li key={idx} className="flex items-start gap-4">
                    <div className="mt-1 bg-primary/5 rounded-full p-1 shrink-0">
                      <CheckCircle2 className="h-6 w-6 text-primary" />
                    </div>
                    <span className="text-lg text-foreground font-medium pt-1">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Sticky Sidebar */}
          <div className="lg:col-span-1">
            <div className="sticky top-24 bg-primary text-primary-foreground rounded-2xl p-8 shadow-xl">
              <div className="flex items-center justify-end space-x-3 mb-6 bg-white/10 p-2 rounded-xl w-fit ml-auto">
                <Label htmlFor="currency-toggle" className={`text-xs font-semibold ${currency === 'KES' ? 'text-white' : 'text-white/50'}`}>
                  KES
                </Label>
                <Switch 
                  id="currency-toggle" 
                  checked={currency === "USD"}
                  onCheckedChange={(checked) => setCurrency(checked ? "USD" : "KES")}
                  className="data-[state=checked]:bg-secondary"
                />
                <Label htmlFor="currency-toggle" className={`text-xs font-semibold ${currency === 'USD' ? 'text-white' : 'text-white/50'}`}>
                  USD
                </Label>
              </div>

              <div className="mb-8">
                <p className="text-white/70 font-medium mb-2 uppercase tracking-wider text-sm">Investment</p>
                {pkg.hasDiscount ? (
                  <div className="flex flex-col">
                    <span className="text-white/50 line-through text-xl font-medium">
                      {formatPrice(pkg.priceKES)}
                    </span>
                    <div className="flex items-baseline gap-1">
                      <span className="text-5xl font-bold text-white">
                        {currentPrice}
                      </span>
                      {pkg.isMonthly && <span className="text-white/70 font-medium">/mo</span>}
                    </div>
                  </div>
                ) : (
                  <div className="flex items-baseline gap-1">
                    <span className="text-5xl font-bold text-white">
                      {currentPrice}
                    </span>
                    {pkg.isMonthly && <span className="text-white/70 font-medium">/mo</span>}
                  </div>
                )}
              </div>

              <Button className="w-full h-14 text-lg font-bold bg-secondary text-primary hover:bg-secondary/90 mb-4" asChild>
                <a 
                  href={getWhatsAppLink(`Hello Milespace, I would like to proceed with the ${pkg.name} package for ${currentPrice}.`)} 
                  target="_blank" 
                  rel="noopener noreferrer"
                >
                  Start Project Now
                </a>
              </Button>

              <Button variant="outline" className="w-full h-12 border-white/20 text-white hover:bg-white/10" onClick={handleShare}>
                <Share2 className="mr-2 h-4 w-4" /> Share Package
              </Button>
              
              <p className="text-center text-xs text-white/60 mt-6 mt-auto">
                No hidden fees. Terms and conditions apply.
              </p>
            </div>
          </div>
        </div>

        {/* Related Packages */}
        {relatedPackages.length > 0 && (
          <div className="mt-24 pt-16 border-t border-border">
            <h2 className="text-3xl font-bold mb-10 text-center">Other {pkg.category} Packages</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {relatedPackages.map(related => (
                <div key={related.id} className="bg-card border border-border rounded-xl p-6 flex flex-col hover:border-primary/30 transition-colors">
                  <h3 className="font-bold text-xl mb-2">{related.name}</h3>
                  <p className="text-2xl font-bold text-primary mb-6">
                    {currency === "KES" ? `KES ${related.priceKES.toLocaleString()}` : `$${Math.round(related.priceKES / exchangeRate).toLocaleString()}`}
                  </p>
                  <Button variant="outline" className="w-full mt-auto" asChild>
                    <Link href={`/pricing/${related.category.toLowerCase().replace(/ /g, '-')}/${related.slug}`}>
                      View Package
                    </Link>
                  </Button>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
