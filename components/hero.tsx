import { Button } from "@/components/ui/button"
import Image from "next/image"
import Link from "next/link"

export function Hero() {
  return (
    <section className="max-w-7xl mx-auto px-4 md:px-6 py-6 md:py-10">
      <div className="relative bg-card rounded-2xl md:rounded-3xl overflow-hidden">
        <div className="grid md:grid-cols-2 items-center">
          {/* Text Content */}
          <div className="p-8 md:p-12 lg:p-16 order-2 md:order-1">
            <p className="text-[#C6A47A] text-sm md:text-base font-medium tracking-wider mb-4">
              PRATIK | ESTETIK | KALITELI
            </p>
            <h1 className="font-serif text-3xl md:text-4xl lg:text-5xl text-foreground mb-4 text-balance leading-tight">
              Yasam Alaninizi Guzellestiriyoruz.
            </h1>
            <p className="text-muted-foreground mb-8 max-w-md text-pretty leading-relaxed">
              ROSVENA, eviniz icin pratik, estetik ve kullanisli cozumler sunar. Yasaminisin her kosesine dokunan urunlerimizle tanisin.
            </p>
            <Button asChild size="lg" className="rounded-full px-10 py-6 text-sm bg-[#1A1A1A] hover:bg-[#0D0D0D] text-white transition-all duration-300 ease-out">
              <Link href="/urunler">
                Alisverise Basla
              </Link>
            </Button>
          </div>
          
          {/* Hero Image */}
          <div className="relative h-64 md:h-full md:min-h-[400px] lg:min-h-[480px] order-1 md:order-2">
            <Image
              src="/images/hero-banner.jpg"
              alt="ROSVENA premium ev urunleri"
              fill
              className="object-cover"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  )
}
