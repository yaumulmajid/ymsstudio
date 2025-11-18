"use client"

import { useEffect, useRef, useState } from "react"
import { Code2, Smartphone, Zap } from "lucide-react"

const services = [
  {
    icon: Code2,
    title: "Pengembangan Web",
    description:
      "Website modern, responsif, dan berkinerja tinggi yang dibangun dengan teknologi terkini untuk bisnis dari semua skala.",
  },
  {
    icon: Smartphone,
    title: "Konsultasi",
    description:
      "Membantu merencanakan strategi digital yang tepat dengan konsultasi mendalam tentang teknologi dan solusi terbaik untuk bisnis Anda.",
  },
  {
    icon: Zap,
    title: "Google Ads & Meta Ads",
    description:
      "Layanan pengelolaan iklan di Google dan Meta untuk meningkatkan jangkauan, traffic, dan konversi secara efektif untuk bisnis Anda.",
  },
]

export default function Services() {
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef<HTMLDivElement>(null)
  const [visibleCards, setVisibleCards] = useState<boolean[]>(Array(services.length).fill(false))

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
          services.forEach((_, index) => {
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

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  return (
    <section id="services" ref={sectionRef} className="relative py-16 md:py-24 bg-background overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/2 -left-96 w-96 h-96 bg-foreground/3 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 -right-96 w-96 h-96 bg-foreground/3 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-12">
          <div
            className={`inline-flex items-center gap-2 text-xs font-semibold text-foreground mb-3 transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}
          >
            <span className="w-2 h-2 bg-foreground rounded-full"></span>
            My Services
          </div>
          <h2
            className={`text-3xl md:text-4xl font-bold text-foreground mb-4 transition-all duration-700 delay-100 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}
          >
            Apa yang Saya Tawarkan
          </h2>
          <p
            className={`text-base text-muted-foreground max-w-2xl mx-auto transition-all duration-700 delay-200 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}
          >
            Solusi komprehensif untuk mewujudkan visi digital Anda dan mendorong hasil bisnis nyata.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {services.map((service, index) => {
            const Icon = service.icon
            return (
              <div
                key={index}
                className={`group relative transition-all duration-700 ${
                  visibleCards[index] ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                }`}
              >
                {/* Hover Gradient Background */}
                <div className="absolute inset-0 bg-gradient-to-br from-foreground/10 to-foreground/5 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl"></div>

                {/* Card */}
                <div className="relative bg-card border border-border/50 rounded-xl p-5 hover:border-foreground/20 transition-all duration-500 group-hover:shadow-lg group-hover:shadow-foreground/10">
                  {/* Icon */}
                  <div className="w-10 h-10 bg-gradient-to-br from-foreground/10 to-foreground/5 rounded-lg p-2 mb-4 group-hover:from-foreground/15 group-hover:to-foreground/10 transition-all duration-300">
                    <Icon className="w-6 h-6 text-foreground" strokeWidth={1.5} />
                  </div>

                  {/* Content */}
                  <h3 className="text-base font-bold text-foreground mb-2 group-hover:opacity-80 transition-opacity duration-300">
                    {service.title}
                  </h3>
                  <p className="text-xs text-muted-foreground leading-relaxed">{service.description}</p>

                  {/* Arrow */}
                  <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-all duration-300">
                    <div className="w-7 h-7 bg-foreground/10 rounded-lg flex items-center justify-center">
                      <svg
                        className="w-3.5 h-3.5 text-foreground"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}