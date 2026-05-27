import { useState } from 'react';
import { motion } from 'framer-motion';
import {
  Quote,
  GraduationCap,
  Briefcase,
  Sparkles,
} from 'lucide-react';
import { fadeUp, viewportOnce, stagger } from '../../lib/motion';

const md = {
  name: 'Sahil Mathur',
  title: 'Managing Director',
  initials: 'SM',
  photo: '/team/sahil-mathur.png',
  credentials: [
    { icon: GraduationCap, label: 'BBA + MBA — Amity Business School, Noida' },
    { icon: Briefcase, label: 'Marketing & International Business' },
    { icon: Sparkles, label: 'Third-generation healthcare background' },
  ],
  quote:
    'I grew up in healthcare. Today, Jyke is how I carry forward a legacy that has cared for patients across three generations.',
  bio: [
    'Born and raised in Gwalior, Sahil completed his schooling at Air Force School, Gwalior before pursuing his BBA and MBA in Marketing and International Business at Amity Business School, Noida.',
    'After spending over two years in the marketing industry, Sahil chose to step into pharmaceuticals — drawn by a deep-rooted family legacy in healthcare. His father is a respected physician in Gwalior, his grandfather founded the family’s long-standing medical store, and today his paternal uncle continues to run it — giving Sahil a lifetime of immersion in patient care and the business of medicine.',
    'That blend of formal marketing training and lifelong exposure to healthcare shapes the way Jyke Pharmaceutical operates today — ethically, quality-first and patient-focused.',
  ],
};

export default function Leadership() {
  return (
    <section id="leadership" className="section relative overflow-hidden">
      <div className="absolute inset-0 -z-10 grid-pattern opacity-40 mask-fade-b" />
      <div className="absolute -top-32 -right-24 -z-10 h-[420px] w-[420px] rounded-full bg-brand-100/40 blur-3xl" />

      <div className="container-px">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          variants={stagger}
          className="max-w-3xl mx-auto text-center"
        >
          <motion.p variants={fadeUp} className="eyebrow justify-center">
            <Quote className="h-3.5 w-3.5" /> Leadership
          </motion.p>
          <motion.h2 variants={fadeUp} className="heading-lg mt-3">
            Meet the <span className="grad-text">Managing Director</span>
          </motion.h2>
          <motion.p variants={fadeUp} className="lede mt-4">
            Pharma leadership built on three generations of healthcare and a
            modern marketing mindset.
          </motion.p>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          variants={stagger}
          className="mt-12 grid lg:grid-cols-12 gap-8 lg:gap-12 items-stretch"
        >
          <motion.div variants={fadeUp} className="lg:col-span-5">
            <MdPhoto />
          </motion.div>

          <motion.div variants={fadeUp} className="lg:col-span-7">
            <div className="card p-7 md:p-9 h-full flex flex-col">
              <div className="flex items-start gap-4">
                <div>
                  <p className="text-xs uppercase tracking-widest text-brand-700 font-semibold">
                    {md.title}
                  </p>
                  <h3 className="mt-1 text-2xl md:text-3xl font-bold text-ink-900 font-display">
                    {md.name}
                  </h3>
                </div>
              </div>

              <ul className="mt-5 grid sm:grid-cols-1 gap-2.5">
                {md.credentials.map((c) => (
                  <li key={c.label} className="flex items-start gap-2.5">
                    <span className="icon-tile h-8 w-8 flex-none">
                      <c.icon className="h-4 w-4" />
                    </span>
                    <span className="text-sm text-ink-700 leading-relaxed pt-1.5">
                      {c.label}
                    </span>
                  </li>
                ))}
              </ul>

              <blockquote className="relative mt-6 rounded-2xl bg-brand-50/70 border border-brand-100 p-5">
                <Quote className="absolute -top-3 left-5 h-6 w-6 text-brand-600 bg-white rounded-full p-1 ring-1 ring-brand-100" />
                <p className="text-ink-800 leading-relaxed italic">
                  “{md.quote}”
                </p>
              </blockquote>

              <div className="mt-6 space-y-4 text-ink-600 leading-relaxed text-[15px]">
                {md.bio.map((para, i) => (
                  <p key={i}>{para}</p>
                ))}
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

function MdPhoto() {
  const [errored, setErrored] = useState(false);

  return (
    <div className="relative h-full min-h-[420px]">
      <div className="absolute inset-0 rounded-[2rem] bg-brand-gradient shadow-glow rotate-2" />
      <div className="absolute inset-1.5 rounded-[1.85rem] bg-white shadow-card overflow-hidden">
        {!errored ? (
          <img
            src={md.photo}
            alt={`${md.name}, ${md.title} of Jyke Pharmaceutical`}
            className="h-full w-full object-cover object-top"
            onError={() => setErrored(true)}
            loading="lazy"
          />
        ) : (
          <div className="h-full w-full grid place-items-center bg-gradient-to-br from-brand-50 to-accent-50 relative">
            <div className="absolute inset-0 grid-pattern opacity-50" />
            <div className="relative flex flex-col items-center gap-3">
              <span className="inline-flex h-32 w-32 items-center justify-center rounded-full bg-brand-gradient text-white text-4xl font-bold shadow-glow">
                {md.initials}
              </span>
              <p className="text-sm text-ink-500">Photo coming soon</p>
            </div>
          </div>
        )}

        <div className="absolute bottom-4 left-4 right-4 rounded-2xl bg-white/95 backdrop-blur border border-ink-100 shadow-soft p-4">
          <p className="text-[11px] uppercase tracking-widest text-ink-500">
            {md.title}
          </p>
          <p className="mt-1 font-semibold text-ink-900">{md.name}</p>
        </div>
      </div>
    </div>
  );
}
