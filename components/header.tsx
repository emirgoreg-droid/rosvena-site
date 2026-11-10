
"use client"

import Link from "next/link"
import { useState } from "react"
import { Search, User, Heart, ShoppingBag, Menu, X, ChevronDown } from "lucide-react"

const categories = [
  "Tum Kategoriler",
  "Banyo",
  "Mutfak",
  "Duzenleyiciler",
  "Ev & Yasam",
  "Kisisel Bakim",
  "Yeni Urunler"
]

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [searchQuery, setSearchQuery] = useState("")

  return (
    <header className="sticky top-0 z-50 bg-[#1A1A1A] text-white border-b border-white/10">

      {/* Main Header */}
      <div className="max-w-[1440px] mx-auto px-5 md:px-8 py-3 md:py-3.5">
        <div className="flex items-center justify-between gap-5">

          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 md:gap-3.5 shrink-0">
            <img
              src="/rosvena-logo-yeni.png"
              alt="ROSVENA Logo"
              className="w-14 h-14 md:w-[68px] md:h-[68px] object-contain"
            />
            <span className="font-serif text-[25px] md:text-[30px] font-medium tracking-[0.16em] text-[#E8C58F] drop-shadow-[0_0_8px_rgba(232,197,143,0.28)]">
  ROSVENA
</span>
          </Link>

          {/* Search Bar - Desktop */}
          <div className="hidden md:flex flex-1 max-w-[520px] mx-auto px-5">
            <div className="relative w-full">
              <Search className="absolute left-5 top-1/2 -translate-y-1/2 w-[18px] h-[18px] text-[#8C7A63]" />
              <input
                type="text"
                placeholder="Ne aramıştınız?"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-12 pr-5 py-3.5 bg-[#F7F5F1] rounded-full border border-[#D8D1C7] text-[#2B2B2B] text-sm placeholder:text-[#8C8378] focus:outline-none focus:ring-2 focus:ring-[#D6B27C]/40 transition-all duration-300"
              />
            </div>
          </div>

          {/* Icons */}
          <div className="flex items-center gap-2 md:gap-3">

            <button
              className="p-2.5 rounded-full text-[#D6B27C] hover:bg-white/10 hover:text-[#E8C995] transition-all duration-300"
              aria-label="Hesabım"
            >
              <User className="w-[21px] h-[21px]" strokeWidth={1.6} />
            </button>

            <button
              className="p-2.5 rounded-full text-[#D6B27C] hover:bg-white/10 hover:text-[#E8C995] transition-all duration-300"
              aria-label="Favoriler"
            >
              <Heart className="w-[21px] h-[21px]" strokeWidth={1.6} />
            </button>

            <button
              className="p-2.5 rounded-full text-[#D6B27C] hover:bg-white/10 hover:text-[#E8C995] transition-all duration-300 relative"
              aria-label="Sepet"
            >
              <ShoppingBag className="w-[21px] h-[21px]" strokeWidth={1.6} />
              <span className="absolute top-0 right-0 w-[17px] h-[17px] bg-[#D6B27C] text-[#1A1A1A] text-[10px] font-semibold rounded-full flex items-center justify-center">
                0
              </span>
            </button>

            <button
              className="md:hidden p-2.5 rounded-full text-[#D6B27C] hover:bg-white/10 transition-all duration-300"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label="Menüyü aç veya kapat"
            >
              {isMenuOpen ? (
                <X className="w-5 h-5" />
              ) : (
                <Menu className="w-5 h-5" />
              )}
            </button>
          </div>
        </div>

        {/* Search Bar - Mobile */}
        <div className="md:hidden mt-3">
          <div className="relative w-full">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-[#8C7A63]" />
            <input
              type="text"
              placeholder="Ne aramıştınız?"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-12 pr-4 py-3 bg-[#F7F5F1] rounded-full border border-[#D8D1C7] text-[#2B2B2B] text-sm placeholder:text-[#8C8378] focus:outline-none focus:ring-2 focus:ring-[#D6B27C]/40 transition-all duration-300"
            />
          </div>
        </div>
      </div>

      {/* Category Navigation - Desktop */}
      <nav className="hidden md:block bg-[#EAE7E2] border-t border-[#D8D1C7]">
        <div className="max-w-[1440px] mx-auto px-6 md:px-8">
          <ul className="flex items-center justify-center gap-2 lg:gap-3">
            {categories.map((category, index) => (
              <li key={category}>
                <Link
                  href={
                    index === 0
                      ? "/kategoriler"
                      : `/kategoriler/${category.toLowerCase().replace(/ & /g, "-").replace(/ /g, "-")}`
                  }
                  className="relative flex items-center gap-1.5 px-4 lg:px-5 py-4 text-[13px] lg:text-sm font-medium tracking-wide text-[#2B2B2B] hover:text-[#B58B55] transition-colors duration-300 after:absolute after:bottom-2 after:left-5 after:right-5 after:h-[1px] after:scale-x-0 after:bg-[#B58B55] after:transition-transform after:duration-300 hover:after:scale-x-100"
                >
                  {category}
                  {index === 0 && (
                    <ChevronDown className="w-3.5 h-3.5" strokeWidth={1.7} />
                  )}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </nav>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <nav className="md:hidden bg-[#EAE7E2] border-t border-[#D8D1C7]">
          <ul className="py-2 px-4">
            {categories.map((category, index) => (
              <li key={category}>
                <Link
                  href={
                    index === 0
                      ? "/kategoriler"
                      : `/kategoriler/${category.toLowerCase().replace(/ & /g, "-").replace(/ /g, "-")}`
                  }
                  className="flex items-center justify-between px-4 py-3.5 text-sm font-medium tracking-wide text-[#2B2B2B] hover:text-[#B58B55] hover:bg-white/50 rounded-lg transition-all duration-300"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {category}
                  {index === 0 && (
                    <ChevronDown className="w-4 h-4" />
                  )}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      )}
    </header>
  )
}

