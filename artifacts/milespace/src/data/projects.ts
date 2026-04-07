export interface Project {
  id: string;
  client: string;
  category: 'website' | 'app' | 'software';
  description: string;
  url: string;
  featured: boolean;
  tags: string[];
}

export const projects: Project[] = [
  {
    id: '1',
    client: 'Azania Africa',
    category: 'website',
    description: 'A professional corporate website for Azania Africa, built for impact and reach across the continent.',
    url: 'https://www.azaniafrica.com/',
    featured: true,
    tags: ['Corporate', 'Africa'],
  },
  {
    id: '2',
    client: 'Njane Company',
    category: 'website',
    description: 'Clean, modern business website for Njane Company showcasing their services and driving client engagement.',
    url: 'https://njanecompany.com/',
    featured: true,
    tags: ['Business', 'Corporate'],
  },
  {
    id: '3',
    client: 'Malkia Africa',
    category: 'website',
    description: 'Elegant and powerful website for Malkia Africa, reflecting strength, culture, and African excellence.',
    url: 'https://www.malkiaafrica.com/',
    featured: true,
    tags: ['Corporate', 'Africa'],
  },
  {
    id: '4',
    client: 'Sunbeam Innovations',
    category: 'website',
    description: 'Dynamic business website for Sunbeam Innovations, designed to attract leads and communicate value.',
    url: 'https://sunbeaminnovations.com/',
    featured: false,
    tags: ['Business', 'Innovations'],
  },
  {
    id: '5',
    client: 'Hu-Jambo',
    category: 'website',
    description: 'A vibrant, engaging website for Hu-Jambo, connecting communities with a fresh digital presence.',
    url: 'https://hu-jambo.com/',
    featured: false,
    tags: ['Community', 'Lifestyle'],
  },
  {
    id: '6',
    client: 'Biblical Financial Courses',
    category: 'website',
    description: 'Educational platform website for Biblical Financial Courses, designed for course discovery and enrollment.',
    url: 'https://biblicalfinancialcourses.com/',
    featured: false,
    tags: ['Education', 'E-learning'],
  },
  {
    id: '7',
    client: 'UIP Sacco',
    category: 'software',
    description: 'Professional web presence for UIP Sacco, building trust and enabling member engagement online.',
    url: 'https://uipsacco.com/',
    featured: false,
    tags: ['Finance', 'SACCO'],
  },
  {
    id: '8',
    client: 'Vision Tech Ventures',
    category: 'website',
    description: 'Tech-forward website for Vision Tech Ventures, showcasing innovative technology solutions in Kenya.',
    url: 'https://www.visiontechventures.co.ke/',
    featured: false,
    tags: ['Technology', 'Kenya'],
  },
  {
    id: '9',
    client: 'Nurses4Nurses Worldwide',
    category: 'website',
    description: 'A global platform website for Nurses4Nurses Worldwide, connecting nursing professionals across the world.',
    url: 'https://nurses4nursesworldwide.com/',
    featured: false,
    tags: ['Healthcare', 'Global'],
  },
];
