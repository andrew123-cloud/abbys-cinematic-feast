import { Menu, X } from "lucide-react";
import { useEffect, useState } from "react";

const links = [
  { href: "#restaurant", label: "The Restaurant" },
  { href: "#menu", label: "Menu & Wines" },
  { href: "#team", label: "Our Team" },
  { href: "#reserve", label: "Reserve" },
] as const;

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <header
        className="fixed top-0 left-0 right-0 z-50 transition-all duration-500"
        style={{
          backgroundColor: scrolled ? "rgba(59, 31, 11, 0.92)" : "transparent",
          backdropFilter: scrolled ? "blur(12px)" : "none",
          WebkitBackdropFilter: scrolled ? "blur(12px)" : "none",
          borderBottom: scrolled ? "1px solid rgba(201, 150, 58, 0.35)" : "1px solid transparent",
        }}
      >
        <div className="container-x flex items-center justify-between" style={{ height: scrolled ? 70 : 92 }}>
          <a href="#top" className="font-display italic text-2xl md:text-3xl tracking-wide" style={{ color: "var(--cream)" }}>
            Abby&rsquo;s
          </a>

          <nav className="hidden lg:flex items-center gap-10">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className="eyebrow transition-colors duration-300 hover:text-[var(--gold-light)]"
                style={{ color: "var(--cream)" }}
              >
                {l.label}
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-4">
            <a
              href="#reserve"
              className="hidden md:inline-flex items-center justify-center px-5 py-2.5 text-[11px] uppercase tracking-[0.32em] transition-all duration-300"
              style={{
                border: "1px solid var(--cream)",
                color: "var(--gold-light)",
                fontFamily: "var(--font-nav)",
              }}
              onMouseEnter={(e) => { e.currentTarget.style.boxShadow = "0 0 20px rgba(232,196,106,0.6)"; e.currentTarget.style.borderColor = "var(--gold-light)"; }}
              onMouseLeave={(e) => { e.currentTarget.style.boxShadow = "none"; e.currentTarget.style.borderColor = "var(--cream)"; }}
            >
              Book Now
            </a>
            <button
              aria-label="Open menu"
              className="lg:hidden p-2"
              onClick={() => setOpen(true)}
              style={{ color: "var(--cream)" }}
            >
              <Menu size={22} />
            </button>
          </div>
        </div>
      </header>

      <div
        className="fixed inset-0 z-[60] transition-opacity duration-300"
        style={{
          background: "var(--cocoa)",
          opacity: open ? 1 : 0,
          pointerEvents: open ? "auto" : "none",
        }}
      >
        <div className="container-x flex items-center justify-between h-[92px]">
          <span className="font-display italic text-2xl" style={{ color: "var(--cream)" }}>Abby&rsquo;s</span>
          <button aria-label="Close menu" onClick={() => setOpen(false)} style={{ color: "var(--cream)" }}>
            <X size={22} />
          </button>
        </div>
        <nav className="container-x mt-16 flex flex-col gap-8">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className="font-display text-4xl italic"
              style={{ color: "var(--cream)" }}
            >
              {l.label}
            </a>
          ))}
          <a href="#reserve" onClick={() => setOpen(false)} className="btn-gold mt-6 self-start">
            Book Now
          </a>
        </nav>
      </div>
    </>
  );
}
