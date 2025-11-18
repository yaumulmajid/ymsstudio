"use client"

import { useEffect, useRef, useState } from "react"
import { Check } from "lucide-react"

const pricingTiers = [
  {
    name: "Basic",
    price: "799k",
    description: "Cocok untuk personal brand, portofolio, dan usaha kecil",
    features: [
      "1 Halaman (Landing Page)",
      "Desain Standar (Template Premium Disesuaikan Brand)",
      "Custom Domain (.web.id / .my.id - opsional)",
      "Akses WordPress Admin",
      "Mobile Friendly",
      "WhatsApp Chat Integration",
      "Optimasi Dasar SEO (Yoast SEO Setup)",
      "Keamanan Dasar (SSL + Anti Spam)",
      "Tahun berikutnya 500k",
    ],
    cta: "Pilih Paket",
  },
  {
    name: "Premium",
    price: "1,250k",
    description: "Pilihan populer untuk bisnis yang ingin tampil profesional",
    features: [
      "3 - 5 Halaman (Home, Tentang, Layanan, Galeri, Kontak)",
      "Desain Kustom Premium (Sesuai Identitas Bisnis)",
      "Custom Domain (.com)",
      "Akses WordPress Admin",
      "Mobile Friendly & Cepat Diakses",
      "Email Bisnis (1 Akun)",
      "WhatsApp Chat Integration",
      "Optimasi SEO Lengkap (Yoast Pro Setup + Metadata)",
      "Google Analytics & Search Console Setup",
      "Backup Otomatis Mingguan",
      "2x Revisi Desain",
      "Tahun berikutnya 500k",
    ],
    cta: "Pilih Paket",
    featured: true,
  },
  {
    name: "Website Toko Online",
    price: "2,550k",
    description: "Solusi lengkap untuk bisnis e-commerce dan UMKM",
    features: [
      "10+ Halaman (Home, Produk, Detail, Checkout, Kontak,D dll.)",
      "Desain Responsif & User-Friendly (Custom UI/UX)",
      "WooCommerce Setup",
      "Fitur Add to Cart / Order via WhatsApp",
      "Integrasi Payment Gateway (Midtrans, Xendit, Doku, dll.)",
      "Custom Domain (.com)",
      "Hosting Pribadi 25GB",
      "Full Admin Access",
      "Email Bisnis (1 Akun)",
      "Optimasi SEO Produk",
      "Google Analytics + Meta Pixel Integration",
      "Backup Otomatis Harian",
      "Panduan & Tutorial Kelola Website",
      "3x Revisi Desain",
    ],
    cta: "Pilih Paket",
  },
]

export default function Pricing() {
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef<HTMLDivElement>(null)
  const [visibleCards, setVisibleCards] = useState<boolean[]>(Array(pricingTiers.length).fill(false))

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
          pricingTiers.forEach((_, index) => {
            setTimeout(() => {
              setVisibleCards((prev) => {
                const newState = [...prev]
                newState[index] = true
                return newState
              })
            }, index * 150)
          })
        }
      },
      { threshold: 0.1 },
    )

    if (sectionRef.current) observer.observe(sectionRef.current)
    return () => observer.disconnect()
  }, [])

  return (
    <section id="pricing" ref={sectionRef} className="relative py-16 md:py-24 bg-background overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 right-0 w-96 h-96 bg-foreground/3 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 left-0 w-96 h-96 bg-foreground/3 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-12">
          <div
            className={`inline-flex items-center gap-2 text-xs font-semibold text-foreground mb-3 transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}
          >
            <span className="w-2 h-2 bg-foreground rounded-full"></span>
            Pricing Plan
          </div>
          <h2
            className={`text-3xl md:text-4xl font-bold text-foreground mb-4 transition-all duration-700 delay-100 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}
          >
            Paket Jasa Website
          </h2>
          <p
            className={`text-base text-muted-foreground max-w-2xl mx-auto transition-all duration-700 delay-200 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}
          >
            Pilih paket yang sesuai dengan kebutuhan bisnis Anda. Semua paket dapat disesuaikan dengan kebutuhan spesifik.
          </p>
        </div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-5">
          {pricingTiers.map((tier, index) => (
            <div
              key={index}
              className={`transition-all duration-700 ${visibleCards[index] ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
            >
              <div
                className={`relative h-full rounded-2xl transition-all duration-500 ${
                  tier.featured
                    ? "bg-foreground/5 border-2 border-foreground/30 shadow-2xl shadow-foreground/10 md:scale-105"
                    : "bg-card border border-border/50 hover:border-foreground/20 hover:shadow-lg hover:shadow-foreground/10"
                }`}
              >
                {/* Featured Badge */}
                {tier.featured && (
                  <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                    <div className="bg-foreground text-background px-3 py-1 rounded-full text-xs font-semibold">
                      Popular
                    </div>
                  </div>
                )}

                <div className="p-6 md:p-8 flex flex-col h-full">
                  {/* Tier Info */}
                  <div className="mb-6">
                    <h3 className="text-lg font-bold text-foreground mb-1">{tier.name}</h3>
                    <p className="text-xs text-muted-foreground mb-4">{tier.description}</p>
                    <div className="mb-2">
                      <span className="text-3xl md:text-4xl font-bold text-foreground">{tier.price}</span>
                    </div>
                  </div>

                  {/* CTA Button */}
                  <a
                    href="https://wa.me/6283822640883?text=Halo%2C%20saya%20tertarik%20dengan%20paket%20website"
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`w-full py-2.5 rounded-lg font-medium text-sm transition-all duration-300 mb-6 block text-center ${
                      tier.featured
                        ? "bg-foreground text-background hover:shadow-lg hover:shadow-foreground/30 active:scale-95"
                        : "bg-foreground/10 text-foreground hover:bg-foreground/15 border border-border/50 active:scale-95"
                    }`}
                  >
                    {tier.cta}
                  </a>

                  {/* Features */}
                  <div className="space-y-3">
                    {tier.features.map((feature, idx) => (
                      <div key={idx} className="flex items-start gap-2.5">
                        <div
                          className={`w-4 h-4 rounded-full flex items-center justify-center mt-0.5 flex-shrink-0 ${
                            tier.featured ? "bg-foreground/20" : "bg-foreground/10"
                          }`}
                        >
                          <Check size={14} className="text-foreground" />
                        </div>
                        <span className="text-xs text-muted-foreground">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
