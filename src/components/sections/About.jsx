import { motion } from 'framer-motion';
import { Target, Eye, CheckCircle2, Sparkles } from 'lucide-react';
import { fadeUp, viewportOnce, stagger } from '../../lib/motion';
import { aboutHighlights, companyValues } from '../../data/content';

export default function About() {
  return (
    <section id="about" className="section bg-soft-gradient">
      <div className="container-px">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
            variants={stagger}
            className="lg:col-span-6"
          >
            <motion.span variants={fadeUp} className="eyebrow">
              <Sparkles className="h-3.5 w-3.5" /> About Jyke Pharmaceutical
            </motion.span>
            <motion.h2 variants={fadeUp} className="heading-lg mt-4">
              Building a healthier tomorrow, one{' '}
              <span className="grad-text">trusted medicine</span> at a time.
            </motion.h2>
            <motion.p variants={fadeUp} className="lede mt-5">
              Jyke Pharmaceutical Pvt Ltd is a fast-growing healthcare company
              dedicated to delivering safe, effective and affordable medicines.
              From formulation to distribution, every step is engineered around
              quality, compliance and patient outcomes.
            </motion.p>

            <motion.div variants={fadeUp} className="mt-8 grid sm:grid-cols-2 gap-4">
              <ValueBlock
                icon={Target}
                title="Our Mission"
                desc="To make world-class healthcare accessible through innovation, integrity and uncompromising quality."
              />
              <ValueBlock
                icon={Eye}
                title="Our Vision"
                desc="To be a globally trusted pharmaceutical partner advancing healthier lives in every community."
              />
            </motion.div>

            <motion.ul variants={fadeUp} className="mt-8 grid sm:grid-cols-2 gap-x-6 gap-y-3">
              {companyValues.map((v) => (
                <li key={v.title} className="flex gap-3 items-start">
                  <CheckCircle2 className="h-5 w-5 text-brand-600 mt-0.5 flex-none" />
                  <div>
                    <p className="font-semibold text-ink-900">{v.title}</p>
                    <p className="text-sm text-ink-500">{v.desc}</p>
                  </div>
                </li>
              ))}
            </motion.ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={viewportOnce}
            transition={{ duration: 0.7, ease: 'easeOut' }}
            className="lg:col-span-6 relative"
          >
            <AboutVisual />
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function ValueBlock({ icon: Icon, title, desc }) {
  return (
    <div className="card card-hover p-5">
      <div className="icon-tile mb-3">
        <Icon className="h-5 w-5" />
      </div>
      <p className="font-semibold text-ink-900">{title}</p>
      <p className="mt-1 text-sm text-ink-500 leading-relaxed">{desc}</p>
    </div>
  );
}

function AboutVisual() {
  return (
    <div className="relative">
      <div className="relative rounded-[2rem] overflow-hidden shadow-card border border-ink-100">
        <div className="aspect-[4/5] w-full bg-gradient-to-br from-brand-700 via-brand-600 to-accent-500 relative">
          <div className="absolute inset-0 grid-pattern opacity-20" />
          <svg
            className="absolute inset-0 h-full w-full"
            viewBox="0 0 400 500"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden="true"
          >
            <circle cx="320" cy="90" r="120" fill="white" opacity=".08" />
            <circle cx="60" cy="380" r="160" fill="white" opacity=".06" />
            <g opacity=".9">
              <rect x="120" y="180" width="160" height="200" rx="24" fill="white" opacity=".15" />
              <rect x="140" y="210" width="120" height="14" rx="7" fill="white" opacity=".7" />
              <rect x="140" y="234" width="80" height="10" rx="5" fill="white" opacity=".5" />
              <circle cx="200" cy="310" r="44" fill="white" />
              <path d="M180 310h40M200 290v40" stroke="#1c5dd8" strokeWidth="6" strokeLinecap="round" />
            </g>
          </svg>
        </div>
      </div>

      <div className="absolute -bottom-6 -left-4 md:-left-8 grid grid-cols-3 gap-3 rounded-2xl border border-ink-100 bg-white/95 backdrop-blur p-4 shadow-card">
        {aboutHighlights.map((h) => (
          <div key={h.label} className="text-center px-3">
            <p className="text-xl md:text-2xl font-bold text-ink-900">{h.value}</p>
            <p className="text-[11px] uppercase tracking-widest text-ink-500 mt-1">
              {h.label}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
