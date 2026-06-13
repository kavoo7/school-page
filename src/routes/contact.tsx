import { createFileRoute } from "@tanstack/react-router";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { Mail, Phone, MapPin } from "lucide-react";
import { useState } from "react";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — Jupiter Academy" },
      { name: "description", content: "Get in touch with Jupiter Academy admissions, faculty or the front office." },
      { property: "og:title", content: "Contact Jupiter Academy" },
      { property: "og:description", content: "Visit, call or message us." },
    ],
  }),
  component: ContactPage,
});

function ContactPage() {
  const [sent, setSent] = useState(false);
  return (
    <div className="min-h-screen bg-background">
      <SiteHeader />
      <section className="mx-auto max-w-5xl px-6 py-20">
        <h1 className="font-serif text-4xl font-semibold text-primary md:text-5xl">Contact us</h1>
        <p className="mt-3 max-w-xl text-muted-foreground">
          We love hearing from prospective families, alumni and our neighbours. Pick whichever works best for you.
        </p>

        <div className="mt-12 grid gap-10 md:grid-cols-[1fr_1.2fr]">
          <ul className="space-y-5 text-sm">
            <li className="flex gap-3"><MapPin className="mt-0.5 h-5 w-5 text-accent" /><span><b className="text-primary">Campus</b><br/>12 Orbit Lane, Springfield, 64801</span></li>
            <li className="flex gap-3"><Phone className="mt-0.5 h-5 w-5 text-accent" /><span><b className="text-primary">Phone</b><br/>(555) 010‑1978</span></li>
            <li className="flex gap-3"><Mail className="mt-0.5 h-5 w-5 text-accent" /><span><b className="text-primary">Email</b><br/>hello@jupiteracademy.edu</span></li>
          </ul>

          <form
            onSubmit={(e) => { e.preventDefault(); setSent(true); }}
            className="rounded-2xl border border-border bg-card p-6 shadow-[var(--shadow-soft)]"
          >
            {sent ? (
              <div className="py-10 text-center">
                <h2 className="font-serif text-xl font-semibold text-primary">Thank you!</h2>
                <p className="mt-2 text-sm text-muted-foreground">We'll be in touch within two school days.</p>
              </div>
            ) : (
              <div className="space-y-4">
                <div>
                  <label className="text-sm font-medium text-primary">Your name</label>
                  <input required className="mt-1 w-full rounded-md border border-input bg-background px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-ring" />
                </div>
                <div>
                  <label className="text-sm font-medium text-primary">Email</label>
                  <input required type="email" className="mt-1 w-full rounded-md border border-input bg-background px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-ring" />
                </div>
                <div>
                  <label className="text-sm font-medium text-primary">Message</label>
                  <textarea required rows={5} className="mt-1 w-full rounded-md border border-input bg-background px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-ring" />
                </div>
                <button type="submit" className="w-full rounded-md bg-primary px-5 py-3 text-sm font-semibold text-primary-foreground hover:opacity-90">
                  Send message
                </button>
              </div>
            )}
          </form>
        </div>
      </section>
      <SiteFooter />
    </div>
  );
}
