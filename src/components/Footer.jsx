import { Mail, MapPin, Phone, ArrowUpRight } from 'lucide-react';
import Logo from './ui/Logo';
import { navLinks } from '../data/content';

const productLinks = [
  'Tablets',
  'Capsules',
  'Syrups',
  'Injections',
  'Protein Powder',
];

export default function Footer() {
  return (
    <footer className="relative overflow-hidden bg-ink-900 text-white">
      <div className="absolute inset-0 grid-pattern opacity-[0.06]" />
      <div className="absolute -top-32 -right-24 h-[420px] w-[420px] rounded-full bg-brand-700/30 blur-3xl" />
      <div className="absolute -bottom-40 -left-24 h-[420px] w-[420px] rounded-full bg-accent-500/20 blur-3xl" />

      <div className="relative container-px py-16 md:py-20">
        <div className="grid lg:grid-cols-12 gap-10">
          <div className="lg:col-span-5">
            <Logo variant="light" />
            <p className="mt-5 text-white/70 leading-relaxed max-w-md">
              Founded in Bengaluru in 2012 and headquartered in Gwalior (MP) —
              a pharmaceutical marketing and distribution company committed to
              quality healthcare, ethical practices and lasting customer trust.
            </p>

            <ul className="mt-7 space-y-3 text-sm text-white/80">
              <li className="flex gap-3">
                <MapPin className="h-4 w-4 mt-0.5 text-brand-300 flex-none" />
                <div>
                  <p><span className="text-white/55">Reg. Office:</span> 71, River View Colony, Morar, Gwalior, MP – 474006</p>
                  <p className="mt-1"><span className="text-white/55">Admin Office:</span> RJ-001, Purva Riviera, Marathalli, Varthur Old Airport Road, Bengaluru – 560037</p>
                </div>
              </li>
              <li className="flex gap-3">
                <Mail className="h-4 w-4 mt-0.5 text-brand-300 flex-none" />
                <a href="mailto:jykepharmaceutical@gmail.com" className="hover:text-white transition-colors break-all">
                  jykepharmaceutical@gmail.com
                </a>
              </li>
              <li className="flex gap-3">
                <Phone className="h-4 w-4 mt-0.5 text-brand-300 flex-none" />
                <div>
                  <a href="tel:+9107514012727" className="hover:text-white transition-colors block">
                    0751 - 4012727
                  </a>
                  <a href="tel:+919827242727" className="hover:text-white transition-colors block">
                    <span className="text-white/55 mr-1.5">Mobile:</span>+91 98272 42727
                  </a>
                </div>
              </li>
            </ul>
          </div>

          <div className="lg:col-span-3">
            <h4 className="text-sm font-semibold uppercase tracking-[0.18em] text-white/90">
              Quick Links
            </h4>
            <ul className="mt-5 space-y-3">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="group inline-flex items-center gap-1.5 text-white/75 hover:text-white transition"
                  >
                    {link.label}
                    <ArrowUpRight className="h-3.5 w-3.5 opacity-0 -translate-x-1 transition-all group-hover:opacity-100 group-hover:translate-x-0" />
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-4">
            <h4 className="text-sm font-semibold uppercase tracking-[0.18em] text-white/90">
              Products
            </h4>
            <ul className="mt-5 grid grid-cols-2 gap-x-4 gap-y-3">
              {productLinks.map((p) => (
                <li key={p}>
                  <a href="#products" className="text-white/75 hover:text-white transition">
                    {p}
                  </a>
                </li>
              ))}
            </ul>

            <div className="mt-7 rounded-2xl bg-white/[0.05] border border-white/10 p-5">
              <p className="text-sm font-semibold text-white">Stay informed</p>
              <p className="text-xs text-white/60 mt-1">
                Updates on launches, certifications and healthcare insights.
              </p>
              <form
                onSubmit={(e) => e.preventDefault()}
                className="mt-3 flex gap-2"
              >
                <input
                  type="email"
                  placeholder="you@example.com"
                  className="min-w-0 flex-1 rounded-full bg-white/10 border border-white/15 px-4 py-2 text-sm text-white placeholder:text-white/50 focus:border-brand-400 focus:ring-2 focus:ring-brand-400/30 outline-none"
                />
                <button className="btn bg-white text-brand-800 hover:bg-brand-50 px-4 py-2 text-sm">
                  Subscribe
                </button>
              </form>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-6 border-t border-white/10 flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
          <p className="text-sm text-white/60">
            © {new Date().getFullYear()} Jyke Pharmaceutical Pvt Ltd. All rights reserved.
          </p>
          <ul className="flex flex-wrap gap-x-6 gap-y-2 text-sm text-white/60">
            <li><a href="#" className="hover:text-white transition">Privacy Policy</a></li>
            <li><a href="#" className="hover:text-white transition">Terms of Use</a></li>
            <li><a href="#" className="hover:text-white transition">Compliance</a></li>
          </ul>
        </div>
      </div>
    </footer>
  );
}
