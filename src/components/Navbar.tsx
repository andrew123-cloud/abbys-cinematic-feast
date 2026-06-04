import { Link, useRouterState } from "@tanstack/react-router";
import { Menu, X } from "lucide-react";
import { useEffect, useState } from "react";

const links = [
  { to: "/", label: "Home" },
  { to: "/menu", label: "Menu" },
  { to: "/experience", label: "Experience" },
  { to: "/team", label: "Team" },
  { to: "/contact", label: "Contact" },
] as const;

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const { location } = useRouterState();
  const isHome = location.pathname === "/";

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => { setOpen(false); }, [location.pathname]);

  const solid = scrolled || !isHome;

  return (
    <>
      <header
        className="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
        style={{
          backgroundColor: solid ? "var(--cocoa)" : "transparent",
          boxShadow: solid ? "0 1px 0 rgba(245,237,203,0.06)" : "none",
        }}
      >
        <div className="container-x flex items-center justify-between" style={{ height: solid ? 68 : 84 }}>
          <Link to="/" className="font-display italic text-cream text-2xl md:text-3xl tracking-wide" style={{ color: "var(--cream)" }}>
            Abby&rsquo;s
          </Link>

          <nav className="hidden lg:flex items-center gap-10">
            {links.map((l) => (
              <Link
                key={l.to}
                to={l.to}
                className="eyebrow transition-colors duration-300"
                style={{ color: "var(--cream)" }}
                activeProps={{ style: { color: "var(--gold-light)" } }}
                activeOptions={{ exact: l.to === "/" }}
              >
                {l.label}
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-4">
            <Link
              to="/contact"
              className="hidden md:inline-flex items-center justify-center px-5 py-2.5 rounded-full text-xs uppercase tracking-[0.25em] transition-colors duration-300"
              style={{ background: "var(--gold)", color: "var(--cocoa)" }}
            >
              Book Now
            </Link>
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

      {/* Mobile menu */}
      <div
        className="fixed inset-0 z-[60] transition-opacity duration-300"
        style={{
          background: "var(--cocoa)",
          opacity: open ? 1 : 0,
          pointerEvents: open ? "auto" : "none",
        }}
      >
        <div className="container-x flex items-center justify-between h-[84px]">
          <span className="font-display italic text-2xl" style={{ color: "var(--cream)" }}>Abby&rsquo;s</span>
          <button aria-label="Close menu" onClick={() => setOpen(false)} style={{ color: "var(--cream)" }}>
            <X size={22} />
          </button>
        </div>
        <nav className="container-x mt-16 flex flex-col gap-8">
          {links.map((l) => (
            <Link
              key={l.to}
              to={l.to}
              className="font-display text-4xl"
              style={{ color: "var(--cream)" }}
              activeProps={{ style: { color: "var(--gold-light)" } }}
              activeOptions={{ exact: l.to === "/" }}
            >
              {l.label}
            </Link>
          ))}
          <Link
            to="/contact"
            className="btn-gold mt-6 self-start"
          >
            Book Now
          </Link>
        </nav>
      </div>
    </>
  );
}
