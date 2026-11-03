import Image from "next/image"
import Link from "next/link"

const categories = [
  {
    name: "Banyo",
    image: "/images/category-banyo.jpg",
    href: "/kategoriler/banyo"
  },
  {
    name: "Mutfak",
    image: "/images/category-mutfak.jpg",
    href: "/kategoriler/mutfak"
  },
  {
    name: "Duzenleyiciler",
    image: "/images/category-duzenleyiciler.jpg",
    href: "/kategoriler/duzenleyiciler"
  },
  {
    name: "Ev & Yasam",
    image: "/images/category-ev-yasam.jpg",
    href: "/kategoriler/ev-yasam"
  },
  {
    name: "Kisisel Bakim",
    image: "/images/category-kisisel-bakim.jpg",
    href: "/kategoriler/kisisel-bakim"
  }
]

export function Categories() {
  return (
    <section className="max-w-7xl mx-auto px-4 md:px-6 py-12">
      <div className="flex items-center justify-between mb-8">
        <div className="flex items-center gap-3">
          <div className="w-8 h-px bg-[#C6A47A]" />
          <h2 className="font-serif text-2xl md:text-3xl text-foreground">
            Populer Kategoriler
          </h2>
        </div>
        <Link 
          href="/kategoriler" 
          className="text-sm text-muted-foreground hover:text-foreground transition-colors"
        >
          Tumunu Gor
        </Link>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4 md:gap-6">
        {categories.map((category) => (
          <Link 
            key={category.name} 
            href={category.href}
            className="group transition-transform duration-300 ease-out hover:scale-[1.02]"
          >
            <div className="relative aspect-square rounded-2xl overflow-hidden mb-3 bg-card">
              <Image
                src={category.image}
                alt={category.name}
                fill
                className="object-cover group-hover:scale-[1.08] transition-transform duration-500 ease-out"
              />
              <div className="absolute inset-0 bg-black/10 group-hover:bg-black/20 transition-colors" />
            </div>
            <p className="text-center text-foreground font-medium">{category.name}</p>
          </Link>
        ))}
      </div>
    </section>
  )
}
