"use client";

import { Button } from "@/components/ui/Button";
import { SampleAdventureGallery } from "@/components/SampleAdventureGallery";

const steps = [
  {
    number: 1,
    title: "Join Early Access",
    description:
      "Share your first name, email and state so we can invite you to the CampPilot beta as soon as your region opens.",
  },
  {
    number: 2,
    title: "We Build Your Planner",
    description:
      "We are refining personalised camping, 4WD and fishing trip planning for Australian weekend adventurers.",
  },
  {
    number: 3,
    title: "You Get First Access",
    description:
      "Early members receive priority access, launch pricing and real-world itinerary examples as soon as features go live.",
  },
];

export function HowItWorks() {
  return (
    <section id="how-it-works" className="bg-white py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <h2 className="font-display text-3xl font-bold uppercase tracking-tight text-forest sm:text-4xl">
            How CampPilot Works
          </h2>

          <ol className="relative mt-10 space-y-10">
            <div
              className="absolute left-[19px] top-8 bottom-8 w-0.5 border-l-2 border-dashed border-forest/20"
              aria-hidden
            />
            {steps.map((step) => (
              <li key={step.number} className="relative flex gap-6">
                <span className="relative z-10 flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-forest font-display text-lg font-bold text-white">
                  {step.number}
                </span>
                <div>
                  <h3 className="font-display text-sm font-bold uppercase tracking-wide text-forest">
                    {step.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-forest/70">
                    {step.description}
                  </p>
                </div>
              </li>
            ))}
          </ol>

          <Button
            variant="ember"
            className="mt-10 w-full sm:w-auto"
            onClick={() =>
              document.getElementById("adventure-form")?.scrollIntoView({
                behavior: "smooth",
                block: "start",
              })
            }
          >
            Join The Waitlist
          </Button>
        </div>

        <div id="sample-adventure" className="mt-14 scroll-mt-24 lg:mt-16">
          <SampleCard />
        </div>
      </div>
    </section>
  );
}

function SampleCard() {
  return (
    <div className="overflow-hidden rounded-2xl border border-gray-100 bg-white shadow-xl">
      <div className="border-b border-gray-100 bg-cream px-5 py-4 sm:px-6">
        <div className="flex flex-wrap items-center gap-2">
          <span className="font-display text-sm font-bold text-forest">
            CampPilot
          </span>
          <span className="text-xs text-forest/50">•</span>
          <span className="text-xs text-forest/60">Preview Itinerary</span>
          <span className="rounded-full bg-ember/15 px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wide text-ember">
            Beta
          </span>
        </div>
      </div>

      <div className="p-5 sm:p-6">
        <p className="text-xs font-semibold uppercase tracking-wider text-ember">
          Sample Weekend Adventure
        </p>
        <h3 className="mt-1 font-display text-xl font-bold text-forest sm:text-2xl">
          Woods Point, VIC
        </h3>
        <p className="mt-1 text-xs text-forest/60 sm:text-sm">
          3 hrs 20 mins from Melbourne • 2 Nights • Riverfront Camping • 4WD
          Friendly
        </p>

        <SampleAdventureGallery />

        <div className="mt-6 grid gap-4 sm:grid-cols-3 sm:gap-6">
          <div className="text-sm">
            <span className="font-bold text-forest">Friday:</span>{" "}
            <span className="text-forest/70">
              Depart after work, set up by the Goulburn River, campfire dinner.
            </span>
          </div>
          <div className="text-sm">
            <span className="font-bold text-forest">Saturday:</span>{" "}
            <span className="text-forest/70">
              High country drive, Woods Point Hotel lunch, afternoon river fish.
            </span>
          </div>
          <div className="text-sm">
            <span className="font-bold text-forest">Sunday:</span>{" "}
            <span className="text-forest/70">
              Walhalla heritage walk, bakery stop in Jamieson, home by afternoon.
            </span>
          </div>
        </div>

        <p className="mt-5 text-center text-xs text-forest/50">
          Full personalised itineraries available at early access launch.
        </p>
      </div>
    </div>
  );
}
