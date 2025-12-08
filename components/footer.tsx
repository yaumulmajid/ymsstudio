"use client"

import { Linkedin, Mail, Instagram, MessageCircle } from "lucide-react"
import Link from "next/link"

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer id="contact" className="relative bg-[#E9F3F4] text-[#1D1E20]">
      {/* Background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-b from-[#2A8E9E]/3 to-transparent"></div>
      </div>

      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Main Footer Content */}
        <div className="py-12 md:py-16">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-10">
            {/* Brand */}
            <div>
                <Link href="/" className="text-lg lg:text-xl font-bold text-[#2A8E9E] shrink-0">
                    YMS<span className="text-[#1D1E20]">.</span><sup className="text-[10px] text-[#1D1E20]/70 font-normal ml-0.5">Studio</sup>
                </Link>
              <p className="text-xs text-[#1D1E20]/60 mb-4 leading-relaxed">
                Jasa pembuatan website profesional untuk UMKM dan bisnis. Spesialis WordPress & Custom Development dengan harga terjangkau dan hasil maksimal.
              </p>
              <div className="flex gap-2.5">
                <a
                  href="https://wa.me/6283822640883"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-lg bg-white hover:bg-[#2A8E9E] hover:text-white text-[#1D1E20] transition-colors duration-300"
                  aria-label="WhatsApp"
                >
                  <MessageCircle size={16} />
                </a>
                <a
                  href="#"
                  className="p-2 rounded-lg bg-white hover:bg-[#2A8E9E] hover:text-white text-[#1D1E20] transition-colors duration-300"
                  aria-label="Instagram"
                >
                  <Instagram size={16} />
                </a>
                <a
                  href="#"
                  className="p-2 rounded-lg bg-white hover:bg-[#2A8E9E] hover:text-white text-[#1D1E20] transition-colors duration-300"
                  aria-label="LinkedIn"
                >
                  <Linkedin size={16} />
                </a>
                <a
                  href="mailto:info@ymsstudio.id"
                  className="p-2 rounded-lg bg-white hover:bg-[#2A8E9E] hover:text-white text-[#1D1E20] transition-colors duration-300"
                  aria-label="Email"
                >
                  <Mail size={16} />
                </a>
              </div>
            </div>

            {/* Services */}
            <div>
              <h4 className="font-semibold text-[#1D1E20] text-sm mb-3">Layanan</h4>
              <ul className="space-y-2">
                {["Website WordPress", "Toko Online / E-Commerce", "Company Profile", "Custom Development"].map((item) => (
                  <li key={item}>
                    <a
                      href="#services"
                      className="text-xs text-[#1D1E20]/60 hover:text-[#2A8E9E] transition-colors duration-300"
                    >
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Company */}
            <div>
              <h4 className="font-semibold text-[#1D1E20] text-sm mb-3">Navigasi</h4>
              <ul className="space-y-2">
                {[
                  { name: "Beranda", href: "#home" },
                  { name: "Portfolio", href: "#portfolio" },
                  { name: "Harga", href: "#pricing" },
                  { name: "Kontak", href: "#contact" }
                ].map((item) => (
                  <li key={item.name}>
                    <a
                      href={item.href}
                      className="text-xs text-[#1D1E20]/60 hover:text-[#2A8E9E] transition-colors duration-300"
                    >
                      {item.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact */}
            <div>
              <h4 className="font-semibold text-[#1D1E20] text-sm mb-3">Hubungi</h4>
              <ul className="space-y-2">
                <li>
                  <a
                    href="https://wa.me/6283822640883"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs text-[#1D1E20]/60 hover:text-[#2A8E9E] transition-colors duration-300 flex items-center gap-2"
                  >
                    <MessageCircle size={14} />
                    Whatsapp
                  </a>
                </li>
                <li>
                  <a
                    href="mailto:info@ymsstudio.id"
                    className="text-xs text-[#1D1E20]/60 hover:text-[#2A8E9E] transition-colors duration-300"
                  >
                    info@ymsstudio.id
                  </a>
                </li>
                <li className="text-xs text-[#1D1E20]/60 pt-2">Siap untuk proyek baru</li>
              </ul>
            </div>
          </div>

          {/* Divider */}
          <div className="border-t border-[#2A8E9E]/20"></div>

          {/* Bottom Footer */}
          <div className="py-6 flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-xs text-[#1D1E20]/60">© {currentYear} YMS Studio. Semua hak dilindungi.</p>
            <div className="flex gap-4">
              <a
                href="#"
                className="text-xs text-[#1D1E20]/60 hover:text-[#2A8E9E] transition-colors duration-300"
              >
                Kebijakan Privasi
              </a>
              <a
                href="#"
                className="text-xs text-[#1D1E20]/60 hover:text-[#2A8E9E] transition-colors duration-300"
              >
                Syarat Layanan
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}