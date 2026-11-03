"use client"

import Image from "next/image"
import Link from "next/link"
import { Heart } from "lucide-react"
import { useState } from "react"

const products = [
  {
    id: 1,
    name: "Banyo Duzenleyici Set",
    image: "/images/product-1.jpg",
    href: "/urun/banyo-duzenleyici-set",
    isNew: true
  },
  {
    id: 2,
    name: "Mutfak Raf Sistemi",
    image: "/images/product-2.jpg",
    href: "/urun/mutfak-raf-sistemi",
    isNew: true
  },
  {
    id: 3,
    name: "Modular Saklama Kutusu",
    image: "/images/product-3.jpg",
    href: "/urun/modular-saklama-kutusu",
    isNew: false
  },
  {
    id: 4,
    name: "Bambu Sabunluk Seti",
    image: "/images/product-4.jpg",
    href: "/urun/bambu-sabunluk-seti",
    isNew: true
  },
  {
    id: 5,
    name: "Cekmece Duzenleyici",
    image: "/images/product-5.jpg",
    href: "/urun/cekmece-duzenleyici",
    isNew: false
  }
]

function ProductCard({ product }: { product: typeof products[0] }) {
  const [isFavorite, setIsFavorite] = useState(false)

  return (
    <div className="group transition-transform duration-300 ease-out hover:scale-[1.02]">
      <div className="relative bg-card rounded-2xl overflow-hidden mb-4">
        <Link href={product.href}>
          <div className="relative aspect-square">
            <Image
              src={product.image}
              alt={product.name}
              fill
              className="object-cover group-hover:scale-[1.08] transition-transform duration-500 ease-out"
            />
          </div>
        </Link>
        
        {/* Badges */}
        {product.isNew && (
          <div className="absolute top-3 left-3">
            <span className="bg-[#C6A47A] text-white text-xs px-3 py-1 rounded-full">
              Yeni
            </span>
          </div>
        )}

        {/* Favorite Button */}
        <button
          onClick={() => setIsFavorite(!isFavorite)}
          className="absolute top-3 right-3 w-9 h-9 bg-white rounded-full flex items-center justify-center shadow-sm hover:scale-110 transition-transform"
          aria-label={isFavorite ? "Favorilerden Cikar" : "Favorilere Ekle"}
        >
          <Heart 
            className={`w-4 h-4 transition-colors ${isFavorite ? "fill-red-500 text-red-500" : "text-foreground"}`}
          />
        </button>
      </div>

      <Link href={product.href}>
        <h3 className="text-foreground font-medium mb-2 group-hover:text-[#C6A47A] transition-colors">
          {product.name}
        </h3>
        <span className="inline-block text-xs px-3 py-1 rounded-full bg-[#F5F3F0] text-[#1A1A1A] border border-[#E6E0D7]">
          Cok Yakinda
        </span>
      </Link>
    </div>
  )
}

export function Products() {
  return (
    <section className="max-w-7xl mx-auto px-4 md:px-6 py-12">
      <div className="flex items-center justify-between mb-8">
        <div className="flex items-center gap-3">
          <div className="w-8 h-px bg-[#C6A47A]" />
          <h2 className="font-serif text-2xl md:text-3xl text-foreground">
            Yeni Urunler
          </h2>
        </div>
        <Link 
          href="/urunler/yeni" 
          className="text-sm text-muted-foreground hover:text-foreground transition-colors"
        >
          Tumunu Gor
        </Link>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4 md:gap-6">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </section>
  )
}
