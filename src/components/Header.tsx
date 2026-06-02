"use client";

import { useState } from "react";
import { Menu, Mountain, X } from "lucide-react";
import { NAV_LINKS } from "@/lib/constants";
import { Button } from "@/components/ui/Button";

export function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-white/10 bg-forest-dark/95 backdrop-blur-md">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-3 sm:px-6 lg:px-8">
        <a href="#" className="flex shrink-0 items-center gap-2">
          <Mountain className="h-8 w-8 text-ember" strokeWidth={2.5} />
          <div>
            <span className="font-display text-lg font-bold tracking-tight text-white">
              CampPilot
            </span>
            <p className="hidden text-[10px] text-white/60 sm:block">
              Your personal camping co-pilot
            </p>
          </div>
        </a>

        <nav className="hidden items-center gap-8 md:flex">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-white/80 transition hover:text-ember"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="hidden md:block">
          <Button
            variant="primary"
            className="!bg-forest-light !py-2.5 !text-xs"
            onClick={() =>
              document.getElementById("adventure-form")?.scrollIntoView({
                behavior: "smooth",
              })
            }
          >
            Get Early Access
          </Button>
        </div>

        <button
          type="button"
          className="rounded-lg p-2 text-white md:hidden"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label={mobileOpen ? "Close menu" : "Open menu"}
        >
          {mobileOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {mobileOpen && (
        <div className="border-t border-white/10 bg-forest-dark px-4 py-4 md:hidden">
          <nav className="flex flex-col gap-3">
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm font-medium text-white/80"
                onClick={() => setMobileOpen(false)}
              >
                {link.label}
              </a>
            ))}
            <Button
              variant="primary"
              fullWidth
              className="mt-2"
              onClick={() => {
                setMobileOpen(false);
                document.getElementById("adventure-form")?.scrollIntoView({
                  behavior: "smooth",
                });
              }}
            >
              Get Early Access
            </Button>
          </nav>
        </div>
      )}
    </header>
  );
}
