
export interface PricingTier {
  name: string;
  price: number;
  description: string;
  features: string[];
  mostPopular?: boolean;
  eta: string;
}

export interface Addon {
  name: string;
  price: number;
  description?: string;
}

export interface FeaturePack {
  name: string;
  description: string;
}

export interface ProcessStep {
    name: string;
    description: string;
}

export interface FaqItem {
    question: string;
    answer: string;
}

export enum Complexity {
    BASIC = 'Basic',
    STANDARD = 'Standard',
    ADVANCED = 'Advanced',
    PREMIUM = 'Premium'
}
