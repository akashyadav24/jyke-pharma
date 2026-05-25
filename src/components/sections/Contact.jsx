import { useState } from 'react';
import { motion } from 'framer-motion';
import {
  Phone,
  Mail,
  MapPin,
  Send,
  Clock,
  CheckCircle2,
  AlertCircle,
  Loader2,
  ExternalLink,
} from 'lucide-react';
import SectionHeading from '../ui/SectionHeading';
import { contactCards } from '../../data/content';
import { fadeUp, stagger, viewportOnce } from '../../lib/motion';

const ICONS = { phone: Phone, mail: Mail, pin: MapPin };

const WEB3FORMS_KEY = import.meta.env.VITE_WEB3FORMS_KEY;

export default function Contact() {
  const [status, setStatus] = useState('idle'); // idle | sending | sent | error
  const [errorMsg, setErrorMsg] = useState('');

  async function handleSubmit(e) {
    e.preventDefault();
    if (status === 'sending') return;
    setStatus('sending');
    setErrorMsg('');

    const form = e.currentTarget;
    const data = new FormData(form);

    if (data.get('botcheck')) {
      setStatus('idle');
      return;
    }

    data.append('access_key', WEB3FORMS_KEY ?? '');
    data.append('subject', 'New enquiry from Jyke Pharmaceutical website');
    data.append('from_name', 'Jyke Pharma Website');

    if (!WEB3FORMS_KEY) {
      setStatus('error');
      setErrorMsg('Form is not configured yet. Please email us at jykepharmaceutical@gmail.com.');
      return;
    }

    try {
      const res = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        body: data,
      });
      const json = await res.json();
      if (json.success) {
        setStatus('sent');
        form.reset();
        setTimeout(() => setStatus('idle'), 6000);
      } else {
        setStatus('error');
        setErrorMsg(json.message || 'Could not send. Please try again.');
      }
    } catch (err) {
      setStatus('error');
      setErrorMsg('Network error. Please check your connection and try again.');
    }
  }

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
            const href =
              c.icon === 'phone'
                ? `tel:${c.primary.replace(/\s+/g, '')}`
                : c.icon === 'mail'
                ? `mailto:${c.primary}`
                : null;
            const Primary = href ? 'a' : 'p';
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
                <Primary
                  {...(href ? { href } : {})}
                  className={`mt-2 block text-lg font-semibold text-ink-900 ${
                    href ? 'hover:text-brand-700 transition-colors break-all' : ''
                  }`}
                >
                  {c.primary}
                </Primary>
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
            onSubmit={handleSubmit}
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

            <input
              type="checkbox"
              name="botcheck"
              tabIndex="-1"
              autoComplete="off"
              className="hidden"
              aria-hidden="true"
            />

            <div className="mt-6 grid sm:grid-cols-2 gap-4">
              <Field label="Full Name" id="name" required placeholder="Dr. Jane Patel" />
              <Field label="Email" id="email" type="email" required placeholder="you@example.com" />
              <Field label="Phone" id="phone" placeholder="+91 98765 43210" />
              <Field label="Company" id="company" placeholder="Healthcare Org" />
            </div>

            <div className="mt-4">
              <Field
                label="Message"
                id="message"
                textarea
                required
                placeholder="Tell us about your enquiry..."
              />
            </div>

            <div className="mt-6 flex items-center gap-3 justify-between flex-wrap">
              <button
                type="submit"
                disabled={status === 'sending'}
                className="btn-primary disabled:opacity-70 disabled:cursor-not-allowed"
              >
                {status === 'sending' ? (
                  <>
                    Sending… <Loader2 className="h-4 w-4 animate-spin" />
                  </>
                ) : (
                  <>
                    Send Message <Send className="h-4 w-4" />
                  </>
                )}
              </button>
              <div className="flex items-center gap-2 text-sm text-ink-500">
                <Clock className="h-4 w-4 text-brand-600" />
                Avg response: under 24 hours
              </div>
            </div>

            {status === 'sent' && (
              <motion.div
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                className="mt-5 flex items-center gap-2 rounded-2xl bg-brand-50 text-brand-800 border border-brand-100 px-4 py-3 text-sm"
              >
                <CheckCircle2 className="h-4 w-4 flex-none" />
                Thanks! Your message has been sent to jykepharmaceutical@gmail.com — we’ll be in touch shortly.
              </motion.div>
            )}

            {status === 'error' && (
              <motion.div
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                className="mt-5 flex items-start gap-2 rounded-2xl bg-red-50 text-red-800 border border-red-100 px-4 py-3 text-sm"
              >
                <AlertCircle className="h-4 w-4 mt-0.5 flex-none" />
                <span>{errorMsg}</span>
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
            <div className="relative h-full min-h-[420px] rounded-2xl overflow-hidden">
              <iframe
                title="Jyke Pharmaceutical Pvt. Ltd. — Gwalior office on Google Maps"
                src="https://maps.google.com/maps?q=26.2303162,78.2212524&z=16&hl=en&output=embed"
                className="absolute inset-0 h-full w-full border-0"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                allowFullScreen
              />
              <div className="pointer-events-none absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-white/95 via-white/70 to-transparent" />
              <div className="absolute bottom-4 left-4 right-4 pointer-events-auto rounded-2xl bg-white/95 backdrop-blur border border-ink-100 shadow-soft p-4">
                <div className="flex items-center justify-between gap-3">
                  <div className="min-w-0">
                    <p className="text-xs uppercase tracking-widest text-ink-500">Visit Us</p>
                    <p className="mt-1 font-semibold text-ink-900 truncate">
                      Jyke Pharmaceutical Pvt. Ltd.
                    </p>
                    <p className="text-sm text-ink-500">
                      71, River View Colony, Morar, Gwalior, MP – 474006
                    </p>
                  </div>
                  <a
                    href="https://www.google.com/maps/place/26%C2%B013'49.1%22N+78%C2%B013'16.5%22E/@26.2303162,78.2186775,17z"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 rounded-full bg-brand-gradient text-white text-xs font-semibold px-3 py-2 shadow-glow hover:-translate-y-0.5 transition flex-none"
                  >
                    Directions <ExternalLink className="h-3.5 w-3.5" />
                  </a>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function Field({ label, id, type = 'text', placeholder, textarea = false, required = false }) {
  const base =
    'w-full rounded-2xl bg-white border border-ink-200 px-4 py-3 text-ink-900 placeholder:text-ink-400 transition focus:border-brand-500 focus:ring-2 focus:ring-brand-200';
  return (
    <label htmlFor={id} className="block">
      <span className="text-sm font-medium text-ink-700">
        {label}{required && <span className="text-red-500 ml-0.5">*</span>}
      </span>
      {textarea ? (
        <textarea id={id} name={id} rows={5} placeholder={placeholder} required={required} className={`${base} mt-1.5 resize-none`} />
      ) : (
        <input id={id} name={id} type={type} placeholder={placeholder} required={required} className={`${base} mt-1.5`} />
      )}
    </label>
  );
}
