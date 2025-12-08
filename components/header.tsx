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
    { name: "Beranda", href: "#home" },
    { name: "Layanan", href: "#services" },
    { name: "Portfolio", href: "#portfolio" },
    { name: "Harga", href: "#pricing" },
    { name: "Hubungi", href: "#contact" },
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

  const scrollToSection = (href: string) => {
    setIsOpen(false)
    const id = href.replace("#", "")
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <nav className="fixed top-0 left-0 right-0 z-50">
      <div className="container mx-auto px-4 lg:px-8 py-4 max-w-[1400px]">
        <div className="flex items-center justify-between bg-white/95 backdrop-blur-2xl border border-[#2A8E9E]/10 rounded-2xl px-8 h-14 lg:h-16 shadow-sm">
          {/* Logo */}
          <Link href="/" className="text-lg lg:text-xl font-bold text-[#2A8E9E] shrink-0">
            YMS<span className="text-[#1D1E20]">.</span><sup className="text-[10px] text-[#1D1E20]/70 font-normal ml-0.5">Studio</sup>
          </Link>

          {/* Desktop Navigation - Center */}
          <div className="hidden lg:flex items-center justify-center gap-8 flex-1">
            {navLinks.map((link) => (
              <button
                key={link.name}
                onClick={() => scrollToSection(link.href)}
                className={`text-sm font-semibold transition-colors ${
                  activeLink === link.href.replace("#", "")
                    ? "text-[#2A8E9E]"
                    : "text-[#1D1E20]/70 hover:text-[#1D1E20]/70"
                }`}
              >
                {link.name}
              </button>
            ))}
          </div>

          {/* CTA Button */}
          <div className="hidden lg:flex items-center shrink-0">
            <a
              href="https://wa.me/6283822640883?text=Halo%2C%20saya%20ingin%20konsultasi%20tentang%20website"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm font-semibold rounded-2xl px-8 py-2.5 bg-[#2A8E9E] hover:bg-[#248795] text-white transition-all duration-300 shadow-sm"
            >
              Konsultasi
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden p-2 text-[#1D1E20]"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="lg:hidden mt-2 bg-white/70 backdrop-blur-2xl border-0 rounded-2xl overflow-hidden shadow-sm animate-fade-in">
            <div className="p-4 space-y-3">
              {navLinks.map((link) => (
                <button
                  key={link.name}
                  onClick={() => scrollToSection(link.href)}
                  className="block w-full text-left text-sm font-medium text-[#1D1E20]/50 hover:text-[#1D1E20]/80 transition-colors py-2"
                >
                  {link.name}
                </button>
              ))}
              <div className="pt-3 border-t border-[#1D1E20]/5">
                <a
                  href="https://wa.me/6283822640883?text=Halo%2C%20saya%20ingin%20konsultasi%20tentang%20website"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block w-full text-center rounded-full py-2 bg-[#2A8E9E] hover:bg-[#180D39] text-white text-sm font-medium transition-colors"
                >
                  Konsultasi
                </a>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}