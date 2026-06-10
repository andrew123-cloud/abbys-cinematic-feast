import { useEffect, useRef } from "react";
import { useRouterState } from "@tanstack/react-router";
import { gsap } from "gsap";
import abbysLogo from "@/assets/abbys-logo.png";

export function PageTransition() {
  const overlayRef = useRef<HTMLDivElement>(null);
  const logoRef    = useRef<HTMLImageElement>(null);
  const tlRef      = useRef<gsap.core.Timeline | null>(null);
  const firstMount = useRef(true);

  const { location } = useRouterState();

  useEffect(() => {
    // Skip the initial page load — no transition on first render
    if (firstMount.current) {
      firstMount.current = false;
      return;
    }

    const overlay = overlayRef.current;
    const logo    = logoRef.current;
    if (!overlay || !logo) return;

    tlRef.current?.kill();

    // Reset initial states
    gsap.set(overlay, { opacity: 0, pointerEvents: "all" });
    gsap.set(logo, { scale: 0.75, opacity: 0, y: 12 });

    tlRef.current = gsap.timeline()
      // Dark overlay sweeps in, covering the old page
      .to(overlay, { opacity: 1, duration: 0.28, ease: "power2.out" })
      // Logo rises and appears
      .to(logo, {
        scale: 1, opacity: 1, y: 0,
        duration: 0.48, ease: "back.out(1.6)",
      }, "-=0.08")
      // Brief hold so user registers the logo
      .to({}, { duration: 0.38 })
      // Logo fades out upward
      .to(logo, { scale: 1.06, opacity: 0, y: -8, duration: 0.32, ease: "power2.in" })
      // Overlay curtains away, revealing the new page
      .to(overlay, {
        opacity: 0, duration: 0.42, ease: "power3.in",
        onComplete() {
          if (overlay) overlay.style.pointerEvents = "none";
        },
      }, "-=0.12");

    return () => { tlRef.current?.kill(); };
  }, [location.pathname]);

  return (
    <div
      ref={overlayRef}
      style={{
        position: "fixed", inset: 0, zIndex: 9990,
        background: "var(--bg)",
        display: "flex", alignItems: "center", justifyContent: "center",
        flexDirection: "column", gap: 22,
        opacity: 0, pointerEvents: "none",
      }}
    >
      {/* Grain texture on overlay for luxury feel */}
      <div style={{
        position: "absolute", inset: 0, pointerEvents: "none",
        backgroundImage: "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='180' height='180'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.75' numOctaves='4' stitchTiles='stitch'/%3E%3CfeColorMatrix type='saturate' values='0'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E\")",
        backgroundSize: "180px 180px", opacity: 0.18, mixBlendMode: "overlay",
      }} />

      {/* Logo */}
      <img
        ref={logoRef}
        src={abbysLogo}
        alt="Abby's Legendary Caterers"
        draggable={false}
        style={{
          width: "clamp(130px, 16vw, 200px)",
          opacity: 0,
          userSelect: "none",
          filter: "drop-shadow(0 4px 28px rgba(201,168,76,0.35))",
        }}
      />

      {/* Animated sound wave bars below logo */}
      <div style={{ display: "flex", alignItems: "flex-end", gap: 4, height: 16 }}>
        <span className="s-bar" />
        <span className="s-bar" />
        <span className="s-bar" />
        <span className="s-bar" />
      </div>
    </div>
  );
}
