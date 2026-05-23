import { useState } from 'react';
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { useCountUp } from '../../hooks/useCountUp';
import { stats } from '../../data/content';
import { fadeUp, stagger, viewportOnce } from '../../lib/motion';

export default function Stats() {
  return (
    <section className="-mt-10 md:-mt-16 relative z-10">
      <div className="container-px">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          variants={stagger}
          className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 rounded-3xl bg-white shadow-card border border-ink-100 p-4 md:p-6"
        >
          {stats.map((s, i) => (
            <StatCard key={s.label} stat={s} index={i} />
          ))}
        </motion.div>
      </div>
    </section>
  );
}

function StatCard({ stat, index }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, amount: 0.4 });
  const isFraction = stat.suffix === '/7';
  const value = useCountUp(stat.value, { start: inView && !isFraction, duration: 1600 });

  return (
    <motion.div
      ref={ref}
      variants={fadeUp}
      custom={index}
      className="group relative rounded-2xl bg-gradient-to-br from-white to-brand-50/40 border border-ink-100 p-5 md:p-6 text-center md:text-left transition-all duration-300 hover:-translate-y-1 hover:shadow-soft hover:border-brand-200"
    >
      <p className="text-4xl md:text-5xl font-extrabold tracking-tight">
        <span className="grad-text">
          {isFraction ? '24' : value}
          <span className="ml-0.5">{stat.suffix}</span>
        </span>
      </p>
      <p className="mt-2 font-semibold text-ink-900">{stat.label}</p>
      <p className="text-xs md:text-sm text-ink-500 mt-1">{stat.desc}</p>
      <div className="absolute inset-x-5 bottom-3 h-px bg-gradient-to-r from-brand-200 via-brand-500/50 to-transparent opacity-0 group-hover:opacity-100 transition" />
    </motion.div>
  );
}
