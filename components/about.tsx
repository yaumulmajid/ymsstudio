"use client"

import { useEffect, useRef, useState } from "react"

export default function About() {
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.2 },
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  return (
    <section id="about" ref={sectionRef} className="py-16 md:py-24 bg-gradient-to-b from-background to-secondary">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Left Avatar with Decorative Elements */}
          <div
            className={`flex items-center justify-center transition-all duration-700 ${isVisible ? "opacity-100 scale-100" : "opacity-0 scale-95"}`}
          >
            <div className="relative w-64 h-64 md:w-80 md:h-80">
              {/* Animated Background */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-accent/20 rounded-3xl blur-2xl animate-pulse"></div>

              {/* Avatar Card */}
              <div className="relative bg-card border border-border rounded-3xl flex items-center justify-center h-full overflow-hidden hover:shadow-2xl transition-shadow duration-300">
                {/* Gradient Border Effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-primary/20 via-transparent to-accent/20 opacity-0 hover:opacity-100 transition-opacity duration-300"></div>

                {/* Avatar Placeholder */}
                <div className="relative z-10 text-center">
                  <div className="w-32 h-32 bg-gradient-to-br from-primary/30 to-accent/30 rounded-full flex items-center justify-center mx-auto mb-4 border-2 border-primary/20">
                    <svg className="w-20 h-20 text-primary" fill="currentColor" viewBox="0 0 20 20">
                      <path
                        fillRule="evenodd"
                        d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </div>
                  <p className="text-sm text-muted-foreground">Yaumul Majid</p>
                  <p className="text-xs text-muted-foreground">Web Developer</p>
                </div>

                {/* Decorative Line */}
                <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-primary via-accent to-primary"></div>
              </div>
            </div>
          </div>

          {/* Right Content */}
          <div
            className={`space-y-6 transition-all duration-700 delay-200 ${isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-8"}`}
          >
            {/* Badge */}
            <div className="inline-flex items-center gap-2 bg-secondary text-primary px-4 py-2 rounded-full text-sm font-medium">
              <span className="w-2 h-2 bg-primary rounded-full"></span>
              Tentang Saya
            </div>

            {/* Heading */}
            <h2 className="text-4xl md:text-5xl font-bold text-foreground leading-tight">Halo! Saya Yaumul Majid</h2>

            {/* Description */}
            <div className="space-y-4 text-muted-foreground">
              <p className="leading-relaxed text-lg">
                Saya adalah seorang developer fullstack yang passionate dalam menciptakan pengalaman digital yang luar
                biasa. Dengan pengalaman lebih dari 5 tahun, saya telah membantu ratusan klien mengembangkan bisnis
                mereka melalui teknologi modern.
              </p>
              <p className="leading-relaxed text-lg">
                Spesialisasi saya adalah React, Next.js, TypeScript, dan Node.js. Setiap project yang saya kerjakan
                selalu mengutamakan kualitas, performa, dan user experience terbaik. Saya percaya bahwa teknologi harus
                melayani manusia, bukan sebaliknya.
              </p>
            </div>

            {/* Contact Links */}
            <div className="space-y-2 pt-4">
              <div className="flex items-center gap-2">
                <span className="text-primary font-semibold">Email:</span>
                <a href="mailto:yaumul@mail.com" className="text-muted-foreground hover:text-primary transition-colors">
                  yaumul@mail.com
                </a>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-primary font-semibold">Phone:</span>
                <a href="tel:+6281234567890" className="text-muted-foreground hover:text-primary transition-colors">
                  +62 812 3456 7890
                </a>
              </div>
            </div>

            {/* CTA Button */}
            <button className="mt-6 bg-primary hover:bg-accent text-primary-foreground px-8 py-3 rounded-lg font-semibold transition-all duration-300 hover:shadow-lg hover:shadow-primary/20 active:scale-95">
              Download Resume
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
