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
    <header className="bg-background sticky top-0 z-50 border-b border-border">
      {/* Main Header */}
      <div className="max-w-7xl mx-auto px-4 md:px-6 py-4">
        <div className="flex items-center justify-between gap-4">
          {/* Logo */}
<Link href="/" className="flex items-center gap-3 shrink-0">
  <img
    src="/rosvena-logo.png"
    alt="ROSVENA Logo"
    className="w-12 h-12 md:w-14 md:h-14 object-contain"
  />
  <span className="font-serif text-2xl md:text-3xl font-semibold tracking-wide text-foreground">
    ROSVENA
  </span>
</Link>
          
          {/* Search Bar - Desktop */}
          <div className="hidden md:flex flex-1 max-w-xl mx-8">
            <div className="relative w-full">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
              <input
                type="text"
                placeholder="Ne aramisdiniz?"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-12 pr-4 py-3 bg-card rounded-full border border-border text-sm focus:outline-none focus:ring-2 focus:ring-foreground/20 placeholder:text-muted-foreground"
              />
            </div>
          </div>

          {/* Icons */}
          <div className="flex items-center gap-2 md:gap-4">
            <button className="p-2 hover:bg-card rounded-full transition-colors" aria-label="Hesabim">
              <User className="w-5 h-5 text-foreground" />
            </button>
            <button className="p-2 hover:bg-card rounded-full transition-colors" aria-label="Favoriler">
              <Heart className="w-5 h-5 text-foreground" />
            </button>
            <button className="p-2 hover:bg-card rounded-full transition-colors relative" aria-label="Sepet">
              <ShoppingBag className="w-5 h-5 text-foreground" />
              <span className="absolute -top-0.5 -right-0.5 w-4 h-4 bg-[#1A1A1A] text-white text-[10px] rounded-full flex items-center justify-center">
                0
              </span>
            </button>
            <button 
              className="md:hidden p-2 hover:bg-card rounded-full transition-colors"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label="Menu"
            >
              {isMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {/* Search Bar - Mobile */}
        <div className="md:hidden mt-3">
          <div className="relative w-full">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
            <input
              type="text"
              placeholder="Ne aramisdiniz?"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-12 pr-4 py-3 bg-card rounded-full border border-border text-sm focus:outline-none focus:ring-2 focus:ring-foreground/20 placeholder:text-muted-foreground"
            />
          </div>
        </div>
      </div>

      {/* Category Navigation - Desktop */}
      <nav className="hidden md:block border-t border-border bg-card/50">
        <div className="max-w-7xl mx-auto px-6">
          <ul className="flex items-center justify-center gap-1">
            {categories.map((category, index) => (
              <li key={category}>
                <Link 
                  href={index === 0 ? "/kategoriler" : `/kategoriler/${category.toLowerCase().replace(/ & /g, "-").replace(/ /g, "-")}`}
                  className="flex items-center gap-1 px-4 py-3 text-sm text-foreground hover:text-[#C6A47A] transition-colors"
                >
                  {category}
                  {index === 0 && <ChevronDown className="w-4 h-4" />}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </nav>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <nav className="md:hidden bg-background border-t border-border">
          <ul className="py-2">
            {categories.map((category, index) => (
              <li key={category}>
                <Link 
                  href={index === 0 ? "/kategoriler" : `/kategoriler/${category.toLowerCase().replace(/ & /g, "-").replace(/ /g, "-")}`}
                  className="block px-6 py-3 text-sm text-foreground hover:bg-card transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {category}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      )}
    </header>
  )
}
