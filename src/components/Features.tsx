import {
  Calendar,
  Clock,
  Flame,
  Map,
  Tag,
  TreePine,
} from "lucide-react";

const features = [
  {
    icon: Clock,
    title: "Save Time",
    description: "We do the research so you don't have to.",
  },
  {
    icon: TreePine,
    title: "Handpicked Spots",
    description: "The best campsites, tracks and hidden gems.",
  },
  {
    icon: Map,
    title: "Tailored to You",
    description: "Your time, vehicle, style and interests.",
  },
  {
    icon: Calendar,
    title: "Instant Itineraries",
    description: "Full weekend plans generated in minutes.",
  },
  {
    icon: Flame,
    title: "More Memories",
    description: "Less planning, more around the fire.",
  },
  {
    icon: Tag,
    title: "Great Value",
    description: "Epic adventures from just $9/month.",
  },
];

export function Features() {
  return (
    <section id="features" className="bg-cream py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <h2 className="text-center font-display text-3xl font-bold uppercase tracking-tight text-forest sm:text-4xl">
          Built for Adventurers
        </h2>
        <p className="mx-auto mt-4 max-w-2xl text-center text-forest/70">
          Everything you need for unforgettable Australian weekends — without
          the hours of research.
        </p>

        <div className="mt-14 grid gap-x-10 gap-y-14 sm:grid-cols-2 lg:grid-cols-3">
          {features.map(({ icon: Icon, title, description }) => (
            <div
              key={title}
              className="flex flex-col items-center text-center"
            >
              <div className="flex h-14 w-14 items-center justify-center rounded-full border-2 border-forest/20 bg-white">
                <Icon className="h-7 w-7 text-forest" strokeWidth={1.5} />
              </div>
              <h3 className="mt-4 font-display text-sm font-bold uppercase tracking-wide text-forest">
                {title}
              </h3>
              <p className="mt-2 max-w-xs text-sm text-forest/70">
                {description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
