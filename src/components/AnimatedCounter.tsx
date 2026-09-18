"use client";

import { useEffect, useRef, useState } from "react";
import { useInView } from "framer-motion";

// Animates "500+", "100%", "24/7" etc. by counting up the numeric part
// once the element scrolls into view, keeping any surrounding characters
// (+, %, /) intact.
export default function AnimatedCounter({ value }: { value: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-40px" });
  const [display, setDisplay] = useState(value.replace(/\d/g, "0"));

  useEffect(() => {
    if (!isInView) return;

    const numberMatch = value.match(/\d+/);
    if (!numberMatch) return;
    const target = parseInt(numberMatch[0], 10);
    const prefix = value.slice(0, numberMatch.index);
    const suffix = value.slice((numberMatch.index ?? 0) + numberMatch[0].length);

    const duration = 1200;
    const start = performance.now();

    function tick(now: number) {
      const progress = Math.min((now - start) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      const current = Math.round(target * eased);
      setDisplay(`${prefix}${current}${suffix}`);
      if (progress < 1) requestAnimationFrame(tick);
    }
    requestAnimationFrame(tick);
  }, [isInView, value]);

  return <span ref={ref}>{display}</span>;
}
