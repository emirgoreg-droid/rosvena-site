
"use client"
import { Bodoni_Moda } from "next/font/google"

const bodoni = Bodoni_Moda({
  subsets: ["latin"],
  weight: ["400", "500"],
})
import Link from "next/link"
import { useState } from "react"
import { useRouter } from "next/navigation"
import type { FormEvent } from "react"
import {
  Search,
  User,
  Heart,
  ShoppingCart,
  Menu,
  X,
  ChevronDown,
  Truck,
  ShieldCheck,
  RotateCcw,
  Headphones,
  Tag,
} from "lucide-react"

const categories = [
  "Tüm Kategoriler",
  "Banyo",
  "Mutfak",
  "Düzenleyiciler",
  "Ev & Yaşam",
  "Kişisel Bakım",
  "Yeni Ürünler",
]

function categoryHref(category: string, index: number) {
  if (index === 0) return "/kategoriler"

  return `/kategoriler/${category
    .toLowerCase()
    .replace(/ & /g, "-")
    .replace(/ /g, "-")}`
}

export function Header() {
  const router = useRouter()

  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isCartOpen, setIsCartOpen] = useState(false)
  const [searchQuery, setSearchQuery] = useState("")

  const handleSearch = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    const query = searchQuery.trim()
    if (!query) return

    router.push(`/urunler?ara=${encodeURIComponent(query)}`)
  }

  return (
    <header className="sticky top-0 z-50 w-full bg-[#171717] text-white shadow-lg">

      {/* ÜST BİLGİ ŞERİDİ */}
      <div className="hidden border-b border-white/10 md:block">
        <div className="mx-auto flex max-w-[1440px] items-center justify-center gap-9 px-8 py-2 text-[11px] font-medium text-white/85 lg:text-xs">

          <div className="flex items-center gap-2">
            <Truck size={15} className="text-[#E8C58F]" />
            <span>1000 TL ve üzeri siparişlerde ücretsiz kargo</span>
          </div>

          <span className="h-4 w-px bg-white/20" />

          <div className="flex items-center gap-2">
            <ShieldCheck size={15} className="text-[#E8C58F]" />
            <span>Güvenli Alışveriş</span>
          </div>

          <span className="h-4 w-px bg-white/20" />

          <div className="flex items-center gap-2">
            <RotateCcw size={15} className="text-[#E8C58F]" />
            <span>Kolay İade</span>
          </div>

          <span className="h-4 w-px bg-white/20" />

          <div className="flex items-center gap-2">
            <Headphones size={15} className="text-[#E8C58F]" />
            <span>Müşteri Desteği</span>
          </div>
        </div>
      </div>

      {/* ANA ÜST MENÜ */}
      <div className="w-full px-5 md:px-10 lg:px-14">
        <div className="grid min-h-[88px] grid-cols-[1fr_auto] items-center gap-3 md:min-h-[100px] md:grid-cols-[1fr_minmax(320px,600px)_1fr] md:gap-4">

          {/* SOL: LOGO */}
          <Link
            href="/"
            className="flex shrink-0 items-center gap-2 md:gap-2.5 md:justify-self-start"
          >
            <img
              src="/rosvena-logo-altin.png"
              alt="ROSVENA"
              className="h-[62px] w-[58px] object-contain md:h-[72px] md:w-[68px]"
            />

            <span className={`${bodoni.className} font-medium text-[21px] md:text-[26px] tracking-[0.14em] text-[#DDB56E]`}>
  ROSVENA
</span>
          </Link>

          {/* ORTA: MASAÜSTÜ ARAMA */}
          <form
            onSubmit={handleSearch}
            className="hidden w-full max-w-[600px] md:flex md:justify-self-center"
          >
            <div className="relative flex w-full items-center rounded-full border border-[#E8C58F]/50 bg-[#E8C58F]/10 p-1 shadow-inner">

              <Search
                size={18}
                className="ml-4 shrink-0 text-[#8C7A63]"
              />

              <input
                type="search"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Ürün, kategori veya marka ara..."
                className="w-full min-w-0 bg-transparent px-3 py-2.5 text-sm text-white outline-none placeholder:text-white/50"
              />

              <button
                type="submit"
                className="shrink-0 rounded-full bg-[#E8C58F] px-6 py-2.5 text-sm font-semibold text-[#211B14] transition-colors hover:bg-[#D8B477]"
              >
                Ara
              </button>
            </div>
          </form>

          {/* SAĞ: HESAP, FAVORİLER VE SEPET */}
          <div className="flex shrink-0 items-center justify-self-end gap-2 md:gap-4">

            {/* HESABIM */}
            <button
              type="button"
              aria-label="Hesabım"
              className="hidden min-w-[54px] flex-col items-center justify-center gap-1 text-[#E8C58F] transition-colors hover:text-white lg:flex"
            >
              <User size={22} strokeWidth={1.5} />
              <span className="text-[10px] text-white/85">Hesabım</span>
            </button>

            {/* FAVORİLER */}
            <button
              type="button"
              aria-label="Favoriler"
              className="hidden min-w-[54px] flex-col items-center justify-center gap-1 text-[#E8C58F] transition-colors hover:text-white lg:flex"
            >
              <Heart size={22} strokeWidth={1.5} />
              <span className="text-[10px] text-white/85">Favoriler</span>
            </button>

            {/* SEPET */}
            <div className="relative">
              <button
                type="button"
                onClick={() => setIsCartOpen(!isCartOpen)}
                aria-label="Sepeti aç"
                aria-expanded={isCartOpen}
                className="flex min-w-[54px] flex-col items-center justify-center gap-1 text-[#E8C58F] transition-colors hover:text-white"
              >
                <div className="relative">
                  <ShoppingCart size={23} strokeWidth={1.5} />

                  <span className="absolute -right-2 -top-2 flex h-[16px] min-w-[16px] items-center justify-center rounded-full bg-[#E8C58F] px-1 text-[9px] font-bold text-[#211B14]">
                    0
                  </span>
                </div>

                <span className="text-[10px] text-white/85">
                  Sepetim
                </span>
              </button>

              {/* SEPET AÇILIR PANELİ */}
              {isCartOpen && (
                <>
                  <button
                    type="button"
                    aria-label="Sepeti kapat"
                    className="fixed inset-0 z-40 cursor-default"
                    onClick={() => setIsCartOpen(false)}
                  />

                  <div className="absolute right-0 top-[calc(100%+16px)] z-50 w-[310px] overflow-hidden rounded-2xl border border-[#E4D6C2] bg-[#FAF7F2] text-[#29251F] shadow-2xl md:w-[370px]">

                    <div className="flex items-center justify-between border-b border-[#E8DFD3] px-5 py-4">
                      <div>
                        <h3 className="text-base font-semibold">
                          Sepetim
                        </h3>
                        <p className="mt-1 text-xs text-[#897D6F]">
                          Alışveriş sepetiniz
                        </p>
                      </div>

                      <button
                        type="button"
                        onClick={() => setIsCartOpen(false)}
                        aria-label="Kapat"
                        className="rounded-full p-2 hover:bg-[#EDE5DA]"
                      >
                        <X size={19} />
                      </button>
                    </div>

                    <div className="px-6 py-9 text-center">
                      <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-[#EEE5D8]">
                        <ShoppingCart
                          size={26}
                          className="text-[#B58B55]"
                        />
                      </div>

                      <h4 className="text-[15px] font-semibold">
                        Sepetiniz henüz boş
                      </h4>

                      <p className="mt-2 text-sm leading-relaxed text-[#887E72]">
                        Beğendiğiniz ürünleri sepetinize ekleyerek
                        alışverişe başlayabilirsiniz.
                      </p>

                      <Link
                        href="/urunler"
                        onClick={() => setIsCartOpen(false)}
                        className="mt-6 inline-flex w-full items-center justify-center rounded-xl bg-[#D6AE73] py-3.5 text-sm font-semibold text-[#211B14] transition-colors hover:bg-[#C69A5C]"
                      >
                        Ürünleri Keşfet
                        <span className="ml-2">→</span>
                      </Link>
                    </div>

                    <div className="border-t border-[#E8DFD3] px-5 py-3 text-center text-[11px] text-[#897D6F]">
                      ROSVENA | Yaşam alanınızı kolaylaştırın
                    </div>
                  </div>
                </>
              )}
            </div>

            {/* MOBİL MENÜ */}
            <button
              type="button"
              className="p-2 text-[#E8C58F] md:hidden"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label="Menüyü aç veya kapat"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* MOBİL ARAMA */}
        <form
          onSubmit={handleSearch}
          className="pb-4 md:hidden"
        >
          <div className="flex items-center rounded-full border border-[#E8C58F]/40 bg-[#F8F5F0] p-1">
            <Search size={18} className="ml-3 text-[#8C7A63]" />

            <input
              type="search"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Ürün veya kategori ara..."
              className="w-full min-w-0 bg-transparent px-3 py-2.5 text-sm text-[#29251F] outline-none placeholder:text-[#948A7D]"
            />

            <button
              type="submit"
              className="rounded-full bg-[#E8C58F] px-4 py-2.5 text-xs font-semibold text-[#211B14]"
            >
              Ara
            </button>
          </div>
        </form>
      </div>

      {/* MASAÜSTÜ KATEGORİ MENÜSÜ */}
      <nav className="hidden border-t border-[#D9C9B3] bg-[#F1ECE4] md:block">
        <div className="mx-auto max-w-[1440px] px-6 lg:px-8">
          <ul className="flex items-center justify-between gap-2 py-2">

            <li>
              <Link
                href="/kategoriler"
                className="flex items-center gap-2 rounded-xl border border-[#D7B98F] px-4 py-2.5 text-[13px] font-semibold text-[#29251F] transition-colors hover:bg-white/70"
              >
                <Menu size={16} />
                Tüm Kategoriler
                <ChevronDown size={14} />
              </Link>
            </li>

            {categories.slice(1).map((category, index) => (
              <li key={category}>
                <Link
                  href={categoryHref(category, index + 1)}
                  className="relative block px-3 py-2.5 text-[13px] font-medium text-[#29251F] transition-colors after:absolute after:bottom-1 after:left-3 after:right-3 after:h-px after:scale-x-0 after:bg-[#B58B55] after:transition-transform hover:text-[#B58B55] hover:after:scale-x-100"
                >
                  {category}
                </Link>
              </li>
            ))}

            <li>
              <Link
                href="/urunler"
                className="flex items-center gap-2 rounded-full border border-[#B58B55] px-3.5 py-2 text-[13px] font-medium text-[#72532F] transition-colors hover:bg-white/70"
              >
                <Tag size={14} />
                Ürünleri Keşfet
              </Link>
            </li>
          </ul>
        </div>
      </nav>

      {/* MOBİL KATEGORİ MENÜSÜ */}
      {isMenuOpen && (
        <nav className="border-t border-[#D9C9B3] bg-[#F1ECE4] shadow-xl md:hidden">
          <ul className="px-4 py-3">
            {categories.map((category, index) => (
              <li key={category}>
                <Link
                  href={categoryHref(category, index)}
                  onClick={() => setIsMenuOpen(false)}
                  className="flex items-center justify-between rounded-lg px-4 py-3.5 text-sm font-medium text-[#29251F] transition-colors hover:bg-white/70 hover:text-[#B58B55]"
                >
                  {category}
                  {index === 0 && <ChevronDown size={16} />}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      )}
    </header>
  )
}
