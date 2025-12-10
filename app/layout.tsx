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
  weight: ['400', '500', '600', '700']
})

export const metadata: Metadata = {
  title: "Jasa Website Profesional Bekasi & Indonesia | Mulai 700rb - YMS Studio",
  
  description: "Jasa pembuatan website profesional untuk UMKM & bisnis di Bekasi. WordPress, Toko Online, Company Profile mulai 700rb. Garansi & konsultasi gratis. 20+ klien puas.",
 
  keywords: [
    "jasa website bekasi",
    "jasa pembuatan website murah",
    "jasa website wordpress",
    "jasa toko online bekasi",
    "jasa company profile",
    "jasa landing page",
    "jasa website indonesia",
    "YMS Studio"
  ],
  
  authors: [{ name: "YMS Studio" }],
  creator: "YMS Studio",
  publisher: "YMS Studio",
  applicationName: "YMS Studio",
  referrer: "origin-when-cross-origin",
  
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  
  openGraph: {
    title: "Jasa Website Profesional Bekasi & Indonesia | YMS Studio",
    description: "Website profesional untuk UMKM & bisnis. WordPress, Toko Online, Company Profile mulai 700rb. Konsultasi gratis!",
    type: "website",
    locale: "id_ID",
    url: "https://ymsstudio.co.id",
    siteName: "YMS Studio",
    images: [
      {
        url: "https://ymsstudio.co.id/logo.webp",
        width: 1200,
        height: 630,
        alt: "YMS Studio - Jasa Website Profesional Bekasi",
        type: "image/png",
      },
    ],
  },
  
  // ✅ TWITTER CARD
  twitter: {
    card: "summary_large_image",
    title: "Jasa Website Profesional Bekasi - YMS Studio",
    description: "Website profesional mulai 700rb. WordPress, Toko Online, Company Profile. Konsultasi gratis!",
    images: ["https://ymsstudio.co.id/logo.webp"],
    creator: "@ymsstudio",
    site: "@ymsstudio",
  },
  
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  
  verification: {
    google: "R7wsRT4vlDQVhRu5rTGbN-vEVkJ3p7br9MzXMLWBcvw",
  },
  
  // ✅ CANONICAL: Avoid duplicate content
  alternates: {
    canonical: "https://ymsstudio.co.id",
    languages: {
      "id-ID": "https://ymsstudio.co.id",
    },
  },
  
  category: "Web Development",
  
  // ✅ GEO TARGETING: Local SEO
  other: {
    "geo.region": "ID-JB",
    "geo.placename": "Bekasi",
    "geo.position": "-6.238270;106.975571", // Koordinat Bekasi
  },
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
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=5" />
        
        {/* ✅ FAVICONS */}
        <link rel="icon" href="/favicon.ico" sizes="32x32" />
        <link rel="icon" href="/icon.svg" type="image/svg+xml" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/manifest.json" />
        
        {/* ✅ PRECONNECT: Speed optimization */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="dns-prefetch" href="https://www.googletagmanager.com" />
        
        {/* ✅ THEME */}
        <meta name="theme-color" content="#2A8E9E" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="default" />
        <meta name="apple-mobile-web-app-title" content="YMS Studio" />
        
        {/* ============================================ */}
        {/* 🏢 SCHEMA 1: LOCAL BUSINESS (PALING PENTING!) */}
        {/* ============================================ */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "LocalBusiness",
              "@id": "https://ymsstudio.co.id/",
              name: "YMS Studio",
              image: "https://ymsstudio.co.id/logo.webp",
              logo: "https://ymsstudio.co.id/logo.webp",
              url: "https://ymsstudio.co.id",
              telephone: "+6283822640883",
              priceRange: "Rp 700.000 - Rp 50.000.000",
              
              address: {
                "@type": "PostalAddress",
                streetAddress: "Blok A5 No 29, Jl. Wimbledon Raya, Jatireja, Kec. Cikarang Tim., Kabupaten Bekasi, Jawa Barat 17533",
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
              
              description: "Jasa pembuatan website profesional untuk UMKM, startup, dan bisnis di Bekasi dan seluruh Indonesia. Spesialis WordPress, WooCommerce, dan Custom Development dengan harga terjangkau mulai dari Rp 700.000.",
              
              // Jam operasional
              openingHoursSpecification: {
                "@type": "OpeningHoursSpecification",
                dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
                opens: "09:00",
                closes: "18:00",
              },
              
              // Contact info
              contactPoint: {
                "@type": "ContactPoint",
                telephone: "+6283822640883",
                contactType: "Customer Service",
                availableLanguage: ["Indonesian", "English"],
                areaServed: "ID",
              },
              
              // Social media (untuk authority)
              sameAs: [
                "https://www.instagram.com/ymsstudio",
                "https://www.facebook.com/ymsstudio",
                "https://twitter.com/ymsstudio",
                "https://www.linkedin.com/company/ymsstudio",
              ],
              
              // Rating (PENTING untuk trust!)
              aggregateRating: {
                "@type": "AggregateRating",
                ratingValue: "4.9",
                reviewCount: "27",
                bestRating: "5",
                worstRating: "1",
              },
              
              // Layanan yang ditawarkan
              hasOfferCatalog: {
                "@type": "OfferCatalog",
                name: "Layanan Website",
                itemListElement: [
                  {
                    "@type": "Offer",
                    itemOffered: {
                      "@type": "Service",
                      name: "Jasa Website WordPress",
                      description: "Pembuatan website profesional dengan WordPress CMS, cocok untuk company profile, blog, dan portal berita. Harga mulai Rp 700.000.",
                      provider: {
                        "@type": "Organization",
                        name: "YMS Studio",
                      },
                    },
                  },
                  {
                    "@type": "Offer",
                    itemOffered: {
                      "@type": "Service",
                      name: "Jasa Toko Online WooCommerce",
                      description: "Pembuatan toko online dengan WooCommerce, lengkap dengan payment gateway dan manajemen produk. Harga mulai Rp 2.000.000.",
                      provider: {
                        "@type": "Organization",
                        name: "YMS Studio",
                      },
                    },
                  },
                  {
                    "@type": "Offer",
                    itemOffered: {
                      "@type": "Service",
                      name: "Jasa Company Profile",
                      description: "Website company profile profesional untuk perusahaan dengan design modern dan responsive. Harga mulai Rp 1.500.000.",
                      provider: {
                        "@type": "Organization",
                        name: "YMS Studio",
                      },
                    },
                  },
                  {
                    "@type": "Offer",
                    itemOffered: {
                      "@type": "Service",
                      name: "Jasa Landing Page",
                      description: "Pembuatan landing page untuk promosi, marketing campaign, dan lead generation. Harga mulai Rp 750.000.",
                      provider: {
                        "@type": "Organization",
                        name: "YMS Studio",
                      },
                    },
                  },
                ],
              },
              
              // Area yang dilayani (untuk Local SEO)
              areaServed: [
                {
                  "@type": "City",
                  name: "Bekasi",
                  containedIn: {
                    "@type": "State",
                    name: "Jawa Barat",
                  },
                },
                {
                  "@type": "City",
                  name: "Jakarta",
                },
                {
                  "@type": "Country",
                  name: "Indonesia",
                },
              ],
            }),
          }}
        />

        {/* ============================================ */}
        {/* ❓ SCHEMA 2: FAQ PAGE (untuk Featured Snippet) */}
        {/* ============================================ */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "FAQPage",
              mainEntity: [
                {
                  "@type": "Question",
                  name: "Berapa biaya jasa pembuatan website di YMS Studio?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Biaya jasa pembuatan website di YMS Studio mulai dari Rp 700.000 untuk website sederhana hingga puluhan juta untuk website custom yang kompleks. Harga disesuaikan dengan kebutuhan dan fitur yang diinginkan. Paket sudah termasuk domain, hosting, dan konsultasi gratis.",
                  },
                },
                {
                  "@type": "Question",
                  name: "Berapa lama waktu pembuatan website?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Waktu pembuatan website berkisar antara 3-14 hari kerja tergantung kompleksitas. Website sederhana seperti company profile bisa selesai dalam 3-5 hari kerja, sedangkan toko online dan website kompleks membutuhkan 10-14 hari kerja.",
                  },
                },
                {
                  "@type": "Question",
                  name: "Apakah paket website sudah termasuk domain dan hosting?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Ya, paket website kami sudah termasuk domain .com atau .id dan hosting selama 1 tahun. Anda tidak perlu repot mengurus teknis hosting dan domain karena semua sudah kami handle.",
                  },
                },
                {
                  "@type": "Question",
                  name: "Apakah website yang dibuat SEO friendly?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Ya, semua website yang kami buat sudah SEO friendly dengan struktur kode yang optimal, loading speed cepat, mobile responsive, dan dilengkapi dengan plugin SEO untuk membantu ranking di Google. Kami juga menyediakan layanan optimasi SEO tambahan.",
                  },
                },
                {
                  "@type": "Question",
                  name: "Area mana saja yang dilayani YMS Studio?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "YMS Studio melayani pembuatan website untuk seluruh Indonesia dengan fokus area Bekasi, Jakarta, Jawa Barat, dan kota-kota besar lainnya. Konsultasi bisa dilakukan online via WhatsApp, Zoom, atau Google Meet.",
                  },
                },
                {
                  "@type": "Question",
                  name: "Apakah website yang dibuat mobile friendly?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Ya, semua website yang kami buat sudah responsive dan mobile friendly. Website akan tampil dengan baik dan optimal di semua perangkat seperti smartphone, tablet, laptop, dan desktop.",
                  },
                },
                {
                  "@type": "Question",
                  name: "Apa saja jenis website yang bisa dibuat di YMS Studio?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "YMS Studio bisa membuat berbagai jenis website seperti: Company Profile, Toko Online (E-commerce), Landing Page, Website WordPress, Blog, Portal Berita, Website Sekolah, Website Property, Website Resto/Hotel, dan Custom Web Development sesuai kebutuhan bisnis Anda.",
                  },
                },
                {
                  "@type": "Question",
                  name: "Apakah ada garansi setelah website selesai?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Ya, kami memberikan garansi maintenance gratis selama 30 hari setelah website launching untuk perbaikan bug atau error. Setelah itu, tersedia paket maintenance bulanan dengan harga terjangkau untuk update dan support berkelanjutan.",
                  },
                },
              ],
            }),
          }}
        />

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebSite",
              "@id": "https://ymsstudio.co.id/#website",
              url: "https://ymsstudio.co.id",
              name: "YMS Studio - Jasa Website Bekasi",
              description: "Jasa Pembuatan Website Profesional untuk UMKM & Bisnis di Bekasi dan Seluruh Indonesia",
              publisher: {
                "@id": "https://ymsstudio.co.id/#organization",
              },
              inLanguage: "id-ID",
              potentialAction: {
                "@type": "SearchAction",
                target: {
                  "@type": "EntryPoint",
                  urlTemplate: "https://ymsstudio.co.id/search?q={search_term_string}",
                },
                "query-input": "required name=search_term_string",
              },
            }),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "BreadcrumbList",
              itemListElement: [
                {
                  "@type": "ListItem",
                  position: 1,
                  name: "Home",
                  item: "https://ymsstudio.co.id",
                },
              ],
            }),
          }}
        />
      </head>

      <body className={`${inter.variable} font-sans antialiased`}>
        {children}
<a
          href="https://wa.me/6283822640883?text=Halo%2C%20saya%20ingin%20konsultasi%20tentang%20website"
          target="_blank"
          rel="noopener noreferrer"
          className="fixed bottom-6 right-6 z-[999] flex items-center justify-center w-14 h-14 bg-[#2A8E9E] rounded-full shadow-lg text-white transition-all duration-300 hover:scale-110 hover:shadow-xl animate-ping-smooth"
          aria-label="Hubungi kami via WhatsApp"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 32 32"
            className="w-7 h-7 fill-white"
            aria-hidden="true"
          >
            <path d="M16.01 3.2c-7.07 0-12.8 5.73-12.8 12.8 0 2.26.59 4.46 1.7 6.41l-1.79 6.51 6.67-1.75c1.88.99 3.99 1.51 6.22 1.51 7.07 0 12.8-5.73 12.8-12.8S23.08 3.2 16.01 3.2zm6.93 18.45c-.29.81-1.69 1.58-2.37 1.68-.61.09-1.39.13-2.24-.14-.52-.17-1.19-.39-2.04-.77-3.59-1.56-5.92-5.22-6.09-5.47-.18-.24-1.45-1.92-1.45-3.66 0-1.74.91-2.6 1.23-2.96.33-.36.72-.45.96-.45.24 0 .48 0 .69.01.22.01.52-.08.81.62.29.7.99 2.41 1.08 2.59.09.18.14.4.03.64-.11.24-.17.4-.34.61-.17.2-.36.46-.52.61-.17.17-.35.35-.15.69.2.34.88 1.45 1.9 2.35 1.31 1.15 2.41 1.51 2.76 1.67.35.17.55.14.75-.08.2-.22.86-1 1.10-1.34.24-.35.47-.29.79-.17.32.12 2.02.95 2.36 1.12.35.17.57.26.66.41.09.14.09.83-.2 1.63z" />
          </svg>
        </a>

        <Analytics />
      </body>
    </html>
  )
}