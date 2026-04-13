import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { LightboxProvider } from "@/components/image-lightbox"

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
})

export const metadata: Metadata = {
  metadataBase: new URL("https://www.cobra-cn.de"),
  title: {
    default:
      "CN Racing GmbH – Corvette Tuning, Camaro Tuning & CN-Cobra | Dormagen",
    template: "%s | CN Racing GmbH",
  },
  description:
    "CN Racing GmbH in Dormagen: Ihr Spezialist für Corvette C8 Tuning, Camaro Performance, die legendäre CN-Cobra und professionelle Leistungsmessungen auf dem 1500 PS MAHA Prüfstand. Über 30 Jahre Motorsport-Erfahrung.",
  keywords: [
    "CN Racing",
    "Corvette Tuning",
    "Corvette C8 Tuning",
    "Camaro Tuning",
    "CN Cobra",
    "Cobra kaufen",
    "Leistungsprüfstand Dormagen",
    "Motorsport Tuning",
    "Sportwagen Tuning NRW",
  ],
  authors: [{ name: "CN Racing GmbH" }],
  openGraph: {
    type: "website",
    locale: "de_DE",
    url: "https://www.cobra-cn.de",
    siteName: "CN Racing GmbH",
    title:
      "CN Racing GmbH – Corvette Tuning, Camaro Tuning & CN-Cobra | Dormagen",
    description:
      "Ihr Spezialist für Corvette C8 Tuning, Camaro Performance und die legendäre CN-Cobra. Über 30 Jahre Motorsport-Erfahrung aus Dormagen.",
    images: [
      {
        url: "https://www.cobra-cn.de/wp-content/uploads/2022/11/racetracker_19894361_313124-scaled.jpg",
        width: 2560,
        height: 1707,
        alt: "CN Racing GmbH – Motorsport & Tuning",
      },
    ],
  },
  robots: { index: true, follow: true },
  alternates: { canonical: "https://www.cobra-cn.de" },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "AutoRepair",
    name: "CN Racing GmbH",
    alternateName: ["CN-Cobra", "Camaro-Tuning.com", "C8-Tuning"],
    description:
      "Spezialist für Corvette C8 Tuning, Camaro Performance, CN-Cobra Fahrzeugbau und professionelle Leistungsmessungen.",
    url: "https://www.cobra-cn.de",
    telephone: "+4921332178460",
    email: "info@cobra-cn.de",
    address: {
      "@type": "PostalAddress",
      streetAddress: "Sachtlebenstraße 6",
      addressLocality: "Dormagen",
      postalCode: "41541",
      addressCountry: "DE",
      addressRegion: "Nordrhein-Westfalen",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: 51.0964,
      longitude: 6.8317,
    },
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        opens: "08:00",
        closes: "16:30",
      },
    ],
    founder: { "@type": "Person", name: "Christian Nowak" },
    sameAs: [
      "https://www.facebook.com/CN.Racing.GmbH/",
      "https://instagram.com/cn_racing_gmbh/",
      "https://www.youtube.com/channel/UC5JwWX6y8k9fWw_42PeZGYg",
    ],
    priceRange: "€€€",
  }

  return (
    <html lang="de" className={`${inter.variable} antialiased`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="bg-background font-sans text-foreground">
        <LightboxProvider>
          <Navigation />
          <main>{children}</main>
          <Footer />
        </LightboxProvider>
      </body>
    </html>
  )
}
