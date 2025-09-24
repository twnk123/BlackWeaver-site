
import { PricingTier, Addon, FeaturePack, ProcessStep, FaqItem, Complexity } from './types';

export const PRICING_TIERS: PricingTier[] = [
  {
    name: 'BASIC',
    price: 250,
    description: 'One scrolling page (≤6 sections) or 3 simple pages',
    features: ['Quick-Edit (text/images/links)', '1 contact form', '1 revision'],
    eta: '~3–4 business days',
  },
  {
    name: 'STANDARD',
    price: 500,
    description: '5–7 pages · CMS: 2 types (6 seeded items) · 2 forms',
    features: ['Choose 1 mini-feature: Bookings-Lite / Shop-Lite / Payment Links'],
    mostPopular: true,
    eta: '~3–5 business days',
  },
  {
    name: 'ADVANCED',
    price: 700,
    description: '8–12 pages · CMS: 3 types (15 seeded) · 3 forms',
    features: ['Choose 2 mini-features: Bookings-Lite, Shop-Lite, Payment Links, Auth-Lite, Notifications-Lite', 'SEO+ (enhanced previews/schema)'],
    eta: '~4–5 business days',
  },
  {
    name: 'PREMIUM',
    price: 950,
    description: '12–18 pages · CMS: 4 types (30 seeded) · 4 forms (conditional allowed)',
    features: ['Choose 3 mini-features (as above)', '+1 language included (total 2)', 'Handover walkthrough (recorded)', '2 revisions + 1 post-launch tweak'],
    eta: '~4–5 business days',
  },
];

export const MINI_FEATURES_TOOLTIPS: { [key: string]: string } = {
    'Bookings-Lite': 'one calendar + email confirms',
    'Shop-Lite': 'catalog + cart + Stripe/PayPal',
    'Payment Links': 'simple “Pay now”',
    'Auth-Lite': 'password-protected area',
    'Notifications-Lite': 'email notices'
};

export const ADDONS: Addon[] = [
  { name: 'Extra page (simple)', price: 50 },
  { name: 'Complex page', price: 100 },
  { name: 'Blog', price: 150 },
  { name: 'Extra CMS type', price: 150 },
  { name: 'Extra language', price: 150 },
  { name: 'Product pack +25', price: 100, description: '(cap 125)' },
  { name: 'Discount codes', price: 100 },
  { name: 'Subscriptions (Stripe)', price: 200 },
  { name: 'Bookings extra staff/service', price: 75, description: '(cap 10)' },
  { name: 'Analytics-Pro', price: 90 },
  { name: 'Cookie banner', price: 50 },
  { name: 'Newsletter hookup', price: 50 },
  { name: 'Live chat', price: 50 },
  { name: 'Email forward setup', price: 30 },
  { name: 'Priority ~48h', price: 120, description: '(when available)' },
];

export const FEATURE_PACKS_TEASER: FeaturePack[] = [
  { name: 'Payments', description: 'Take cards today via Stripe/PayPal' },
  { name: 'Sign-in', description: 'Email + password, reset, basic roles' },
  { name: 'Bookings', description: 'Simple calendar + email confirms' },
  { name: 'Shop-Lite', description: 'Small catalog + cart + checkout' },
  { name: 'Analytics', description: 'Pageviews & CTA clicks' },
  { name: 'Notifications', description: 'Email notices on forms/orders' },
];

export const ALL_FEATURE_PACKS: FeaturePack[] = [
    ...FEATURE_PACKS_TEASER,
    { name: 'CMS', description: 'Edit content safely' },
    { name: 'Admin-Lite', description: 'Basic guard + lists' },
    { name: 'File Uploads', description: 'Images with size limits' },
    { name: 'Search', description: 'Lightweight site search' },
    { name: 'Blog', description: 'Posts, tags, author' },
    { name: 'Pricing', description: 'Tier table with CTA' },
    { name: 'Testimonials', description: 'Showcase customer feedback' },
    { name: 'Multi-language', description: 'Reach a global audience' },
    { name: 'Social Feeds', description: 'Integrate Instagram or Twitter feeds' },
];


export const PROCESS_STEPS: ProcessStep[] = [
    { name: 'Configure', description: 'Pick shape, complexity, options' },
    { name: 'Scope Lock', description: 'Price & ETA freeze' },
    { name: 'Build & QA', description: 'Assemble, test, tighten' },
    { name: 'Handover', description: 'Repo, docs, runbook, 30-day bug-fix' },
];

export const PROCESS_STEPS_DETAILED: ProcessStep[] = [
    { name: '1. Configure & Quote', description: 'Use our configurator to select your project type, complexity, and desired feature packs. This gives us a clear blueprint of your needs and allows us to generate an instant, fixed-price quote and a reliable ETA. No surprises, no scope creep.'},
    { name: '2. Scope Lock & Kickoff', description: 'Once you approve the quote, we lock the scope. This means the price and timeline are frozen. We schedule a brief kickoff call to confirm goals and branding, then our team gets to work. You can relax knowing the project is fully defined and underway.'},
    { name: '3. Build, Review & QA', description: 'We assemble your application using our pre-vetted components and your specifications. You get a private link to review progress. We conduct rigorous internal quality assurance, testing for functionality, performance, and cross-browser compatibility.'},
    { name: '4. Handover & Ownership', description: 'Upon completion, we transfer the full source code repository to you—you own it, 100%. We provide a runbook for deployment and management, along with a 30-day bug-fix warranty. For premium tiers, we include a recorded walkthrough.'},
];

export const PROCESS_FAQS: FaqItem[] = [
    { question: "What’s included in a build?", answer: "Every build includes the selected features, full source code handover, a 30-day bug-fix warranty, and basic setup documentation. Hosting and domain are managed by you, but we provide a runbook for easy deployment on common platforms." },
    { question: "What does a 'revision' cover?", answer: "A revision covers feedback on the delivered build. This includes tweaks to styling, copy, images, and layout within the locked scope. It does not include adding new features or pages not originally scoped." },
    { question: "When is the project scope locked?", answer: "The scope is locked right after you approve the initial configuration and quote, before any development work begins. This ensures that the price and timeline we agreed upon are firm." },
    { question: "Do I really own the code?", answer: "Yes, completely. Upon final payment and handover, we transfer the entire codebase and all related assets to you. There are no licensing fees, no vendor lock-in. It's your asset to extend, modify, or host wherever you choose." },
];

export const COMPLEXITY_LEVELS: { [key in Complexity]: number } = {
    [Complexity.BASIC]: 0,
    [Complexity.STANDARD]: 1,
    [Complexity.ADVANCED]: 2,
    [Complexity.PREMIUM]: 3,
};

export const BW_TIME_DAYS: { [key in Complexity]: number } = {
    [Complexity.BASIC]: 3,
    [Complexity.STANDARD]: 4,
    [Complexity.ADVANCED]: 5,
    [Complexity.PREMIUM]: 5,
};

export const PRICING_MAP: { [key in Complexity]: number } = {
    [Complexity.BASIC]: 250,
    [Complexity.STANDARD]: 500,
    [Complexity.ADVANCED]: 700,
    [Complexity.PREMIUM]: 950,
};
