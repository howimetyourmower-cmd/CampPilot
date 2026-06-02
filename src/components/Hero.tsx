import Image from "next/image";
import { Check } from "lucide-react";
import { AdventureForm } from "@/components/AdventureForm";
import { HeroCta } from "@/components/HeroCta";

const benefits = [
  "Handpicked destinations across Australia",
  "Tailored to your time, vehicle & interests",
  "Complete Fri–Sun itineraries in minutes",
  "Plan less, adventure more",
];

export function Hero() {
  return (
    <section className="relative min-h-screen pt-20">
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/hero-camp.jpg"
          alt="Campers by a campfire at sunset with a 4WD and rooftop tent"
          fill
          priority
          className="object-cover"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-black/60" />
      </div>

      <div className="relative z-10 mx-auto grid max-w-7xl gap-10 px-4 py-12 sm:px-6 lg:grid-cols-2 lg:items-center lg:gap-16 lg:px-8 lg:py-20">
        <div className="text-white">
          <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-ember">
            TAILORED FOR YOUR NEXT ADVENTURE
          </p>
          <h1 className="font-display text-4xl font-extrabold uppercase leading-tight tracking-tight sm:text-5xl lg:text-6xl">
            PLAN YOUR PERFECT ADVENTURE IN MINUTES
          </h1>
          <p className="mt-4 max-w-lg text-lg text-white/85">
            Tell us how you like to travel and we&apos;ll build your perfect
            camping, 4WD or fishing adventure.
          </p>

          <ul className="mt-8 space-y-3">
            {benefits.map((item) => (
              <li key={item} className="flex items-start gap-3">
                <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-ember">
                  <Check className="h-3 w-3 text-white" strokeWidth={3} />
                </span>
                <span className="text-sm text-white/90 sm:text-base">{item}</span>
              </li>
            ))}
          </ul>

          <HeroCta />
        </div>

        <div className="lg:pt-4">
          <AdventureForm />
        </div>
      </div>
    </section>
  );
}
