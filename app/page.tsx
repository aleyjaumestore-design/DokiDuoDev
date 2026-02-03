"use client"

import { useState } from "react"
import { AnnouncementBar } from "@/components/announcement-bar"
import { SiteHeader } from "@/components/site-header"
import { HeroSection } from "@/components/hero-section"
import { AnimeCategories } from "@/components/anime-categories"
import { FeaturedProducts } from "@/components/featured-products"
import { HowItWorks } from "@/components/how-it-works"
import { WhyDokiduo } from "@/components/why-dokiduo"
import { Testimonials } from "@/components/testimonials"
import { Newsletter } from "@/components/newsletter"
import { SiteFooter } from "@/components/site-footer"

// ===========================================
// SHOPIFY STOREFRONT API INTEGRATION NOTES
// ===========================================
// 
// This page is structured to easily integrate with Shopify Storefront API.
// 
// Key integration points:
// 
// 1. Products & Collections:
//    - Replace mock data in data/products.ts with Storefront API queries
//    - Use product.handle for URL routing to /products/[handle]
//    - Use collection.handle for category filtering
// 
// 2. Cart functionality:
//    - Implement cart context using Shopify Buy SDK or Storefront API
//    - cartLinesAdd mutation for "Add to Cart" buttons
//    - Use Sheet component for cart drawer (already imported in header)
// 
// 3. Authentication:
//    - Link Login button to /account/login (Shopify customer accounts)
//    - Link Account button to /account
//    - Use customerAccessTokenCreate for login
// 
// 4. Search:
//    - Implement predictive search using Storefront API
//    - Route to /search?q={query}
// 
// 5. Newsletter:
//    - Integrate with Klaviyo, Mailchimp, or Shopify Email
//    - Use appropriate API for email collection
// 
// Example environment variables needed:
// - SHOPIFY_STOREFRONT_ACCESS_TOKEN
// - SHOPIFY_STORE_DOMAIN
// ===========================================

export default function HomePage() {
  // Category filter state - managed at page level for cross-component communication
  // Shopify: could use URL params or context for filter state
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null)

  return (
    <div className="min-h-screen flex flex-col">
      {/* Announcement bar - sticky at top */}
      <AnnouncementBar />
      
      {/* Header - sticky with blur effect */}
      <SiteHeader />
      
      {/* Main content */}
      <main className="flex-1">
        {/* Hero section with featured packs carousel */}
        <HeroSection />
        
        {/* Anime category filter chips */}
        <AnimeCategories 
          onCategorySelect={setSelectedCategory}
          selectedCategory={selectedCategory}
        />
        
        {/* Featured couple packages grid */}
        <FeaturedProducts selectedCategory={selectedCategory} />
        
        {/* How it works - 3 steps */}
        <HowItWorks />
        
        {/* Why Dokiduo - benefits */}
        <WhyDokiduo />
        
        {/* Social proof - testimonials */}
        <Testimonials />
        
        {/* Newsletter signup */}
        <Newsletter />
      </main>
      
      {/* Footer */}
      <SiteFooter />
    </div>
  )
}
