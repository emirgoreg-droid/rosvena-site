
import Link from "next/link"

export function BrandStory() {
  return (
    <section className="relative w-full overflow-hidden bg-transparent py-14 md:py-20">
      <div className="relative z-10 mx-auto grid w-full max-w-[1600px] grid-cols-1 items-center gap-12 px-7 md:grid-cols-[1fr_340px] md:gap-20 lg:px-16 xl:px-24">

        <div className="flex flex-col items-start justify-center">
          <div className="mb-6 flex items-center gap-3">
            <span className="h-px w-10 bg-[#B58B55]" />
            <p className="text-xs font-semibold tracking-[0.35em] text-[#A77B45]">
              ROSVENA | PRATİK YAŞAM
            </p>
          </div>

          <h2 className="mb-7 font-serif text-5xl leading-[1.12] text-[#24211D] md:text-6xl lg:text-7xl">
            Delmeden,
            <br />
            <span className="text-[#B58B55]">Zahmetsizce.</span>
          </h2>

          <p className="mb-9 max-w-xl text-base leading-8 text-[#514A41] md:text-lg">
            Banyonuzda düzeni yeniden keşfedin.
            Yapışkanlı duş raflarımızla duvarlarınızı
            delmeden, pratikliği ve şıklığı bir araya getirin.
          </p>

          <Link
            href="/urunler"
            className="inline-flex items-center gap-4 rounded-full bg-[#DDBB88] px-10 py-5 text-sm font-semibold text-[#211B14] shadow-md transition-all duration-300 hover:bg-[#CDA66D] hover:shadow-lg"
          >
            Ürünleri Keşfet
            <span className="text-lg">→</span>
          </Link>

          <div className="mt-12 flex items-center gap-4">
            <div className="h-px w-14 bg-[#B58B55]" />
            <span className="text-xs tracking-[0.25em] text-[#766B5E]">
              DELME YOK · PRATİKLİK VAR
            </span>
          </div>
        </div>

        <div className="relative mx-auto w-full max-w-[340px]">

          <div className="relative overflow-hidden rounded-xl border border-[#B58B55]/35 bg-transparent shadow-lg shadow-[#5A4933]/10">
  <video
    className="block h-auto w-full object-contain"
    src="/videos/rosvena-montaj.mp4"
    autoPlay
    muted
    loop
    playsInline
    preload="metadata"
  />
</div>
        </div>

      </div>
    </section>
  )
}
