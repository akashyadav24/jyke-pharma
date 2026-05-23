import { useEffect, useRef, useState } from 'react';

export function useCountUp(target, { duration = 1800, start = false } = {}) {
  const [value, setValue] = useState(0);
  const rafRef = useRef(0);
  const startedRef = useRef(false);

  useEffect(() => {
    if (!start || startedRef.current) return;
    startedRef.current = true;
    const startTs = performance.now();
    const tick = (now) => {
      const p = Math.min(1, (now - startTs) / duration);
      const eased = 1 - Math.pow(1 - p, 3);
      setValue(Math.round(eased * target));
      if (p < 1) rafRef.current = requestAnimationFrame(tick);
    };
    rafRef.current = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(rafRef.current);
  }, [start, target, duration]);

  return value;
}
