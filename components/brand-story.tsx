import Image from "next/image"

export function BrandStory() {
  return (
    <section className="py-20 md:py-28 bg-[#F5F3F0]">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 md:gap-16 items-center max-w-6xl mx-auto">
          {/* Left - Text */}
          <div className="order-2 md:order-1">
            <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-foreground mb-6 tracking-tight">
              ROSVENA
            </h2>
            <p className="text-muted-foreground text-lg md:text-xl leading-relaxed max-w-md">
              Yasam alanlarini sade, estetik ve islevsel hale getirmek icin tasarlandi.
            </p>
            <div className="mt-8 w-16 h-px bg-[#C6A47A]" />
          </div>

          {/* Right - Image */}
          <div className="order-1 md:order-2">
            <div className="relative aspect-[4/5] rounded-2xl overflow-hidden">
              <Image
                src="/images/brand-story.jpg"
                alt="ROSVENA yasam alani"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
