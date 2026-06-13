import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import heroImg from "@/assets/hero-campus.jpg";
import stemImg from "@/assets/stem.jpg";
import socialImg from "@/assets/social.jpg";
import artImg from "@/assets/art.jpg";
import { Atom, Globe2, Palette, ArrowRight, Award, Users, BookOpen } from "lucide-react";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Jupiter Academy — Curiosity. Craft. Character." },
      { name: "description", content: "A K‑12 school where STEM, social sciences and the arts come together to shape thoughtful, creative leaders." },
      { property: "og:title", content: "Jupiter Academy" },
      { property: "og:description", content: "Curiosity. Craft. Character. A school built for the whole student." },
      { property: "og:image", content: heroImg },
    ],
  }),
  component: Home,
});

const pillars = [
  { icon: Atom, title: "STEM", img: stemImg, blurb: "Hands‑on labs, robotics, and computational thinking from day one.", to: "/courses" },
  { icon: Globe2, title: "Social Sciences", img: socialImg, blurb: "History, geography and civics taught through inquiry and debate.", to: "/courses" },
  { icon: Palette, title: "Artwork", img: artImg, blurb: "Studio practice in painting, sculpture, design and digital media.", to: "/courses" },
] as const;

function Home() {
  return (
    <div className="min-h-screen bg-background">
      <SiteHeader />

      {/* Hero */}
      <section className="relative overflow-hidden">
        <img
          src={heroImg}
          alt="Jupiter Academy campus at golden hour"
          width={1600}
          height={900}
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0" style={{ background: "linear-gradient(120deg, oklch(0.18 0.07 255 / 0.85) 0%, oklch(0.22 0.07 255 / 0.55) 60%, transparent 100%)" }} />
        <div className="relative mx-auto max-w-6xl px-6 py-28 md:py-40">
          <span className="inline-block rounded-full bg-accent/90 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-accent-foreground">Enrolling 2026–27</span>
          <h1 className="mt-5 max-w-3xl font-serif text-5xl font-semibold leading-tight text-primary-foreground md:text-6xl">
            Curiosity, craft, and character — taught together.
          </h1>
          <p className="mt-5 max-w-xl text-lg text-primary-foreground/85">
            Jupiter Academy is a K–12 independent school where rigorous science, deep humanities, and serious art share the same timetable.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link to="/courses" className="inline-flex items-center gap-2 rounded-md px-5 py-3 text-sm font-semibold text-primary shadow-lg transition hover:opacity-90" style={{ background: "var(--gradient-gold)" }}>
              Explore Courses <ArrowRight className="h-4 w-4" />
            </Link>
            <Link to="/admissions" className="inline-flex items-center rounded-md border border-primary-foreground/40 px-5 py-3 text-sm font-semibold text-primary-foreground hover:bg-primary-foreground/10">
              Book a Tour
            </Link>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="border-b border-border bg-secondary/40">
        <div className="mx-auto grid max-w-6xl grid-cols-2 gap-8 px-6 py-12 md:grid-cols-4">
          {[
            { k: "47", l: "Years educating" },
            { k: "12:1", l: "Student–teacher ratio" },
            { k: "98%", l: "University placement" },
            { k: "60+", l: "Clubs & activities" },
          ].map((s) => (
            <div key={s.l}>
              <div className="font-serif text-3xl font-semibold text-primary md:text-4xl">{s.k}</div>
              <div className="mt-1 text-sm text-muted-foreground">{s.l}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Three pillars */}
      <section className="mx-auto max-w-6xl px-6 py-20">
        <div className="max-w-2xl">
          <p className="text-sm font-semibold uppercase tracking-wider text-accent-foreground/80" style={{ color: "oklch(0.55 0.13 70)" }}>Three pillars</p>
          <h2 className="mt-2 font-serif text-3xl font-semibold text-primary md:text-4xl">A balanced education for a complex world</h2>
          <p className="mt-3 text-muted-foreground">
            Every Jupiter student spends meaningful time in the lab, the seminar room and the studio. Here's a taste of each.
          </p>
        </div>

        <div className="mt-12 grid gap-8 md:grid-cols-3">
          {pillars.map((p) => (
            <article key={p.title} className="group overflow-hidden rounded-2xl border border-border bg-card shadow-sm transition hover:-translate-y-1 hover:shadow-[var(--shadow-elegant)]">
              <div className="aspect-[4/3] overflow-hidden">
                <img src={p.img} alt={`${p.title} at Jupiter Academy`} loading="lazy" width={1024} height={768} className="h-full w-full object-cover transition duration-500 group-hover:scale-105" />
              </div>
              <div className="p-6">
                <div className="flex items-center gap-2 text-primary">
                  <p.icon className="h-5 w-5" />
                  <h3 className="font-serif text-xl font-semibold">{p.title}</h3>
                </div>
                <p className="mt-2 text-sm text-muted-foreground">{p.blurb}</p>
                <Link to={p.to} className="mt-4 inline-flex items-center gap-1 text-sm font-medium text-primary hover:opacity-80">
                  See examples <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* Why Jupiter */}
      <section className="bg-primary text-primary-foreground">
        <div className="mx-auto grid max-w-6xl gap-10 px-6 py-20 md:grid-cols-3">
          {[
            { icon: Users, title: "Small classes", text: "12:1 ratio means every student is known, challenged and supported." },
            { icon: BookOpen, title: "Rigorous curriculum", text: "IB‑aligned program with strong AP electives in years 11 and 12." },
            { icon: Award, title: "Award‑winning faculty", text: "Practicing scientists, historians and artists who love to teach." },
          ].map((f) => (
            <div key={f.title}>
              <f.icon className="h-7 w-7 text-accent" />
              <h3 className="mt-4 font-serif text-xl font-semibold">{f.title}</h3>
              <p className="mt-2 text-sm text-primary-foreground/80">{f.text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="mx-auto max-w-6xl px-6 py-20 text-center">
        <h2 className="font-serif text-3xl font-semibold text-primary md:text-4xl">Come see Jupiter for yourself</h2>
        <p className="mx-auto mt-3 max-w-xl text-muted-foreground">Open mornings every second Saturday. Tours are led by our students.</p>
        <Link to="/contact" className="mt-6 inline-flex items-center gap-2 rounded-md bg-primary px-5 py-3 text-sm font-semibold text-primary-foreground shadow hover:opacity-90">
          Schedule a visit <ArrowRight className="h-4 w-4" />
        </Link>
      </section>

      <SiteFooter />
    </div>
  );
}
