"use client"

import { motion } from "framer-motion"

export function StarDoodle({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      className={className}
      aria-hidden="true"
    >
      <path
        d="M12 2L14.09 8.26L20.18 9.27L15.54 13.14L16.82 19.07L12 16.27L7.18 19.07L8.46 13.14L3.82 9.27L9.91 8.26L12 2Z"
        fill="currentColor"
      />
    </svg>
  )
}

export function HeartDoodle({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      className={className}
      aria-hidden="true"
    >
      <path
        d="M12 21.35L10.55 20.03C5.4 15.36 2 12.27 2 8.5C2 5.41 4.42 3 7.5 3C9.24 3 10.91 3.81 12 5.08C13.09 3.81 14.76 3 16.5 3C19.58 3 22 5.41 22 8.5C22 12.27 18.6 15.36 13.45 20.03L12 21.35Z"
        fill="currentColor"
      />
    </svg>
  )
}

export function CloudDoodle({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 64 40"
      fill="none"
      className={className}
      aria-hidden="true"
    >
      <path
        d="M52 28H14C8.48 28 4 23.52 4 18C4 13.04 7.68 8.92 12.48 8.16C14.16 3.44 18.68 0 24 0C28.24 0 31.96 2.16 34.12 5.44C35.32 4.52 36.84 4 38.5 4C42.08 4 45.04 6.64 45.68 10.08C46.92 9.4 48.36 9 49.88 9C55.52 9 60 13.96 60 20C60 24.42 56.42 28 52 28Z"
        fill="currentColor"
        fillOpacity="0.6"
      />
    </svg>
  )
}

export function SparkleCluster({ className = "" }: { className?: string }) {
  return (
    <motion.div
      className={`absolute pointer-events-none ${className}`}
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}
    >
      <motion.div
        animate={{ 
          scale: [1, 1.2, 1],
          rotate: [0, 15, 0]
        }}
        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
      >
        <StarDoodle className="w-4 h-4 text-neon-pink" />
      </motion.div>
    </motion.div>
  )
}

export function FloatingElements() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none" aria-hidden="true">
      {/* Top left cluster */}
      <motion.div
        className="absolute top-20 left-10"
        animate={{ y: [0, -10, 0], rotate: [0, 5, 0] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
      >
        <StarDoodle className="w-6 h-6 text-neon-pink/40" />
      </motion.div>
      
      {/* Top right */}
      <motion.div
        className="absolute top-32 right-20"
        animate={{ y: [0, 10, 0], rotate: [0, -10, 0] }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
      >
        <HeartDoodle className="w-5 h-5 text-neon-purple/50" />
      </motion.div>
      
      {/* Middle left */}
      <motion.div
        className="absolute top-1/3 left-5 md:left-20"
        animate={{ y: [0, -15, 0], x: [0, 5, 0] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 1 }}
      >
        <CloudDoodle className="w-12 h-8 text-neon-purple/30" />
      </motion.div>
      
      {/* Bottom right */}
      <motion.div
        className="absolute bottom-40 right-10"
        animate={{ y: [0, 8, 0], rotate: [0, 15, 0] }}
        transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut", delay: 0.8 }}
      >
        <StarDoodle className="w-5 h-5 text-neon-pink/30" />
      </motion.div>
      
      {/* Extra decorations - hidden on mobile */}
      <motion.div
        className="absolute top-1/2 right-1/4 hidden lg:block"
        animate={{ scale: [1, 1.1, 1], rotate: [0, -5, 0] }}
        transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
      >
        <HeartDoodle className="w-4 h-4 text-neon-pink/20" />
      </motion.div>
    </div>
  )
}
