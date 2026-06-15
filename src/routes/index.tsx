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
      { title: "Jupiter Academy Kenya — Karibu to curious learning." },
      {
        name: "description",
        content:
          "A Nairobi day and boarding school blending CBC, IGCSE pathways, STEM, humanities, arts and Kenyan values.",
      },
      { property: "og:title", content: "Jupiter Academy Kenya" },
      {
        property: "og:description",
        content: "Karibu to a Kenyan school where curiosity, craft and character grow together.",
      },
      { property: "og:image", content: heroImg },
    ],
  }),
  component: Home,
});

const pillars = [
  {
    icon: Atom,
    title: "STEM",
    img: stemImg,
    blurb: "Robotics, coding, agriculture tech and science projects tied to Kenyan challenges.",
    to: "/courses",
  },
  {
    icon: Globe2,
    title: "Kenyan & Global Studies",
    img: socialImg,
    blurb: "History, geography, civics and Kiswahili debate rooted in Kenya and the world.",
    to: "/courses",
  },
  {
    icon: Palette,
    title: "Arts & Culture",
    img: artImg,
    blurb: "Studio art, music, drama, digital media and East African creative traditions.",
    to: "/courses",
  },
] as const;

function Home() {
  return (
    <div className="min-h-screen bg-background">
      <SiteHeader />

      {/* Hero */}
      <section className="relative overflow-hidden">
        <img
          src={heroImg}
          alt="Jupiter Academy Kenya campus at golden hour"
          width={1600}
          height={900}
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(120deg, oklch(0.18 0.02 150 / 0.9) 0%, oklch(0.32 0.11 145 / 0.68) 52%, transparent 100%)",
          }}
        />
        <div className="relative mx-auto max-w-6xl px-6 py-28 md:py-40">
          <span className="inline-block rounded-full bg-accent/90 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-accent-foreground">
            Karibu · Enrolling 2026
          </span>
          <h1 className="mt-5 max-w-3xl font-serif text-5xl font-semibold leading-tight text-primary-foreground md:text-6xl">
            A Kenyan education with the confidence to face the world.
          </h1>
          <p className="mt-5 max-w-xl text-lg text-primary-foreground/85">
            Jupiter Academy Kenya is a Nairobi day and boarding school where CBC competencies,
            IGCSE pathways, Kiswahili, service and creativity share the same timetable.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link
              to="/courses"
              className="inline-flex items-center gap-2 rounded-md px-5 py-3 text-sm font-semibold text-primary shadow-lg transition hover:opacity-90"
              style={{ background: "var(--gradient-gold)" }}
            >
              Explore Learning <ArrowRight className="h-4 w-4" />
            </Link>
            <Link
              to="/admissions"
              className="inline-flex items-center rounded-md border border-primary-foreground/40 px-5 py-3 text-sm font-semibold text-primary-foreground hover:bg-primary-foreground/10"
            >
              Book a Campus Visit
            </Link>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="border-b border-border bg-secondary/40">
        <div className="mx-auto grid max-w-6xl grid-cols-2 gap-8 px-6 py-12 md:grid-cols-4">
          {[
            { k: "8-4-4", l: "Alumni welcomed" },
            { k: "CBC", l: "Competency-based learning" },
            { k: "Kiswahili", l: "Everyday school culture" },
            { k: "40+", l: "Clubs, games & service teams" },
          ].map((s) => (
            <div key={s.l}>
              <div className="font-serif text-3xl font-semibold text-primary md:text-4xl">
                {s.k}
              </div>
              <div className="mt-1 text-sm text-muted-foreground">{s.l}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Three pillars */}
      <section className="mx-auto max-w-6xl px-6 py-20">
        <div className="max-w-2xl">
          <p
            className="text-sm font-semibold uppercase tracking-wider text-accent-foreground/80"
            style={{ color: "oklch(0.55 0.13 70)" }}
          >
            Our Kenyan promise
          </p>
          <h2 className="mt-2 font-serif text-3xl font-semibold text-primary md:text-4xl">
            Rooted at home, ready for anywhere
          </h2>
          <p className="mt-3 text-muted-foreground">
            Every learner spends meaningful time in the lab, the shamba, the seminar room and the
            studio. We teach ambition with humility, and excellence with utu.
          </p>
        </div>

        <div className="mt-12 grid gap-8 md:grid-cols-3">
          {pillars.map((p) => (
            <article
              key={p.title}
              className="group overflow-hidden rounded-2xl border border-border bg-card shadow-sm transition hover:-translate-y-1 hover:shadow-[var(--shadow-elegant)]"
            >
              <div className="aspect-[4/3] overflow-hidden">
                <img
                  src={p.img}
                  alt={`${p.title} at Jupiter Academy Kenya`}
                  loading="lazy"
                  width={1024}
                  height={768}
                  className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                />
              </div>
              <div className="p-6">
                <div className="flex items-center gap-2 text-primary">
                  <p.icon className="h-5 w-5" />
                  <h3 className="font-serif text-xl font-semibold">{p.title}</h3>
                </div>
                <p className="mt-2 text-sm text-muted-foreground">{p.blurb}</p>
                <Link
                  to={p.to}
                  className="mt-4 inline-flex items-center gap-1 text-sm font-medium text-primary hover:opacity-80"
                >
                  See student work <ArrowRight className="h-4 w-4" />
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
            {
              icon: Users,
              title: "Teachers who know each child",
              text: "Small streams, strong mentorship and house tutors who keep families close.",
            },
            {
              icon: BookOpen,
              title: "CBC + IGCSE pathways",
              text: "Learners build competencies early, then choose local and international exam routes.",
            },
            {
              icon: Award,
              title: "Kenyan excellence",
              text: "Clubs, games, service, music festivals and science fairs are part of the timetable.",
            },
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
        <h2 className="font-serif text-3xl font-semibold text-primary md:text-4xl">
          Come see Jupiter Kenya for yourself
        </h2>
        <p className="mx-auto mt-3 max-w-xl text-muted-foreground">
          Open mornings run twice a month in Nairobi. Tours are led by students in English and
          Kiswahili.
        </p>
        <Link
          to="/contact"
          className="mt-6 inline-flex items-center gap-2 rounded-md bg-primary px-5 py-3 text-sm font-semibold text-primary-foreground shadow hover:opacity-90"
        >
          Schedule a visit <ArrowRight className="h-4 w-4" />
        </Link>
      </section>

      <SiteFooter />
    </div>
  );
}
