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
          "Milespace helps UK teams ship tailored software, premium websites, and internal systems that are engineered for practical outcomes, operational clarity, and long-term scalability.",
        heroTrustLine: "Tailored solutions, clear communication, practical execution, and ongoing support across UK time zones.",
        quoteCtaLabel: "Request a Project Quote",
        finalCtaTitle: "Need a Reliable Tech Partner for Your Growing UK Business?",
        finalCtaBody:
          "Tell us your goals and current bottlenecks. We will map the right tailored solution and delivery plan from scope to launch.",
        whyIntro:
          "We blend premium product design with dependable engineering discipline, so what we build is polished, stable, and commercially useful.",
        processIntro:
          "Our process keeps scope, communication, and deadlines aligned from the first discovery call through post-launch iteration.",
        servicesIntro:
          "From discovery websites to complex internal tooling, we build practical digital solutions that help UK businesses serve customers faster and operate with less friction.",
        challengeSectionTitle: "Common UK Delivery Gaps We Help Fix",
        challengeSectionBody:
          "Most teams do not struggle with ideas - they struggle with execution quality, timeline drift, and fragmented systems. We solve those delivery gaps with clear ownership.",
        challenges: [
          {
            title: "Legacy systems slowing growth",
            description:
              "We modernize outdated tools and workflows so your team can move faster without carrying technical debt that blocks execution.",
          },
          {
            title: "Agencies that overpromise",
            description:
              "We keep delivery practical and transparent with milestone-based communication, realistic scope, and accountable implementation.",
          },
          {
            title: "Disconnected customer journeys",
            description:
              "We unify your website, product experience, and backend operations so enquiry, onboarding, and delivery work as one system.",
          },
        ],
        outcomeHighlights: [
          "Outcome: Faster response-to-delivery workflows and stronger operational clarity.",
          "Outcome: Improved lead quality and higher conversion confidence across digital touchpoints.",
          "Outcome: Systems that scale with your team instead of becoming operational bottlenecks.",
        ],
        credibilityStats: [
          { value: "100+", label: "Projects delivered across web and software" },
          { value: "5+", label: "Years building production-grade solutions" },
          { value: "< 24h", label: "Typical response cycle on active projects" },
          { value: "Global", label: "Remote-first delivery for international clients" },
        ],
        fitPoints: [
          "Direct communication with the engineers and strategists responsible for delivery",
          "Tailored implementation plans built around your operational constraints",
          "Premium UI and robust backend architecture that support growth",
          "Execution discipline focused on outcomes, not vanity output",
          "Flexible enough for startups, structured enough for established organisations",
        ],
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
