export interface LeadFormData {
  nome: string;
  email: string;
  whatsapp: string;
  objetivo: string;
  lgpdConsent: boolean;
}

export interface ChatMessage {
  id: string;
  sender: 'user' | 'assistant';
  text: string;
  timestamp: string;
}

export interface ExperienceItem {
  id: string;
  title: string;
  category: string;
  image: string;
  description: string;
}

export interface ComfortItem {
  id: string;
  iconName: string;
  label: string;
  description?: string;
}

export interface DistanceItem {
  id: string;
  destination: string;
  distanceTime: string;
  iconName: string;
  tag?: string;
}

export interface FAQItem {
  id: string;
  question: string;
  answer: string;
  category?: string;
}

export interface ChecklistSectionData {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  checkpoints: string[];
  images: {
    url: string;
    caption: string;
  }[];
}
