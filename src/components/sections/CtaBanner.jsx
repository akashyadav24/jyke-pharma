import { motion } from 'framer-motion';
import { ArrowRight, MessageCircle } from 'lucide-react';
import { fadeUp, viewportOnce, stagger } from '../../lib/motion';

export default function CtaBanner() {
  return (
    <section className="section">
      <div className="container-px">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          variants={stagger}
          className="relative overflow-hidden rounded-[2.5rem] bg-brand-gradient text-white shadow-glow"
        >
          <div className="absolute inset-0 grid-pattern opacity-[0.1]" />
          <div className="absolute -top-16 -right-10 h-72 w-72 rounded-full bg-white/15 blur-3xl" />
          <div className="absolute -bottom-24 -left-10 h-80 w-80 rounded-full bg-accent-300/30 blur-3xl" />

          <div className="relative px-6 py-14 md:px-16 md:py-20 grid lg:grid-cols-12 items-center gap-10">
            <div className="lg:col-span-8">
              <motion.span
                variants={fadeUp}
                className="inline-flex items-center gap-2 rounded-full bg-white/15 text-xs font-semibold uppercase tracking-[0.18em] px-3 py-1 border border-white/25"
              >
                <MessageCircle className="h-3.5 w-3.5" /> Partner with Jyke
              </motion.span>
              <motion.h2
                variants={fadeUp}
                className="mt-5 text-3xl md:text-5xl font-bold leading-tight tracking-tight"
              >
                Committed To Better{' '}
                <span className="bg-gradient-to-r from-white to-accent-100 bg-clip-text text-transparent">
                  Healthcare Solutions.
                </span>
              </motion.h2>
              <motion.p
                variants={fadeUp}
                className="mt-5 text-base md:text-lg text-white/85 max-w-2xl leading-relaxed"
              >
                Whether you’re a hospital, distributor or healthcare brand —
                let’s build a healthier future together with reliable supply,
                certified manufacturing and partner-first service.
              </motion.p>
            </div>
            <motion.div
              variants={fadeUp}
              className="lg:col-span-4 flex flex-col sm:flex-row lg:flex-col gap-3 lg:items-end"
            >
              <a
                href="#contact"
                className="btn bg-white text-brand-800 hover:bg-ink-100 hover:text-brand-900 hover:-translate-y-0.5 shadow-card"
              >
                Get In Touch <ArrowRight className="h-4 w-4" />
              </a>
              <a href="#products" className="btn-ghost">
                Explore Products
              </a>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
