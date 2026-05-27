import { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import {
  ArrowUpRight,
  FileText,
  Image as ImageIcon,
  Eye,
  Download,
  X,
  ExternalLink,
  Sparkles,
} from 'lucide-react';
import SectionHeading from '../ui/SectionHeading';
import { products, productCatalogs, upcomingProducts } from '../../data/content';
import { fadeUp, stagger, viewportOnce } from '../../lib/motion';

export default function Products() {
  const [activePdf, setActivePdf] = useState(null);

  useEffect(() => {
    if (!activePdf) return;
    const onKey = (e) => e.key === 'Escape' && setActivePdf(null);
    document.body.style.overflow = 'hidden';
    window.addEventListener('keydown', onKey);
    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', onKey);
    };
  }, [activePdf]);

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

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          variants={stagger}
          className="mt-20"
        >
          <motion.div variants={fadeUp} className="text-center max-w-2xl mx-auto">
            <p className="eyebrow justify-center">
              <FileText className="h-3.5 w-3.5" /> Downloadable Catalogs
            </p>
            <h3 className="heading-md mt-3">
              Browse the full <span className="grad-text">Jyke product range</span>
            </h3>
            <p className="lede mt-3">
              View or download our product catalogs.
            </p>
          </motion.div>

          <div className="mt-10 max-w-3xl mx-auto flex flex-col gap-3">
            {productCatalogs.map((cat, i) => {
              const isImage = cat.type === 'image' || /\.(png|jpe?g|webp|gif)$/i.test(cat.url);
              const ItemIcon = isImage ? ImageIcon : FileText;
              return (
              <motion.div
                key={cat.url}
                variants={fadeUp}
                custom={i}
                className="card card-hover group flex items-center gap-4 p-4 sm:p-5"
              >
                <div className="icon-tile h-12 w-12 flex-none">
                  <ItemIcon className="h-5 w-5" />
                </div>
                <div className="min-w-0 flex-1">
                  <h4 className="font-semibold text-ink-900 leading-snug truncate">
                    {cat.title}
                  </h4>
                  <p className="mt-0.5 text-sm text-ink-500 truncate">{cat.desc}</p>
                </div>
                <div className="flex items-center gap-2 flex-none">
                  <button
                    type="button"
                    onClick={() => setActivePdf(cat)}
                    aria-label={`Preview ${cat.title}`}
                    className="inline-flex items-center gap-1.5 rounded-full bg-brand-gradient text-white text-xs font-semibold px-3.5 py-2 shadow-glow hover:-translate-y-0.5 transition"
                  >
                    <Eye className="h-3.5 w-3.5" />
                    <span className="hidden sm:inline">Preview</span>
                  </button>
                  <a
                    href={cat.url}
                    download
                    aria-label={`Download ${cat.title}`}
                    className="inline-flex items-center gap-1.5 rounded-full border border-ink-200 text-ink-700 hover:border-brand-500 hover:text-brand-700 text-xs font-semibold px-3.5 py-2 transition"
                  >
                    <Download className="h-3.5 w-3.5" />
                    <span className="hidden sm:inline">Download</span>
                  </a>
                </div>
              </motion.div>
              );
            })}
          </div>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          variants={stagger}
          className="mt-20"
        >
          <motion.div variants={fadeUp} className="text-center max-w-2xl mx-auto">
            <p className="eyebrow justify-center">
              <Sparkles className="h-3.5 w-3.5" /> Upcoming Products
            </p>
            <h3 className="heading-md mt-3">
              Launching <span className="grad-text">soon</span>
            </h3>
            <p className="lede mt-3">
              A look at what's next from Jyke — built on the same quality commitment.
            </p>
          </motion.div>

          <div className="mt-10 grid sm:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {upcomingProducts.map((p, i) => (
              <motion.div
                key={p.title}
                variants={fadeUp}
                custom={i}
                className="card card-hover group relative overflow-hidden"
              >
                <div className="aspect-[4/3] bg-ink-100 overflow-hidden">
                  <img
                    src={p.image}
                    alt={p.title}
                    className="h-full w-full object-contain bg-white"
                    loading="lazy"
                  />
                </div>
                <div className="p-5">
                  <h4 className="text-lg font-semibold text-ink-900">{p.title}</h4>
                  <p className="mt-1 text-sm text-ink-500 leading-relaxed">{p.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>

      <AnimatePresence>
        {activePdf && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            onClick={() => setActivePdf(null)}
            className="fixed inset-0 z-[60] flex items-center justify-center p-2 sm:p-6 bg-ink-900/85 backdrop-blur-md"
          >
            <motion.div
              initial={{ scale: 0.96, y: 12, opacity: 0 }}
              animate={{ scale: 1, y: 0, opacity: 1 }}
              exit={{ scale: 0.96, y: 8, opacity: 0 }}
              transition={{ duration: 0.25, ease: 'easeOut' }}
              onClick={(e) => e.stopPropagation()}
              className={`relative flex flex-col w-full max-w-5xl rounded-3xl bg-white shadow-card overflow-hidden ${
                activePdf.type === 'image' ? 'max-h-[92vh]' : 'h-[92vh]'
              }`}
            >
              <div className="flex items-center justify-between gap-3 px-5 py-3 border-b border-ink-100 bg-white">
                <div className="min-w-0">
                  <p className="text-[11px] uppercase tracking-widest text-ink-500">
                    {activePdf.type === 'image' ? 'Product' : 'Product Catalog'}
                  </p>
                  <p className="font-semibold text-ink-900 truncate">{activePdf.title}</p>
                </div>
                <div className="flex items-center gap-2 flex-none">
                  <a
                    href={activePdf.url}
                    download
                    className="inline-flex items-center gap-1.5 rounded-full bg-brand-gradient text-white text-xs font-semibold px-3.5 py-2 shadow-glow hover:-translate-y-0.5 transition"
                  >
                    <Download className="h-3.5 w-3.5" /> Download
                  </a>
                  <a
                    href={activePdf.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 rounded-full border border-ink-200 text-ink-700 hover:border-brand-500 hover:text-brand-700 text-xs font-semibold px-3 py-2 transition"
                    aria-label="Open in new tab"
                  >
                    <ExternalLink className="h-3.5 w-3.5" />
                  </a>
                  <button
                    type="button"
                    onClick={() => setActivePdf(null)}
                    aria-label="Close preview"
                    className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-ink-200 text-ink-700 hover:bg-ink-100 transition"
                  >
                    <X className="h-4 w-4" />
                  </button>
                </div>
              </div>
              {activePdf.type === 'image' ? (
                <div className="flex-1 bg-ink-100 p-3 sm:p-5 overflow-auto">
                  <img
                    src={activePdf.url}
                    alt={activePdf.title}
                    className="block mx-auto max-w-full h-auto rounded-2xl shadow-soft bg-white"
                    loading="lazy"
                  />
                </div>
              ) : (
                <div className="flex-1 bg-ink-100">
                  <iframe
                    src={`${activePdf.url}#toolbar=1&navpanes=0&view=FitH`}
                    title={activePdf.title}
                    className="w-full h-full border-0 bg-white"
                  />
                </div>
              )}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
