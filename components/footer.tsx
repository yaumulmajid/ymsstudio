"use client"

import { Linkedin, Mail, Instagram, MessageCircle } from "lucide-react"
import Link from "next/link"

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer id="contact" className="relative bg-[#E9F3F4] text-[#0F0F10]">
      {/* Background gradient */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-b from-[#1F6B77]/5 to-transparent"></div>
      </div>

      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="py-12 md:py-16">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-10">

            {/* Brand */}
            <div>
              <Link
                href="/"
                className="text-lg lg:text-xl font-bold text-[#1F6B77]"
              >
                YMS<span className="text-[#0F0F10]">.</span>
                <sup className="text-[10px] text-[#404040] ml-0.5">Web Studio</sup>
              </Link>

              <p className="text-xs text-[#404040] mb-4 leading-relaxed mt-2">
                Jasa pembuatan website profesional untuk UMKM dan bisnis. Spesialis WordPress & Custom Development dengan harga terjangkau.
              </p>

              <div className="flex gap-2.5">
                {[
                  { icon: <MessageCircle size={16} />, href: "https://wa.me/6283822640883" },
                  { icon: <Instagram size={16} />, href: "#" },
                  { icon: <Linkedin size={16} />, href: "#" },
                  { icon: <Mail size={16} />, href: "mailto:info@ymsstudio.id" },
                ].map((item, i) => (
                  <a
                    key={i}
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 rounded-lg bg-white border border-[#1F6B77]/15 text-[#0F0F10] hover:bg-[#1F6B77] hover:text-white transition-all duration-300"
                  >
                    {item.icon}
                  </a>
                ))}
              </div>
            </div>

            {/* Services */}
            <div>
              <h4 className="font-semibold text-[#0F0F10] text-sm mb-3">Layanan</h4>
              <ul className="space-y-2">
                {["Website WordPress", "Toko Online / E-Commerce", "Company Profile", "Custom Development"].map((item) => (
                  <li key={item}>
                    <a
                      href="#services"
                      className="text-xs text-[#404040] hover:text-[#1F6B77] transition-colors"
                    >
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Navigasi */}
            <div>
              <h4 className="font-semibold text-[#0F0F10] text-sm mb-3">Navigasi</h4>
              <ul className="space-y-2">
                {[
                  { name: "Beranda", href: "#home" },
                  { name: "Portfolio", href: "#portfolio" },
                  { name: "Harga", href: "#pricing" },
                  { name: "Kontak", href: "#contact" },
                ].map((item) => (
                  <li key={item.name}>
                    <a
                      href={item.href}
                      className="text-xs text-[#404040] hover:text-[#1F6B77] transition-colors"
                    >
                      {item.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact */}
            <div>
              <h4 className="font-semibold text-[#0F0F10] text-sm mb-3">Hubungi</h4>
              <ul className="space-y-2">
                <li>
                  <a
                    href="https://wa.me/6283822640883"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs text-[#404040] hover:text-[#1F6B77] transition-colors flex items-center gap-2"
                  >
                    <MessageCircle size={14} />
                    Whatsapp
                  </a>
                </li>
                <li className="text-xs text-[#404040] pt-2">Siap untuk proyek baru</li>
              </ul>
            </div>
          </div>

          {/* Divider */}
          <div className="border-t border-[#1F6B77]/20"></div>

          {/* Bottom */}
          <div className="py-6 flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-xs text-[#404040]">
              © {currentYear} YMS Web Studio. Semua hak dilindungi.
            </p>

            <div className="flex gap-4">
              <a className="text-xs text-[#404040] hover:text-[#1F6B77] transition-colors" href="#">
                Kebijakan Privasi
              </a>
              <a className="text-xs text-[#404040] hover:text-[#1F6B77] transition-colors" href="#">
                Syarat Layanan
              </a>
            </div>
          </div>

        </div>
      </div>
    </footer>
  )
}
