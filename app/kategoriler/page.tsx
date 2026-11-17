
import Image from "next/image"
import Link from "next/link"
import { ArrowUpRight } from "lucide-react"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"

const categories = [
  {
    number: "01",
    name: "Banyo",
    description: "Banyonuzda düzeni ve şıklığı bir araya getiren pratik çözümler.",
    image: "/images/category-banyo.png",
    href: "/kategoriler/banyo",
  },
  {
    number: "02",
    name: "Mutfak",
    description: "Mutfağınıza işlevsellik ve estetik kazandıran detaylar.",
    image: "/images/category-mutfak.png",
    href: "/kategoriler/mutfak",
  },
  {
    number: "03",
    name: "Düzenleyiciler",
    description: "Her eşya için daha düzenli ve ferah yaşam alanları.",
    image: "/images/category-duzenleyiciler.png",
    href: "/kategoriler/duzenleyiciler",
  },
  {
    number: "04",
    name: "Ev & Yaşam",
    description: "Yaşam alanlarınıza sıcaklık ve sadelik katan dokunuşlar.",
    image: "/images/category-ev-yasam.png",
    href: "/kategoriler/ev-yasam",
  },
  {
    number: "05",
    name: "Kişisel Bakım",
    description: "Günlük bakım rutininizi güzelleştiren düzenli çözümler.",
    image: "/images/category-kisisel-bakim.png",
    href: "/kategoriler/kisisel-bakim",
  },
]

export default function CategoriesPage() {
  return (
    <main className="min-h-screen bg-[#F7F4EE]">
      <Header />

      <section className="max-w-7xl mx-auto px-5 md:px-8 pt-16 md:pt-24 pb-20">
        <div className="max-w-3xl mx-auto text-center mb-12 md:mb-16">
          <div className="flex items-center justify-center gap-4 mb-6">
            <span className="w-10 h-px bg-[#B99768]" />
            <span className="text-[#A17C4D] text-[10px] md:text-xs tracking-[0.32em] font-semibold">
              ROSVENA COLLECTION
            </span>
            <span className="w-10 h-px bg-[#B99768]" />
          </div>

          <h1 className="font-serif text-4xl md:text-6xl text-[#28231E] tracking-tight">
            Yaşamın Her Alanında
            <span className="block text-[#A17C4D] mt-2">
              Zarif Dokunuşlar
            </span>
          </h1>

          <p className="max-w-xl mx-auto mt-6 text-[#77716A] text-sm md:text-base leading-7">
            Düzeni, işlevselliği ve zamansız tasarımı bir araya getiren
            ROSVENA koleksiyonlarını keşfedin.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 gap-6 md:gap-7">
          {categories.map((category, index) => (
            <Link
              key={category.number}
              href={category.href}
              className={`group block lg:col-span-2 ${
                index === 3 ? "lg:col-start-2" : ""
              } ${index === 4 ? "lg:col-start-4" : ""}`}
            >
              <div className="h-full overflow-hidden rounded-2xl border border-[#E8E0D4] bg-[#FCFAF6] shadow-[0_5px_22px_rgba(50,38,25,0.045)] transition-all duration-500 ease-out group-hover:-translate-y-1.5 group-hover:border-[#D9C6A9] group-hover:shadow-[0_16px_38px_rgba(50,38,25,0.11)] motion-reduce:transition-none">
                <div className="relative aspect-[16/10] overflow-hidden bg-[#EAE3D8]">
                  <Image
                    src={category.image}
                    alt={`ROSVENA ${category.name} koleksiyonu`}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.045] motion-reduce:transition-none"
                  />

                  <div className="absolute inset-0 bg-black/0 transition-colors duration-500 group-hover:bg-black/[0.03]" />

                  <div className="absolute top-4 left-4 rounded-full border border-white/70 bg-white/85 px-3 py-1.5 backdrop-blur-sm">
                    <span className="text-[#8C6A43] text-[10px] tracking-widest font-semibold">
                      {category.number}
                    </span>
                  </div>
                </div>

                <div className="p-5 md:p-6">
                  <div className="flex items-center justify-between gap-3">
                    <h2 className="font-serif text-2xl md:text-[27px] text-[#29231D] transition-colors duration-300 group-hover:text-[#A17C4D]">
                      {category.name}
                    </h2>

                    <span className="flex items-center justify-center w-9 h-9 rounded-full border border-[#D9C6A9] text-[#9A774D] transition-all duration-300 group-hover:bg-[#A98453] group-hover:text-white group-hover:border-[#A98453]">
                      <ArrowUpRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                    </span>
                  </div>

                  <p className="mt-3 text-[#81796F] text-sm leading-6">
                    {category.description}
                  </p>

                  <div className="mt-5 h-px w-full bg-[#EAE2D7] transition-colors duration-300 group-hover:bg-[#D9C6A9]" />

                  <p className="mt-4 text-[10px] font-semibold tracking-[0.2em] text-[#A17C4D]">
                    KOLEKSİYONU KEŞFET
                  </p>
                </div>
              </div>
            </Link>
          ))}
        </div>

        <div className="mt-20 border-t border-[#E4DACC] pt-10 text-center">
          <p className="font-serif text-2xl md:text-3xl text-[#302820]">
            Sadelik, her detayda gizlidir.
          </p>
          <p className="mt-3 text-sm text-[#81796F] tracking-wide">
            ROSVENA — Yaşam alanınızı kolaylaştırın.
          </p>
        </div>
      </section>

      <Footer />
    </main>
  )
}
