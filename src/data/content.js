import {
  Pill,
  Tablets,
  FlaskConical,
  HeartPulse,
  Syringe,
  Dumbbell,
  Sparkles,
  ShieldCheck,
  Factory,
  Timer,
  Award,
  Briefcase,
  Users,
  BadgeCheck,
  FileCheck2,
  Microscope,
  TestTubes,
} from 'lucide-react';

export const navLinks = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Products', href: '#products' },
  { label: 'Quality', href: '#quality' },
  { label: 'Contact', href: '#contact' },
];

export const stats = [
  { value: 35, suffix: '+', label: 'Products', desc: 'Across therapeutic categories' },
  { value: 300, suffix: '+', label: 'Distribution Network', desc: 'MP · UP · Rajasthan — Haryana coming soon' },
  { value: 50, suffix: '+', label: 'Hospitals Served', desc: 'Trusted by healthcare institutions' },
  { value: 24, suffix: '/7', label: 'Support', desc: 'Always-on customer care' },
];

export const products = [
  {
    icon: Tablets,
    title: 'Tablets',
    desc: 'A broad range of tablet formulations across therapeutic categories — sourced from GMP-certified manufacturers under strict QC.',
    accent: 'from-brand-500 to-brand-700',
  },
  {
    icon: Pill,
    title: 'Capsules',
    desc: 'Hard and soft gelatin capsules engineered for stability, bioavailability and patient comfort.',
    accent: 'from-accent-500 to-brand-600',
  },
  {
    icon: FlaskConical,
    title: 'Syrups',
    desc: 'Palatable oral suspensions and pediatric-friendly syrups with consistent dosing accuracy.',
    accent: 'from-brand-400 to-accent-500',
  },
  {
    icon: Syringe,
    title: 'Injections',
    desc: 'Sterile injectable formulations meeting pharmacopoeial standards for hospitals and clinics.',
    accent: 'from-brand-600 to-brand-800',
  },
  {
    icon: Dumbbell,
    title: 'Protein Powder',
    desc: 'Nutraceutical protein supplements supporting recovery, wellness and active lifestyles.',
    accent: 'from-accent-600 to-brand-700',
  },
];

export const productCatalogs = [
  {
    title: 'Jyke Pharma — Product Catalog',
    desc: 'Full range of tablets, capsules, syrups, injections & nutraceuticals',
    url: '/products/JYKEPharma_product_list_1.pdf',
  },
];

export const whyChooseUs = [
  {
    icon: Sparkles,
    title: 'Premium Raw Materials',
    desc: 'Every product begins with pharmaceutical-grade raw materials of the highest purity — no shortcuts, no compromises on what reaches the patient.',
  },
  {
    icon: Factory,
    title: 'MNC-Grade Manufacturing',
    desc: 'Our medicines are produced at the same WHO-GMP certified facilities that manufacture for leading global pharma MNCs — world-class quality, batch after batch.',
  },
  {
    icon: ShieldCheck,
    title: 'Stringent Quality Control',
    desc: 'Multi-stage QC checks from raw material to finished product, with every batch validated before it leaves the line.',
  },
  {
    icon: Timer,
    title: 'Reliable Supply',
    desc: 'On-time dispatch across our 300+ strong distribution network — predictable, uninterrupted supply for every customer.',
  },
  {
    icon: Briefcase,
    title: 'Industry Expertise',
    desc: 'Over a decade of pharma marketing and distribution experience across MP, UP, Rajasthan and beyond.',
  },
  {
    icon: Users,
    title: 'Customer Commitment',
    desc: 'Dedicated customer success teams and responsive after-sales support — we treat every relationship as long-term.',
  },
];

export const certifications = [
  {
    icon: BadgeCheck,
    title: 'Drug License',
    number: '20B/05/57/2012 · 21B/06/57/2012',
    validity: 'Valid till 29 Jan 2027',
    issuer: 'Food and Drugs Administration, Madhya Pradesh',
    desc: 'Retail drug sale licenses under Forms 20-B and 21-B of the Drugs & Cosmetics Rules — authorized to sell pharmaceutical products including scheduled drugs.',
    certUrl: '/certifications/drug_licance.jpg',
  },
  {
    icon: FileCheck2,
    title: 'FSSAI Registration',
    number: '21420570001572',
    validity: 'Valid till 03 Feb 2031',
    issuer: 'Govt. of Madhya Pradesh — Food & Drugs Administration',
    desc: 'Registered under the Food Safety and Standards Act, 2006 — covering nutraceutical, protein supplement and food products.',
    certUrl: '/certifications/fssai.png',
  },
];

export const aboutHighlights = [
  { value: '14+', label: 'Years of Experience' },
  { value: '35+', label: 'Products' },
  { value: '300+', label: 'Distribution Network' },
];

export const companyValues = [
  { title: 'Quality', desc: 'Uncompromising standards in every product we market and distribute.' },
  { title: 'Ethical Practices', desc: 'Transparent dealings with stockists, doctors and customers.' },
  { title: 'Customer Satisfaction', desc: 'Patient outcomes and customer trust at the centre of every decision.' },
  { title: 'Sustained Growth', desc: 'Steady, responsible expansion across the Indian pharma sector.' },
];

export const contactCards = [
  {
    icon: 'phone',
    title: 'Phone',
    primary: '+91 98272 42727',
    secondary: 'Mon – Sat, 9:00 – 18:00 IST',
  },
  {
    icon: 'mail',
    title: 'Email',
    primary: 'jykepharmaceutical@gmail.com',
    secondary: 'For enquiries, business & support',
  },
  {
    icon: 'pin',
    title: 'Registered Address',
    primary: '71, River View Colony, Morar',
    secondary: 'Gwalior, Madhya Pradesh – 474006',
  },
];

export const _icons = { TestTubes };
