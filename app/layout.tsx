import type { Metadata } from "next";
import "./globals.css";
import { siteUrl } from "./site-paths";
import ScrollReveal from "./ScrollReveal";

const title = "Bubblelicious Lab | Build Your Own Bubble Tea in Cherry Hill";
const description =
  "Choose your base, mix your flavors, and add your toppings at Bubblelicious Lab, Cherry Hill's build-your-own bubble tea shop.";

export const metadata: Metadata = {
  metadataBase: new URL(`${siteUrl}/`),
  title,
  description,
  alternates: { canonical: `${siteUrl}/` },
  openGraph: {
    title,
    description,
    type: "website",
    url: `${siteUrl}/`,
    images: [
      {
        url: `${siteUrl}/og.png`,
        width: 1200,
        height: 630,
        alt: "Bubblelicious Lab — your drink, your experiment",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
    images: [`${siteUrl}/og.png`],
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>
        <ScrollReveal />
        {children}
      </body>
    </html>
  );
}
