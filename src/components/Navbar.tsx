import { Link, useRouterState } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import abbysLogo from "@/assets/abbys-logo.png";

const links = [
  { to: "/",         label: "Home" },
  { to: "/about",    label: "About" },
  { to: "/services", label: "Services" },
  { to: "/contact",  label: "Contact" },
] as const;

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen]         = useState(false);
  const { location }            = useRouterState();

  const isActive = (to: string) =>
    to === "/" ? location.pathname === "/" : location.pathname.startsWith(to);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => { if (open) setOpen(false); }, [location.pathname]);

  return (
    <>
      <header
        id="navbar"
        className="fixed top-0 left-0 right-0 z-50"
        style={{
          transition: "background 0.55s ease, backdrop-filter 0.55s ease, border-color 0.55s ease, padding 0.4s ease",
          backgroundColor: scrolled ? "rgba(10,9,8,0.94)" : "transparent",
          backdropFilter:  scrolled ? "blur(14px)" : "none",
          WebkitBackdropFilter: scrolled ? "blur(14px)" : "none",
          borderBottom: scrolled ? "1px solid rgba(201,168,76,0.22)" : "1px solid transparent",
        }}
      >
        <div
          className="container-x flex items-center justify-between"
          style={{ height: scrolled ? 68 : 92, transition: "height 0.4s ease" }}
        >
          {/* Logo */}
          <Link to="/" style={{ textDecoration: "none", display: "inline-flex", alignItems: "center" }}>
            <img
              src={abbysLogo}
              alt="Abby's Legendary Caterers"
              draggable={false}
              style={{
                height: scrolled ? 42 : 56,
                width: "auto",
                display: "block",
                transition: "height 0.4s ease",
                filter: "drop-shadow(0 2px 12px rgba(201,168,76,0.22))",
                userSelect: "none",
              }}
            />
          </Link>

          {/* Desktop nav */}
          <nav className="hidden lg:flex items-center gap-10">
            {links.map((l) => (
              <Link
                key={l.to}
                to={l.to}
                className={`nav-lnk${isActive(l.to) ? " active" : ""}`}
              >
                {l.label}
              </Link>
            ))}
          </nav>

          {/* Right side */}
          <div className="flex items-center gap-5">
            {/* Sound wave — decorative */}
            <div className="hidden md:flex items-end gap-[3px] h-4 cursor-none">
              <span className="s-bar" />
              <span className="s-bar" />
              <span className="s-bar" />
              <span className="s-bar" />
            </div>

            <Link
              to="/contact"
              className="hidden md:inline-flex btn-gold"
              style={{ padding: "0.5rem 1.4rem", fontSize: "9px" }}
            >
              Get a Quote
            </Link>

            {/* Animated 3-bar hamburger → X */}
            <button
              aria-label={open ? "Close menu" : "Open menu"}
              className="lg:hidden flex flex-col gap-[6px] p-2"
              onClick={() => setOpen(!open)}
              style={{ cursor: "none" }}
            >
              <span className="ham-bar" style={{
                width: 24,
                background: open ? "var(--gold)" : "var(--cream)",
                transform: open ? "rotate(45deg) translate(5px,5px)" : "none",
              }} />
              <span className="ham-bar" style={{
                width: 16, alignSelf: "flex-end",
                background: "var(--gold)",
                opacity: open ? 0 : 1,
              }} />
              <span className="ham-bar" style={{
                width: 20,
                background: open ? "var(--gold)" : "var(--cream)",
                transform: open ? "rotate(-45deg) translate(5px,-5px)" : "none",
              }} />
            </button>
          </div>
        </div>
      </header>

      {/* Mobile overlay */}
      <div
        className="fixed inset-0 z-[59]"
        style={{
          background: "rgba(10,9,8,0.5)",
          opacity: open ? 1 : 0,
          pointerEvents: open ? "auto" : "none",
          transition: "opacity 0.45s ease",
        }}
        onClick={() => setOpen(false)}
      />

      {/* Mobile drawer */}
      <div
        id="mob-menu"
        className={open ? "open" : ""}
        style={{
          position: "fixed", top: 0, right: 0, bottom: 0,
          width: "min(380px,90vw)",
          background: "var(--dark)", zIndex: 60,
          borderLeft: "1px solid rgba(201,168,76,0.12)",
        }}
      >
        <div
          className="flex items-center justify-between px-8"
          style={{ height: 88, borderBottom: "1px solid rgba(201,168,76,0.08)" }}
        >
          <img
            src={abbysLogo}
            alt="Abby's Legendary Caterers"
            draggable={false}
            style={{ height: 44, width: "auto", display: "block", userSelect: "none" }}
          />
          <button
            aria-label="Close menu"
            onClick={() => setOpen(false)}
            className="relative w-6 h-6 p-1"
            style={{ cursor: "none" }}
          >
            <span className="absolute top-1/2 left-0 w-full" style={{ height:1, background:"var(--cream)", transform:"rotate(45deg)", pointerEvents:"none" }} />
            <span className="absolute top-1/2 left-0 w-full" style={{ height:1, background:"var(--cream)", transform:"rotate(-45deg)", pointerEvents:"none" }} />
          </button>
        </div>

        <nav className="px-8 mt-12 flex flex-col gap-7">
          {links.map((l) => (
            <Link
              key={l.to}
              to={l.to}
              onClick={() => setOpen(false)}
              className="mob-l font-display italic"
              style={{
                fontSize: "clamp(2.4rem,8vw,3.2rem)",
                color: isActive(l.to) ? "var(--gold)" : "var(--cream)",
                textDecoration: "none",
              }}
            >
              {l.label}
            </Link>
          ))}

          <Link
            to="/contact"
            onClick={() => setOpen(false)}
            className="mob-l btn-gold mt-6 self-start"
            style={{ textDecoration: "none" }}
          >
            Get a Quote
          </Link>
        </nav>

        <div
          className="absolute bottom-8 left-8 right-8 flex items-end gap-[3px]"
          style={{ height: 18, opacity: 0.35 }}
        >
          <span className="s-bar" />
          <span className="s-bar" />
          <span className="s-bar" />
          <span className="s-bar" />
        </div>
      </div>
    </>
  );
}
