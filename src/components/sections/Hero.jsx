import { motion } from 'framer-motion';
import {
  ArrowRight,
  Phone,
  ShieldCheck,
  Pill,
  HeartPulse,
  FlaskConical,
  Activity,
  BadgeCheck,
} from 'lucide-react';
import { fadeUp, stagger } from '../../lib/motion';

export default function Hero() {
  return (
    <section
      id="home"
      className="relative isolate overflow-hidden pt-32 md:pt-40 pb-20 md:pb-28 bg-hero-radial"
    >
      <div className="absolute inset-0 -z-10 grid-pattern mask-fade-b opacity-60" />
      <div className="absolute -top-32 -right-24 -z-10 h-[480px] w-[480px] rounded-full bg-brand-200/40 blur-3xl animate-float" />
      <div className="absolute -bottom-40 -left-24 -z-10 h-[420px] w-[420px] rounded-full bg-accent-100/60 blur-3xl animate-float [animation-delay:2s]" />

      <div className="container-px">
        <div className="grid items-center gap-14 lg:grid-cols-12">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={stagger}
            className="lg:col-span-7"
          >
            <motion.span variants={fadeUp} className="chip">
              <ShieldCheck className="h-3.5 w-3.5" />Trusted Pharma Company
            </motion.span>

            <motion.h1
              variants={fadeUp}
              className="heading-xl mt-6"
            >
              Advancing Healthcare With{' '}
              <span className="grad-text">Trust &amp; Innovation</span>
            </motion.h1>

            <motion.p variants={fadeUp} className="lede mt-6 max-w-xl">
              Founded in Bengaluru in 2012 and now headquartered in Gwalior,
              Jyke Pharmaceutical is a pharma marketing and distribution
              company committed to quality healthcare products, ethical
              business practices and lasting customer trust.
            </motion.p>

            <motion.div
              variants={fadeUp}
              className="mt-9 flex flex-col sm:flex-row items-stretch sm:items-center gap-3"
            >
              <a href="#products" className="btn-primary">
                Explore Products <ArrowRight className="h-4 w-4" />
              </a>
              <a href="#contact" className="btn-secondary">
                <Phone className="h-4 w-4" /> Contact Us
              </a>
            </motion.div>

            <motion.div
              variants={fadeUp}
              className="mt-12 grid grid-cols-3 max-w-md gap-6"
            >
              {[
                ['14+', 'Years'],
                ['35+', 'Products'],
                ['300+', 'Network'],
              ].map(([v, l]) => (
                <div key={l}>
                  <p className="text-2xl md:text-3xl font-bold text-ink-900">
                    {v}
                  </p>
                  <p className="text-xs uppercase tracking-widest text-ink-500 mt-1">
                    {l}
                  </p>
                </div>
              ))}
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: 'easeOut', delay: 0.15 }}
            className="lg:col-span-5 relative"
          >
            <HeroVisual />
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function HeroVisual() {
  return (
    <div className="relative mx-auto aspect-square w-full max-w-md">
      <div className="absolute inset-0 rounded-[2.5rem] bg-brand-gradient shadow-glow rotate-3" />
      <div className="absolute inset-2 rounded-[2.2rem] bg-white shadow-card grid place-items-center overflow-hidden">
        <div className="absolute inset-0 grid-pattern opacity-50" />

        <motion.div
          animate={{ y: [0, -10, 0] }}
          transition={{ repeat: Infinity, duration: 6, ease: 'easeInOut' }}
          className="relative h-44 w-44 rounded-full bg-gradient-to-br from-brand-100 to-accent-100 grid place-items-center"
        >
          <div className="h-32 w-32 rounded-full bg-white shadow-glow grid place-items-center">
            <HeartPulse className="h-14 w-14 text-brand-700" strokeWidth={1.7} />
          </div>
        </motion.div>

        <FloatingTile
          icon={Pill}
          label="35+ Products"
          className="top-6 left-6"
          delay={0}
        />
        <FloatingTile
          icon={FlaskConical}
          label="R&D Driven"
          className="bottom-8 left-4"
          delay={1}
        />
        <FloatingTile
          icon={Activity}
          label="24/7 Care"
          className="top-10 right-4"
          delay={0.6}
        />
        <FloatingTile
          icon={BadgeCheck}
          label="FSSAI Licensed"
          className="bottom-6 right-6"
          delay={1.4}
        />
      </div>
    </div>
  );
}

function FloatingTile({ icon: Icon, label, className = '', delay = 0 }) {
  return (
    <motion.div
      animate={{ y: [0, -8, 0] }}
      transition={{ repeat: Infinity, duration: 5, ease: 'easeInOut', delay }}
      className={`absolute z-10 flex items-center gap-2 rounded-2xl border border-ink-100 bg-white/95 backdrop-blur px-3 py-2 shadow-soft ${className}`}
    >
      <span className="icon-tile h-9 w-9">
        <Icon className="h-4 w-4" />
      </span>
      <span className="text-xs font-semibold text-ink-900">{label}</span>
    </motion.div>
  );
}
