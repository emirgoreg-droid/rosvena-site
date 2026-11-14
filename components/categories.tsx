
import Image from "next/image"
import Link from "next/link"

const categories = [
  {
    name: "Banyo",
    image: "/images/category-banyo.png",
    href: "/kategoriler/banyo",
    featured: true,
  },
  {
    name: "Mutfak",
    image: "/images/category-mutfak.png",
    href: "/kategoriler/mutfak",
  },
  {
    name: "Düzenleyiciler",
    image: "/images/category-duzenleyiciler.png",
    href: "/kategoriler/duzenleyiciler",
  },
  {
    name: "Ev & Yaşam",
    image: "/images/category-ev-yasam.png",
    href: "/kategoriler/ev-yasam",
  },
  {
    name: "Kişisel Bakım",
    image: "/images/category-kisisel-bakim.png",
    href: "/kategoriler/kisisel-bakim",
  },
]

export function Categories() {
  return (
    <section className="max-w-7xl mx-auto px-4 md:px-6 py-14 md:py-16">
      <div className="flex items-center justify-between mb-8 md:mb-10">
        <div className="flex items-center gap-3">
          <div className="w-8 md:w-10 h-px bg-[#C6A47A]" />
          <h2 className="font-serif text-2xl md:text-3xl text-[#1A1A1A]">
            Popüler Kategoriler
          </h2>
        </div>

        <Link
          href="/kategoriler"
          className="text-sm text-[#77716A] hover:text-[#B18B58] transition-colors"
        >
          Tümünü Gör <span className="ml-1">→</span>
        </Link>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4 md:gap-6">
        {categories.map((category) => (
          <Link
            key={category.name}
            href={category.href}
            className="group block"
          >
            <div className="relative aspect-square rounded-2xl md:rounded-3xl overflow-hidden bg-[#EAE5DE] shadow-sm">
              <Image
                src={category.image}
                alt={`ROSVENA ${category.name} kategorisi`}
                fill
                sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 20vw"
                className="object-cover transition-transform duration-700 ease-out group-hover:scale-110"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black/35 via-transparent to-black/5 opacity-70 group-hover:opacity-100 transition-opacity duration-500" />

              {category.featured && (
                <div className="absolute top-3 left-3 rounded-full bg-[#E8C58F] px-3 py-1.5">
                  <span className="text-[10px] md:text-xs font-semibold tracking-wide text-[#1A1A1A]">
                    ÖNE ÇIKAN
                  </span>
                </div>
              )}

              <div className="absolute bottom-4 left-0 right-0 flex justify-center">
                <span className="text-white text-xs md:text-sm tracking-wider opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  KEŞFET →
                </span>
              </div>
            </div>

            <div className="flex items-center justify-center gap-2 mt-4">
              <span className="w-5 h-px bg-[#C6A47A] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <p className="text-center text-[#292521] font-medium text-sm md:text-base tracking-wide group-hover:text-[#A27B4D] transition-colors">
                {category.name}
              </p>
              <span className="w-5 h-px bg-[#C6A47A] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </div>
          </Link>
        ))}
      </div>
    </section>
  )
}

