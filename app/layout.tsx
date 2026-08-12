import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "InvisIto: Weaving Unobtrusive Infrared Markers for Ubiquitous Textile Interaction",
  description: "InvisIto: Weaving Unobtrusive Infrared Markers for Ubiquitous Textile Interaction.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body>{children}</body></html>;
}
