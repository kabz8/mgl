import { CountryLandingPage } from "@/components/landing/CountryLandingPage";
import { usePageMetadata } from "@/hooks/usePageMetadata";

export default function USA() {
  usePageMetadata({
    title: "Custom Software Development for US Businesses | Milespace",
    description:
      "Milespace builds scalable software, web apps, websites, Shopify solutions, and business systems for US companies.",
    path: "/usa",
  });

  return (
    <CountryLandingPage
      config={{
        code: "USA",
        heroTitle: "Scalable Web, App & Software Solutions for US Companies",
        heroSubtitle:
          "Milespace partners with US teams to build scalable software, high-converting web experiences, and operational systems that ship quickly and perform under growth pressure.",
        heroTrustLine: "Fast execution, clear ownership, scalable solutions, and long-term technical support.",
        quoteCtaLabel: "Request an Estimate",
        finalCtaTitle: "Ready to Ship Faster with a Product Development Partner?",
        finalCtaBody:
          "If your team needs sharper execution and scalable systems, we can help you scope, build, and launch with confidence.",
        whyIntro:
          "US companies work with Milespace for execution speed, delivery clarity, and systems that can scale without constant rewrites.",
        processIntro:
          "Our process gives your team predictable milestones, transparent delivery visibility, and quality-first execution from kickoff through iteration.",
        servicesIntro:
          "We support growing companies with software and digital systems that improve velocity, reduce operational drag, and unlock scalable growth.",
        challengeSectionTitle: "Where US Teams Lose Momentum",
        challengeSectionBody:
          "Many teams have strategy but lack reliable implementation bandwidth. We close that gap with product-minded engineering and clear accountability.",
        challenges: [
          {
            title: "Slow internal execution cycles",
            description:
              "We move from scope to shipped output quickly while maintaining quality standards that prevent expensive rework.",
          },
          {
            title: "Products that cannot scale cleanly",
            description:
              "We architect for growth from the start so your platform handles more users, features, and integrations without collapsing.",
          },
          {
            title: "Too many disconnected tools",
            description:
              "We build connected systems and automation layers that reduce manual overhead and improve cross-team visibility.",
          },
        ],
        outcomeHighlights: [
          "Outcome: Faster time-to-market with less handoff friction between teams.",
          "Outcome: Better conversion and retention through stronger product UX and execution quality.",
          "Outcome: Scalable operational systems that support growth-stage delivery demands.",
        ],
        credibilityStats: [
          { value: "100+", label: "Delivered websites, apps, and software systems" },
          { value: "5+", label: "Years of full-cycle product delivery experience" },
          { value: "Sprint-ready", label: "Structured execution for fast-moving teams" },
          { value: "Remote-native", label: "Built for distributed US collaboration" },
        ],
        fitPoints: [
          "Execution-focused partnership with direct communication and rapid follow-through",
          "Scalable architecture decisions that keep future growth costs under control",
          "Clean UX + solid backend implementation to support adoption and reliability",
          "Transparent milestones, priorities, and progress at every stage",
          "Strong fit for startups, growth-stage teams, and established operators",
        ],
        faq: [
          {
            q: "Do you work with US clients remotely?",
            a: "Yes. We collaborate remotely with US teams using clear sprint planning, async updates, and scheduled check-ins that fit your operating rhythm.",
          },
          {
            q: "Can you support ongoing product development?",
            a: "Yes. We can continue as your product development partner for roadmap execution, optimizations, and feature expansion after launch.",
          },
          {
            q: "Can you improve our current platform instead of rebuilding?",
            a: "Yes. We frequently modernize existing apps and systems, improve performance, and deliver phased upgrades with minimal disruption.",
          },
          {
            q: "How quickly can a project start and launch?",
            a: "Most projects can start within days after scope alignment. Initial releases often ship in 4-10 weeks depending on complexity.",
          },
          {
            q: "Do you work with startups and larger companies?",
            a: "Yes. We support growing companies and established teams that need reliable execution and scalable product infrastructure.",
          },
        ],
      }}
    />
  );
}
