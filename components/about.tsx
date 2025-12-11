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
    <section 
      id="about" 
      ref={sectionRef} 
      className="py-10 pt-5 bg-white relative overflow-hidden"
      aria-labelledby="about-heading"
    >
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none" aria-hidden="true">
        <div className="absolute top-20 right-10 w-72 h-72 bg-[#1F6B77]/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 left-10 w-96 h-96 bg-[#0C0721]/5 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>

      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <header className={`text-center mb-16 transition-all duration-1000 ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
        }`}>
          <div 
            className="inline-flex items-center gap-1 bg-[#1F6B77]/10 backdrop-blur-sm text-[#0F0F10] px-3 py-1.5 rounded-full text-xs font-medium border border-[#1F6B77]/30 hover:border-[#1F6B77]/50 transition"
            role="status"
          >
            <span className="w-2 h-2 bg-[#1F6B77] rounded-full animate-pulse" aria-hidden="true"></span>
            <span>About me</span>
          </div>
        </header>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          
          {/* Profile Card */}
          <div className={`transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-12"
          }`}>
            <article className="bg-white border border-[#1F6B77]/20 rounded-2xl p-8 shadow-lg hover:shadow-xl transition relative overflow-hidden">
              {/* Decorative background */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-[#1F6B77]/5 rounded-full blur-2xl" aria-hidden="true"></div>
              <div className="absolute bottom-0 left-0 w-24 h-24 bg-[#0C0721]/5 rounded-full blur-2xl" aria-hidden="true"></div>
              
              <div className="flex flex-col items-center relative z-10">
                {/* Profile Photo */}
                <figure className="relative mb-6 group">
                  <div className="w-56 h-56 rounded-full overflow-hidden ring-4 ring-[#1F6B77]/10">
                    <Image
                      src="/myFoto.webp"
                      alt="Foto profil Yaumul Majid - Web Developer untuk UMKM"
                      width={224}
                      height={224}
                      className="object-cover rounded-full"
                      priority
                    />
                  </div>

                  {/* Status Badge */}
                  <div 
                    className="absolute -bottom-2 left-1/2 -translate-x-1/2 bg-[#1F6B77] text-white px-3 py-1 rounded-full text-xs font-medium shadow-lg flex items-center gap-1.5 group-hover:scale-105 transition"
                    role="status"
                    aria-label="Status: Tersedia untuk proyek baru"
                  >
                    <span className="w-1.5 h-1.5 bg-white rounded-full animate-pulse" aria-hidden="true"></span>
                    <span>Available for Projects</span>
                  </div>
                </figure>

                {/* Stats Grid */}
                <dl className="grid grid-cols-3 gap-4 w-full mb-6 pt-2">
                  <div className="text-center">
                    <dt className="sr-only">Pengalaman</dt>
                    <dd className="text-xl font-bold text-[#0F0F10]">3+</dd>
                    <dt className="text-xs text-[#404040]">Tahun</dt>
                  </div>

                  <div className="text-center border-x border-[#1F6B77]/20">
                    <dt className="sr-only">Jumlah Proyek</dt>
                    <dd className="text-xl font-bold text-[#0F0F10]">20+</dd>
                    <dt className="text-xs text-[#404040]">Proyek</dt>
                  </div>

                  <div className="text-center">
                    <dt className="sr-only">Jumlah Klien</dt>
                    <dd className="text-xl font-bold text-[#0F0F10]">20+</dd>
                    <dt className="text-xs text-[#404040]">Klien</dt>
                  </div>
                </dl>
              </div>
            </article>
          </div>

          {/* Content Section */}
          <div className={`space-y-6 transition-all duration-1000 delay-200 ${
            isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-12"
          }`}>
            <h2 id="about-heading" className="text-3xl md:text-4xl font-bold text-[#0F0F10] leading-tight">
              <span role="img" aria-label="Hai">👋</span> Hai! Saya Yaumul Majid
            </h2>

            <p className="text-sm md:text-base text-[#404040] leading-relaxed">
              Web Developer yang membantu UMKM dan Startup tampil profesional di dunia digital dengan website yang modern dan efektif.
            </p>

            <div className="space-y-4 pt-2">
              <p className="text-sm md:text-base text-[#404040] leading-relaxed">
                Dengan pengalaman <strong className="text-[#0F0F10] font-semibold">3+ tahun</strong> membangun website untuk puluhan bisnis, saya tahu cara membuat website yang tidak hanya bagus dilihat, tapi juga efektif mendatangkan pelanggan.
              </p>

              <p className="text-sm md:text-base text-[#404040] leading-relaxed">
                Saya menggunakan <strong className="text-[#0F0F10] font-semibold">WordPress</strong> untuk solusi cepat, dan <strong className="text-[#0F0F10] font-semibold">Custom Development</strong> (Spring Boot, Laravel) untuk kebutuhan yang lebih spesifik.
              </p>
            </div>

            {/* Features List */}
            <div className="grid grid-cols-2 gap-3 pt-3" role="list" aria-label="Keunggulan layanan">
              {[
                { text: "Desain Profesional", icon: "✓" },
                { text: "Mobile Friendly", icon: "✓" },
                { text: "SEO Optimized", icon: "✓" },
                { text: "Support Penuh", icon: "✓" },
              ].map((item, i) => (
                <div key={i} className="flex items-start gap-2" role="listitem">
                  <span 
                    className="text-[#1F6B77] mt-0.5 font-bold" 
                    aria-hidden="true"
                  >
                    {item.icon}
                  </span>
                  <span className="text-sm text-[#404040]">{item.text}</span>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}