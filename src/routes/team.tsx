import { createFileRoute } from "@tanstack/react-router";
import { Reveal } from "@/components/Reveal";

export const Route = createFileRoute("/team")({
  head: () => ({
    meta: [
      { title: "Our Team — Abby's Catering" },
      { name: "description", content: "The people behind the plate — chefs, sommeliers and stylists who craft every Abby's event." },
      { property: "og:title", content: "Our Team — Abby's Catering" },
      { property: "og:description", content: "The people behind the plate." },
    ],
  }),
  component: TeamPage,
});

const team = [
  { name: "Abby Mwangi", role: "Chef & Founder", bio: "Trained in Lyon and Cape Town. Believes in fire, salt and patience." },
  { name: "Daudi Otieno", role: "Head Chef", bio: "Master of slow technique. Has cooked across three continents." },
  { name: "Leila Hassan", role: "Pastry Chef", bio: "Sugar architect. Studied at Valrhona École." },
  { name: "Marcus Wright", role: "Sommelier", bio: "Curates pairings that disappear into the meal." },
  { name: "Imani Njoroge", role: "Creative Director", bio: "Sets the tone — light, scent, silverware." },
  { name: "Joseph Kamau", role: "Service Lead", bio: "Twenty years of unobtrusive grace." },
];

function TeamPage() {
  return (
    <>
      <section className="pt-40 pb-24 text-center" style={{ background: "var(--cocoa)", color: "var(--cream)" }}>
        <div className="container-x">
          <Reveal>
            <p className="eyebrow" style={{ color: "var(--gold-light)" }}>Our Team</p>
            <h1 className="font-display italic mt-5" style={{ fontSize: "clamp(2.75rem, 7vw, 5.5rem)", lineHeight: 1 }}>
              The People Behind the Plate
            </h1>
          </Reveal>
        </div>
      </section>

      <section className="section-pad" style={{ background: "var(--cream)" }}>
        <div className="container-x grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">
          {team.map((m, i) => (
            <Reveal key={m.name} delay={i * 80}>
              <article className="group">
                <div className="relative aspect-[3/4] overflow-hidden" style={{ background: `linear-gradient(135deg, var(--cocoa-2), var(--cocoa))` }}>
                  {/* Portrait placeholder with warm gradient */}
                  <div
                    className="absolute inset-0 flex items-center justify-center font-display italic"
                    style={{ color: "var(--cream-2)", fontSize: "5rem", opacity: 0.25 }}
                  >
                    {m.name.split(" ").map((n) => n[0]).join("")}
                  </div>
                  <div
                    className="absolute inset-0 flex items-end p-6 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                    style={{ background: "linear-gradient(180deg, rgba(26,13,5,0) 30%, rgba(26,13,5,0.85) 100%)" }}
                  >
                    <p className="text-sm" style={{ color: "var(--cream)" }}>{m.bio}</p>
                  </div>
                </div>
                <h3 className="font-display text-2xl mt-5" style={{ color: "var(--cocoa)" }}>{m.name}</h3>
                <p className="eyebrow mt-1" style={{ color: "var(--gold)" }}>{m.role}</p>
              </article>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="section-pad" style={{ background: "var(--cocoa)", color: "var(--cream)" }}>
        <div className="container-x max-w-3xl text-center">
          <Reveal>
            <p className="eyebrow" style={{ color: "var(--gold-light)" }}>Our Philosophy</p>
            <blockquote
              className="font-display italic mt-8"
              style={{ fontSize: "clamp(1.75rem, 3.6vw, 2.75rem)", lineHeight: 1.3 }}
            >
              &ldquo;We cook the way we would for someone we love — with attention, patience, and quiet pride.&rdquo;
            </blockquote>
          </Reveal>
        </div>
      </section>
    </>
  );
}
