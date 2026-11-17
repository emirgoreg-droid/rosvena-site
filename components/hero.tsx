
"use client"

import { useEffect, useState } from "react"
import { Button } from "@/components/ui/button"
import Image from "next/image"
import Link from "next/link"
import { ChevronLeft, ChevronRight } from "lucide-react"

const slides = [
  {
    category: "ROSVENA | BANYO KOLEKSİYONU",
    title: <>Banyonuzda<br />Düzen ve Şıklık.</>,
    description:
      "Delme gerektirmeyen pratik çözümlerle banyonuzda estetiği ve düzeni bir araya getirin.",
    image: "/images/hero-banner.jpg",
    alt: "ROSVENA banyo düzenleyicileri",
    link: "/urunler",
    button: "Banyo Koleksiyonunu Keşfet",
  },
  {
    category: "ROSVENA | MUTFAK KOLEKSİYONU",
    title: <>Mutfağınızda<br />Her Şey Yerinde.</>,
    description:
      "Düzenli, kullanışlı ve estetik mutfak alanları için günlük hayatınızı kolaylaştıran çözümler.",
    image: "/images/hero-mutfak.png",
    alt: "ROSVENA mutfak düzenleyicileri",
    link: "/urunler",
    button: "Mutfak Koleksiyonunu Keşfet",
  },
  {
    category: "ROSVENA | EV & YAŞAM",
    title: <>Yaşam Alanınızda<br />Sadelik ve Konfor.</>,
    description:
      "Günlük yaşamınıza değer katan işlevsel detaylarla evinizde konforu ve düzeni keşfedin.",
    image: "/images/hero-ev-yasam.png",
    alt: "ROSVENA ev ve yaşam koleksiyonu",
    link: "/urunler",
    button: "Koleksiyonu Keşfet",
  },
  {
    category: "ROSVENA | DÜZENLEYİCİLER",
    title: <>Her Şey İçin<br />Bir Yer Var.</>,
    description:
      "Yaşam alanlarınızda daha fazla düzen ve ferahlık sağlayan sade, işlevsel çözümler.",
    image: "/images/hero-duzenleyiciler.png",
    alt: "ROSVENA düzenleyici koleksiyonu",
    link: "/urunler",
    button: "Düzenleyicileri Keşfet",
  },
  {
    category: "ROSVENA | KİŞİSEL BAKIM",
    title: <>Kendinize<br />Zaman Ayırın.</>,
    description:
      "Kişisel bakım alanlarınızı güzelleştiren, günlük rutininize düzen ve şıklık katan detaylar.",
    image: "/images/hero-kisisel-bakim.png",
    alt: "ROSVENA kişisel bakım düzenleyicileri",
    link: "/urunler",
    button: "Koleksiyonu Keşfet",
  },
]

export function Hero() {
  const [activeIndex, setActiveIndex] = useState(0)
  const [isPaused, setIsPaused] = useState(false)
  const [touchStart, setTouchStart] = useState<number | null>(null)

  const activeSlide = slides[activeIndex]

  function changeSlide(direction: number) {
    setActiveIndex(
      (current) => (current + direction + slides.length) % slides.length
    )
  }

  useEffect(() => {
    if (isPaused) return

    const timer = window.setTimeout(() => {
      setActiveIndex((current) => (current + 1) % slides.length)
    }, 4500)

    return () => window.clearTimeout(timer)
  }, [activeIndex, isPaused])

  return (
    <section className="w-full py-0">
      <div
        className="relative h-[560px] min-h-[500px] w-full overflow-hidden bg-[#171411] md:h-[620px] lg:h-[min(680px,calc(100svh-200px))]"
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
        onTouchStart={(event) =>
          setTouchStart(event.touches[0].clientX)
        }
        onTouchEnd={(event) => {
          if (touchStart === null) return

          const difference =
            touchStart - event.changedTouches[0].clientX

          if (Math.abs(difference) > 50) {
            changeSlide(difference > 0 ? 1 : -1)
          }

          setTouchStart(null)
        }}
      >
        {slides.map((slide, index) => (
          <div
            key={slide.category}
            className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
              index === activeIndex
                ? "z-10 opacity-100"
                : "pointer-events-none z-0 opacity-0"
            }`}
            aria-hidden={index !== activeIndex}
          >
            <Image
              src={slide.image}
              alt={slide.alt}
              fill
              priority={index === 0}
              sizes="100vw"
              className="object-cover object-center"
            />

            <div className="absolute inset-0 bg-gradient-to-r from-black/75 via-black/35 to-transparent" />

            <div className="relative z-10 flex h-full items-end md:items-center">
              <div className="w-full max-w-2xl px-7 pb-20 md:px-12 md:py-16 lg:px-20">
                <p className="mb-5 text-xs font-semibold tracking-[0.25em] text-[#E8C58F] md:text-sm md:tracking-[0.3em]">
                  {slide.category}
                </p>

                <h1 className="mb-6 font-serif text-4xl leading-tight text-white md:text-5xl lg:text-6xl">
                  {slide.title}
                </h1>

                <p className="mb-9 max-w-lg text-sm leading-relaxed text-white/85 md:text-base lg:text-lg">
                  {slide.description}
                </p>

                <Button
                  asChild
                  size="lg"
                  className="rounded-full bg-[#E8C58F] px-7 py-6 text-sm font-semibold text-[#1A1A1A] shadow-lg transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#D9B477] md:px-9"
                >
                  <Link href={slide.link}>
                    {slide.button}
                    <span className="ml-2">→</span>
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        ))}

        <div className="absolute bottom-7 right-5 z-20 flex items-center gap-2 md:bottom-10 md:right-12 md:gap-3">
          <button
            type="button"
            onClick={() => changeSlide(-1)}
            aria-label="Önceki kategori"
            className="flex h-9 w-9 items-center justify-center rounded-full border border-white/40 bg-black/25 text-white backdrop-blur-sm transition-all duration-300 hover:border-[#E8C58F] hover:bg-[#E8C58F] hover:text-[#171411] md:h-11 md:w-11"
          >
            <ChevronLeft size={21} />
          </button>

          <div className="flex items-center gap-1.5 md:gap-2">
            {slides.map((slide, index) => (
              <button
                key={slide.category}
                type="button"
                onClick={() => setActiveIndex(index)}
                aria-label={`${index + 1}. kategoriye geç`}
                aria-current={index === activeIndex ? "true" : undefined}
                className={`h-1.5 rounded-full transition-all duration-500 ${
                  index === activeIndex
                    ? "w-7 bg-[#E8C58F] md:w-9"
                    : "w-1.5 bg-white/50 hover:bg-white"
                }`}
              />
            ))}
          </div>

          <button
            type="button"
            onClick={() => changeSlide(1)}
            aria-label="Sonraki kategori"
            className="flex h-9 w-9 items-center justify-center rounded-full border border-white/40 bg-black/25 text-white backdrop-blur-sm transition-all duration-300 hover:border-[#E8C58F] hover:bg-[#E8C58F] hover:text-[#171411] md:h-11 md:w-11"
          >
            <ChevronRight size={21} />
          </button>
        </div>
      </div>
    </section>
  )
}
