import { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { Menu, X, ArrowRight } from 'lucide-react';
import Logo from './ui/Logo';
import { navLinks } from '../data/content';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [open]);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'backdrop-blur-xl bg-white/85 shadow-soft border-b border-ink-100'
          : 'bg-transparent'
      }`}
    >
      <div className="container-px">
        <nav className="flex h-18 items-center justify-between py-4">
          <Logo />

          <ul className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="relative px-4 py-2 text-sm font-medium text-ink-700 hover:text-brand-700 transition-colors group"
                >
                  {link.label}
                  <span className="pointer-events-none absolute inset-x-4 -bottom-0.5 h-0.5 origin-left scale-x-0 bg-brand-gradient transition-transform duration-300 group-hover:scale-x-100" />
                </a>
              </li>
            ))}
          </ul>

          <div className="hidden lg:flex items-center gap-3">
            <a href="#contact" className="btn-primary">
              Get In Touch <ArrowRight className="h-4 w-4" />
            </a>
          </div>

          <button
            aria-label="Toggle menu"
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
            className="lg:hidden inline-flex h-11 w-11 items-center justify-center rounded-2xl border border-ink-200 bg-white text-ink-900 shadow-soft"
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </nav>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.25, ease: 'easeOut' }}
            className="lg:hidden absolute inset-x-0 top-full origin-top border-b border-ink-100 bg-white shadow-card"
          >
            <div className="container-px py-5">
              <ul className="flex flex-col">
                {navLinks.map((link, i) => (
                  <li key={link.href}>
                    <a
                      href={link.href}
                      onClick={() => setOpen(false)}
                      className="flex items-center justify-between rounded-2xl px-3 py-3 text-base font-medium text-ink-900 hover:bg-brand-50 hover:text-brand-700 transition"
                    >
                      <span>{link.label}</span>
                      <ArrowRight className="h-4 w-4 opacity-0 -translate-x-2 transition-all group-hover:opacity-100" />
                    </a>
                  </li>
                ))}
              </ul>
              <a
                href="#contact"
                onClick={() => setOpen(false)}
                className="btn-primary mt-4 w-full"
              >
                Get In Touch <ArrowRight className="h-4 w-4" />
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
