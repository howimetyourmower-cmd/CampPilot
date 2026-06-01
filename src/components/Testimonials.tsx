import { Flame, MapPin, Users } from "lucide-react";
import Image from "next/image";

const stats = [
  { icon: Users, value: "1,000+", label: "Happy Adventurers" },
  { icon: MapPin, value: "250+", label: "Epic Destinations" },
  { icon: Flame, value: "100%", label: "Adventure Focused" },
];

export function Testimonials() {
  return (
    <section className="bg-topo bg-forest py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-2 lg:items-center lg:gap-16">
          <div className="text-white">
            <div className="relative mx-auto h-24 w-24 overflow-hidden rounded-full border-4 border-ember/30 lg:mx-0">
              <Image
                src="https://images.unsplash.com/photo-1529156069898-49953e39b3ac?q=80&w=200&auto=format&fit=crop"
                alt="Happy campers Dan and Bec"
                fill
                className="object-cover"
                sizes="96px"
              />
            </div>
            <blockquote className="mt-6 text-lg leading-relaxed text-white/90 sm:text-xl">
              &ldquo;CampPilot has completely changed how we plan our weekends.
              Every trip has been awesome. Highly recommend!&rdquo;
            </blockquote>
            <div className="mt-4 flex gap-1 text-ember" aria-label="5 out of 5 stars">
              {Array.from({ length: 5 }).map((_, i) => (
                <span key={i} aria-hidden>
                  ★
                </span>
              ))}
            </div>
            <cite className="mt-3 block text-sm font-medium not-italic text-white/70">
              — Dan &amp; Bec, Bendigo VIC
            </cite>
          </div>

          <div className="grid gap-8 sm:grid-cols-3">
            {stats.map(({ icon: Icon, value, label }) => (
              <div key={label} className="text-center text-white">
                <Icon
                  className="mx-auto h-8 w-8 text-ember"
                  strokeWidth={1.5}
                />
                <p className="mt-3 font-display text-3xl font-bold">{value}</p>
                <p className="mt-1 text-sm text-white/70">{label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
