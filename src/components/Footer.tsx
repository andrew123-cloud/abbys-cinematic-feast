import { Link } from "@tanstack/react-router";
import { Instagram, Facebook, Mail, Phone, MapPin } from "lucide-react";

export function Footer() {
  return (
    <footer style={{ background: "var(--ink)", color: "var(--cream)" }}>
      <div className="container-x py-20">
        <div className="text-center mb-14">
          <Link to="/" className="font-display italic text-4xl" style={{ color: "var(--cream)" }}>
            Abby&rsquo;s
          </Link>
          <p className="eyebrow mt-3 opacity-60">Crafted with love · Served with elegance</p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-10 text-sm">
          <div>
            <h4 className="eyebrow mb-5" style={{ color: "var(--gold-light)" }}>Navigate</h4>
            <ul className="space-y-3 opacity-80">
              <li><Link to="/">Home</Link></li>
              <li><Link to="/menu">Menu</Link></li>
              <li><Link to="/experience">Experience</Link></li>
              <li><Link to="/team">Team</Link></li>
              <li><Link to="/contact">Contact</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="eyebrow mb-5" style={{ color: "var(--gold-light)" }}>Services</h4>
            <ul className="space-y-3 opacity-80">
              <li>Weddings</li>
              <li>Corporate</li>
              <li>Private Gatherings</li>
              <li>Bespoke Tastings</li>
            </ul>
          </div>
          <div>
            <h4 className="eyebrow mb-5" style={{ color: "var(--gold-light)" }}>Contact</h4>
            <ul className="space-y-3 opacity-80">
              <li className="flex items-start gap-2"><MapPin size={14} className="mt-1" /> 14 Riverside Avenue<br/>Nairobi</li>
              <li className="flex items-center gap-2"><Phone size={14} /> +254 712 345 678</li>
              <li className="flex items-center gap-2"><Mail size={14} /> hello@abbys.catering</li>
            </ul>
          </div>
          <div>
            <h4 className="eyebrow mb-5" style={{ color: "var(--gold-light)" }}>Follow</h4>
            <div className="flex gap-4 opacity-80">
              <a href="#" aria-label="Instagram"><Instagram size={18} /></a>
              <a href="#" aria-label="Facebook"><Facebook size={18} /></a>
            </div>
          </div>
        </div>
      </div>

      <div className="border-t" style={{ borderColor: "rgba(245,237,203,0.1)" }}>
        <div className="container-x py-6 flex flex-col md:flex-row items-center justify-between text-xs opacity-60 gap-3">
          <span>© {new Date().getFullYear()} Abby&rsquo;s Catering. All rights reserved.</span>
          <span className="flex gap-3">
            <button>EN</button><span>·</span><button>SW</button><span>·</span><button>FR</button>
          </span>
        </div>
      </div>
    </footer>
  );
}
