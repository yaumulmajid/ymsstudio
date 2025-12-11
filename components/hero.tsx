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

    return () => observer.disconnect()
  }, [])

  const scrollToPricing = () => {
    const element = document.getElementById("pricing")
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
      // Set focus untuk keyboard users
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
      {/* Skip to content link untuk keyboard navigation */}
      <a
        href="#pricing"
        className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-50 focus:px-4 focus:py-2 focus:bg-[#2A8E9E] focus:text-white focus:rounded-lg focus:shadow-lg"
      >
        Langsung ke Paket & Harga
      </a>

      {/* Background Elements - decorative only */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none" aria-hidden="true">
        <div className="absolute top-20 left-10 w-72 h-72 bg-[#2A8E9E]/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-[#180D39]/5 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>

      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 py-20 w-full relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div
            className={`space-y-6 transition-all duration-1000 ${
              isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-12"
            }`}
          >
            {/* Promo Badge */}
            <div 
              className="inline-flex items-center gap-2 bg-gradient-to-r from-[#2A8E9E]/10 to-[#180D39]/10 backdrop-blur-sm text-[#1D1E20] px-4 py-2 rounded-full text-xs font-semibold border border-[#2A8E9E]/30 hover:border-[#2A8E9E]/50 transition-all duration-300 shadow-sm"
              role="status"
              aria-live="polite"
            >
              <span className="relative flex h-2 w-2" aria-hidden="true">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#2A8E9E] opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-[#2A8E9E]"></span>
              </span>
              <span role="img" aria-label="promosi">🔥</span>
              <span>Promo: Diskon 30% + Gratis Domain & Hosting</span>
            </div>

            {/* Main Heading */}
            <header className="space-y-3">
              <h1 id="hero-heading" className="text-3xl md:text-3xl lg:text-5xl font-bold text-[#1D1E20] leading-[1.1] tracking-tight">
                Website UMKM Profesional{" "}
                <span className="bg-gradient-to-r from-[#2A8E9E] to-[#180D39] bg-clip-text text-transparent">
                  Harga Terjangkau
                </span>
              </h1>
              <div className="h-1 w-20 bg-gradient-to-r from-[#2A8E9E] to-transparent rounded-full" aria-hidden="true"></div>
            </header>

            {/* Description */}
            <p className="text-base md:text-m text-[#1D1E20]/90 leading-relaxed max-w-xl">
              Website <strong className="text-[#1D1E20] font-semibold">cepat dan mobile-friendly</strong> untuk UMKM.
              Dari landing page hingga toko online dengan{" "}
              <strong className="text-[#1D1E20] font-semibold">WordPress atau Custom Development</strong>.
              <strong className="text-[#1D1E20] font-semibold"> Selesai 3 hari</strong>, bergaransi.
            </p>

            {/* Features Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 py-2">
              <h2 className="sr-only">Fitur Utama Layanan</h2>
              
              <div className="flex items-start gap-2">
                <Zap 
                  className="text-[#2A8E9E] flex-shrink-0 mt-0.5" 
                  size={18} 
                  aria-hidden="true" 
                  focusable="false"
                />
                <div>
                  <h3 className="text-xs font-semibold text-[#1D1E20]">Selesai 3 Hari</h3>
                  <p className="text-xs text-[#1D1E20]/90">Kerja cepat dan efisien</p>
                </div>
              </div>
              
              <div className="flex items-start gap-2">
                <Shield 
                  className="text-[#180D39] flex-shrink-0 mt-0.5" 
                  size={18} 
                  aria-hidden="true"
                  focusable="false"
                />
                <div>
                  <h3 className="text-xs font-semibold text-[#1D1E20]">Garansi 100%</h3>
                  <p className="text-xs text-[#1D1E20]/60">Uang kembali</p>
                </div>
              </div>
              
              <div className="flex items-start gap-2">
                <CheckCircle 
                  className="text-[#2A8E9E] flex-shrink-0 mt-0.5" 
                  size={18} 
                  aria-hidden="true"
                  focusable="false"
                />
                <div>
                  <h3 className="text-xs font-semibold text-[#1D1E20]">20+ UMKM Puas</h3>
                  <p className="text-xs text-[#1D1E20]/60">Rating 4.9 dari 5</p>
                </div>
              </div>
              
              <div className="flex items-start gap-2">
                <Clock 
                  className="text-[#180D39] flex-shrink-0 mt-0.5" 
                  size={18} 
                  aria-hidden="true"
                  focusable="false"
                />
                <div>
                  <h3 className="text-xs font-semibold text-[#1D1E20]">Support 24/7</h3>
                  <p className="text-xs text-[#1D1E20]/60">Via WhatsApp</p>
                </div>
              </div>
            </div>

            {/* CTA Buttons */}
            <nav aria-label="Aksi utama">
              <div className="flex flex-col sm:flex-row gap-3 pt-2">
                <a
                  href="https://wa.me/6283822640883?text=Halo%20Yaumul%2C%20saya%20pelaku%20UMKM%20mau%20konsultasi%20pembuatan%20website%20untuk%20usaha%20saya.%20Bisa%20bantu%3F"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group relative bg-[#2A8E9E] hover:bg-[#180D39] text-white px-6 py-3.5 rounded-xl font-bold text-sm transition-all duration-300 flex items-center justify-center gap-2 active:scale-95 hover:shadow-2xl hover:shadow-[#2A8E9E]/20 overflow-hidden focus:outline-none focus:ring-4 focus:ring-[#2A8E9E]/50 focus:ring-offset-2"
                  aria-label="Konsultasi gratis via WhatsApp - buka di tab baru"
                >
                  <span className="relative z-10 flex items-center gap-2">
                    Konsultasi Gratis Sekarang
                    <ArrowRight 
                      size={18} 
                      className="group-hover:translate-x-1 transition-transform" 
                      aria-hidden="true"
                      focusable="false"
                    />
                  </span>
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000" aria-hidden="true"></div>
                </a>

                <button
                  onClick={scrollToPricing}
                  type="button"
                  className="group border-2 border-[#2A8E9E] text-[#1D1E20] hover:border-[#180D39] hover:bg-[#2A8E9E]/5 px-6 py-3.5 rounded-xl font-semibold text-sm transition-all duration-300 active:scale-95 flex items-center justify-center gap-2 focus:outline-none focus:ring-4 focus:ring-[#2A8E9E]/50 focus:ring-offset-2"
                  aria-label="Lihat paket dan harga, mulai dari 799 ribu rupiah"
                >
                  <span>Lihat Paket & Harga</span>
                  <span className="text-xs font-normal opacity-80" aria-label="harga mulai">(Mulai 799rb)</span>
                </button>
              </div>
            </nav>

            {/* Trust Indicators */}
            <aside aria-labelledby="trust-heading" className="pt-5 border-t border-[#1D1E20]/10">
              <h2 id="trust-heading" className="sr-only">Kepercayaan Klien</h2>
              
              {/* Mobile Grid */}
              <div className="grid grid-cols-2 gap-3 sm:hidden">
                <div className="flex items-center gap-1.5 text-xs">
                  <span className="text-green-600 font-semibold" aria-hidden="true">✓</span>
                  <span className="font-medium text-[#1D1E20]">20+ UMKM</span>
                </div>
                <div className="flex items-center gap-1.5 text-xs">
                  <span role="img" aria-label="rating" aria-hidden="true">⭐</span>
                  <span className="font-medium text-[#1D1E20]">Rating 4.9</span>
                </div>
                <div className="flex items-center gap-1.5 text-xs">
                  <span role="img" aria-label="garansi" aria-hidden="true">💰</span>
                  <span className="font-medium text-[#1D1E20]">Garansi</span>
                </div>
                <div className="flex items-center gap-1.5 text-xs">
                  <span role="img" aria-label="cepat" aria-hidden="true">⚡</span>
                  <span className="font-medium text-[#1D1E20]">Respons Cepat</span>
                </div>
              </div>

              {/* Desktop List */}
              <ul className="hidden sm:flex flex-wrap items-center gap-x-5 gap-y-2 text-xs text-[#1D1E20]/70 list-none">
                <li className="flex items-center gap-1.5">
                  <span className="text-green-600 font-semibold" aria-hidden="true">✓</span>
                  <span className="font-medium text-[#1D1E20]">Dipercaya 20+ UMKM</span>
                </li>
                <li className="w-px h-4 bg-[#1D1E20]/20" aria-hidden="true"></li>
                <li className="flex items-center gap-1.5">
                  <span role="img" aria-label="rating" aria-hidden="true">⭐</span>
                  <span className="font-medium text-[#1D1E20]">Rating 4.9 dari 5</span>
                </li>
                <li className="w-px h-4 bg-[#1D1E20]/20" aria-hidden="true"></li>
                <li className="flex items-center gap-1.5">
                  <span role="img" aria-label="garansi" aria-hidden="true">💰</span>
                  <span className="font-medium text-[#1D1E20]">Garansi Uang Kembali</span>
                </li>
                <li className="w-px h-4 bg-[#1D1E20]/20" aria-hidden="true"></li>
                <li className="flex items-center gap-1.5">
                  <span role="img" aria-label="cepat" aria-hidden="true">⚡</span>
                  <span className="font-medium text-[#1D1E20]">Respons Cepat</span>
                </li>
              </ul>
            </aside>
          </div>

          {/* Right - Image & Stats */}
          <div
            className={`transition-all duration-1000 delay-300 ${
              isVisible ? "opacity-100 translate-y-0 scale-100" : "opacity-0 translate-y-8 scale-95"
            }`}
          >
            {/* Main Image */}
            <figure className="relative aspect-[4/3] group rounded-2xl overflow-hidden shadow-2xl border border-[#2A8E9E]/20 bg-[#2A8E9E]/5">
              <Image
                src="/project-hero.webp"
                alt="Tampilan contoh website UMKM profesional dengan desain modern, responsif, dan user-friendly yang dibuat oleh tim kami"
                fill
                className="object-cover group-hover:scale-110 transition-transform duration-[3000ms] ease-out"
                priority
                loading="eager"
                sizes="(max-width: 768px) 100vw, 50vw"
                quality={75}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#180D39]/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" aria-hidden="true"></div>
            </figure>

            {/* Stats Grid */}
            <aside aria-labelledby="stats-heading">
              <h2 id="stats-heading" className="sr-only">Statistik Layanan Kami</h2>
              <dl className="mt-4 grid grid-cols-3 gap-2 sm:gap-3">
                <div className="text-center p-2.5 sm:p-3 bg-white rounded-lg border border-[#2A8E9E]/20 hover:border-[#2A8E9E]/40 transition-all shadow-sm">
                  <dt className="sr-only">Jumlah Website Live</dt>
                  <dd className="text-xl sm:text-2xl font-bold text-[#1D1E20]" aria-label="20 plus">20+</dd>
                  <dt className="text-[10px] sm:text-xs text-[#1D1E20]/60 mt-0.5">Website Live</dt>
                </div>
                <div className="text-center p-2.5 sm:p-3 bg-white rounded-lg border border-[#2A8E9E]/20 hover:border-[#2A8E9E]/40 transition-all shadow-sm">
                  <dt className="sr-only">Waktu Pengerjaan Rata-rata</dt>
                  <dd className="text-xl sm:text-2xl font-bold text-[#1D1E20]">3 Hari</dd>
                  <dt className="text-[10px] sm:text-xs text-[#1D1E20]/60 mt-0.5">Rata-rata</dt>
                </div>
                <div className="text-center p-2.5 sm:p-3 bg-white rounded-lg border border-[#2A8E9E]/20 hover:border-[#2A8E9E]/40 transition-all shadow-sm">
                  <dt className="sr-only">Tingkat Kepuasan Klien</dt>
                  <dd className="text-xl sm:text-2xl font-bold text-[#1D1E20]">100%</dd>
                  <dt className="text-[10px] sm:text-xs text-[#1D1E20]/60 mt-0.5">Client Puas</dt>
                </div>
              </dl>
            </aside>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 animate-bounce" aria-hidden="true">
          <div className="flex flex-col items-center gap-2">
            <span className="text-xs text-[#1D1E20]/50">Scroll untuk info lebih</span>
            <ChevronDown className="text-[#2A8E9E]" size={24} focusable="false" />
          </div>
        </div>
      </div>
    </section>
  )
}