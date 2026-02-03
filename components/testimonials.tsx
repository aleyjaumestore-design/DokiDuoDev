"use client"

import Image from "next/image"
import { motion } from "framer-motion"
import { Star, Quote } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { testimonials, stats } from "@/data/products"

export function Testimonials() {
  return (
    <section className="py-16 md:py-20" aria-labelledby="testimonials-heading">
      <div className="container mx-auto px-4 lg:px-6">
        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-neon-pink/10 rounded-full mb-6">
            <span className="text-2xl font-bold text-neon-pink">{stats.packsSold}</span>
            <span className="text-muted-foreground">packs sold</span>
          </div>
          
          <h2
            id="testimonials-heading"
            className="font-[var(--font-fredoka)] text-3xl md:text-4xl font-bold mb-4"
          >
            Loved by <span className="text-neon-pink text-glow-pink">couples</span> worldwide
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            See what other anime-loving duos have to say about their Dokiduo experience
          </p>
        </motion.div>

        {/* Testimonial cards */}
        <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.15, duration: 0.5 }}
            >
              <Card className="h-full bg-card/50 border-border/50 hover:border-neon-purple/30 transition-colors">
                <CardContent className="p-6">
                  {/* Quote icon */}
                  <Quote className="w-8 h-8 text-neon-purple/30 mb-4" />
                  
                  {/* Content */}
                  <p className="text-foreground mb-6 leading-relaxed">
                    &quot;{testimonial.content}&quot;
                  </p>
                  
                  {/* Rating */}
                  <div className="flex gap-1 mb-4" aria-label={`${testimonial.rating} out of 5 stars`}>
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className={`w-4 h-4 ${
                          i < testimonial.rating
                            ? "fill-neon-pink text-neon-pink"
                            : "fill-muted text-muted"
                        }`}
                      />
                    ))}
                  </div>
                  
                  {/* Author */}
                  <div className="flex items-center gap-3">
                    <div className="relative w-10 h-10 rounded-full overflow-hidden bg-gradient-to-br from-neon-purple/30 to-neon-pink/30">
                      <Image
                        src={testimonial.avatar || "/placeholder.svg"}
                        alt=""
                        fill
                        className="object-cover"
                      />
                    </div>
                    <span className="font-medium text-foreground">{testimonial.name}</span>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
