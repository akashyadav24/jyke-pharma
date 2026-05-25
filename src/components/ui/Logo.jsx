export default function Logo({ variant = 'dark' }) {
  const sub = variant === 'light' ? 'text-white/70' : 'text-ink-500';
  return (
    <a href="#home" className="group inline-flex items-center gap-3">
      <span className="relative inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-white shadow-soft ring-1 ring-ink-100 transition-transform group-hover:scale-105 overflow-hidden">
        <img
          src="/logo.png"
          alt="Jyke Pharmaceutical logo"
          className="h-10 w-10 object-contain"
          loading="eager"
          decoding="async"
        />
      </span>
      <span className="flex flex-col leading-tight">
        <span
          className={`font-display font-extrabold text-xl tracking-tight ${
            variant === 'light' ? 'text-white' : 'text-brand-700'
          }`}
        >
          JYKE
        </span>
        <span className={`text-[10px] uppercase tracking-[0.22em] font-semibold ${sub}`}>
          Quality Guaranteed
        </span>
      </span>
    </a>
  );
}
