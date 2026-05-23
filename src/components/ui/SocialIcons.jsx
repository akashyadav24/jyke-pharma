const base = 'h-4 w-4';

export const Linkedin = ({ className = base }) => (
  <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
    <path d="M20.45 20.45h-3.55v-5.57c0-1.33-.03-3.04-1.85-3.04-1.86 0-2.14 1.45-2.14 2.95v5.66H9.36V9h3.41v1.56h.05c.48-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.45v6.29zM5.34 7.43a2.06 2.06 0 1 1 0-4.12 2.06 2.06 0 0 1 0 4.12zM7.12 20.45H3.56V9h3.56v11.45z"/>
  </svg>
);

export const Twitter = ({ className = base }) => (
  <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
    <path d="M18.244 2H21l-6.52 7.45L22.5 22h-6.79l-4.63-6.06L5.7 22H2.94l6.98-7.97L1.5 2h6.93l4.19 5.57L18.24 2zm-2.38 18.5h1.61L7.23 3.42H5.5l10.37 17.08z"/>
  </svg>
);

export const Facebook = ({ className = base }) => (
  <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
    <path d="M13.5 21.95V13.5h2.85l.43-3.31H13.5V8.07c0-.96.27-1.61 1.64-1.61h1.76V3.5c-.85-.09-1.71-.13-2.57-.13-2.55 0-4.3 1.56-4.3 4.41v2.41H7.18v3.31h2.85v8.45h3.47z"/>
  </svg>
);

export const Instagram = ({ className = base }) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className={className} aria-hidden="true">
    <rect x="3" y="3" width="18" height="18" rx="5" />
    <circle cx="12" cy="12" r="4" />
    <circle cx="17.5" cy="6.5" r="1.2" fill="currentColor" stroke="none" />
  </svg>
);

export const Youtube = ({ className = base }) => (
  <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
    <path d="M21.6 7.2a2.5 2.5 0 0 0-1.76-1.77C18.27 5 12 5 12 5s-6.27 0-7.84.43A2.5 2.5 0 0 0 2.4 7.2 26.1 26.1 0 0 0 2 12a26.1 26.1 0 0 0 .4 4.8 2.5 2.5 0 0 0 1.76 1.77C5.73 19 12 19 12 19s6.27 0 7.84-.43a2.5 2.5 0 0 0 1.76-1.77A26.1 26.1 0 0 0 22 12a26.1 26.1 0 0 0-.4-4.8zM10 15V9l5.2 3L10 15z"/>
  </svg>
);
