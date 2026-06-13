import { createFileRoute } from "@tanstack/react-router";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import stemImg from "@/assets/stem.jpg";
import socialImg from "@/assets/social.jpg";
import artImg from "@/assets/art.jpg";
import { Atom, Globe2, Palette } from "lucide-react";

export const Route = createFileRoute("/courses")({
  head: () => ({
    meta: [
      { title: "Courses — Jupiter Academy" },
      { name: "description", content: "Explore Jupiter Academy's offerings across STEM, social sciences and the arts, with example projects from each." },
      { property: "og:title", content: "Courses at Jupiter Academy" },
      { property: "og:description", content: "STEM, social sciences and arts — with real student work from each pillar." },
    ],
  }),
  component: CoursesPage,
});

type Track = {
  id: string;
  title: string;
  icon: typeof Atom;
  img: string;
  intro: string;
  courses: { name: string; grades: string; desc: string }[];
  examples: { title: string; desc: string }[];
};

const tracks: Track[] = [
  {
    id: "stem",
    title: "STEM",
    icon: Atom,
    img: stemImg,
    intro:
      "Science, technology, engineering and mathematics at Jupiter is hands‑on from the first week. Students build, measure, code and question.",
    courses: [
      { name: "Foundations of Physics", grades: "Grades 9–10", desc: "Mechanics, waves and electricity through weekly labs." },
      { name: "Organic Chemistry", grades: "Grade 11", desc: "Structure, reaction mechanisms and a term‑long synthesis project." },
      { name: "Robotics & Embedded Systems", grades: "Grades 10–12", desc: "Arduino, sensors and autonomous robots for the regional league." },
      { name: "Data Science with Python", grades: "Grade 12", desc: "Statistics, visualisation and a capstone with a real dataset." },
      { name: "Calculus (HL)", grades: "Grade 12", desc: "Differential and integral calculus with applications to physics and economics." },
    ],
    examples: [
      { title: "Mars Rover Prototype", desc: "Year 11 team built a six‑wheel rover that won 2nd at State Robotics." },
      { title: "River pH Survey", desc: "Year 10 published a 12‑month water quality study of the Jupiter Creek." },
      { title: "ML Bird Classifier", desc: "Grade 12 capstone classifying 38 local bird species from audio clips." },
    ],
  },
  {
    id: "social",
    title: "Social Sciences",
    icon: Globe2,
    img: socialImg,
    intro:
      "Our humanities program treats students as junior scholars: they read primary sources, run debates and produce original research.",
    courses: [
      { name: "World History 1500–Today", grades: "Grade 9", desc: "From the Age of Exploration to the present, taught through case studies." },
      { name: "Human Geography", grades: "Grade 10", desc: "Cities, migration and climate — with fieldwork in the local borough." },
      { name: "Economics", grades: "Grades 11–12", desc: "Micro, macro and behavioural economics with a market simulation." },
      { name: "Psychology", grades: "Grade 11", desc: "Cognition, development and a small‑scale ethics‑reviewed study." },
      { name: "Global Politics", grades: "Grade 12", desc: "Model UN, comparative governments and a research paper." },
    ],
    examples: [
      { title: "Oral Histories of Springfield", desc: "Grade 9 interviewed 40 long‑time residents; archived at the city library." },
      { title: "Refugee Pathways Atlas", desc: "Grade 10 mapped post‑2015 migration corridors with interactive maps." },
      { title: "Ballot Design Study", desc: "Grade 12 ran a usability study on local ballots, presented to the council." },
    ],
  },
  {
    id: "art",
    title: "Artwork",
    icon: Palette,
    img: artImg,
    intro:
      "Studio time is protected on every student's timetable. Our art program builds technique, critique and a personal voice.",
    courses: [
      { name: "Drawing & Painting", grades: "Grades 9–12", desc: "Observation, colour theory and a sustained body of work." },
      { name: "Sculpture & Ceramics", grades: "Grades 10–12", desc: "Hand‑building, wheel and mixed media installations." },
      { name: "Photography", grades: "Grades 10–12", desc: "Analog darkroom and digital workflows; portfolio review at year end." },
      { name: "Graphic Design", grades: "Grades 11–12", desc: "Typography, identity and a real brief from a local nonprofit." },
      { name: "Film & Animation", grades: "Grades 11–12", desc: "Scripting, shooting and post — a short film screened at the spring festival." },
    ],
    examples: [
      { title: "‘Tides’ — senior painting series", desc: "Six large oil canvases exploring memory and the coast." },
      { title: "Civic Posters", desc: "Year 11 designed a poster campaign now displayed across Springfield buses." },
      { title: "Animated Short ‘Light Years’", desc: "Grade 12 short film selected for a state youth film festival." },
    ],
  },
];

function CoursesPage() {
  return (
    <div className="min-h-screen bg-background">
      <SiteHeader />

      <section className="border-b border-border bg-secondary/40">
        <div className="mx-auto max-w-6xl px-6 py-16">
          <h1 className="font-serif text-4xl font-semibold text-primary md:text-5xl">Courses & Programs</h1>
          <p className="mt-3 max-w-2xl text-muted-foreground">
            A balanced curriculum across three pillars. Click through to see what students are actually making.
          </p>
          <div className="mt-6 flex flex-wrap gap-2">
            {tracks.map((t) => (
              <a key={t.id} href={`#${t.id}`} className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-4 py-2 text-sm font-medium text-primary hover:bg-accent/20">
                <t.icon className="h-4 w-4" /> {t.title}
              </a>
            ))}
          </div>
        </div>
      </section>

      {tracks.map((t, i) => (
        <section key={t.id} id={t.id} className={`scroll-mt-20 ${i % 2 === 1 ? "bg-secondary/40" : ""}`}>
          <div className="mx-auto max-w-6xl px-6 py-20">
            <div className="grid gap-10 md:grid-cols-[1fr_1.2fr] md:items-center">
              <div className="overflow-hidden rounded-2xl shadow-[var(--shadow-soft)]">
                <img src={t.img} alt={`${t.title} program`} loading="lazy" width={1024} height={768} className="h-full w-full object-cover" />
              </div>
              <div>
                <div className="inline-flex items-center gap-2 rounded-full bg-accent/30 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-primary">
                  <t.icon className="h-4 w-4" /> {t.title}
                </div>
                <h2 className="mt-3 font-serif text-3xl font-semibold text-primary md:text-4xl">{t.title} at Jupiter</h2>
                <p className="mt-3 text-muted-foreground">{t.intro}</p>
              </div>
            </div>

            {/* Courses list */}
            <div className="mt-12">
              <h3 className="font-serif text-xl font-semibold text-primary">Courses offered</h3>
              <div className="mt-4 grid gap-4 md:grid-cols-2">
                {t.courses.map((c) => (
                  <div key={c.name} className="rounded-xl border border-border bg-card p-5">
                    <div className="flex items-baseline justify-between gap-3">
                      <h4 className="font-semibold text-primary">{c.name}</h4>
                      <span className="text-xs font-medium uppercase tracking-wider text-muted-foreground">{c.grades}</span>
                    </div>
                    <p className="mt-2 text-sm text-muted-foreground">{c.desc}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Examples */}
            <div className="mt-12">
              <h3 className="font-serif text-xl font-semibold text-primary">Examples of student work</h3>
              <div className="mt-4 grid gap-4 md:grid-cols-3">
                {t.examples.map((e) => (
                  <div key={e.title} className="rounded-xl border-l-4 bg-card p-5 shadow-sm" style={{ borderLeftColor: "oklch(0.78 0.14 75)" }}>
                    <h4 className="font-semibold text-primary">{e.title}</h4>
                    <p className="mt-2 text-sm text-muted-foreground">{e.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      ))}

      <SiteFooter />
    </div>
  );
}
