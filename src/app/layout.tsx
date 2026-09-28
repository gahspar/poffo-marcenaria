import type { Metadata, Viewport } from "next";
import { Archivo_Black, Manrope } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import "./globals.css";

const display = Archivo_Black({ variable: "--font-display", subsets: ["latin"], weight: "400", display: "swap" });
const sans = Manrope({ variable: "--font-sans", subsets: ["latin"], weight: ["400", "500", "600", "700"], display: "swap" });

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000"),
  title: { default: "Poffo Marcenaria | Móveis sob medida em Blumenau", template: "%s | Poffo Marcenaria" },
  description: "Marcenaria sob medida em Blumenau. Projetos exclusivos para dormitórios, cozinhas, home offices, salas e ambientes completos.",
  keywords: ["marcenaria Blumenau", "móveis sob medida", "móveis planejados", "Poffo Marcenaria"],
  openGraph: { title: "Poffo Marcenaria — Seu espaço. Do seu jeito.", description: "Móveis sob medida que unem identidade, função e acabamento cuidadoso.", type: "website", locale: "pt_BR", images: [{ url: "/images/hero.webp", width: 1672, height: 941, alt: "Ambiente com marcenaria sob medida" }] },
  robots: { index: true, follow: true },
};
export const viewport: Viewport = { width: "device-width", initialScale: 1, themeColor: "#17140f" };

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="pt-BR" className={`${display.variable} ${sans.variable}`}><body>{children}<Analytics /></body></html>;
}
