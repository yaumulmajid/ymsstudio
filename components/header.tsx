"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Menu, X, Moon, Sun } from "lucide-react"

interface HeaderProps {
  isScrolled: boolean
  isDark: boolean
  toggleTheme: () => void
}

export default function Header({ isScrolled, isDark, toggleTheme }: HeaderProps) {
  const [isOpen, setIsOpen] = useState(false)
  const [activeLink, setActiveLink] = useState("home")

  const navLinks = [
    { name: "Beranda", href: "#home" },
    { name: "Layanan", href: "#services" },
    { name: "Portfolio", href: "#portfolio" },
    { name: "Harga", href: "#pricing" },
    { name: "Hubungi", href: "#contact" },
  ]

  useEffect(() => {
    const handleScroll = () => {
      const sections = ["home", "services", "portfolio", "pricing", "contact"]
      const current = sections.find((section) => {
        const element = document.getElementById(section)
        if (element) {
          const rect = element.getBoundingClientRect()
          return rect.top <= 100 && rect.bottom >= 100
        }
        return false
      })
      if (current) setActiveLink(current)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const scrollToSection = (href: string) => {
    setIsOpen(false)
    const id = href.replace("#", "")
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <header
      className={`fixed top-0 z-50 w-full transition-all duration-300 ${
        isScrolled ? "bg-background/80 backdrop-blur-xl border-b border-border shadow-md" : "bg-transparent"
      }`}
    >
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="text-2xl font-bold text-foreground hover:opacity-80 transition-opacity">
          YMS Studio
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-1">
          {navLinks.map((link) => (
            <button
              key={link.name}
              onClick={() => scrollToSection(link.href)}
              className={`px-4 py-2 text-sm font-medium rounded-lg transition-all duration-300 ${
                activeLink === link.href.replace("#", "")
                  ? "text-foreground bg-foreground/10"
                  : "text-muted-foreground hover:text-foreground hover:bg-foreground/5"
              }`}
            >
              {link.name}
            </button>
          ))}
        </div>

        {/* Right Actions */}
        <div className="flex items-center gap-3">
          {/* Theme Toggle */}
          <button
            onClick={toggleTheme}
            className="p-2.5 rounded-lg hover:bg-foreground/10 transition-colors text-foreground"
            aria-label="Toggle tema"
          >
            {isDark ? <Sun size={20} /> : <Moon size={20} />}
          </button>

          <a
            href="https://wa.me/6283822640883?text=Halo%2C%20saya%20ingin%20konsultasi%20tentang%20website"
            target="_blank"
            rel="noopener noreferrer"
            className="hidden sm:block bg-foreground hover:bg-foreground/90 text-background px-6 py-2.5 rounded-lg text-sm font-semibold transition-all duration-300 hover:shadow-lg active:scale-95"
          >
            Konsultasi
          </a>

          {/* Mobile Menu Button */}
          <button className="md:hidden p-2 text-foreground" onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-background/95 backdrop-blur-xl border-t border-border px-4 py-4 space-y-2 animate-fade-in">
          {navLinks.map((link) => (
            <button
              key={link.name}
              onClick={() => scrollToSection(link.href)}
              className="block w-full text-left px-4 py-2.5 text-sm font-medium text-foreground hover:text-foreground hover:bg-foreground/10 rounded-lg transition-colors"
            >
              {link.name}
            </button>
          ))}
          <a
            href="https://wa.me/6283822640883?text=Halo%2C%20saya%20ingin%20konsultasi%20tentang%20website"
            target="_blank"
            rel="noopener noreferrer"
            className="block w-full text-center bg-foreground hover:bg-foreground/90 text-background px-4 py-2.5 rounded-lg text-sm font-semibold transition-colors mt-4"
          >
            Konsultasi
          </a>
        </div>
      )}
    </header>
  )
}