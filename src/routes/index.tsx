import { createFileRoute, Link } from "@tanstack/react-router";
import { useEffect, useRef, useState } from "react";
import { ArrowRight, ChevronDown, Volume2, VolumeX, Star } from "lucide-react";
import { Reveal } from "@/components/Reveal";
import heroBg from "@/assets/hero-bg.jpg";
import introDish from "@/assets/intro-dish.jpg";
import serviceWeddings from "@/assets/service-weddings.jpg";
import serviceCorporate from "@/assets/service-corporate.jpg";
import servicePrivate from "@/assets/service-private.jpg";
import dish1 from "@/assets/dish-1.jpg";
import dish2 from "@/assets/dish-2.jpg";
import dish3 from "@/assets/dish-3.jpg";
import dish4 from "@/assets/dish-4.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Abby's Catering — A place where food becomes memory" },
      { name: "description", content: "Premium catering crafted with love and served with elegance. Weddings, corporate, private gatherings." },
      { property: "og:title", content: "Abby's Catering" },
      { property: "og:description", content: "A place where food becomes memory." },
    ],
  }),
  component: HomePage,
});

const services = [
  { img: serviceWeddings, label: "Weddings", desc: "Tailored menus for once-in-a-lifetime moments." },
  { img: serviceCorporate, label: "Corporate", desc: "Refined dining that leaves a lasting impression." },
  { img: servicePrivate, label: "Private Gatherings", desc: "Intimate settings, unforgettable flavours." },
];

const dishes = [
  { img: dish1, name: "Edible Garden", tag: "Chef's Choice" },
  { img: dish2, name: "Glazed Lamb Rack", tag: "Signature" },
  { img: dish3, name: "Caramel Velouté", tag: "Dessert" },
  { img: dish4, name: "Sea Crudo", tag: "Seasonal" },
  { img: dish1, name: "Heirloom Tartine", tag: "Starter" },
  { img: dish2, name: "Slow Braise", tag: "Main" },
];

const honors = [
  "Best Caterer 2024",
  "500+ Events",
  "18 Years of Excellence",
  "98% Client Satisfaction",
  "James Beard Nominee",
];

function HomePage() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [muted, setMuted] = useState(true);

  useEffect(() => {
    if (videoRef.current) videoRef.current.muted = muted;
  }, [muted]);

  return (
    <>
      {/* HERO */}
      <section className="relative h-screen min-h-[640px] w-full overflow-hidden flex items-center justify-center">
        {/* Background image acting as poster; <video> overlays if a real source is provided */}
        <img
          src={heroBg}
          alt=""
          className="absolute inset-0 w-full h-full object-cover"
          style={{ filter: "saturate(0.95)" }}
        />
        <video
          ref={videoRef}
          className="absolute inset-0 w-full h-full object-cover"
          autoPlay
          loop
          playsInline
          muted
          poster={heroBg}
        >
          {/* Add real .mp4 source here when available */}
        </video>
        <div className="absolute inset-0" style={{ background: "rgba(26,13,5,0.6)" }} />
        <div
          className="absolute inset-0"
          style={{ background: "radial-gradient(ellipse at center, rgba(26,13,5,0) 0%, rgba(26,13,5,0.55) 100%)" }}
        />

        {/* Audio toggle */}
        <button
          onClick={() => setMuted((m) => !m)}
          aria-label="Toggle ambient sound"
          className="absolute top-24 right-6 md:right-10 z-10 p-3 rounded-full transition-colors"
          style={{ border: "1px solid rgba(245,237,203,0.3)", color: "var(--cream)" }}
        >
          {muted ? <VolumeX size={16} /> : <Volume2 size={16} />}
        </button>

        <div className="relative z-10 text-center px-6">
          <Reveal>
            <h1
              className="font-display italic leading-none"
              style={{ color: "var(--cream)", fontSize: "clamp(4.5rem, 14vw, 12rem)", fontWeight: 500 }}
            >
              Abby&rsquo;s
            </h1>
          </Reveal>
          <Reveal delay={250}>
            <p
              className="eyebrow mt-6"
              style={{ color: "var(--cream-2)", letterSpacing: "0.4em" }}
            >
              Crafted with love · Served with elegance
            </p>
          </Reveal>
          <Reveal delay={500}>
            <div className="mt-12 flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/menu" className="btn-ghost-cream">Explore Menu</Link>
              <Link to="/contact" className="btn-ghost-cream">Book Your Event</Link>
            </div>
          </Reveal>
        </div>

        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 scroll-hint" style={{ color: "var(--cream)" }}>
          <ChevronDown size={22} />
        </div>
      </section>

      {/* INTRO */}
      <section className="section-pad" style={{ background: "var(--cream)" }}>
        <div className="container-x">
          <Reveal>
            <p className="eyebrow text-center" style={{ color: "var(--gold)" }}>An invitation</p>
            <h2
              className="font-display text-center mt-5 max-w-4xl mx-auto"
              style={{ fontSize: "clamp(2.25rem, 5vw, 4rem)", color: "var(--cocoa)", lineHeight: 1.1, fontStyle: "italic" }}
            >
              A place where food becomes memory.
            </h2>
          </Reveal>

          <div className="grid md:grid-cols-2 gap-12 md:gap-20 items-center mt-20">
            <Reveal>
              <div className="aspect-[4/5] overflow-hidden">
                <img
                  src={introDish}
                  alt="Signature dish"
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>
            </Reveal>
            <Reveal delay={150}>
              <div className="max-w-md">
                <p className="text-lg leading-relaxed" style={{ color: "var(--muted-ink)" }}>
                  For nearly two decades we have travelled, cooked and listened — building menus
                  that move with the seasons and rooms that move with the moment. Every plate is
                  a small ceremony; every guest, an honoured presence.
                </p>
                <span className="gold-rule my-8" />
                <Link
                  to="/experience"
                  className="inline-flex items-center gap-2 eyebrow"
                  style={{ color: "var(--cocoa)" }}
                >
                  Discover our story <ArrowRight size={14} />
                </Link>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section className="section-pad" style={{ background: "var(--cocoa)", color: "var(--cream)" }}>
        <div className="container-x">
          <Reveal>
            <p className="eyebrow" style={{ color: "var(--gold-light)" }}>What we offer</p>
            <h2 className="font-display mt-4 max-w-2xl" style={{ fontSize: "clamp(2rem, 4vw, 3.25rem)", lineHeight: 1.1 }}>
              Three rooms, one philosophy.
            </h2>
          </Reveal>

          <div className="grid md:grid-cols-3 gap-10 md:gap-14 mt-20">
            {services.map((s, i) => (
              <Reveal key={s.label} delay={i * 120}>
                <article className="group cursor-pointer">
                  <div className="aspect-[4/3] overflow-hidden">
                    <img
                      src={s.img}
                      alt={s.label}
                      loading="lazy"
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-[1.04]"
                    />
                  </div>
                  <h3 className="font-display italic text-3xl mt-6" style={{ color: "var(--cream)" }}>{s.label}</h3>
                  <p className="mt-3 text-sm leading-relaxed opacity-80">{s.desc}</p>
                  <Link to="/experience" className="inline-flex items-center gap-2 mt-5 eyebrow" style={{ color: "var(--gold-light)" }}>
                    Learn more <ArrowRight size={12} />
                  </Link>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* MENU HIGHLIGHTS */}
      <section className="section-pad" style={{ background: "var(--cream)" }}>
        <div className="container-x">
          <Reveal>
            <p className="eyebrow" style={{ color: "var(--gold)" }}>From our kitchen</p>
            <h2
              className="font-display mt-4 max-w-3xl"
              style={{ fontSize: "clamp(2rem, 4vw, 3.25rem)", color: "var(--cocoa)", lineHeight: 1.1, fontStyle: "italic" }}
            >
              Where every dish tells a story.
            </h2>
          </Reveal>
        </div>

        <div className="mt-16">
          <div className="flex gap-6 md:gap-10 overflow-x-auto px-6 md:px-12 pb-6 snap-x snap-mandatory">
            {dishes.map((d, i) => (
              <Reveal key={i} delay={i * 80} className="shrink-0 snap-start">
                <div className="w-[260px] md:w-[320px]">
                  <div className="aspect-square overflow-hidden">
                    <img src={d.img} alt={d.name} loading="lazy" className="w-full h-full object-cover" />
                  </div>
                  <div className="mt-5 flex items-center justify-between gap-3">
                    <h3 className="font-display text-xl" style={{ color: "var(--cocoa)" }}>{d.name}</h3>
                    <span
                      className="text-[10px] px-3 py-1 rounded-full uppercase tracking-widest"
                      style={{ background: "var(--cream-2)", color: "var(--gold)" }}
                    >
                      {d.tag}
                    </span>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>

        <div className="container-x text-center mt-12">
          <Link to="/menu" className="btn-gold">View Full Menu</Link>
        </div>
      </section>

      {/* AWARDS / MARQUEE */}
      <section className="overflow-hidden py-10" style={{ background: "var(--ink)", color: "var(--cream)" }}>
        <div className="marquee-track flex gap-12 whitespace-nowrap" style={{ width: "max-content" }}>
          {[...honors, ...honors, ...honors].map((h, i) => (
            <span key={i} className="eyebrow opacity-80 flex items-center gap-12">
              <span>{h}</span>
              <span style={{ color: "var(--gold)" }}>·</span>
            </span>
          ))}
        </div>
      </section>

      {/* TESTIMONIAL */}
      <section className="section-pad" style={{ background: "var(--cocoa)" }}>
        <div className="container-x max-w-4xl text-center">
          <Reveal>
            <p className="eyebrow" style={{ color: "var(--gold-light)" }}>Kind words</p>
            <blockquote
              className="font-display italic mt-8"
              style={{
                color: "var(--cream)",
                fontSize: "clamp(1.75rem, 3.6vw, 2.75rem)",
                lineHeight: 1.3,
              }}
            >
              &ldquo;Abby&rsquo;s turned our wedding into the most delicious evening of our lives.&rdquo;
            </blockquote>
            <div className="mt-10 flex justify-center gap-1" style={{ color: "var(--gold-light)" }}>
              {Array.from({ length: 5 }).map((_, i) => (
                <Star key={i} size={16} fill="currentColor" strokeWidth={0} />
              ))}
            </div>
            <p className="eyebrow mt-5" style={{ color: "var(--cream-2)" }}>— Amina M., 2024</p>
          </Reveal>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="section-pad" style={{ background: "var(--gold)" }}>
        <div className="container-x max-w-3xl text-center">
          <Reveal>
            <h2
              className="font-display italic"
              style={{ color: "var(--cocoa)", fontSize: "clamp(2.25rem, 5vw, 3.75rem)", lineHeight: 1.1 }}
            >
              Let&rsquo;s create your perfect event together.
            </h2>
            <p className="mt-5" style={{ color: "var(--ink)" }}>
              Tell us your date and vision. We&rsquo;ll handle the rest.
            </p>
            <form
              className="mt-10 flex flex-col sm:flex-row gap-3 max-w-xl mx-auto"
              onSubmit={(e) => e.preventDefault()}
            >
              <input
                type="email"
                required
                placeholder="your@email.com"
                className="flex-1 px-5 py-4 bg-transparent border outline-none"
                style={{ borderColor: "var(--cocoa)", color: "var(--cocoa)" }}
              />
              <button type="submit" className="btn-dark">Get in touch</button>
            </form>
          </Reveal>
        </div>
      </section>
    </>
  );
}
