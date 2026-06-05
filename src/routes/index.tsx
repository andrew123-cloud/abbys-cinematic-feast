import { createFileRoute } from "@tanstack/react-router";
import { ArrowRight, ChevronDown, Star } from "lucide-react";
import { Reveal } from "@/components/Reveal";
import heroBg from "@/assets/hero-bg.jpg";
import introDish from "@/assets/intro-dish.jpg";
import dish1 from "@/assets/dish-1.jpg";
import dish2 from "@/assets/dish-2.jpg";
import dish3 from "@/assets/dish-3.jpg";
import serviceWeddings from "@/assets/service-weddings.jpg";
import serviceCorporate from "@/assets/service-corporate.jpg";
import servicePrivate from "@/assets/service-private.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Abby's — A place where warmth meets craft" },
      { name: "description", content: "Abby's is a warm, upscale dining destination where every plate tells a story. Reserve your table tonight." },
      { property: "og:title", content: "Abby's — Fine Dining" },
      { property: "og:description", content: "A place where warmth meets craft." },
    ],
  }),
  component: HomePage,
});

const menuHighlights = [
  { img: dish1, name: "Smoked Heirloom", desc: "Charred root vegetables, hazelnut praline, smoked butter." },
  { img: dish2, name: "Slow-Braised Lamb", desc: "Twelve-hour braise, saffron jus, preserved lemon." },
  { img: dish3, name: "Caramel Velouté", desc: "Burnt sugar, brown butter ice, sea salt." },
];

const team = [
  { img: serviceWeddings, name: "Abby Wanjiru", role: "Founder & Executive Chef" },
  { img: serviceCorporate, name: "Marcus Otieno", role: "Head Sommelier" },
  { img: servicePrivate, name: "Lina Mwangi", role: "Pastry Chef" },
];

const honors = [
  "Best Brunch 2024",
  "Top 10 Restaurants",
  "Sommelier Pick 2023",
  "James Beard Nominee",
  "Diners' Choice 2024",
];

function HomePage() {
  return (
    <div id="top">
      {/* 1. HERO */}
      <section
        className="relative h-screen min-h-[680px] w-full overflow-hidden flex items-center justify-center grain"
        style={{ background: "var(--bg)" }}
      >
        <img
          src={heroBg}
          alt=""
          className="absolute inset-0 w-full h-full object-cover opacity-25"
        />
        <div
          className="absolute inset-0"
          style={{ background: "radial-gradient(ellipse at center, transparent 0%, var(--bg) 80%)" }}
        />
        <div className="candle-glow" />

        <div className="relative z-10 text-center px-6">
          <Reveal>
            <p className="eyebrow" style={{ color: "var(--gold)" }}>Fine Dining</p>
          </Reveal>
          <Reveal delay={120}>
            <h1
              className="font-display italic leading-none mt-6"
              style={{ color: "var(--cream)", fontSize: "clamp(5rem, 13vw, 12rem)", fontWeight: 500 }}
            >
              Abby&rsquo;s
            </h1>
          </Reveal>
          <Reveal delay={240}>
            <p
              className="mt-6 italic"
              style={{ color: "var(--cream)", fontFamily: "var(--font-display)", fontSize: "clamp(1rem, 1.6vw, 1.4rem)", opacity: 0.85 }}
            >
              A place where warmth meets craft
            </p>
          </Reveal>
          <Reveal delay={360}>
            <a href="#reserve" className="btn-gold mt-12 inline-flex">Book a Table</a>
          </Reveal>
        </div>

        <a href="#restaurant" className="absolute bottom-8 left-1/2 -translate-x-1/2 scroll-hint" style={{ color: "var(--gold-light)" }}>
          <ChevronDown size={26} />
        </a>
      </section>

      {/* 2. INTRO / ABOUT */}
      <section id="restaurant" className="section-pad relative" style={{ background: "var(--bg)" }}>
        <div className="container-x">
          <div className="grid md:grid-cols-2 gap-12 md:gap-20 items-center">
            <Reveal>
              <p className="eyebrow" style={{ color: "var(--gold)" }}>The Restaurant</p>
              <h2
                className="font-display mt-5"
                style={{ fontSize: "clamp(2.25rem, 4.5vw, 3.75rem)", color: "var(--cream)", lineHeight: 1.1 }}
              >
                Where Every Plate <em className="italic" style={{ color: "var(--gold-light)" }}>Tells a Story</em>
              </h2>
              <p className="mt-8 text-base md:text-lg leading-relaxed" style={{ color: "var(--cream)", opacity: 0.85 }}>
                For nearly two decades we have travelled, cooked and listened — building menus
                that move with the seasons and rooms that move with the moment. Every plate at
                Abby&rsquo;s is a small ceremony; every guest, an honoured presence.
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
                &ldquo;We don&rsquo;t serve dinner. We host an evening.&rdquo;
              </blockquote>
            </Reveal>
            <Reveal delay={150}>
              <div
                className="aspect-[4/5] overflow-hidden relative"
                style={{ boxShadow: "0 30px 80px -20px rgba(0,0,0,0.6), inset 0 0 80px rgba(201,150,58,0.15)" }}
              >
                <img src={introDish} alt="A signature dish at Abby's" className="w-full h-full object-cover" loading="lazy" />
                <div className="absolute inset-0" style={{ background: "linear-gradient(180deg, transparent 60%, rgba(26,14,6,0.6) 100%)" }} />
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* 3. MENU */}
      <section id="menu" className="section-pad diag-lines relative" style={{ background: "var(--cocoa)" }}>
        <div className="container-x">
          <Reveal>
            <p className="eyebrow text-center" style={{ color: "var(--gold)" }}>Originality &amp; Craft</p>
            <h2
              className="font-display text-center mt-5"
              style={{ fontSize: "clamp(2.25rem, 5vw, 4rem)", color: "var(--cream)", lineHeight: 1.1 }}
            >
              The <em className="italic" style={{ color: "var(--gold-light)" }}>Menu</em>
            </h2>
            <span className="gold-rule mx-auto mt-8" />
          </Reveal>

          <div className="grid md:grid-cols-3 gap-8 mt-20">
            {menuHighlights.map((d, i) => (
              <Reveal key={d.name} delay={i * 120}>
                <article
                  className="menu-card group h-full"
                  style={{
                    background: "var(--bg)",
                    border: "1px solid var(--gold)",
                  }}
                >
                  <div className="aspect-[4/3] overflow-hidden">
                    <img src={d.img} alt={d.name} loading="lazy" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
                  </div>
                  <div className="p-7">
                    <h3 className="font-display text-2xl italic" style={{ color: "var(--cream)" }}>{d.name}</h3>
                    <p className="mt-3 text-sm leading-relaxed" style={{ color: "var(--cream)", opacity: 0.75 }}>{d.desc}</p>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>

          <div className="text-center mt-16">
            <a href="#reserve" className="link-underline eyebrow" style={{ color: "var(--gold-light)" }}>
              View Full Menu &nbsp;→
            </a>
          </div>
        </div>
      </section>

      {/* 4. ATMOSPHERE */}
      <section className="section-pad" style={{ background: "var(--bg)" }}>
        <div className="container-x">
          <div className="grid md:grid-cols-2 gap-12 md:gap-20 items-center">
            <Reveal>
              <div
                className="aspect-[5/4] relative overflow-hidden"
                style={{
                  background: "radial-gradient(ellipse at center, var(--mid-brown) 0%, var(--cocoa) 55%, var(--bg) 100%)",
                  boxShadow: "inset 0 0 120px rgba(201,150,58,0.35), 0 30px 80px -20px rgba(0,0,0,0.6)",
                }}
              >
                <img src={serviceCorporate} alt="Candlelit dining room" className="w-full h-full object-cover opacity-70 mix-blend-luminosity" loading="lazy" />
                <div className="absolute inset-0" style={{ background: "radial-gradient(ellipse at center, transparent 0%, rgba(26,14,6,0.55) 100%)" }} />
              </div>
            </Reveal>
            <Reveal delay={120}>
              <p className="eyebrow" style={{ color: "var(--gold)" }}>The Room</p>
              <h2
                className="font-display mt-5"
                style={{ fontSize: "clamp(2rem, 4vw, 3.25rem)", color: "var(--cream)", lineHeight: 1.1 }}
              >
                Atmosphere &amp; <em className="italic" style={{ color: "var(--gold-light)" }}>Warmth</em>
              </h2>
              <p className="mt-8 leading-relaxed" style={{ color: "var(--cream)", opacity: 0.85 }}>
                Low light, low music, low ego. Forty seats around an open hearth where copper pans
                catch the candlelight. The room is small on purpose — every guest within earshot of
                the kitchen, every detail within reach.
              </p>
              <a href="#reserve" className="link-underline eyebrow mt-8 inline-flex items-center gap-2" style={{ color: "var(--gold-light)" }}>
                Discover More <ArrowRight size={14} />
              </a>
            </Reveal>
          </div>
        </div>
      </section>

      {/* 5. TEAM */}
      <section id="team" className="section-pad" style={{ background: "var(--bg)" }}>
        <div className="container-x">
          <Reveal>
            <p className="eyebrow text-center" style={{ color: "var(--gold)" }}>The People</p>
            <h2
              className="font-display text-center mt-5"
              style={{ fontSize: "clamp(2.25rem, 5vw, 4rem)", color: "var(--cream)", lineHeight: 1.1 }}
            >
              The Heart of <em className="italic" style={{ color: "var(--gold-light)" }}>Abby&rsquo;s</em>
            </h2>
            <span className="gold-rule mx-auto mt-8" />
          </Reveal>

          <div className="grid md:grid-cols-3 gap-12 mt-20">
            {team.map((p, i) => (
              <Reveal key={p.name} delay={i * 120}>
                <div
                  className="menu-card text-center p-10"
                  style={{ background: "var(--cocoa)", border: "1px solid rgba(201,150,58,0.3)" }}
                >
                  <div className="w-36 h-36 rounded-full mx-auto overflow-hidden" style={{ border: "1px solid var(--gold)" }}>
                    <img src={p.img} alt={p.name} loading="lazy" className="w-full h-full object-cover" />
                  </div>
                  <h3 className="font-display italic text-2xl mt-6" style={{ color: "var(--cream)" }}>{p.name}</h3>
                  <p className="eyebrow mt-3" style={{ color: "var(--gold-light)" }}>{p.role}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* 6. AWARDS */}
      <section className="overflow-hidden py-12 border-y" style={{ background: "var(--bg)", borderColor: "rgba(201,150,58,0.2)" }}>
        <div className="marquee-track flex gap-14 whitespace-nowrap" style={{ width: "max-content" }}>
          {[...honors, ...honors, ...honors].map((h, i) => (
            <span key={i} className="eyebrow flex items-center gap-14" style={{ color: "var(--gold)" }}>
              <Star size={14} fill="currentColor" strokeWidth={0} />
              <span>{h}</span>
            </span>
          ))}
        </div>
      </section>

      {/* 7. TESTIMONIAL */}
      <section className="section-pad" style={{ background: "var(--cocoa)" }}>
        <div className="container-x max-w-4xl text-center">
          <Reveal>
            <p className="eyebrow" style={{ color: "var(--gold-light)" }}>Kind words</p>
            <blockquote
              className="font-display italic mt-8"
              style={{
                color: "var(--cream)",
                fontSize: "clamp(1.6rem, 3.4vw, 2.5rem)",
                lineHeight: 1.35,
              }}
            >
              &ldquo;The warmest table in the city. Every course felt like a love letter.&rdquo;
            </blockquote>
            <div className="mt-8 flex justify-center gap-1" style={{ color: "var(--gold-light)" }}>
              {Array.from({ length: 5 }).map((_, i) => (
                <Star key={i} size={16} fill="currentColor" strokeWidth={0} />
              ))}
            </div>
            <p className="eyebrow mt-5" style={{ color: "var(--gold)" }}>— Amina M., Diners&rsquo; Journal</p>
          </Reveal>
        </div>
      </section>

      {/* 8. CTA BANNER */}
      <section id="reserve" className="section-pad relative overflow-hidden" style={{ background: "var(--mid-brown)" }}>
        <div
          className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none"
          style={{
            width: "60vw",
            height: "60vw",
            maxWidth: 700,
            maxHeight: 700,
            borderRadius: "50%",
            background: "radial-gradient(circle, rgba(232,196,106,0.45) 0%, transparent 65%)",
            filter: "blur(40px)",
          }}
        />
        <div className="container-x max-w-3xl text-center relative">
          <Reveal>
            <p className="eyebrow" style={{ color: "var(--gold-light)" }}>Reservations</p>
            <h2
              className="font-display italic mt-5"
              style={{ color: "var(--cream)", fontSize: "clamp(2.25rem, 5vw, 4rem)", lineHeight: 1.1 }}
            >
              Enjoy the Abby&rsquo;s Experience
            </h2>
            <p className="mt-6" style={{ color: "var(--cream)", opacity: 0.85 }}>
              Tables open thirty days in advance. We&rsquo;ll save the candle for you.
            </p>
            <form
              className="mt-10 flex flex-col sm:flex-row gap-3 max-w-xl mx-auto"
              onSubmit={(e) => e.preventDefault()}
            >
              <input
                type="email"
                required
                placeholder="your@email.com"
                className="flex-1 px-5 py-4 bg-transparent border outline-none placeholder:opacity-60"
                style={{ borderColor: "var(--cream)", color: "var(--cream)" }}
              />
              <button type="submit" className="btn-gold">Book Now</button>
            </form>
          </Reveal>
        </div>
      </section>
    </div>
  );
}
