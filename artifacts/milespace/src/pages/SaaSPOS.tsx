import { Link } from "wouter";
import { CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { getWhatsAppLink } from "@/lib/whatsapp";
import { usePageMetadata } from "@/hooks/usePageMetadata";
import { DemoBookingSection } from "@/components/saas/DemoBookingSection";

const features = [
  "Fast checkout and sales recording",
  "Product and category management",
  "Inventory and stock tracking",
  "Low stock alerts",
  "Daily sales summaries",
  "Sales by cashier / salesperson",
  "Expense tracking",
  "Profit and performance visibility",
  "Reports and insights dashboard",
  "Product movement tracking",
  "Receipt and order handling",
  "Role-based access for admin, cashier, and staff",
];

export default function SaaSPOS() {
  usePageMetadata({
    title: "Milespace POS | Modern Point of Sale Software for Growing Businesses",
    description:
      "Milespace POS helps businesses manage sales, stock, staff activity, expenses, and reports through one clean and modern system.",
    path: "/saas/pos",
  });

  return (
    <div className="flex flex-col w-full bg-[radial-gradient(circle_at_top_left,rgba(234,179,8,0.10),transparent_36%),radial-gradient(circle_at_bottom_right,rgba(59,130,246,0.07),transparent_40%)]">
      <section className="relative overflow-hidden bg-primary text-primary-foreground py-20 md:py-28">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(255,255,255,0.1),transparent_45%)]" />
        <div className="container relative z-10 mx-auto px-4 md:px-8">
          <div className="max-w-4xl">
            <p className="text-sm uppercase tracking-[0.18em] text-secondary font-semibold mb-4">Milespace SaaS - POS</p>
            <h1 className="text-4xl md:text-6xl font-bold tracking-tight leading-tight mb-6">
              A Simple, Modern POS for Growing Businesses
            </h1>
            <p className="text-lg md:text-xl text-primary-foreground/80 max-w-3xl mb-8">
              Milespace POS helps cafes, pastry shops, retail stores, and other growing businesses handle sales, stock, staff activity, and reporting through one clean system.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button asChild size="lg" className="h-14 px-8 bg-secondary text-primary hover:bg-secondary/90 font-semibold" id="pos-book-demo" data-cta="book-demo">
                <a href="#pos-demo-form">Book a Demo</a>
              </Button>
              <Button asChild size="lg" variant="outline" className="h-14 px-8 border-white/40 text-white hover:bg-white/10 hover:text-white font-semibold" id="pos-request-pricing" data-cta="request-pricing">
                <a href={getWhatsAppLink("Hi Milespace, I want pricing details for your POS system.")} target="_blank" rel="noopener noreferrer">
                  Request Pricing / Talk to Us
                </a>
              </Button>
            </div>
            <p className="mt-5 text-sm text-primary-foreground/70">Fast checkout, better stock visibility, cleaner reporting, and stronger day-to-day control.</p>
          </div>
        </div>
      </section>

      <section className="py-10 bg-transparent">
        <div className="container mx-auto px-4 md:px-8">
          <div className="grid md:grid-cols-3 gap-4">
            {[
              { title: "Front Counter Speed", visual: "⚡🧾🛍️" },
              { title: "Stock Confidence", visual: "📦📉🔔" },
              { title: "Owner Control", visual: "📊💼🧠" },
            ].map((item) => (
              <Card key={item.title} className="border-border/70 bg-card/80 backdrop-blur-sm">
                <CardHeader><CardTitle className="text-lg">{item.title}</CardTitle></CardHeader>
                <CardContent><p className="text-2xl tracking-wide">{item.visual}</p></CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 md:px-8">
          <div className="grid lg:grid-cols-2 gap-8">
            <Card className="border-border/70">
              <CardHeader>
                <CardTitle className="text-3xl">Product Overview</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4 text-muted-foreground">
                <p>Milespace POS is built for owners who are tired of guesswork at close of day. You get clear numbers, clear stock position, and clear staff activity.</p>
                <p>Instead of juggling manual logs and disconnected apps, your team works from one shared operating interface from checkout to reporting.</p>
                <p className="text-foreground font-medium">The result is faster service, better stock control, and stronger business decision making.</p>
              </CardContent>
            </Card>
            <Card className="border-border/70">
              <CardHeader>
                <CardTitle className="text-3xl">Who It Is For</CardTitle>
              </CardHeader>
              <CardContent className="space-y-2 text-sm text-muted-foreground">
                {[
                  "Cafe and restaurant counters with daily rush pressure",
                  "Bakery and pastry teams handling high SKU turnover",
                  "Retail stores needing cleaner stock movement tracking",
                  "Owner-managed businesses with small cashier teams",
                  "Growing outlets preparing to scale to more branches",
                ].map((item) => (
                  <p key={item}>{item}</p>
                ))}
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section className="py-20 bg-muted/30 border-y border-border">
        <div className="container mx-auto px-4 md:px-8">
          <div className="max-w-3xl mb-10">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Operational Feature Set</h2>
            <p className="text-muted-foreground">Everything your team needs to run the store with speed and confidence.</p>
          </div>
          <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-4">
            {features.map((feature) => (
              <Card key={feature} className="border-border/70">
                <CardContent className="pt-6">
                  <p className="text-sm font-medium text-foreground flex items-start gap-2">
                    <CheckCircle2 className="h-4 w-4 text-secondary mt-0.5 shrink-0" />
                    <span>{feature}</span>
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 md:px-8">
          <div className="grid lg:grid-cols-2 gap-8">
            <Card className="border-border/70">
              <CardHeader>
                <CardTitle className="text-2xl">How It Works</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                {[
                  "Add products, categories, and opening stock",
                  "Record sales quickly at checkout",
                  "Track cashier activity and daily summaries",
                  "Monitor stock, expenses, and product movement",
                  "Use reports to improve pricing, buying, and operations",
                ].map((step, i) => (
                  <p key={step} className="text-sm text-foreground">
                    <span className="font-semibold">{i + 1}. </span>
                    {step}
                  </p>
                ))}
              </CardContent>
            </Card>
            <Card className="border-border/70">
              <CardHeader>
                <CardTitle className="text-2xl">Business Outcomes</CardTitle>
              </CardHeader>
              <CardContent className="space-y-2 text-sm text-muted-foreground">
                {[
                  "Faster checkout and reduced queue friction",
                  "Better stock awareness with fewer stockout surprises",
                  "Cleaner sales and staff performance visibility",
                  "More confidence in daily and weekly decisions",
                  "Improved margin awareness through expense and product movement tracking",
                ].map((item) => (
                  <p key={item}>{item}</p>
                ))}
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 md:px-8">
          <div className="grid md:grid-cols-3 gap-6">
            {[
              ["Queue Time", "Shorter checkout queues during peak hours due to faster item and receipt flow."],
              ["Stockouts", "Fewer surprise stockouts from low-stock awareness and movement visibility."],
              ["Profit Clarity", "Owner visibility into margin leakage through expense and product reports."],
            ].map(([title, text]) => (
              <Card key={title} className="border-border/70">
                <CardHeader><CardTitle className="text-xl">{title}</CardTitle></CardHeader>
                <CardContent><CardDescription>{text}</CardDescription></CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-muted/30 border-y border-border">
        <div className="container mx-auto px-4 md:px-8">
          <div className="max-w-3xl mb-10">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Questions Store Owners Ask First</h2>
          </div>
          <div className="grid md:grid-cols-2 gap-4">
            {[
              { q: "Can I track stock levels?", a: "Yes. POS includes stock tracking with low stock visibility to help prevent stockout issues." },
              { q: "Can I see daily sales summaries?", a: "Yes. You can review daily sales performance and trend snapshots directly from dashboard reports." },
              { q: "Can multiple staff members use it?", a: "Yes. POS supports role-based access for admin, cashier, and staff workflows." },
              { q: "Is it suitable for a cafe or pastry shop?", a: "Yes. POS is designed to support cafes, pastry shops, and retail-type businesses." },
              { q: "Can it track expenses?", a: "Yes. Expense tracking is included so you can review operational performance with better context." },
              { q: "Will it help me identify fast-moving products?", a: "Yes. Product movement and sales reporting helps identify best and worst performers." },
              { q: "Can it be customized for my business?", a: "Yes. Milespace can tailor workflows and reporting to fit specific business operations." },
            ].map((item) => (
              <Card key={item.q} className="border-border/70">
                <CardHeader><CardTitle className="text-lg">{item.q}</CardTitle></CardHeader>
                <CardContent><CardDescription className="text-sm">{item.a}</CardDescription></CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 md:px-8 text-center max-w-3xl">
          <h2 className="text-3xl md:text-5xl font-bold mb-5">Ready to Modernize Your Store Operations?</h2>
          <p className="text-primary-foreground/80 text-lg mb-9">Book a guided POS demo and see how your sales, stock, and reporting can run in one clean system.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="h-14 px-8 bg-secondary text-primary hover:bg-secondary/90 font-semibold" id="pos-final-book-demo" data-cta="book-demo">
              <a href="#pos-demo-form">Book a Demo</a>
            </Button>
            <Button asChild size="lg" variant="outline" className="h-14 px-8 border-white/40 text-white hover:bg-white/10 hover:text-white font-semibold" id="pos-final-whatsapp" data-cta="whatsapp-contact">
              <a href={getWhatsAppLink("Hi Milespace, I want to discuss POS for my business.")} target="_blank" rel="noopener noreferrer">
                Talk to Milespace
              </a>
            </Button>
          </div>
          <p className="mt-6 text-sm text-primary-foreground/70">
            Prefer overview first? <Link href="/saas" className="underline underline-offset-4 hover:text-white">Back to SaaS products</Link>.
          </p>
        </div>
      </section>

      <DemoBookingSection
        context="pos"
        title="Book a POS Operations Demo"
        description="Tell us how your store currently runs and where control is weak. We will tailor a walkthrough to your daily flow."
        defaultProduct="POS"
        submitLabel="Request POS Demo"
        primarySelectLabel="Store Type *"
        primarySelectPlaceholder="Select store type"
        primarySelectOptions={["Cafe / Coffee Shop", "Bakery / Pastry", "Retail Shop", "Pharmacy / Beauty", "Mixed Inventory Store"]}
        secondarySelectLabel="Current Pain Point *"
        secondarySelectPlaceholder="Select pain point"
        secondarySelectOptions={["Slow checkout", "Stock confusion", "Cashier oversight", "Weak reporting", "Expense leakage"]}
        organizationLabel="Business Name *"
        organizationPlaceholder="Example: Urban Beans Cafe"
        teamLabel="Number of checkout staff *"
        teamPlaceholder="Example: 3 cashiers, 1 supervisor"
        messageLabel="What is hurting performance most right now? *"
        messagePlaceholder="Describe the day-to-day issue you want fixed first (queues, stock, reporting, etc.)."
      />
    </div>
  );
}
