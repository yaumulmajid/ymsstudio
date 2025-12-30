import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import { Suspense } from "react"
import { Analytics } from "@vercel/analytics/next"
import WhatsAppButton from "@/components/ui/WhatsAppButton"
import "./globals.css"

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  preload: true,
  variable: "--font-inter",
  weight: ["400", "500", "600", "700"],
})

export const metadata: Metadata = {
  title: "YMS Studio - Jasa Website UMKM Profesional (Murah & Bergaransi)",

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
    title: "YMS Studio - Jasa Website UMKM Profesional (Murah & Bergaransi)",
    description:
      "Pembuatan website UMKM cepat, mobile-friendly, dan terjangkau. Toko online, company profile, landing page untuk bisnis kecil Indonesia.",
    type: "website",
    locale: "id_ID",
    url: "https://ymsstudio.id",
    siteName: "YMS Studio",
    images: [
      {
        url: "https://ymsstudio.id/og-image.webp",
        width: 1200,
        height: 630,
        alt: "YMS Studio - Jasa Website UMKM Profesional Indonesia",
        type: "image/webp",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "YMS Studio - Jasa Website UMKM Profesional (Murah & Bergaransi)",
    description:
      "Jasa pembuatan website UMKM mulai 700rb. Toko Online, WordPress, Company Profile. Cepat, mobile-friendly, dan bergaransi.",
    images: ["https://ymsstudio.id/og-image.webp"],
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
    google: "N8RuJSquQF6x7Ic0l1pLNKa3uGpnQGdhrv7AKAuCW70",
  },

  alternates: {
    canonical: "https://ymsstudio.id",
    languages: {
      "id-ID": "https://ymsstudio.id",
    },
  },
}

// Structured data JSON-LD
const structuredData = {
  organization: {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "YMS Studio",
    url: "https://ymsstudio.id",
    logo: "https://ymsstudio.id/logo.webp",
    sameAs: [
      "https://www.instagram.com/ymsstud.io",
      "https://www.facebook.com/ymsstudio",
      "https://www.linkedin.com/company/ymsstudio",
    ],
  },
  website: {
    "@context": "https://schema.org",
    "@type": "WebSite",
    url: "https://ymsstudio.id",
    name: "YMS Studio — Jasa Website UMKM Profesional (Murah & Bergaransi)",
    publisher: {
      "@type": "Organization",
      name: "YMS Studio",
      logo: {
        "@type": "ImageObject",
        url: "https://ymsstudio.id/logo.webp",
      },
    },
  },
  localBusiness: {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": "https://ymsstudio.id/#services",
    name: "YMS Studio - Jasa Pembuatan Website UMKM",
    url: "https://ymsstudio.id",
    image: "https://ymsstudio.id/logo.webp",
    logo: "https://ymsstudio.id/logo.webp",
    description:
      "Jasa pembuatan website profesional untuk UMKM Indonesia. Cepat, mobile-friendly, SEO-ready, harga terjangkau mulai 700rb, dan bergaransi.",
    telephone: "+6283822640883",
    priceRange: "Rp 700.000 - Rp 2.550.000",
    address: {
      "@type": "PostalAddress",
      streetAddress: "Blok A5 No 29, Jl. Wimbledon Raya, Jatireja, Cikarang Timur",
      addressLocality: "Bekasi",
      addressRegion: "Jawa Barat",
      postalCode: "17533",
      addressCountry: "ID",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: -6.23827,
      longitude: 106.975571,
    },
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
        opens: "08:00",
        closes: "20:00",
      },
    ],
    sameAs: [
      "https://www.instagram.com/ymsstudios/",
      "https://www.facebook.com/ymsstudio.web/",
      "https://wa.me/6283822640883",
    ],
    serviceType: [
      "Jasa Website UMKM",
      "Jasa Landing Page",
      "Jasa Toko Online",
      "Jasa Company Profile",
      "Jasa WordPress",
      "Jasa Website Bisnis Kecil",
      "Website",
      "Jasa Website",
    ],
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "4.9",
      reviewCount: "50",
    },
  },
  service: {
    "@context": "https://schema.org",
    "@type": "Service",
    serviceType: "Jasa Pembuatan Website UMKM",
    provider: {
      "@type": "LocalBusiness",
      name: "YMS Studio",
      url: "https://ymsstudio.id",
    },
    areaServed: {
      "@type": "Country",
      name: "Indonesia",
    },
    description:
      "Jasa pembuatan website profesional untuk UMKM Indonesia. Termasuk landing page, toko online, company profile dengan harga terjangkau mulai 700rb.",
    offers: {
      "@type": "Offer",
      price: "700000",
      priceCurrency: "IDR",
      availability: "https://schema.org/InStock",
      url: "https://ymsstudio.id",
    },
  },
  faq: {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "Berapa harga pembuatan website di YMS Studio?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Harga pembuatan website di YMS Studio mulai dari Rp 700.000, termasuk domain, hosting, desain profesional, dan support penuh.",
        },
      },
      {
        "@type": "Question",
        name: "Berapa lama proses pembuatan website?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Proses pengerjaan rata-rata 3–5 hari kerja, tergantung fitur dan permintaan khusus klien.",
        },
      },
      {
        "@type": "Question",
        name: "Apakah website yang dibuat mobile-friendly?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Ya, semua website di YMS Studio sudah responsive, cepat diakses lewat HP, dan dioptimasi SEO.",
        },
      },
      {
        "@type": "Question",
        name: "Apakah ada garansi?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Ya, setiap website yang dibuat di YMS Studio dilengkapi garansi revisi dan perbaikan sesuai paket yang dipilih.",
        },
      },
    ],
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="id" suppressHydrationWarning>
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=5" />

        {/* Favicon */}
        <link rel="icon" href="/favicon.ico" sizes="32x32" />
        <link rel="icon" href="/icon.svg" type="image/svg+xml" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <meta name="theme-color" content="#2A8E9E" />

        {/* Preload Critical Resources */}
        <link
          rel="preload"
          as="image"
          href="/project-hero.webp"
          type="image/webp"
          fetchPriority="high"
        />

        {/* Preconnect to external domains */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="preconnect" href="https://www.googletagmanager.com" />
        <link rel="dns-prefetch" href="https://vercel.live" />
        <link rel="dns-prefetch" href="https://va.vercel-scripts.com" />

        {/* Structured Data - Minified */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData.organization) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData.website) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData.localBusiness) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData.service) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData.faq) }}
        />
      </head>

      <body className={`${inter.variable} antialiased`}>
        {children}
        
        {/* Lazy load non-critical components */}
        <Suspense fallback={null}>
          <WhatsAppButton />
        </Suspense>

        <Suspense fallback={null}>
          <Analytics />
        </Suspense>

        {/* Defer Google Analytics */}
        <script
          defer
          src="https://www.googletagmanager.com/gtag/js?id=AW-17737646735"
        />
        <script
          defer
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'AW-17737646735', {
                page_path: window.location.pathname,
              });
            `,
          }}
        />
      </body>
    </html>
  )
}