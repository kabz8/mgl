export type ServiceCategory = 'Website Development' | 'App Development' | 'Custom Software' | 'Digital Marketing' | 'UI/UX Design';

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
  }
];
