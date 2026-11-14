
import Image from "next/image"
import Link from "next/link"
import { ArrowRight } from "lucide-react"

const banners = [
  {
    title: "Banyonuzda Düzen,\nZahmetsiz Şıklık.",
    subtitle: "ROSVENA | BANYO KOLEKSİYONU",
    description: "Delmeden, pratik ve estetik çözümlerle tanışın.",
    image: "/images/promo-bathroom.png",
    href: "/urunler",
  },
  {
    title: "Her Detayda\nDaha Fazla Düzen.",
    subtitle: "ROSVENA | YAŞAM KOLEKSİYONU",
    description: "Yaşam alanlarınıza sadelik ve işlevsellik katın.",
    image: "/images/promo-kitchen.png",
    href: "/urunler",
  },
]

export function PromoBanners() {
  return (
    <section className="max-w-7xl mx-auto px-4 md:px-6 py-14 md:py-20">
      <div className="grid md:grid-cols-2 gap-5 md:gap-7">
        {banners.map((banner) => (
          <Link
            key={banner.title}
            href={banner.href}
            className="group relative isolate min-h-[300px] md:min-h-[370px] overflow-hidden rounded-[22px] border border-[#DDB56E]/40 bg-[#211D18] shadow-[0_12px_35px_rgba(40,30,20,0.10)]"
          >
            <Image
              src={banner.image}
              alt={banner.title.replace("\n", " ")}
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              className="object-cover transition-transform duration-700 group-hover:scale-105"
            />

            <div className="absolute inset-0 bg-gradient-to-r from-[#171411]/85 via-[#171411]/55 to-transparent" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/25 to-transparent" />

            <div className="relative z-10 flex min-h-[300px] md:min-h-[370px] flex-col justify-center p-7 md:p-10 lg:p-12">
              <div className="mb-5 flex items-center gap-3">
                <span className="h-px w-8 bg-[#DDB56E]" />
                <p className="text-[#E8C58F] text-[10px] md:text-xs font-semibold tracking-[0.24em]">
                  {banner.subtitle}
                </p>
              </div>

              <h3 className="whitespace-pre-line font-serif text-white text-3xl md:text-4xl lg:text-[42px] leading-[1.16] mb-5">
                {banner.title}
              </h3>

              <p className="max-w-[300px] text-white/75 text-sm md:text-[15px] leading-relaxed mb-8">
                {banner.description}
              </p>

              <div className="flex items-center gap-3 text-[#E8C58F] text-xs md:text-sm font-semibold tracking-wide">
                <span className="border-b border-[#DDB56E]/60 pb-1">
                  Koleksiyonu Keşfet
                </span>
                <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-2" />
              </div>
            </div>

            <div className="absolute inset-3 rounded-[15px] border border-white/15 pointer-events-none" />
          </Link>
        ))}
      </div>
    </section>
  )
}
