import { FounderGallery } from "@/components/FounderGallery";

export function FounderStory() {
  return (
    <section id="founder" className="bg-white py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="font-display text-3xl font-bold uppercase tracking-tight text-forest sm:text-4xl">
            Built by a Real Adventurer
          </h2>
          <p className="mt-4 text-base leading-relaxed text-forest/75 sm:text-lg">
            CampPilot isn&apos;t built by a travel company. It&apos;s built by a
            real camper, 4WDer and adventurer who spends weekends exploring
            Australia and testing the kind of trips CampPilot recommends.
          </p>
        </div>

        <FounderGallery />
      </div>
    </section>
  );
}
