"use client"

import { ArrowRight } from "lucide-react"
import { Badge } from "@/components/ui/badge"

const articles = [
  {
    id: 1,
    title: "Building Scalable Web Applications with Next.js",
    excerpt:
      "Learn best practices for building large-scale web applications using Next.js and modern web technologies.",
    date: "2024-11-01",
    category: "Web Development",
    readTime: "8 min read",
  },
  {
    id: 2,
    title: "Frontend Performance Optimization Tips",
    excerpt: "Discover essential techniques to improve your website performance and user experience significantly.",
    date: "2024-10-28",
    category: "Performance",
    readTime: "6 min read",
  },
  {
    id: 3,
    title: "React 19 New Features and Best Practices",
    excerpt: "Explore the latest React 19 features and learn how to use them effectively in your projects.",
    date: "2024-10-20",
    category: "React",
    readTime: "10 min read",
  },
  {
    id: 4,
    title: "Complete Guide to TypeScript for JavaScript Developers",
    excerpt: "A comprehensive guide to getting started with TypeScript and improving your code quality.",
    date: "2024-10-15",
    category: "TypeScript",
    readTime: "12 min read",
  },
]

export default function Blog() {
  return (
    <section className="bg-muted py-16 md:py-24">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-16">
          <div className="inline-block bg-accent text-accent-foreground px-3 py-1 rounded-full text-sm mb-4">BLOG</div>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">Blog</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Tips, tricks, and insights tentang web development dan technology
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {articles.map((article) => (
            <article key={article.id} className="bg-background rounded-lg p-8 hover:shadow-lg transition">
              <div className="flex items-center justify-between mb-3">
                <Badge variant="outline" className="text-xs">
                  {article.category}
                </Badge>
                <span className="text-xs text-muted-foreground">{article.readTime}</span>
              </div>
              <h3 className="text-xl font-bold text-foreground mb-3">{article.title}</h3>
              <p className="text-muted-foreground mb-4 leading-relaxed">{article.excerpt}</p>
              <div className="flex items-center justify-between">
                <span className="text-xs text-muted-foreground">{article.date}</span>
                <button className="text-primary font-medium flex items-center gap-1 hover:gap-2 transition">
                  Read More <ArrowRight size={16} />
                </button>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
