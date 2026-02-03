"use client"

import Image from "next/image"
import Link from "next/link"
import { motion } from "framer-motion"
import { Star, ShoppingCart, Eye } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import type { Product } from "@/data/products"

interface ProductCardProps {
  product: Product
  index?: number
}

export function ProductCard({ product, index = 0 }: ProductCardProps) {
  // Shopify: would use product.handle for URL routing
  const productUrl = `/products/${product.handle}`

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1, duration: 0.4 }}
    >
      <Card className="group relative bg-card/50 border-border/50 overflow-hidden transition-all duration-300 hover:border-neon-purple/50 hover:shadow-lg hover:shadow-neon-purple/10">
        {/* Badges */}
        <div className="absolute top-3 left-3 z-10 flex flex-col gap-2">
          {product.isSale && (
            <Badge className="bg-neon-pink text-primary-foreground border-0">
              Sale
            </Badge>
          )}
        </div>

        {/* Image container */}
        <div className="relative aspect-square bg-gradient-to-br from-neon-purple/10 to-neon-pink/10 overflow-hidden">
          {/* Shopify: would use product.images.edges[0].node.url */}
          <Image
            src={product.image || "/placeholder.svg"}
            alt={product.name}
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-110"
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
          />
          
          {/* Hover overlay with quick actions */}
          <div className="absolute inset-0 bg-background/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-3">
            <Button
              size="sm"
              className="bg-neon-pink hover:bg-neon-pink/90 text-primary-foreground"
              aria-label={`Add ${product.name} to cart`}
            >
              <ShoppingCart className="h-4 w-4 mr-2" />
              Add to Cart
            </Button>
            <Link href={productUrl}>
              <Button
                size="sm"
                variant="outline"
                className="border-foreground/50 hover:bg-foreground/10 bg-transparent"
                aria-label={`View ${product.name} details`}
              >
                <Eye className="h-4 w-4" />
              </Button>
            </Link>
          </div>
        </div>

        <CardContent className="p-4 space-y-3">
          {/* Tags */}
          <div className="flex flex-wrap gap-1">
            {product.tags.slice(0, 3).map((tag) => (
              <Badge
                key={tag}
                variant="secondary"
                className="text-xs bg-secondary/50 text-secondary-foreground"
              >
                {tag}
              </Badge>
            ))}
          </div>

          {/* Title */}
          <Link href={productUrl} className="block">
            <h3 className="font-semibold text-foreground line-clamp-2 group-hover:text-neon-pink transition-colors">
              {product.name}
            </h3>
          </Link>

          {/* Rating */}
          <div className="flex items-center gap-1" aria-label={`${product.rating} out of 5 stars, ${product.reviewCount} reviews`}>
            {[...Array(5)].map((_, i) => (
              <Star
                key={i}
                className={`h-4 w-4 ${
                  i < product.rating
                    ? "fill-neon-pink text-neon-pink"
                    : "fill-muted text-muted"
                }`}
              />
            ))}
            <span className="text-xs text-muted-foreground ml-1">
              ({product.reviewCount})
            </span>
          </div>

          {/* Price */}
          <div className="flex items-baseline gap-2">
            {/* Shopify: would use priceRange.minVariantPrice.amount */}
            <span className="text-xl font-bold text-neon-pink">
              €{product.price.toFixed(2)}
            </span>
            {/* Shopify: would use compareAtPriceRange.minVariantPrice.amount */}
            {product.originalPrice > product.price && (
              <span className="text-sm text-muted-foreground line-through">
                €{product.originalPrice.toFixed(2)}
              </span>
            )}
          </div>

          {/* Mobile add to cart button */}
          <Button
            className="w-full md:hidden bg-neon-pink hover:bg-neon-pink/90 text-primary-foreground mt-2"
            aria-label={`Add ${product.name} to cart`}
          >
            <ShoppingCart className="h-4 w-4 mr-2" />
            Add to Cart
          </Button>
        </CardContent>
      </Card>
    </motion.div>
  )
}
