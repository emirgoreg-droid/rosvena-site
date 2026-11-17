
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
    <section className="mx-auto max-w-[1500px] px-5 py-14 md:px-7 md:py-16">
      <div className="mb-8 flex items-center justify-between md:mb-10">
        <div className="flex items-center gap-3">
          <div className="h-px w-8 bg-[#C6A47A] md:w-10" />
          <h2 className="font-serif text-2xl text-[#1A1A1A] md:text-3xl">
            Popüler Kategoriler
          </h2>
        </div>

        <Link
          href="/kategoriler"
          className="text-sm text-[#77716A] transition-colors duration-300 hover:text-[#A98250]"
        >
          Tümünü Gör <span className="ml-1">→</span>
        </Link>
      </div>

      <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-5 md:gap-6">
        {categories.map((category) => (
          <Link
            key={category.name}
            href={category.href}
            className="group block rounded-2xl outline-none focus-visible:ring-2 focus-visible:ring-[#B58B55] focus-visible:ring-offset-4"
          >
            <div className="relative aspect-[1.4/1] overflow-hidden rounded-2xl bg-[#EAE5DE] shadow-[0_4px_18px_rgba(40,30,20,0.06)] md:rounded-3xl">

              {/* Fotoğraf ve yavaş zoom */}
              <Image
                src={category.image}
                alt={`ROSVENA ${category.name} kategorisi`}
                fill
                sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 20vw"
                className="object-cover transition-transform duration-[1800ms] ease-in-out group-hover:scale-[1.04]"
              />

              {/* Fotoğraf üzerinde yumuşak sinematik ışık */}
              <div className="pointer-events-none absolute inset-0 z-[1] bg-[radial-gradient(ellipse_at_center,rgba(255,255,255,0.16)_0%,transparent_70%)] opacity-0 transition-opacity duration-1000 ease-in-out group-hover:opacity-100" />

              {/* Alt kısımda koyu transparan geçiş */}
              <div className="pointer-events-none absolute inset-0 z-[2] bg-gradient-to-t from-black/65 via-black/15 to-transparent opacity-0 transition-opacity duration-1000 ease-in-out group-hover:opacity-100" />

              {/* Hover sırasında fotoğraf üzerinde beliren kategori adı */}
              <div className="pointer-events-none absolute inset-x-0 bottom-0 z-[3] flex justify-center px-3 pb-5 opacity-0 transition-opacity duration-1000 ease-in-out group-hover:opacity-100 md:pb-6">
                <span className="font-serif text-lg tracking-wide text-white drop-shadow-md md:text-xl">
                  {category.name}
                </span>
              </div>

              {/* Öne çıkan etiketi */}
              {category.featured && (
                <div className="absolute left-3 top-3 z-10 rounded-full border border-[#E8C58F]/70 bg-[#E8C58F] px-3 py-1.5">
                  <span className="text-[10px] font-semibold tracking-wide text-[#1A1A1A] md:text-xs">
                    ÖNE ÇIKAN
                  </span>
                </div>
              )}
            </div>

            {/* Normal durumda görünen kategori adı */}
            <p className="mt-3 text-center text-sm font-medium tracking-wide text-[#292521] md:mt-4 md:text-base">
              {category.name}
            </p>
          </Link>
        ))}
      </div>
    </section>
  )
}
