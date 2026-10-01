export type ProjectCategory = 'all' | 'saas' | 'healthcare' | 'consulting' | 'social';

export type SocialPlatform = 'linkedin' | 'x' | 'instagram' | 'facebook';

export interface SocialProfile {
  platform: SocialPlatform;
  label: string;
  url: string;
}

export interface RankedKeyword {
  keyword: string;
  url: string;
  group: string;
  badge: string;
}

export interface Project {
  id: string;
  title: string;
  category: 'SaaS & Technology' | 'Healthcare & Medical' | 'Consulting & B2B' | 'Social Media Marketing';
  filterKey: 'saas' | 'healthcare' | 'consulting' | 'social';
  imageUrl: string;
  tagline: string;
  client: string;
  year?: string;
  summary: string;
  challenge: string;
  solution: string;
  solutionHeading?: string;
  deliverables: string[];
  liveUrl?: string;
  accentColor: string;
  rankedKeywords?: RankedKeyword[];
  socialProfiles?: SocialProfile[];
}

export interface SocialMediaSection {
  title: string;
  text: string;
  tools: string[];
  responsibilities: string[];
}

export interface Service {
  id: string;
  title: string;
  iconName: 'monitor' | 'pen-tool' | 'smile' | 'pencil';
  description: string;
  tags: string[];
}

export interface ExperienceItem {
  id: string;
  period: string;
  location: string;
  company: string;
  role: string;
  points: string[];
}

export interface ResumeDocument {
  url: string;
  fileName: string;
  displayName: string;
  fileType: 'PDF';
  fileSize: string;
  updated: string;
  headline: string;
  summary: string;
  highlights: string[];
}

export interface Statistic {
  value: string;
  label: string;
  sublabel?: string;
}

export interface Testimonial {
  quote: string;
  author: string;
  role: string;
  company: string;
  avatarUrl: string;
}

export interface SocialLink {
  name: string;
  platform: 'linkedin' | 'email' | 'website';
  url: string;
}
