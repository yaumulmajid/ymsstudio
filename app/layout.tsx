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
  title: "YMS Studio - Website UMKM Profesional (Murah & Bergaransi)",

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
    title: "YMS Studio - Website UMKM Profesional (Murah & Bergaransi)",
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
    title: "YMS Studio - Website UMKM Profesional (Murah & Bergaransi)",
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

        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="icon" href="/icon.webp" type="image/svg+xml" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.webp" />
        <meta name="theme-color" content="#2A8E9E" />

        <script
          async
          src="https://www.googletagmanager.com/gtag/js?id=AW-17737646735"
        />
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'AW-17737646735');
            `,
          }}
        />

        {/* ============================================================
            ORGANIZATION SCHEMA
        ============================================================ */}
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

        {/* ============================================================
            WEBSITE SCHEMA
        ============================================================ */}
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

        {/* ============================================================
            LOCALBUSINESS SCHEMA
        ============================================================ */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "LocalBusiness",
              "@id": "https://ymsstudio.co.id/#services",
              name: "YMS Studio - Jasa Pembuatan Website UMKM",
              url: "https://ymsstudio.co.id",
              image: "https://ymsstudio.co.id/logo.webp",
              logo: "https://ymsstudio.co.id/logo.webp",
              description:
                "Jasa pembuatan website profesional untuk UMKM Indonesia. Cepat, mobile-friendly, SEO-ready, harga terjangkau mulai 700rb, dan bergaransi.",
              telephone: "+6283822640883",
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
                latitude: -6.23827,
                longitude: 106.975571,
              },

              openingHoursSpecification: [
                {
                  "@type": "OpeningHoursSpecification",
                  dayOfWeek: [
                    "Monday",
                    "Tuesday",
                    "Wednesday",
                    "Thursday",
                    "Friday",
                    "Saturday",
                    "Sunday",
                  ],
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
            }),
          }}
        />

        {/* ============================================================
            SERVICE SCHEMA
        ============================================================ */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Service",
              serviceType: "Jasa Pembuatan Website UMKM",
              provider: {
                "@type": "LocalBusiness",
                name: "YMS Studio",
                url: "https://ymsstudio.co.id",
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
                url: "https://ymsstudio.co.id",
              },
            }),
          }}
        />

        {/* ============================================================
            FAQ SCHEMA
        ============================================================ */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
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
            }),
          }}
        />
      </head>

      <body className={`${inter.variable} antialiased`}>
        {children}
        <Analytics />

        {/* Floating WhatsApp Button — Icon Only */}
        <a
          href="https://wa.me/6283822640883?text=Halo%20Yaumul%2C%20saya%20pelaku%20UMKM%20mau%20konsultasi%20pembuatan%20website%20untuk%20usaha%20saya.%20Bisa%20bantu%3F"
          target="_blank"
          rel="noopener noreferrer"
          className="fixed bottom-6 right-6 z-50 w-14 h-14 flex items-center justify-center rounded-full shadow-lg transition-all duration-300"
          style={{
            background: "#2A8E9E",
            boxShadow: "0 8px 20px rgba(42, 142, 158, 0.35)",
            animation: "waGlow 3s ease-in-out infinite",
          }}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="28"
            height="28"
            viewBox="0 0 24 24"
            fill="white"
          >
            <path d="M20.52 3.48A11.8 11.8 0 0 0 12.04 0C5.73 0 .58 5.15.58 11.47c0 2.02.52 4 .1 5.88L0 24l6.86-1.82a12.18 12.18 0 0 0 5.14 1.18h.01c6.32 0 11.47-5.15 11.47-11.47 0-3.07-1.2-5.95-3.46-8.21ZM12.04 22a10.1 10.1 0 0 1-5.18-1.42l-.37-.22-4.07 1.08 1.09-3.97-.24-.41A10 10 0 1 1 12.04 22Zm5.55-7.5c-.3-.15-1.77-.87-2.04-.97-.27-.1-.47-.15-.67.15-.2.3-.77.97-.94 1.17-.17.2-.35.22-.65.07-.3-.15-1.26-.46-2.4-1.47-.88-.79-1.47-1.76-1.64-2.06-.17-.3-.02-.46.13-.61.13-.13.3-.35.45-.52.15-.17.2-.3.3-.5.1-.2.05-.37 0-.52-.05-.15-.67-1.62-.92-2.22-.24-.57-.48-.5-.67-.5-.17 0-.37-.02-.57-.02-.2 0-.52.07-.79.37-.27.3-1.04 1.02-1.04 2.47 0 1.45 1.06 2.85 1.21 3.05.15.2 2.09 3.19 5.1 4.38.71.3 1.27.47 1.7.6.72.23 1.37.2 1.88.12.57-.08 1.77-.72 2.02-1.42.25-.7.25-1.3.17-1.42-.07-.12-.27-.2-.57-.35Z" />
          </svg>
        </a>
      </body>
    </html>
  )
}
