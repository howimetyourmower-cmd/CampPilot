import { Check } from "lucide-react";
import { Button } from "@/components/ui/Button";

const included = [
  "Unlimited custom weekend itineraries",
  "Personalised to your vehicle & camping style",
  "4WD tracks, fishing spots & hiking routes",
  "Packing lists & local insider tips",
  "Budget estimates for every trip",
  "Cancel anytime — no lock-in",
];

export function Pricing() {
  return (
    <section id="pricing" className="bg-cream py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="font-display text-3xl font-bold uppercase tracking-tight text-forest sm:text-4xl">
            Simple Pricing
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-forest/70">
            One plan. Every adventure. Start with your first itinerary free.
          </p>
        </div>

        <div className="mx-auto mt-12 max-w-lg">
          <div className="overflow-hidden rounded-2xl border-2 border-forest bg-white shadow-xl">
            <div className="bg-forest px-8 py-6 text-center text-white">
              <p className="text-sm font-semibold uppercase tracking-wider text-ember">
                Most Popular
              </p>
              <div className="mt-2 flex items-baseline justify-center gap-1">
                <span className="font-display text-5xl font-bold">$9</span>
                <span className="text-white/70">/month</span>
              </div>
              <p className="mt-2 text-sm text-white/70">
                Less than a coffee per adventure
              </p>
            </div>

            <div className="px-8 py-8">
              <ul className="space-y-3">
                {included.map((item) => (
                  <li key={item} className="flex items-start gap-3 text-sm">
                    <Check
                      className="mt-0.5 h-4 w-4 shrink-0 text-ember"
                      strokeWidth={3}
                    />
                    <span className="text-forest/80">{item}</span>
                  </li>
                ))}
              </ul>

              <a href="#adventure-form" className="mt-8 block">
                <Button variant="ember" fullWidth className="!py-4">
                  Start Free — Then $9/mo
                </Button>
              </a>
              <p className="mt-3 text-center text-xs text-forest/50">
                First adventure free. No credit card required to start.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
