import type React from "react"
import type { Metadata } from "next"
import { Inter, Geist_Mono } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"

const _inter = Inter({ subsets: ["latin"] })
const _geistMono = Geist_Mono({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "YMS Studio - Jasa Pembuatan Website Profesional WordPress & Custom",
  description:
    "Jasa pembuatan website profesional untuk UMKM, startup, dan bisnis. Spesialis WordPress, WooCommerce, dan Custom Development. Harga terjangkau, hasil maksimal.",
  keywords: [
    "jasa pembuatan website",
    "jasa website murah",
    "jasa website wordpress",
    "jasa website umkm",
    "jasa website profesional",
    "jasa web design",
    "jasa website custom",
    "jasa toko online",
    "jasa website company profile",
    "jasa pembuatan website jakarta",
    "YMS Studio",
  ],
  authors: [{ name: "YMS Studio" }],
  creator: "YMS Studio",
  publisher: "YMS Studio",
  generator: "Next.js",
  applicationName: "YMS Studio",
  referrer: "origin-when-cross-origin",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    title: "YMS Studio - Jasa Pembuatan Website Profesional",
    description:
      "Solusi website profesional untuk UMKM dan bisnis. Spesialis WordPress & Custom Development dengan harga terjangkau.",
    type: "website",
    locale: "id_ID",
    url: "https://ymsstudio.id",
    siteName: "YMS Studio",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "YMS Studio - Jasa Pembuatan Website",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "YMS Studio - Jasa Pembuatan Website Profesional",
    description:
      "Solusi website profesional untuk UMKM dan bisnis. Spesialis WordPress & Custom Development.",
    images: ["/og-image.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "your-google-verification-code",
    // yandex: "your-yandex-verification-code",
    // yahoo: "your-yahoo-verification-code",
  },
  alternates: {
    canonical: "https://ymsstudio.id",
  },
  category: "Web Development",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="id" suppressHydrationWarning>
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="icon" href="/icon.png" type="image/png" sizes="any" />
        
        {/* Additional SEO Meta Tags */}
        <meta name="theme-color" content="#000000" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="black" />
        
        {/* Structured Data - Organization */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "YMS Studio",
              url: "https://ymsstudio.id",
              logo: "https://ymsstudio.id/logo.png",
              description:
                "Jasa pembuatan website profesional untuk UMKM, startup, dan bisnis. Spesialis WordPress dan Custom Development.",
              address: {
                "@type": "PostalAddress",
                addressCountry: "ID",
                addressLocality: "Jakarta",
              },
              contactPoint: {
                "@type": "ContactPoint",
                telephone: "+62-838-2264-0883",
                contactType: "Customer Service",
                availableLanguage: ["Indonesian", "English"],
              },
              sameAs: [
                // "https://facebook.com/ymsstudio",
                // "https://instagram.com/ymsstudio",
                // "https://linkedin.com/company/ymsstudio",
              ],
            }),
          }}
        />

        {/* Structured Data - Service */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Service",
              serviceType: "Website Development",
              provider: {
                "@type": "Organization",
                name: "YMS Studio",
              },
              areaServed: "ID",
              description:
                "Jasa pembuatan website WordPress, WooCommerce, Company Profile, Toko Online, dan Custom Development untuk UMKM dan bisnis.",
              offers: {
                "@type": "Offer",
                availability: "https://schema.org/InStock",
                priceCurrency: "IDR",
              },
            }),
          }}
        />
      </head>
      <body className={`font-sans antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}