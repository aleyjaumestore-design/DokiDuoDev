"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Search, Users, Gift } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { Badge } from "@/components/ui/badge"

const steps = [
  {
    number: "01",
    icon: Search,
    title: "Pick an anime",
    description: "Browse our collection organized by your favorite anime series. From classics to trending titles.",
  },
  {
    number: "02",
    icon: Users,
    title: "Choose sizes for both",
    description: "Select individual sizes for each person. Mix and match — we've got you covered.",
    hasDemo: true,
  },
  {
    number: "03",
    icon: Gift,
    title: "Save with the pack",
    description: "Get bundle pricing and have your matching tees shipped together. Easy gifting!",
  },
]

const sizes = ["XS", "S", "M", "L", "XL", "2XL"]

function SizePickerDemo() {
  const [sizeA, setSizeA] = useState<string>("")
  const [sizeB, setSizeB] = useState<string>("")

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      className="mt-6 p-4 bg-secondary/50 rounded-lg border border-border/50"
    >
      <p className="text-sm text-muted-foreground mb-3">Try it out:</p>
      <div className="flex flex-col sm:flex-row gap-4">
        <div className="flex-1">
          <label className="text-sm font-medium mb-2 block">
            Size A <span className="text-neon-pink">(Person 1)</span>
          </label>
          <Select value={sizeA} onValueChange={setSizeA}>
            <SelectTrigger className="bg-background border-border/50 focus:border-neon-pink">
              <SelectValue placeholder="Select size" />
            </SelectTrigger>
            <SelectContent>
              {sizes.map((size) => (
                <SelectItem key={size} value={size}>
                  {size}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
        <div className="flex-1">
          <label className="text-sm font-medium mb-2 block">
            Size B <span className="text-neon-purple">(Person 2)</span>
          </label>
          <Select value={sizeB} onValueChange={setSizeB}>
            <SelectTrigger className="bg-background border-border/50 focus:border-neon-purple">
              <SelectValue placeholder="Select size" />
            </SelectTrigger>
            <SelectContent>
              {sizes.map((size) => (
                <SelectItem key={size} value={size}>
                  {size}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
      </div>
      {sizeA && sizeB && (
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className="mt-4 flex items-center gap-2"
        >
          <Badge className="bg-neon-pink/20 text-neon-pink border-neon-pink/30">
            {sizeA} / {sizeB}
          </Badge>
          <span className="text-sm text-muted-foreground">combination selected!</span>
        </motion.div>
      )}
    </motion.div>
  )
}

export function HowItWorks() {
  return (
    <section className="py-16 md:py-20" aria-labelledby="how-it-works-heading">
      <div className="container mx-auto px-4 lg:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2
            id="how-it-works-heading"
            className="font-[var(--font-fredoka)] text-3xl md:text-4xl font-bold mb-4"
          >
            How it <span className="text-neon-purple text-glow-purple">works</span>
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            Getting your matching couple pack is as easy as 1-2-3
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
          {steps.map((step, index) => (
            <motion.div
              key={step.number}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.15, duration: 0.5 }}
            >
              <Card className="h-full bg-card/50 border-border/50 hover:border-neon-purple/30 transition-colors">
                <CardContent className="p-6">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="flex items-center justify-center w-12 h-12 rounded-full bg-neon-purple/20 text-neon-purple">
                      <step.icon className="w-6 h-6" />
                    </div>
                    <span className="text-4xl font-bold text-muted-foreground/30 font-mono">
                      {step.number}
                    </span>
                  </div>
                  <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
                  <p className="text-muted-foreground">{step.description}</p>
                  
                  {step.hasDemo && <SizePickerDemo />}
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
