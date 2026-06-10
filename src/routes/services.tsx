import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import { ChefHat, GraduationCap, Building2, Truck, Check } from "lucide-react";
import { Reveal } from "@/components/Reveal";
import { LitTitle } from "@/components/LitTitle";
import { RevealLine } from "@/components/RevealLine";
import heroBg from "@/assets/hero-bg.jpg";
import serviceWeddings from "@/assets/service-weddings.jpg";
import serviceCorporate from "@/assets/service-corporate.jpg";
import servicePrivate from "@/assets/service-private.jpg";
import introDish from "@/assets/intro-dish.jpg";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: "Services — Abby's Legendary Caterers" },
      { name: "description", content: "Catering (10–5,000 guests), Mentorship Program, Facility Management (16 services) and Logistics Solutions. ISO 22000 & ISO 9001 certified." },
      { property: "og:title", content: "Services — Abby's Legendary Caterers" },
      { property: "og:description", content: "Catering, Mentorship, Facility Management and Logistics — Tanzania's premier ISO-certified catering company." },
    ],
  }),
  component: ServicesPage,
});

type ServiceId = "catering" | "mentorship" | "facility" | "logistics";

const tabs: { id: ServiceId; label: string; icon: typeof ChefHat }[] = [
  { id: "catering",   label: "Catering Services",   icon: ChefHat },
  { id: "mentorship", label: "Mentorship Program",   icon: GraduationCap },
  { id: "facility",   label: "Facility Management",  icon: Building2 },
  { id: "logistics",  label: "Logistic Solutions",   icon: Truck },
];

const facilityServices = [
  "Technical Service",
  "Assets Management",
  "Building Maintenance",
  "Access Control",
  "Deep Cleaning",
  "Energy Management",
  "Space Planning",
  "Project Management",
  "Front of House",
  "Grounds Maintenance",
  "Waste Management",
  "HVAC Systems",
  "Mail Management",
  "Commercial Cleaning",
  "Workspace Management",
  "Pest Control",
];

const cateringCategories = [
  { title: "Corporate Events",    desc: "Boardroom lunches, conferences, AGMs, staff catering and gala dinners" },
  { title: "Industrial Scale",    desc: "Large-scale site catering for 1,000–5,000 people per day" },
  { title: "Weddings & Galas",    desc: "Personalised menus, full-service teams, setup and coordination" },
  { title: "Community Events",    desc: "Public events, celebrations and community gatherings" },
  { title: "Concession Catering", desc: "Retail food outlets, kiosk operations and franchise catering" },
  { title: "Corporate Social",    desc: "Team events, charity dinners, CSR initiatives and award ceremonies" },
];

const mentorshipAreas = [
  { title: "Culinary Arts Training",        desc: "Hands-on kitchen techniques, food preparation and professional cooking standards under experienced chefs." },
  { title: "Business Planning",             desc: "Operational planning, cost management and entrepreneurship in the food service sector." },
  { title: "Menu Development",             desc: "Creative menu design, nutritional awareness, dietary requirements and seasonal planning." },
  { title: "ICA Membership Pathway",       desc: "Guided pathway to Institute of Catering Arts recognition and professional membership." },
  { title: "Branding & Marketing",         desc: "Building a culinary identity and marketing food services in a competitive market." },
  { title: "Food Safety & Compliance",     desc: "HACCP, ISO 22000 principles and food safety systems applied in real environments." },
];

const logisticsServices = [
  { title: "Product Selection",    desc: "Sourcing and procurement from verified, reputable suppliers — quality-controlled at point of origin." },
  { title: "Storage Management",   desc: "Temperature-controlled, food-safe storage facilities compliant with ISO 22000:2018." },
  { title: "Packaging",            desc: "Hygienic, compliant packaging solutions for food, beverages and dry goods." },
  { title: "Transportation",       desc: "Own fleet of trucks and vans — GPS-tracked, insured and LATRA-certified." },
];

function ServicesPage() {
  const [active, setActive] = useState<ServiceId>("catering");

  const scrollTo = (id: ServiceId) => {
    setActive(id);
    const el = document.getElementById(id);
    if (el) {
      const offset = 130;
      const top = el.getBoundingClientRect().top + window.scrollY - offset;
      window.scrollTo({ top, behavior: "smooth" });
    }
  };

  return (
    <>
      {/* ── PAGE HERO ─────────────────────────────────────────── */}
      <section className="page-hero" style={{ background: "transparent" }}>
        <img src={heroBg} alt="" className="page-hero-bg" />
        <div className="page-hero-ov" />
        <span className="hero-corner hc-tl" /><span className="hero-corner hc-tr" />
        <span className="hero-corner hc-bl" /><span className="hero-corner hc-br" />
        <div className="relative z-10 container-x text-center">
          <Reveal>
            <p className="eyebrow" style={{ color: "var(--gold)" }}>What We Offer</p>
            <h1
              className="font-display italic mt-5"
              style={{ fontSize: "clamp(3.2rem, 7.5vw, 7rem)", color: "var(--cream)", lineHeight: 0.92 }}
            >
              Our Services
            </h1>
            <div className="hr-gold max-w-xs mx-auto mt-7" />
          </Reveal>
        </div>
      </section>

      {/* ── STICKY SERVICE NAV ────────────────────────────────── */}
      <div
        className="sticky top-[68px] z-40 overflow-x-auto"
        style={{
          background: "rgba(10,9,8,0.97)",
          backdropFilter: "blur(14px)",
          borderBottom: "1px solid rgba(201,168,76,0.14)",
        }}
      >
        <div className="container-x flex items-center gap-1 md:gap-4 py-3 min-w-max">
          {tabs.map((t) => {
            const Icon = t.icon;
            return (
              <button
                key={t.id}
                onClick={() => scrollTo(t.id)}
                className={`nav-lnk flex items-center gap-2 px-4 py-2 whitespace-nowrap${active === t.id ? " active" : ""}`}
                style={{ cursor: "none" }}
              >
                <Icon size={12} />
                {t.label}
              </button>
            );
          })}
        </div>
      </div>

      {/* ── 01. CATERING SERVICES ─────────────────────────────── */}
      <section id="catering" className="section-pad relative" style={{ background: "transparent" }}>
        <div className="container-x">
          <div className="grid md:grid-cols-2 gap-12 md:gap-20 items-center">
            <Reveal from="left">
              <p className="eyebrow" style={{ color: "var(--gold)" }}>01 / Our Services</p>
              <LitTitle as="h2" className="font-display mt-5" style={{ fontSize: "clamp(2.25rem, 4.5vw, 3.75rem)", lineHeight: 1.1 }}>
                Catering Services
              </LitTitle>
              <RevealLine className="gold-rule" style={{ marginTop: "2rem", marginBottom: "2rem" }} delay={200} />
              <p className="leading-relaxed" style={{ color: "var(--cream)", opacity: 0.85 }}>
                Our Catering Services team is devoted to providing the finest quality food and outstanding
                service from <span style={{ color: "var(--gold-light)" }}>10 to 5,000 people</span> per
                event. We serve all kinds of events, applying internationally recognised HACCP standards
                verified under ISO 22000:2018.
              </p>
              <p className="mt-5 leading-relaxed" style={{ color: "var(--cream)", opacity: 0.85 }}>
                Our end-to-end food safety approach covers every stage: menu design, procurement of raw
                materials, food preparation, delivery and how food is experienced by the customer — with
                quality control monitored at every step.
              </p>

              <div className="mt-10 grid sm:grid-cols-2 gap-4">
                {cateringCategories.map((c, i) => (
                  <div
                    key={c.title}
                    className="p-5"
                    style={{ background: "var(--cocoa)", border: "1px solid rgba(201,168,76,0.25)" }}
                  >
                    <p className="eyebrow" style={{ color: "var(--gold-light)", fontSize: "0.65rem" }}>{c.title}</p>
                    <p className="mt-2 text-sm leading-relaxed" style={{ color: "var(--cream)", opacity: 0.75 }}>{c.desc}</p>
                  </div>
                ))}
              </div>

              <div className="mt-10">
                <Link to="/contact" className="btn-gold" style={{ textDecoration: "none" }}>
                  Request a Catering Quote
                </Link>
              </div>
            </Reveal>
            <Reveal from="right" delay={130}>
              <div className="space-y-4">
                <div
                  className="img-w aspect-[16/9]"
                  style={{ boxShadow: "0 20px 60px -20px rgba(0,0,0,0.6)" }}
                >
                  <img src={serviceWeddings} alt="Catering services" className="w-full h-full object-cover" loading="lazy" />
                  <div className="absolute inset-0" style={{ background: "linear-gradient(180deg, transparent 50%, rgba(10,9,8,0.7) 100%)" }} />
                  <p className="absolute bottom-4 left-6 eyebrow" style={{ color: "var(--gold-light)", fontSize: "0.65rem" }}>
                    10 – 5,000 Guests · Any Occasion
                  </p>
                </div>
                <div
                  className="aspect-[16/9] overflow-hidden relative"
                  style={{ boxShadow: "0 20px 60px -20px rgba(0,0,0,0.6)" }}
                >
                  <img src={introDish} alt="Fine food" className="w-full h-full object-cover" loading="lazy" />
                  <div className="absolute inset-0" style={{ background: "linear-gradient(180deg, transparent 50%, rgba(10,9,8,0.7) 100%)" }} />
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ── DIVIDER QUOTE 1 ───────────────────────────────────── */}
      <section className="relative py-24 text-center overflow-hidden" style={{ background: "rgba(10,9,8,0.5)" }}>
        <div className="hr-gold absolute top-0 inset-x-0" />
        <div className="hr-gold absolute bottom-0 inset-x-0" />
        <div className="relative z-10 container-x max-w-3xl">
          <Reveal>
            <p className="font-display italic" style={{ color: "var(--cream)", fontSize: "clamp(1.5rem, 3.2vw, 2.5rem)", lineHeight: 1.35 }}>
              &ldquo;Our mission: experiences that are{" "}
              <em className="gold-grad">beyond expectations.</em>&rdquo;
            </p>
          </Reveal>
        </div>
      </section>

      {/* ── 02. MENTORSHIP PROGRAM ────────────────────────────── */}
      <section id="mentorship" className="section-pad" style={{ background: "transparent" }}>
        <div className="container-x">
          <div className="grid md:grid-cols-2 gap-12 md:gap-20 items-center">
            <Reveal from="left" delay={100}>
              <div
                className="img-w aspect-[4/5]"
                style={{ boxShadow: "0 30px 80px -20px rgba(0,0,0,0.6)" }}
              >
                <img src={servicePrivate} alt="Mentorship program" className="w-full h-full object-cover" loading="lazy" />
                <div className="absolute inset-0" style={{ background: "linear-gradient(180deg, transparent 60%, rgba(10,9,8,0.65) 100%)" }} />
              </div>
            </Reveal>
            <Reveal from="right">
              <p className="eyebrow" style={{ color: "var(--gold)" }}>02 / Our Services</p>
              <LitTitle as="h2" className="font-display mt-5" style={{ fontSize: "clamp(2.25rem, 4.5vw, 3.75rem)", lineHeight: 1.1 }}>
                Mentorship Program
              </LitTitle>
              <RevealLine className="gold-rule" style={{ marginTop: "2rem", marginBottom: "2rem" }} delay={200} />
              <p className="leading-relaxed" style={{ color: "var(--cream)", opacity: 0.85 }}>
                As a company that believes in developing people, Abby&rsquo;s Legendary Caterers is
                delighted to offer a Mentorship Program to youth aspiring to venture into the culinary
                and catering arts industry. We are a proud member of the{" "}
                <span style={{ color: "var(--gold-light)" }}>Institute of Catering Arts (ICA)</span>.
              </p>
              <p className="mt-5 leading-relaxed" style={{ color: "var(--cream)", opacity: 0.85 }}>
                Mentees benefit from real hands-on experience in a professional catering environment —
                guided by accomplished culinary experts passionate about nurturing the next generation
                of hospitality professionals in Tanzania.
              </p>

              <div className="mt-10 space-y-4">
                {mentorshipAreas.map((a) => (
                  <div
                    key={a.title}
                    className="flex gap-4"
                    style={{ borderBottom: "1px solid rgba(201,168,76,0.15)", paddingBottom: "1rem" }}
                  >
                    <span style={{ color: "var(--gold)", marginTop: "2px", flexShrink: 0 }}>—</span>
                    <div>
                      <p className="font-display italic" style={{ color: "var(--cream)", fontSize: "1.1rem" }}>{a.title}</p>
                      <p className="text-sm mt-1 leading-relaxed" style={{ color: "var(--cream)", opacity: 0.68 }}>{a.desc}</p>
                    </div>
                  </div>
                ))}
              </div>

              <div
                className="mt-10 p-6 flex items-center gap-5"
                style={{ background: "var(--cocoa)", border: "1px solid rgba(201,168,76,0.28)" }}
              >
                <div>
                  <p className="font-display italic" style={{ color: "var(--gold-light)", fontSize: "1.4rem" }}>ICA</p>
                  <p className="eyebrow mt-0.5" style={{ color: "var(--gold)", fontSize: "0.6rem" }}>Member</p>
                </div>
                <div style={{ width: 1, height: 40, background: "rgba(201,168,76,0.3)", flexShrink: 0 }} />
                <p className="text-sm leading-relaxed" style={{ color: "var(--cream)", opacity: 0.72 }}>
                  Institute of Catering Arts — Tanzania&rsquo;s premier culinary arts professional body
                </p>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ── DIVIDER QUOTE 2 ───────────────────────────────────── */}
      <section
        className="relative py-24 text-center overflow-hidden"
        style={{ background: "rgba(10,9,8,0.45)" }}
      >
        <div
          className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none"
          style={{
            width: "50vw", height: "50vw", maxWidth: 500, maxHeight: 500, borderRadius: "50%",
            background: "radial-gradient(circle, rgba(237,208,122,0.35) 0%, transparent 65%)",
            filter: "blur(40px)",
          }}
        />
        <div className="relative z-10 container-x max-w-3xl">
          <Reveal>
            <p
              className="font-display italic"
              style={{ color: "var(--cream)", fontSize: "clamp(1.5rem, 3.2vw, 2.5rem)", lineHeight: 1.35 }}
            >
              &ldquo;Developing people —{" "}
              <em style={{ color: "var(--gold-light)" }}>building Tanzania.</em>&rdquo;
            </p>
          </Reveal>
        </div>
      </section>

      {/* ── 03. FACILITY MANAGEMENT ──────────────────────────── */}
      <section id="facility" className="section-pad" style={{ background: "transparent" }}>
        <div className="container-x">
          <Reveal>
            <p className="eyebrow" style={{ color: "var(--gold)" }}>03 / Our Services</p>
            <LitTitle as="h2" className="font-display mt-5" style={{ fontSize: "clamp(2.25rem, 4.5vw, 3.75rem)", lineHeight: 1.1 }}>
              Facility Management
            </LitTitle>
            <span className="gold-rule my-8" />
            <div className="grid md:grid-cols-2 gap-8">
              <p className="leading-relaxed" style={{ color: "var(--cream)", opacity: 0.85 }}>
                Our Facility Management team offers a comprehensive range of management services designed
                to enhance the quality, safety and sustainability of your premises. Our skilled team
                provides seamless, reliable solutions to keep your facilities performing at their optimum.
              </p>
              <p className="leading-relaxed" style={{ color: "var(--cream)", opacity: 0.85 }}>
                From technical building services and asset management through to workspace design and
                pest control, every aspect of your environment is managed with precision and care — so
                you can focus on what matters most.
              </p>
            </div>
          </Reveal>

          <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-4 mt-14">
            {facilityServices.map((s, i) => (
              <Reveal key={s} delay={i * 30}>
                <div className="val-item flex items-start gap-3 py-4 pr-4 h-full">
                  <Check size={14} className="mt-0.5 flex-shrink-0" style={{ color: "var(--gold)" }} />
                  <span className="text-sm" style={{ color: "var(--cream)", opacity: 0.85 }}>{s}</span>
                </div>
              </Reveal>
            ))}
          </div>

          <Reveal delay={150}>
            <div className="mt-12">
              <Link to="/contact" className="btn-ghost-cream" style={{ textDecoration: "none" }}>
                Enquire About Facility Management
              </Link>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ── DIVIDER QUOTE 3 ───────────────────────────────────── */}
      <section className="relative py-24 text-center overflow-hidden" style={{ background: "rgba(17,16,24,0.6)" }}>
        <div className="hr-gold absolute top-0 inset-x-0" />
        <div className="hr-gold absolute bottom-0 inset-x-0" />
        <div className="relative z-10 container-x max-w-3xl">
          <Reveal>
            <p className="font-display italic" style={{ color: "var(--cream)", fontSize: "clamp(1.5rem, 3.2vw, 2.5rem)", lineHeight: 1.35 }}>
              &ldquo;From kitchen to{" "}
              <em className="gold-grad">doorstep</em> — ISO compliant.&rdquo;
            </p>
          </Reveal>
        </div>
      </section>

      {/* ── 04. LOGISTICS SOLUTIONS ───────────────────────────── */}
      <section id="logistics" className="section-pad" style={{ background: "transparent" }}>
        <div className="container-x">
          <div className="grid md:grid-cols-2 gap-12 md:gap-20 items-center">
            <Reveal from="left">
              <p className="eyebrow" style={{ color: "var(--gold)" }}>04 / Our Services</p>
              <LitTitle as="h2" className="font-display mt-5" style={{ fontSize: "clamp(2.25rem, 4.5vw, 3.75rem)", lineHeight: 1.1 }}>
                Logistic Solutions
              </LitTitle>
              <RevealLine className="gold-rule" style={{ marginTop: "2rem", marginBottom: "2rem" }} delay={200} />
              <p className="leading-relaxed" style={{ color: "var(--cream)", opacity: 0.85 }}>
                Abby&rsquo;s Logistic Solutions provides efficient, reliable and compliant supply chain
                management for the food service industry. We operate our{" "}
                <span style={{ color: "var(--gold-light)" }}>own dedicated fleet of trucks and vans</span>{" "}
                — ensuring your products are handled, stored and transported to the highest standards
                at every stage.
              </p>
              <p className="mt-5 leading-relaxed" style={{ color: "var(--cream)", opacity: 0.85 }}>
                Every aspect of our logistics operation is underpinned by our ISO 22000:2018 Food
                Safety Management System and ISO 9001:2015 Quality Management System — giving you
                confidence in a fully compliant supply chain.
              </p>

              <div className="mt-10 space-y-5">
                {logisticsServices.map((s) => (
                  <div
                    key={s.title}
                    className="principle-item py-5 pr-4"
                  >
                    <p className="font-display italic" style={{ color: "var(--cream)", fontSize: "1.1rem" }}>{s.title}</p>
                    <p className="text-sm mt-2 leading-relaxed" style={{ color: "var(--cream)", opacity: 0.68 }}>{s.desc}</p>
                  </div>
                ))}
              </div>

              <div className="mt-10 flex flex-wrap gap-3">
                {["ISO 22000:2018", "ISO 9001:2015", "Own Fleet", "LATRA Certified"].map((b) => (
                  <span key={b} className="iso-pill">{b}</span>
                ))}
              </div>
            </Reveal>
            <Reveal from="right" delay={130}>
              <div
                className="img-w aspect-[3/4]"
                style={{ boxShadow: "0 30px 80px -20px rgba(0,0,0,0.6)" }}
              >
                <img src={serviceCorporate} alt="Logistics solutions" className="w-full h-full object-cover" loading="lazy" />
                <div className="absolute inset-0" style={{ background: "linear-gradient(180deg, transparent 55%, rgba(10,9,8,0.75) 100%)" }} />
                <p className="absolute bottom-5 left-6 eyebrow" style={{ color: "var(--gold-light)", fontSize: "0.65rem" }}>
                  ISO-Compliant Supply Chain
                </p>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ── BOTTOM CTA ────────────────────────────────────────── */}
      <section className="section-pad relative overflow-hidden" style={{ background: "rgba(17,16,24,0.65)" }}>
        <div
          className="glow-orb pointer-events-none"
          style={{
            left: "50%", top: "50%", transform: "translate(-50%,-50%)",
            width: "60vw", height: "60vw", maxWidth: 600, maxHeight: 600,
            background: "radial-gradient(circle, rgba(201,168,76,0.15) 0%, transparent 65%)",
          }}
        />
        <div className="container-x max-w-3xl text-center relative">
          <Reveal>
            <p className="eyebrow" style={{ color: "var(--gold-light)" }}>Ready to Begin?</p>
            <LitTitle as="h2" className="font-display italic mt-5" style={{ fontSize: "clamp(2.25rem, 4.5vw, 3.75rem)", lineHeight: 1.1 }}>
              Let&rsquo;s create something extraordinary together
            </LitTitle>
            <p className="mt-6 opacity-90" style={{ color: "var(--cream)" }}>
              Whether you need catering for 10 or 5,000 guests, facility management or full logistics
              — our team is ready to deliver an exceptional experience.
            </p>
            <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/contact" className="btn-gold" style={{ textDecoration: "none" }}>
                Get a Quote
              </Link>
              <a href="tel:+255764512254" className="btn-ghost-cream" style={{ textDecoration: "none" }}>
                +255 764 512254
              </a>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
