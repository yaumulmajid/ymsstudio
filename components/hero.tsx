"use client"

import { useEffect, useRef, useState } from "react"
import Image from "next/image"
import { ChevronDown, ArrowRight, CheckCircle, Shield, Clock, Zap } from "lucide-react"

export default function Hero() {
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsVisible(true)
      },
      { threshold: 0.1 }
    )

    if (sectionRef.current) observer.observe(sectionRef.current)
    
    // Add Schema.org Structured Data for SEO
    const schema = {
      "@context": "https://schema.org",
      "@type": "ProfessionalService",
      "name": "YMS Studio - Jasa Pembuatan Website",
      "description": "Jasa pembuatan website profesional WordPress dan Custom Development untuk UMKM, startup, dan bisnis online di Indonesia",
      "priceRange": "Rp 799.000 - Rp 2.550.000",
      "telephone": "+6283822640883",
      "url": "https://ymsstudio.com",
      "address": {
        "@type": "PostalAddress",
        "addressLocality": "Jakarta",
        "addressCountry": "ID"
      },
      "aggregateRating": {
        "@type": "AggregateRating",
        "ratingValue": "4.9",
        "reviewCount": "50"
      },
      "offers": {
        "@type": "Offer",
        "availability": "https://schema.org/InStock",
        "price": "799000",
        "priceCurrency": "IDR"
      }
    }
    
    const script = document.createElement('script')
    script.type = 'application/ld+json'
    script.text = JSON.stringify(schema)
    document.head.appendChild(script)
    
    return () => {
      observer.disconnect()
      if (script.parentNode) script.parentNode.removeChild(script)
    }
  }, [])

  return (
    <section
      id="home"
      ref={sectionRef}
      className="relative min-h-screen bg-background pt-20 flex items-center overflow-hidden"
    >
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-72 h-72 bg-foreground/5 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-foreground/5 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 w-full relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div
            className={`space-y-6 transition-all duration-1000 ${
              isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-12"
            }`}
          >
            {/* Enhanced Badge with Urgency */}
            <div className="inline-flex items-center gap-2 bg-gradient-to-r from-orange-500/10 to-red-500/10 backdrop-blur-sm text-foreground px-4 py-2 rounded-full text-xs font-semibold border border-orange-500/20 hover:border-orange-500/40 transition-all duration-300 shadow-sm">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-orange-500 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-orange-500"></span>
              </span>
              🔥 Promo : Diskon 30% + Gratis Domain & Hosting
            </div>

            {/* SEO-Optimized H1 Headline */}
            <div className="space-y-3">
              <h1 className="text-3xl md:text-3xl lg:text-5xl font-bold text-foreground leading-[1.1] tracking-tight">
                Jasa Website Profesional yang{" "}
                <span className="bg-gradient-to-r from-foreground to-foreground/70 bg-clip-text text-transparent">
                  Bikin Bisnis Berkembang
                </span>
              </h1>
              <div className="h-1 w-20 bg-gradient-to-r from-foreground to-transparent rounded-full"></div>
            </div>

            {/* Benefit-Focused Subheading */}
            <p className="text-base md:text-lg text-muted-foreground leading-relaxed max-w-xl">
              Website <strong className="text-foreground">cepat, mobile-friendly, dan ranking #1 di Google</strong>. 
              Dari landing page hingga toko online dengan <strong className="text-foreground">WordPress atau Custom Code</strong>. 
              <strong className="text-foreground"> Selesai 3 hari</strong>, bergaransi.
            </p>

            {/* Key Benefits Grid */}
            <div className="grid grid-cols-2 gap-3 py-2">
              <div className="flex items-start gap-2">
                <Zap className="text-orange-500 flex-shrink-0 mt-0.5" size={18} />
                <div>
                  <p className="text-xs font-semibold text-foreground">Selesai 3 Hari</p>
                  <p className="text-xs text-muted-foreground">Kerja cepat & efisien</p>
                </div>
              </div>
              <div className="flex items-start gap-2">
                <Shield className="text-blue-500 flex-shrink-0 mt-0.5" size={18} />
                <div>
                  <p className="text-xs font-semibold text-foreground">Garansi 100%</p>
                  <p className="text-xs text-muted-foreground">Uang kembali</p>
                </div>
              </div>
              <div className="flex items-start gap-2">
                <CheckCircle className="text-green-500 flex-shrink-0 mt-0.5" size={18} />
                <div>
                  <p className="text-xs font-semibold text-foreground">20+ Klien Puas</p>
                  <p className="text-xs text-muted-foreground">Rating 4.9/5</p>
                </div>
              </div>
              <div className="flex items-start gap-2">
                <Clock className="text-purple-500 flex-shrink-0 mt-0.5" size={18} />
                <div>
                  <p className="text-xs font-semibold text-foreground">Support 24/7</p>
                  <p className="text-xs text-muted-foreground">Via WhatsApp</p>
                </div>
              </div>
            </div>

            {/* Improved CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-3 pt-2">
              
              <a
                href="https://wa.me/6283822640883?text=Halo%20Yaumul%2C%20saya%20mau%20konsultasi%20pembuatan%20website%20untuk%20bisnis%20saya.%20Bisa%20bantu%3F"
                target="_blank"
                rel="noopener noreferrer"
                className="group relative bg-foreground hover:bg-foreground/90 text-background px-6 py-3.5 rounded-xl font-semibold text-sm transition-all duration-300 flex items-center justify-center gap-2 active:scale-95 hover:shadow-2xl hover:shadow-foreground/20 overflow-hidden"
              >
                <span className="relative z-10 flex items-center gap-2">
                  Konsultasi Gratis Sekarang
                  <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000"></div>
              </a>
              <button
                onClick={() => {
                  const element = document.getElementById("pricing")
                  if (element) element.scrollIntoView({ behavior: "smooth" })
                }}
                className="group border-2 border-foreground/20 text-foreground hover:border-foreground hover:bg-foreground/5 px-6 py-3.5 rounded-xl font-semibold text-sm transition-all duration-300 active:scale-95 flex items-center justify-center gap-2"
              >
                Lihat Paket & Harga
                <span className="text-xs font-normal opacity-70">(Mulai 799rb)</span>
              </button>
            </div>

            {/* Trust Indicators */}
            <div className="flex flex-wrap items-center gap-5 pt-3 text-xs text-muted-foreground border-t border-foreground/5 pt-5">
              <div className="flex items-center gap-2">
                <div className="flex -space-x-2">
                  <div className="w-7 h-7 rounded-full bg-gradient-to-br from-blue-500 to-purple-500 border-2 border-background"></div>
                  <div className="w-7 h-7 rounded-full bg-gradient-to-br from-green-500 to-teal-500 border-2 border-background"></div>
                  <div className="w-7 h-7 rounded-full bg-gradient-to-br from-orange-500 to-red-500 border-2 border-background"></div>
                </div>
                <span className="font-medium text-foreground">20+ klien</span>
              </div>
              <div className="flex items-center gap-1.5">
                <span>⭐</span>
                <span className="font-semibold text-foreground">4.9/5</span>
                <span>rating</span>
              </div>
              <div className="flex items-center gap-1.5">
                <span>✓</span>
                <span>Garansi uang kembali</span>
              </div>
              <div className="flex items-center gap-1.5">
                <span>⚡</span>
                <span>Respons &lt;5 menit</span>
              </div>
            </div>
          </div>

          {/* Right Visual with Enhanced Image */}
          <div
            className={`transition-all duration-1000 delay-300 ${
              isVisible ? "opacity-100 translate-y-0 scale-100" : "opacity-0 translate-y-8 scale-95"
            }`}
          >
            <div className="relative aspect-[4/3] group rounded-2xl overflow-hidden shadow-2xl border border-foreground/10 dark:border-foreground/20 bg-foreground/5">
              
              <Image
                src="/project-hero.webp"
                alt="Jasa Pembuatan Website Profesional - Contoh Portfolio Website UMKM oleh YMS Studio"
                fill
                className="object-cover group-hover:scale-110 transition-transform duration-[3000ms] ease-out"
                priority
                sizes="(max-width: 768px) 100vw, 50vw"
              />
              
              {/* Overlay Gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            </div>

            {/* Stats Bar Below Image */}
            <div className="mt-6 grid grid-cols-3 gap-4">
              <div className="text-center p-4 bg-foreground/5 rounded-xl border border-foreground/10 hover:border-foreground/20 transition-colors">
                <p className="text-2xl font-bold text-foreground">20+</p>
                <p className="text-xs text-muted-foreground mt-1">Project Selesai</p>
              </div>
              <div className="text-center p-4 bg-foreground/5 rounded-xl border border-foreground/10 hover:border-foreground/20 transition-colors">
                <p className="text-2xl font-bold text-foreground">3 Hari</p>
                <p className="text-xs text-muted-foreground mt-1">Rata-rata Selesai</p>
              </div>
              <div className="text-center p-4 bg-foreground/5 rounded-xl border border-foreground/10 hover:border-foreground/20 transition-colors">
                <p className="text-2xl font-bold text-foreground">100%</p>
                <p className="text-xs text-muted-foreground mt-1">Kepuasan Klien</p>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="flex flex-col items-center gap-2">
            <span className="text-xs text-muted-foreground">Scroll untuk info lebih</span>
            <ChevronDown className="text-foreground/50" size={24} />
          </div>
        </div>
      </div>
    </section>
  )
}