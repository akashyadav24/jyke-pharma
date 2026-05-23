import { Pill } from 'lucide-react';

export default function Logo({ variant = 'dark' }) {
  const text = variant === 'light' ? 'text-white' : 'text-ink-900';
  const sub = variant === 'light' ? 'text-white/70' : 'text-ink-500';
  return (
    <a href="#home" className="group inline-flex items-center gap-3">
      <span className="relative inline-flex h-10 w-10 items-center justify-center rounded-2xl bg-brand-gradient shadow-glow transition-transform group-hover:scale-105">
        <Pill className="h-5 w-5 text-white" strokeWidth={2.2} />
        <span className="absolute inset-0 rounded-2xl ring-1 ring-white/30" />
      </span>
      <span className="flex flex-col leading-tight">
        <span className={`font-display font-bold text-lg tracking-tight ${text}`}>
          Jyke<span className="grad-text"> Pharma</span>
        </span>
        <span className={`text-[10px] uppercase tracking-[0.2em] ${sub}`}>
          Pharmaceutical Pvt Ltd
        </span>
      </span>
    </a>
  );
}
