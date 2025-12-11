"use client"

import { useEffect, useRef, useState } from "react"
import { ArrowRight } from "lucide-react"

export default function CTA() {
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.1 },
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  return (
    <section ref={sectionRef} className="relative py-16 md:py-24 bg-white overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-r from-[#2A8E9E]/3 via-transparent to-[#2A8E9E]/3"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full h-full max-w-4xl max-h-96 bg-gradient-to-r from-[#2A8E9E]/5 to-[#180D39]/5 rounded-full blur-3xl animate-pulse"></div>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div
          className={`text-center transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
        >
          <h2 className="text-3xl md:text-4xl lg:text-4xl font-bold text-[#1D1E20] mb-4">
            Siap Meningkatkan
            <br />
            <span className="text-[#1D1E20]/70">Kehadiran Digital Anda?</span>
          </h2>
          <p className="text-base md:text-lg text-[#1D1E20]/60 max-w-2xl mx-auto mb-8">
            Mari ciptakan sesuatu yang luar biasa bersama. Hubungi saya untuk mendiskusikan proyek Anda dan bagaimana
            saya dapat membantu.
          </p>

          <div className="flex flex-col sm:flex-row gap-3 justify-center items-center">
            <a
              href="https://wa.me/6283822640883?text=Halo%2C%20saya%20ingin%20konsultasi%20tentang%20website"
              target="_blank"
              rel="noopener noreferrer"
              className="group bg-[#2A8E9E] hover:bg-[#180D39] text-white px-6 py-3 rounded-lg font-medium text-sm transition-all duration-300 flex items-center gap-2 active:scale-95 hover:shadow-lg"
            >
              Hubungi via WhatsApp
              <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </a>
            <button
              onClick={() => {
                const element = document.getElementById("pricing")
                if (element) element.scrollIntoView({ behavior: "smooth" })
              }}
              className="border-2 border-[#2A8E9E]/30 text-[#1D1E20] hover:border-[#2A8E9E] hover:bg-[#2A8E9E]/5 px-6 py-3 rounded-lg font-medium text-sm transition-all duration-300 active:scale-95"
            >
              Lihat Paket
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}