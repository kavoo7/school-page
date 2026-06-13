import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { CheckCircle2 } from "lucide-react";

export const Route = createFileRoute("/admissions")({
  head: () => ({
    meta: [
      { title: "Admissions — Jupiter Academy" },
      { name: "description", content: "How to apply to Jupiter Academy, timelines, financial aid and tuition." },
      { property: "og:title", content: "Admissions at Jupiter Academy" },
      { property: "og:description", content: "Applications open for the 2026–27 school year." },
    ],
  }),
  component: AdmissionsPage,
});

const steps = [
  ["Inquire", "Submit a short interest form. We'll send a viewbook and invite you to an open morning."],
  ["Visit", "Tour campus with a student guide and meet our admissions team."],
  ["Apply", "Complete the online application by January 15. Includes a short writing sample."],
  ["Assess & interview", "Age‑appropriate assessment and a family conversation."],
  ["Decision", "Offers are sent on March 1. Enrolment confirmed by April 1."],
];

function AdmissionsPage() {
  return (
    <div className="min-h-screen bg-background">
      <SiteHeader />
      <section className="bg-primary text-primary-foreground">
        <div className="mx-auto max-w-6xl px-6 py-20">
          <h1 className="font-serif text-4xl font-semibold md:text-5xl">Admissions</h1>
          <p className="mt-4 max-w-2xl text-primary-foreground/85">
            Applications are open for the 2026–27 school year across all grades. We admit on a rolling basis once seats are filled.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-4xl px-6 py-16">
        <h2 className="font-serif text-2xl font-semibold text-primary">How to apply</h2>
        <ol className="mt-6 space-y-4">
          {steps.map(([t, d], i) => (
            <li key={t} className="flex gap-4 rounded-xl border border-border bg-card p-5">
              <div className="grid h-9 w-9 shrink-0 place-items-center rounded-full bg-accent font-semibold text-accent-foreground">{i + 1}</div>
              <div>
                <div className="font-semibold text-primary">{t}</div>
                <p className="mt-1 text-sm text-muted-foreground">{d}</p>
              </div>
            </li>
          ))}
        </ol>

        <h2 className="mt-14 font-serif text-2xl font-semibold text-primary">Tuition & aid</h2>
        <div className="mt-4 grid gap-4 sm:grid-cols-3">
          {[
            ["Lower School", "K – 5", "$18,400 / yr"],
            ["Middle School", "6 – 8", "$22,900 / yr"],
            ["Upper School", "9 – 12", "$26,500 / yr"],
          ].map(([s, g, p]) => (
            <div key={s} className="rounded-xl border border-border bg-card p-5">
              <div className="text-sm text-muted-foreground">{g}</div>
              <div className="mt-1 font-semibold text-primary">{s}</div>
              <div className="mt-2 font-serif text-2xl text-primary">{p}</div>
            </div>
          ))}
        </div>
        <p className="mt-4 text-sm text-muted-foreground">
          <CheckCircle2 className="mr-1 inline h-4 w-4 text-primary" />
          Need‑based financial aid covers up to 100% of tuition for qualifying families.
        </p>

        <div className="mt-12 rounded-2xl bg-secondary/60 p-8 text-center">
          <h3 className="font-serif text-xl font-semibold text-primary">Ready to begin?</h3>
          <p className="mt-2 text-sm text-muted-foreground">Get in touch and we'll schedule your visit.</p>
          <Link to="/contact" className="mt-4 inline-flex rounded-md bg-primary px-5 py-3 text-sm font-semibold text-primary-foreground hover:opacity-90">
            Contact Admissions
          </Link>
        </div>
      </section>
      <SiteFooter />
    </div>
  );
}
