import type { Metadata } from "next";
import { Inter, Montserrat } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["600", "700", "800"],
  variable: "--font-montserrat",
});

export const metadata: Metadata = {
  title: "CampPilot | AI-Powered Australian Camping Adventures",
  description:
    "AI-powered camping, 4WD and fishing itineraries tailored to your style. Plan your perfect weekend adventure in minutes.",
  keywords: [
    "camping Australia",
    "4WD trips",
    "fishing adventures",
    "weekend camping",
    "trip planner",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en-AU" className={`${inter.variable} ${montserrat.variable}`}>
      <body className="font-sans">{children}</body>
    </html>
  );
}
