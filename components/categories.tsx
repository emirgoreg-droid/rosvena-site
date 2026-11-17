
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
              <Image
                src={category.image}
                alt={`ROSVENA ${category.name} kategorisi`}
                fill
                sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 20vw"
                className="object-cover"
              />

              {category.featured && (
                <div className="absolute left-3 top-3 z-10 rounded-full border border-[#E8C58F]/70 bg-[#E8C58F] px-3 py-1.5">
                  <span className="text-[10px] font-semibold tracking-wide text-[#1A1A1A] md:text-xs">
                    ÖNE ÇIKAN
                  </span>
                </div>
              )}
            </div>

            <p className="mt-3 text-center text-sm font-medium tracking-wide text-[#292521] md:mt-4 md:text-base">
              {category.name}
            </p>
          </Link>
        ))}
      </div>
    </section>
  )
}