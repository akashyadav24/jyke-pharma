import { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { ShieldCheck, ExternalLink, X } from 'lucide-react';
import { certifications } from '../../data/content';
import { fadeUp, stagger, viewportOnce } from '../../lib/motion';

export default function Quality() {
  const [activeCert, setActiveCert] = useState(null);

  useEffect(() => {
    if (!activeCert) return;
    const onKey = (e) => e.key === 'Escape' && setActiveCert(null);
    document.body.style.overflow = 'hidden';
    window.addEventListener('keydown', onKey);
    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', onKey);
    };
  }, [activeCert]);

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
            <ShieldCheck className="h-3.5 w-3.5" /> Licenses & Certifications
          </motion.span>
          <motion.h2
            variants={fadeUp}
            className="mt-5 text-3xl md:text-5xl font-bold tracking-tight text-white leading-tight"
          >
            Licensed, compliant, and patient-first.
          </motion.h2>
          <motion.p variants={fadeUp} className="mt-5 text-base md:text-lg text-white/75 leading-relaxed">
            Jyke Pharmaceutical operates under the regulatory licenses required
            to market and distribute pharmaceutical and nutraceutical products
            in India — every shipment backed by valid documentation and
            traceable compliance.
          </motion.p>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          variants={stagger}
          className="mt-14 grid sm:grid-cols-2 gap-6 max-w-3xl mx-auto"
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
              <div className="flex items-start justify-between gap-3">
                <div className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-white/15 text-white ring-1 ring-white/20">
                  <c.icon className="h-5 w-5" />
                </div>
                {c.validity && (
                  <span className="inline-flex items-center rounded-full bg-emerald-400/15 border border-emerald-300/30 text-emerald-100 text-[10px] font-semibold uppercase tracking-widest px-2.5 py-1">
                    Active
                  </span>
                )}
              </div>
              <h3 className="mt-5 text-lg font-semibold text-white">{c.title}</h3>
              {c.number && (
                <p className="mt-2 text-xs text-white/60">
                  <span className="uppercase tracking-widest mr-2">Reg. No.</span>
                  <span className="font-mono text-white/90 text-sm">{c.number}</span>
                </p>
              )}
              {c.validity && (
                <p className="mt-1 text-xs text-white/60">{c.validity}</p>
              )}
              <p className="mt-3 text-sm text-white/70 leading-relaxed">{c.desc}</p>
              {c.issuer && (
                <p className="mt-3 text-[11px] uppercase tracking-widest text-white/50">
                  Issued by · {c.issuer}
                </p>
              )}
              {c.certUrl && (
                <button
                  type="button"
                  onClick={() => setActiveCert(c)}
                  className="mt-5 inline-flex items-center gap-1.5 rounded-full bg-white/15 hover:bg-white text-white hover:text-brand-800 transition border border-white/20 px-3.5 py-1.5 text-xs font-semibold"
                >
                  View Certificate <ExternalLink className="h-3.5 w-3.5" />
                </button>
              )}
              <div className="absolute inset-x-6 bottom-4 h-px bg-gradient-to-r from-white/40 to-transparent opacity-60" />
            </motion.div>
          ))}
        </motion.div>
      </div>

      <AnimatePresence>
        {activeCert && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            onClick={() => setActiveCert(null)}
            className="fixed inset-0 z-[60] flex items-center justify-center p-4 sm:p-8 bg-ink-900/85 backdrop-blur-md"
          >
            <motion.div
              initial={{ scale: 0.94, y: 12, opacity: 0 }}
              animate={{ scale: 1, y: 0, opacity: 1 }}
              exit={{ scale: 0.96, y: 8, opacity: 0 }}
              transition={{ duration: 0.25, ease: 'easeOut' }}
              onClick={(e) => e.stopPropagation()}
              className={`relative w-full max-w-3xl rounded-3xl bg-white shadow-card overflow-hidden flex flex-col ${
                activeCert.certUrl?.toLowerCase().endsWith('.pdf') ? 'h-[92vh]' : 'max-h-[90vh]'
              }`}
            >
              <div className="flex-none flex items-center justify-between gap-3 px-5 py-3 bg-white/90 backdrop-blur border-b border-ink-100">
                <div className="min-w-0">
                  <p className="text-[11px] uppercase tracking-widest text-ink-500">Certificate</p>
                  <p className="font-semibold text-ink-900 truncate">{activeCert.title}</p>
                </div>
                <button
                  type="button"
                  onClick={() => setActiveCert(null)}
                  aria-label="Close certificate preview"
                  className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-ink-200 text-ink-700 hover:bg-ink-100 transition flex-none"
                >
                  <X className="h-4 w-4" />
                </button>
              </div>
              {activeCert.certUrl?.toLowerCase().endsWith('.pdf') ? (
                <div className="flex-1 bg-ink-100">
                  <iframe
                    src={`${activeCert.certUrl}#toolbar=1&navpanes=0&view=FitH`}
                    title={`${activeCert.title} certificate`}
                    className="w-full h-full border-0 bg-white"
                  />
                </div>
              ) : (
                <div className="flex-1 p-3 sm:p-5 bg-ink-100 overflow-auto">
                  <img
                    src={activeCert.certUrl}
                    alt={`${activeCert.title} certificate`}
                    className="block w-full h-auto rounded-2xl shadow-soft bg-white"
                    loading="lazy"
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
