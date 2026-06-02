import { Compass } from "lucide-react";

export function FounderStory() {
  return (
    <section className="bg-white py-20 sm:py-24">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <div className="rounded-2xl border border-forest/10 bg-cream px-6 py-10 text-center shadow-sm sm:px-10">
          <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-forest text-white">
            <Compass className="h-6 w-6" />
          </div>
          <h2 className="mt-5 font-display text-3xl font-bold uppercase tracking-tight text-forest sm:text-4xl">
            Built By A Real Adventurer
          </h2>
          <p className="mx-auto mt-4 max-w-3xl text-base leading-relaxed text-forest/75">
            CampPilot was created by an Australian camper, 4WDer and weekend
            adventurer who wanted a faster way to discover great trips without
            spending hours researching.
          </p>
        </div>
      </div>
    </section>
  );
}
