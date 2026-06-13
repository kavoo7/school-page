import { Link } from "@tanstack/react-router";
import { GraduationCap } from "lucide-react";

const nav = [
  { to: "/", label: "Home" },
  { to: "/courses", label: "Courses" },
  { to: "/about", label: "About" },
  { to: "/admissions", label: "Admissions" },
  { to: "/contact", label: "Contact" },
] as const;

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-40 w-full border-b border-border bg-background/85 backdrop-blur">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-6">
        <Link to="/" className="flex items-center gap-2 text-primary">
          <span className="grid h-9 w-9 place-items-center rounded-lg" style={{ background: "var(--gradient-gold)" }}>
            <GraduationCap className="h-5 w-5 text-primary" />
          </span>
          <span className="font-serif text-lg font-semibold tracking-tight">Jupiter Academy</span>
        </Link>
        <nav className="hidden gap-7 text-sm font-medium md:flex">
          {nav.map((n) => (
            <Link
              key={n.to}
              to={n.to}
              className="text-muted-foreground transition-colors hover:text-primary"
              activeProps={{ className: "text-primary" }}
              activeOptions={{ exact: n.to === "/" }}
            >
              {n.label}
            </Link>
          ))}
        </nav>
        <Link
          to="/admissions"
          className="hidden rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground shadow-sm transition hover:opacity-90 md:inline-flex"
        >
          Apply Now
        </Link>
      </div>
    </header>
  );
}
