import { createFileRoute } from "@tanstack/react-router";
import { ChevronDown, ChefHat, GraduationCap, Building2, Truck, Check } from "lucide-react";
import { Reveal } from "@/components/Reveal";
import heroBg from "@/assets/hero-bg.jpg";
import introDish from "@/assets/intro-dish.jpg";
import serviceWeddings from "@/assets/service-weddings.jpg";
import serviceCorporate from "@/assets/service-corporate.jpg";
import servicePrivate from "@/assets/service-private.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Abby's Legendary Caterers — Best Food Always, Anywhere, Anyhow" },
      { name: "description", content: "Tanzania's premier catering company. ISO 22000 & ISO 9001 certified. Corporate, industrial, weddings, facility management & logistics." },
      { property: "og:title", content: "Abby's Legendary Caterers Limited" },
      { property: "og:description", content: "Premium catering, facility management, mentorship and logistics across Tanzania." },
    ],
  }),
  component: HomePage,
});

const services = [
  {
    icon: ChefHat,
    img: serviceWeddings,
    title: "Catering Services",
    desc: "From intimate gatherings of 10 to industrial-scale events of 5,000+. Conferences, summits, weddings, banquets, staff catering and concession catering — crafted with HACCP precision.",
  },
  {
    icon: GraduationCap,
    img: servicePrivate,
    title: "Mentorship Program",
    desc: "We recruit, train and mentor aspiring chefs, waiters, mixologists and baristas. Theoretical learning meets real-world practice — culinary arts, operations, branding and compliance.",
  },
  {
    icon: Building2,
    img: serviceCorporate,
    title: "Facility Management",
    desc: "Technical service management, deep cleaning, HVAC, access control, grounds, waste management, pest control — engineered around ISO 9001:2015 quality standards.",
  },
  {
    icon: Truck,
    img: introDish,
    title: "Logistics Solutions",
    desc: "Our owned fleet of trucks and vans transports dry goods, cleaning materials and frozen food. Integrated supply chain meets ISO 22000:2018 food safety requirements.",
  },
];

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

const credentials = [
  "Certificate of Incorporation",
  "Business Licenses",
  "TIN Certificate",
  "Tax Clearance",
  "VAT Registration",
  "TBS Premises Registration",
  "OSHA Workplace Registration",
  "Workers Compensation Fund",
  "LATRA Certificate",
  "NSSF Certificate",
  "ISO 22000:2018 — Food Safety",
  "ISO 9001:2015 — Quality Management",
];

function HomePage() {
  return (
    <div id="top">
      {/* HERO */}
      <section
        className="relative h-screen min-h-[680px] w-full overflow-hidden flex items-center justify-center grain"
        style={{ background: "var(--bg)" }}
      >
        <img src={heroBg} alt="" className="absolute inset-0 w-full h-full object-cover opacity-25" />
        <div className="absolute inset-0" style={{ background: "radial-gradient(ellipse at center, transparent 0%, var(--bg) 80%)" }} />
        <div className="candle-glow" />

        <div className="relative z-10 text-center px-6 max-w-5xl">
          <Reveal>
            <p className="eyebrow" style={{ color: "var(--gold)" }}>Tanzania · Est. 7+ Years</p>
          </Reveal>
          <Reveal delay={120}>
            <h1
              className="font-display italic leading-[0.9] mt-6"
              style={{ color: "var(--cream)", fontSize: "clamp(3rem, 9vw, 8rem)", fontWeight: 500 }}
            >
              Abby&rsquo;s Legendary<br/>Caterers
            </h1>
          </Reveal>
          <Reveal delay={240}>
            <p
              className="mt-8 italic"
              style={{ color: "var(--cream)", fontFamily: "var(--font-display)", fontSize: "clamp(1.1rem, 1.8vw, 1.5rem)", opacity: 0.9 }}
            >
              Best Food Always — anywhere, anyhow.
            </p>
          </Reveal>
          <Reveal delay={360}>
            <div className="mt-12 flex flex-col sm:flex-row gap-4 justify-center">
              <a href="#contact" className="btn-gold">Request a Quote</a>
              <a href="#services" className="btn-ghost-cream">Our Services</a>
            </div>
          </Reveal>
        </div>

        <a href="#about" className="absolute bottom-8 left-1/2 -translate-x-1/2 scroll-hint" style={{ color: "var(--gold-light)" }}>
          <ChevronDown size={26} />
        </a>
      </section>

      {/* ABOUT */}
      <section id="about" className="section-pad relative" style={{ background: "var(--bg)" }}>
        <div className="container-x">
          <div className="grid md:grid-cols-2 gap-12 md:gap-20 items-center">
            <Reveal>
              <p className="eyebrow" style={{ color: "var(--gold)" }}>About Us</p>
              <h2 className="font-display mt-5" style={{ fontSize: "clamp(2.25rem, 4.5vw, 3.75rem)", color: "var(--cream)", lineHeight: 1.1 }}>
                A renowned name in <em className="italic" style={{ color: "var(--gold-light)" }}>Tanzanian</em> catering
              </h2>
              <p className="mt-8 leading-relaxed" style={{ color: "var(--cream)", opacity: 0.85 }}>
                For more than seven years, Abby&rsquo;s Legendary Caterers Limited has delivered
                high-end catering to esteemed customers across Tanzania — corporate events,
                industrial-scale catering, community gatherings, concession catering, and every
                corporate social event in between.
              </p>
              <p className="mt-5 leading-relaxed" style={{ color: "var(--cream)", opacity: 0.85 }}>
                Our end-to-end approach to food safety governs menu design, raw materials,
                preparation and delivery. We apply the internationally recognised{" "}
                <span style={{ color: "var(--gold-light)" }}>HACCP</span> system, verified by our
                fully integrated <span style={{ color: "var(--gold-light)" }}>ISO 22000:2018</span>{" "}
                and <span style={{ color: "var(--gold-light)" }}>ISO 9001:2015</span> certification.
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
            <Reveal delay={150}>
              <div className="aspect-[4/5] overflow-hidden relative" style={{ boxShadow: "0 30px 80px -20px rgba(0,0,0,0.6), inset 0 0 80px rgba(201,150,58,0.15)" }}>
                <img src={introDish} alt="Abby's signature plating" className="w-full h-full object-cover" loading="lazy" />
                <div className="absolute inset-0" style={{ background: "linear-gradient(180deg, transparent 60%, rgba(26,14,6,0.6) 100%)" }} />
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section id="services" className="section-pad diag-lines relative" style={{ background: "var(--cocoa)" }}>
        <div className="container-x">
          <Reveal>
            <p className="eyebrow text-center" style={{ color: "var(--gold)" }}>Brand & Services</p>
            <h2 className="font-display text-center mt-5" style={{ fontSize: "clamp(2.25rem, 5vw, 4rem)", color: "var(--cream)", lineHeight: 1.1 }}>
              What <em className="italic" style={{ color: "var(--gold-light)" }}>We Do</em>
            </h2>
            <span className="gold-rule mx-auto mt-8" />
            <p className="text-center mt-8 max-w-2xl mx-auto italic font-display" style={{ color: "var(--cream)", opacity: 0.8, fontSize: "1.15rem" }}>
              Catering Services · Facilities Management · Mentorship · Logistics.
            </p>
          </Reveal>

          <div className="grid md:grid-cols-2 gap-8 mt-20">
            {services.map((s, i) => (
              <Reveal key={s.title} delay={i * 100}>
                <article className="menu-card group h-full" style={{ background: "var(--bg)", border: "1px solid var(--gold)" }}>
                  <div className="aspect-[16/10] overflow-hidden relative">
                    <img src={s.img} alt={s.title} loading="lazy" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 opacity-80" />
                    <div className="absolute inset-0" style={{ background: "linear-gradient(180deg, transparent 40%, rgba(26,14,6,0.9) 100%)" }} />
                    <s.icon size={28} className="absolute bottom-5 left-7" style={{ color: "var(--gold-light)" }} />
                  </div>
                  <div className="p-8">
                    <h3 className="font-display italic text-3xl" style={{ color: "var(--cream)" }}>{s.title}</h3>
                    <p className="mt-4 leading-relaxed" style={{ color: "var(--cream)", opacity: 0.78 }}>{s.desc}</p>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* VISION / MISSION */}
      <section id="vision" className="section-pad" style={{ background: "var(--bg)" }}>
        <div className="container-x">
          <Reveal>
            <p className="eyebrow text-center" style={{ color: "var(--gold)" }}>Our Objectives</p>
            <h2 className="font-display text-center mt-5" style={{ fontSize: "clamp(2.25rem, 5vw, 4rem)", color: "var(--cream)", lineHeight: 1.1 }}>
              Vision, Mission &amp; <em className="italic" style={{ color: "var(--gold-light)" }}>Values</em>
            </h2>
            <span className="gold-rule mx-auto mt-8" />
          </Reveal>

          <div className="grid md:grid-cols-2 gap-10 mt-20">
            <Reveal>
              <div className="p-10 h-full" style={{ background: "var(--cocoa)", border: "1px solid rgba(201,150,58,0.3)" }}>
                <p className="eyebrow" style={{ color: "var(--gold-light)" }}>Our Vision</p>
                <p className="font-display italic mt-5" style={{ color: "var(--cream)", fontSize: "1.6rem", lineHeight: 1.4 }}>
                  To provide top-notch catering and related services with strict compliance to national and international standards.
                </p>
              </div>
            </Reveal>
            <Reveal delay={120}>
              <div className="p-10 h-full" style={{ background: "var(--cocoa)", border: "1px solid rgba(201,150,58,0.3)" }}>
                <p className="eyebrow" style={{ color: "var(--gold-light)" }}>Our Mission</p>
                <p className="font-display italic mt-5" style={{ color: "var(--cream)", fontSize: "1.6rem", lineHeight: 1.4 }}>
                  To deliver impeccable, unique and personalised experiences that exceed expectations and build long-term loyal relationships.
                </p>
              </div>
            </Reveal>
          </div>

          <Reveal delay={200}>
            <div className="mt-16">
              <p className="eyebrow text-center" style={{ color: "var(--gold)" }}>Core Values</p>
              <div className="mt-10 flex flex-wrap justify-center gap-3 max-w-4xl mx-auto">
                {values.map((v) => (
                  <span
                    key={v}
                    className="px-5 py-2.5 text-sm"
                    style={{
                      border: "1px solid rgba(201,150,58,0.4)",
                      color: "var(--cream)",
                      fontFamily: "var(--font-nav)",
                      letterSpacing: "0.05em",
                    }}
                  >
                    {v}
                  </span>
                ))}
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* OUR STRENGTH */}
      <section id="strength" className="section-pad" style={{ background: "var(--bg)" }}>
        <div className="container-x">
          <Reveal>
            <p className="eyebrow text-center" style={{ color: "var(--gold)" }}>Our Strength</p>
            <h2 className="font-display text-center mt-5" style={{ fontSize: "clamp(2.25rem, 5vw, 4rem)", color: "var(--cream)", lineHeight: 1.1 }}>
              Our People, <em className="italic" style={{ color: "var(--gold-light)" }}>Our Strength</em>
            </h2>
            <span className="gold-rule mx-auto mt-8" />
          </Reveal>

          <div className="grid md:grid-cols-2 gap-10 mt-20 max-w-5xl mx-auto">
            {[
              { eyebrow: "Our Employees", title: "The hands behind every plate", body: "Our people contribute at every level of operations and are rewarded according to their performance and team achievement. Directors and management are accomplished entrepreneurs, business experts and chefs with extensive experience across hotels, fine dining and industrial sites — supported by qualified technicians in plumbing, electrical, civil, mechanical and maintenance disciplines." },
              { eyebrow: "Management Philosophy", title: "Competence at every level", body: "We ensure a high level of technical competence and accountability across the organisation. Our fully Integrated Management System — ISO 22000:2018 and ISO 9001:2015 — streamlines operations while enhancing customer satisfaction and sustainability." },
              { eyebrow: "Culinary Experience", title: "Unique. Personalised. Engaged.", body: "Our culinary experiences are crafted to allow customers to fully engage — from menu design to the final plate. Senior chefs deliver exceptional experiences while mentoring the next generation of culinary talent." },
              { eyebrow: "High-Quality Produce", title: "Sourced with intention", body: "We are meticulous about sourcing produce, partnering only with verified, reputable suppliers. Quality control is monitored at every step of our operations — from raw material to delivery." },
            ].map((c, i) => (
              <Reveal key={c.title} delay={i * 100}>
                <div className="p-10 h-full" style={{ background: "var(--cocoa)", border: "1px solid rgba(201,150,58,0.25)" }}>
                  <p className="eyebrow" style={{ color: "var(--gold-light)" }}>{c.eyebrow}</p>
                  <h3 className="font-display italic mt-4" style={{ color: "var(--cream)", fontSize: "1.75rem", lineHeight: 1.2 }}>{c.title}</h3>
                  <p className="mt-5 leading-relaxed" style={{ color: "var(--cream)", opacity: 0.82 }}>{c.body}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* GUIDING PRINCIPLES */}
      <section id="principles" className="section-pad diag-lines" style={{ background: "var(--cocoa)" }}>
        <div className="container-x">
          <Reveal>
            <p className="eyebrow text-center" style={{ color: "var(--gold)" }}>Our Guiding Principles</p>
            <h2 className="font-display text-center mt-5" style={{ fontSize: "clamp(2.25rem, 5vw, 4rem)", color: "var(--cream)", lineHeight: 1.1 }}>
              How We <em className="italic" style={{ color: "var(--gold-light)" }}>Operate</em>
            </h2>
            <span className="gold-rule mx-auto mt-8" />
          </Reveal>

          <div className="grid md:grid-cols-3 gap-8 mt-20">
            {[
              { n: "01", title: "Consistent Delivery", body: "Long-term catering solutions that fulfil the needs of our clients and their workforce. We earn loyalty by consistently demonstrating quality, service, value and innovation — relentlessly driving to remain affordable." },
              { n: "02", title: "Developing Our People", body: "We invest in our personnel to ensure the continuing success of the business. Our training procedures equip every team member with the understanding to conform to our Management Systems and Policy Statements." },
              { n: "03", title: "Profitable Growth", body: "Disciplined, sustainable, environmentally responsible growth — underpinned by strong management. Important for long-term success of the business and the communities we serve." },
            ].map((p, i) => (
              <Reveal key={p.n} delay={i * 120}>
                <div className="p-8 h-full" style={{ background: "var(--bg)", border: "1px solid rgba(201,150,58,0.25)" }}>
                  <p className="font-display italic" style={{ color: "var(--gold)", fontSize: "2.5rem", lineHeight: 1 }}>{p.n}</p>
                  <h3 className="font-display mt-6" style={{ color: "var(--cream)", fontSize: "1.5rem" }}>{p.title}</h3>
                  <p className="mt-4 leading-relaxed text-sm" style={{ color: "var(--cream)", opacity: 0.8 }}>{p.body}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* HSE CULTURE */}
      <section id="hse" className="section-pad" style={{ background: "var(--bg)" }}>
        <div className="container-x">
          <div className="grid md:grid-cols-2 gap-12 md:gap-20 items-center">
            <Reveal>
              <p className="eyebrow" style={{ color: "var(--gold)" }}>Health, Safety & Environment</p>
              <h2 className="font-display mt-5" style={{ fontSize: "clamp(2.25rem, 4.5vw, 3.5rem)", color: "var(--cream)", lineHeight: 1.1 }}>
                Safety Is <em className="italic" style={{ color: "var(--gold-light)" }}>Our Culture</em>
              </h2>
              <p className="mt-8 leading-relaxed" style={{ color: "var(--cream)", opacity: 0.85 }}>
                Our HSE culture meets the toughest global best-practice standards — a set of attitudes, beliefs and values
                that shape how we approach health, safety and the environment. It allows us to manage competing objectives
                without compromise, safeguarding employees, clients, suppliers and the communities we serve.
              </p>
              <p className="mt-5 leading-relaxed" style={{ color: "var(--cream)", opacity: 0.85 }}>
                We conduct monthly Internal Audits to objectively review our systems and test implementation effectiveness —
                proving, every month, that <span style={{ color: "var(--gold-light)" }}>Safety Is Our Culture</span>.
              </p>
            </Reveal>
            <Reveal delay={150}>
              <div className="space-y-4">
                {[
                  { code: "ISO 22000:2018", label: "Food Safety Management System" },
                  { code: "ISO 9001:2015", label: "Quality Management System" },
                  { code: "HACCP", label: "Hazard Analysis Critical Control Points" },
                ].map((s) => (
                  <div key={s.code} className="p-6 flex items-baseline justify-between gap-6" style={{ background: "var(--cocoa)", border: "1px solid rgba(201,150,58,0.3)" }}>
                    <div>
                      <p className="font-display italic" style={{ color: "var(--gold-light)", fontSize: "1.5rem" }}>{s.code}</p>
                      <p className="text-sm mt-1" style={{ color: "var(--cream)", opacity: 0.78 }}>{s.label}</p>
                    </div>
                    <Check size={20} style={{ color: "var(--gold)" }} />
                  </div>
                ))}
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* CREDENTIALS */}
      <section id="credentials" className="section-pad" style={{ background: "var(--cocoa)" }}>
        <div className="container-x">
          <Reveal>
            <p className="eyebrow text-center" style={{ color: "var(--gold)" }}>Business Credentials</p>
            <h2 className="font-display text-center mt-5" style={{ fontSize: "clamp(2.25rem, 5vw, 4rem)", color: "var(--cream)", lineHeight: 1.1 }}>
              Fully <em className="italic" style={{ color: "var(--gold-light)" }}>Certified</em>
            </h2>
            <span className="gold-rule mx-auto mt-8" />
          </Reveal>

          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-x-10 gap-y-5 mt-16 max-w-5xl mx-auto">
            {credentials.map((c, i) => (
              <Reveal key={c} delay={i * 40}>
                <div className="flex items-start gap-3 py-3" style={{ borderBottom: "1px solid rgba(201,150,58,0.18)" }}>
                  <Check size={16} className="mt-1 flex-shrink-0" style={{ color: "var(--gold)" }} />
                  <span style={{ color: "var(--cream)", opacity: 0.9 }}>{c}</span>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section id="contact" className="section-pad relative overflow-hidden" style={{ background: "var(--mid-brown)" }}>
        <div
          className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none"
          style={{
            width: "60vw", height: "60vw", maxWidth: 700, maxHeight: 700,
            borderRadius: "50%",
            background: "radial-gradient(circle, rgba(232,196,106,0.45) 0%, transparent 65%)",
            filter: "blur(40px)",
          }}
        />
        <div className="container-x max-w-3xl text-center relative">
          <Reveal>
            <p className="eyebrow" style={{ color: "var(--gold-light)" }}>Get in touch</p>
            <h2 className="font-display italic mt-5" style={{ color: "var(--cream)", fontSize: "clamp(2.25rem, 5vw, 4rem)", lineHeight: 1.1 }}>
              Plan your next event with Abby&rsquo;s
            </h2>
            <p className="mt-6" style={{ color: "var(--cream)", opacity: 0.9 }}>
              From 10 to 5,000+ guests. Tell us about your event and our team will be in touch.
            </p>
            <form className="mt-10 flex flex-col sm:flex-row gap-3 max-w-xl mx-auto" onSubmit={(e) => e.preventDefault()}>
              <input
                type="email"
                required
                placeholder="your@email.com"
                className="flex-1 px-5 py-4 bg-transparent border outline-none placeholder:opacity-60"
                style={{ borderColor: "var(--cream)", color: "var(--cream)" }}
              />
              <button type="submit" className="btn-gold">Request Quote</button>
            </form>
          </Reveal>
        </div>
      </section>
    </div>
  );
}
