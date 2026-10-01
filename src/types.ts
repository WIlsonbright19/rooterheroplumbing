export type CategoryType = 'all' | 'product' | 'brand' | 'fintech' | 'webflow';

export interface CaseStudy {
  id: string;
  title: string;
  category: CategoryType;
  categoryLabel: string;
  client: string;
  year: string;
  timeline: string;
  summary: string;
  impact: string;
  impactLabel: string;
  coverImage: string;
  collageSecondaryImage: string;
  collageAccentTag: string;
  tags: string[];
  challenge: string;
  solution: string;
  deliverables: string[];
  testimonial?: {
    quote: string;
    author: string;
    role: string;
    company: string;
  };
}

export interface ServiceItem {
  id: string;
  number: string;
  title: string;
  description: string;
  deliverables: string[];
  timeline: string;
  team: string;
  keyMetric: string;
  iconName: 'layout' | 'pen' | 'code' | 'rocket';
}

export interface TestimonialItem {
  id: string;
  quote: string;
  author: string;
  role: string;
  company: string;
  metric: string;
  metricLabel: string;
  avatar: string;
  rating?: number;
  serviceCategory?: string;
  source?: string;
  date?: string;
}

export interface BookingFormData {
  serviceType: string;
  meetingDuration: '30' | '45';
  date: string;
  timeSlot: string;
  timezone: string;
  fullName: string;
  email: string;
  company: string;
  budget: string;
  projectBrief: string;
}
