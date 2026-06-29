export type ServiceCategory = 'Website Development' | 'App Development' | 'Custom Software' | 'Digital Marketing' | 'UI/UX Design' | 'SEO & AI Optimization' | 'AI Integration & Automation';

export interface PricingPackage {
  id: string;
  slug: string;
  category: ServiceCategory;
  name: string;
  priceKES: number;
  isMonthly?: boolean;
  features: string[];
  hasDiscount?: boolean;
  discountPercentage?: number;
}

export const pricingPackages: PricingPackage[] = [
  // Website Development
  {
    id: 'web-starter',
    slug: 'starter-wordpress',
    category: 'Website Development',
    name: 'Starter WordPress',
    priceKES: 50000,
    hasDiscount: true,
    discountPercentage: 10,
    features: [
      'Basic WordPress site',
      '5 pages',
      'Hosting setup',
      '1 month support',
      'Responsive design',
      'Contact form',
      'Basic SEO'
    ]
  },
  {
    id: 'web-business',
    slug: 'business-wordpress',
    category: 'Website Development',
    name: 'Business WordPress',
    priceKES: 65000,
    hasDiscount: true,
    discountPercentage: 10,
    features: [
      'Everything in Starter',
      '10 pages',
      'WooCommerce setup',
      'Advanced SEO',
      'Social media integration',
      '3 months support',
      'Custom email setup'
    ]
  },
  {
    id: 'web-premium',
    slug: 'premium-wordpress',
    category: 'Website Development',
    name: 'Premium WordPress',
    priceKES: 75000,
    hasDiscount: true,
    discountPercentage: 10,
    features: [
      'Everything in Business',
      '15 pages',
      'Custom theme',
      'E-commerce',
      'Payment integration',
      '6 months support',
      'Google Analytics',
      'Speed optimization'
    ]
  },
  {
    id: 'web-custom-starter',
    slug: 'custom-coded-starter',
    category: 'Website Development',
    name: 'Custom Coded Starter',
    priceKES: 80000,
    hasDiscount: true,
    discountPercentage: 10,
    features: [
      'Custom HTML/CSS/JS site',
      '5 pages',
      'Fully custom design',
      'Fast loading',
      '3 months support'
    ]
  },
  {
    id: 'web-custom-business',
    slug: 'custom-coded-business',
    category: 'Website Development',
    name: 'Custom Coded Business',
    priceKES: 120000,
    hasDiscount: true,
    discountPercentage: 10,
    features: [
      'React/Next.js site',
      'Unlimited pages',
      'CMS integration',
      'API integration',
      '6 months support',
      'Advanced animations'
    ]
  },
  {
    id: 'web-custom-enterprise',
    slug: 'custom-coded-enterprise',
    category: 'Website Development',
    name: 'Custom Coded Enterprise',
    priceKES: 200000,
    hasDiscount: true,
    discountPercentage: 10,
    features: [
      'Full custom web application',
      'Custom backend',
      'Database design',
      'User authentication',
      '12 months support',
      'Priority support'
    ]
  },

  // App Development
  {
    id: 'app-android-basic',
    slug: 'android-basic',
    category: 'App Development',
    name: 'Android Basic',
    priceKES: 80000,
    features: [
      'Basic Android app',
      '5 screens',
      'Local data storage',
      'Google Play submission'
    ]
  },
  {
    id: 'app-cross-basic',
    slug: 'cross-platform-basic',
    category: 'App Development',
    name: 'Cross-Platform Basic',
    priceKES: 120000,
    features: [
      'Android + iOS app',
      '8 screens',
      'API integration',
      'Push notifications',
      'App store submission'
    ]
  },
  {
    id: 'app-cross-pro',
    slug: 'cross-platform-pro',
    category: 'App Development',
    name: 'Cross-Platform Pro',
    priceKES: 200000,
    features: [
      '15+ screens',
      'Custom UI',
      'Backend API',
      'User auth',
      'Admin dashboard',
      '6 months support'
    ]
  },
  {
    id: 'app-enterprise',
    slug: 'enterprise-app',
    category: 'App Development',
    name: 'Enterprise App',
    priceKES: 350000,
    features: [
      'Full custom app',
      'Complex features',
      'Real-time features',
      'Analytics',
      '12 months support'
    ]
  },

  // Custom Software
  {
    id: 'software-basic',
    slug: 'basic-system',
    category: 'Custom Software',
    name: 'Basic System',
    priceKES: 150000,
    features: [
      'Web-based system',
      'User management',
      'Basic reports',
      '3 months support'
    ]
  },
  {
    id: 'software-business',
    slug: 'business-system',
    category: 'Custom Software',
    name: 'Business System',
    priceKES: 300000,
    features: [
      'Multi-module system',
      'Advanced reporting',
      'Role-based access',
      'Integrations',
      '6 months support'
    ]
  },
  {
    id: 'software-enterprise',
    slug: 'enterprise-system',
    category: 'Custom Software',
    name: 'Enterprise System',
    priceKES: 500000,
    features: [
      'Full enterprise solution',
      'Custom modules',
      'API integrations',
      'Data analytics',
      '12 months support',
      'SLA'
    ]
  },

  // Digital Marketing
  {
    id: 'marketing-starter',
    slug: 'marketing-starter',
    category: 'Digital Marketing',
    name: 'Starter',
    priceKES: 15000,
    isMonthly: true,
    features: [
      '3 social platforms',
      '12 posts/month',
      'Basic analytics'
    ]
  },
  {
    id: 'marketing-growth',
    slug: 'marketing-growth',
    category: 'Digital Marketing',
    name: 'Growth',
    priceKES: 30000,
    isMonthly: true,
    features: [
      '5 platforms',
      '20 posts/month',
      'Paid ads management (KES 10k ad budget)',
      'Monthly report'
    ]
  },
  {
    id: 'marketing-pro',
    slug: 'marketing-pro',
    category: 'Digital Marketing',
    name: 'Pro',
    priceKES: 50000,
    isMonthly: true,
    features: [
      'Full management',
      '30 posts/month',
      'Google Ads + Meta Ads',
      'SEO',
      'Weekly reports',
      'Content creation'
    ]
  },

  // UI/UX Design
  {
    id: 'design-landing',
    slug: 'landing-page-design',
    category: 'UI/UX Design',
    name: 'Landing Page Design',
    priceKES: 25000,
    features: [
      'Single page design',
      'Mobile responsive mockup',
      'Figma file'
    ]
  },
  {
    id: 'design-website',
    slug: 'website-design',
    category: 'UI/UX Design',
    name: 'Website Design',
    priceKES: 50000,
    features: [
      'Full website UI',
      'Up to 10 pages',
      'Responsive',
      'Component library'
    ]
  },
  {
    id: 'design-app',
    slug: 'app-design',
    category: 'UI/UX Design',
    name: 'App Design',
    priceKES: 80000,
    features: [
      'Complete app UI/UX',
      'User flow diagrams',
      'Interactive prototype',
      'Handoff files'
    ]
  },

  // SEO & AI Optimization
  {
    id: 'seo-starter',
    slug: 'seo-starter',
    category: 'SEO & AI Optimization',
    name: 'SEO Starter',
    priceKES: 13500,
    isMonthly: true,
    features: [
      'Full technical SEO audit',
      'Up to 15 keywords tracked',
      'On-page optimisation (up to 5 pages)',
      'Google Business Profile setup & optimisation',
      'Monthly rankings & traffic report',
      'Core Web Vitals fixes',
      'Basic schema markup',
    ]
  },
  {
    id: 'seo-growth',
    slug: 'seo-growth',
    category: 'SEO & AI Optimization',
    name: 'SEO Growth',
    priceKES: 26250,
    isMonthly: true,
    hasDiscount: true,
    discountPercentage: 10,
    features: [
      'Everything in Starter',
      'Up to 50 keywords tracked',
      'On-page optimisation (up to 15 pages)',
      '2 AI-optimised blog articles/month',
      'Local SEO & citation building',
      'Off-page link building (5 links/month)',
      'Competitor gap analysis',
      'AI search (SGE/Gemini) optimisation',
      'Bi-weekly progress calls',
    ]
  },
  {
    id: 'seo-agency',
    slug: 'seo-agency',
    category: 'SEO & AI Optimization',
    name: 'SEO Agency',
    priceKES: 48750,
    isMonthly: true,
    features: [
      'Everything in Growth',
      'Unlimited keywords tracked',
      '5 AI-optimised articles/month',
      'Advanced link building (15 links/month)',
      'Full content strategy & calendar',
      'Landing page creation & optimisation',
      'Google Ads SEO alignment',
      'Weekly reports & dedicated Slack channel',
      'Penalty recovery (if applicable)',
    ]
  },

  // AI Integration & Automation
  {
    id: 'ai-starter',
    slug: 'ai-starter',
    category: 'AI Integration & Automation',
    name: 'AI Starter',
    priceKES: 45000,
    features: [
      'Single-channel AI chatbot (WhatsApp or web)',
      'Up to 50 custom FAQ responses',
      'Basic lead capture & routing',
      'Integration with 1 existing tool (CRM, email, spreadsheet)',
      'Arabic / English / Swahili language support',
      '30 days post-launch support',
    ]
  },
  {
    id: 'ai-business',
    slug: 'ai-business',
    category: 'AI Integration & Automation',
    name: 'AI Business',
    priceKES: 120000,
    hasDiscount: true,
    discountPercentage: 10,
    features: [
      'Multi-channel AI agent (WhatsApp + web + email)',
      'Custom knowledge base from your business data (RAG)',
      'Lead qualification & automated follow-up sequences',
      'Integration with up to 3 tools (CRM, M-Pesa, calendar, etc.)',
      'Workflow automation (n8n / Make / Zapier)',
      'AI-generated weekly summary reports',
      'Admin dashboard to monitor conversations',
      '60 days post-launch support',
    ]
  },
  {
    id: 'ai-enterprise',
    slug: 'ai-enterprise',
    category: 'AI Integration & Automation',
    name: 'AI Enterprise',
    priceKES: 280000,
    features: [
      'Everything in Business',
      'Full end-to-end process automation audit',
      'Custom LLM fine-tuning or dedicated RAG pipeline',
      'Unlimited tool & API integrations',
      'AI-powered analytics & predictive dashboards',
      'Document OCR & automated processing',
      'Dedicated AI agent with persona & brand voice',
      'SLA with priority support',
      '6 months post-launch support & iteration',
    ]
  }
];
