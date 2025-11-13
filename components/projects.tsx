"use client"

import { useEffect, useRef, useState } from "react"
import { X } from "lucide-react"
import Image from "next/image"
const projects = [
  {
    id: 1,
    title: "Catering Online Platform",
    category: "E-Commerce",
    tags: ["WordPress", "WooCommerce", "Elementor"],
    type: "Pribadi",
    description: "Platform pemesanan catering online dengan sistem order dan pembayaran",
    detailDescription:
      "Website catering online yang memudahkan pelanggan memesan makanan untuk berbagai acara. Dilengkapi dengan katalog menu lengkap, sistem pemesanan otomatis, kalkulasi harga real-time, pilihan paket katering, dan integrasi pembayaran online untuk kemudahan transaksi.",
    image: "/project-4.webp",
  },
  {
    id: 2,
    title: "Donut Shop Website",
    category: "E-Commerce",
    tags: ["WordPress", "WooCommerce", "CSS"],
    type: "Pribadi",
    description: "Website toko donut online dengan desain manis dan menarik",
    detailDescription:
      "Website e-commerce untuk toko donut dengan tampilan visual yang menarik dan user-friendly. Menampilkan berbagai varian rasa donut, sistem keranjang belanja, pre-order, dan delivery tracking untuk memberikan pengalaman belanja online yang menyenangkan.",
    image: "/project-5.webp",
  },
  {
    id: 3,
    title: "Custom Web APP IKK LAN RI",
    category: "Web App",
    tags: ["Java", "Spring Boot", "Vue.js"],
    type: "Tim",
    description: "Aplikasi web instansi pemerintah dengan sistem manajemen data lengkap",
    detailDescription:
      "Aplikasi web custom untuk IKK LAN RI dengan fitur registrasi pengguna, upload dan download data, optimasi query database untuk performa maksimal, dan redesign UI/UX yang modern dan user-friendly. Dibangun dengan Java Spring Boot backend dan Vue.js frontend untuk pengalaman pengguna yang responsif.",
    image: "/project-3.webp",
  },
  {
    id: 4,
    title: "Platform Reservasi Place",
    category: "Landing Page",
    tags: ["WordPress"],
    type: "Pribadi",
    description: "Platform reservasi tempat online dengan sistem booking real-time",
    detailDescription:
      "Platform reservasi tempat yang memudahkan pengguna untuk melakukan booking lokasi secara online. Dilengkapi dengan sistem manajemen reservasi, kalender ketersediaan, dan notifikasi otomatis untuk meningkatkan efisiensi pengelolaan tempat.",
    image: "/project-1.webp",
  },
  {
    id: 5,
    title: "AC Service Company Profile",
    category: "Company Profile",
    tags: ["WordPress", "Elementor", "CSS"],
    type: "Pribadi",
    description: "Company Profile service AC dengan desain modern dan konversi tinggi",
    detailDescription:
      "Company Profile profesional untuk layanan service AC dengan gradient design yang menarik. Dilengkapi dengan sistem booking online, paket berlangganan, rating pelanggan, dan multiple channel komunikasi (Call, WhatsApp, Email) untuk memaksimalkan konversi.",
    image: "/project-2.webp",
  },
  {
    id: 6,
    title: "Real Estate Property Listing",
    category: "Property Listing",
    tags: ["WordPress", "Elementor", "Advanced Custom Fields"],
    type: "Pribadi",
    description: "Portal listing properti dengan fitur pencarian dan filter lengkap",
    detailDescription:
      "Website portal properti yang menampilkan listing rumah, apartemen, dan properti komersial. Dilengkapi dengan fitur pencarian advanced, filter berdasarkan lokasi dan harga dan sistem inquiry langsung ke agen untuk memudahkan proses jual-beli properti.",
    image: "/project-6.webp",
  },
]

export default function Projects() {
  const [isVisible, setIsVisible] = useState(false)
  const [selectedProject, setSelectedProject] = useState<(typeof projects)[0] | null>(null)
  const sectionRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.1 },
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  const Modal = () => {
    if (!selectedProject) return null

    return (
      <div
        className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4 animate-in fade-in"
        onClick={() => setSelectedProject(null)}
      >
        <div
          className="bg-card border border-border/50 rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto animate-in zoom-in-95"
          onClick={(e) => e.stopPropagation()}
        >
          {/* Close Button */}
          <div className="sticky top-0 bg-card border-b border-border/50 p-6 flex items-center justify-between">
            <h2 className="text-lg font-bold text-foreground">{selectedProject.title}</h2>
            <button
              onClick={() => setSelectedProject(null)}
              className="text-muted-foreground hover:text-foreground transition-colors"
            >
              <X size={20} />
            </button>
          </div>

          {/* Content */}
          <div className="p-6 space-y-5">
            {/* Image */}
            <div className="h-64 md:h-80 bg-gradient-to-br from-foreground/10 to-foreground/5 rounded-lg flex items-center justify-center border border-foreground/10 overflow-hidden relative">
              {selectedProject.image ? (
                <Image 
                  src={selectedProject.image} 
                  alt={selectedProject.title}
                  fill
                  className="object-contain"
                />
              ) : (
                <svg className="w-20 h-20 text-muted-foreground/30" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M4 3a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V5a2 2 0 00-2-2H4zm12 12H4l4-8 3 6 2-4 3 6z" />
                </svg>
              )}
            </div>

            {/* Details */}
            <div>
              <div className="flex items-center justify-between mb-2">
                <div>
                  <p className="text-xs font-semibold text-foreground uppercase tracking-wide">
                    {selectedProject.category}
                  </p>
                  <p className="text-xs text-muted-foreground mt-1">Tipe: {selectedProject.type}</p>
                </div>
              </div>
              <p className="text-sm text-foreground leading-relaxed">{selectedProject.detailDescription}</p>
            </div>

            {/* Tags */}
            <div>
              <p className="text-xs font-semibold text-foreground mb-2 uppercase tracking-wide">Tech Stack</p>
              <div className="flex flex-wrap gap-2">
                {selectedProject.tags.map((tag, idx) => (
                  <span key={idx} className="text-xs bg-foreground/10 text-foreground px-2 py-1 rounded">
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            {/* CTA */}
            <a
              href="https://wa.me/6283822640883?text=Saya%20tertarik%20dengan%20project%20Anda"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full bg-foreground hover:bg-foreground/90 text-background px-6 py-2.5 rounded-lg font-medium text-sm transition-all duration-300 block text-center"
            >
              Hubungi Saya
            </a>
          </div>
        </div>
      </div>
    )
  }

  return (
    <section id="portfolio" ref={sectionRef} className="relative py-16 md:py-24 bg-background overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header - Centered */}
        <div className="text-center mb-12">
          <div
            className={`inline-flex items-center gap-2 text-xs font-semibold text-foreground mb-3 transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}
          >
            <span className="w-2 h-2 bg-foreground rounded-full"></span>
            Proyek Terbaru
          </div>
          <h2
            className={`text-3xl md:text-4xl font-bold text-foreground mb-4 transition-all duration-700 delay-100 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}
          >
            Proyek Unggulan
          </h2>
          <p
            className={`text-base text-muted-foreground max-w-2xl mx-auto transition-all duration-700 delay-200 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}
          >
            Beberapa website pilihan yang sudah saya kerjakan untuk berbagai bisnis.
          </p>
        </div>

        {/* Projects Grid - 2 rows, 3 columns */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {projects.map((project) => (
            <div
              key={project.id}
              className="group relative cursor-pointer"
              onClick={() => setSelectedProject(project)}
            >
              {/* Card */}
              <div className="relative bg-card border border-border/50 rounded-lg overflow-hidden hover:border-foreground/20 transition-all duration-500 hover:shadow-lg hover:shadow-foreground/10 h-full flex flex-col">
                {/* Image */}
                <div className="h-48 bg-gradient-to-br from-foreground/10 to-foreground/5 relative overflow-hidden flex items-center justify-center group-hover:from-foreground/15 group-hover:to-foreground/10 transition-all duration-500">
                  {project.image ? (
                    <Image 
                      src={project.image} 
                      alt={project.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  ) : (
                    <svg
                      className="w-12 h-12 text-muted-foreground/30 group-hover:text-foreground/30 transition-colors duration-300"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M4 3a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V5a2 2 0 00-2-2H4zm12 12H4l4-8 3 6 2-4 3 6z" />
                    </svg>
                  )}
                </div>

                {/* Content */}
                <div className="p-4 flex flex-col flex-grow">
                  <div className="mb-2">
                    <div className="flex items-start justify-between mb-1">
                      <div>
                        <p className="text-xs font-semibold text-foreground uppercase tracking-wide">
                          {project.category}
                        </p>
                        <h3 className="text-sm font-bold text-foreground group-hover:opacity-80 transition-opacity duration-300 mt-1">
                          {project.title}
                        </h3>
                      </div>
                      <span className="text-xs text-muted-foreground whitespace-nowrap ml-2 bg-foreground/10 px-2 py-1 rounded text-foreground">
                        {project.type}
                      </span>
                    </div>
                    <p className="text-xs text-muted-foreground mt-2">{project.description}</p>
                  </div>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-1 mt-auto">
                    {project.tags.map((tag, idx) => (
                      <span
                        key={idx}
                        className="text-xs bg-foreground/10 text-foreground px-2 py-0.5 rounded"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Hover Arrow */}
                <div className="absolute bottom-3 right-3 opacity-0 group-hover:opacity-100 transition-all duration-300 transform group-hover:translate-x-1">
                  <div className="w-6 h-6 bg-foreground/10 rounded flex items-center justify-center">
                    <svg className="w-3 h-3 text-foreground" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Modal */}
      <Modal />
    </section>
  )
}