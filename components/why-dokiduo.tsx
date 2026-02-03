"use client"

import { motion } from "framer-motion"
import { Sparkles, Heart, Percent, Gift } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"

const benefits = [
  {
    icon: Sparkles,
    title: "Curated Collections",
    description: "Each pack is thoughtfully designed with complementary art — not just random prints, but pieces that tell a story together.",
    color: "neon-pink",
  },
  {
    icon: Heart,
    title: "Made for Matching",
    description: "Designs created specifically for couples and best friends. Wear together and stand out at conventions, dates, or anywhere!",
    color: "neon-purple",
  },
  {
    icon: Percent,
    title: "Bundle & Save",
    description: "Why buy separately? Our packs give you both tees at a better price than individual purchases — up to 21% off.",
    color: "neon-pink",
  },
  {
    icon: Gift,
    title: "Perfect for Gifting",
    description: "Made-to-order shipping means fresh prints shipped directly. The ultimate gift for the anime fan in your life.",
    color: "neon-purple",
  },
]

export function WhyDokiduo() {
  return (
    <section
      className="py-16 md:py-20 bg-gradient-to-b from-secondary/30 via-transparent to-secondary/30"
      aria-labelledby="why-dokiduo-heading"
    >
      <div className="container mx-auto px-4 lg:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2
            id="why-dokiduo-heading"
            className="font-[var(--font-fredoka)] text-3xl md:text-4xl font-bold mb-4"
          >
            Why <span className="text-neon-blue text-glow-purple">Doki</span>
            <span className="text-neon-pink text-glow-pink">duo</span>?
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            We&apos;re not just another anime merch store. We specialize in creating the perfect matching experience for couples and best friends.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {benefits.map((benefit, index) => (
            <motion.div
              key={benefit.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.4 }}
            >
              <Card className="h-full bg-card/30 border-border/50 hover:border-neon-purple/30 transition-all duration-300 group">
                <CardContent className="p-6 text-center">
                  <motion.div
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    className={`inline-flex items-center justify-center w-14 h-14 rounded-2xl mb-4 ${
                      benefit.color === "neon-pink"
                        ? "bg-neon-pink/20 text-neon-pink"
                        : "bg-neon-purple/20 text-neon-purple"
                    }`}
                  >
                    <benefit.icon className="w-7 h-7" />
                  </motion.div>
                  <h3 className="text-lg font-semibold mb-2 group-hover:text-neon-pink transition-colors">
                    {benefit.title}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {benefit.description}
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
