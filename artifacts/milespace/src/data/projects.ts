export interface Project {
  id: string;
  client: string;
  category: 'website' | 'app' | 'software';
  description: string;
  url: string; // live URL for iframe preview and "View Live" button
  featured: boolean; // true = show on homepage (pick 3 featured)
  tags: string[];
}

export const projects: Project[] = [
  {
    id: '1',
    client: 'EcoGrow Solutions',
    category: 'website',
    description: 'A modern corporate website with custom design and CMS integration.',
    url: 'https://example.com',
    featured: true,
    tags: ['WordPress', 'Corporate'],
  },
  {
    id: '2',
    client: 'Urban Rides App',
    category: 'app',
    description: 'Cross-platform mobile application for a ride-sharing service.',
    url: 'https://example.org',
    featured: true,
    tags: ['React Native', 'Mobile'],
  },
  {
    id: '3',
    client: 'AfriTech Inventory',
    category: 'software',
    description: 'Comprehensive inventory management system for retail chains.',
    url: 'https://example.net',
    featured: true,
    tags: ['Next.js', 'Dashboard'],
  },
  {
    id: '4',
    client: 'FreshBites Delivery',
    category: 'website',
    description: 'E-commerce platform for a local food delivery service.',
    url: 'https://example.com/ecommerce',
    featured: false,
    tags: ['WooCommerce', 'E-commerce'],
  },
  {
    id: '5',
    client: 'HealthConnect Portal',
    category: 'software',
    description: 'Patient management and booking system for clinics.',
    url: 'https://example.org/health',
    featured: false,
    tags: ['React', 'Healthcare'],
  },
  {
    id: '6',
    client: 'LearnSmart App',
    category: 'app',
    description: 'Educational platform for students with interactive courses.',
    url: 'https://example.net/learn',
    featured: false,
    tags: ['Flutter', 'Education'],
  },
];
