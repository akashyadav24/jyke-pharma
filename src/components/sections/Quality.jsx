import { motion } from 'framer-motion';
import { ShieldCheck } from 'lucide-react';
import { certifications } from '../../data/content';
import { fadeUp, stagger, viewportOnce } from '../../lib/motion';

export default function Quality() {
  return (
    <section id="quality" className="section relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-brand-700 via-brand-800 to-brand-950" />
      <div className="absolute inset-0 grid-pattern opacity-[0.08]" />
      <div className="absolute -top-32 -right-24 h-[420px] w-[420px] rounded-full bg-accent-500/20 blur-3xl" />
      <div className="absolute -bottom-32 -left-24 h-[420px] w-[420px] rounded-full bg-brand-400/20 blur-3xl" />

      <div className="container-px relative">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          variants={stagger}
          className="max-w-3xl mx-auto text-center"
        >
          <motion.span
            variants={fadeUp}
            className="inline-flex items-center gap-2 rounded-full bg-white/10 text-white text-xs font-semibold uppercase tracking-[0.18em] px-3 py-1 border border-white/20"
          >
            <ShieldCheck className="h-3.5 w-3.5" /> Quality & Certifications
          </motion.span>
          <motion.h2
            variants={fadeUp}
            className="mt-5 text-3xl md:text-5xl font-bold tracking-tight text-white leading-tight"
          >
            Certified standards.{' '}
            <span className="bg-gradient-to-r from-accent-200 to-white bg-clip-text text-transparent">
              Patient-first science.
            </span>
          </motion.h2>
          <motion.p variants={fadeUp} className="mt-5 text-base md:text-lg text-white/75 leading-relaxed">
            Every Jyke product is built on a foundation of validated processes,
            verified ingredients and globally recognized quality benchmarks.
          </motion.p>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          variants={stagger}
          className="mt-14 grid sm:grid-cols-2 lg:grid-cols-4 gap-5"
        >
          {certifications.map((c, i) => (
            <motion.div
              key={c.title}
              variants={fadeUp}
              custom={i}
              whileHover={{ y: -6 }}
              transition={{ type: 'spring', stiffness: 240, damping: 20 }}
              className="relative rounded-3xl bg-white/[0.06] backdrop-blur-sm border border-white/15 p-6 hover:bg-white/[0.10] transition"
            >
              <div className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-white/15 text-white ring-1 ring-white/20">
                <c.icon className="h-5 w-5" />
              </div>
              <h3 className="mt-5 text-lg font-semibold text-white">{c.title}</h3>
              <p className="mt-1.5 text-sm text-white/70 leading-relaxed">{c.desc}</p>
              <div className="absolute inset-x-6 bottom-4 h-px bg-gradient-to-r from-white/40 to-transparent" />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
