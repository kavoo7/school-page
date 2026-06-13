import { Link } from "@tanstack/react-router";

export function SiteFooter() {
  return (
    <footer className="mt-24 border-t border-border bg-secondary/40">
      <div className="mx-auto grid max-w-6xl gap-10 px-6 py-14 md:grid-cols-4">
        <div>
          <h3 className="font-serif text-lg font-semibold text-primary">Jupiter Academy</h3>
          <p className="mt-3 text-sm text-muted-foreground">
            Igniting curiosity and shaping tomorrow's thinkers, makers and leaders since 1978.
          </p>
        </div>
        <div>
          <h4 className="text-sm font-semibold text-foreground">Explore</h4>
          <ul className="mt-3 space-y-2 text-sm text-muted-foreground">
            <li><Link to="/courses" className="hover:text-primary">Courses</Link></li>
            <li><Link to="/about" className="hover:text-primary">About</Link></li>
            <li><Link to="/admissions" className="hover:text-primary">Admissions</Link></li>
          </ul>
        </div>
        <div>
          <h4 className="text-sm font-semibold text-foreground">Contact</h4>
          <ul className="mt-3 space-y-2 text-sm text-muted-foreground">
            <li>12 Orbit Lane, Springfield</li>
            <li>(555) 010‑1978</li>
            <li>hello@jupiteracademy.edu</li>
          </ul>
        </div>
        <div>
          <h4 className="text-sm font-semibold text-foreground">Hours</h4>
          <ul className="mt-3 space-y-2 text-sm text-muted-foreground">
            <li>Mon–Fri · 7:30 – 16:30</li>
            <li>Sat · Sports & clubs</li>
          </ul>
        </div>
      </div>
      <div className="border-t border-border py-5 text-center text-xs text-muted-foreground">
        © {new Date().getFullYear()} Jupiter Academy. All rights reserved.
      </div>
    </footer>
  );
}
