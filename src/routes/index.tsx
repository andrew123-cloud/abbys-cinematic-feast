import { createFileRoute, Link } from "@tanstack/react-router";
import { ChefHat, GraduationCap, Building2, Truck, Check } from "lucide-react";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Reveal } from "@/components/Reveal";
import { LitTitle } from "@/components/LitTitle";
import { RevealLine } from "@/components/RevealLine";
import { Parallax } from "@/components/Parallax";
import heroBg from "@/assets/hero-bg.jpg";
import introDish from "@/assets/intro-dish.jpg";
import serviceWeddings from "@/assets/service-weddings.jpg";
import serviceCorporate from "@/assets/service-corporate.jpg";
import servicePrivate from "@/assets/service-private.jpg";

gsap.registerPlugin(ScrollTrigger);

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Abby's Legendary Caterers — Best Food Always, Anywhere, Anyhow" },
      { name: "description", content: "Tanzania's premier ISO-certified catering company. Corporate, industrial, weddings, facility management and logistics. Est. 7+ years." },
      { property: "og:title", content: "Abby's Legendary Caterers Limited" },
      { property: "og:description", content: "Best Food Always — anywhere, anyhow. ISO 22000 & ISO 9001 certified. Dar es Salaam, Tanzania." },
    ],
  }),
  component: HomePage,
});

const services = [
  {
    icon: ChefHat,
    img: serviceWeddings,
    title: "Catering Services",
    desc: "From intimate gatherings of 10 to industrial-scale events of 5,000+. Corporate, weddings, community and concession catering — crafted with HACCP precision.",
  },
  {
    icon: GraduationCap,
    img: servicePrivate,
    title: "Mentorship Program",
    desc: "Culinary arts training, business planning and menu development for aspiring hospitality professionals. ICA member-accredited programme.",
  },
  {
    icon: Building2,
    img: serviceCorporate,
    title: "Facility Management",
    desc: "Technical services, deep cleaning, HVAC, access control, grounds and pest control — engineered around ISO 9001:2015 quality standards.",
  },
  {
    icon: Truck,
    img: introDish,
    title: "Logistics Solutions",
    desc: "Our own fleet of trucks and vans handles the full supply chain — product selection, storage, packaging and transportation. ISO 22000:2018 compliant.",
  },
];

const stats = [
  { n: "7+",    label: "Years in Tanzania" },
  { n: "5,000+",label: "Guests per event" },
  { n: "4",     label: "Service Pillars" },
  { n: "2",     label: "ISO Certifications" },
];

const isoItems = [
  { code: "ISO 22000:2018", label: "Food Safety Management" },
  { code: "ISO 9001:2015",  label: "Quality Management" },
  { code: "HACCP",          label: "Hazard Analysis System" },
];

function HomePage() {
  const heroRef   = useRef<HTMLDivElement>(null);
  const hEls      = useRef<HTMLElement[]>([]);

  useEffect(() => {
    if (typeof window === "undefined") return;
    const els = heroRef.current?.querySelectorAll<HTMLElement>(".h-el");
    if (!els || els.length === 0) return;

    gsap.set(els, { opacity: 0, y: 30 });
    gsap.to(els, {
      opacity: 1, y: 0,
      duration: 1.15,
      stagger: 0.17,
      ease: "power3.out",
      delay: 0.35,
    });
  }, []);

  return (
    <div id="top">
      {/* ── HERO ─────────────────────────────────────────────── */}
      <section
        ref={heroRef}
        className="relative h-screen min-h-[680px] w-full overflow-hidden flex items-center justify-center grain"
        style={{ background: "transparent" }}
      >
        <div className="absolute inset-0 overflow-hidden">
          <Parallax speed={10}>
            <img src={heroBg} alt="" className="w-full h-full object-cover opacity-30" />
          </Parallax>
        </div>
        <div className="absolute inset-0" style={{ background: "linear-gradient(to bottom, rgba(10,9,8,0.55) 0%, transparent 40%, rgba(10,9,8,0.75) 100%)" }} />
        <div className="candle-glow" />
        <span className="hero-corner hc-tl" /><span className="hero-corner hc-tr" />
        <span className="hero-corner hc-bl" /><span className="hero-corner hc-br" />

        <div className="relative z-10 text-center px-6 max-w-5xl">
          <div className="h-el flex items-center justify-center gap-4 mb-4">
            <span className="line-dec" style={{ width: 40 }} />
            <p className="eyebrow" style={{ color: "var(--gold)" }}>Dar es Salaam, Tanzania · Est. 7+ Years</p>
            <span className="line-dec-r" style={{ width: 40 }} />
          </div>
          <h1
            className="h-el font-display italic leading-[0.9] mt-4"
            style={{ color: "var(--cream)", fontSize: "clamp(3rem, 9vw, 8rem)", fontWeight: 400 }}
          >
            Abby&rsquo;s Legendary<br />Caterers
          </h1>
          <p
            className="h-el mt-6 italic"
            style={{ color: "var(--cream)", fontFamily: "var(--font-display)", fontSize: "clamp(1.1rem, 1.8vw, 1.5rem)", opacity: 0.85 }}
          >
            Best Food Always — anywhere, anyhow.
          </p>
          <div className="h-el mt-12 flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contact" className="btn-gold" style={{ textDecoration: "none" }}>Get a Quote</Link>
            <Link to="/services" className="btn-ghost-cream" style={{ textDecoration: "none" }}>Our Services</Link>
          </div>
        </div>

        {/* Cinematic scroll indicator */}
        <div className="h-el absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-3">
          <span className="eyebrow" style={{ writingMode: "vertical-rl", fontSize: "8px", letterSpacing: "0.35em", color: "rgba(201,168,76,0.55)" }}>Scroll</span>
          <div className="relative overflow-hidden" style={{ width: 1, height: 56, background: "rgba(201,168,76,0.12)" }}>
            <div className="si-line absolute inset-0" style={{ background: "var(--gold)" }} />
          </div>
        </div>
      </section>

      {/* ── ABOUT PREVIEW ────────────────────────────────────── */}
      <section id="about" className="section-pad relative" style={{ background: "transparent" }}>
        <div className="container-x">
          <div className="grid md:grid-cols-2 gap-12 md:gap-20 items-center">
            <Reveal from="left">
              <p className="eyebrow" style={{ color: "var(--gold)" }}>About Us</p>
              <LitTitle as="h2" className="font-display mt-5" style={{ fontSize: "clamp(2.25rem, 4.5vw, 3.75rem)", lineHeight: 1.1 }}>
                A renowned name in <em className="italic">Tanzanian</em> catering
              </LitTitle>
              <RevealLine className="line-dec" style={{ width: 56, display: "block", marginTop: "1.5rem", marginBottom: "1.5rem" }} delay={200} />
              <p className="mt-2 leading-relaxed" style={{ color: "var(--cream)", opacity: 0.85 }}>
                For more than seven years, Abby&rsquo;s Legendary Caterers Limited has delivered
                high-end catering to esteemed customers across Tanzania — corporate events,
                industrial-scale catering, community gatherings and every corporate social event in between.
              </p>
              <p className="mt-5 leading-relaxed" style={{ color: "var(--cream)", opacity: 0.85 }}>
                Our end-to-end approach to food safety applies from menu design through to delivery.
                We apply the internationally recognised{" "}
                <span style={{ color: "var(--gold-light)" }}>HACCP</span> system, verified by our
                fully integrated{" "}
                <span style={{ color: "var(--gold-light)" }}>ISO 22000:2018</span> and{" "}
                <span style={{ color: "var(--gold-light)" }}>ISO 9001:2015</span> certification.
              </p>
              <blockquote
                className="mt-10 pl-6 italic font-display"
                style={{
                  borderLeft: "1px solid var(--gold)",
                  color: "var(--gold-light)",
                  fontSize: "clamp(1.25rem, 2.2vw, 1.75rem)",
                  lineHeight: 1.4,
                }}
              >
                &ldquo;Best Food Always — anywhere, anyhow.&rdquo;
              </blockquote>
              <div className="mt-10">
                <Link to="/about" className="btn-ghost-cream" style={{ textDecoration: "none" }}>
                  Our Story &amp; Values
                </Link>
              </div>
            </Reveal>
            <Reveal from="right" delay={130}>
              <div
                className="img-w aspect-[4/5]"
                style={{ boxShadow: "0 30px 80px -20px rgba(0,0,0,0.6), inset 0 0 80px rgba(201,168,76,0.15)" }}
              >
                <img src={introDish} alt="Abby's signature plating" className="w-full h-full object-cover" loading="lazy" />
                <div className="absolute inset-0" style={{ background: "linear-gradient(180deg, transparent 60%, rgba(10,9,8,0.6) 100%)" }} />
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ── STATS STRIP ─────────────────────────────────────── */}
      <section className="py-16" style={{ background: "rgba(10,9,8,0.5)", borderTop: "1px solid rgba(201,168,76,0.12)", borderBottom: "1px solid rgba(201,168,76,0.12)" }}>
        <div className="container-x">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {stats.map((s, i) => (
              <Reveal key={s.label} delay={i * 80} from="up">
                <p className="stat-n">{s.n}</p>
                <p className="eyebrow mt-3" style={{ color: "rgba(232,220,200,0.6)", fontSize: "0.65rem" }}>{s.label}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── SERVICES OVERVIEW ────────────────────────────────── */}
      <section id="services" className="section-pad relative" style={{ background: "transparent" }}>
        <div className="container-x">
          <Reveal from="up">
            <p className="eyebrow text-center" style={{ color: "var(--gold)" }}>What We Offer</p>
            <LitTitle as="h2" className="font-display text-center mt-5" style={{ fontSize: "clamp(2.25rem, 5vw, 4rem)", lineHeight: 1.1 }}>
              Our Services
            </LitTitle>
            <RevealLine className="line-dec" style={{ width: 64, display: "block", margin: "2rem auto 0" }} delay={200} />
          </Reveal>

          <div className="grid md:grid-cols-2 gap-6 mt-16">
            {services.map((s, i) => (
              <Reveal key={s.title} delay={i * 90} from="up" distance={26}>
                <article className="svc-card h-full">
                  <div className="img-w aspect-[16/9]">
                    <img src={s.img} alt={s.title} loading="lazy" style={{ opacity: 0.75 }} />
                    <div className="absolute inset-0" style={{ background: "linear-gradient(180deg, transparent 40%, rgba(10,9,8,0.88) 100%)" }} />
                    <s.icon size={24} className="absolute bottom-5 left-6" style={{ color: "var(--gold)" }} />
                  </div>
                  <div className="p-8">
                    <h3 className="font-display italic" style={{ color: "var(--cream)", fontSize: "1.55rem" }}>{s.title}</h3>
                    <span className="gold-rule my-4" />
                    <p className="leading-relaxed text-sm" style={{ color: "var(--cream)", opacity: 0.72 }}>{s.desc}</p>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>

          <Reveal from="up" delay={200}>
            <div className="mt-14 text-center">
              <Link to="/services" className="btn-gold" style={{ textDecoration: "none" }}>
                Explore All Services
              </Link>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ── ISO CERTIFICATIONS ────────────────────────────────── */}
      <section className="section-pad" style={{ background: "rgba(10,9,8,0.5)" }}>
        <div className="container-x">
          <Reveal from="up">
            <p className="eyebrow text-center" style={{ color: "var(--gold)" }}>Safety &amp; Quality</p>
            <LitTitle as="h2" className="font-display text-center mt-5" style={{ fontSize: "clamp(2.25rem, 4vw, 3.5rem)", lineHeight: 1.1 }}>
              Safety Is Our Culture
            </LitTitle>
            <div className="hr-gold max-w-xs mx-auto mt-8" />
          </Reveal>

          <div className="grid md:grid-cols-3 gap-6 mt-16 max-w-4xl mx-auto">
            {isoItems.map((item, i) => (
              <Reveal key={item.code} delay={i * 100} from="up" distance={26}>
                <div className="cred-badge p-8 text-center">
                  <p className="font-display italic" style={{ color: "var(--gold)", fontSize: "2rem", lineHeight: 1 }}>{item.code}</p>
                  <p className="text-sm mt-3" style={{ color: "var(--cream)", opacity: 0.72 }}>{item.label}</p>
                  <Check size={16} className="mx-auto mt-4" style={{ color: "var(--gold)", opacity: 0.7 }} />
                </div>
              </Reveal>
            ))}
          </div>

          <Reveal from="up" delay={100}>
            <div className="flex flex-wrap justify-center gap-3 mt-10">
              {["ISO 22000:2018","ISO 9001:2015","HACCP","ICA Member","LATRA Certified"].map((b) => (
                <span key={b} className="iso-pill">{b}</span>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* ── CTA ──────────────────────────────────────────────── */}
      <section className="section-pad relative overflow-hidden" style={{ background: "rgba(17,16,24,0.65)" }}>
        <div
          className="glow-orb pointer-events-none"
          style={{
            left: "50%", top: "50%", transform: "translate(-50%,-50%)",
            width: "60vw", height: "60vw", maxWidth: 700, maxHeight: 700,
            background: "radial-gradient(circle, rgba(201,168,76,0.18) 0%, transparent 65%)",
          }}
        />
        <div className="container-x max-w-3xl text-center relative">
          <Reveal from="up">
            <p className="eyebrow" style={{ color: "var(--gold-light)" }}>Get in Touch</p>
            <LitTitle as="h2" className="font-display italic mt-5" style={{ fontSize: "clamp(2.25rem, 5vw, 4rem)", lineHeight: 1.1 }}>
              Plan your next event with Abby&rsquo;s
            </LitTitle>
            <p className="mt-6 opacity-90" style={{ color: "var(--cream)" }}>
              From 10 to 5,000+ guests. Tell us about your event and our team will be in touch.
            </p>
            <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/contact" className="btn-gold" style={{ textDecoration: "none" }}>
                Request a Quote
              </Link>
              <a
                href="tel:+255764512254"
                className="btn-ghost-cream"
                style={{ textDecoration: "none" }}
              >
                +255 764 512254
              </a>
            </div>

            <div className="mt-20 grid sm:grid-cols-3 gap-8 text-left max-w-3xl mx-auto pt-12" style={{ borderTop: "1px solid rgba(201,168,76,0.12)" }}>
              <div>
                <p className="eyebrow" style={{ color: "var(--gold-light)" }}>Registered Office</p>
                <p className="mt-4 leading-relaxed text-sm opacity-90" style={{ color: "var(--cream)" }}>
                  Plot No.362 Makenya Street<br />Regent Estate, Mikocheni<br />P.O. Box 25187<br />Dar es Salaam, Tanzania
                </p>
              </div>
              <div>
                <p className="eyebrow" style={{ color: "var(--gold-light)" }}>Phone</p>
                <p className="mt-4 leading-relaxed text-sm opacity-90" style={{ color: "var(--cream)" }}>
                  +255 764 512254<br />+255 784 447335
                </p>
              </div>
              <div>
                <p className="eyebrow" style={{ color: "var(--gold-light)" }}>Email &amp; Web</p>
                <p className="mt-4 leading-relaxed text-sm break-words opacity-90" style={{ color: "var(--cream)" }}>
                  abbys.caterers@gmail.com<br />orders@abbys.co.tz<br />
                  <span style={{ color: "var(--gold-light)" }}>www.abbys.co.tz</span>
                </p>
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </div>
  );
}
