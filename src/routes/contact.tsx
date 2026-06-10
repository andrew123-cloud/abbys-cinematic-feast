import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { MapPin, Phone, Mail, Globe } from "lucide-react";
import { Reveal } from "@/components/Reveal";
import { LitTitle } from "@/components/LitTitle";
import { RevealLine } from "@/components/RevealLine";
import heroBg from "@/assets/hero-bg.jpg";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact & Quote — Abby's Legendary Caterers" },
      { name: "description", content: "Get a quote for catering, facility management or logistics. Dar es Salaam, Tanzania. +255 764 512254 · abbys.caterers@gmail.com" },
      { property: "og:title", content: "Contact — Abby's Legendary Caterers" },
      { property: "og:description", content: "Request a quote. We respond within 24 hours." },
    ],
  }),
  component: ContactPage,
});

const info = [
  {
    icon: MapPin,
    label: "Our Location",
    lines: [
      "Plot No.362 Makenya Street",
      "Regent Estate, Mikocheni",
      "P.O. Box 25187",
      "Dar es Salaam, Tanzania",
    ],
  },
  {
    icon: Phone,
    label: "By Telephone",
    lines: ["+255 764 512254", "+255 784 447335"],
    links: ["tel:+255764512254", "tel:+255784447335"],
    sub: "Mon – Sat · 08:00 – 17:00 EAT",
  },
  {
    icon: Mail,
    label: "By Email",
    lines: ["abbys.caterers@gmail.com", "orders@abbys.co.tz"],
    links: ["mailto:abbys.caterers@gmail.com", "mailto:orders@abbys.co.tz"],
    sub: "We respond within 24 hours",
  },
  {
    icon: Globe,
    label: "Online",
    lines: ["www.abbys.co.tz"],
    sub: "Dar es Salaam, Tanzania",
  },
];

const fieldBase: React.CSSProperties = {
  background: "rgba(245,240,232,0.04)",
  border: "1px solid rgba(201,168,76,0.18)",
  color: "var(--cream)",
  fontFamily: "var(--font-sans)",
  fontSize: "11px",
  letterSpacing: "0.06em",
  outline: "none",
  padding: "14px 18px",
  width: "100%",
  transition: "border-color 0.3s, background 0.3s",
};

function ContactPage() {
  const [submitted, setSubmitted] = useState(false);

  const handleFocus = (e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    e.currentTarget.style.borderColor = "rgba(201,168,76,0.7)";
    e.currentTarget.style.background = "rgba(245,240,232,0.07)";
  };
  const handleBlur = (e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    e.currentTarget.style.borderColor = "rgba(201,168,76,0.22)";
    e.currentTarget.style.background = "rgba(245,240,232,0.04)";
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const btn = e.currentTarget.querySelector('button[type="submit"]') as HTMLButtonElement;
    btn.textContent = "Sending…";
    btn.style.opacity = "0.6";
    setTimeout(() => {
      setSubmitted(true);
      btn.textContent = "Submit Enquiry";
      btn.style.opacity = "1";
    }, 1200);
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
            <p className="eyebrow" style={{ color: "var(--gold)" }}>We&rsquo;d Love to Hear From You</p>
            <h1
              className="font-display italic mt-5"
              style={{ fontSize: "clamp(3.2rem, 7.5vw, 7rem)", color: "var(--cream)", lineHeight: 0.92 }}
            >
              Get in Touch
            </h1>
            <div className="hr-gold max-w-xs mx-auto mt-7" />
          </Reveal>
        </div>
      </section>

      {/* ── CONTACT INFO CARDS ────────────────────────────────── */}
      <section className="section-pad" style={{ background: "transparent" }}>
        <div className="container-x">
          <Reveal>
            <p className="eyebrow text-center" style={{ color: "var(--gold)" }}>Reach Us</p>
            <LitTitle as="h2" className="font-display text-center mt-5" style={{ fontSize: "clamp(2.25rem, 4vw, 3.5rem)", lineHeight: 1.1 }}>
              Contact Information
            </LitTitle>
            <RevealLine className="gold-rule" style={{ margin: "2rem auto 0", display: "block" }} delay={200} />
          </Reveal>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-16">
            {info.map((item, i) => {
              const Icon = item.icon;
              return (
                <Reveal key={item.label} delay={i * 80}>
                  <div className="info-card p-8 h-full">
                    <Icon size={22} style={{ color: "var(--gold)", marginBottom: "1rem", opacity: 0.8 }} />
                    <p className="eyebrow mb-4" style={{ color: "var(--gold)", fontSize: "0.65rem" }}>{item.label}</p>
                    <div className="space-y-1">
                      {item.lines.map((line, li) =>
                        item.links?.[li] ? (
                          <a
                            key={line}
                            href={item.links[li]}
                            className="font-display italic block transition-colors duration-300"
                            style={{ color: "var(--cream)", fontSize: "1rem", textDecoration: "none" }}
                            onMouseEnter={(e) => { e.currentTarget.style.color = "var(--gold-light)"; }}
                            onMouseLeave={(e) => { e.currentTarget.style.color = "var(--cream)"; }}
                          >
                            {line}
                          </a>
                        ) : (
                          <p key={line} className="text-sm" style={{ color: "var(--cream)", opacity: 0.8 }}>{line}</p>
                        )
                      )}
                    </div>
                    {item.sub && (
                      <p className="text-xs mt-4 opacity-55" style={{ color: "var(--cream)" }}>{item.sub}</p>
                    )}
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── QUOTE FORM ────────────────────────────────────────── */}
      <section
        id="quote-form"
        className="section-pad"
        style={{ background: "rgba(10,9,8,0.5)", borderTop: "1px solid rgba(201,168,76,0.15)", borderBottom: "1px solid rgba(201,168,76,0.15)" }}
      >
        <div className="container-x">
          <div className="grid md:grid-cols-[1fr_1.6fr] gap-16 items-start">
            {/* Left context */}
            <Reveal from="left">
              <p className="eyebrow" style={{ color: "var(--gold)" }}>Request a Quote</p>
              <LitTitle as="h2" className="font-display italic mt-5" style={{ fontSize: "clamp(2.25rem, 4vw, 3.5rem)", lineHeight: 1.1 }}>
                Let&rsquo;s plan your event
              </LitTitle>
              <RevealLine className="gold-rule" style={{ marginTop: "2rem", marginBottom: "2rem" }} delay={200} />
              <p className="leading-relaxed text-sm" style={{ color: "var(--cream)", opacity: 0.82 }}>
                Tell us about your event and requirements. Our team will respond with a personalised
                quote within 24 hours. For urgent enquiries, please call us directly.
              </p>

              <div className="mt-10 space-y-6">
                {[
                  { n: "10",     label: "Minimum guests" },
                  { n: "5,000+", label: "Maximum capacity" },
                  { n: "7+",     label: "Years of experience" },
                ].map((s) => (
                  <div key={s.label} className="flex items-center gap-4">
                    <p className="stat-n" style={{ minWidth: 56 }}>{s.n}</p>
                    <p className="text-sm" style={{ color: "var(--cream)", opacity: 0.65 }}>{s.label}</p>
                  </div>
                ))}
              </div>

              <div className="mt-12 pt-8" style={{ borderTop: "1px solid rgba(201,168,76,0.2)" }}>
                <p className="eyebrow mb-5" style={{ color: "var(--gold)", fontSize: "0.65rem" }}>Direct Contacts</p>
                <a
                  href="tel:+255764512254"
                  className="flex items-center gap-3 mb-4 group"
                  style={{ textDecoration: "none" }}
                >
                  <span style={{ width: 2, height: 24, background: "var(--gold)", opacity: 0.45, flexShrink: 0 }} />
                  <div>
                    <span className="eyebrow" style={{ color: "var(--gold-light)", fontSize: "0.6rem", display: "block" }}>Call</span>
                    <span className="text-sm transition-colors" style={{ color: "var(--cream)", opacity: 0.78 }}>+255 764 512254</span>
                  </div>
                </a>
                <a
                  href="mailto:orders@abbys.co.tz"
                  className="flex items-center gap-3"
                  style={{ textDecoration: "none" }}
                >
                  <span style={{ width: 2, height: 24, background: "var(--gold)", opacity: 0.45, flexShrink: 0 }} />
                  <div>
                    <span className="eyebrow" style={{ color: "var(--gold-light)", fontSize: "0.6rem", display: "block" }}>Email Orders</span>
                    <span className="text-sm" style={{ color: "var(--cream)", opacity: 0.78 }}>orders@abbys.co.tz</span>
                  </div>
                </a>
              </div>
            </Reveal>

            {/* Form */}
            <Reveal from="right" delay={120}>
              {submitted ? (
                <div className="p-8" style={{ background: "var(--bg)", border: "1px solid rgba(201,168,76,0.3)" }}>
                  <p className="font-display italic" style={{ color: "var(--gold-light)", fontSize: "1.6rem" }}>Thank you for your enquiry.</p>
                  <p className="mt-4 leading-relaxed text-sm" style={{ color: "var(--cream)", opacity: 0.8 }}>
                    We&rsquo;ve received your message and will be in touch within 24 hours. For urgent matters,
                    please call <a href="tel:+255764512254" style={{ color: "var(--gold-light)", textDecoration: "none" }}>+255 764 512254</a> directly.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5" noValidate>
                  <div className="grid sm:grid-cols-2 gap-5">
                    <div>
                      <label className="eyebrow mb-2 block" style={{ color: "var(--gold)", fontSize: "0.65rem" }}>Full Name *</label>
                      <input
                        type="text"
                        name="name"
                        placeholder="Your full name"
                        required
                        style={fieldBase}
                        onFocus={handleFocus}
                        onBlur={handleBlur}
                      />
                    </div>
                    <div>
                      <label className="eyebrow mb-2 block" style={{ color: "var(--gold)", fontSize: "0.65rem" }}>Organisation</label>
                      <input
                        type="text"
                        name="organisation"
                        placeholder="Company or organisation"
                        style={fieldBase}
                        onFocus={handleFocus}
                        onBlur={handleBlur}
                      />
                    </div>
                  </div>

                  <div className="grid sm:grid-cols-2 gap-5">
                    <div>
                      <label className="eyebrow mb-2 block" style={{ color: "var(--gold)", fontSize: "0.65rem" }}>Email Address *</label>
                      <input
                        type="email"
                        name="email"
                        placeholder="your@email.com"
                        required
                        style={fieldBase}
                        onFocus={handleFocus}
                        onBlur={handleBlur}
                      />
                    </div>
                    <div>
                      <label className="eyebrow mb-2 block" style={{ color: "var(--gold)", fontSize: "0.65rem" }}>Phone Number *</label>
                      <input
                        type="tel"
                        name="phone"
                        placeholder="+255 000 000 000"
                        required
                        style={fieldBase}
                        onFocus={handleFocus}
                        onBlur={handleBlur}
                      />
                    </div>
                  </div>

                  <div className="grid sm:grid-cols-2 gap-5">
                    <div>
                      <label className="eyebrow mb-2 block" style={{ color: "var(--gold)", fontSize: "0.65rem" }}>Service Required *</label>
                      <select
                        name="service"
                        required
                        defaultValue=""
                        style={fieldBase}
                        onFocus={handleFocus}
                        onBlur={handleBlur}
                      >
                        <option value="" disabled>Select a service</option>
                        <option value="catering">Catering Services</option>
                        <option value="mentorship">Mentorship Program</option>
                        <option value="facility">Facility Management</option>
                        <option value="logistics">Logistic Solutions</option>
                        <option value="multiple">Multiple Services</option>
                        <option value="other">Other / Not Sure</option>
                      </select>
                    </div>
                    <div>
                      <label className="eyebrow mb-2 block" style={{ color: "var(--gold)", fontSize: "0.65rem" }}>Guest Count</label>
                      <select
                        name="guests"
                        defaultValue=""
                        style={fieldBase}
                        onFocus={handleFocus}
                        onBlur={handleBlur}
                      >
                        <option value="" disabled>Select a range</option>
                        <option>10 – 50 guests</option>
                        <option>51 – 150 guests</option>
                        <option>151 – 500 guests</option>
                        <option>501 – 1,000 guests</option>
                        <option>1,001 – 5,000+ guests</option>
                        <option>Not applicable</option>
                      </select>
                    </div>
                  </div>

                  <div className="grid sm:grid-cols-2 gap-5">
                    <div>
                      <label className="eyebrow mb-2 block" style={{ color: "var(--gold)", fontSize: "0.65rem" }}>Event Date</label>
                      <input
                        type="date"
                        name="date"
                        style={{ ...fieldBase, colorScheme: "dark" } as React.CSSProperties}
                        onFocus={handleFocus}
                        onBlur={handleBlur}
                      />
                    </div>
                    <div>
                      <label className="eyebrow mb-2 block" style={{ color: "var(--gold)", fontSize: "0.65rem" }}>Event Location</label>
                      <input
                        type="text"
                        name="location"
                        placeholder="Venue / city in Tanzania"
                        style={fieldBase}
                        onFocus={handleFocus}
                        onBlur={handleBlur}
                      />
                    </div>
                  </div>

                  <div>
                    <label className="eyebrow mb-2 block" style={{ color: "var(--gold)", fontSize: "0.65rem" }}>Tell Us More *</label>
                    <textarea
                      name="message"
                      placeholder="Describe your requirements — event type, dietary needs, any special requests or questions…"
                      required
                      rows={5}
                      style={{ ...fieldBase, resize: "vertical", minHeight: 120 }}
                      onFocus={handleFocus}
                      onBlur={handleBlur}
                    />
                  </div>

                  <div className="flex items-start gap-4 py-2" style={{ borderTop: "1px solid rgba(201,168,76,0.15)" }}>
                    <div style={{ width: 2, background: "rgba(201,168,76,0.3)", alignSelf: "stretch", flexShrink: 0 }} />
                    <p className="text-xs leading-relaxed" style={{ color: "var(--cream)", opacity: 0.45 }}>
                      Your information is handled with care. As an ISO 9001:2015 certified company, we
                      maintain confidentiality and respond to all enquiries within 24 business hours.
                    </p>
                  </div>

                  <div className="flex flex-col sm:flex-row items-start sm:items-center gap-5 pt-2">
                    <button type="submit" className="btn-gold">
                      Submit Enquiry
                    </button>
                    <span className="eyebrow opacity-35" style={{ color: "var(--cream)", fontSize: "0.65rem" }}>
                      or call +255 784 447335
                    </span>
                  </div>
                </form>
              )}
            </Reveal>
          </div>
        </div>
      </section>

      {/* ── LOCATION ─────────────────────────────────────────── */}
      <section className="section-pad" style={{ background: "transparent" }}>
        <div className="container-x">
          <div className="grid md:grid-cols-2 gap-12 md:gap-20 items-center">
            <Reveal from="left">
              <p className="eyebrow" style={{ color: "var(--gold)" }}>Find Us</p>
              <LitTitle as="h2" className="font-display italic mt-5" style={{ fontSize: "clamp(2.25rem, 4.5vw, 3.75rem)", lineHeight: 1.1 }}>
                Our office in Dar es Salaam
              </LitTitle>
              <RevealLine className="gold-rule" style={{ marginTop: "2rem", marginBottom: "2rem" }} delay={200} />
              <div className="space-y-5">
                {[
                  { label: "Street Address",   value: "Plot No.362 Makenya Street, Regent Estate, Mikocheni" },
                  { label: "Postal Address",   value: "P.O. Box 25187, Dar es Salaam, Tanzania" },
                  { label: "Operating Hours",  value: "Mon – Fri: 08:00 – 17:00 EAT\nSaturday: 08:00 – 13:00 EAT" },
                  { label: "Website",          value: "www.abbys.co.tz" },
                ].map((d) => (
                  <div key={d.label} className="val-item py-2">
                    <p className="eyebrow" style={{ color: "var(--gold)", fontSize: "0.62rem" }}>{d.label}</p>
                    <p className="mt-1 text-sm leading-relaxed whitespace-pre-line" style={{ color: "var(--cream)", opacity: 0.78 }}>{d.value}</p>
                  </div>
                ))}
              </div>
            </Reveal>
            <Reveal from="right" delay={130}>
              <div
                className="img-w aspect-[16/10]"
                style={{ boxShadow: "0 30px 80px -20px rgba(0,0,0,0.6)", border: "1px solid rgba(201,168,76,0.2)" }}
              >
                <img
                  src={heroBg}
                  alt="Abby's office location"
                  className="w-full h-full object-cover"
                  loading="lazy"
                  style={{ opacity: 0.75 }}
                />
                <div className="absolute inset-0" style={{ background: "linear-gradient(180deg, transparent 40%, rgba(10,9,8,0.75) 100%)" }} />
                <div className="absolute bottom-6 left-6 right-6">
                  <p className="eyebrow" style={{ color: "var(--gold-light)", fontSize: "0.65rem" }}>Abby&rsquo;s Legendary Caterers</p>
                  <p className="font-display italic mt-1" style={{ color: "var(--cream)", fontSize: "1.2rem" }}>Mikocheni, Dar es Salaam</p>
                  <div className="mt-3 flex flex-wrap gap-2">
                    {["ISO Certified", "Est. 2017", "ICA Member"].map((b) => (
                      <span key={b} className="iso-pill">{b}</span>
                    ))}
                  </div>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>
    </>
  );
}
