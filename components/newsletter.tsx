"use client"

import React from "react"

import { useState } from "react"
import { motion } from "framer-motion"
import { Send, Sparkles } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { HeartDoodle, StarDoodle } from "./decorative-elements"

export function Newsletter() {
  const [email, setEmail] = useState("")
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Shopify: would integrate with Klaviyo, Mailchimp, or Shopify Email
    console.log("Newsletter signup:", email)
    setIsSubmitted(true)
    setEmail("")
    setTimeout(() => setIsSubmitted(false), 3000)
  }

  return (
    <section
      className="py-16 md:py-20 relative overflow-hidden"
      aria-labelledby="newsletter-heading"
    >
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-r from-neon-purple/10 via-neon-pink/10 to-neon-purple/10" />
      
      {/* Decorative elements */}
      <motion.div
        animate={{ y: [0, -10, 0], rotate: [0, 5, 0] }}
        transition={{ duration: 4, repeat: Infinity }}
        className="absolute top-10 left-10 hidden md:block"
        aria-hidden="true"
      >
        <StarDoodle className="w-6 h-6 text-neon-pink/40" />
      </motion.div>
      <motion.div
        animate={{ y: [0, 10, 0], rotate: [0, -5, 0] }}
        transition={{ duration: 5, repeat: Infinity, delay: 0.5 }}
        className="absolute bottom-10 right-10 hidden md:block"
        aria-hidden="true"
      >
        <HeartDoodle className="w-6 h-6 text-neon-purple/40" />
      </motion.div>

      <div className="container mx-auto px-4 lg:px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="max-w-2xl mx-auto text-center"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-neon-purple/20 rounded-full mb-6">
            <Sparkles className="w-4 h-4 text-neon-purple" />
            <span className="text-sm text-neon-purple font-medium">Stay in the loop</span>
          </div>

          <h2
            id="newsletter-heading"
            className="font-[var(--font-fredoka)] text-3xl md:text-4xl font-bold mb-4"
          >
            Get new couple pack drops &{" "}
            <span className="text-neon-pink text-glow-pink">partner discounts</span>
          </h2>
          <p className="text-muted-foreground mb-8">
            Be the first to know when we drop new anime collaborations and exclusive deals for subscribers.
          </p>

          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
            <Input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="flex-1 bg-background border-border/50 focus:border-neon-pink/50 focus:ring-neon-pink/20"
              aria-label="Email address"
            />
            <Button
              type="submit"
              className="bg-neon-pink hover:bg-neon-pink/90 text-primary-foreground glow-pink"
              disabled={isSubmitted}
            >
              {isSubmitted ? (
                <>
                  <motion.span
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                  >
                    ✓
                  </motion.span>
                  <span className="ml-2">Subscribed!</span>
                </>
              ) : (
                <>
                  <Send className="w-4 h-4 mr-2" />
                  Subscribe
                </>
              )}
            </Button>
          </form>

          <p className="text-xs text-muted-foreground mt-4">
            No spam, unsubscribe anytime. We respect your inbox.
          </p>
        </motion.div>
      </div>
    </section>
  )
}
