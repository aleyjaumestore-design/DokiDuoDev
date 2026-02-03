"use client"

import Link from "next/link"
import { motion } from "framer-motion"
import { HeartDoodle } from "./decorative-elements"

const footerLinks = [
  { href: "/pages/shipping", label: "Shipping" },
  { href: "/pages/returns", label: "Returns" },
  { href: "/pages/size-guide", label: "Size Guide" },
  { href: "/pages/faq", label: "FAQ" },
  { href: "/pages/contact", label: "Contact" },
  { href: "/pages/legal", label: "Legal" },
]

export function SiteFooter() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="border-t border-border/50 bg-card/30">
      <div className="container mx-auto px-4 lg:px-6 py-12">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          {/* Logo */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="flex items-center gap-2"
          >
            <Link href="/" className="flex items-center">
              <span className="font-[var(--font-fredoka)] text-xl font-bold tracking-tight">
                <span className="text-neon-blue">Doki</span>
                <span className="text-neon-pink">duo</span>
              </span>
            </Link>
            <HeartDoodle className="w-4 h-4 text-neon-pink" />
          </motion.div>

          {/* Links */}
          <nav className="flex flex-wrap justify-center gap-x-6 gap-y-2" aria-label="Footer navigation">
            {footerLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm text-muted-foreground hover:text-foreground hover:text-neon-pink transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </nav>
        </div>

        {/* Disclaimer and copyright */}
        <div className="mt-8 pt-8 border-t border-border/30 text-center space-y-4">
          <p className="text-xs text-muted-foreground max-w-2xl mx-auto">
            All trademarks, titles, and character names are the property of their respective owners. 
            Dokiduo is not affiliated with any anime studios or publishers. Fan-inspired designs only.
          </p>
          <p className="text-sm text-muted-foreground">
            © {currentYear} Dokiduo. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
