export const AU_STATES = [
  "New South Wales",
  "Victoria",
  "Queensland",
  "South Australia",
  "Western Australia",
  "Tasmania",
  "Northern Territory",
  "Australian Capital Territory",
] as const;

export const TRIP_TYPES = [
  "Weekend Camping",
  "4WD Adventure",
  "Fishing Trip",
  "Hiking & Camping",
  "Road Trip",
  "Family Getaway",
] as const;

export const DAYS_OPTIONS = ["2", "3", "4", "5"] as const;

export const TRAVELLERS_OPTIONS = [
  "Solo",
  "2 People",
  "3–4 People",
  "5+ People",
  "Family with kids",
] as const;

export const CAMPING_STYLES = [
  "Tent",
  "Swag",
  "Camper Trailer",
  "Caravan",
  "Rooftop Tent",
  "No camping — day trip",
] as const;

export const BUDGET_OPTIONS = [
  "Budget ($50–150)",
  "Moderate ($150–350)",
  "Comfortable ($350–600)",
  "Premium ($600+)",
] as const;

export const NAV_LINKS = [
  { href: "#how-it-works", label: "How It Works" },
  { href: "#sample-adventure", label: "Sample Adventure" },
  { href: "#pricing", label: "Pricing" },
  { href: "#faq", label: "FAQs" },
  { href: "#contact", label: "Contact" },
] as const;
