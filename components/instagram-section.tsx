
import Image from "next/image"
import Link from "next/link"
import { Instagram, ArrowUpRight } from "lucide-react"

const instagramPosts = [
  { id: 1, image: "/images/instagram-1.jpg", zoom: true },
  { id: 2, image: "/images/instagram-2.jpg" },
  { id: 3, image: "/images/instagram-3.png", zoom: true },
  { id: 4, image: "/images/instagram-4.jpg" },
  { id: 5, image: "/images/instagram-5.webp" },
  { id: 6, image: "/images/instagram-6.jpg" },
]

const instagramUrl = "https://instagram.com/rosvena.home"

export function InstagramSection() {
  return (
    <section className="relative w-full max-w-7xl mx-auto px-4 md:px-6 py-16 md:py-24">
      <div className="text-center mb-10 md:mb-14">
        <div className="flex items-center justify-center gap-3 mb-5">
          <span className="w-9 h-px bg-[#C6A47A]" />
          <Instagram className="w-4 h-4 text-[#B58A4A]" strokeWidth={1.6} />
          <span className="text-[#B58A4A] text-[10px] md:text-xs font-semibold tracking-[0.3em]">
            ROSVENA | SOSYAL YAŞAM
          </span>
          <span className="w-9 h-px bg-[#C6A47A]" />
        </div>

        <h2 className="font-serif text-3xl md:text-5xl text-[#25211D] mb-4">
          ROSVENA Dünyasından İlham Alın
        </h2>

        <p className="text-[#77716A] text-sm md:text-base max-w-xl mx-auto leading-relaxed mb-5">
          Yaşam alanlarınıza ilham veren detaylar, yeni fikirler ve
          ROSVENA&apos;dan özel paylaşımlar.
        </p>

        <Link
          href={instagramUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 text-[#A77B40] hover:text-[#79572D] text-sm font-medium transition-colors"
        >
          @rosvena.home
          <ArrowUpRight className="w-4 h-4" />
        </Link>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 md:gap-4">
        {instagramPosts.map((post) => (
          <Link
            key={post.id}
            href={instagramUrl}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="ROSVENA Instagram hesabını ziyaret et"
            className="group relative aspect-square overflow-hidden rounded-[16px] md:rounded-[20px] bg-[#E9E1D5] shadow-[0_8px_25px_rgba(40,30,20,0.07)]"
          >
            <Image
              src={post.image}
              alt={`ROSVENA Instagram paylaşımı ${post.id}`}
              fill
              sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 16vw"
              className={`object-cover transition-transform duration-700 ease-out ${
                post.zoom
                  ? "scale-[1.15] group-hover:scale-[1.23]"
                  : "group-hover:scale-110"
              }`}
            />

            <div className="absolute inset-0 bg-[#171411]/0 group-hover:bg-[#171411]/35 transition-colors duration-500 flex items-center justify-center">
              <div className="w-11 h-11 rounded-full border border-white/70 bg-white/10 backdrop-blur-sm flex items-center justify-center opacity-0 scale-90 group-hover:opacity-100 group-hover:scale-100 transition-all duration-300">
                <Instagram className="w-5 h-5 text-white" strokeWidth={1.6} />
              </div>
            </div>
          </Link>
        ))}
      </div>

      <div className="flex justify-center mt-10 md:mt-12">
        <Link
          href={instagramUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="group inline-flex items-center gap-3 rounded-full border border-[#C6A47A] px-7 py-3.5 text-[#8D693B] hover:bg-[#C6A47A] hover:text-white text-xs md:text-sm font-semibold tracking-wide transition-all duration-300"
        >
          Instagram&apos;da Bizi Takip Edin
          <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
        </Link>
      </div>
    </section>
  )
}
