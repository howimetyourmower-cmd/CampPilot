"use client";

import { useState, type FormEvent } from "react";
import {
  Calendar,
  Car,
  DollarSign,
  Fish,
  MapPin,
  Tent,
  Users,
} from "lucide-react";
import {
  AU_STATES,
  BUDGET_OPTIONS,
  CAMPING_STYLES,
  DAYS_OPTIONS,
  TRAVELLERS_OPTIONS,
  TRIP_TYPES,
} from "@/lib/constants";
import { Button } from "@/components/ui/Button";

interface FormFieldProps {
  label: string;
  icon: React.ReactNode;
  children: React.ReactNode;
}

function FormField({ label, icon, children }: FormFieldProps) {
  return (
    <div>
      <label className="mb-1.5 flex items-center gap-2 text-xs font-semibold uppercase tracking-wide text-forest/70">
        {icon}
        {label}
      </label>
      {children}
    </div>
  );
}

const selectClass =
  "w-full rounded-lg border border-gray-200 bg-white px-4 py-3 text-sm text-forest-dark outline-none transition focus:border-forest focus:ring-2 focus:ring-forest/20";

export function AdventureForm() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSubmitted(true);
  }

  if (submitted) {
    return (
      <div
        id="adventure-form"
        className="rounded-2xl bg-white p-8 text-center shadow-2xl"
      >
        <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-forest/10">
          <Tent className="h-8 w-8 text-forest" />
        </div>
        <h3 className="font-display text-xl font-bold text-forest">
          You&apos;re on the list!
        </h3>
        <p className="mt-2 text-sm text-forest/70">
          We&apos;ll send your first personalised adventure shortly. Check your
          inbox.
        </p>
      </div>
    );
  }

  return (
    <form
      id="adventure-form"
      onSubmit={handleSubmit}
      className="rounded-2xl bg-white p-6 shadow-2xl sm:p-8"
    >
      <h2 className="font-display text-xl font-bold uppercase tracking-tight text-forest sm:text-2xl">
        Plan Your Adventure{" "}
        <span className="text-ember">Free</span>
      </h2>
      <p className="mt-2 text-sm text-forest/70">
        Tell us about your trip and we&apos;ll craft a personalised itinerary.
      </p>

      <div className="mt-6 space-y-4">
        <FormField
          label="Trip type"
          icon={<Calendar className="h-3.5 w-3.5" />}
        >
          <select name="tripType" required className={selectClass} defaultValue="">
            <option value="" disabled>
              Select trip type
            </option>
            {TRIP_TYPES.map((t) => (
              <option key={t} value={t}>
                {t}
              </option>
            ))}
          </select>
        </FormField>

        <FormField
          label="Location (home base)"
          icon={<MapPin className="h-3.5 w-3.5" />}
        >
          <select name="location" required className={selectClass} defaultValue="">
            <option value="" disabled>
              Select state / region
            </option>
            {AU_STATES.map((s) => (
              <option key={s} value={s}>
                {s}
              </option>
            ))}
          </select>
        </FormField>

        <div className="grid gap-4 sm:grid-cols-2">
          <FormField
            label="Number of days"
            icon={<Calendar className="h-3.5 w-3.5" />}
          >
            <select name="days" required className={selectClass} defaultValue="3">
              {DAYS_OPTIONS.map((d) => (
                <option key={d} value={d}>
                  {d} days
                </option>
              ))}
            </select>
          </FormField>

          <FormField
            label="Travellers"
            icon={<Users className="h-3.5 w-3.5" />}
          >
            <select name="travellers" required className={selectClass} defaultValue="">
              <option value="" disabled>
                Who&apos;s coming?
              </option>
              {TRAVELLERS_OPTIONS.map((t) => (
                <option key={t} value={t}>
                  {t}
                </option>
              ))}
            </select>
          </FormField>
        </div>

        <FormField
          label="Camping style"
          icon={<Tent className="h-3.5 w-3.5" />}
        >
          <select name="campingStyle" required className={selectClass} defaultValue="">
            <option value="" disabled>
              Where do you sleep?
            </option>
            {CAMPING_STYLES.map((s) => (
              <option key={s} value={s}>
                {s}
              </option>
            ))}
          </select>
        </FormField>

        <div className="grid gap-4 sm:grid-cols-2">
          <FormField
            label="4WD required?"
            icon={<Car className="h-3.5 w-3.5" />}
          >
            <select name="fourWd" required className={selectClass} defaultValue="">
              <option value="" disabled>
                Select
              </option>
              <option value="yes">Yes — 4WD tracks</option>
              <option value="no">No — sealed roads only</option>
              <option value="optional">Optional — mix of both</option>
            </select>
          </FormField>

          <FormField
            label="Fishing interest"
            icon={<Fish className="h-3.5 w-3.5" />}
          >
            <select name="fishing" required className={selectClass} defaultValue="">
              <option value="" disabled>
                Select
              </option>
              <option value="yes">Yes — keen angler</option>
              <option value="maybe">Maybe — if the spot&apos;s good</option>
              <option value="no">No thanks</option>
            </select>
          </FormField>
        </div>

        <FormField
          label="Budget"
          icon={<DollarSign className="h-3.5 w-3.5" />}
        >
          <select name="budget" required className={selectClass} defaultValue="">
            <option value="" disabled>
              Select budget range
            </option>
            {BUDGET_OPTIONS.map((b) => (
              <option key={b} value={b}>
                {b}
              </option>
            ))}
          </select>
        </FormField>
      </div>

      <Button
        type="submit"
        variant="ember"
        fullWidth
        className="mt-6 !py-4 !text-sm"
      >
        Get My Adventure Plan
      </Button>

      <p className="mt-4 flex items-center justify-center gap-1.5 text-center text-xs text-forest/50">
        <span aria-hidden>🔒</span>
        We respect your privacy. Unsubscribe anytime.
      </p>
    </form>
  );
}
