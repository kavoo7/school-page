import { createFileRoute } from "@tanstack/react-router";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About — Jupiter Academy" },
      { name: "description", content: "Our mission, values and history. Jupiter Academy has educated curious students since 1978." },
      { property: "og:title", content: "About Jupiter Academy" },
      { property: "og:description", content: "Mission, values and history of Jupiter Academy." },
    ],
  }),
  component: AboutPage,
});

function AboutPage() {
  return (
    <div className="min-h-screen bg-background">
      <SiteHeader />
      <section className="mx-auto max-w-3xl px-6 py-20">
        <h1 className="font-serif text-4xl font-semibold text-primary md:text-5xl">About Jupiter Academy</h1>
        <p className="mt-6 text-lg text-muted-foreground">
          Founded in 1978 by a small group of teachers and parents, Jupiter Academy began with twenty‑two students in a converted observatory on the edge of Springfield. Today we educate over 720 students from kindergarten through grade 12.
        </p>

        <h2 className="mt-12 font-serif text-2xl font-semibold text-primary">Our mission</h2>
        <p className="mt-3 text-muted-foreground">
          To graduate young people who are intellectually serious, creatively brave and morally awake — equally at home in a lab, a library and a studio.
        </p>

        <h2 className="mt-12 font-serif text-2xl font-semibold text-primary">Our values</h2>
        <ul className="mt-4 grid gap-4 sm:grid-cols-2">
          {[
            ["Curiosity", "Questions are taken seriously, at every age."],
            ["Craft", "Skill, practice and care show in finished work."],
            ["Community", "We belong to each other and to Springfield."],
            ["Courage", "We try difficult things and learn from missing the mark."],
          ].map(([t, d]) => (
            <li key={t} className="rounded-xl border border-border bg-card p-5">
              <div className="font-semibold text-primary">{t}</div>
              <p className="mt-1 text-sm text-muted-foreground">{d}</p>
            </li>
          ))}
        </ul>

        <h2 className="mt-12 font-serif text-2xl font-semibold text-primary">Leadership</h2>
        <p className="mt-3 text-muted-foreground">
          Head of School: Dr. Amara Okonkwo · Dean of Studies: Mr. Luca Romano · Dean of Students: Ms. Priya Shah.
        </p>
      </section>
      <SiteFooter />
    </div>
  );
}
