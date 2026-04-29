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
          "Milespace partners with US teams to design and build software products that move fast, scale cleanly, and support measurable business growth.",
        heroTrustLine: "Fast execution, clear ownership, scalable solutions, and long-term technical support.",
        quoteCtaLabel: "Request an Estimate",
        finalCtaTitle: "Ready to Ship Faster with a Product Development Partner?",
        finalCtaBody:
          "If your team needs sharper execution and scalable systems, we can help you plan, build, and launch with confidence.",
        whyIntro:
          "US companies choose Milespace for speed, clarity, and delivery discipline. We focus on outcomes, not busywork, so your product reaches users faster.",
        processIntro:
          "Our process gives your team clear milestones, transparent progress, and quality-first delivery from kickoff to iteration.",
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
