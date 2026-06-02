import { Fish, Shield, Users } from "lucide-react";

const audience = [
  {
    title: "Families",
    description:
      "Simple, safe weekend plans with practical drives, kid-friendly stops and easy campsites.",
    icon: Users,
  },
  {
    title: "4WD Explorers",
    description:
      "Tailored track recommendations, camp setup tips and scenic routes for capable adventure rigs.",
    icon: Shield,
  },
  {
    title: "Fishing Weekends",
    description:
      "Freshwater and coastal trip ideas with ideal casting windows and relaxed campfire evenings.",
    icon: Fish,
  },
];

export function Audience() {
  return (
    <section className="bg-cream py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="font-display text-3xl font-bold uppercase tracking-tight text-forest sm:text-4xl">
            Who Is CampPilot For?
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-forest/70">
            Early access is designed for Australian adventurers planning better
            weekends with less guesswork.
          </p>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {audience.map(({ title, description, icon: Icon }) => (
            <article
              key={title}
              className="rounded-2xl border border-forest/10 bg-white p-6 shadow-sm"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-forest text-white">
                <Icon className="h-5 w-5" />
              </div>
              <h3 className="mt-4 font-display text-xl font-bold text-forest">
                {title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-forest/70">
                {description}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
