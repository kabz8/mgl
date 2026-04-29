import { CountryLandingPage } from "@/components/landing/CountryLandingPage";
import { usePageMetadata } from "@/hooks/usePageMetadata";

export default function UK() {
  usePageMetadata({
    title: "Custom Software Development for UK Businesses | Milespace",
    description:
      "Milespace builds custom software, websites, web apps, Shopify solutions, and business systems for UK businesses.",
    path: "/uk",
  });

  return (
    <CountryLandingPage
      config={{
        code: "UK",
        heroTitle: "Custom Software Development for UK Businesses",
        heroSubtitle:
          "Milespace helps UK companies launch tailored software, high-performing websites, and scalable internal systems with smooth remote collaboration and clear delivery across time zones.",
        heroTrustLine: "Custom builds, not templates - clear communication, practical delivery, and ongoing support.",
        quoteCtaLabel: "Request a Project Quote",
        finalCtaTitle: "Need a Reliable Tech Partner for Your Growing UK Business?",
        finalCtaBody:
          "Share your goals and we will map out the right tailored solution - from discovery to launch and long-term improvement.",
        whyIntro:
          "We combine premium design standards with practical engineering so your solution looks excellent, works reliably, and supports real business outcomes.",
        processIntro:
          "Our structured delivery process keeps scope, communication, and deadlines aligned from day one.",
        faq: [
          {
            q: "Do you work with UK clients remotely?",
            a: "Yes. We work remotely with UK teams every week and maintain smooth communication through shared channels, regular updates, and structured milestones.",
          },
          {
            q: "Can you support and maintain our product after launch?",
            a: "Absolutely. We provide ongoing support, bug fixes, feature iterations, and performance improvements once your product is live.",
          },
          {
            q: "Can you improve an existing website or software system?",
            a: "Yes. We can audit your current platform, improve UX and performance, refactor weak areas, and add new functionality without rebuilding from scratch.",
          },
          {
            q: "How long does a typical project take?",
            a: "Timelines depend on scope, but many projects launch within 4-12 weeks. We provide realistic timelines after discovery and planning.",
          },
          {
            q: "Do you work with startups and established companies?",
            a: "Yes. We work with both startup teams and established organisations that need dependable software delivery and product execution.",
          },
        ],
      }}
    />
  );
}
