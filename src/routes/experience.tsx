import { createFileRoute } from "@tanstack/react-router";
import { Reveal } from "@/components/Reveal";
import serviceWeddings from "@/assets/service-weddings.jpg";
import serviceCorporate from "@/assets/service-corporate.jpg";
import servicePrivate from "@/assets/service-private.jpg";

export const Route = createFileRoute("/experience")({
  head: () => ({
    meta: [
      { title: "The Experience — Abby's Catering" },
      { name: "description", content: "Atmosphere, craft and memory. The philosophy behind every Abby's event." },
      { property: "og:title", content: "The Experience — Abby's Catering" },
      { property: "og:description", content: "Atmosphere. Craft. Memory." },
    ],
  }),
  component: ExperiencePage,
});

const blocks = [
  {
    label: "The Setting",
    title: "Rooms that breathe.",
    body: "From a candlelit garden to a cathedral hall, we shape light, scent and sound around the food — never the other way around.",
    img: serviceWeddings,
  },
  {
    label: "The Craft",
    title: "Cooked, not assembled.",
    body: "Stone-milled grains, day-boat fish, vegetables pulled the same morning. Technique is invisible; flavour is not.",
    img: servicePrivate,
  },
  {
    label: "The Service",
    title: "Attentive. Unobtrusive.",
    body: "A team trained to anticipate — to refill the glass before you reach, to disappear before you notice.",
    img: serviceCorporate,
  },
];

function ExperiencePage() {
  return (
    <>
      <section
        className="min-h-screen flex items-center justify-center text-center"
        style={{ background: "var(--cocoa)", color: "var(--cream)" }}
      >
        <div className="container-x">
          {["Atmosphere.", "Craft.", "Memory."].map((w, i) => (
            <Reveal key={w} delay={i * 350}>
              <h1
                className="font-display italic leading-none"
                style={{
                  fontSize: "clamp(3.5rem, 12vw, 10rem)",
                  color: i === 1 ? "var(--gold-light)" : "var(--cream)",
                }}
              >
                {w}
              </h1>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="section-pad" style={{ background: "var(--cream)" }}>
        <div className="container-x space-y-32">
          {blocks.map((b, i) => (
            <Reveal key={b.label}>
              <div className={`grid md:grid-cols-2 gap-12 md:gap-20 items-center ${i % 2 ? "md:[&>*:first-child]:order-2" : ""}`}>
                <div className="aspect-[4/5] overflow-hidden">
                  <img src={b.img} alt={b.label} loading="lazy" className="w-full h-full object-cover" />
                </div>
                <div className="max-w-md">
                  <p className="eyebrow" style={{ color: "var(--gold)" }}>{b.label}</p>
                  <h2 className="font-display italic mt-4" style={{ fontSize: "clamp(2rem, 4vw, 3.25rem)", color: "var(--cocoa)", lineHeight: 1.1 }}>
                    {b.title}
                  </h2>
                  <span className="gold-rule my-6" />
                  <p className="text-lg leading-relaxed" style={{ color: "var(--muted-ink)" }}>{b.body}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="section-pad" style={{ background: "var(--ink)", color: "var(--cream)" }}>
        <div className="container-x max-w-3xl text-center">
          <Reveal>
            <blockquote className="font-display italic" style={{ fontSize: "clamp(1.75rem, 3.6vw, 2.75rem)", lineHeight: 1.3 }}>
              &ldquo;A meal is the only art form that asks to be forgotten — and remembered all at once.&rdquo;
            </blockquote>
            <p className="eyebrow mt-8" style={{ color: "var(--gold-light)" }}>— Abby, Chef &amp; Founder</p>
          </Reveal>
        </div>
      </section>
    </>
  );
}
