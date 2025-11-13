"use client"

import { useEffect, useRef, useState } from "react"

interface PageTitleProps {
  subtitle?: string
  title: string
  description?: string
}

export function PageTitle({ subtitle, title, description }: PageTitleProps) {
  const [isVisible, setIsVisible] = useState(false)
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.2 },
    )

    if (ref.current) {
      observer.observe(ref.current)
    }

    return () => observer.disconnect()
  }, [])

  return (
    <div ref={ref} className="text-center space-y-4 mb-12">
      {subtitle && (
        <div
          className={`inline-flex items-center gap-2 bg-secondary text-primary px-4 py-2 rounded-full text-sm font-medium transition-all duration-500 ${isVisible ? "opacity-100 scale-100" : "opacity-0 scale-95"}`}
        >
          <span className="w-2 h-2 bg-primary rounded-full"></span>
          {subtitle}
        </div>
      )}
      <h2
        className={`text-4xl md:text-5xl font-bold text-foreground transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
      >
        {title}
      </h2>
      {description && (
        <p
          className={`text-lg text-muted-foreground max-w-2xl mx-auto transition-all duration-700 delay-100 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
        >
          {description}
        </p>
      )}
    </div>
  )
}
