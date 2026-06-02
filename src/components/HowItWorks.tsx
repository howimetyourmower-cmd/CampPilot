"use client";

import Image from "next/image";
import { Button } from "@/components/ui/Button";

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
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
          <div>
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
              variant="outline"
              className="mt-10"
              onClick={() =>
                document
                  .getElementById("sample-adventure")
                  ?.scrollIntoView({ behavior: "smooth" })
              }
            >
              View a Sample Adventure
            </Button>
          </div>

          <div id="sample-adventure" className="scroll-mt-24">
            <SampleCard />
          </div>
        </div>
      </div>
    </section>
  );
}

function SampleCard() {
  return (
    <div className="overflow-hidden rounded-2xl border border-gray-100 bg-white shadow-xl">
      <div className="border-b border-gray-100 bg-cream px-5 py-4">
        <div className="flex items-center gap-2">
          <span className="font-display text-sm font-bold text-forest">
            CampPilot
          </span>
          <span className="text-xs text-forest/50">•</span>
          <span className="text-xs text-forest/60">
            Preview Itinerary
          </span>
        </div>
      </div>

      <div className="p-5">
        <p className="text-xs font-semibold uppercase tracking-wider text-ember">
          Beta Itinerary Preview
        </p>
        <h3 className="mt-1 font-display text-xl font-bold text-forest">
          Woods Point, VIC Weekend
        </h3>
        <p className="mt-1 text-xs text-forest/60">
          3 hrs 20 mins from Melbourne • 2 Nights • Riverfront Camping
        </p>

        <div className="relative mt-4 aspect-video overflow-hidden rounded-lg">
          <Image
            src="/images/hero-camp.jpg"
            alt="Camp setup beside a lake with a 4WD and campfire"
            fill
            className="object-cover object-[60%_58%]"
            sizes="(max-width: 768px) 100vw, 400px"
          />
        </div>

        <div className="mt-4 space-y-3 text-sm">
          <div>
            <span className="font-bold text-forest">Friday:</span>{" "}
            <span className="text-forest/70">
              Depart after work, set up by the Goulburn River, and enjoy a
              campfire dinner under the stars.
            </span>
          </div>
          <div>
            <span className="font-bold text-forest">Saturday:</span>{" "}
            <span className="text-forest/70">
              Morning 4WD track loop to local lookouts, lunch at Woods Point
              Pub, then an afternoon river fish.
            </span>
          </div>
          <div>
            <span className="font-bold text-forest">Sunday:</span>{" "}
            <span className="text-forest/70">
              Easy breakfast, short heritage walk, scenic drive home with a
              final bakery stop in Jamieson.
            </span>
          </div>
        </div>

        <Button variant="primary" fullWidth className="mt-5 !text-xs">
          View Full Itinerary
        </Button>
      </div>
    </div>
  );
}
