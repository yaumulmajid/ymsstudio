"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Menu, X } from "lucide-react"

interface HeaderProps {
  isScrolled: boolean
}

export default function Header({ isScrolled }: HeaderProps) {
  const [isOpen, setIsOpen] = useState(false)
  const [activeLink, setActiveLink] = useState("home")

  const navLinks = [
    { name: "Beranda", href: "#home", id: "home" },
    { name: "Layanan", href: "#services", id: "services" },
    { name: "Portfolio", href: "#portfolio", id: "portfolio" },
    { name: "Harga", href: "#pricing", id: "pricing" },
    { name: "Hubungi", href: "#contact", id: "contact" },
  ]

  useEffect(() => {
    const handleScroll = () => {
      const sections = ["home", "services", "portfolio", "pricing", "contact"]
      const scrollPosition = window.scrollY + 150
      
      // Check if we're at the bottom of the page (footer)
      if ((window.innerHeight + window.scrollY) >= document.documentElement.scrollHeight - 50) {
        setActiveLink("contact")
        return
      }
      
      const current = sections.find((section) => {
        const element = document.getElementById(section)
        if (element) {
          const rect = element.getBoundingClientRect()
          return rect.top <= 150 && rect.bottom >= 150
        }
        return false
      })
      if (current) setActiveLink(current)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const scrollToSection = (href: string, id: string) => {
    setIsOpen(false)
    setActiveLink(id)
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
      // Set focus untuk keyboard users
      element.focus({ preventScroll: true })
    }
  }

  // Close mobile menu on Escape key
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape" && isOpen) {
        setIsOpen(false)
      }
    }
    document.addEventListener("keydown", handleEscape)
    return () => document.removeEventListener("keydown", handleEscape)
  }, [isOpen])

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = "unset"
    }
    return () => {
      document.body.style.overflow = "unset"
    }
  }, [isOpen])

  return (
    <header className="fixed top-0 left-0 right-0 z-50" role="banner">
      <div className="container mx-auto px-4 lg:px-8 py-4 max-w-[1400px]">
        <div className="flex items-center justify-between bg-white/95 backdrop-blur-2xl border border-[#1F6B77]/20 rounded-2xl px-8 h-14 lg:h-16 shadow-sm">
          {/* Logo */}
          <Link 
            href="/" 
            className="text-lg lg:text-xl font-bold text-[#1F6B77] shrink-0 focus:outline-none focus:ring-2 focus:ring-[#1F6B77] focus:ring-offset-2 rounded"
            aria-label="YMS Web Studio - Kembali ke beranda"
          >
            YMS<span className="text-[#0F0F10]">.</span>
            <sup className="text-[10px] text-[#404040] font-normal ml-0.5">Web Studio</sup>
          </Link>

          {/* Desktop Navigation - Center */}
          <nav 
            className="hidden lg:flex items-center justify-center gap-8 flex-1"
            aria-label="Navigasi utama"
          >
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => scrollToSection(link.href, link.id)}
                className={`text-sm font-semibold transition-all duration-200 rounded px-3 py-1 focus:outline-none focus:ring-2 focus:ring-[#1F6B77] focus:ring-offset-2 ${
                  activeLink === link.id
                    ? "text-[#1F6B77]"
                    : "text-[#404040] hover:text-[#0F0F10]"
                }`}
                aria-current={activeLink === link.id ? "page" : undefined}
                type="button"
              >
                {link.name}
              </button>
            ))}
          </nav>

          {/* CTA Button */}
          <div className="hidden lg:flex items-center shrink-0">
            <a
              href="https://wa.me/6283822640883?text=Halo%2C%20saya%20ingin%20konsultasi%20tentang%20website"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm font-semibold rounded-2xl px-8 py-2.5 bg-[#1F6B77] hover:bg-[#0C0721] text-white transition-all duration-300 shadow-sm focus:outline-none focus:ring-4 focus:ring-[#1F6B77]/50 focus:ring-offset-2"
              aria-label="Konsultasi via WhatsApp - buka di tab baru"
            >
              Konsultasi
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden p-2 text-[#1F6B77] rounded focus:outline-none focus:ring-2 focus:ring-[#1F6B77] focus:ring-offset-2"
            onClick={() => setIsOpen(!isOpen)}
            aria-label={isOpen ? "Tutup menu" : "Buka menu"}
            aria-expanded={isOpen}
            aria-controls="mobile-menu"
            type="button"
          >
            {isOpen ? (
              <X className="w-5 h-5" aria-hidden="true" />
            ) : (
              <Menu className="w-5 h-5" aria-hidden="true" />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <nav
            id="mobile-menu"
            className="lg:hidden mt-2 bg-white/95 backdrop-blur-2xl border border-[#1F6B77]/20 rounded-2xl overflow-hidden shadow-sm animate-fade-in"
            aria-label="Navigasi mobile"
            role="navigation"
          >
            <div className="p-4 space-y-1">
              {navLinks.map((link) => (
                <button
                  key={link.id}
                  onClick={() => scrollToSection(link.href, link.id)}
                  className={`block w-full text-left text-sm font-medium transition-all duration-200 py-3 px-4 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#1F6B77] focus:ring-offset-2 ${
                    activeLink === link.id
                      ? "text-[#1F6B77] bg-[#1F6B77]/10"
                      : "text-[#404040] hover:text-[#0F0F10] hover:bg-[#1F6B77]/5"
                  }`}
                  aria-current={activeLink === link.id ? "page" : undefined}
                  type="button"
                >
                  {link.name}
                </button>
              ))}
              <div className="pt-3 border-t border-[#1F6B77]/20">
                <a
                  href="https://wa.me/6283822640883?text=Halo%2C%20saya%20ingin%20konsultasi%20tentang%20website"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block w-full text-center rounded-2xl py-3 bg-[#1F6B77] hover:bg-[#0C0721] text-white text-sm font-semibold transition-all duration-300 focus:outline-none focus:ring-4 focus:ring-[#1F6B77]/50 focus:ring-offset-2"
                  aria-label="Konsultasi via WhatsApp - buka di tab baru"
                >
                  Konsultasi
                </a>
              </div>
            </div>
          </nav>
        )}
      </div>

      {/* Mobile Menu Overlay - untuk menutup menu saat klik di luar */}
      {isOpen && (
        <div
          className="lg:hidden fixed inset-0 bg-black/20 backdrop-blur-sm -z-10"
          onClick={() => setIsOpen(false)}
          aria-hidden="true"
        />
      )}
    </header>
  )
}