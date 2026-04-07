import { useState, useMemo } from "react";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Switch } from "@/components/ui/switch";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { CheckCircle2, ArrowRight, Share2 } from "lucide-react";
import { pricingPackages, ServiceCategory } from "@/data/pricing";
import { getWhatsAppLink } from "@/lib/whatsapp";
import { useToast } from "@/hooks/use-toast";
import { motion, AnimatePresence } from "framer-motion";

export default function Pricing() {
  const [category, setCategory] = useState<ServiceCategory>("Website Development");
  const [currency, setCurrency] = useState<"KES" | "USD">("KES");
  const { toast } = useToast();

  const exchangeRate = 130;

  const filteredPackages = useMemo(() => {
    return pricingPackages.filter(p => p.category === category);
  }, [category]);

  const categories: ServiceCategory[] = [
    "Website Development",
    "App Development",
    "Custom Software",
    "Digital Marketing",
    "UI/UX Design"
  ];

  const formatPrice = (priceKES: number) => {
    if (currency === "KES") {
      return `KES ${priceKES.toLocaleString()}`;
    }
    return `$${Math.round(priceKES / exchangeRate).toLocaleString()}`;
  };

  return (
    <div className="flex flex-col w-full pb-24 bg-background min-h-screen">
      {/* Header */}
      <section className="bg-primary text-primary-foreground py-20 pb-28">
        <div className="container mx-auto px-4 md:px-8 text-center max-w-3xl">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6">
            Transparent <span className="text-secondary">Pricing</span>
          </h1>
          <p className="text-xl text-primary-foreground/80 font-light">
            Premium digital solutions structured to deliver maximum ROI for your business. Select a category below to explore our packages.
          </p>
        </div>
      </section>

      {/* Sticky Controls */}
      <div className="sticky top-[64px] z-30 bg-background border-b border-border shadow-sm py-3 mb-10">
        <div className="container mx-auto px-4 md:px-8 flex flex-row gap-3 items-center justify-between">
          <div className="flex-1 min-w-0">
            <Select value={category} onValueChange={(val) => setCategory(val as ServiceCategory)}>
              <SelectTrigger className="w-full h-11 text-sm md:text-base font-medium">
                <SelectValue placeholder="Select service" />
              </SelectTrigger>
              <SelectContent>
                {categories.map((cat) => (
                  <SelectItem key={cat} value={cat} className="text-sm md:text-base py-2.5">
                    {cat}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          <div className="flex items-center gap-2 bg-muted px-3 py-2 rounded-lg shrink-0">
            <Label htmlFor="currency-toggle" className={`text-sm font-bold cursor-pointer ${currency === 'KES' ? 'text-primary' : 'text-muted-foreground'}`}>
              KES
            </Label>
            <Switch
              id="currency-toggle"
              checked={currency === "USD"}
              onCheckedChange={(checked) => setCurrency(checked ? "USD" : "KES")}
              className="data-[state=checked]:bg-primary"
            />
            <Label htmlFor="currency-toggle" className={`text-sm font-bold cursor-pointer ${currency === 'USD' ? 'text-primary' : 'text-muted-foreground'}`}>
              USD
            </Label>
          </div>
        </div>
      </div>

      {/* Pricing Grid */}
      <section className="container mx-auto px-4 md:px-8">
        <div className="mb-10 text-center md:text-left">
          <h2 className="text-3xl font-bold text-foreground">{category} Packages</h2>
          {category === "Website Development" && (
            <p className="text-green-600 font-semibold mt-2 bg-green-50 inline-block px-4 py-1.5 rounded-full text-sm">
              ✨ 10% OFF all Website Development packages limited time offer!
            </p>
          )}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <AnimatePresence mode="popLayout">
            {filteredPackages.map((pkg, i) => {
              const discountedKES = pkg.hasDiscount && pkg.discountPercentage 
                ? pkg.priceKES * (1 - pkg.discountPercentage / 100) 
                : pkg.priceKES;

              return (
                <motion.div
                  key={pkg.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.3, delay: i * 0.1 }}
                >
                  <Card className="flex flex-col h-full border-border hover:border-primary/30 transition-colors shadow-sm hover:shadow-md relative overflow-hidden group">
                    {pkg.hasDiscount && (
                      <div className="absolute top-5 right-[-35px] bg-red-500 text-white font-bold text-xs py-1 px-10 transform rotate-45 shadow-sm">
                        10% OFF
                      </div>
                    )}
                    
                    <CardHeader className="pb-4 bg-muted/30 border-b border-border">
                      <CardTitle className="text-2xl font-bold mb-2">{pkg.name}</CardTitle>
                      <div className="mt-4">
                        {pkg.hasDiscount ? (
                          <div className="flex flex-col">
                            <span className="text-muted-foreground line-through text-lg">
                              {formatPrice(pkg.priceKES)}
                            </span>
                            <div className="flex items-baseline gap-1">
                              <span className="text-4xl font-bold text-primary">
                                {formatPrice(discountedKES)}
                              </span>
                              {pkg.isMonthly && <span className="text-muted-foreground font-medium">/mo</span>}
                            </div>
                          </div>
                        ) : (
                          <div className="flex items-baseline gap-1">
                            <span className="text-4xl font-bold text-primary">
                              {formatPrice(pkg.priceKES)}
                            </span>
                            {pkg.isMonthly && <span className="text-muted-foreground font-medium">/mo</span>}
                          </div>
                        )}
                      </div>
                    </CardHeader>

                    <CardContent className="flex-1 pt-6">
                      <ul className="space-y-4">
                        {pkg.features.map((feature, idx) => (
                          <li key={idx} className="flex items-start gap-3">
                            <CheckCircle2 className="h-5 w-5 text-secondary shrink-0 mt-0.5" />
                            <span className="text-muted-foreground font-medium">{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </CardContent>

                    <CardFooter className="pt-6 pb-8 px-6 flex flex-col gap-3 border-t border-border/50">
                      <Button className="w-full h-14 text-lg font-semibold bg-primary hover:bg-primary/90 group-hover:bg-secondary group-hover:text-primary transition-colors" asChild>
                        <a 
                          href={getWhatsAppLink(`Hello Milespace, I would like to get the ${pkg.name} package for ${formatPrice(pkg.hasDiscount ? discountedKES : pkg.priceKES)}.`)} 
                          target="_blank" 
                          rel="noopener noreferrer"
                        >
                          Get This Package
                        </a>
                      </Button>
                      <Button variant="ghost" className="w-full" asChild>
                        <Link href={`/pricing/${pkg.category.toLowerCase().replace(/ /g, '-')}/${pkg.slug}`}>
                          View Details <ArrowRight className="ml-2 h-4 w-4" />
                        </Link>
                      </Button>
                    </CardFooter>
                  </Card>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </div>
      </section>
    </div>
  );
}
