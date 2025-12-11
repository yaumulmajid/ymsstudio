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

  return (
    <section
      id="home"
      ref={sectionRef}
      className="relative min-h-screen pt-7 bg-white flex items-center overflow-hidden"
    >
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-72 h-72 bg-[#2A8E9E]/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-[#180D39]/5 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>

      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 py-20 w-full relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left */}
          <div
            className={`space-y-6 transition-all duration-1000 ${
              isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-12"
            }`}
          >
            <div className="inline-flex items-center gap-2 bg-gradient-to-r from-[#2A8E9E]/10 to-[#180D39]/10 backdrop-blur-sm text-[#1D1E20] px-4 py-2 rounded-full text-xs font-semibold border border-[#2A8E9E]/30 hover:border-[#2A8E9E]/50 transition-all duration-300 shadow-sm">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#2A8E9E] opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-[#2A8E9E]"></span>
              </span>
              🔥 Promo: Diskon 30% + Gratis Domain & Hosting
            </div>

            <div className="space-y-3">
              <h1 className="text-3xl md:text-3xl lg:text-5xl font-bold text-[#1D1E20] leading-[1.1] tracking-tight">
                Website UMKM Profesional{" "}
                <span className="bg-gradient-to-r from-[#2A8E9E] to-[#180D39] bg-clip-text text-transparent">
                  Harga Terjangkau
                </span>
              </h1>
              <div className="h-1 w-20 bg-gradient-to-r from-[#2A8E9E] to-transparent rounded-full"></div>
            </div>

            <p className="text-base md:text-m text-[#1D1E20]/70 leading-relaxed max-w-xl">
              Website <strong className="text-[#1D1E20]">cepat & mobile-friendly</strong> untuk UMKM.
              Dari landing page hingga toko online dengan{" "}
              <strong className="text-[#1D1E20]">WordPress atau Custom Development</strong>.
              <strong className="text-[#1D1E20]"> Selesai 3 hari</strong>, bergaransi.
            </p>

            <div className="grid grid-cols-2 gap-3 py-2">
              <div className="flex items-start gap-2">
                <Zap className="text-[#2A8E9E] flex-shrink-0 mt-0.5" size={18} />
                <div>
                  <p className="text-xs font-semibold text-[#1D1E20]">Selesai 3 Hari</p>
                  <p className="text-xs text-[#1D1E20]/60">Kerja cepat & efisien</p>
                </div>
              </div>
              <div className="flex items-start gap-2">
                <Shield className="text-[#180D39] flex-shrink-0 mt-0.5" size={18} />
                <div>
                  <p className="text-xs font-semibold text-[#1D1E20]">Garansi 100%</p>
                  <p className="text-xs text-[#1D1E20]/60">Uang kembali</p>
                </div>
              </div>
              <div className="flex items-start gap-2">
                <CheckCircle className="text-[#2A8E9E] flex-shrink-0 mt-0.5" size={18} />
                <div>
                  <p className="text-xs font-semibold text-[#1D1E20]">20+ UMKM Puas</p>
                  <p className="text-xs text-[#1D1E20]/60">Rating 4.9/5</p>
                </div>
              </div>
              <div className="flex items-start gap-2">
                <Clock className="text-[#180D39] flex-shrink-0 mt-0.5" size={18} />
                <div>
                  <p className="text-xs font-semibold text-[#1D1E20]">Support 24/7</p>
                  <p className="text-xs text-[#1D1E20]/60">Via WhatsApp</p>
                </div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-3 pt-2">
              <a
                href="https://wa.me/6283822640883?text=Halo%20Yaumul%2C%20saya%20pelaku%20UMKM%20mau%20konsultasi%20pembuatan%20website%20untuk%20usaha%20saya.%20Bisa%20bantu%3F"
                target="_blank"
                rel="noopener noreferrer"
                className="group relative bg-[#2A8E9E] hover:bg-[#180D39] text-white px-6 py-3.5 rounded-xl font-semibold text-sm transition-all duration-300 flex items-center justify-center gap-2 active:scale-95 hover:shadow-2xl hover:shadow-[#2A8E9E]/20 overflow-hidden"
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
                className="group border-2 border-[#2A8E9E] text-[#1D1E20] hover:border-[#180D39] hover:bg-[#2A8E9E]/5 px-6 py-3.5 rounded-xl font-semibold text-sm transition-all duration-300 active:scale-95 flex items-center justify-center gap-2"
              >
                Lihat Paket & Harga
                <span className="text-xs font-normal opacity-70">(Mulai 799rb)</span>
              </button>
            </div>

            <div className="pt-5 border-t border-[#1D1E20]/10">
              <div className="grid grid-cols-2 gap-3 sm:hidden">
                <div className="flex items-center gap-1.5 text-xs">
                  <span className="text-green-600 font-semibold">✓</span>
                  <span className="font-medium text-[#1D1E20]">20+ UMKM</span>
                </div>
                <div className="flex items-center gap-1.5 text-xs">
                  <span>⭐</span>
                  <span className="font-medium text-[#1D1E20]">Rating 4.9</span>
                </div>
                <div className="flex items-center gap-1.5 text-xs">
                  <span>💰</span>
                  <span className="font-medium text-[#1D1E20]">Garansi</span>
                </div>
                <div className="flex items-center gap-1.5 text-xs">
                  <span>⚡</span>
                  <span className="font-medium text-[#1D1E20]">Respons Cepat</span>
                </div>
              </div>

              <div className="hidden sm:flex flex-wrap items-center gap-x-5 gap-y-2 text-xs text-[#1D1E20]/70">
                <div className="flex items-center gap-1.5">
                  <span className="text-green-600 font-semibold">✓</span>
                  <span className="font-medium text-[#1D1E20]">Dipercaya 20+ UMKM</span>
                </div>
                <div className="w-px h-4 bg-[#1D1E20]/20"></div>
                <div className="flex items-center gap-1.5">
                  <span>⭐</span>
                  <span className="font-medium text-[#1D1E20]">Rating 4.9/5</span>
                </div>
                <div className="w-px h-4 bg-[#1D1E20]/20"></div>
                <div className="flex items-center gap-1.5">
                  <span>💰</span>
                  <span className="font-medium text-[#1D1E20]">Garansi Uang Kembali</span>
                </div>
                <div className="w-px h-4 bg-[#1D1E20]/20"></div>
                <div className="flex items-center gap-1.5">
                  <span>⚡</span>
                  <span className="font-medium text-[#1D1E20]">Respons Cepat</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right */}
          <div
            className={`transition-all duration-1000 delay-300 ${
              isVisible ? "opacity-100 translate-y-0 scale-100" : "opacity-0 translate-y-8 scale-95"
            }`}
          >
            <div className="relative aspect-[4/3] group rounded-2xl overflow-hidden shadow-2xl border border-[#2A8E9E]/20 bg-[#2A8E9E]/5">
              <Image
                src="/project-hero.webp"
                alt="Contoh Website UMKM Profesional"
                fill
                className="object-cover group-hover:scale-110 transition-transform duration-[3000ms] ease-out"
                priority
                sizes="(max-width: 768px) 100vw, 50vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#180D39]/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            </div>

            <div className="mt-4 grid grid-cols-3 gap-2 sm:gap-3">
              <div className="text-center p-2.5 sm:p-3 bg-white rounded-lg border border-[#2A8E9E]/20 hover:border-[#2A8E9E]/40 transition-all shadow-sm">
                <p className="text-xl sm:text-2xl font-bold text-[#1D1E20]">20+</p>
                <p className="text-[10px] sm:text-xs text-[#1D1E20]/60 mt-0.5">Website Live</p>
              </div>
              <div className="text-center p-2.5 sm:p-3 bg-white rounded-lg border border-[#2A8E9E]/20 hover:border-[#2A8E9E]/40 transition-all shadow-sm">
                <p className="text-xl sm:text-2xl font-bold text-[#1D1E20]">3 Hari</p>
                <p className="text-[10px] sm:text-xs text-[#1D1E20]/60 mt-0.5">Rata-rata</p>
              </div>
              <div className="text-center p-2.5 sm:p-3 bg-white rounded-lg border border-[#2A8E9E]/20 hover:border-[#2A8E9E]/40 transition-all shadow-sm">
                <p className="text-xl sm:text-2xl font-bold text-[#1D1E20]">100%</p>
                <p className="text-[10px] sm:text-xs text-[#1D1E20]/60 mt-0.5">Client Puas</p>
              </div>
            </div>
          </div>
        </div>

        <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="flex flex-col items-center gap-2">
            <span className="text-xs text-[#1D1E20]/50">Scroll untuk info lebih</span>
            <ChevronDown className="text-[#2A8E9E]" size={24} />
          </div>
        </div>
      </div>
    </section>
  )
}
