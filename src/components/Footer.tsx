import { Mountain } from "lucide-react";
import { NAV_LINKS } from "@/lib/constants";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-forest/10 bg-forest-dark py-12 text-white/70">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center justify-between gap-8 sm:flex-row">
          <div className="flex items-center gap-2">
            <Mountain className="h-7 w-7 text-ember" />
            <span className="font-display font-bold text-white">CampPilot</span>
          </div>

          <nav className="flex flex-wrap justify-center gap-6">
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm transition hover:text-ember"
              >
                {link.label}
              </a>
            ))}
          </nav>
        </div>

        <div className="mt-8 border-t border-white/10 pt-8 text-center text-xs">
          <p>© {year} CampPilot. All rights reserved.</p>
          <p className="mt-2">
            AI-powered camping, 4WD &amp; fishing adventures for Australia.
          </p>
        </div>
      </div>
    </footer>
  );
}
