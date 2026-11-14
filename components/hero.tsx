
import { Button } from "@/components/ui/button"
import Image from "next/image"
import Link from "next/link"

export function Hero() {
  return (
    <section className="w-full py-0">
      <div className="relative w-full h-[560px] md:h-[620px] lg:h-[min(680px,calc(100svh-200px))] min-h-[500px] overflow-hidden bg-[#171411]">

        <Image
          src="/images/hero-banner.jpg"
          alt="ROSVENA yapışkanlı banyo düzenleyicileri"
          fill
          priority
          sizes="100vw"
          className="object-cover object-[58%_center] md:object-[center_48%]"
        />

        <div className="absolute inset-0 bg-gradient-to-r from-black/75 via-black/35 to-transparent" />

        <div className="relative z-10 flex h-full items-end md:items-center">
          <div className="w-full max-w-2xl px-7 pb-12 md:px-12 md:py-16 lg:px-20">

            <p className="text-[#E8C58F] text-xs md:text-sm font-semibold tracking-[0.3em] mb-5">
              ROSVENA | EVİNİZDE YENİ BİR DÜZEN
            </p>

            <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl text-white leading-tight mb-6">
              Banyonuzda
              <br />
              Düzen ve Şıklık.
            </h1>

            <p className="text-white/85 text-sm md:text-base lg:text-lg leading-relaxed max-w-lg mb-9">
              Delme gerektirmeyen yapışkanlı çözümlerle
              yaşam alanlarınızda pratikliği ve estetiği
              bir araya getirin.
            </p>

            <Button
              asChild
              size="lg"
              className="rounded-full px-9 py-6 bg-[#E8C58F] hover:bg-[#D9B477] text-[#1A1A1A] font-semibold text-sm transition-all duration-300"
            >
              <Link href="/urunler">
                Koleksiyonu Keşfet
                <span className="ml-2">→</span>
              </Link>
            </Button>

          </div>
        </div>
      </div>
    </section>
  )
}
