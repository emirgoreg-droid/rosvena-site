
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
    <section className="relative mx-auto w-full max-w-7xl px-4 py-16 md:px-6 md:py-24">
      <div className="mb-10 text-center md:mb-14">
        <div className="mb-5 flex items-center justify-center gap-3">
          <span className="h-px w-9 bg-[#B58B55]" />
          <Instagram className="h-4 w-4 text-[#B58B55]" strokeWidth={1.6} />
          <span className="text-[10px] font-semibold tracking-[0.3em] text-[#B58B55] md:text-xs">
            ROSVENA | SOSYAL YAŞAM
          </span>
          <span className="h-px w-9 bg-[#B58B55]" />
        </div>

        <h2 className="mb-4 font-serif text-3xl text-[#25211D] md:text-5xl">
          ROSVENA Dünyasından İlham Alın
        </h2>

        <p className="mx-auto mb-5 max-w-xl text-sm leading-relaxed text-[#77716A] md:text-base">
          Yaşam alanlarınıza ilham veren detaylar, yeni fikirler ve
          ROSVENA&apos;dan özel paylaşımlar.
        </p>

        <Link
          href={instagramUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 text-sm font-medium text-[#946D3D] transition-colors duration-300 hover:text-[#B58B55]"
        >
          @rosvena.home
          <ArrowUpRight className="h-4 w-4" />
        </Link>
      </div>

      <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 md:gap-4 lg:grid-cols-6">
        {instagramPosts.map((post) => (
          <Link
            key={post.id}
            href={instagramUrl}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="ROSVENA Instagram hesabını ziyaret et"
            className="group relative aspect-square overflow-hidden rounded-[16px] bg-[#E9E1D5] shadow-[0_8px_25px_rgba(40,30,20,0.07)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_14px_30px_rgba(40,30,20,0.13)] md:rounded-[20px]"
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

            <div className="absolute inset-0 flex items-center justify-center bg-[#171411]/0 transition-colors duration-500 group-hover:bg-[#171411]/35">
              <div className="flex h-11 w-11 scale-90 items-center justify-center rounded-full border border-white/70 bg-white/10 opacity-0 backdrop-blur-sm transition-all duration-300 group-hover:scale-100 group-hover:opacity-100">
                <Instagram className="h-5 w-5 text-white" strokeWidth={1.6} />
              </div>
            </div>
          </Link>
        ))}
      </div>

      <div className="mt-10 flex justify-center md:mt-12">
        <Link
          href={instagramUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="group inline-flex items-center gap-3 rounded-full border border-[#B58B55] bg-[#211F1B] px-8 py-4 text-xs font-semibold tracking-wide text-[#E8C58F] shadow-[0_5px_18px_rgba(40,30,20,0.12)] transition-all duration-300 hover:-translate-y-1 hover:border-[#D6B47A] hover:bg-[#E8C58F] hover:text-[#211B14] hover:shadow-[0_9px_24px_rgba(181,139,85,0.22)] md:text-sm"
        >
          Instagram&apos;da Bizi Takip Edin
          <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
        </Link>
      </div>
    </section>
  )
}
