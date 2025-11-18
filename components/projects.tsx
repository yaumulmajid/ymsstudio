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
    description: "Website catering online dengan fitur pemesanan dan pembayaran.",
    detailDescription:
      "Website catering yang memudahkan pelanggan memesan makanan untuk berbagai kebutuhan. Menyediakan katalog menu, sistem pemesanan otomatis, perhitungan harga langsung, pilihan paket, dan pembayaran online.",
    image: "/project-4.webp",
  },
  {
    id: 2,
    title: "Donut Shop Website",
    category: "E-Commerce",
    tags: ["WordPress", "WooCommerce", "CSS"],
    type: "Pribadi",
    description: "Website toko donut dengan tampilan simple dan menarik.",
    detailDescription:
      "Website toko donut yang menampilkan berbagai varian rasa, dilengkapi keranjang belanja, fitur pre-order, dan pemantauan pesanan. Dibuat dengan tampilan yang ringan dan mudah digunakan.",
    image: "/project-5.webp",
  },
  {
    id: 3,
    title: "Custom Web APP IKK LAN RI",
    category: "Web App",
    tags: ["Java", "Spring Boot", "Vue.js"],
    type: "Tim",
    description: "Aplikasi web instansi pemerintah dengan pengelolaan data lengkap.",
    detailDescription:
      "Aplikasi untuk IKK LAN RI dengan fitur registrasi pengguna, upload/download data, optimalisasi query, serta pembaruan tampilan agar lebih modern. Backend menggunakan Spring Boot dan frontend menggunakan Vue.js.",
    image: "/project-3.webp",
  },
  {
    id: 4,
    title: "Platform Reservasi Place",
    category: "Landing Page",
    tags: ["WordPress"],
    type: "Pribadi",
    description: "Website reservasi tempat dengan sistem booking online.",
    detailDescription:
      "Platform pemesanan tempat yang dilengkapi kalender ketersediaan, notifikasi otomatis, dan manajemen reservasi. Memudahkan pengguna dalam mem-booking lokasi secara online.",
    image: "/project-1.webp",
  },
  {
    id: 5,
    title: "AC Service Company Profile",
    category: "Company Profile",
    tags: ["WordPress", "Elementor", "CSS"],
    type: "Pribadi",
    description: "Website company profile layanan AC dengan tampilan modern.",
    detailDescription:
      "Company profile untuk jasa service AC dengan desain bersih dan informatif. Tersedia fitur booking online, daftar paket layanan, rating pelanggan, dan kontak via WhatsApp/telepon.",
    image: "/project-2.webp",
  },
  {
    id: 6,
    title: "Real Estate Property Listing",
    category: "Property Listing",
    tags: ["WordPress", "Elementor", "Advanced Custom Fields"],
    type: "Pribadi",
    description: "Website listing properti dengan fitur pencarian lengkap.",
    detailDescription:
      "Portal properti yang menampilkan berbagai listing rumah dan apartemen. Dilengkapi pencarian berdasarkan lokasi, harga, serta formulir untuk menghubungi agen secara langsung.",
    image: "/project-6.webp",
  },
];


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
            Portfolios
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
                <div className="aspect-[16/9] bg-gradient-to-br from-foreground/10 to-foreground/5 relative overflow-hidden flex items-center justify-center group-hover:from-foreground/15 group-hover:to-foreground/10 transition-all duration-500">
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