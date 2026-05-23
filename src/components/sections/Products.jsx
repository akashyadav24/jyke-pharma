import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import SectionHeading from '../ui/SectionHeading';
import { products } from '../../data/content';
import { fadeUp, stagger, viewportOnce } from '../../lib/motion';

export default function Products() {
  return (
    <section id="products" className="section relative">
      <div className="container-px">
        <SectionHeading
          eyebrow="Products & Services"
          title="Comprehensive portfolio for"
          highlight="modern healthcare"
          description="From everyday essentials to specialty formulations, our product range is engineered for clinical efficacy, manufacturing precision and patient trust."
        />

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          variants={stagger}
          className="mt-14 grid sm:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {products.map((p, i) => (
            <motion.article
              key={p.title}
              variants={fadeUp}
              custom={i}
              className="card card-hover group relative overflow-hidden p-7"
            >
              <span
                className={`absolute inset-x-0 top-0 h-1 bg-gradient-to-r ${p.accent} opacity-90`}
              />
              <span className="absolute -right-10 -top-10 h-32 w-32 rounded-full bg-brand-100/40 blur-2xl opacity-0 group-hover:opacity-100 transition" />

              <div className="icon-tile h-14 w-14 mb-5 group-hover:bg-brand-gradient group-hover:text-white group-hover:ring-0 transition-colors">
                <p.icon className="h-6 w-6" />
              </div>

              <h3 className="text-xl font-semibold text-ink-900">{p.title}</h3>
              <p className="mt-2 text-ink-500 leading-relaxed">{p.desc}</p>

              <a
                href="#contact"
                className="mt-6 inline-flex items-center gap-1.5 text-sm font-semibold text-brand-700 hover:text-brand-900 transition"
              >
                Learn more
                <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </a>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
