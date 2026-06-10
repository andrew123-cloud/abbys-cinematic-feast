import { Link } from "@tanstack/react-router";
import { Instagram, Facebook, Mail, Phone, MapPin } from "lucide-react";

export function Footer() {
  return (
    <footer style={{ background: "var(--bg)", color: "var(--cream)", position: "relative", overflow: "hidden" }}>
      <div className="hr-gold" />

      <div className="container-x py-20 relative">
        {/* Watermark */}
        <span className="foot-wm" aria-hidden="true">A</span>

        {/* Brand */}
        <div className="text-center mb-16 relative">
          <Link to="/" className="font-display italic" style={{ color: "var(--cream)", textDecoration: "none", fontSize: "clamp(2rem,5vw,3.5rem)" }}>
            Abby&rsquo;s Legendary Caterers
          </Link>
          <p className="eyebrow mt-4" style={{ color: "var(--gold)", opacity: 0.7 }}>
            Best Food Always — anywhere, anyhow
          </p>
          <div className="flex items-center justify-center gap-4 mt-6">
            <span className="line-dec" style={{ width: 48 }} />
            <span className="iso-pill">Dar es Salaam · Tanzania</span>
            <span className="line-dec-r" style={{ width: 48 }} />
          </div>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-10 text-sm relative">
          <div>
            <h4 className="eyebrow mb-5" style={{ color: "var(--gold)" }}>Navigate</h4>
            <ul className="space-y-3" style={{ fontFamily: "var(--font-nav)", letterSpacing: "0.15em", fontSize: "11px", opacity: 0.75 }}>
              <li><Link to="/"         className="link-underline" style={{ color: "inherit", textDecoration: "none" }}>Home</Link></li>
              <li><Link to="/about"    className="link-underline" style={{ color: "inherit", textDecoration: "none" }}>About Us</Link></li>
              <li><Link to="/services" className="link-underline" style={{ color: "inherit", textDecoration: "none" }}>Services</Link></li>
              <li><Link to="/contact"  className="link-underline" style={{ color: "inherit", textDecoration: "none" }}>Contact</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="eyebrow mb-5" style={{ color: "var(--gold)" }}>Services</h4>
            <ul className="space-y-2" style={{ fontFamily: "var(--font-nav)", letterSpacing: "0.1em", fontSize: "11px", opacity: 0.75 }}>
              <li><Link to="/services" className="link-underline" style={{ color: "inherit", textDecoration: "none" }}>Catering Services</Link></li>
              <li><Link to="/services" className="link-underline" style={{ color: "inherit", textDecoration: "none" }}>Facility Management</Link></li>
              <li><Link to="/services" className="link-underline" style={{ color: "inherit", textDecoration: "none" }}>Mentorship Program</Link></li>
              <li><Link to="/services" className="link-underline" style={{ color: "inherit", textDecoration: "none" }}>Logistics Solutions</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="eyebrow mb-5" style={{ color: "var(--gold)" }}>Contact</h4>
            <ul className="space-y-3" style={{ opacity: 0.75, fontSize: "12px" }}>
              <li className="flex items-start gap-2">
                <MapPin size={13} className="mt-0.5 flex-shrink-0" style={{ color: "var(--gold)" }} />
                <span>Plot No.362 Makenya Street, Regent Estate, Mikocheni · P.O. Box 25187, Dar es Salaam</span>
              </li>
              <li className="flex items-start gap-2">
                <Phone size={13} className="mt-0.5 flex-shrink-0" style={{ color: "var(--gold)" }} />
                <span>+255 764 512254<br />+255 784 447335</span>
              </li>
              <li className="flex items-start gap-2">
                <Mail size={13} className="mt-0.5 flex-shrink-0" style={{ color: "var(--gold)" }} />
                <span>abbys.caterers@gmail.com<br />orders@abbys.co.tz</span>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="eyebrow mb-5" style={{ color: "var(--gold)" }}>Certified</h4>
            <ul className="space-y-2" style={{ opacity: 0.75, fontSize: "11px" }}>
              {["ISO 22000:2018","ISO 9001:2015","HACCP Compliant","ICA Member"].map((c) => (
                <li key={c} className="flex items-center gap-2">
                  <span style={{ width: 3, height: 3, background: "var(--gold)", borderRadius: "50%", flexShrink: 0, opacity: 0.7 }} />
                  {c}
                </li>
              ))}
              <li className="pt-1">
                <Link to="/about" style={{ color: "var(--gold)", textDecoration: "none", fontSize: "10px", letterSpacing: "0.1em" }}>
                  All Credentials →
                </Link>
              </li>
            </ul>
            <div className="flex gap-4 mt-5" style={{ color: "var(--gold)", opacity: 0.75 }}>
              <a href="#" aria-label="Instagram" style={{ cursor: "none" }}><Instagram size={18} /></a>
              <a href="#" aria-label="Facebook"  style={{ cursor: "none" }}><Facebook size={18} /></a>
            </div>
          </div>
        </div>
      </div>

      <div style={{ borderTop: "1px solid rgba(245,240,232,0.07)" }}>
        <div className="container-x py-5 flex flex-col md:flex-row items-center justify-between text-xs gap-3" style={{ opacity: 0.45 }}>
          <span>© {new Date().getFullYear()} Abby&rsquo;s Legendary Caterers Limited. All rights reserved.</span>
          <span style={{ color: "var(--gold)" }}>Dar es Salaam, Tanzania · www.abbys.co.tz</span>
        </div>
      </div>
    </footer>
  );
}
