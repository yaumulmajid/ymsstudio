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
      { threshold: 0.1 }
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  // Close modal on Escape key
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape" && selectedProject) {
        setSelectedProject(null)
      }
    }
    document.addEventListener("keydown", handleEscape)
    return () => document.removeEventListener("keydown", handleEscape)
  }, [selectedProject])

  // Prevent body scroll when modal is open
  useEffect(() => {
    if (selectedProject) {
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = "unset"
    }
    return () => {
      document.body.style.overflow = "unset"
    }
  }, [selectedProject])

  const Modal = () => {
    if (!selectedProject) return null

    return (
      <div
        className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-center justify-center p-4 animate-in fade-in"
        onClick={() => setSelectedProject(null)}
        role="dialog"
        aria-modal="true"
        aria-labelledby="modal-title"
      >
        <div
          className="bg-white border border-[#1F6B77]/30 rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto animate-in zoom-in-95 shadow-2xl"
          onClick={(e) => e.stopPropagation()}
          role="document"
        >
          {/* Close Button */}
          <div className="sticky top-0 bg-white border-b border-[#1F6B77]/20 p-6 flex items-center justify-between z-10">
            <h2 id="modal-title" className="text-lg font-bold text-[#0F0F10]">
              {selectedProject.title}
            </h2>
            <button
              onClick={() => setSelectedProject(null)}
              className="text-[#404040] hover:text-[#0F0F10] transition-colors p-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#1F6B77] focus:ring-offset-2"
              aria-label="Tutup dialog"
              type="button"
            >
              <X size={20} aria-hidden="true" focusable="false" />
            </button>
          </div>

          {/* Content */}
          <div className="p-6 space-y-5">
            {/* Image */}
            <figure className="h-64 md:h-80 bg-gradient-to-br from-[#1F6B77]/10 to-[#0C0721]/5 rounded-lg flex items-center justify-center border border-[#1F6B77]/20 overflow-hidden relative">
              {selectedProject.image ? (
                <Image
                  src={selectedProject.image}
                  alt={`Screenshot project ${selectedProject.title}`}
                  fill
                  className="object-contain"
                  sizes="(max-width: 768px) 100vw, 672px"
                />
              ) : (
                <svg 
                  className="w-20 h-20 text-[#404040]" 
                  fill="currentColor" 
                  viewBox="0 0 20 20"
                  aria-hidden="true"
                  focusable="false"
                >
                  <path d="M4 3a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V5a2 2 0 00-2-2H4zm12 12H4l4-8 3 6 2-4 3 6z" />
                </svg>
              )}
            </figure>

            {/* Details */}
            <div>
              <div className="flex items-center justify-between mb-3">
                <div>
                  <p className="text-xs font-semibold text-[#0F0F10] uppercase tracking-wide">
                    {selectedProject.category}
                  </p>
                  <p className="text-xs text-[#404040] mt-1">
                    <span className="font-medium">Tipe:</span> {selectedProject.type}
                  </p>
                </div>
              </div>
              <p className="text-sm text-[#404040] leading-relaxed">
                {selectedProject.detailDescription}
              </p>
            </div>

            {/* Tags */}
            <div>
              <h3 className="text-xs font-semibold text-[#0F0F10] mb-2 uppercase tracking-wide">
                Tech Stack
              </h3>
              <ul className="flex flex-wrap gap-2" role="list">
                {selectedProject.tags.map((tag, idx) => (
                  <li key={idx}>
                    <span className="text-xs bg-[#1F6B77]/15 text-[#0F0F10] px-3 py-1.5 rounded-lg font-medium">
                      {tag}
                    </span>
                  </li>
                ))}
              </ul>
            </div>

            {/* CTA */}
            <a
              href="https://wa.me/6283822640883?text=Saya%20tertarik%20dengan%20project%20Anda"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full bg-[#1F6B77] hover:bg-[#0C0721] text-white px-6 py-3 rounded-xl font-semibold text-sm transition-all duration-300 block text-center focus:outline-none focus:ring-4 focus:ring-[#1F6B77]/50 focus:ring-offset-2"
              aria-label="Hubungi saya via WhatsApp - buka di tab baru"
            >
              Hubungi Saya
            </a>
          </div>
        </div>
      </div>
    )
  }

  return (
    <section 
      id="portfolio" 
      ref={sectionRef} 
      className="relative py-16 md:py-24 bg-white overflow-hidden"
      aria-labelledby="portfolio-heading"
    >
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header - Centered */}
        <header className="text-center mb-12">
          <div
            className={`inline-flex items-center gap-2 text-xs font-semibold text-[#0F0F10] mb-3 transition-all duration-700 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            }`}
            role="status"
          >
            <span className="w-2 h-2 bg-[#1F6B77] rounded-full" aria-hidden="true"></span>
            <span>Portfolio</span>
          </div>
          <h2
            id="portfolio-heading"
            className={`text-3xl md:text-4xl font-bold text-[#0F0F10] mb-4 transition-all duration-700 delay-100 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            }`}
          >
            Proyek Unggulan
          </h2>
          <p
            className={`text-base text-[#404040] max-w-2xl mx-auto transition-all duration-700 delay-200 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            }`}
          >
            Beberapa website pilihan yang sudah saya kerjakan untuk berbagai bisnis.
          </p>
        </header>

        {/* Projects Grid - 2 rows, 3 columns */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5" role="list">
          {projects.map((project, index) => (
            <article
              key={project.id}
              className="group relative"
              role="listitem"
            >
              <button
                onClick={() => setSelectedProject(project)}
                className="w-full text-left focus:outline-none focus:ring-4 focus:ring-[#1F6B77]/50 focus:ring-offset-2 rounded-lg"
                aria-label={`Lihat detail project ${project.title}`}
                type="button"
              >
                {/* Card */}
                <div className="relative bg-white border border-[#1F6B77]/30 rounded-lg overflow-hidden hover:border-[#1F6B77]/50 transition-all duration-500 hover:shadow-lg hover:shadow-[#1F6B77]/10 h-full flex flex-col">
                  {/* Image */}
                  <figure className="aspect-[16/9] bg-gradient-to-br from-[#1F6B77]/10 to-[#0C0721]/5 relative overflow-hidden flex items-center justify-center group-hover:from-[#1F6B77]/15 group-hover:to-[#0C0721]/10 transition-all duration-500">
                    {project.image ? (
                      <Image
                        src={project.image}
                        alt={`Screenshot project ${project.title} - ${project.category}`}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-500"
                        sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                        loading={index < 3 ? "eager" : "lazy"}
                      />
                    ) : (
                      <svg
                        className="w-12 h-12 text-[#404040] group-hover:text-[#1F6B77] transition-colors duration-300"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                        aria-hidden="true"
                        focusable="false"
                      >
                        <path d="M4 3a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V5a2 2 0 00-2-2H4zm12 12H4l4-8 3 6 2-4 3 6z" />
                      </svg>
                    )}
                  </figure>

                  {/* Content */}
                  <div className="p-4 flex flex-col flex-grow">
                    <div className="mb-2">
                      <div className="flex items-start justify-between mb-1">
                        <div className="flex-1">
                          <p className="text-xs font-semibold text-[#0F0F10] uppercase tracking-wide">
                            {project.category}
                          </p>
                          <h3 className="text-sm font-bold text-[#0F0F10] group-hover:text-[#1F6B77] transition-colors duration-300 mt-1">
                            {project.title}
                          </h3>
                        </div>
                        <span className="text-xs text-[#0F0F10] whitespace-nowrap ml-2 bg-[#1F6B77]/15 px-2 py-1 rounded font-medium">
                          {project.type}
                        </span>
                      </div>
                      <p className="text-xs text-[#404040] mt-2 line-clamp-2">
                        {project.description}
                      </p>
                    </div>

                    {/* Tags */}
                    <ul className="flex flex-wrap gap-1 mt-auto" role="list">
                      {project.tags.map((tag, idx) => (
                        <li key={idx}>
                          <span className="text-xs bg-[#1F6B77]/15 text-[#0F0F10] px-2 py-0.5 rounded font-medium">
                            {tag}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Hover Arrow */}
                  <div 
                    className="absolute bottom-3 right-3 opacity-0 group-hover:opacity-100 transition-all duration-300 transform group-hover:translate-x-1"
                    aria-hidden="true"
                  >
                    <div className="w-6 h-6 bg-[#1F6B77]/20 rounded flex items-center justify-center">
                      <svg 
                        className="w-3 h-3 text-[#1F6B77]" 
                        fill="none" 
                        stroke="currentColor" 
                        viewBox="0 0 24 24"
                        focusable="false"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </div>
                  </div>
                </div>
              </button>
            </article>
          ))}
        </div>
      </div>

      {/* Modal */}
      <Modal />
    </section>
  )
}