export interface ServiceProcess {
  step: string;
  desc: string;
}

export interface ServiceFaq {
  q: string;
  a: string;
}

export interface ServiceBenefit {
  title: string;
  desc: string;
}

export interface Service {
  slug: string;
  id: string;
  title: string;
  icon: string;
  tagline: string;
  shortDesc: string;
  longDesc: string;
  features: string[];
  benefits: ServiceBenefit[];
  process: ServiceProcess[];
  faqs: ServiceFaq[];
  metaTitle: string;
  metaDesc: string;
}

export const services: Service[] = [
  {
    slug: "web-development",
    id: "web",
    title: "Website Development",
    icon: "🌐",
    tagline: "Websites that perform, convert, and scale.",
    shortDesc: "High-performance, scalable websites tailored to your business goals. From rapid WordPress deployments to complex custom React applications.",
    longDesc: "Your website is your most powerful sales tool. We engineer websites that don't just look good — they load fast, rank well, and convert visitors into paying customers. Whether you need a sleek corporate site, a high-converting landing page, or a full e-commerce platform, we build it to last.",
    features: [
      "WordPress sites (Corporate & Business)",
      "Custom coded websites (React/Next.js)",
      "Landing pages & Sales funnels",
      "E-commerce platforms (WooCommerce & Custom)",
      "Portfolio & Agency sites",
      "Progressive Web Apps (PWA)",
      "Speed optimization & Core Web Vitals",
      "Mobile-first responsive design",
      "CMS integration & content management",
      "Hosting setup & domain configuration",
    ],
    benefits: [
      { title: "Built to Convert", desc: "Every page is designed with your visitor's journey in mind — guiding them from curiosity to contact or purchase." },
      { title: "Fast by Default", desc: "We optimize for speed from day one. Faster sites rank higher on Google and retain more visitors." },
      { title: "Easy to Manage", desc: "We hand over a site you can actually update yourself, with training and documentation included." },
      { title: "Scalable Architecture", desc: "Whether you're getting 100 visitors or 100,000, your site handles the load without breaking." },
    ],
    process: [
      { step: "Discovery & Scoping", desc: "We start by understanding your business, your audience, and what success looks like for this website." },
      { step: "Wireframing & Design", desc: "Before a line of code is written, you approve the layout and design direction — no surprises." },
      { step: "Development", desc: "We build using modern, clean code with performance and SEO baked in from the start." },
      { step: "Content Integration", desc: "Your copy, images, and brand assets are added and optimized for each page." },
      { step: "Testing & QA", desc: "We test across browsers, devices, and screen sizes to ensure a flawless experience everywhere." },
      { step: "Launch & Handover", desc: "We deploy, configure your domain, and walk you through managing your new site." },
    ],
    faqs: [
      { q: "How long does a website take to build?", a: "A standard business website takes 2–4 weeks. E-commerce or custom web apps can take 4–10 weeks depending on complexity." },
      { q: "Do you build WordPress or custom-coded sites?", a: "Both. We recommend WordPress for content-heavy sites needing easy updates, and custom React/Next.js for performance-critical or highly interactive sites." },
      { q: "Will I be able to update the site myself?", a: "Yes. We build with usability in mind and provide training and documentation so you can manage content without depending on us." },
      { q: "Do you handle hosting and domain setup?", a: "Yes — we can set up hosting, configure your domain, and manage DNS so you don't have to deal with any of that." },
    ],
    metaTitle: "Website Development in Kenya | Milespace",
    metaDesc: "Professional website development in Kenya. Custom React, Next.js, and WordPress websites built to perform, rank, and convert. Get a quote today.",
  },
  {
    slug: "app-development",
    id: "app",
    title: "App Development",
    icon: "📱",
    tagline: "Mobile apps your users will actually use.",
    shortDesc: "Engaging mobile experiences that users love. We build robust native and cross-platform applications that perform flawlessly.",
    longDesc: "Mobile is where your customers spend most of their time. We design and build apps that feel native, perform smoothly, and solve real problems — from SACCO management tools to customer-facing retail apps. Every app we build is engineered for the Kenyan market and beyond.",
    features: [
      "Android App Development",
      "iOS App Development",
      "Cross-platform apps (Flutter / React Native)",
      "Progressive Web Apps (PWA)",
      "App maintenance & updates",
      "Push notifications & real-time features",
      "M-Pesa & payment gateway integration",
      "Offline-capable apps",
      "App Store & Play Store submission",
      "Analytics & crash reporting setup",
    ],
    benefits: [
      { title: "Cross-Platform Efficiency", desc: "One codebase, two platforms. Flutter and React Native let us ship iOS and Android apps at a fraction of the cost of native development." },
      { title: "M-Pesa Ready", desc: "We integrate Safaricom's M-Pesa and other Kenyan payment providers out of the box — no extra setup needed." },
      { title: "Performance-First", desc: "We optimize for low-data environments common in Kenya — apps that work on 3G and cache intelligently." },
      { title: "End-to-End Delivery", desc: "From design to Play Store submission, we handle every step of the process." },
    ],
    process: [
      { step: "Product Discovery", desc: "We define your app's core user flows, target audience, and must-have features before touching a design tool." },
      { step: "UI/UX Design", desc: "Interactive prototypes are built and reviewed so you can feel the app before it's coded." },
      { step: "Development Sprints", desc: "We build in 2-week sprints with regular demos so you can track progress and give feedback." },
      { step: "API & Backend Integration", desc: "We connect your app to any APIs, databases, or payment systems it needs." },
      { step: "Testing", desc: "Functional, performance, and device testing across Android and iOS ensures the app works for real users." },
      { step: "Launch & Support", desc: "We handle app store submission and provide post-launch support for bugs and updates." },
    ],
    faqs: [
      { q: "How much does an app cost?", a: "A simple cross-platform app starts from KES 80,000. Complex apps with custom backends, real-time features, or payment integration range from KES 150,000 upward. We provide a detailed quote after the discovery call." },
      { q: "Should I build for Android, iOS, or both?", a: "For Kenyan audiences, Android is dominant. We typically recommend cross-platform development so you cover both platforms without doubling the budget." },
      { q: "How long does app development take?", a: "A standard app takes 6–12 weeks depending on complexity. We'll give you a specific timeline after scoping." },
      { q: "Can you integrate M-Pesa?", a: "Yes — M-Pesa STK Push, C2B, and B2C integrations are standard for us. We've done it many times." },
    ],
    metaTitle: "App Development in Kenya | Android & iOS | Milespace",
    metaDesc: "Custom Android and iOS app development in Kenya. Cross-platform apps built with Flutter and React Native, including M-Pesa integration. Get a quote.",
  },
  {
    slug: "custom-software",
    id: "software",
    title: "Custom Software",
    icon: "⚙️",
    tagline: "Software built around the way your business actually works.",
    shortDesc: "Tailor-made software solutions designed to streamline your operations, reduce manual work, and scale with your business.",
    longDesc: "Off-the-shelf software is built for everyone — which means it's perfect for no one. We build custom software systems that fit your exact workflow, eliminate the manual work slowing your team down, and grow with your business. From POS systems to full ERP platforms, we engineer it right.",
    features: [
      "Business management systems",
      "CRM & ERP systems",
      "POS & Inventory management",
      "Booking & Scheduling systems",
      "Custom API development & integrations",
      "SACCO management platforms",
      "HR & Payroll systems",
      "Reporting & analytics dashboards",
      "Role-based access control",
      "Multi-branch & multi-user systems",
    ],
    benefits: [
      { title: "Fits Your Workflow Exactly", desc: "No compromise — we build the system around how your team actually works, not the other way around." },
      { title: "Eliminates Manual Work", desc: "The right software can replace dozens of hours of manual data entry, reporting, and coordination each week." },
      { title: "Scales with You", desc: "As your business grows, your software grows with it — new branches, new users, new features added without rebuilding." },
      { title: "You Own It", desc: "Unlike SaaS subscriptions, you own the software we build. No recurring licence fees that keep growing." },
    ],
    process: [
      { step: "Business Analysis", desc: "We map your current processes, identify inefficiencies, and define exactly what the software needs to solve." },
      { step: "System Architecture", desc: "We design the database structure, user roles, and module layout before any development begins." },
      { step: "Iterative Development", desc: "We build in modules — each section is reviewed and approved before moving to the next." },
      { step: "Integration", desc: "We connect to your existing tools — accounting software, M-Pesa, third-party APIs — wherever needed." },
      { step: "User Acceptance Testing", desc: "Your team tests the system in a staging environment before it goes live." },
      { step: "Training & Deployment", desc: "We train your staff, deploy the system, and provide a support period to ensure a smooth transition." },
    ],
    faqs: [
      { q: "How is custom software priced?", a: "Custom software is scoped per project. Simple management systems start from KES 120,000. Complex multi-module platforms are quoted after a detailed discovery session." },
      { q: "How long does it take?", a: "Most custom software projects take 8–20 weeks. The timeline depends on the number of modules, integrations, and complexity of the business rules." },
      { q: "Do you do ongoing maintenance?", a: "Yes — we offer monthly maintenance retainers that cover bug fixes, security updates, and minor feature additions." },
      { q: "Can you integrate with existing systems?", a: "Yes. We can connect to QuickBooks, Sage, Salesforce, M-Pesa, and many other platforms via API." },
    ],
    metaTitle: "Custom Software Development in Kenya | Milespace",
    metaDesc: "Bespoke business software built in Kenya. POS systems, CRMs, ERPs, SACCO platforms, and custom management systems. Tailored to your workflow.",
  },
  {
    slug: "digital-marketing",
    id: "marketing",
    title: "Digital Marketing",
    icon: "📣",
    tagline: "Data-driven marketing that turns clicks into customers.",
    shortDesc: "Data-driven marketing strategies that increase visibility, drive qualified traffic, and convert visitors into loyal customers.",
    longDesc: "Having a great website or product is only half the battle — people need to find it. We design and execute digital marketing strategies built on real data: what your customers are searching, where they're spending time, and what messages make them act. No guesswork, no wasted budget.",
    features: [
      "Search Engine Optimization (SEO)",
      "Social media management",
      "Google Ads & Meta Ads campaigns",
      "Content creation & strategy",
      "Analytics & performance tracking",
      "Email marketing & automation",
      "WhatsApp marketing campaigns",
      "Influencer & creator partnerships",
      "Monthly performance reports",
      "Competitor analysis & monitoring",
    ],
    benefits: [
      { title: "Only Pay for What Works", desc: "We track every shilling spent and optimize campaigns continuously — no wasted spend on audiences that don't convert." },
      { title: "Multi-Channel Reach", desc: "Your customers are on Google, Instagram, Facebook, WhatsApp, and YouTube. We meet them where they are." },
      { title: "Content That Converts", desc: "We don't just create content — we create content designed to move people from discovery to decision." },
      { title: "Transparent Reporting", desc: "Monthly reports you can actually understand — traffic, leads, conversions, cost per acquisition, and what we're doing next." },
    ],
    process: [
      { step: "Audit & Strategy", desc: "We review your current digital presence, identify gaps, and build a channel strategy tailored to your goals and budget." },
      { step: "Audience Research", desc: "We define your ideal customer persona and map the content and channels best suited to reach them." },
      { step: "Campaign Setup", desc: "Ads, social accounts, tracking pixels, and analytics dashboards are all configured before launch." },
      { step: "Content Creation", desc: "We produce the creatives, copy, and content needed to run effective campaigns across every channel." },
      { step: "Launch & Optimize", desc: "Campaigns go live and we optimize continuously — adjusting bids, audiences, and creatives based on real performance data." },
      { step: "Report & Scale", desc: "Monthly reports with clear insights and recommendations for scaling what's working." },
    ],
    faqs: [
      { q: "How much should I budget for digital marketing?", a: "We recommend a minimum of KES 30,000/month for ad spend plus a management fee. Higher budgets drive faster results. We'll advise based on your goals." },
      { q: "How soon will I see results?", a: "Paid ads can drive traffic immediately. SEO typically shows meaningful results in 3–6 months. Social growth is gradual but compounds over time." },
      { q: "Do you manage social media accounts?", a: "Yes — we can handle content creation, scheduling, community management, and paid social for Instagram, Facebook, TikTok, and LinkedIn." },
      { q: "Can you run Google Ads for a local Kenyan business?", a: "Absolutely. Local Google Ads are one of the most cost-effective ways to reach high-intent buyers in your area." },
    ],
    metaTitle: "Digital Marketing Agency in Kenya | Milespace",
    metaDesc: "Results-driven digital marketing in Kenya. SEO, Google Ads, social media management, and content strategy for Kenyan businesses ready to grow.",
  },
  {
    slug: "ui-ux-design",
    id: "design",
    title: "UI/UX Design",
    icon: "🎨",
    tagline: "Interfaces that feel effortless and look extraordinary.",
    shortDesc: "Beautiful, intuitive interfaces backed by user research. We design products that are visually stunning and effortlessly usable.",
    longDesc: "Great design isn't just about aesthetics — it's about making the right things easy for the right people. We combine rigorous UX research with world-class visual design to create interfaces that delight users, reduce friction, and reflect your brand's ambition.",
    features: [
      "Website & App UI design",
      "User experience (UX) research",
      "Wireframing & Prototyping",
      "Brand identity design",
      "Design systems & Component libraries",
      "Figma design files (fully handed over)",
      "User flow mapping",
      "Accessibility-first design",
      "Responsive design (mobile, tablet, desktop)",
      "Interactive prototype walkthroughs",
    ],
    benefits: [
      { title: "Research-Backed Decisions", desc: "Every design decision is grounded in how your real users think, behave, and make decisions." },
      { title: "Design You Own", desc: "We deliver the full Figma source files — your design assets belong to you, not us." },
      { title: "Developer-Ready Specs", desc: "Our handover files include precise specs, component libraries, and annotations so development goes smoothly." },
      { title: "Brand Consistency", desc: "From typography to color to micro-interactions, every element reflects and reinforces your brand identity." },
    ],
    process: [
      { step: "Discovery & Research", desc: "We study your users, your competitors, and your brand to build a solid design foundation." },
      { step: "Information Architecture", desc: "We define the structure and navigation of your product before designing a single screen." },
      { step: "Wireframes", desc: "Low-fidelity wireframes establish layout and flow without distraction from visual style." },
      { step: "Visual Design", desc: "High-fidelity mockups bring your brand to life across every screen and state." },
      { step: "Interactive Prototype", desc: "We build a clickable prototype you can share with stakeholders and test with real users." },
      { step: "Developer Handover", desc: "Final Figma files with component libraries, design tokens, and annotations are delivered to your development team." },
    ],
    faqs: [
      { q: "Do you do brand identity design as well?", a: "Yes — logo design, brand guidelines, color systems, and typography are all part of our design offering." },
      { q: "What tools do you use?", a: "We design in Figma and deliver fully organized, annotated source files. We also use FigJam for user flow workshops." },
      { q: "Can you design for an existing product?", a: "Absolutely. We regularly do redesigns and design audits for existing apps and websites that need a fresh look or better usability." },
      { q: "Do you do user testing?", a: "Yes — we conduct remote user testing sessions and usability interviews as part of our UX research phase." },
    ],
    metaTitle: "UI/UX Design Agency in Kenya | Milespace",
    metaDesc: "Professional UI/UX design in Kenya. User research, wireframing, and high-fidelity Figma designs for websites, apps, and digital products.",
  },
  {
    slug: "seo-ai-optimization",
    id: "seo",
    title: "SEO & AI Optimization",
    icon: "🚀",
    tagline: "Dominate search rankings. Get found. Grow organically.",
    shortDesc: "Dominate search rankings and future-proof your visibility. We combine proven SEO fundamentals with cutting-edge AI tools to drive compounding organic growth.",
    longDesc: "Every day, potential customers search Google for exactly what you offer — and land on your competitors instead. We change that. Our SEO practice combines technical precision, strategic content, and AI-powered tools to build sustainable organic visibility that compounds month after month. We don't just chase rankings — we build the kind of authority that keeps delivering long after the initial investment.",
    features: [
      "Technical SEO audits & fixes",
      "Keyword research & content strategy",
      "On-page & off-page SEO",
      "AI-powered content generation & optimization",
      "Local SEO for Kenyan & global markets",
      "Schema markup & structured data",
      "Core Web Vitals & performance optimization",
      "Monthly SEO reporting & analytics",
      "Voice & AI search optimization",
      "Link building & authority growth",
    ],
    benefits: [
      { title: "Compounding Returns", desc: "Unlike paid ads that stop the moment you stop paying, SEO builds equity. Rankings achieved this month still drive traffic years from now." },
      { title: "AI-Accelerated Content", desc: "We use AI tools to research, draft, and optimize content at a scale and speed that would be impossible manually — then human editors refine every piece." },
      { title: "Local & Global Reach", desc: "We optimize for Kenyan local search (including Swahili-language queries) and international visibility for businesses targeting UK and US markets." },
      { title: "Future-Proof for AI Search", desc: "We structure your content to appear in AI-generated answers from Google SGE, ChatGPT, and Gemini — the next frontier of search visibility." },
    ],
    process: [
      { step: "SEO Audit & Discovery", desc: "We crawl your entire site, benchmark your current rankings, analyse your top competitors, and identify every technical and content gap holding you back." },
      { step: "Keyword & Competitor Research", desc: "Using AI-assisted tools, we build a full keyword map — primary targets, long-tail opportunities, local variations, and the emerging AI-search queries your customers are using." },
      { step: "Technical Fixes", desc: "Crawl errors, slow load times, missing meta tags, broken links, poor mobile experience, duplicate content — we fix everything that prevents Google from trusting your site." },
      { step: "Content Strategy & Production", desc: "We build a 90-day content calendar and produce SEO-optimized articles, service pages, and landing pages — written for humans, structured for algorithms." },
      { step: "AI & Generative Search Optimization", desc: "We optimize your content structure so you appear in AI-generated answers — Google's Search Generative Experience, ChatGPT browse results, and Gemini responses." },
      { step: "Link Building & Authority", desc: "We acquire high-quality backlinks from relevant Kenyan and industry publications to build your domain authority." },
      { step: "Track, Report & Scale", desc: "Monthly rank tracking, traffic analysis, and a forward roadmap that compounds your results each quarter." },
    ],
    faqs: [
      { q: "How long before I see SEO results?", a: "Technical fixes and on-page improvements can show movement in 4–8 weeks. Significant organic traffic growth typically takes 3–6 months of consistent work. SEO is a long game — but the returns are durable." },
      { q: "Do you write the content or do we?", a: "We handle all content production as part of our SEO retainer — keyword research, writing, optimization, and publishing. You review and approve before anything goes live." },
      { q: "What's the difference between SEO and Google Ads?", a: "Google Ads puts you at the top immediately but costs money per click. SEO builds organic rankings that drive traffic for free. We recommend using both — ads for immediate leads while SEO compounds in the background." },
      { q: "Do you do local SEO for Nairobi / Kenya?", a: "Yes — local SEO is a core specialty. We optimize Google Business Profiles, build local citations, and target location-specific keywords across Nairobi, Mombasa, Kisumu, and other markets." },
      { q: "What is AI Search Optimization?", a: "AI search optimization means structuring your content so it appears in answers generated by AI tools like ChatGPT, Gemini, and Google's AI Overviews — not just traditional 'blue link' search results." },
      { q: "Can you fix a site that was penalized by Google?", a: "Yes — we perform penalty audits, identify the cause (usually bad backlinks or thin content), and execute the recovery process including Google Search Console reconsideration requests." },
    ],
    metaTitle: "SEO & AI Optimization in Kenya | Milespace",
    metaDesc: "Professional SEO services in Kenya with AI-powered content optimization. Rank higher on Google, appear in AI search answers, and grow organic traffic sustainably.",
  },
  {
    slug: "ai-integration-automation",
    id: "ai",
    title: "AI Integration & Automation",
    icon: "🤖",
    tagline: "Work smarter. Automate the repetitive. Scale without limits.",
    shortDesc: "Custom AI solutions — from intelligent chatbots to full workflow automation — that save time, reduce costs, and create competitive advantage.",
    longDesc: "AI is no longer a luxury reserved for large corporations. Today, a Kenyan SME can deploy a WhatsApp bot that handles 200 customer queries a day, an automation that produces weekly reports in seconds, or an AI tool that qualifies and responds to leads faster than any human team. We design, build, and deploy AI solutions that solve your specific business problems — and actually work in the real world.",
    features: [
      "Custom AI chatbots & virtual assistants",
      "Business process automation (n8n, Zapier, Make)",
      "AI-powered data analysis & dashboards",
      "Predictive analytics & decision support",
      "Document processing & OCR automation",
      "AI content pipelines & copywriting tools",
      "CRM & sales automation with AI scoring",
      "WhatsApp & multi-channel AI agents",
      "OpenAI / Claude / Gemini API integrations",
      "AI readiness audits for SMEs",
    ],
    benefits: [
      { title: "24/7 Customer Engagement", desc: "An AI agent never sleeps. It can handle enquiries, qualify leads, send quotes, and follow up — around the clock, without fatigue." },
      { title: "Multiply Your Team's Output", desc: "AI handles the repetitive, time-consuming work so your team can focus on the high-value tasks that actually need human judgment." },
      { title: "Start Small, Scale Fast", desc: "We start with a focused automation that delivers immediate ROI, then build on it. You don't need a million-shilling AI budget to start." },
      { title: "Built for Kenya", desc: "Our AI solutions are designed for the Kenyan context — WhatsApp-first communication, M-Pesa flows, Swahili/English bilingual support, and local business logic." },
    ],
    process: [
      { step: "Business Needs Analysis", desc: "We map your workflows, identify the most painful repetitive tasks, and pinpoint where AI will deliver the fastest, highest ROI." },
      { step: "Solution Design", desc: "We architect the right AI stack for your budget and scale — from lightweight no-code automation to full LLM-powered custom systems." },
      { step: "Build & Integrate", desc: "We build the solution and connect it to your existing tools — CRM, website, WhatsApp, email, spreadsheets, or any API." },
      { step: "Training & Fine-tuning", desc: "Where needed, we fine-tune AI models or build custom knowledge bases (RAG) from your business data so the AI knows your products, policies, and tone." },
      { step: "Deploy & Monitor", desc: "We deploy to production, set up monitoring for accuracy and errors, and iterate based on real usage data from your customers." },
      { step: "Handover & Documentation", desc: "Your team gets clear documentation and training so you can manage, adjust, and expand the system confidently going forward." },
    ],
    faqs: [
      { q: "Do I need technical knowledge to use an AI system you build?", a: "No. We design for non-technical users. You manage your AI via simple dashboards or tools you already use — no coding required." },
      { q: "How much does AI integration cost?", a: "A simple chatbot or automation starts from KES 40,000. More complex multi-channel agents or data pipelines are quoted after a needs analysis. Most clients see full ROI within 3 months." },
      { q: "Can you build a WhatsApp bot for my business?", a: "Yes — WhatsApp AI agents are one of our most popular services. We build them using the official WhatsApp Business API and fine-tune them on your specific products and FAQs." },
      { q: "Is my business data safe?", a: "Yes. We follow data security best practices and can deploy AI solutions that process data within your own infrastructure if privacy requires it." },
      { q: "What AI models do you use?", a: "We primarily use OpenAI (GPT-4), Anthropic (Claude), and Google (Gemini) depending on the use case, budget, and performance requirements." },
      { q: "Can AI replace my customer service team?", a: "AI can handle 70–80% of routine queries automatically, freeing your team for complex issues that need human empathy and judgment. We recommend augmentation, not replacement." },
    ],
    metaTitle: "AI Integration & Automation in Kenya | Milespace",
    metaDesc: "Custom AI solutions for Kenyan businesses. WhatsApp bots, workflow automation, AI chatbots, and intelligent data pipelines. Start automating today.",
  },
];
