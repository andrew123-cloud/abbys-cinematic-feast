import { createFileRoute } from "@tanstack/react-router";
import { MapPin, Phone, Mail, Clock } from "lucide-react";
import { Reveal } from "@/components/Reveal";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact & Booking — Abby's Catering" },
      { name: "description", content: "Tell us your date and vision. Booking enquiries for weddings, corporate and private events." },
      { property: "og:title", content: "Contact — Abby's Catering" },
      { property: "og:description", content: "Booking enquiries and event consultations." },
    ],
  }),
  component: ContactPage,
});

const details = [
  { icon: MapPin, label: "Visit", value: "14 Riverside Avenue, Nairobi" },
  { icon: Phone, label: "Call", value: "+254 712 345 678" },
  { icon: Mail, label: "Write", value: "hello@abbys.catering" },
  { icon: Clock, label: "Hours", value: "Mon – Sat · 9:00 – 18:00" },
];

const fieldStyle: React.CSSProperties = {
  background: "transparent",
  border: "none",
  borderBottom: "1px solid rgba(59,31,10,0.25)",
  color: "var(--cocoa)",
  padding: "0.85rem 0",
  width: "100%",
  outline: "none",
  fontFamily: "inherit",
};

function ContactPage() {
  return (
    <>
      <section className="pt-40 pb-16" style={{ background: "var(--cream)" }}>
        <div className="container-x">
          <Reveal>
            <p className="eyebrow" style={{ color: "var(--gold)" }}>Contact &amp; Booking</p>
            <h1 className="font-display italic mt-4" style={{ fontSize: "clamp(2.75rem, 6vw, 5rem)", color: "var(--cocoa)", lineHeight: 1 }}>
              Let&rsquo;s begin.
            </h1>
          </Reveal>
        </div>
      </section>

      <section className="pb-24" style={{ background: "var(--cream)" }}>
        <div className="container-x grid md:grid-cols-[1fr_1.4fr] gap-16">
          <Reveal>
            <div className="space-y-10">
              {details.map((d) => (
                <div key={d.label} className="flex gap-4 items-start">
                  <div className="p-3 rounded-full" style={{ background: "var(--cream-2)", color: "var(--gold)" }}>
                    <d.icon size={16} />
                  </div>
                  <div>
                    <p className="eyebrow" style={{ color: "var(--gold)" }}>{d.label}</p>
                    <p className="mt-1" style={{ color: "var(--cocoa)" }}>{d.value}</p>
                  </div>
                </div>
              ))}
            </div>
          </Reveal>

          <Reveal delay={150}>
            <form
              onSubmit={(e) => { e.preventDefault(); alert("Thank you. We'll be in touch."); }}
              className="space-y-8"
            >
              <div className="grid sm:grid-cols-2 gap-8">
                <input style={fieldStyle} placeholder="Full name" required onFocus={(e) => (e.currentTarget.style.borderBottomColor = "var(--gold)")} onBlur={(e) => (e.currentTarget.style.borderBottomColor = "rgba(59,31,10,0.25)")} />
                <input style={fieldStyle} type="email" placeholder="Email" required onFocus={(e) => (e.currentTarget.style.borderBottomColor = "var(--gold)")} onBlur={(e) => (e.currentTarget.style.borderBottomColor = "rgba(59,31,10,0.25)")} />
              </div>
              <div className="grid sm:grid-cols-2 gap-8">
                <select style={fieldStyle} defaultValue="" required onFocus={(e) => (e.currentTarget.style.borderBottomColor = "var(--gold)")} onBlur={(e) => (e.currentTarget.style.borderBottomColor = "rgba(59,31,10,0.25)")}>
                  <option value="" disabled>Event type</option>
                  <option>Wedding</option>
                  <option>Corporate</option>
                  <option>Private Party</option>
                  <option>Other</option>
                </select>
                <input style={fieldStyle} type="date" required onFocus={(e) => (e.currentTarget.style.borderBottomColor = "var(--gold)")} onBlur={(e) => (e.currentTarget.style.borderBottomColor = "rgba(59,31,10,0.25)")} />
              </div>
              <input style={fieldStyle} type="number" min={1} placeholder="Number of guests" onFocus={(e) => (e.currentTarget.style.borderBottomColor = "var(--gold)")} onBlur={(e) => (e.currentTarget.style.borderBottomColor = "rgba(59,31,10,0.25)")} />
              <textarea style={{ ...fieldStyle, resize: "vertical", minHeight: 120 }} placeholder="Tell us about your event" onFocus={(e) => (e.currentTarget.style.borderBottomColor = "var(--gold)")} onBlur={(e) => (e.currentTarget.style.borderBottomColor = "rgba(59,31,10,0.25)")} />
              <button type="submit" className="btn-gold">Submit Enquiry</button>
            </form>
          </Reveal>
        </div>
      </section>

      <section style={{ background: "var(--cream)" }} className="pb-24">
        <div className="container-x">
          <div className="aspect-[16/7] w-full overflow-hidden" style={{ background: "var(--cream-2)" }}>
            <iframe
              title="Abby's Catering — location"
              src="https://www.google.com/maps?q=Nairobi&output=embed"
              className="w-full h-full border-0"
              loading="lazy"
            />
          </div>
        </div>
      </section>
    </>
  );
}
