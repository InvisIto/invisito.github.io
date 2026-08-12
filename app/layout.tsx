import type { Metadata } from "next";
import { DM_Mono, Instrument_Serif } from "next/font/google";
import "./globals.css";

const mono = DM_Mono({ variable: "--font-mono", subsets: ["latin"], weight: ["400", "500"] });
const serif = Instrument_Serif({ variable: "--font-serif", subsets: ["latin"], weight: "400" });

export const metadata: Metadata = {
  title: "Invisito — Research Project",
  description: "Making digital interactions disappear into the physical world.",
  openGraph: { title: "Invisito", description: "Making digital interactions disappear into the physical world.", images: ["/og.png"] },
  twitter: { card: "summary_large_image", title: "Invisito", images: ["/og.png"] },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body className={`${mono.variable} ${serif.variable}`}>{children}</body></html>;
}
