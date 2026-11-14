
import Image from "next/image"
import Link from "next/link"
import { ArrowRight } from "lucide-react"

const spaces = [
  {
    number: "01",
    category: "BANYO",
    title: "Her Detayda\nZahmetsiz Düzen.",
    description:
      "Delmeden monte edilen pratik çözümlerle banyonuza şıklık ve düzen katın.",
    image: "/images/category-banyo.png",
  },
  {
    number: "02",
    category: "MUTFAK",
    title: "Daha Düzenli,\nDaha Keyifli.",
    description:
      "Mutfakta ihtiyaç duyduğunuz düzeni estetik detaylarla tamamlayın.",
    image: "/images/category-mutfak.png",
  },
  {
    number: "03",
    category: "EV & YAŞAM",
    title: "Yaşam Alanınızda\nSadelik.",
    description:
      "Günlük yaşamınızı kolaylaştıran işlevsel ve zamansız çözümleri keşfedin.",
    image: "/images/category-ev-yasam.png",
  },
]

export function LivingSpaces() {
  return (
    <section className="w-full max-w-7xl mx-auto px-4 md:px-6 py-16 md:py-24">
      <div className="text-center mb-10 md:mb-14">
        <p className="text-[#B58A4A] text-[10px] md:text-xs font-semibold tracking-[0.3em] mb-4">
          ROSVENA | YAŞAMIN HER ALANINDA
        </p>

        <h2 className="font-serif text-3xl md:text-5xl text-[#25211D] mb-4">
          Yaşam Alanlarınıza ROSVENA Dokunuşu
        </h2>

        <p className="text-[#77716A] text-sm md:text-base max-w-2xl mx-auto leading-relaxed">
          Her alan için düşünülmüş, sadeliği ve işlevselliği bir araya
          getiren çözümlerle tanışın.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-5 md:gap-6">
        {spaces.map((space) => (
          <Link
            href="/urunler"
            key={space.number}
            className="group relative isolate min-h-[390px] md:min-h-[470px] overflow-hidden rounded-[22px] bg-[#211D18] shadow-[0_12px_35px_rgba(40,30,20,0.10)]"
          >
            <Image
              src={space.image}
              alt={`${space.category} koleksiyonu`}
              fill
              sizes="(max-width: 768px) 100vw, 33vw"
              className="object-cover transition-transform duration-700 group-hover:scale-105"
            />

            <div className="absolute inset-0 bg-gradient-to-t from-[#171411]/90 via-[#171411]/25 to-transparent" />

            <div className="absolute top-6 left-6 flex items-center gap-3">
              <span className="text-[#E8C58F] text-xs tracking-widest">
                {space.number}
              </span>
              <span className="w-8 h-px bg-[#E8C58F]" />
              <span className="text-white/90 text-[10px] font-semibold tracking-[0.22em]">
                {space.category}
              </span>
            </div>

            <div className="absolute bottom-0 left-0 right-0 p-7 md:p-8">
              <h3 className="font-serif text-white text-3xl md:text-[34px] leading-tight whitespace-pre-line mb-4">
                {space.title}
              </h3>

              <p className="text-white/75 text-sm leading-relaxed max-w-[290px] mb-7">
                {space.description}
              </p>

              <div className="flex items-center gap-3 text-[#E8C58F] text-xs font-semibold tracking-wide">
                <span className="border-b border-[#E8C58F]/60 pb-1">
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
