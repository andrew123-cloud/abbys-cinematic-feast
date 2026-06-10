import { useEffect, useRef, type ReactNode } from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { gsap } from "gsap";

gsap.registerPlugin(ScrollTrigger);

interface LitTitleProps {
  children: ReactNode;
  as?: "h1" | "h2" | "h3";
  className?: string;
  style?: React.CSSProperties;
}

export function LitTitle({ children, as: Tag = "h2", className = "", style }: LitTitleProps) {
  const wrapRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const wrap = wrapRef.current;
    if (!wrap || typeof window === "undefined") return;

    const sweepEl = wrap.querySelector<HTMLElement>(".lit-sweep");
    const glowEl  = wrap.querySelector<HTMLElement>(".lit-glow");
    if (!sweepEl || !glowEl) return;

    const update = (progress: number) => {
      const val = -30 + progress * 160;
      sweepEl.style.setProperty("--light-start", `${val}%`);
      glowEl.style.setProperty("--light-start", `${val}%`);
      // Linear fade: 0.06 at progress=0, 0.84 at progress=1
      sweepEl.style.setProperty("--base-op", String(Math.min(0.06 + progress * 0.82, 0.84)));
    };

    const st = ScrollTrigger.create({
      trigger: wrap,
      start: "top 88%",
      end: "top 15%",
      scrub: 1.4,
      onUpdate(self) { update(self.progress); },
    });

    // Apply correct initial state for current scroll position
    // (avoids invisible headings when element is already past the start point)
    update(st.progress);

    return () => st.kill();
  }, []);

  return (
    <div ref={wrapRef} className={`lit-title-wrap ${className}`} style={style}>
      <div aria-hidden="true" className="lit-layer lit-glow">{children}</div>
      <div aria-hidden="true" className="lit-layer lit-dim">{children}</div>
      <Tag className="lit-layer lit-sweep">{children}</Tag>
    </div>
  );
}
