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
        url: "/logo.png",
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
        <link rel="icon" href="/favicon/favicon.ico" sizes="any" />
        
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

        {/* Floating WhatsApp Button */}
        <a
          href="https://wa.me/6283822640883?text=Halo%2C%20saya%20ingin%20konsultasi%20tentang%20website"
          target="_blank"
          rel="noopener noreferrer"
          className="
            fixed bottom-6 right-6 z-[999]
            flex items-center justify-center
            w-14 h-14
            bg-[#2A8E9E]
            rounded-full shadow-lg
            text-white
            transition-all duration-300
            hover:scale-110 hover:shadow-xl
            animate-ping-smooth
          "
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 32 32"
            className="w-7 h-7 fill-white"
          >
            <path d="M16.01 3.2c-7.07 0-12.8 5.73-12.8 12.8 0 2.26.59 4.46 1.7 6.41l-1.79 6.51 6.67-1.75c1.88.99 3.99 1.51 6.22 1.51 7.07 0 12.8-5.73 12.8-12.8S23.08 3.2 16.01 3.2zm6.93 18.45c-.29.81-1.69 1.58-2.37 1.68-.61.09-1.39.13-2.24-.14-.52-.17-1.19-.39-2.04-.77-3.59-1.56-5.92-5.22-6.09-5.47-.18-.24-1.45-1.92-1.45-3.66 0-1.74.91-2.6 1.23-2.96.33-.36.72-.45.96-.45.24 0 .48 0 .69.01.22.01.52-.08.81.62.29.7.99 2.41 1.08 2.59.09.18.14.4.03.64-.11.24-.17.4-.34.61-.17.2-.36.46-.52.61-.17.17-.35.35-.15.69.2.34.88 1.45 1.9 2.35 1.31 1.15 2.41 1.51 2.76 1.67.35.17.55.14.75-.08.2-.22.86-1 1.1-1.34.24-.35.47-.29.79-.17.32.12 2.02.95 2.36 1.12.35.17.57.26.66.41.09.14.09.83-.2 1.63z" />
          </svg>
        </a>

        <Analytics />
      </body>

    </html>
  )
}