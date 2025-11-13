"use client"

import { useEffect, useRef, useState } from "react"
import Image from "next/image"
import { ChevronDown, ArrowRight } from "lucide-react"

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
      className="relative min-h-screen bg-background pt-20 flex items-center overflow-hidden"
    >
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-72 h-72 bg-foreground/5 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-foreground/5 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 w-full relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          {/* Left Content */}
          <div
            className={`space-y-4 transition-all duration-1000 ${
              isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-12"
            }`}
          >
            {/* Badge */}
            <div className="inline-flex items-center gap-3 bg-foreground/5 backdrop-blur-sm text-foreground px-3 py-1.5 rounded-full text-xs font-medium border border-foreground/10 hover:border-foreground/20 transition-all duration-300">
              <span className="w-2 h-2 bg-foreground rounded-full animate-pulse"></span>
              Jasa Website UMKM & Custom Development
            </div>

            {/* Main Headline */}
            <div className="space-y-2">
              <h1 className="text-4xl md:text-5xl font-bold text-foreground leading-tight text-balance">
                Solusi Website Profesional
                <br />
                <span className="text-foreground/90">Untuk Bisnis Anda</span>
              </h1>
            </div>

            {/* Subheading */}
            <p className="text-sm md:text-base text-muted-foreground max-w-xl leading-relaxed">
              Saya menyediakan layanan pembuatan website berbasis <strong>WordPress</strong> maupun
              <strong> Custom Development</strong>.  
              Cocok untuk UMKM, startup, hingga brand yang ingin tampil profesional dan kredibel di dunia digital.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-2 pt-3">
              <a
                href="https://wa.me/6283822640883?text=Halo%2C%20saya%20tertarik%20dengan%20jasa%20pembuatan%20website%20custom%20untuk%20bisnis%20saya"
                target="_blank"
                rel="noopener noreferrer"
                className="group bg-foreground hover:bg-foreground/90 text-background px-5 py-2.5 rounded-lg font-medium text-xs transition-all duration-300 flex items-center justify-center gap-2 active:scale-95 hover:shadow-lg"
              >
                Konsultasi Gratis
                <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
              </a>
              <button
                onClick={() => {
                  const element = document.getElementById("pricing")
                  if (element) element.scrollIntoView({ behavior: "smooth" })
                }}
                className="border-2 border-foreground/20 text-foreground hover:border-foreground hover:bg-foreground/5 px-5 py-2.5 rounded-lg font-medium text-xs transition-all duration-300 active:scale-95"
              >
                Lihat Paket
              </button>
            </div>
          </div>

          {/* Right Visual — replaced with image */}
          <div
            className={`transition-all duration-1000 delay-300 ${
              isVisible ? "opacity-100 translate-y-0 scale-100" : "opacity-0 translate-y-8 scale-95"
            }`}
          >
            <div className="relative h-72 md:h-96 group rounded-2xl overflow-hidden shadow-xl border border-foreground/10 dark:border-foreground/20">
              <Image
                src="/project-hero.webp"
                alt="Contoh Website UMKM"
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-[2000ms] ease-out"
                priority
              />
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-1 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ChevronDown className="text-foreground opacity-50" size={20} />
        </div>
      </div>
    </section>
  )
}
