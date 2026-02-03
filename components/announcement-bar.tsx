"use client"

import { StarDoodle, HeartDoodle } from "./decorative-elements"

export function AnnouncementBar() {
  return (
    <div className="bg-secondary/80 text-secondary-foreground relative z-50">
      {/* Main announcement */}
      <div className="flex items-center justify-center gap-2 py-2 px-4 text-sm">
        <StarDoodle className="w-4 h-4 text-neon-pink" />
        <span className="font-medium">Free shipping on orders over €50</span>
        <StarDoodle className="w-4 h-4 text-neon-pink" />
      </div>
      
      {/* Marquee ticker */}
      <div className="bg-gradient-to-r from-neon-purple/20 via-neon-pink/20 to-neon-purple/20 overflow-hidden py-1.5">
        <div className="animate-marquee whitespace-nowrap flex items-center">
          {[...Array(4)].map((_, i) => (
            <div key={i} className="flex items-center mx-4">
              <HeartDoodle className="w-3 h-3 text-neon-pink mx-3" />
              <span className="text-sm font-semibold text-neon-pink">
                COUPLE SPECIAL: Buy one get the second 10% off
              </span>
              <StarDoodle className="w-3 h-3 text-neon-purple mx-3" />
              <span className="text-sm font-semibold text-neon-purple">
                COUPLE SPECIAL: Buy one get the second 10% off
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
