"use client"

import { Star } from "lucide-react"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"

const testimonials = [
  {
    name: "Budi Santoso",
    role: "CEO, PT Maju Jaya",
    quote:
      "Yaumul adalah developer yang profesional dan bertanggung jawab. Project kami selesai tepat waktu dengan kualitas yang sangat baik.",
    rating: 5,
  },
  {
    name: "Siti Nurhaliza",
    role: "Founder, E-commerce Store",
    quote:
      "Komunikasi yang baik dan hasil kerja yang memuaskan. Saya sangat merekomendasikan Yaumul untuk project development Anda.",
    rating: 5,
  },
  {
    name: "Ahmad Wijaya",
    role: "Product Manager, Tech Startup",
    quote:
      "Sangat impressed dengan technical expertise dan problem-solving skills. Kerja sama yang luar biasa dan produk yang berkualitas tinggi.",
    rating: 5,
  },
]

export default function Testimonials() {
  return (
    <section className="bg-background py-16 md:py-24">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-16">
          <div className="inline-block bg-accent text-accent-foreground px-3 py-1 rounded-full text-sm mb-4">
            TESTIMONIALS
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">Apa Kata Mereka</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Kepuasan klien adalah prioritas utama saya dalam setiap project
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, idx) => (
            <div key={idx} className="bg-muted rounded-lg p-8">
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} size={20} className="fill-primary text-primary" />
                ))}
              </div>
              <p className="text-foreground mb-6 leading-relaxed italic">"{testimonial.quote}"</p>
              <div className="flex items-center gap-4">
                <Avatar>
                  <AvatarFallback className="bg-primary text-primary-foreground">
                    {testimonial.name
                      .split(" ")
                      .map((n) => n[0])
                      .join("")}
                  </AvatarFallback>
                </Avatar>
                <div>
                  <p className="font-bold text-foreground text-sm">{testimonial.name}</p>
                  <p className="text-muted-foreground text-sm">{testimonial.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
