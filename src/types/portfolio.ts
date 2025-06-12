export interface Portfolio {
  id: string;
  userId: string;
  title: string;
  description: string;
  template: string;
  customDomain?: string;
  isPublished: boolean;
  createdAt: Date;
  updatedAt: Date;
  settings: PortfolioSettings;
  sections: PortfolioSection[];
}

export interface PortfolioSettings {
  primaryColor: string;
  secondaryColor: string;
  fontFamily: string;
  logoUrl?: string;
  favicon?: string;
  seoTitle: string;
  seoDescription: string;
  socialLinks: {
    twitter?: string;
    linkedin?: string;
    github?: string;
    instagram?: string;
  };
}

export interface PortfolioSection {
  id: string;
  type: 'hero' | 'about' | 'projects' | 'skills' | 'contact' | 'testimonials';
  title: string;
  content: any;
  order: number;
  isVisible: boolean;
}

export interface Project {
  id: string;
  title: string;
  description: string;
  imageUrl: string;
  technologies: string[];
  liveUrl?: string;
  githubUrl?: string;
  featured: boolean;
}

export interface Skill {
  id: string;
  name: string;
  level: number;
  category: string;
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  company: string;
  content: string;
  imageUrl?: string;
  rating: number;
}