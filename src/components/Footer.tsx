import { Instagram, Facebook, Mail, Phone, MapPin } from "lucide-react";

export function Footer() {
  return (
    <footer style={{ background: "var(--bg)", color: "var(--cream)", borderTop: "1px solid var(--gold)" }}>
      <div className="container-x py-20">
        <div className="text-center mb-14">
          <a href="#top" className="font-display italic text-5xl" style={{ color: "var(--cream)" }}>
            Abby&rsquo;s Legendary Caterers
          </a>
          <p className="eyebrow mt-4 opacity-70" style={{ color: "var(--gold-light)" }}>
            Best Food Always — anywhere, anyhow
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-10 text-sm">
          <div>
            <h4 className="eyebrow mb-5" style={{ color: "var(--gold-light)" }}>Navigate</h4>
            <ul className="space-y-3 opacity-80" style={{ fontFamily: "var(--font-nav)", letterSpacing: "0.15em" }}>
              <li><a href="#about" className="link-underline">About</a></li>
              <li><a href="#services" className="link-underline">Services</a></li>
              <li><a href="#vision" className="link-underline">Vision</a></li>
              <li><a href="#credentials" className="link-underline">Credentials</a></li>
              <li><a href="#contact" className="link-underline">Contact</a></li>
            </ul>
          </div>
          <div>
            <h4 className="eyebrow mb-5" style={{ color: "var(--gold-light)" }}>Services</h4>
            <ul className="space-y-2 opacity-80">
              <li>Catering Services</li>
              <li>Facility Management</li>
              <li>Mentorship Program</li>
              <li>Logistics Solutions</li>
            </ul>
          </div>
          <div>
            <h4 className="eyebrow mb-5" style={{ color: "var(--gold-light)" }}>Contact</h4>
            <ul className="space-y-3 opacity-80">
              <li className="flex items-start gap-2">
                <MapPin size={14} className="mt-1" style={{ color: "var(--gold)" }} />
                <span>Dar es Salaam, Tanzania</span>
              </li>
              <li className="flex items-center gap-2">
                <Phone size={14} style={{ color: "var(--gold)" }} />
                <span>+255 000 000 000</span>
              </li>
              <li className="flex items-center gap-2">
                <Mail size={14} style={{ color: "var(--gold)" }} />
                <span>hello@abbyscaterers.co.tz</span>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="eyebrow mb-5" style={{ color: "var(--gold-light)" }}>Certified</h4>
            <ul className="space-y-2 opacity-80 text-xs">
              <li>ISO 22000:2018</li>
              <li>ISO 9001:2015</li>
              <li>HACCP Compliant</li>
            </ul>
            <div className="flex gap-4 mt-5" style={{ color: "var(--gold)" }}>
              <a href="#" aria-label="Instagram"><Instagram size={20} /></a>
              <a href="#" aria-label="Facebook"><Facebook size={20} /></a>
            </div>
          </div>
        </div>
      </div>

      <div style={{ borderTop: "1px solid rgba(240,232,192,0.1)" }}>
        <div className="container-x py-6 flex flex-col md:flex-row items-center justify-between text-xs opacity-60 gap-3">
          <span>© {new Date().getFullYear()} Abby&rsquo;s Legendary Caterers Limited. All rights reserved.</span>
          <span style={{ color: "var(--gold-light)" }}>Tanzania</span>
        </div>
      </div>
    </footer>
  );
}
