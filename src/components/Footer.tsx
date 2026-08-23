import Link from "next/link";
import { site } from "@/lib/site";

export function Footer() {
  return (
    <footer className="mt-auto border-t border-border">
      <div className="mx-auto grid max-w-6xl gap-10 px-4 py-12 sm:px-6 md:grid-cols-3">
        <div>
          <p className="display text-lg text-foreground">{site.name}</p>
          <p className="mt-2 max-w-xs text-sm text-muted">{site.tagline}</p>
        </div>
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.14em] text-muted">Navigate</p>
          <ul className="mt-3 space-y-2 text-sm">
            <li>
              <Link className="focus-ring text-foreground hover:text-accent" href="/work">
                Work
              </Link>
            </li>
            <li>
              <Link
                className="focus-ring text-foreground hover:text-accent"
                href="/services"
              >
                Services
              </Link>
            </li>
            <li>
              <Link
                className="focus-ring text-foreground hover:text-accent"
                href="/contact"
              >
                Contact
              </Link>
            </li>
          </ul>
        </div>
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.14em] text-muted">Contact</p>
          <a
            className="focus-ring mt-3 inline-block text-sm text-accent-soft hover:text-accent"
            href={`mailto:${site.email}`}
          >
            {site.email}
          </a>
          <p className="mt-4 text-xs text-muted">
            © {new Date().getFullYear()} {site.name}. {site.owner}.
          </p>
        </div>
      </div>
    </footer>
  );
}
