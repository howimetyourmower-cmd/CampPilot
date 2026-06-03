"use client";

import { useState, type FormEvent } from "react";
import { Mail, MapPin, Tent, User } from "lucide-react";
import { AU_STATES, CAMPING_TYPES } from "@/lib/constants";
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
  "w-full rounded-lg border border-gray-200 bg-white px-4 py-3 text-sm text-forest-dark placeholder:text-forest/75 outline-none transition focus:border-forest focus:ring-2 focus:ring-forest/20";

export function AdventureForm() {
  const [submitted, setSubmitted] = useState(false);
  const [firstName, setFirstName] = useState("");
  const [email, setEmail] = useState("");
  const [state, setState] = useState("");
  const [campingType, setCampingType] = useState("");
  const [waitlistSubmissions, setWaitlistSubmissions] = useState<
    Array<{
      firstName: string;
      email: string;
      state: string;
      campingType: string;
      submittedAt: string;
    }>
  >([]);

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const entry = {
      firstName: firstName.trim(),
      email: email.trim(),
      state: state.trim(),
      campingType: campingType.trim(),
      submittedAt: new Date().toISOString(),
    };
    setWaitlistSubmissions((prev) => [...prev, entry]);
    // TODO: Send waitlist submissions to an email/database provider (e.g. Resend + Supabase).
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
          We&apos;ll send early access details when CampPilot beta launches.
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
        Get Early Access
      </h2>
      <p className="mt-2 text-sm text-forest/70">
        Join the waitlist and be first to try CampPilot when we launch.
      </p>

      <div className="mt-6 space-y-4">
        <FormField label="First Name" icon={<User className="h-3.5 w-3.5" />}>
          <input
            name="firstName"
            type="text"
            autoComplete="given-name"
            required
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
            className={selectClass}
            placeholder="First name"
          />
        </FormField>
        <FormField label="Email Address" icon={<Mail className="h-3.5 w-3.5" />}>
          <input
            name="email"
            type="email"
            autoComplete="email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className={selectClass}
            placeholder="you@example.com"
          />
        </FormField>
        <FormField label="State" icon={<MapPin className="h-3.5 w-3.5" />}>
          <select
            name="state"
            required
            className={selectClass}
            value={state}
            onChange={(e) => setState(e.target.value)}
          >
            <option value="" disabled>
              Select your state
            </option>
            {AU_STATES.map((region) => (
              <option key={region} value={region}>
                {region}
              </option>
            ))}
          </select>
        </FormField>
        <FormField label="Camping type" icon={<Tent className="h-3.5 w-3.5" />}>
          <select
            name="campingType"
            required
            className={selectClass}
            value={campingType}
            onChange={(e) => setCampingType(e.target.value)}
          >
            <option value="" disabled>
              How do you camp?
            </option>
            {CAMPING_TYPES.map((type) => (
              <option key={type} value={type}>
                {type}
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
        Get Early Access
      </Button>

      <p className="mt-4 flex items-center justify-center gap-1.5 text-center text-xs text-forest/50">
        <span aria-hidden>🔒</span>
        Join the waitlist for early access.
      </p>
    </form>
  );
}
