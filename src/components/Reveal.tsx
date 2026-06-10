import { useEffect, useRef, type ReactNode } from "react";
import { gsap } from "gsap";

interface RevealProps {
  children: ReactNode;
  delay?: number;
  className?: string;
  as?: "div" | "section" | "span" | "li" | "article";
  from?: "up" | "left" | "right" | "fade";
  distance?: number;
  duration?: number;
}

export function Reveal({
  children,
  delay = 0,
  className = "",
  as: Tag = "div",
  from = "up",
  distance,
  duration = 1.15,
}: RevealProps) {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el || typeof window === "undefined") return;

    const d = distance ?? (from === "up" ? 32 : 44);
    const fromVars: gsap.TweenVars = { opacity: 0 };
    if (from === "up")    fromVars.y = d;
    if (from === "left")  fromVars.x = -d;
    if (from === "right") fromVars.x = d;

    gsap.set(el, fromVars);

    let animated = false;

    const io = new IntersectionObserver(
      (entries) => {
        if (entries[0]?.isIntersecting && !animated) {
          animated = true;
          gsap.to(el, { opacity: 1, x: 0, y: 0, duration, ease: "power3.out", delay: delay / 1000 });
          io.disconnect();
        }
      },
      { rootMargin: "0px 0px -10% 0px", threshold: 0.01 },
    );

    io.observe(el);

    return () => {
      io.disconnect();
      gsap.killTweensOf(el);
      if (!animated) gsap.set(el, { clearProps: "opacity,x,y" });
    };
  }, []);

  const Comp = Tag as any;
  return (
    <Comp ref={ref as any} className={className}>
      {children}
    </Comp>
  );
}
