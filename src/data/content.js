import {
  Pill,
  Tablets,
  FlaskConical,
  HeartPulse,
  Stethoscope,
  Truck,
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
  { value: 500, suffix: '+', label: 'Products', desc: 'Across therapeutic categories' },
  { value: 50, suffix: '+', label: 'Partners', desc: 'Global supply network' },
  { value: 100, suffix: '+', label: 'Healthcare Clients', desc: 'Hospitals & institutions' },
  { value: 24, suffix: '/7', label: 'Support', desc: 'Always-on customer care' },
];

export const products = [
  {
    icon: Pill,
    title: 'Tablets',
    desc: 'High-precision tablet formulations across therapeutic categories with strict QC compliance.',
    accent: 'from-brand-500 to-brand-700',
  },
  {
    icon: Tablets,
    title: 'Capsules',
    desc: 'Hard and soft gelatin capsules engineered for stability, bioavailability and patient comfort.',
    accent: 'from-accent-500 to-brand-600',
  },
  {
    icon: FlaskConical,
    title: 'Syrups',
    desc: 'Palatable oral suspensions and pediatric formulations with consistent dosing accuracy.',
    accent: 'from-brand-400 to-accent-500',
  },
  {
    icon: HeartPulse,
    title: 'Healthcare Solutions',
    desc: 'End-to-end clinical, wellness and chronic-care portfolios for institutions and pharmacies.',
    accent: 'from-brand-600 to-brand-800',
  },
  {
    icon: Stethoscope,
    title: 'Generic Medicines',
    desc: 'Affordable, bioequivalent generics manufactured under stringent GMP standards.',
    accent: 'from-accent-600 to-brand-700',
  },
  {
    icon: Truck,
    title: 'Pharmaceutical Distribution',
    desc: 'Cold-chain ready logistics with full traceability across India and partner markets.',
    accent: 'from-brand-500 to-accent-500',
  },
];

export const whyChooseUs = [
  { icon: ShieldCheck, title: 'Quality Assurance', desc: 'Multi-stage QA from raw material to finished product.' },
  { icon: Factory, title: 'Certified Manufacturing', desc: 'WHO-GMP compliant facilities with audited cleanrooms.' },
  { icon: Timer, title: 'Timely Delivery', desc: 'On-time dispatch and predictable supply continuity.' },
  { icon: HeartPulse, title: 'Trusted Healthcare', desc: 'Evidence-led formulations clinicians recommend.' },
  { icon: Briefcase, title: 'Industry Expertise', desc: 'Decades of pharma know-how across formulations.' },
  { icon: Users, title: 'Customer Commitment', desc: 'Dedicated partner success and clinical support.' },
];

export const certifications = [
  { icon: BadgeCheck, title: 'GMP Certified', desc: 'Good Manufacturing Practices across every production line.' },
  { icon: Award, title: 'ISO Standards', desc: 'ISO 9001:2015 quality management for global readiness.' },
  { icon: FileCheck2, title: 'Quality Testing', desc: 'Validated analytical methods and stability programs.' },
  { icon: Microscope, title: 'Research & Development', desc: 'In-house R&D for formulation and process innovation.' },
];

export const aboutHighlights = [
  { value: '15+', label: 'Years of Experience' },
  { value: '20+', label: 'Therapeutic Areas' },
  { value: '100%', label: 'Quality Commitment' },
];

export const companyValues = [
  { title: 'Quality', desc: 'Uncompromising standards from molecule to medicine.' },
  { title: 'Innovation', desc: 'R&D-driven formulations for tomorrow’s healthcare.' },
  { title: 'Affordability', desc: 'Accessible medicines without compromising efficacy.' },
  { title: 'Excellence', desc: 'A people-first culture of healthcare leadership.' },
];

export const contactCards = [
  {
    icon: 'phone',
    title: 'Phone',
    primary: '+91 98765 43210',
    secondary: 'Mon – Sat, 9:00 – 18:00 IST',
  },
  {
    icon: 'mail',
    title: 'Email',
    primary: 'care@jykepharma.com',
    secondary: 'Business: sales@jykepharma.com',
  },
  {
    icon: 'pin',
    title: 'Head Office',
    primary: 'Plot 14, Pharma City, MIDC',
    secondary: 'Mumbai, Maharashtra 400072, India',
  },
];

export const _icons = { TestTubes };
