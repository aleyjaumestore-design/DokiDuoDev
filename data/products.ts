// ===========================================
// SHOPIFY STOREFRONT API INTEGRATION NOTES
// ===========================================
// This file contains mock data structured to easily map to Shopify Storefront API.
// Replace mock data with actual API calls using the Shopify Storefront API.
//
// Example GraphQL query for products:
// ```graphql
// query GetProducts($first: Int!) {
//   products(first: $first) {
//     edges {
//       node {
//         id
//         handle        // maps to Product.handle
//         title         // maps to Product.name
//         description   // maps to Product.description
//         images(first: 2) {
//           edges {
//             node {
//               url       // maps to Product.image / Product.secondaryImage
//               altText
//             }
//           }
//         }
//         priceRange {
//           minVariantPrice {
//             amount      // maps to Product.price
//             currencyCode
//           }
//         }
//         compareAtPriceRange {
//           minVariantPrice {
//             amount      // maps to Product.originalPrice
//           }
//         }
//         variants(first: 10) {
//           edges {
//             node {
//               id
//               title     // e.g., "S / M", "L / XL"
//               availableForSale
//             }
//           }
//         }
//         tags          // maps to Product.tags (e.g., "couple-pack", "unisex")
//         collections(first: 5) {
//           edges {
//             node {
//               handle    // maps to Product.category
//               title
//             }
//           }
//         }
//       }
//     }
//   }
// }
// ```
// ===========================================

export interface Product {
  id: string
  handle: string // Shopify handle for URL routing
  name: string
  description: string
  image: string
  secondaryImage?: string
  price: number
  originalPrice: number
  currency: string
  category: string
  tags: string[]
  rating: number
  reviewCount: number
  isSale: boolean
  isCouplePack: boolean
  savingsPercent: number
  sizes: string[] // Available size combinations for couple packs
}

export interface Category {
  id: string
  name: string
  handle: string // Shopify collection handle
  productCount: number
}

export interface Testimonial {
  id: string
  name: string
  avatar: string
  content: string
  rating: number
}

// Mock Categories (would map to Shopify Collections)
export const categories: Category[] = [
  { id: "1", name: "Naruto", handle: "naruto", productCount: 24 },
  { id: "2", name: "One Piece", handle: "one-piece", productCount: 18 },
  { id: "3", name: "Dragon Ball", handle: "dragon-ball", productCount: 15 },
  { id: "4", name: "Demon Slayer", handle: "demon-slayer", productCount: 21 },
  { id: "5", name: "Jujutsu Kaisen", handle: "jujutsu-kaisen", productCount: 16 },
  { id: "6", name: "Attack on Titan", handle: "attack-on-titan", productCount: 12 },
  { id: "7", name: "Spy x Family", handle: "spy-x-family", productCount: 14 },
  { id: "8", name: "Chainsaw Man", handle: "chainsaw-man", productCount: 10 },
]

// Mock Products (would map to Shopify Products)
export const products: Product[] = [
  {
    id: "gid://shopify/Product/1",
    handle: "naruto-hinata-couple-pack",
    name: "Naruto & Hinata Couple Pack",
    description: "Matching oversized tees featuring Naruto and Hinata in a minimalist anime art style.",
    image: "/images/pack-naruto.jpg",
    secondaryImage: "/images/pack-naruto.jpg",
    price: 54.99,
    originalPrice: 69.98,
    currency: "EUR",
    category: "naruto",
    tags: ["Couple Pack", "Unisex", "Oversize"],
    rating: 5,
    reviewCount: 128,
    isSale: true,
    isCouplePack: true,
    savingsPercent: 21,
    sizes: ["S/S", "S/M", "M/M", "M/L", "L/L", "L/XL", "XL/XL"],
  },
  {
    id: "gid://shopify/Product/2",
    handle: "luffy-nami-couple-pack",
    name: "Luffy & Nami Adventure Pack",
    description: "Set sail together with these One Piece inspired couple tees featuring Luffy and Nami.",
    image: "/images/pack-onepiece.jpg",
    secondaryImage: "/images/pack-onepiece.jpg",
    price: 52.99,
    originalPrice: 65.98,
    currency: "EUR",
    category: "one-piece",
    tags: ["Couple Pack", "Unisex", "Regular Fit"],
    rating: 5,
    reviewCount: 94,
    isSale: true,
    isCouplePack: true,
    savingsPercent: 20,
    sizes: ["S/S", "S/M", "M/M", "M/L", "L/L", "L/XL", "XL/XL"],
  },
  {
    id: "gid://shopify/Product/3",
    handle: "vegeta-bulma-couple-pack",
    name: "Vegeta & Bulma Power Couple",
    description: "The ultimate Dragon Ball power couple on premium cotton tees.",
    image: "/images/pack-dragonball.jpg",
    secondaryImage: "/images/pack-dragonball.jpg",
    price: 56.99,
    originalPrice: 71.98,
    currency: "EUR",
    category: "dragon-ball",
    tags: ["Couple Pack", "Unisex", "Oversize"],
    rating: 5,
    reviewCount: 76,
    isSale: true,
    isCouplePack: true,
    savingsPercent: 21,
    sizes: ["S/S", "S/M", "M/M", "M/L", "L/L", "L/XL", "XL/XL"],
  },
  {
    id: "gid://shopify/Product/4",
    handle: "tanjiro-nezuko-couple-pack",
    name: "Tanjiro & Nezuko Sibling Pack",
    description: "Honor the bond of siblings with this Demon Slayer inspired pack.",
    image: "/images/pack-demon.jpg",
    secondaryImage: "/images/pack-demon.jpg",
    price: 54.99,
    originalPrice: 67.98,
    currency: "EUR",
    category: "demon-slayer",
    tags: ["Couple Pack", "Unisex", "Regular Fit"],
    rating: 5,
    reviewCount: 112,
    isSale: true,
    isCouplePack: true,
    savingsPercent: 19,
    sizes: ["S/S", "S/M", "M/M", "M/L", "L/L", "L/XL", "XL/XL"],
  },
  {
    id: "gid://shopify/Product/5",
    handle: "gojo-geto-couple-pack",
    name: "Gojo & Geto Best Friends Pack",
    description: "Represent the strongest duo from Jujutsu Kaisen.",
    image: "/images/pack-jjk.jpg",
    secondaryImage: "/images/pack-jjk.jpg",
    price: 58.99,
    originalPrice: 73.98,
    currency: "EUR",
    category: "jujutsu-kaisen",
    tags: ["Couple Pack", "Unisex", "Oversize"],
    rating: 5,
    reviewCount: 89,
    isSale: true,
    isCouplePack: true,
    savingsPercent: 20,
    sizes: ["S/S", "S/M", "M/M", "M/L", "L/L", "L/XL", "XL/XL"],
  },
  {
    id: "gid://shopify/Product/6",
    handle: "eren-mikasa-couple-pack",
    name: "Eren & Mikasa Forever Pack",
    description: "Attack on Titan couple pack for fans of the epic series.",
    image: "/images/pack-aot.jpg",
    secondaryImage: "/images/pack-aot.jpg",
    price: 53.99,
    originalPrice: 67.98,
    currency: "EUR",
    category: "attack-on-titan",
    tags: ["Couple Pack", "Unisex", "Regular Fit"],
    rating: 4,
    reviewCount: 67,
    isSale: true,
    isCouplePack: true,
    savingsPercent: 21,
    sizes: ["S/S", "S/M", "M/M", "M/L", "L/L", "L/XL", "XL/XL"],
  },
  {
    id: "gid://shopify/Product/7",
    handle: "loid-yor-couple-pack",
    name: "Loid & Yor Spy Couple Pack",
    description: "The most fashionable spy couple from Spy x Family.",
    image: "/images/pack-spy.jpg",
    secondaryImage: "/images/pack-spy.jpg",
    price: 55.99,
    originalPrice: 69.98,
    currency: "EUR",
    category: "spy-x-family",
    tags: ["Couple Pack", "Unisex", "Oversize"],
    rating: 5,
    reviewCount: 134,
    isSale: true,
    isCouplePack: true,
    savingsPercent: 20,
    sizes: ["S/S", "S/M", "M/M", "M/L", "L/L", "L/XL", "XL/XL"],
  },
  {
    id: "gid://shopify/Product/8",
    handle: "denji-power-couple-pack",
    name: "Denji & Power Chaos Pack",
    description: "Embrace the chaos with this Chainsaw Man inspired couple pack.",
    image: "/images/pack-chainsaw.jpg",
    secondaryImage: "/images/pack-chainsaw.jpg",
    price: 57.99,
    originalPrice: 71.98,
    currency: "EUR",
    category: "chainsaw-man",
    tags: ["Couple Pack", "Unisex", "Oversize"],
    rating: 5,
    reviewCount: 58,
    isSale: true,
    isCouplePack: true,
    savingsPercent: 19,
    sizes: ["S/S", "S/M", "M/M", "M/L", "L/L", "L/XL", "XL/XL"],
  },
]

// Featured packs for hero carousel
export const featuredPacks = products.slice(0, 5)

// Mock Testimonials
export const testimonials: Testimonial[] = [
  {
    id: "1",
    name: "Sarah & Mike",
    avatar: "/placeholder.svg?height=64&width=64",
    content: "We wore our Naruto packs to the anime convention and got so many compliments! The quality is amazing and the fit is perfect.",
    rating: 5,
  },
  {
    id: "2",
    name: "Alex & Jordan",
    avatar: "/placeholder.svg?height=64&width=64",
    content: "Finally found a place that understands couple goals! The Spy x Family pack is our favorite thing to wear on date nights.",
    rating: 5,
  },
  {
    id: "3",
    name: "Emma & Chris",
    avatar: "/placeholder.svg?height=64&width=64",
    content: "Great value for money. Buying the pack saved us almost 20% compared to individual tees. Will definitely order more!",
    rating: 5,
  },
]

// Stats for social proof
export const stats = {
  packsSold: "10,000+",
  happyCouples: "5,000+",
  animeDesigns: "200+",
}
