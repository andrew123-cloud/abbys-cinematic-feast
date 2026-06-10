import { useEffect, useRef } from "react";
import { gsap } from "gsap";

interface RevealLineProps {
  className?: string;
  style?: React.CSSProperties;
  delay?: number;
}

export function RevealLine({ className = "line-dec", style, delay = 0 }: RevealLineProps) {
  const ref = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el || typeof window === "undefined") return;

    gsap.set(el, { scaleX: 0, transformOrigin: "left center" });

    let animated = false;

    const io = new IntersectionObserver(
      (entries) => {
        if (entries[0]?.isIntersecting && !animated) {
          animated = true;
          gsap.to(el, { scaleX: 1, duration: 0.9, ease: "power3.out", delay: delay / 1000 });
          io.disconnect();
        }
      },
      { rootMargin: "0px 0px -8% 0px", threshold: 0.01 },
    );

    io.observe(el);

    return () => {
      io.disconnect();
      gsap.killTweensOf(el);
      if (!animated) gsap.set(el, { clearProps: "transform" });
    };
  }, []);

  return <span ref={ref} className={className} style={style} />;
}
