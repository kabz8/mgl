export interface Project {
  id: string;
  client: string;
  category: 'website' | 'app' | 'software';
  description: string;
  url: string;
  featured: boolean;
  tags: string[];
  noPreview?: boolean;
}

export const projects: Project[] = [
  {
    id: '1',
    client: 'Azani Africa',
    category: 'website',
    description: 'A bold e-commerce and brand website for Azani Africa — a vibrant African fashion label celebrating culture through contemporary clothing designs.',
    url: 'https://www.azaniafrica.com/',
    featured: true,
    tags: ['Fashion', 'E-commerce', 'Africa'],
  },
  {
    id: '2',
    client: 'Moods Fragrances',
    category: 'website',
    description: 'Luxury fragrance brand website for Moods Fragrances — an immersive, elegant online presence designed to captivate and convert fragrance enthusiasts.',
    url: 'https://moodsfragrances.co.ke/',
    featured: true,
    tags: ['Luxury', 'E-commerce', 'Lifestyle'],
  },
  {
    id: '3',
    client: 'Malkia Africa',
    category: 'website',
    description: 'A sophisticated brand website for Malkia Africa — a premium African makeup artist brand celebrating beauty, culture, and self-expression.',
    url: 'https://www.malkiaafrica.com/',
    featured: true,
    tags: ['Beauty', 'Makeup', 'Africa'],
  },
  {
    id: '4',
    client: 'Njane Company',
    category: 'website',
    description: 'Clean, modern business website for Njane Company showcasing their services and driving client engagement.',
    url: 'https://njanecompany.com/',
    featured: false,
    tags: ['Business', 'Corporate'],
  },
  {
    id: '5',
    client: 'Milespace Sacco App',
    category: 'app',
    description: 'A fully-featured SACCO management mobile app — enabling members to manage savings, loans, contributions, and statements right from their phone.',
    url: '#',
    featured: false,
    tags: ['Mobile App', 'Finance', 'SACCO'],
    noPreview: true,
  },
  {
    id: '6',
    client: 'Afyacode',
    category: 'app',
    description: 'An AI-powered health and nutrition app focused on diabetes management — analyzes meals using AI, tracks glucose-impacting foods, and guides healthier lifestyle choices.',
    url: '#',
    featured: false,
    tags: ['Mobile App', 'AI', 'Healthcare', 'Diabetes'],
    noPreview: true,
  },
  {
    id: '7',
    client: 'Hu-Jambo',
    category: 'website',
    description: 'A vibrant, engaging website for Hu-Jambo, connecting communities with a fresh digital presence.',
    url: 'https://hu-jambo.com/',
    featured: false,
    tags: ['Community', 'Lifestyle'],
  },
  {
    id: '8',
    client: 'Biblical Financial Courses',
    category: 'website',
    description: 'Educational platform website for Biblical Financial Courses, designed for course discovery and enrollment.',
    url: 'https://biblicalfinancialcourses.com/',
    featured: false,
    tags: ['Education', 'E-learning'],
  },
  {
    id: '9',
    client: 'UIP Sacco',
    category: 'software',
    description: 'Professional web presence for UIP Sacco, building trust and enabling member engagement online.',
    url: 'https://uipsacco.com/',
    featured: false,
    tags: ['Finance', 'SACCO'],
  },
  {
    id: '10',
    client: 'Vision Tech Ventures',
    category: 'website',
    description: 'Tech-forward website for Vision Tech Ventures, showcasing innovative technology solutions in Kenya.',
    url: 'https://www.visiontechventures.co.ke/',
    featured: false,
    tags: ['Technology', 'Kenya'],
  },
  {
    id: '11',
    client: 'Nurses4Nurses Worldwide',
    category: 'website',
    description: 'A global platform website for Nurses4Nurses Worldwide, connecting nursing professionals across the world.',
    url: 'https://nurses4nursesworldwide.com/',
    featured: false,
    tags: ['Healthcare', 'Global'],
  },
];
