"use client"

import { motion } from "framer-motion"
import { ProductCard } from "./product-card"
import { products } from "@/data/products"

interface FeaturedProductsProps {
  selectedCategory: string | null
}

export function FeaturedProducts({ selectedCategory }: FeaturedProductsProps) {
  // Filter products based on selected category
  // Shopify: would filter using collections query or product tags
  const filteredProducts = selectedCategory
    ? products.filter((p) => p.category === selectedCategory)
    : products

  return (
    <section
      id="featured-packs"
      className="py-16 md:py-20 bg-gradient-to-b from-transparent via-secondary/30 to-transparent"
      aria-labelledby="featured-heading"
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
            id="featured-heading"
            className="font-[var(--font-fredoka)] text-3xl md:text-4xl font-bold mb-4"
          >
            Featured <span className="text-neon-pink text-glow-pink">Couple Packages</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Our most popular matching sets, curated for anime-loving couples
          </p>
        </motion.div>

        {/* Products grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredProducts.map((product, index) => (
            <ProductCard key={product.id} product={product} index={index} />
          ))}
        </div>

        {/* Empty state */}
        {filteredProducts.length === 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-12"
          >
            <p className="text-muted-foreground text-lg">
              No packs found for this anime. Check back soon!
            </p>
          </motion.div>
        )}
      </div>
    </section>
  )
}
