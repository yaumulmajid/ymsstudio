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
    <section id="about" ref={sectionRef} className="py-20 bg-white relative overflow-hidden">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 right-10 w-72 h-72 bg-[#2A8E9E]/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 left-10 w-96 h-96 bg-[#180D39]/5 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>

      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className={`text-center mb-16 transition-all duration-1000 ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
        }`}>
          <div className="inline-flex items-center gap-1 bg-[#2A8E9E]/5 backdrop-blur-sm text-[#1D1E20] px-3 py-1.5 rounded-full text-xs font-medium border border-[#2A8E9E]/20 hover:border-[#2A8E9E]/40 transition mb-4">
            <span className="w-2 h-2 bg-[#2A8E9E] rounded-full animate-pulse"></span>
            About Me
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          
          <div className={`transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-12"
          }`}>
            <div className="bg-white border border-[#2A8E9E]/10 rounded-2xl p-8 shadow-lg hover:shadow-xl transition relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-[#2A8E9E]/5 rounded-full blur-2xl"></div>
              <div className="absolute bottom-0 left-0 w-24 h-24 bg-[#180D39]/5 rounded-full blur-2xl"></div>
              
              <div className="flex flex-col items-center relative z-10">
                <div className="relative mb-6 group">
                  <div className="w-56 h-56 rounded-full overflow-hidden">
                    <Image
                      src="/myFoto.webp"
                      alt="Yaumul Majid"
                      fill
                      className="object-cover rounded-full"
                    />
                  </div>

                  <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 bg-[#2A8E9E] text-white px-3 py-1 rounded-full text-xs font-medium shadow-lg flex items-center gap-1.5 group-hover:scale-105 transition">
                    <span className="w-1.5 h-1.5 bg-white rounded-full animate-pulse"></span>
                    Available for Projects
                  </div>
                </div>


                <div className="grid grid-cols-3 gap-4 w-full mb-6 pt-2">
                  <div className="text-center">
                    <p className="text-xl font-bold text-[#1D1E20]">3+</p>
                    <p className="text-xs text-[#1D1E20]/60">Years</p>
                  </div>

                  <div className="text-center border-x border-[#2A8E9E]/10">
                    <p className="text-xl font-bold text-[#1D1E20]">30+</p>
                    <p className="text-xs text-[#1D1E20]/60">Projects</p>
                  </div>

                  <div className="text-center">
                    <p className="text-xl font-bold text-[#1D1E20]">30+</p>
                    <p className="text-xs text-[#1D1E20]/60">Clients</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className={`space-y-6 transition-all duration-1000 delay-200 ${
            isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-12"
          }`}>
            <h2 className="text-3xl md:text-4xl font-bold text-[#1D1E20] leading-tight">
              👋 Hai! Saya Yaumul Majid
            </h2>

            <p className="text-sm md:text-base text-[#1D1E20]/70 leading-relaxed">
              Web Developer yang membantu UMKM & Startup tampil profesional di dunia digital dengan website yang modern dan efektif.
            </p>

            <div className="space-y-4 pt-2">
              <p className="text-sm md:text-base text-[#1D1E20]/70 leading-relaxed">
                Dengan pengalaman 3+ tahun membangun website untuk puluhan bisnis, saya tahu cara membuat website yang tidak hanya bagus dilihat, tapi juga efektif mendatangkan pelanggan.
              </p>

              <p className="text-sm md:text-base text-[#1D1E20]/70 leading-relaxed">
                Saya menggunakan <strong className="text-[#1D1E20]">WordPress</strong> untuk solusi cepat, dan <strong className="text-[#1D1E20]">Custom Development</strong> (Spring Boot, Laravel) untuk kebutuhan yang lebih spesifik.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-3 pt-3">
              {[
                "Desain Profesional",
                "Mobile Friendly",
                "SEO Optimized",
                "Support Penuh",
              ].map((item, i) => (
                <div key={i} className="flex items-start gap-2">
                  <span className="text-[#2A8E9E] mt-0.5">✓</span>
                  <span className="text-sm text-[#1D1E20]/70">{item}</span>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}