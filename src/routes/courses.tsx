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
      { title: "Learning — Jupiter Academy Kenya" },
      {
        name: "description",
        content:
          "Explore Jupiter Academy Kenya's CBC and IGCSE learning across STEM, Kenyan studies and the arts.",
      },
      { property: "og:title", content: "Learning at Jupiter Academy Kenya" },
      {
        property: "og:description",
        content: "CBC, IGCSE, Kenyan studies, STEM and arts — with real student work.",
      },
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
      "Science, technology, engineering and mathematics at Jupiter is hands-on from the first week. Students build, measure, code and question using Kenyan problems as their brief.",
    courses: [
      {
        name: "Integrated Science",
        grades: "Junior Secondary",
        desc: "Matter, energy, health and environment through practical CBC investigations.",
      },
      {
        name: "IGCSE Chemistry",
        grades: "Years 10–11",
        desc: "Structure, reactions and lab technique with links to water, soils and industry.",
      },
      {
        name: "Robotics & Embedded Systems",
        grades: "Grades 10–12",
        desc: "Arduino, sensors and autonomous robots for Nairobi STEM fairs and contests.",
      },
      {
        name: "Data Science with Python",
        grades: "Senior School",
        desc: "Statistics, visualisation and capstones using public Kenyan datasets.",
      },
      {
        name: "Mathematics for STEM",
        grades: "Senior School",
        desc: "Algebra, calculus and modelling for physics, economics and engineering.",
      },
    ],
    examples: [
      {
        title: "Smart Irrigation Prototype",
        desc: "Year 10 learners built soil-moisture sensors for a drip irrigation model.",
      },
      {
        title: "Nairobi River Water Study",
        desc: "Junior Secondary learners tested pH and turbidity, then presented restoration ideas.",
      },
      {
        title: "AI Bird Call Classifier",
        desc: "Senior learners classified calls from Nairobi National Park and Karura Forest.",
      },
    ],
  },
  {
    id: "social",
    title: "Kenyan & Global Studies",
    icon: Globe2,
    img: socialImg,
    intro:
      "Our humanities program treats students as junior scholars: they read primary sources, run debates, practise Kiswahili and produce original research.",
    courses: [
      {
        name: "Kenyan History & Governance",
        grades: "Junior Secondary",
        desc: "Pre-colonial societies, independence, devolution and active citizenship.",
      },
      {
        name: "Geography of East Africa",
        grades: "Years 9–11",
        desc: "Landforms, climate, cities and fieldwork from the Rift Valley to the coast.",
      },
      {
        name: "Business & Economics",
        grades: "Grades 11–12",
        desc: "Enterprise, markets, SACCOs and budgeting with a student biashara simulation.",
      },
      {
        name: "Kiswahili Communication",
        grades: "All years",
        desc: "Debate, fasihi, public speaking and confident everyday Kiswahili.",
      },
      {
        name: "Global Perspectives",
        grades: "Senior School",
        desc: "Model UN, Pan-African affairs, climate justice and research writing.",
      },
    ],
    examples: [
      {
        title: "Oral Histories of Nairobi",
        desc: "Learners interviewed elders from Eastlands, Westlands and Kiambu families.",
      },
      {
        title: "County Budget Explainer",
        desc: "Senior learners turned public county budgets into clear infographics.",
      },
      {
        title: "Madaraka Debate Series",
        desc: "House teams debated leadership, rights and responsibility in Kenya today.",
      },
    ],
  },
  {
    id: "art",
    title: "Arts & Culture",
    icon: Palette,
    img: artImg,
    intro:
      "Studio time is protected on every student's timetable. Our arts program builds technique, critique and a Kenyan creative voice.",
    courses: [
      {
        name: "Drawing, Painting & Design",
        grades: "Grades 9–12",
        desc: "Observation, colour, pattern and a sustained portfolio of original work.",
      },
      {
        name: "Sculpture, Beadwork & Ceramics",
        grades: "Grades 10–12",
        desc: "Hand-building, clay, beadwork, found objects and mixed media installations.",
      },
      {
        name: "Photography",
        grades: "Grades 10–12",
        desc: "Portraits, documentary walks and digital workflows; portfolio review at year end.",
      },
      {
        name: "Graphic Design",
        grades: "Grades 11–12",
        desc: "Typography, identity and a real brief from a Nairobi community organisation.",
      },
      {
        name: "Film, Animation & Drama",
        grades: "Grades 11–12",
        desc: "Scripting, shooting, post-production and drama for music and theatre festivals.",
      },
    ],
    examples: [
      {
        title: "Lamu Light — senior painting series",
        desc: "Six large canvases exploring coastal light, memory and Swahili architecture.",
      },
      {
        title: "Matatu Type Posters",
        desc: "Year 11 designed a poster series inspired by Nairobi street lettering.",
      },
      {
        title: "Animated Short ‘Safari ya Kesho’",
        desc: "Senior film selected for a Kenyan youth arts showcase.",
      },
    ],
  },
];

function CoursesPage() {
  return (
    <div className="min-h-screen bg-background">
      <SiteHeader />

      <section className="border-b border-border bg-secondary/40">
        <div className="mx-auto max-w-6xl px-6 py-16">
          <h1 className="font-serif text-4xl font-semibold text-primary md:text-5xl">
            Learning & Pathways
          </h1>
          <p className="mt-3 max-w-2xl text-muted-foreground">
            CBC foundations, IGCSE options and Kenyan fieldwork across three pillars. Click through
            to see what students are actually making.
          </p>
          <div className="mt-6 flex flex-wrap gap-2">
            {tracks.map((t) => (
              <a
                key={t.id}
                href={`#${t.id}`}
                className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-4 py-2 text-sm font-medium text-primary hover:bg-accent/20"
              >
                <t.icon className="h-4 w-4" /> {t.title}
              </a>
            ))}
          </div>
        </div>
      </section>

      {tracks.map((t, i) => (
        <section
          key={t.id}
          id={t.id}
          className={`scroll-mt-20 ${i % 2 === 1 ? "bg-secondary/40" : ""}`}
        >
          <div className="mx-auto max-w-6xl px-6 py-20">
            <div className="grid gap-10 md:grid-cols-[1fr_1.2fr] md:items-center">
              <div className="overflow-hidden rounded-2xl shadow-[var(--shadow-soft)]">
                <img
                  src={t.img}
                  alt={`${t.title} program`}
                  loading="lazy"
                  width={1024}
                  height={768}
                  className="h-full w-full object-cover"
                />
              </div>
              <div>
                <div className="inline-flex items-center gap-2 rounded-full bg-accent/30 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-primary">
                  <t.icon className="h-4 w-4" /> {t.title}
                </div>
                <h2 className="mt-3 font-serif text-3xl font-semibold text-primary md:text-4xl">
                  {t.title} at Jupiter Kenya
                </h2>
                <p className="mt-3 text-muted-foreground">{t.intro}</p>
              </div>
            </div>

            {/* Courses list */}
            <div className="mt-12">
              <h3 className="font-serif text-xl font-semibold text-primary">Learning offered</h3>
              <div className="mt-4 grid gap-4 md:grid-cols-2">
                {t.courses.map((c) => (
                  <div key={c.name} className="rounded-xl border border-border bg-card p-5">
                    <div className="flex items-baseline justify-between gap-3">
                      <h4 className="font-semibold text-primary">{c.name}</h4>
                      <span className="text-xs font-medium uppercase tracking-wider text-muted-foreground">
                        {c.grades}
                      </span>
                    </div>
                    <p className="mt-2 text-sm text-muted-foreground">{c.desc}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Examples */}
            <div className="mt-12">
              <h3 className="font-serif text-xl font-semibold text-primary">
                Examples of student work
              </h3>
              <div className="mt-4 grid gap-4 md:grid-cols-3">
                {t.examples.map((e) => (
                  <div
                    key={e.title}
                    className="rounded-xl border-l-4 bg-card p-5 shadow-sm"
                    style={{ borderLeftColor: "oklch(0.78 0.14 75)" }}
                  >
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
