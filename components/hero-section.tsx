"use client"

import { useRef, useEffect, useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { motion, useScroll, useTransform } from "framer-motion"
import { ChevronLeft, ChevronRight, Truck, RefreshCw, ShieldCheck } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card } from "@/components/ui/card"
import { featuredPacks, type Product } from "@/data/products"
import { FloatingElements } from "./decorative-elements"

const trustPoints = [
  { icon: Truck, label: "Shipping 7–12 days" },
  { icon: RefreshCw, label: "30-day exchanges" },
  { icon: ShieldCheck, label: "Secure checkout" },
]

function FeaturedPackCard({ pack }: { pack: Product }) {
  return (
    <Card className="relative flex-shrink-0 w-64 md:w-72 bg-card/50 border-border/50 overflow-hidden group cursor-grab active:cursor-grabbing">
      {/* Sale badge */}
      {pack.isSale && (
        <Badge className="absolute top-3 left-3 z-10 bg-neon-pink text-primary-foreground border-0">
          Save {pack.savingsPercent}%
        </Badge>
      )}
      
      {/* Couple pack label */}
      <Badge className="absolute top-3 right-3 z-10 bg-neon-purple/80 text-primary-foreground border-0">
        Couple Pack
      </Badge>
      
      {/* Image */}
      <div className="relative aspect-square bg-gradient-to-br from-neon-purple/20 to-neon-pink/20 overflow-hidden">
        <Image
          src={pack.image || "/placeholder.svg"}
          alt={pack.name}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent" />
      </div>
      
      {/* Content */}
      <div className="p-4 space-y-2">
        <h3 className="font-semibold text-foreground line-clamp-1">{pack.name}</h3>
        <div className="flex items-baseline gap-2">
          <span className="text-lg font-bold text-neon-pink">€{pack.price.toFixed(2)}</span>
          <span className="text-sm text-muted-foreground line-through">€{pack.originalPrice.toFixed(2)}</span>
        </div>
      </div>
    </Card>
  )
}

export function HeroSection() {
  const containerRef = useRef<HTMLDivElement>(null)
  const carouselRef = useRef<HTMLDivElement>(null)
  const [canScrollLeft, setCanScrollLeft] = useState(false)
  const [canScrollRight, setCanScrollRight] = useState(true)
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  })
  
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "30%"])
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0])

  const checkScrollPosition = () => {
    if (carouselRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = carouselRef.current
      setCanScrollLeft(scrollLeft > 0)
      setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 10)
    }
  }

  const scroll = (direction: "left" | "right") => {
    if (carouselRef.current) {
      const scrollAmount = 300
      carouselRef.current.scrollBy({
        left: direction === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth"
      })
    }
  }

  useEffect(() => {
    const carousel = carouselRef.current
    if (carousel) {
      carousel.addEventListener("scroll", checkScrollPosition)
      checkScrollPosition()
      return () => carousel.removeEventListener("scroll", checkScrollPosition)
    }
  }, [])

  // Auto-play carousel
  useEffect(() => {
    const interval = setInterval(() => {
      if (carouselRef.current && canScrollRight) {
        carouselRef.current.scrollBy({ left: 300, behavior: "smooth" })
      } else if (carouselRef.current) {
        carouselRef.current.scrollTo({ left: 0, behavior: "smooth" })
      }
    }, 4000)
    return () => clearInterval(interval)
  }, [canScrollRight])

  return (
    <section
      ref={containerRef}
      className="relative min-h-[90vh] flex items-center overflow-hidden"
      aria-label="Hero"
    >
      {/* Background gradient */}
      <motion.div
        style={{ y }}
        className="absolute inset-0 bg-gradient-to-br from-neon-purple/10 via-background to-neon-pink/10"
        aria-hidden="true"
      />
      
      {/* Decorative elements */}
      <FloatingElements />
      
      <motion.div style={{ opacity }} className="container mx-auto px-4 lg:px-6 py-12 lg:py-20 relative z-10">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Left: Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="space-y-6 text-center lg:text-left"
          >
            <div className="space-y-4">
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 0.5 }}
                className="font-[var(--font-fredoka)] text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-balance"
              >
                <span className="text-foreground">Anime clothing store</span>
                <br />
                <span className="text-neon-pink text-glow-pink">for couples</span>
              </motion.h1>
              
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 0.5 }}
                className="text-lg md:text-xl text-muted-foreground max-w-lg mx-auto lg:mx-0 text-pretty"
              >
                Match with your partner in style. Exclusive couple bundles featuring your favorite anime characters — curated combos at bundle prices.
              </motion.p>
            </div>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.5 }}
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
            >
              <Link href="/collections/special-packs">
                <Button
                  size="lg"
                  className="bg-neon-pink hover:bg-neon-pink/90 text-primary-foreground glow-pink font-semibold px-8"
                >
                  View Special Packs
                </Button>
              </Link>
              <Link href="/collections">
                <Button
                  size="lg"
                  variant="outline"
                  className="border-neon-purple/50 text-foreground hover:bg-neon-purple/10 hover:border-neon-purple bg-transparent"
                >
                  Browse by Anime
                </Button>
              </Link>
            </motion.div>

            {/* Trust points */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6, duration: 0.5 }}
              className="flex flex-wrap gap-4 justify-center lg:justify-start pt-4"
            >
              {trustPoints.map((point) => (
                <div
                  key={point.label}
                  className="flex items-center gap-2 text-sm text-muted-foreground"
                >
                  <point.icon className="h-4 w-4 text-neon-purple" />
                  <span>{point.label}</span>
                </div>
              ))}
            </motion.div>
          </motion.div>

          {/* Right: Featured Packs Carousel */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
            className="relative"
          >
            <div className="relative">
              {/* Carousel */}
              <div
                ref={carouselRef}
                className="flex gap-4 overflow-x-auto scrollbar-hide pb-4 -mx-4 px-4 snap-x snap-mandatory"
                style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
              >
                {featuredPacks.map((pack, index) => (
                  <motion.div
                    key={pack.id}
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.3 + index * 0.1 }}
                    className="snap-center"
                  >
                    <FeaturedPackCard pack={pack} />
                  </motion.div>
                ))}
              </div>

              {/* Navigation arrows */}
              <div className="hidden sm:flex absolute -left-4 top-1/2 -translate-y-1/2">
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={() => scroll("left")}
                  disabled={!canScrollLeft}
                  className="bg-background/80 backdrop-blur-sm hover:bg-background hover:text-neon-pink disabled:opacity-30"
                  aria-label="Scroll left"
                >
                  <ChevronLeft className="h-5 w-5" />
                </Button>
              </div>
              <div className="hidden sm:flex absolute -right-4 top-1/2 -translate-y-1/2">
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={() => scroll("right")}
                  disabled={!canScrollRight}
                  className="bg-background/80 backdrop-blur-sm hover:bg-background hover:text-neon-pink disabled:opacity-30"
                  aria-label="Scroll right"
                >
                  <ChevronRight className="h-5 w-5" />
                </Button>
              </div>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  )
}
