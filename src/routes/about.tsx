import { createFileRoute } from "@tanstack/react-router";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About — Jupiter Academy Kenya" },
      {
        name: "description",
        content:
          "Our mission, values and story as a Kenyan school serving Nairobi families.",
      },
      { property: "og:title", content: "About Jupiter Academy Kenya" },
      { property: "og:description", content: "Mission, values and story of Jupiter Academy Kenya." },
    ],
  }),
  component: AboutPage,
});

function AboutPage() {
  return (
    <div className="min-h-screen bg-background">
      <SiteHeader />
      <section className="mx-auto max-w-3xl px-6 py-20">
        <h1 className="font-serif text-4xl font-semibold text-primary md:text-5xl">
          About Jupiter Academy Kenya
        </h1>
        <p className="mt-6 text-lg text-muted-foreground">
          Founded by Kenyan educators and parents, Jupiter Academy Kenya began as a small Nairobi
          learning community built on harambee, discipline and curiosity. Today we educate learners
          from early years through senior school, with day and boarding options for families across
          Nairobi, Kiambu, Machakos and beyond.
        </p>

        <h2 className="mt-12 font-serif text-2xl font-semibold text-primary">Our mission</h2>
        <p className="mt-3 text-muted-foreground">
          To graduate young people who are intellectually serious, creatively brave and morally
          grounded — equally at home in a lab, a library, a studio, a shamba and a community baraza.
        </p>

        <h2 className="mt-12 font-serif text-2xl font-semibold text-primary">Our values</h2>
        <ul className="mt-4 grid gap-4 sm:grid-cols-2">
          {[
            ["Utu", "We teach respect, responsibility and care for the whole person."],
            ["Bidii", "Skill, practice and effort show in finished work."],
            ["Harambee", "Families, teachers and learners pull together."],
            ["Ujasiri", "We try difficult things and learn with courage."],
          ].map(([t, d]) => (
            <li key={t} className="rounded-xl border border-border bg-card p-5">
              <div className="font-semibold text-primary">{t}</div>
              <p className="mt-1 text-sm text-muted-foreground">{d}</p>
            </li>
          ))}
        </ul>

        <h2 className="mt-12 font-serif text-2xl font-semibold text-primary">Leadership</h2>
        <p className="mt-3 text-muted-foreground">
          Head of School: Dr. Wanjiku Mwangi · Dean of Studies: Mr. Otieno Ochieng · Dean of
          Students: Ms. Amina Hassan.
        </p>
      </section>
      <SiteFooter />
    </div>
  );
}
