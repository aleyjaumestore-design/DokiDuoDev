"use client"

import { useState } from "react"
import Link from "next/link"
import { motion } from "framer-motion"
import { Search, ShoppingCart, User, Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { Badge } from "@/components/ui/badge"

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/collections", label: "Catalog" },
  { href: "/collections/special-packs", label: "Special Packs" },
]

export function SiteHeader() {
  const [isLoggedIn] = useState(false) // Mock state - would be from auth context
  const [cartCount] = useState(2) // Mock cart count - would be from cart context
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className="sticky top-0 z-40 w-full border-b border-border/40 bg-background/80 backdrop-blur-xl supports-[backdrop-filter]:bg-background/60"
    >
      <div className="container mx-auto flex h-16 items-center justify-between px-4 lg:px-6">
        {/* Logo */}
        <Link href="/" className="flex items-center">
          <span className="font-[var(--font-fredoka)] text-2xl font-bold tracking-tight">
            <span className="text-neon-blue text-glow-purple">Doki</span>
            <span className="text-neon-pink text-glow-pink">duo</span>
          </span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-6" aria-label="Main navigation">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground hover:text-neon-pink"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* Search - Desktop */}
        <div className="hidden lg:flex items-center flex-1 max-w-sm mx-6">
          <div className="relative w-full">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <Input
              type="search"
              placeholder="Search your anime or pack…"
              className="pl-10 bg-secondary/50 border-border/50 focus:border-neon-pink/50 focus:ring-neon-pink/20"
              aria-label="Search products"
            />
          </div>
        </div>

        {/* Right side actions */}
        <div className="flex items-center gap-2">
          {/* Search - Mobile */}
          <Button
            variant="ghost"
            size="icon"
            className="lg:hidden hover:text-neon-pink"
            aria-label="Search"
          >
            <Search className="h-5 w-5" />
          </Button>

          {/* Login/Account - Shopify: link to /account/login or /account */}
          <Link
            href={isLoggedIn ? "/account" : "/account/login"}
            className="hidden sm:flex"
          >
            <Button
              variant="ghost"
              size="sm"
              className="gap-2 hover:text-neon-pink"
            >
              <User className="h-4 w-4" />
              <span className="hidden md:inline">
                {isLoggedIn ? "Account" : "Login"}
              </span>
            </Button>
          </Link>

          {/* Cart - Shopify: would open cart drawer or link to /cart */}
          <Button
            variant="ghost"
            size="icon"
            className="relative hover:text-neon-pink"
            aria-label={`Shopping cart with ${cartCount} items`}
          >
            <ShoppingCart className="h-5 w-5" />
            {cartCount > 0 && (
              <Badge
                className="absolute -top-1 -right-1 h-5 w-5 flex items-center justify-center p-0 text-xs bg-neon-pink text-primary-foreground border-0"
              >
                {cartCount}
              </Badge>
            )}
          </Button>

          {/* Mobile Menu */}
          <Sheet open={mobileMenuOpen} onOpenChange={setMobileMenuOpen}>
            <SheetTrigger asChild>
              <Button
                variant="ghost"
                size="icon"
                className="md:hidden hover:text-neon-pink"
                aria-label="Open menu"
              >
                <Menu className="h-5 w-5" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-80 bg-background border-border">
              <div className="flex flex-col gap-6 mt-8">
                {/* Mobile Search */}
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                  <Input
                    type="search"
                    placeholder="Search your anime or pack…"
                    className="pl-10 bg-secondary/50"
                    aria-label="Search products"
                  />
                </div>

                {/* Mobile Nav Links */}
                <nav className="flex flex-col gap-4" aria-label="Mobile navigation">
                  {navLinks.map((link) => (
                    <Link
                      key={link.href}
                      href={link.href}
                      onClick={() => setMobileMenuOpen(false)}
                      className="text-lg font-medium text-foreground hover:text-neon-pink transition-colors py-2 border-b border-border/50"
                    >
                      {link.label}
                    </Link>
                  ))}
                </nav>

                {/* Mobile Login */}
                <Link
                  href={isLoggedIn ? "/account" : "/account/login"}
                  onClick={() => setMobileMenuOpen(false)}
                >
                  <Button className="w-full bg-neon-pink hover:bg-neon-pink/90 text-primary-foreground">
                    <User className="h-4 w-4 mr-2" />
                    {isLoggedIn ? "My Account" : "Login"}
                  </Button>
                </Link>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </motion.header>
  )
}
