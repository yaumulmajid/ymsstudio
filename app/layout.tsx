import type React from "react"
import type { Metadata } from "next"
import { Inter, Geist_Mono } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"

const _inter = Inter({ subsets: ["latin"], display: "swap" })
const _geistMono = Geist_Mono({ subsets: ["latin"], display: "swap" })

export const metadata: Metadata = {
  title: "YMS Web Studio - Jasa Pembuatan Website Murah Bekasi & Indonesia | Mulai 700rb",
  description:
    "⭐ Jasa Website Profesional Harga Murah! WordPress, Toko Online, Company Profile, Landing Page. FREE Konsultasi & Domain. 20+ Klien Puas. Fast Response WA: 0838-2264-0883",
  keywords: [
    // Primary Keywords (10)
    "jasa pembuatan website",
    "jasa website murah",
    "jasa website profesional",
    "jasa pembuatan website murah",
    "jasa web design",
    "jasa web development",
    "jasa website terpercaya",
    "jasa website berkualitas",
    "jasa website indonesia",
    "jasa bikin website",
    
    // WordPress Related (20)
    "jasa website wordpress",
    "jasa pembuatan website wordpress",
    "jasa website wordpress murah",
    "jasa wordpress profesional",
    "jasa maintenance wordpress",
    "jasa install wordpress",
    "jasa setting wordpress",
    "jasa website cms wordpress",
    "jasa customisasi wordpress",
    "jasa plugin wordpress",
    "jasa theme wordpress",
    "jasa website wordpress responsive",
    "jasa website wordpress seo",
    "jasa optimasi wordpress",
    "jasa migrasi wordpress",
    "jasa backup wordpress",
    "jasa update wordpress",
    "jasa keamanan wordpress",
    "jasa speed wordpress",
    "jasa design wordpress",
    
    // E-commerce & Online Store (15)
    "jasa toko online",
    "jasa pembuatan toko online",
    "jasa website woocommerce",
    "jasa website jualan online",
    "jasa website e-commerce",
    "jasa pembuatan toko online murah",
    "jasa website toko online wordpress",
    "jasa website marketplace",
    "jasa website jual beli",
    "jasa website toko",
    "jasa website produk",
    "jasa website katalog",
    "jasa online shop",
    "jasa website belanja online",
    "jasa website shopping",
    
    // Business Type (15)
    "jasa website umkm",
    "jasa website startup",
    "jasa website company profile",
    "jasa website perusahaan",
    "jasa website bisnis",
    "jasa website usaha kecil",
    "jasa website korporat",
    "jasa website profesional perusahaan",
    "jasa website portal",
    "jasa website profil perusahaan",
    "jasa website organisasi",
    "jasa website komunitas",
    "jasa website instansi",
    "jasa website lembaga",
    "jasa website pemerintah",
    
    // Landing Page & Specific Types (12)
    "jasa landing page",
    "jasa pembuatan landing page",
    "jasa website promosi",
    "jasa website marketing",
    "jasa website sekolah",
    "jasa website pendidikan",
    "jasa website blog",
    "jasa website berita",
    "jasa website portal berita",
    "jasa website property",
    "jasa website resto",
    "jasa website hotel",
    
    // Custom Development (10)
    "jasa website custom",
    "jasa pembuatan website custom",
    "jasa custom web development",
    "jasa web application",
    "jasa sistem informasi",
    "jasa website aplikasi",
    "jasa web design custom",
    "jasa coding website",
    "jasa programmer website",
    "jasa developer website",
    
    // Services & Maintenance (12)
    "jasa redesign website",
    "jasa revamp website",
    "jasa perbaikan website",
    "jasa maintenance website",
    "jasa update website",
    "jasa kelola website",
    "jasa manage website",
    "jasa hosting website",
    "jasa domain website",
    "jasa ssl website",
    "jasa backup website",
    "jasa migrasi website",
    
    // Technical & Quality Keywords (15)
    "jasa website responsive",
    "jasa website mobile friendly",
    "jasa website seo friendly",
    "jasa website cepat",
    "jasa website aman",
    "jasa website modern",
    "jasa website profesional murah",
    "jasa website terbaik",
    "jasa website berkualitas tinggi",
    "jasa website user friendly",
    "jasa website elegant",
    "jasa website minimalis",
    "jasa website dinamis",
    "jasa website interaktif",
    "jasa website premium",
    
    // Location-based Keywords - Bekasi & Province Level (22)
    "jasa website bekasi",
    "jasa website kabupaten bekasi",
    "jasa pembuatan website bekasi",
    "jasa website murah bekasi",
    "jasa website dki jakarta",
    "jasa website jawa barat",
    "jasa website jawa tengah",
    "jasa website jawa timur",
    "jasa website banten",
    "jasa website yogyakarta",
    "jasa website sumatera utara",
    "jasa website sumatera selatan",
    "jasa website sumatera barat",
    "jasa website riau",
    "jasa website lampung",
    "jasa website kalimantan timur",
    "jasa website kalimantan selatan",
    "jasa website sulawesi selatan",
    "jasa website sulawesi utara",
    "jasa website bali",
    "jasa website nusa tenggara barat",
    "jasa website papua",
    
    // Price & Value Keywords (8)
    "jasa website murah berkualitas",
    "jasa website terjangkau",
    "jasa website harga murah",
    "harga jasa pembuatan website",
    "biaya pembuatan website",
    "paket jasa website",
    "promo jasa website",
    "jasa website gratis domain",
    
    // Brand & Variations (3)
    "YMS Studio",
    "YMS Studio Indonesia",
    "YMS Studio Bekasi",
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
    title: "Jasa Pembuatan Website Murah Bekasi & Indonesia | Mulai 500rb - YMS Studio",
    description:
      "⭐ Jasa Website Profesional untuk UMKM & Bisnis di Bekasi & Seluruh Indonesia. WordPress, Toko Online, Company Profile. FREE Konsultasi & Domain. 100+ Klien Puas.",
    type: "website",
    locale: "id_ID",
    url: "https://ymsstudio.co.id",
    siteName: "YMS Studio",
    images: [
      {
        url: "https://ymsstudio.co.id/og-image.png",
        width: 1200,
        height: 630,
        alt: "YMS Studio - Jasa Pembuatan Website Profesional Bekasi & Indonesia",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Jasa Pembuatan Website Murah Bekasi - YMS Studio",
    description:
      "⭐ Website Profesional untuk UMKM & Bisnis di Bekasi. WordPress, Toko Online, Company Profile. FREE Konsultasi & Domain.",
    images: ["https://ymsstudio.co.id/og-image.png"],
    creator: "@ymsstudio",
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
    // other: { "facebook-domain-verification": "your-fb-code" }
  },
  alternates: {
    canonical: "https://ymsstudio.co.id",
    languages: {
      "id-ID": "https://ymsstudio.co.id",
    },
  },
  category: "Web Development",
  other: {
    "geo.region": "ID-JB",
    "geo.placename": "Bekasi",
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
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        
        {/* Favicons */}
        <link rel="icon" href="/favicon/favicon.ico" sizes="any" />
        <link rel="icon" href="/favicon/icon.svg" type="image/svg+xml" />
        <link rel="apple-touch-icon" href="/favicon/apple-touch-icon.png" />
        <link rel="manifest" href="/manifest.json" />
        
        {/* Preconnect to external domains */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="dns-prefetch" href="https://www.google-analytics.com" />
        
        {/* Theme & Mobile Meta Tags */}
        <meta name="theme-color" content="#2A8E9E" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
        <meta name="apple-mobile-web-app-title" content="YMS Studio" />
        <meta name="mobile-web-app-capable" content="yes" />
        
        {/* Additional SEO Meta Tags */}
        <meta name="rating" content="general" />
        <meta name="distribution" content="global" />
        <meta name="revisit-after" content="7 days" />
        <meta name="language" content="Indonesian" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        
        {/* Structured Data - LocalBusiness */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "LocalBusiness",
              "@id": "https://ymsstudio.co.id/#organization",
              name: "YMS Studio",
              image: "https://ymsstudio.co.id/logo.png",
              url: "https://ymsstudio.co.id",
              telephone: "+62-838-2264-0883",
              priceRange: "Rp 500.000 - Rp 5.000.000",
              address: {
                "@type": "PostalAddress",
                addressLocality: "Bekasi",
                addressRegion: "Jawa Barat",
                addressCountry: "ID",
              },
              description:
                "Jasa pembuatan website profesional untuk UMKM, startup, dan bisnis di Bekasi dan seluruh Indonesia. Spesialis WordPress, WooCommerce, dan Custom Development dengan harga terjangkau mulai dari Rp 500.000.",
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
                  ],
                  opens: "09:00",
                  closes: "18:00",
                },
              ],
              contactPoint: {
                "@type": "ContactPoint",
                telephone: "+62-838-2264-0883",
                contactType: "Customer Service",
                availableLanguage: ["Indonesian", "English"],
                areaServed: "ID",
              },
              sameAs: [
                "https://www.facebook.com/ymsstudio",
                "https://www.instagram.com/ymsstudio",
                "https://www.linkedin.com/company/ymsstudio",
                "https://twitter.com/ymsstudio",
              ],
              aggregateRating: {
                "@type": "AggregateRating",
                ratingValue: "4.9",
                reviewCount: "127",
                bestRating: "5",
                worstRating: "1",
              },
            }),
          }}
        />

        {/* Structured Data - Professional Service */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "ProfessionalService",
              name: "YMS Studio - Jasa Pembuatan Website",
              serviceType: "Website Development & Design",
              provider: {
                "@type": "LocalBusiness",
                name: "YMS Studio",
                "@id": "https://ymsstudio.co.id/#organization",
              },
              areaServed: [
                {
                  "@type": "City",
                  name: "Bekasi",
                },
                {
                  "@type": "Country",
                  name: "Indonesia",
                },
              ],
              description:
                "Layanan pembuatan website profesional termasuk WordPress, WooCommerce, Company Profile, Toko Online, Landing Page, dan Custom Development untuk UMKM dan bisnis di Bekasi dan seluruh Indonesia.",
              hasOfferCatalog: {
                "@type": "OfferCatalog",
                name: "Layanan Website",
                itemListElement: [
                  {
                    "@type": "Offer",
                    itemOffered: {
                      "@type": "Service",
                      name: "Website WordPress",
                      description: "Pembuatan website dengan WordPress CMS",
                    },
                  },
                  {
                    "@type": "Offer",
                    itemOffered: {
                      "@type": "Service",
                      name: "Toko Online / E-commerce",
                      description: "Pembuatan toko online dengan WooCommerce",
                    },
                  },
                  {
                    "@type": "Offer",
                    itemOffered: {
                      "@type": "Service",
                      name: "Company Profile",
                      description: "Website company profile profesional",
                    },
                  },
                  {
                    "@type": "Offer",
                    itemOffered: {
                      "@type": "Service",
                      name: "Custom Development",
                      description: "Pengembangan website custom sesuai kebutuhan",
                    },
                  },
                  {
                    "@type": "Offer",
                    itemOffered: {
                      "@type": "Service",
                      name: "Landing Page",
                      description: "Pembuatan landing page untuk promosi dan marketing",
                    },
                  },
                ],
              },
              offers: {
                "@type": "AggregateOffer",
                availability: "https://schema.org/InStock",
                priceCurrency: "IDR",
                lowPrice: "500000",
                highPrice: "50000000",
                offerCount: "5",
              },
            }),
          }}
        />

        {/* Structured Data - FAQ Schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "FAQPage",
              mainEntity: [
                {
                  "@type": "Question",
                  name: "Berapa biaya pembuatan website di YMS Studio?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Biaya pembuatan website di YMS Studio mulai dari Rp 500.000 untuk website sederhana hingga puluhan juta untuk website custom yang kompleks. Harga disesuaikan dengan kebutuhan dan fitur yang diinginkan.",
                  },
                },
                {
                  "@type": "Question",
                  name: "Berapa lama waktu pembuatan website?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Waktu pembuatan website berkisar antara 3-14 hari kerja tergantung kompleksitas. Website sederhana bisa selesai dalam 3-5 hari, sedangkan website kompleks membutuhkan 10-14 hari kerja.",
                  },
                },
                {
                  "@type": "Question",
                  name: "Apakah termasuk domain dan hosting?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Ya, paket website kami sudah termasuk domain .com/.id dan hosting selama 1 tahun. Anda tidak perlu repot mengurus teknis hosting dan domain.",
                  },
                },
                {
                  "@type": "Question",
                  name: "Apakah website yang dibuat SEO friendly?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Ya, semua website yang kami buat sudah SEO friendly dengan struktur kode yang optimal, loading speed cepat, mobile responsive, dan dilengkapi dengan plugin SEO untuk membantu ranking di Google.",
                  },
                },
                {
                  "@type": "Question",
                  name: "Area mana saja yang dilayani YMS Studio?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "YMS Studio melayani pembuatan website untuk seluruh Indonesia dengan fokus area Bekasi, Jawa Barat, dan kota-kota besar lainnya. Konsultasi bisa dilakukan online via WhatsApp.",
                  },
                },
                {
                  "@type": "Question",
                  name: "Apakah website yang dibuat mobile friendly?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Ya, semua website yang kami buat sudah responsive dan mobile friendly. Website akan tampil dengan baik di semua perangkat seperti smartphone, tablet, dan desktop.",
                  },
                },
                {
                  "@type": "Question",
                  name: "Apa saja layanan yang tersedia di YMS Studio?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "YMS Studio menyediakan layanan pembuatan website WordPress, Toko Online WooCommerce, Company Profile, Landing Page, Custom Web Development, Maintenance Website, Redesign Website, dan layanan hosting & domain.",
                  },
                },
              ],
            }),
          }}
        />

        {/* Structured Data - BreadcrumbList */}
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

        {/* Structured Data - WebSite with SearchAction */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebSite",
              url: "https://ymsstudio.co.id",
              name: "YMS Studio",
              description: "Jasa Pembuatan Website Profesional Bekasi & Indonesia",
              publisher: {
                "@type": "Organization",
                name: "YMS Studio",
                "@id": "https://ymsstudio.co.id/#organization",
              },
              potentialAction: {
                "@type": "SearchAction",
                target: "https://ymsstudio.co.id/search?q={search_term_string}",
                "query-input": "required name=search_term_string",
              },
            }),
          }}
        />

        {/* Structured Data - Product/Service Offers */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "ItemList",
              itemListElement: [
                {
                  "@type": "ListItem",
                  position: 1,
                  item: {
                    "@type": "Service",
                    name: "Jasa Website WordPress",
                    description: "Pembuatan website profesional dengan WordPress CMS, cocok untuk company profile, blog, dan portal berita",
                    provider: {
                      "@type": "Organization",
                      name: "YMS Studio",
                    },
                    areaServed: "Indonesia",
                    offers: {
                      "@type": "Offer",
                      priceCurrency: "IDR",
                      price: "500000",
                      priceSpecification: {
                        "@type": "PriceSpecification",
                        priceCurrency: "IDR",
                        price: "500000",
                      },
                    },
                  },
                },
                {
                  "@type": "ListItem",
                  position: 2,
                  item: {
                    "@type": "Service",
                    name: "Jasa Toko Online WooCommerce",
                    description: "Pembuatan toko online dengan WooCommerce, lengkap dengan payment gateway dan sistem manajemen produk",
                    provider: {
                      "@type": "Organization",
                      name: "YMS Studio",
                    },
                    areaServed: "Indonesia",
                    offers: {
                      "@type": "Offer",
                      priceCurrency: "IDR",
                      price: "2500000",
                      priceSpecification: {
                        "@type": "PriceSpecification",
                        priceCurrency: "IDR",
                        price: "2000000",
                      },
                    },
                  },
                },
                {
                  "@type": "ListItem",
                  position: 3,
                  item: {
                    "@type": "Service",
                    name: "Jasa Company Profile Website",
                    description: "Website company profile profesional untuk perusahaan dan bisnis dengan design modern",
                    provider: {
                      "@type": "Organization",
                      name: "YMS Studio",
                    },
                    areaServed: "Indonesia",
                    offers: {
                      "@type": "Offer",
                      priceCurrency: "IDR",
                      price: "1500000",
                      priceSpecification: {
                        "@type": "PriceSpecification",
                        priceCurrency: "IDR",
                        price: "1500000",
                      },
                    },
                  },
                },
                {
                  "@type": "ListItem",
                  position: 4,
                  item: {
                    "@type": "Service",
                    name: "Jasa Custom Web Development",
                    description: "Pembuatan website custom sesuai kebutuhan bisnis dengan fitur khusus dan integrasi sistem",
                    provider: {
                      "@type": "Organization",
                      name: "YMS Studio",
                    },
                    areaServed: "Indonesia",
                    offers: {
                      "@type": "Offer",
                      priceCurrency: "IDR",
                      price: "5000000",
                      priceSpecification: {
                        "@type": "PriceSpecification",
                        priceCurrency: "IDR",
                        price: "5000000",
                      },
                    },
                  },
                },
                {
                  "@type": "ListItem",
                  position: 5,
                  item: {
                    "@type": "Service",
                    name: "Jasa Landing Page",
                    description: "Pembuatan landing page untuk promosi, marketing campaign, dan lead generation",
                    provider: {
                      "@type": "Organization",
                      name: "YMS Studio",
                    },
                    areaServed: "Indonesia",
                    offers: {
                      "@type": "Offer",
                      priceCurrency: "IDR",
                      price: "750000",
                      priceSpecification: {
                        "@type": "PriceSpecification",
                        priceCurrency: "IDR",
                        price: "750000",
                      },
                    },
                  },
                },
              ],
            }),
          }}
        />
      </head>

      <body className={`font-sans antialiased`}>
        {children}
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
          aria-label="Hubungi kami via WhatsApp"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 32 32"
            className="w-7 h-7 fill-white"
            aria-hidden="true"
          >
            <path d="M16.01 3.2c-7.07 0-12.8 5.73-12.8 12.8 0 2.26.59 4.46 1.7 6.41l-1.79 6.51 6.67-1.75c1.88.99 3.99 1.51 6.22 1.51 7.07 0 12.8-5.73 12.8-12.8S23.08 3.2 16.01 3.2zm6.93 18.45c-.29.81-1.69 1.58-2.37 1.68-.61.09-1.39.13-2.24-.14-.52-.17-1.19-.39-2.04-.77-3.59-1.56-5.92-5.22-6.09-5.47-.18-.24-1.45-1.92-1.45-3.66 0-1.74.91-2.6 1.23-2.96.33-.36.72-.45.96-.45.24 0 .48 0 .69.01.22.01.52-.08.81.62.29.7.99 2.41 1.08 2.59.09.18.14.4.03.64-.11.24-.17.4-.34.61-.17.2-.36.46-.52.61-.17.17-.35.35-.15.69.2.34.88 1.45 1.9 2.35 1.31 1.15 2.41 1.51 2.76 1.67.35.17.55.14.75-.08.2-.22.86-1 1.1-1.34.24-.35.47-.29.79-.17.32.12 2.02.95 2.36 1.12.35.17.57.26.66.41.09.14.09.83-.2 1.63z" />
          </svg>
        </a>

        <Analytics />
      </body>
    </html>
  )
} 