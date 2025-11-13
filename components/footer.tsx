"use client"

import { Linkedin, Mail, Instagram, MessageCircle } from "lucide-react"

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer id="contact" className="relative bg-card border-t border-border/50 text-foreground">
      {/* Background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-b from-foreground/3 to-transparent"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Main Footer Content */}
        <div className="py-12 md:py-16">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-10">
            {/* Brand */}
            <div>
              <h3 className="text-lg font-bold text-foreground mb-3">YMS Studio</h3>
              <p className="text-xs text-muted-foreground mb-4 leading-relaxed">
                Jasa pembuatan website profesional untuk UMKM dan bisnis. Spesialis WordPress & Custom Development dengan harga terjangkau dan hasil maksimal.
              </p>
              <div className="flex gap-2.5">
                <a
                  href="https://wa.me/6283822640883"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-lg bg-foreground/10 hover:bg-foreground/20 text-foreground transition-colors duration-300"
                  aria-label="WhatsApp"
                >
                  <MessageCircle size={16} />
                </a>
                <a
                  href="#"
                  className="p-2 rounded-lg bg-foreground/10 hover:bg-foreground/20 text-foreground transition-colors duration-300"
                  aria-label="Instagram"
                >
                  <Instagram size={16} />
                </a>
                <a
                  href="#"
                  className="p-2 rounded-lg bg-foreground/10 hover:bg-foreground/20 text-foreground transition-colors duration-300"
                  aria-label="LinkedIn"
                >
                  <Linkedin size={16} />
                </a>
                <a
                  href="mailto:info@ymsstudio.id"
                  className="p-2 rounded-lg bg-foreground/10 hover:bg-foreground/20 text-foreground transition-colors duration-300"
                  aria-label="Email"
                >
                  <Mail size={16} />
                </a>
              </div>
            </div>

            {/* Services */}
            <div>
              <h4 className="font-semibold text-foreground text-sm mb-3">Layanan</h4>
              <ul className="space-y-2">
                {["Website WordPress", "Toko Online / E-Commerce", "Company Profile", "Custom Development"].map((item) => (
                  <li key={item}>
                    <a
                      href="#services"
                      className="text-xs text-muted-foreground hover:text-foreground transition-colors duration-300"
                    >
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Company */}
            <div>
              <h4 className="font-semibold text-foreground text-sm mb-3">Navigasi</h4>
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
                      className="text-xs text-muted-foreground hover:text-foreground transition-colors duration-300"
                    >
                      {item.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact */}
            <div>
              <h4 className="font-semibold text-foreground text-sm mb-3">Hubungi</h4>
              <ul className="space-y-2">
                <li>
                  <a
                    href="https://wa.me/6283822640883"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs text-muted-foreground hover:text-foreground transition-colors duration-300 flex items-center gap-2"
                  >
                    <MessageCircle size={14} />
                    +62 838-2264-0883
                  </a>
                </li>
                <li>
                  <a
                    href="mailto:info@ymsstudio.id"
                    className="text-xs text-muted-foreground hover:text-foreground transition-colors duration-300"
                  >
                    info@ymsstudio.id
                  </a>
                </li>
                <li className="text-xs text-muted-foreground pt-2">Siap untuk proyek baru</li>
              </ul>
            </div>
          </div>

          {/* Divider */}
          <div className="border-t border-border/30"></div>

          {/* Bottom Footer */}
          <div className="py-6 flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-xs text-muted-foreground">© {currentYear} YMS Studio. Semua hak dilindungi.</p>
            <div className="flex gap-4">
              <a
                href="#"
                className="text-xs text-muted-foreground hover:text-foreground transition-colors duration-300"
              >
                Kebijakan Privasi
              </a>
              <a
                href="#"
                className="text-xs text-muted-foreground hover:text-foreground transition-colors duration-300"
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