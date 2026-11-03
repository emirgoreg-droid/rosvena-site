"use client"

import { Truck, Shield, Headphones } from "lucide-react"

export function AnnouncementBar() {
  return (
    <div className="bg-[#1A1A1A] text-white py-2.5 px-4">
      <div className="max-w-7xl mx-auto flex items-center justify-center gap-6 md:gap-12 text-xs md:text-sm">
        <div className="flex items-center gap-2">
          <Truck className="w-4 h-4 text-[#C6A47A]" />
          <span>1000 TL ve uzeri siparislerde ucretsiz kargo</span>
        </div>
        <div className="hidden sm:flex items-center gap-2">
          <Shield className="w-4 h-4 text-[#C6A47A]" />
          <span>Memnuniyet Garantisi</span>
        </div>
        <div className="hidden md:flex items-center gap-2">
          <Headphones className="w-4 h-4 text-[#C6A47A]" />
          <span>7/24 Musteri Destegi</span>
        </div>
      </div>
    </div>
  )
}
