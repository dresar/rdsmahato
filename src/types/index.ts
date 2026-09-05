export interface NavItem {
  label: string;
  href: string;
  children?: NavItem[];
}

export interface Program {
  id: string;
  title: string;
  slug: string;
  description: string;
  level: string;
  duration: string;
  icon: string;
  features: string[];
  image: string;
}

export interface Facility {
  id: string;
  title: string;
  slug: string;
  description: string;
  icon: string;
  image: string;
  features: string[];
}

export interface BlogPost {
  id: string;
  title: string;
  slug: string;
  excerpt: string;
  content: string;
  category: string;
  author: string;
  date: string;
  image: string;
  readTime: string;
}

export interface GalleryItem {
  id: string;
  title: string;
  category: string;
  image: string;
  aspectRatio: 'square' | 'portrait' | 'landscape';
}

export interface ScheduleItem {
  time: string;
  activity: string;
  type: 'ibadah' | 'akademik' | 'ekstrakurikuler' | 'istirahat';
}

export interface Extracurricular {
  id: string;
  title: string;
  description: string;
  icon: string;
  category: string;
}

export interface OrganizationMember {
  id: string;
  name: string;
  position: string;
  level: number;
  parentId?: string;
}

export interface TimelineEvent {
  year: string;
  title: string;
  description: string;
}

export interface RegistrationRequirement {
  id: string;
  title: string;
  description: string;
}

export interface RegistrationFee {
  item: string;
  amount: string;
}

export interface ContactInfo {
  address: string;
  phone: string;
  email: string;
  whatsapp: string;
  maps: string;
  socialMedia: {
    instagram: string;
    facebook: string;
    youtube: string;
  };
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  content: string;
  avatar: string;
}

export interface Statistic {
  label: string;
  value: string;
  icon: string;
}

export interface Notification {
  id: string;
  title: string;
  message: string;
  date: string;
  read: boolean;
  type: 'info' | 'success' | 'warning';
}

export interface RegistrationStatus {
  currentStep: number;
  steps: { label: string; status: 'done' | 'current' | 'upcoming'; date?: string }[];
  summary: { label: string; value: string }[];
}

export interface SantriScheduleItem {
  time: string;
  activity: string;
  type: 'ibadah' | 'akademik' | 'ekstrakurikuler' | 'istirahat';
  day: string;
}
