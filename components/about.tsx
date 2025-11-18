"use client"

import { useEffect, useRef, useState } from "react"
import Image from "next/image"

export default function About() {
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => entry.isIntersecting && setIsVisible(true),
      { threshold: 0.2 }
    )

    if (sectionRef.current) observer.observe(sectionRef.current)
    return () => observer.disconnect()
  }, [])

  return (
    <section id="about" ref={sectionRef} className="py-20 bg-background relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 right-10 w-72 h-72 bg-foreground/5 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 left-10 w-96 h-96 bg-foreground/5 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className={`text-center mb-16 transition-all duration-1000 ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
        }`}>
          <div className="inline-flex items-center gap-3 bg-foreground/5 backdrop-blur-sm text-foreground px-3 py-1.5 rounded-full text-xs font-medium border border-foreground/10 hover:border-foreground/20 transition-all duration-300 mb-4">
            <span className="w-2 h-2 bg-foreground rounded-full animate-pulse"></span>
            About Me
          </div>

          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4 leading-tight">
            👋 Hai! Saya Yaumul Majid
          </h2>

          <p className="text-sm md:text-base text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Web Developer yang membantu UMKM & Startup tampil profesional di dunia digital dengan website yang modern dan efektif.
          </p>
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          
          {/* Profile Card (kiri) - Improved Design */}
          <div className={`transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-12"
          }`}>
            <div className="bg-card border border-foreground/10 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 relative overflow-hidden">
              {/* Decorative background elements */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-foreground/5 rounded-full blur-2xl"></div>
              <div className="absolute bottom-0 left-0 w-24 h-24 bg-foreground/5 rounded-full blur-2xl"></div>
              
              <div className="flex flex-col items-center text-center relative z-10">
                {/* Photo with badge */}
                <div className="relative mb-6 group">
                <div className="w-56 h-56 rounded-full bg-foreground/10 mb-6 overflow-hidden relative">
                  <Image
                    src="/myFoto.webp"
                    alt="Yaumul Majid"
                    fill
                    className="object-cover"
                  />
                </div>
                  {/* Available badge - smaller */}
                  <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 bg-green-500 text-white px-3 py-1 rounded-full text-xs font-medium shadow-lg flex items-center gap-1.5 transition-all duration-300 group-hover:scale-105">
                    <span className="w-1.5 h-1.5 bg-white rounded-full animate-pulse"></span>
                    Available for Projects
                  </div>
                </div>

                {/* Stats Grid with hover */}
                <div className="grid grid-cols-3 gap-4 w-full mb-6 pt-2">
                  <div className="text-center group cursor-default transition-all duration-300 hover:transform hover:-translate-y-1">
                    <p className="text-1xl font-bold text-foreground group-hover:text-foreground/80 transition-colors">3+</p>
                    <p className="text-xs text-muted-foreground">Years</p>
                  </div>
                  <div className="text-center border-x border-foreground/10 group cursor-default transition-all duration-300 hover:transform hover:-translate-y-1">
                    <p className="text-1xl font-bold text-foreground group-hover:text-foreground/80 transition-colors">50+</p>
                    <p className="text-xs text-muted-foreground">Projects</p>
                  </div>
                  <div className="text-center group cursor-default transition-all duration-300 hover:transform hover:-translate-y-1">
                    <p className="text-1xl font-bold text-foreground group-hover:text-foreground/80 transition-colors">30+</p>
                    <p className="text-xs text-muted-foreground">Clients</p>
                  </div>
                </div>

                {/* Social Links with better hover */}
                <div className="flex items-center gap-3 pt-4 border-t border-foreground/10 w-full justify-center">
                  <a 
                    href="https://wa.me/6283822640883" 
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 rounded-full bg-foreground/5 hover:bg-green-500 flex items-center justify-center transition-all duration-300 hover:scale-110 group"
                    aria-label="WhatsApp"
                  >
                    <svg className="w-5 h-5 text-foreground group-hover:text-white transition-colors" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                    </svg>
                  </a>
                  <a 
                    href="mailto:yaumulmajid@mail.com"
                    className="w-10 h-10 rounded-full bg-foreground/5 hover:bg-blue-500 flex items-center justify-center transition-all duration-300 hover:scale-110 group"
                    aria-label="Email"
                  >
                    <svg className="w-5 h-5 text-foreground group-hover:text-white transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </a>
                  <a 
                    href="https://linkedin.com/in/yaumulmajidd"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 rounded-full bg-foreground/5 hover:bg-blue-600 flex items-center justify-center transition-all duration-300 hover:scale-110 group"
                    aria-label="LinkedIn"
                  >
                    <svg className="w-5 h-5 text-foreground group-hover:text-white transition-colors" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Text (kanan) */}
          <div className={`flex flex-col justify-center space-y-5 transition-all duration-1000 delay-300 ${
            isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-12"
          }`}>
            <div className="space-y-4">
              <p className="text-sm md:text-base text-muted-foreground leading-relaxed">
                Dengan pengalaman 3+ tahun membangun website untuk puluhan bisnis, saya tahu persis apa yang dibutuhkan 
                untuk membuat website yang tidak hanya bagus dilihat, tapi juga efektif untuk mendatangkan pelanggan.
              </p>

              <p className="text-sm md:text-base text-muted-foreground leading-relaxed">
                Saya menggunakan <strong>WordPress</strong> untuk solusi cepat dan praktis, atau 
                <strong> Custom Development (Java Springboot, Laravel)</strong> untuk kebutuhan yang lebih spesifik. 
                Apapun pilihannya, hasilnya pasti optimal dan sesuai budget Anda.
              </p>
            </div>

            {/* Feature List */}
            <div className="grid grid-cols-2 gap-3 pt-2">
              <div className="flex items-start gap-2">
                <span className="text-foreground mt-0.5">✓</span>
                <span className="text-sm text-muted-foreground">Desain Profesional</span>
              </div>
              <div className="flex items-start gap-2">
                <span className="text-foreground mt-0.5">✓</span>
                <span className="text-sm text-muted-foreground">Mobile Friendly</span>
              </div>
              <div className="flex items-start gap-2">
                <span className="text-foreground mt-0.5">✓</span>
                <span className="text-sm text-muted-foreground">Loading Cepat</span>
              </div>
              <div className="flex items-start gap-2">
                <span className="text-foreground mt-0.5">✓</span>
                <span className="text-sm text-muted-foreground">SEO Optimized</span>
              </div>
              <div className="flex items-start gap-2">
                <span className="text-foreground mt-0.5">✓</span>
                <span className="text-sm text-muted-foreground">Keamanan Terjamin</span>
              </div>
              <div className="flex items-start gap-2">
                <span className="text-foreground mt-0.5">✓</span>
                <span className="text-sm text-muted-foreground">Support Penuh</span>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}