import { Instagram, Facebook, Mail, Phone, MapPin } from "lucide-react";

export function Footer() {
  return (
    <footer style={{ background: "var(--bg)", color: "var(--cream)", borderTop: "1px solid var(--gold)" }}>
      <div className="container-x py-20">
        <div className="text-center mb-14">
          <a href="#top" className="font-display italic text-5xl" style={{ color: "var(--cream)" }}>
            Abby&rsquo;s
          </a>
          <p className="eyebrow mt-4 opacity-70" style={{ color: "var(--gold-light)" }}>
            Where warmth meets craft
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-10 text-sm">
          <div>
            <h4 className="eyebrow mb-5" style={{ color: "var(--gold-light)" }}>Navigate</h4>
            <ul className="space-y-3 opacity-80" style={{ fontFamily: "var(--font-nav)", letterSpacing: "0.15em" }}>
              <li><a href="#restaurant" className="link-underline">The Restaurant</a></li>
              <li><a href="#menu" className="link-underline">Menu &amp; Wines</a></li>
              <li><a href="#team" className="link-underline">Our Team</a></li>
              <li><a href="#reserve" className="link-underline">Reserve</a></li>
            </ul>
          </div>
          <div>
            <h4 className="eyebrow mb-5" style={{ color: "var(--gold-light)" }}>Hours</h4>
            <ul className="space-y-2 opacity-80">
              <li>Tue – Thu · 6pm – 10pm</li>
              <li>Fri – Sat · 6pm – 11pm</li>
              <li>Sun · 5pm – 9pm</li>
              <li>Mon · Closed</li>
            </ul>
          </div>
          <div>
            <h4 className="eyebrow mb-5" style={{ color: "var(--gold-light)" }}>Contact</h4>
            <ul className="space-y-3 opacity-80">
              <li className="flex items-start gap-2"><MapPin size={14} className="mt-1" style={{ color: "var(--gold)" }}/> 14 Riverside Avenue<br/>Nairobi</li>
              <li className="flex items-center gap-2"><Phone size={14} style={{ color: "var(--gold)" }}/> +254 712 345 678</li>
              <li className="flex items-center gap-2"><Mail size={14} style={{ color: "var(--gold)" }}/> hello@abbys.dining</li>
            </ul>
          </div>
          <div>
            <h4 className="eyebrow mb-5" style={{ color: "var(--gold-light)" }}>Follow</h4>
            <div className="flex gap-4" style={{ color: "var(--gold)" }}>
              <a href="#" aria-label="Instagram"><Instagram size={20} /></a>
              <a href="#" aria-label="Facebook"><Facebook size={20} /></a>
            </div>
          </div>
        </div>
      </div>

      <div style={{ borderTop: "1px solid rgba(240,232,192,0.1)" }}>
        <div className="container-x py-6 flex flex-col md:flex-row items-center justify-between text-xs opacity-60 gap-3">
          <span>© {new Date().getFullYear()} Abby&rsquo;s. All rights reserved.</span>
          <span className="flex gap-3" style={{ color: "var(--gold-light)" }}>
            <button>EN</button><span>·</span><button>FR</button><span>·</span><button>SW</button>
          </span>
        </div>
      </div>
    </footer>
  );
}
