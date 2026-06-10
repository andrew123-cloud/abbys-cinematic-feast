import { createFileRoute, Link } from "@tanstack/react-router";
import { Check } from "lucide-react";
import { Reveal } from "@/components/Reveal";
import { LitTitle } from "@/components/LitTitle";
import { RevealLine } from "@/components/RevealLine";
import { Parallax } from "@/components/Parallax";
import heroBg from "@/assets/hero-bg.jpg";
import introDish from "@/assets/intro-dish.jpg";
import serviceCorporate from "@/assets/service-corporate.jpg";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About Us — Abby's Legendary Caterers" },
      { name: "description", content: "7+ years of catering excellence in Tanzania. ISO 22000 & ISO 9001 certified. Vision, mission, core values and business credentials." },
      { property: "og:title", content: "About — Abby's Legendary Caterers" },
      { property: "og:description", content: "Tanzania's premier catering company. Our story, vision, values and credentials." },
    ],
  }),
  component: AboutPage,
});

const values = [
  "Quality & delicious food",
  "Exemplary services",
  "Consistency & professionalism",
  "Passionate teamwork",
  "Friendly customer service",
  "Uniqueness",
  "Positivity",
  "Continuous learning",
  "Highest standards",
  "Customer satisfaction",
  "Profitable growth",
];

const strengthItems = [
  {
    eyebrow: "Our Employees",
    title: "The hands behind every plate",
    body: "Our people contribute at every level of operations and are rewarded according to their performance. Directors and management are accomplished entrepreneurs, business experts and chefs with extensive experience across hotels, fine dining and industrial sites.",
  },
  {
    eyebrow: "Management Philosophy",
    title: "Competence at every level",
    body: "We ensure high-level technical competence and accountability across the organisation. Our fully Integrated Management System — ISO 22000:2018 and ISO 9001:2015 — streamlines operations while enhancing customer satisfaction.",
  },
  {
    eyebrow: "Culinary Experience",
    title: "Unique. Personalised. Engaged.",
    body: "Our culinary experiences are crafted to allow customers to fully engage — from menu design to the final plate. Senior chefs deliver exceptional experiences while mentoring the next generation of culinary talent.",
  },
  {
    eyebrow: "High-Quality Produce",
    title: "Sourced with intention",
    body: "We are meticulous about sourcing produce, partnering only with verified, reputable suppliers. Quality control is carefully monitored at every step — from raw material procurement through to delivery.",
  },
];

const principles = [
  {
    n: "01",
    title: "Consistent Delivery",
    body: "We believe in offering long-term catering solutions that fulfil the needs of clients and their workforce. We earn continued loyalty by consistently demonstrating quality, service, value and innovation — relentlessly driving affordability.",
  },
  {
    n: "02",
    title: "Developing Our People",
    body: "Abby's is committed to investing in the development of personnel to ensure continuing business success. We create a work environment with opportunities and support for everyone to develop, learn and succeed.",
  },
  {
    n: "03",
    title: "Profitable Growth",
    body: "Disciplined, sustainable, profitable growth — underpinned by strong management and environmental responsibility. Important for the long-term success of the business and the communities we serve.",
  },
  {
    n: "04",
    title: "HSE Culture",
    body: "Our HSE culture meets the toughest global best-practice standards. It shapes our approach to health, safety and the environment — safeguarding employees, clients, suppliers and the communities around us.",
  },
];

const credentials = [
  "Certificate of Incorporation",
  "Business Licenses",
  "TIN Certificate",
  "Tax Clearance",
  "VAT Registration Certificate",
  "TBS Premises Registration",
  "OSHA Workplace Registration",
  "Workers Compensation Fund",
  "LATRA Certificate of Registration",
  "NSSF Certificate",
  "ISO 22000:2018 — Food Safety Management",
  "ISO 9001:2015 — Quality Management",
];

function AboutPage() {
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
            <p className="eyebrow" style={{ color: "var(--gold)" }}>Tanzania · Est. 7+ Years</p>
            <h1
              className="font-display italic mt-5"
              style={{ fontSize: "clamp(3.2rem, 7.5vw, 7rem)", color: "var(--cream)", lineHeight: 0.92 }}
            >
              About Us
            </h1>
            <div className="hr-gold max-w-xs mx-auto mt-7" />
          </Reveal>
        </div>
      </section>

      {/* ── COMPANY STORY ─────────────────────────────────────── */}
      <section className="section-pad relative" style={{ background: "transparent" }}>
        <div className="container-x">
          <div className="grid md:grid-cols-2 gap-12 md:gap-20 items-center">
            <Reveal from="left">
              <p className="eyebrow" style={{ color: "var(--gold)" }}>Our Story</p>
              <LitTitle as="h2" className="font-display mt-5" style={{ fontSize: "clamp(2.25rem, 4.5vw, 3.75rem)", lineHeight: 1.1 }}>
                Seven years of <em className="italic">culinary excellence</em>
              </LitTitle>
              <RevealLine className="gold-rule" style={{ marginTop: "2rem", marginBottom: "2rem" }} delay={200} />
              <p className="leading-relaxed" style={{ color: "var(--cream)", opacity: 0.85 }}>
                Welcome to Abby&rsquo;s Legendary Caterers Limited — a renowned catering company offering
                top-notch catering and related services in Tanzania. For more than seven years we have
                delivered high-end catering services and made a name as one of the major players in
                the catering industry.
              </p>
              <p className="mt-5 leading-relaxed" style={{ color: "var(--cream)", opacity: 0.85 }}>
                We offer services to all kinds of events including corporate events, industrial-scale
                catering, community events and all corporate social events including concession
                catering. Our services also extend to Facility Management to enhance quality and
                sustainability.
              </p>
              <p className="mt-5 leading-relaxed" style={{ color: "var(--cream)", opacity: 0.85 }}>
                Our end-to-end approach to food safety applies to menu design, purchase of raw materials,
                food preparation, delivery and how food is experienced by our customers — verified by our
                fully Integrated Management System:{" "}
                <span style={{ color: "var(--gold-light)" }}>ISO 22000:2018</span> &amp;{" "}
                <span style={{ color: "var(--gold-light)" }}>ISO 9001:2015</span>.
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
            </Reveal>
            <Reveal from="right" delay={130}>
              <div
                className="img-w aspect-[4/5]"
                style={{ boxShadow: "0 30px 80px -20px rgba(0,0,0,0.6), inset 0 0 80px rgba(201,168,76,0.15)" }}
              >
                <img src={serviceCorporate} alt="Abby's team" className="w-full h-full object-cover" loading="lazy" />
                <div className="absolute inset-0" style={{ background: "linear-gradient(180deg, transparent 60%, rgba(10,9,8,0.6) 100%)" }} />
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ── VISION & MISSION ──────────────────────────────────── */}
      <section className="section-pad" style={{ background: "rgba(10,9,8,0.5)" }}>
        <div className="container-x">
          <Reveal>
            <p className="eyebrow text-center" style={{ color: "var(--gold)" }}>Our Purpose</p>
            <LitTitle as="h2" className="font-display text-center mt-5" style={{ fontSize: "clamp(2.25rem, 5vw, 4rem)", lineHeight: 1.1 }}>
              Vision &amp; Mission
            </LitTitle>
            <span className="gold-rule mx-auto mt-8" />
          </Reveal>

          <div className="grid md:grid-cols-2 gap-8 mt-16 max-w-5xl mx-auto">
            <Reveal>
              <div className="cred-badge p-10 h-full">
                <p className="eyebrow" style={{ color: "var(--gold)" }}>Our Vision</p>
                <span className="gold-rule my-6" />
                <p className="font-display italic" style={{ color: "var(--cream)", fontSize: "clamp(1.3rem, 2vw, 1.7rem)", lineHeight: 1.4 }}>
                  To provide top-notch catering and related services, focusing on compliance with
                  national and international standards.
                </p>
              </div>
            </Reveal>
            <Reveal delay={120}>
              <div className="cred-badge p-10 h-full">
                <p className="eyebrow" style={{ color: "var(--gold)" }}>Our Mission</p>
                <span className="gold-rule my-6" />
                <p className="font-display italic" style={{ color: "var(--cream)", fontSize: "clamp(1.3rem, 2vw, 1.7rem)", lineHeight: 1.4 }}>
                  To provide the highest quality and safest catering services — impeccable, unique
                  and personalised — creating long-term loyal relationships that exceed expectations.
                </p>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ── CORE VALUES ───────────────────────────────────────── */}
      <section className="section-pad" style={{ background: "transparent" }}>
        <div className="container-x">
          <Reveal>
            <p className="eyebrow text-center" style={{ color: "var(--gold)" }}>What Drives Us</p>
            <LitTitle as="h2" className="font-display text-center mt-5" style={{ fontSize: "clamp(2.25rem, 5vw, 4rem)", lineHeight: 1.1 }}>
              Our Core Values
            </LitTitle>
            <span className="gold-rule mx-auto mt-8" />
          </Reveal>

          <Reveal delay={150}>
            <div className="mt-14 flex flex-wrap justify-center gap-3 max-w-4xl mx-auto">
              {values.map((v) => (
                <span key={v} className="iso-pill">{v}</span>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* ── FULL-BLEED QUOTE ──────────────────────────────────── */}
      <section
        className="relative py-28 overflow-hidden"
        style={{ background: "rgba(10,9,8,0.5)" }}
      >
        <div className="absolute inset-0">
          <Parallax speed={8}>
            <img src={introDish} alt="" className="w-full h-full object-cover" style={{ opacity: 0.18 }} />
          </Parallax>
        </div>
        <div className="absolute inset-0" style={{ background: "linear-gradient(to bottom, rgba(10,9,8,0.85) 0%, rgba(10,9,8,0.4) 50%, rgba(10,9,8,0.85) 100%)" }} />
        <div className="relative z-10 container-x max-w-3xl text-center">
          <Reveal>
            <blockquote
              className="font-display italic"
              style={{ color: "var(--cream)", fontSize: "clamp(1.6rem, 3.6vw, 2.8rem)", lineHeight: 1.3 }}
            >
              &ldquo;Safety Is{" "}
              <em style={{ color: "var(--gold-light)" }}>Our Culture</em>.&rdquo;
            </blockquote>
            <p className="eyebrow mt-8" style={{ color: "var(--gold-light)" }}>
              ISO 22000:2018 · ISO 9001:2015 · HACCP
            </p>
          </Reveal>
        </div>
      </section>

      {/* ── OUR STRENGTH ─────────────────────────────────────── */}
      <section className="section-pad" style={{ background: "transparent" }}>
        <div className="container-x">
          <Reveal>
            <p className="eyebrow text-center" style={{ color: "var(--gold)" }}>Our Strength</p>
            <LitTitle as="h2" className="font-display text-center mt-5" style={{ fontSize: "clamp(2.25rem, 5vw, 4rem)", lineHeight: 1.1 }}>
              Our People, Our Greatest Asset
            </LitTitle>
            <span className="gold-rule mx-auto mt-8" />
          </Reveal>

          <div className="grid md:grid-cols-2 gap-6 mt-16 max-w-5xl mx-auto">
            {strengthItems.map((c, i) => (
              <Reveal key={c.title} delay={i * 90}>
                <div className="cred-badge p-10 h-full">
                  <p className="eyebrow" style={{ color: "var(--gold)" }}>{c.eyebrow}</p>
                  <h3 className="font-display italic mt-4" style={{ color: "var(--cream)", fontSize: "1.6rem", lineHeight: 1.2 }}>{c.title}</h3>
                  <span className="gold-rule my-5" />
                  <p className="leading-relaxed text-sm" style={{ color: "var(--cream)", opacity: 0.78 }}>{c.body}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── GUIDING PRINCIPLES ────────────────────────────────── */}
      <section className="section-pad" style={{ background: "rgba(10,9,8,0.5)" }}>
        <div className="container-x">
          <Reveal>
            <p className="eyebrow text-center" style={{ color: "var(--gold)" }}>How We Operate</p>
            <LitTitle as="h2" className="font-display text-center mt-5" style={{ fontSize: "clamp(2.25rem, 5vw, 4rem)", lineHeight: 1.1 }}>
              Guiding Principles
            </LitTitle>
            <div className="hr-gold max-w-xs mx-auto mt-8" />
          </Reveal>

          <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-5 mt-16">
            {principles.map((p, i) => (
              <Reveal key={p.n} delay={i * 90}>
                <div className="principle-item py-6 pr-4 h-full">
                  <p className="font-display italic" style={{ color: "var(--gold)", fontSize: "2.2rem", lineHeight: 1 }}>{p.n}</p>
                  <h3 className="font-display mt-5" style={{ color: "var(--cream)", fontSize: "1.25rem", lineHeight: 1.2 }}>{p.title}</h3>
                  <span className="gold-rule my-4" />
                  <p className="leading-relaxed text-sm" style={{ color: "var(--cream)", opacity: 0.72 }}>{p.body}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── BUSINESS CREDENTIALS ─────────────────────────────── */}
      <section id="credentials" className="section-pad" style={{ background: "transparent" }}>
        <div className="container-x">
          <Reveal>
            <p className="eyebrow text-center" style={{ color: "var(--gold)" }}>Fully Compliant</p>
            <LitTitle as="h2" className="font-display text-center mt-5" style={{ fontSize: "clamp(2.25rem, 5vw, 4rem)", lineHeight: 1.1 }}>
              Business Credentials
            </LitTitle>
            <span className="gold-rule mx-auto mt-8" />
          </Reveal>

          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-x-10 gap-y-4 mt-16 max-w-4xl mx-auto">
            {credentials.map((c, i) => (
              <Reveal key={c} delay={i * 40}>
                <div className="flex items-start gap-3 py-3.5" style={{ borderBottom: "1px solid rgba(201,168,76,0.18)" }}>
                  <Check size={15} className="mt-0.5 flex-shrink-0" style={{ color: "var(--gold)" }} />
                  <span className="text-sm" style={{ color: "var(--cream)", opacity: 0.88 }}>{c}</span>
                </div>
              </Reveal>
            ))}
          </div>

          <Reveal delay={200}>
            <div className="mt-16 text-center">
              <Link to="/contact" className="btn-gold" style={{ textDecoration: "none" }}>
                Work With Us
              </Link>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
