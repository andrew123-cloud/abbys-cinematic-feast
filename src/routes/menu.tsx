import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import { Reveal } from "@/components/Reveal";
import dish1 from "@/assets/dish-1.jpg";
import dish2 from "@/assets/dish-2.jpg";
import dish3 from "@/assets/dish-3.jpg";
import dish4 from "@/assets/dish-4.jpg";
import introDish from "@/assets/intro-dish.jpg";

export const Route = createFileRoute("/menu")({
  head: () => ({
    meta: [
      { title: "Our Menus — Abby's Catering" },
      { name: "description", content: "Seasonal starters, mains, desserts and bespoke packages. Less is more — let the ingredient speak." },
      { property: "og:title", content: "Our Menus — Abby's Catering" },
      { property: "og:description", content: "Less is more. Let the ingredient speak." },
    ],
  }),
  component: MenuPage,
});

type Section = "Starters" | "Mains" | "Desserts" | "Packages";

const items: Record<Exclude<Section, "Packages">, { img: string; name: string; desc: string; tags: string[] }[]> = {
  Starters: [
    { img: dish1, name: "Edible Garden", desc: "Whipped goat curd, candied beets, micro herbs, dehydrated petals.", tags: ["Vegetarian"] },
    { img: dish4, name: "Sea Crudo", desc: "Day-boat fish, citrus, fennel pollen, finger lime.", tags: ["Halal"] },
  ],
  Mains: [
    { img: dish2, name: "Glazed Lamb Rack", desc: "Slow-roasted lamb, tamarind glaze, charred allium, jus.", tags: ["Halal"] },
    { img: introDish, name: "Heirloom Tart", desc: "Stone-milled pastry, seasonal vegetables, smoked yolk.", tags: ["Vegetarian"] },
  ],
  Desserts: [
    { img: dish3, name: "Caramel Velouté", desc: "Salted caramel cream, gold leaf, brown butter crumb.", tags: ["Vegetarian"] },
    { img: dish1, name: "Floral Sorbet", desc: "Hibiscus, rosewater, candied citrus.", tags: ["Vegan"] },
  ],
};

const packages = [
  { name: "Intimate", price: "$120", desc: "Up to 20 guests", features: ["3-course tasting", "Bespoke menu design", "On-site chef", "Service team of 2"] },
  { name: "Signature", price: "$185", desc: "20 – 100 guests", features: ["5-course tasting", "Wine pairing", "Floral consultation", "Full service team"] },
  { name: "Atelier", price: "On request", desc: "100+ guests", features: ["Custom multi-course", "Sommelier", "Production design", "Bespoke crockery"] },
];

function MenuPage() {
  const [tab, setTab] = useState<Section>("Starters");

  return (
    <>
      {/* HERO */}
      <section className="pt-40 pb-24 text-center" style={{ background: "var(--cocoa)", color: "var(--cream)" }}>
        <div className="container-x">
          <Reveal>
            <p className="eyebrow" style={{ color: "var(--gold-light)" }}>The Menus</p>
            <h1 className="font-display italic mt-5" style={{ fontSize: "clamp(3rem, 7vw, 5.5rem)", lineHeight: 1 }}>
              Our Menus
            </h1>
            <p className="mt-6 max-w-xl mx-auto opacity-80">
              Less is more. Let the ingredient speak.
            </p>
          </Reveal>
        </div>
      </section>

      {/* TABS */}
      <section className="border-b" style={{ background: "var(--cream)", borderColor: "rgba(59,31,10,0.1)" }}>
        <div className="container-x flex justify-center gap-6 md:gap-12 py-6 overflow-x-auto">
          {(["Starters", "Mains", "Desserts", "Packages"] as Section[]).map((t) => (
            <button
              key={t}
              onClick={() => setTab(t)}
              className="eyebrow pb-2 whitespace-nowrap transition-colors"
              style={{
                color: tab === t ? "var(--gold)" : "var(--cocoa)",
                borderBottom: tab === t ? "1px solid var(--gold)" : "1px solid transparent",
              }}
            >
              {t}
            </button>
          ))}
        </div>
      </section>

      {/* CONTENT */}
      <section className="section-pad" style={{ background: "var(--cream)" }}>
        <div className="container-x">
          {tab !== "Packages" ? (
            <div className="space-y-24">
              {items[tab].map((it, i) => (
                <Reveal key={it.name}>
                  <div className={`grid md:grid-cols-2 gap-12 items-center ${i % 2 ? "md:[&>*:first-child]:order-2" : ""}`}>
                    <div className="aspect-[4/3] overflow-hidden">
                      <img src={it.img} alt={it.name} loading="lazy" className="w-full h-full object-cover" />
                    </div>
                    <div>
                      <h2 className="font-display text-4xl md:text-5xl italic" style={{ color: "var(--cocoa)" }}>{it.name}</h2>
                      <span className="gold-rule my-6" />
                      <p className="text-lg leading-relaxed" style={{ color: "var(--muted-ink)" }}>{it.desc}</p>
                      <div className="mt-6 flex gap-2">
                        {it.tags.map((t) => (
                          <span key={t} className="text-[10px] uppercase tracking-widest px-3 py-1 rounded-full" style={{ background: "var(--cream-2)", color: "var(--gold)" }}>
                            {t}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>
          ) : (
            <div className="grid md:grid-cols-3 gap-8">
              {packages.map((p, i) => (
                <Reveal key={p.name} delay={i * 100}>
                  <div className="p-10 h-full flex flex-col" style={{ background: "var(--cream)", border: "1px solid var(--cocoa)" }}>
                    <p className="eyebrow" style={{ color: "var(--gold)" }}>{p.desc}</p>
                    <h3 className="font-display italic text-4xl mt-3" style={{ color: "var(--cocoa)" }}>{p.name}</h3>
                    <p className="mt-2 text-2xl font-display" style={{ color: "var(--cocoa-2)" }}>{p.price}<span className="text-sm opacity-60"> / guest</span></p>
                    <span className="gold-rule my-6" />
                    <ul className="space-y-3 text-sm flex-1" style={{ color: "var(--muted-ink)" }}>
                      {p.features.map((f) => <li key={f}>— {f}</li>)}
                    </ul>
                    <Link to="/contact" className="btn-gold mt-8">Enquire</Link>
                  </div>
                </Reveal>
              ))}
            </div>
          )}
        </div>
      </section>
    </>
  );
}
