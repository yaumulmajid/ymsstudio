"use client"

import { useEffect, useRef, useState } from "react"
import Image from "next/image"
import { ChevronDown, ArrowRight, CheckCircle, Shield, Clock, Zap } from "lucide-react"

export default function Hero() {
  const [isVisible, setIsVisible] = useState(false)
  const [isMounted, setIsMounted] = useState(false)
  const sectionRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    setIsMounted(true)
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsVisible(true)
      },
      { threshold: 0.1 }
    )

    if (sectionRef.current) observer.observe(sectionRef.current)

    return () => observer.disconnect()
  }, [])

  const scrollToPricing = () => {
    const element = document.getElementById("pricing")
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
      element.focus({ preventScroll: true })
    }
  }

  return (
    <section
      id="home"
      ref={sectionRef}
      className="relative min-h-screen pt-7 bg-white flex items-center overflow-hidden"
      aria-labelledby="hero-heading"
    >
      {/* Skip to content link */}
      <a
        href="#pricing"
        className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-50 focus:px-4 focus:py-2 focus:bg-[#2A8E9E] focus:text-white focus:rounded-lg"
      >
        Langsung ke Paket & Harga
      </a>

      {/* Background Elements - Only on desktop */}
      {isMounted && (
        <div className="hidden lg:block absolute inset-0 overflow-hidden pointer-events-none" aria-hidden="true">
          <div className="absolute top-20 left-10 w-72 h-72 bg-[#2A8E9E]/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-[#180D39]/5 rounded-full blur-3xl"></div>
        </div>
      )}

      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20 w-full relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-[1.02fr_0.98fr] gap-8 lg:gap-16 items-center">
          {/* Left Content */}
          <div className="space-y-4 lg:space-y-5 opacity-100 translate-x-0">
            {/* Promo Badge */}
            <div 
              className="inline-flex items-center gap-2 bg-gradient-to-r from-[#2A8E9E]/10 to-[#180D39]/10 text-[#1D1E20] px-3 py-1.5 rounded-full text-xs sm:text-sm font-semibold border border-[#2A8E9E]/30"
              role="status"
              aria-live="polite"
            >
              <span className="relative flex h-2 w-2" aria-hidden="true">
                <span className="absolute inline-flex h-full w-full rounded-full bg-[#2A8E9E] opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-[#2A8E9E]"></span>
              </span>
              <span role="img" aria-label="promosi">🔥</span>
              <span className="hidden sm:inline">Promo: Diskon 30% + Gratis Domain & Hosting</span>
              <span className="sm:hidden">Diskon 30% + Gratis Domain</span>
            </div>

            {/* Main Heading - Optimized for mobile */}
            <header className="space-y-2 lg:space-y-3">
              <h1 id="hero-heading" className="text-[26px] sm:text-3xl lg:text-4xl font-bold text-[#1D1E20] leading-[1.2] tracking-tight">
                Jasa Website UMKM Profesional{" "}
                <span className="bg-gradient-to-r from-[#2A8E9E] to-[#180D39] bg-clip-text text-transparent font-bold">
                  Harga Terjangkau
                </span>
              </h1>
              <div className="h-1 w-14 lg:w-16 bg-gradient-to-r from-[#2A8E9E] to-transparent rounded-full" aria-hidden="true"></div>
            </header>

            {/* Description - Shorter on mobile */}
            <p className="text-sm sm:text-base lg:text-lg text-[#1D1E20]/80 leading-relaxed max-w-xl">
              <span className="hidden sm:inline">Website cepat dan mobile-friendly untuk UMKM. Dari landing page hingga toko online dengan WordPress atau Custom Development. </span>
              <span className="sm:hidden">Website cepat untuk UMKM. Landing page & toko online. </span>
              Selesai 3 hari, bergaransi.
            </p>

            {/* Features Grid - Compact on mobile */}
            <div className="grid grid-cols-2 gap-3 lg:gap-4 py-2">
              <h2 className="sr-only">Fitur Utama Layanan</h2>
              
              <div className="flex items-start gap-2">
                <Zap 
                  className="text-[#2A8E9E] flex-shrink-0 mt-0.5" 
                  size={16} 
                  aria-hidden="true" 
                />
                <div>
                  <h3 className="text-xs sm:text-sm font-semibold text-[#1D1E20]">Selesai 3 Hari</h3>
                  <p className="text-[10px] sm:text-xs text-[#1D1E20]/80 hidden sm:block">Kerja cepat dan efisien</p>
                </div>
              </div>
              
              <div className="flex items-start gap-2">
                <Shield 
                  className="text-[#180D39] flex-shrink-0 mt-0.5" 
                  size={16} 
                  aria-hidden="true"
                />
                <div>
                  <h3 className="text-xs sm:text-sm font-semibold text-[#1D1E20]">Garansi 100%</h3>
                  <p className="text-[10px] sm:text-xs text-[#1D1E20]/80 hidden sm:block">Uang kembali</p>
                </div>
              </div>
              
              <div className="flex items-start gap-2">
                <CheckCircle 
                  className="text-[#2A8E9E] flex-shrink-0 mt-0.5" 
                  size={16} 
                  aria-hidden="true"
                />
                <div>
                  <h3 className="text-xs sm:text-sm font-semibold text-[#1D1E20]">20+ UMKM Puas</h3>
                  <p className="text-[10px] sm:text-xs text-[#1D1E20]/80 hidden sm:block">Rating 4.9 dari 5</p>
                </div>
              </div>
              
              <div className="flex items-start gap-2">
                <Clock 
                  className="text-[#180D39] flex-shrink-0 mt-0.5" 
                  size={16} 
                  aria-hidden="true"
                />
                <div>
                  <h3 className="text-xs sm:text-sm font-semibold text-[#1D1E20]">Support 24/7</h3>
                  <p className="text-[10px] sm:text-xs text-[#1D1E20]/80 hidden sm:block">Via WhatsApp</p>
                </div>
              </div>
            </div>

            {/* CTA Buttons - Stack on mobile */}
            <nav aria-label="Aksi utama">
              <div className="flex flex-col gap-2.5 sm:gap-3 pt-2">
                <a
                  href="https://wa.me/6283822640883?text=Halo%20Yaumul%2C%20saya%20pelaku%20UMKM%20mau%20konsultasi%20pembuatan%20website%20untuk%20usaha%20saya.%20Bisa%20bantu%3F"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group relative bg-[#2A8E9E] text-white px-5 py-3 sm:px-6 sm:py-3.5 rounded-xl font-semibold text-sm transition-all duration-300 flex items-center justify-center gap-2 active:scale-95 touch-manipulation"
                  aria-label="Konsultasi gratis via WhatsApp"
                >
                  <span className="relative z-10 flex items-center gap-2">
                    Konsultasi Gratis
                    <ArrowRight 
                      size={16} 
                      className="group-active:translate-x-1 transition-transform" 
                      aria-hidden="true"
                    />
                  </span>
                </a>

                <button
                  onClick={scrollToPricing}
                  type="button"
                  className="border-2 border-[#2A8E9E] text-[#1D1E20] px-5 py-3 sm:px-6 sm:py-3.5 rounded-xl font-medium text-sm transition-all duration-300 active:scale-95 flex items-center justify-center gap-2 touch-manipulation"
                  aria-label="Lihat paket dan harga"
                >
                  <span>Lihat Paket & Harga</span>
                  <span className="text-xs font-normal opacity-80">(Mulai 799rb)</span>
                </button>
              </div>
            </nav>

            {/* Trust Indicators - Mobile optimized */}
            <aside aria-labelledby="trust-heading" className="pt-3 lg:pt-4 border-t border-[#1D1E20]/10">
              <h2 id="trust-heading" className="sr-only">Kepercayaan Klien</h2>
              
              {/* Mobile: Simple badges */}
              <div className="flex gap-2 overflow-x-auto pb-2 lg:hidden scrollbar-hide snap-x snap-mandatory">
                <div className="flex items-center gap-1.5 text-xs whitespace-nowrap px-2.5 py-1.5 bg-white rounded-lg border border-[#2A8E9E]/20 snap-start flex-shrink-0">
                  <span className="text-green-600" aria-hidden="true">✓</span>
                  <span className="font-medium text-[#1D1E20]">Fashion & F&B</span>
                </div>
                <div className="flex items-center gap-1.5 text-xs whitespace-nowrap px-2.5 py-1.5 bg-white rounded-lg border border-[#2A8E9E]/20 snap-start flex-shrink-0">
                  <span aria-hidden="true">🛒</span>
                  <span className="font-medium text-[#1D1E20]">Toko Online</span>
                </div>
                <div className="flex items-center gap-1.5 text-xs whitespace-nowrap px-2.5 py-1.5 bg-white rounded-lg border border-[#2A8E9E]/20 snap-start flex-shrink-0">
                  <span aria-hidden="true">🏢</span>
                  <span className="font-medium text-[#1D1E20]">Jasa</span>
                </div>
                <div className="flex items-center gap-1.5 text-xs whitespace-nowrap px-2.5 py-1.5 bg-white rounded-lg border border-[#2A8E9E]/20 snap-start flex-shrink-0">
                  <span aria-hidden="true">📦</span>
                  <span className="font-medium text-[#1D1E20]">Produk Lokal</span>
                </div>
              </div>

              {/* Desktop List */}
              <ul className="hidden lg:flex flex-wrap items-center gap-x-4 gap-y-2 text-xs text-[#1D1E20]/80 list-none">
                <li className="flex items-center gap-1.5 whitespace-nowrap">
                  <span className="text-green-600 font-semibold" aria-hidden="true">✓</span>
                  <span className="font-medium text-[#1D1E20]">Fashion & F&B</span>
                </li>
                <li className="w-px h-4 bg-[#1D1E20]/20" aria-hidden="true"></li>
                <li className="flex items-center gap-1.5 whitespace-nowrap">
                  <span role="img" aria-label="toko online" aria-hidden="true">🛒</span>
                  <span className="font-medium text-[#1D1E20]">Toko Online</span>
                </li>
                <li className="w-px h-4 bg-[#1D1E20]/20" aria-hidden="true"></li>
                <li className="flex items-center gap-1.5 whitespace-nowrap">
                  <span role="img" aria-label="jasa" aria-hidden="true">🏢</span>
                  <span className="font-medium text-[#1D1E20]">Jasa & Konsultan</span>
                </li>
                <li className="w-px h-4 bg-[#1D1E20]/20" aria-hidden="true"></li>
                <li className="flex items-center gap-1.5 whitespace-nowrap">
                  <span role="img" aria-label="produk" aria-hidden="true">📦</span>
                  <span className="font-medium text-[#1D1E20]">Produk Lokal</span>
                </li>
              </ul>
            </aside>
          </div>

          {/* Right - Image & Stats */}
          <div className="opacity-100 translate-y-0 scale-100 lg:order-last">
            {/* Main Image - Mobile optimized */}
            <figure className="relative aspect-[16/10] sm:aspect-[4/3] group rounded-xl lg:rounded-2xl overflow-hidden shadow-xl lg:shadow-2xl border border-[#2A8E9E]/20 bg-[#2A8E9E]/5">
              <Image
                src="/project-hero.webp"
                alt="Tampilan contoh website UMKM profesional dengan desain modern"
                width={800}
                height={600}
                className="object-cover w-full h-full"
                priority
                fetchPriority="high"
                quality={80}
                sizes="(max-width: 640px) 95vw, (max-width: 1024px) 90vw, 700px"
                placeholder="blur"
                blurDataURL="data:image/webp;base64,UklGRiQAAABXRUJQVlA4IBgAAAAwAQCdASoBAAEAAwA0JaQAA3AA/vuUAAA="
              />
              <div className="hidden lg:block absolute inset-0 bg-gradient-to-t from-[#180D39]/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" aria-hidden="true"></div>
            </figure>

            {/* Stats Grid - Compact on mobile */}
            <aside aria-labelledby="stats-heading">
              <h2 id="stats-heading" className="sr-only">Statistik Layanan Kami</h2>
              <dl className="mt-3 lg:mt-4 grid grid-cols-3 gap-2">
                <div className="text-center p-2 sm:p-2.5 lg:p-3 bg-white rounded-lg border border-[#2A8E9E]/20 shadow-sm">
                  <dt className="sr-only">Jumlah Website Live</dt>
                  <dd className="text-lg sm:text-xl lg:text-2xl font-bold text-[#1D1E20]">20+</dd>
                  <dt className="text-[9px] sm:text-[10px] lg:text-xs text-[#1D1E20]/60 mt-0.5">Website Live</dt>
                </div>
                <div className="text-center p-2 sm:p-2.5 lg:p-3 bg-white rounded-lg border border-[#2A8E9E]/20 shadow-sm">
                  <dt className="sr-only">Waktu Pengerjaan</dt>
                  <dd className="text-lg sm:text-xl lg:text-2xl font-bold text-[#1D1E20]">3 Hari</dd>
                  <dt className="text-[9px] sm:text-[10px] lg:text-xs text-[#1D1E20]/60 mt-0.5">Rata-rata</dt>
                </div>
                <div className="text-center p-2 sm:p-2.5 lg:p-3 bg-white rounded-lg border border-[#2A8E9E]/20 shadow-sm">
                  <dt className="sr-only">Kepuasan Klien</dt>
                  <dd className="text-lg sm:text-xl lg:text-2xl font-bold text-[#1D1E20]">100%</dd>
                  <dt className="text-[9px] sm:text-[10px] lg:text-xs text-[#1D1E20]/60 mt-0.5">Puas</dt>
                </div>
              </dl>
            </aside>
          </div>
        </div>

        {/* Scroll Indicator - Hidden on mobile */}
        <div className="hidden lg:flex absolute bottom-0 left-1/2 transform -translate-x-1/2 animate-bounce" aria-hidden="true">
          <div className="flex flex-col items-center gap-2">
            <span className="text-xs text-[#1D1E20]/50">Scroll untuk info lebih</span>
            <ChevronDown className="text-[#2A8E9E]" size={24} />
          </div>
        </div>
      </div>
    </section>
  )
}