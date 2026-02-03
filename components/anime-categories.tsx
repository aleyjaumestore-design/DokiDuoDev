"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { categories } from "@/data/products"

interface AnimeCategoriesProps {
  onCategorySelect: (category: string | null) => void
  selectedCategory: string | null
}

export function AnimeCategories({ onCategorySelect, selectedCategory }: AnimeCategoriesProps) {
  const handleCategoryClick = (handle: string) => {
    // Toggle category selection
    const newCategory = selectedCategory === handle ? null : handle
    onCategorySelect(newCategory)
    
    // Smooth scroll to products section
    const productsSection = document.getElementById("featured-packs")
    if (productsSection) {
      productsSection.scrollIntoView({ behavior: "smooth", block: "start" })
    }
  }

  return (
    <section className="py-16 md:py-20" aria-labelledby="categories-heading">
      <div className="container mx-auto px-4 lg:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center space-y-8"
        >
          <h2
            id="categories-heading"
            className="font-[var(--font-fredoka)] text-3xl md:text-4xl font-bold"
          >
            Choose your <span className="text-neon-purple text-glow-purple">anime</span>
          </h2>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="flex flex-wrap justify-center gap-3"
          >
            {categories.map((category, index) => (
              <motion.div
                key={category.id}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 * index, duration: 0.3 }}
              >
                <Button
                  variant={selectedCategory === category.handle ? "default" : "outline"}
                  size="lg"
                  onClick={() => handleCategoryClick(category.handle)}
                  className={`
                    font-medium transition-all duration-300
                    ${selectedCategory === category.handle
                      ? "bg-neon-pink hover:bg-neon-pink/90 text-primary-foreground glow-pink border-transparent"
                      : "border-border/50 hover:border-neon-purple/50 hover:bg-neon-purple/10 hover:text-foreground"
                    }
                  `}
                  aria-pressed={selectedCategory === category.handle}
                >
                  {category.name}
                </Button>
              </motion.div>
            ))}
          </motion.div>

          {selectedCategory && (
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-muted-foreground"
            >
              Showing packs from <span className="text-neon-pink font-medium">{categories.find(c => c.handle === selectedCategory)?.name}</span>
              <Button
                variant="link"
                onClick={() => onCategorySelect(null)}
                className="text-neon-purple hover:text-neon-pink ml-2 p-0 h-auto"
              >
                Clear filter
              </Button>
            </motion.p>
          )}
        </motion.div>
      </div>
    </section>
  )
}
