import Image from "next/image"
import Link from "next/link"
import { ArrowRight } from "lucide-react"

const banners = [
  {
    title: "Yeni Sezon Urunleri",
    subtitle: "2024 Koleksiyonu",
    image: "/images/promo-new-season.jpg",
    href: "/koleksiyon/yeni-sezon",
    accent: "#C6A47A"
  },
  {
    title: "Minimal Tasarim",
    subtitle: "Maksimum Duzen",
    image: "/images/promo-minimal.jpg",
    href: "/koleksiyon/minimal",
    accent: "#1A1A1A"
  }
]

export function PromoBanners() {
  return (
    <section className="max-w-7xl mx-auto px-4 md:px-6 py-12">
      <div className="grid md:grid-cols-2 gap-4 md:gap-6">
        {banners.map((banner) => (
          <Link 
            key={banner.title}
            href={banner.href}
            className="group relative rounded-2xl overflow-hidden bg-card aspect-[16/9] md:aspect-[2/1]"
          >
            <Image
              src={banner.image}
              alt={banner.title}
              fill
              className="object-cover group-hover:scale-105 transition-transform duration-500"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-transparent" />
            <div className="absolute inset-0 p-6 md:p-8 flex flex-col justify-center">
              <p className="text-white/80 text-sm mb-1">{banner.subtitle}</p>
              <h3 className="text-white font-serif text-xl md:text-2xl lg:text-3xl mb-4">
                {banner.title}
              </h3>
              <div className="flex items-center gap-2 text-white text-sm font-medium group-hover:gap-3 transition-all">
                <span>Kesfet</span>
                <ArrowRight className="w-4 h-4" />
              </div>
            </div>
          </Link>
        ))}
      </div>
    </section>
  )
}
