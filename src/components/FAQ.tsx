"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    question: "How does CampPilot create my itinerary?",
    answer:
      "CampPilot uses AI trained on Australian camping, 4WD, fishing and hiking knowledge. You share your preferences — location, vehicle, camping style, interests and budget — and we generate a complete Fri–Sun adventure with routes, activities, meals and packing lists.",
  },
  {
    question: "Do I need a 4WD?",
    answer:
      "Not at all. Tell us your vehicle type and we'll only recommend tracks and destinations suitable for you — from sealed-road camper trips to hardcore 4WD adventures.",
  },
  {
    question: "Which states do you cover?",
    answer:
      "We cover all of Australia — NSW, Victoria, Queensland, SA, WA, Tasmania, NT and the ACT. Adventures are tailored to your home base and maximum drive time.",
  },
  {
    question: "Is the first adventure really free?",
    answer:
      "Yes. Your first personalised itinerary is completely free with no credit card required. After that, unlimited adventures are just $9/month.",
  },
  {
    question: "Can I use CampPilot for longer trips?",
    answer:
      "Currently we specialise in weekend adventures (2–5 days). Multi-day and week-long trip planning is on our roadmap.",
  },
  {
    question: "Can I cancel anytime?",
    answer:
      "Absolutely. There are no lock-in contracts. Cancel your subscription anytime from your account settings.",
  },
];

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="faq" className="bg-white py-20 sm:py-24">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        <h2 className="text-center font-display text-3xl font-bold uppercase tracking-tight text-forest sm:text-4xl">
          Frequently Asked Questions
        </h2>

        <div className="mt-12 divide-y divide-gray-100">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div key={faq.question} className="py-4">
                <button
                  type="button"
                  className="flex w-full items-center justify-between gap-4 text-left"
                  onClick={() => setOpenIndex(isOpen ? null : index)}
                  aria-expanded={isOpen}
                >
                  <span className="font-display text-sm font-bold text-forest">
                    {faq.question}
                  </span>
                  <ChevronDown
                    className={`h-5 w-5 shrink-0 text-forest/50 transition-transform duration-300 ease-out ${isOpen ? "rotate-180" : "rotate-0"}`}
                  />
                </button>
                {isOpen && (
                  <p className="mt-3 text-sm leading-relaxed text-forest/70">
                    {faq.answer}
                  </p>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
