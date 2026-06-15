import { Link } from "@tanstack/react-router";

export function SiteFooter() {
  return (
    <footer className="mt-24 border-t border-border bg-secondary/40">
      <div className="mx-auto grid max-w-6xl gap-10 px-6 py-14 md:grid-cols-4">
        <div>
          <h3 className="font-serif text-lg font-semibold text-primary">Jupiter Academy Kenya</h3>
          <p className="mt-3 text-sm text-muted-foreground">
            Raising curious, grounded and globally ready learners from the heart of Nairobi.
          </p>
        </div>
        <div>
          <h4 className="text-sm font-semibold text-foreground">Explore</h4>
          <ul className="mt-3 space-y-2 text-sm text-muted-foreground">
            <li>
              <Link to="/courses" className="hover:text-primary">
                Learning
              </Link>
            </li>
            <li>
              <Link to="/about" className="hover:text-primary">
                About
              </Link>
            </li>
            <li>
              <Link to="/admissions" className="hover:text-primary">
                Admissions
              </Link>
            </li>
          </ul>
        </div>
        <div>
          <h4 className="text-sm font-semibold text-foreground">Contact</h4>
          <ul className="mt-3 space-y-2 text-sm text-muted-foreground">
            <li>Limuru Road, Nairobi</li>
            <li>+254 712 010 197</li>
            <li>karibu@jupiter.ac.ke</li>
          </ul>
        </div>
        <div>
          <h4 className="text-sm font-semibold text-foreground">Hours</h4>
          <ul className="mt-3 space-y-2 text-sm text-muted-foreground">
            <li>Mon–Fri · 7:20 – 16:10</li>
            <li>Sat · Games, clubs & service</li>
          </ul>
        </div>
      </div>
      <div className="border-t border-border py-5 text-center text-xs text-muted-foreground">
        © {new Date().getFullYear()} Jupiter Academy Kenya. Harambee in learning.
      </div>
    </footer>
  );
}
