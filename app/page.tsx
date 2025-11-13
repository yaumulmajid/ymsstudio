"use client"

import Header from "@/components/header"
import Hero from "@/components/hero"
import Services from "@/components/services"
import Projects from "@/components/projects"
import Pricing from "@/components/pricing"
import CTA from "@/components/cta"
import Footer from "@/components/footer"
import { useEffect, useState } from "react"

export default function Home() {
  const [isDark, setIsDark] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    // Cek tema tersimpan atau gunakan preferensi sistem
    const saved = localStorage.getItem("theme")
    const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches
    const isDarkMode = saved ? saved === "dark" : prefersDark

    setIsDark(isDarkMode)
    applyTheme(isDarkMode)

    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const applyTheme = (dark: boolean) => {
    if (dark) {
      document.documentElement.classList.add("dark")
    } else {
      document.documentElement.classList.remove("dark")
    }
  }

  const toggleTheme = () => {
    const newIsDark = !isDark
    setIsDark(newIsDark)
    applyTheme(newIsDark)
    localStorage.setItem("theme", newIsDark ? "dark" : "light")
  }

  return (
    <div className="overflow-x-hidden bg-background text-foreground transition-colors duration-300">
      <Header isScrolled={isScrolled} isDark={isDark} toggleTheme={toggleTheme} />
      <Hero />
      <Services />
      <Projects />
      <Pricing />
      <CTA />
      <Footer />
    </div>
  )
}
