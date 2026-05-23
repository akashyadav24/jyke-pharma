import { useState } from 'react';
import { motion } from 'framer-motion';
import {
  Phone,
  Mail,
  MapPin,
  Send,
  Clock,
  CheckCircle2,
} from 'lucide-react';
import SectionHeading from '../ui/SectionHeading';
import { contactCards } from '../../data/content';
import { fadeUp, stagger, viewportOnce } from '../../lib/motion';

const ICONS = { phone: Phone, mail: Mail, pin: MapPin };

export default function Contact() {
  const [sent, setSent] = useState(false);

  return (
    <section id="contact" className="section bg-soft-gradient">
      <div className="container-px">
        <SectionHeading
          eyebrow="Get In Touch"
          title="Let’s talk about"
          highlight="healthier outcomes"
          description="Reach out for product enquiries, distribution partnerships, regulatory support or institutional sales."
        />

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          variants={stagger}
          className="mt-14 grid lg:grid-cols-3 gap-5"
        >
          {contactCards.map((c, i) => {
            const Icon = ICONS[c.icon];
            return (
              <motion.div
                key={c.title}
                variants={fadeUp}
                custom={i}
                className="card card-hover p-6"
              >
                <div className="icon-tile mb-4">
                  <Icon className="h-5 w-5" />
                </div>
                <p className="text-sm uppercase tracking-widest text-ink-500">{c.title}</p>
                <p className="mt-2 text-lg font-semibold text-ink-900">{c.primary}</p>
                <p className="mt-1 text-sm text-ink-500">{c.secondary}</p>
              </motion.div>
            );
          })}
        </motion.div>

        <div className="mt-10 grid lg:grid-cols-5 gap-6">
          <motion.form
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={viewportOnce}
            transition={{ duration: 0.6 }}
            onSubmit={(e) => {
              e.preventDefault();
              setSent(true);
              setTimeout(() => setSent(false), 4000);
            }}
            className="lg:col-span-3 card p-6 md:p-8"
          >
            <div className="flex items-center gap-3">
              <div className="icon-tile">
                <Send className="h-5 w-5" />
              </div>
              <div>
                <h3 className="font-semibold text-ink-900 text-lg">Send a Message</h3>
                <p className="text-sm text-ink-500">
                  We typically respond within one business day.
                </p>
              </div>
            </div>

            <div className="mt-6 grid sm:grid-cols-2 gap-4">
              <Field label="Full Name" id="name" placeholder="Dr. Jane Patel" />
              <Field label="Email" id="email" type="email" placeholder="you@example.com" />
              <Field label="Phone" id="phone" placeholder="+91 98765 43210" />
              <Field label="Company" id="company" placeholder="Healthcare Org" />
            </div>

            <div className="mt-4">
              <Field
                label="Message"
                id="message"
                textarea
                placeholder="Tell us about your enquiry..."
              />
            </div>

            <div className="mt-6 flex items-center gap-3 justify-between flex-wrap">
              <button type="submit" className="btn-primary">
                Send Message <Send className="h-4 w-4" />
              </button>
              <div className="flex items-center gap-2 text-sm text-ink-500">
                <Clock className="h-4 w-4 text-brand-600" />
                Avg response: under 24 hours
              </div>
            </div>

            {sent && (
              <motion.div
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                className="mt-5 flex items-center gap-2 rounded-2xl bg-brand-50 text-brand-800 border border-brand-100 px-4 py-3 text-sm"
              >
                <CheckCircle2 className="h-4 w-4" />
                Thanks! Your message has been received.
              </motion.div>
            )}
          </motion.form>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={viewportOnce}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="lg:col-span-2 card p-3 overflow-hidden"
          >
            <div className="relative h-full min-h-[360px] rounded-2xl overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-brand-100 via-white to-accent-100" />
              <svg
                className="absolute inset-0 h-full w-full"
                viewBox="0 0 400 480"
                xmlns="http://www.w3.org/2000/svg"
                aria-hidden="true"
              >
                <defs>
                  <pattern id="grid-map" width="32" height="32" patternUnits="userSpaceOnUse">
                    <path d="M32 0H0V32" fill="none" stroke="rgba(28,93,216,0.15)" strokeWidth="1" />
                  </pattern>
                </defs>
                <rect width="400" height="480" fill="url(#grid-map)" />
                <path
                  d="M0 320 Q 100 280 180 310 T 400 280"
                  stroke="rgba(28,93,216,0.35)"
                  strokeWidth="3"
                  fill="none"
                />
                <path
                  d="M0 180 Q 120 220 220 200 T 400 160"
                  stroke="rgba(6,182,212,0.35)"
                  strokeWidth="3"
                  fill="none"
                />
              </svg>
              <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
                <span className="relative flex h-5 w-5">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-brand-500/60" />
                  <span className="relative inline-flex h-5 w-5 rounded-full bg-brand-gradient ring-4 ring-white shadow-glow" />
                </span>
              </div>
              <div className="absolute bottom-4 left-4 right-4 rounded-2xl bg-white/95 backdrop-blur border border-ink-100 shadow-soft p-4">
                <p className="text-xs uppercase tracking-widest text-ink-500">Visit Us</p>
                <p className="mt-1 font-semibold text-ink-900">Jyke Pharma HQ</p>
                <p className="text-sm text-ink-500">
                  Plot 14, Pharma City, MIDC, Mumbai 400072
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function Field({ label, id, type = 'text', placeholder, textarea = false }) {
  const base =
    'w-full rounded-2xl bg-white border border-ink-200 px-4 py-3 text-ink-900 placeholder:text-ink-400 transition focus:border-brand-500 focus:ring-2 focus:ring-brand-200';
  return (
    <label htmlFor={id} className="block">
      <span className="text-sm font-medium text-ink-700">{label}</span>
      {textarea ? (
        <textarea id={id} name={id} rows={5} placeholder={placeholder} className={`${base} mt-1.5 resize-none`} />
      ) : (
        <input id={id} name={id} type={type} placeholder={placeholder} className={`${base} mt-1.5`} />
      )}
    </label>
  );
}
