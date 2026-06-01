"use client";

import { useState, type FormEvent } from "react";
import { Mail, MessageSquare, Send } from "lucide-react";
import { Button } from "@/components/ui/Button";

export function Contact() {
  const [sent, setSent] = useState(false);

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSent(true);
  }

  return (
    <section id="contact" className="bg-cream py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-2 lg:items-start">
          <div>
            <h2 className="font-display text-3xl font-bold uppercase tracking-tight text-forest sm:text-4xl">
              Get in Touch
            </h2>
            <p className="mt-4 text-forest/70">
              Questions about CampPilot, partnerships or custom adventure
              requests? We&apos;d love to hear from you.
            </p>

            <div className="mt-8 space-y-4">
              <a
                href="mailto:hello@camppilot.com.au"
                className="flex items-center gap-3 text-sm text-forest hover:text-ember"
              >
                <Mail className="h-5 w-5" />
                hello@camppilot.com.au
              </a>
              <p className="text-sm text-forest/60">
                Based in Australia. Supporting adventurers nationwide.
              </p>
            </div>
          </div>

          {sent ? (
            <div className="rounded-2xl bg-white p-8 text-center shadow-lg">
              <MessageSquare className="mx-auto h-10 w-10 text-forest" />
              <p className="mt-4 font-display font-bold text-forest">
                Message sent!
              </p>
              <p className="mt-2 text-sm text-forest/70">
                We&apos;ll get back to you within 1–2 business days.
              </p>
            </div>
          ) : (
            <form
              onSubmit={handleSubmit}
              className="rounded-2xl bg-white p-6 shadow-lg sm:p-8"
            >
              <div className="space-y-4">
                <div>
                  <label
                    htmlFor="contact-name"
                    className="mb-1.5 block text-xs font-semibold uppercase text-forest/70"
                  >
                    Name
                  </label>
                  <input
                    id="contact-name"
                    name="name"
                    type="text"
                    required
                    className="w-full rounded-lg border border-gray-200 px-4 py-3 text-sm outline-none focus:border-forest focus:ring-2 focus:ring-forest/20"
                  />
                </div>
                <div>
                  <label
                    htmlFor="contact-email"
                    className="mb-1.5 block text-xs font-semibold uppercase text-forest/70"
                  >
                    Email
                  </label>
                  <input
                    id="contact-email"
                    name="email"
                    type="email"
                    required
                    className="w-full rounded-lg border border-gray-200 px-4 py-3 text-sm outline-none focus:border-forest focus:ring-2 focus:ring-forest/20"
                  />
                </div>
                <div>
                  <label
                    htmlFor="contact-message"
                    className="mb-1.5 block text-xs font-semibold uppercase text-forest/70"
                  >
                    Message
                  </label>
                  <textarea
                    id="contact-message"
                    name="message"
                    rows={4}
                    required
                    className="w-full resize-none rounded-lg border border-gray-200 px-4 py-3 text-sm outline-none focus:border-forest focus:ring-2 focus:ring-forest/20"
                  />
                </div>
              </div>
              <Button
                type="submit"
                variant="primary"
                fullWidth
                className="mt-6 gap-2"
              >
                <Send className="h-4 w-4" />
                Send Message
              </Button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
