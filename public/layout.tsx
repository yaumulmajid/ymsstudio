import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  preload: true,
  variable: "--font-inter",
  weight: ["400", "500", "600", "700"],
})

// ============================================================
// 🔥 TITLE BARU SESUAI PERMINTAAN
// ============================================================
export const metadata: Metadata = {
  title: "YMS Studio — Website UMKM Profesional (Murah & Bergaransi)",

  description:
    "Jasa pembuatan website profesional untuk UMKM & bisnis kecil Indonesia. Toko online, company profile, landing page mulai 700rb. Cepat, mobile-friendly, dan bergaransi.",

  keywords: [
    "website UMKM",
    "jasa website UMKM",
    "jasa pembuatan website UMKM",
    "jasa website murah UMKM",
    "jasa toko online UMKM",
    "website UMKM profesional",
    "jasa landing page UMKM",
    "website UMKM Indonesia",
    "YMS Studio",
  ],

  authors: [{ name: "YMS Studio" }],
  creator: "YMS Studio",
  publisher: "YMS Studio",

  openGraph: {
    title: "YMS Studio — Website UMKM Profesional (Murah & Bergaransi)",
    description:
      "Pembuatan website UMKM cepat, mobile-friendly, dan terjangkau. Toko online, company profile, landing page untuk bisnis kecil Indonesia.",
    type: "website",
    locale: "id_ID",
    url: "https://ymsstudio.co.id",
    siteName: "YMS Studio",
    images: [
      {
        url: "https://ymsstudio.co.id/logo.webp",
        width: 1200,
        height: 630,
        alt: "YMS Studio - Website UMKM Profesional Indonesia",
        type: "image/webp",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "YMS Studio — Website UMKM Profesional (Murah & Bergaransi)",
    description:
      "Jasa pembuatan website UMKM mulai 700rb. Toko Online, WordPress, Company Profile. Cepat, mobile-friendly, dan bergaransi.",
    images: ["https://ymsstudio.co.id/logo.webp"],
    creator: "@ymsstudio",
    site: "@ymsstudio",
  },

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-snippet": -1,
      "max-image-preview": "large",
      "max-video-preview": -1,
    },
  },

  verification: {
    google: "R7wsRT4vlDQVhRu5rTGbN-vEVkJ3p7br9MzXMLWBcvw",
  },

  alternates: {
    canonical: "https://ymsstudio.co.id",
    languages: {
      "id-ID": "https://ymsstudio.co.id",
    },
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="id" suppressHydrationWarning>
      <head>
        <meta charSet="utf-8" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, maximum-scale=5"
        />

        {/* ============================================================ */}
        {/* 🔥 FAVICON + LOGO AGAR MUNCUL DI GOOGLE SEARCH */}
        {/* ============================================================ */}
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="icon" href="/icon.svg" type="image/svg+xml" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <meta name="theme-color" content="#2A8E9E" />

        {/* ============================================================ */}
        {/* 🔥 SCHEMA — WAJIB UNTUK LOGO MUNCUL DI HASIL PENCARIAN */}
        {/* ============================================================ */}

        {/* ORGANIZATION LOGO (WAJIB untuk Google menampilkan logo) */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "YMS Studio",
              url: "https://ymsstudio.co.id",
              logo: "https://ymsstudio.co.id/logo.webp",
              sameAs: [
                "https://www.instagram.com/ymsstud.io",
                "https://www.facebook.com/ymsstudio",
                "https://www.linkedin.com/company/ymsstudio",
              ],
            }),
          }}
        />

        {/* WEBSITE SCHEMA */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebSite",
              url: "https://ymsstudio.co.id",
              name: "YMS Studio — Website UMKM Profesional (Murah & Bergaransi)",
              publisher: {
                "@type": "Organization",
                name: "YMS Studio",
                logo: {
                  "@type": "ImageObject",
                  url: "https://ymsstudio.co.id/logo.webp",
                },
              },
            }),
          }}
        />

        {/* LOCAL BUSINESS (punyamu tetap dipertahankan) */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "LocalBusiness",
              "@id": "https://ymsstudio.co.id/#umkm",
              name: "YMS Studio - Website UMKM Indonesia",
              image: "https://ymsstudio.co.id/logo.webp",
              logo: "https://ymsstudio.co.id/logo.webp",
              url: "https://ymsstudio.co.id",
              telephone: "+6283822640883",

              description:
                "Jasa pembuatan website profesional untuk UMKM Indonesia. Toko online, company profile, landing page mulai 700rb. Cepat, mobile-friendly, dan bergaransi.",

              priceRange: "Rp 700.000 - Rp 2.550.000",

              address: {
                "@type": "PostalAddress",
                streetAddress:
                  "Blok A5 No 29, Jl. Wimbledon Raya, Jatireja, Cikarang Timur",
                addressLocality: "Bekasi",
                addressRegion: "Jawa Barat",
                postalCode: "17533",
                addressCountry: "ID",
              },

              geo: {
                "@type": "GeoCoordinates",
                latitude: "-6.238270",
                longitude: "106.975571",
              },

              serviceType: [
                "Website UMKM",
                "Toko Online UMKM",
                "Company Profile UMKM",
                "Landing Page UMKM",
                "Website Bisnis Kecil",
              ],

              areaServed: "Indonesia",

              openingHoursSpecification: {
                "@type": "OpeningHoursSpecification",
                dayOfWeek: [
                  "Monday",
                  "Tuesday",
                  "Wednesday",
                  "Thursday",
                  "Friday",
                  "Saturday",
                ],
                opens: "08:00",
                closes: "20:00",
              },

              aggregateRating: {
                "@type": "AggregateRating",
                ratingValue: "4.9",
                reviewCount: "50",
              },
            }),
          }}
        />
      </head>

      <body className={`${inter.variable} antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
