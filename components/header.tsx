
"use client"

import { Bodoni_Moda } from "next/font/google"
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
  ArrowRight,
  Sparkles,
  Bookmark,
  Bath,
  CookingPot,
  Layers,
  House,
  Sparkle,
} from "lucide-react"

const bodoni = Bodoni_Moda({
  subsets: ["latin"],
  weight: ["400", "500"],
})

const categories = [
  "Tüm Kategoriler",
  "Banyo",
  "Mutfak",
  "Düzenleyiciler",
  "Ev & Yaşam",
  "Kişisel Bakım",
  "Yeni Ürünler",
]

const categoryIcons = [
  Bath,
  CookingPot,
  Layers,
  House,
  Sparkles,
  Sparkle,
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
  const [isCategoriesOpen, setIsCategoriesOpen] = useState(false)
  const [isCartOpen, setIsCartOpen] = useState(false)
  const [searchQuery, setSearchQuery] = useState("")

  const handleSearch = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    const query = searchQuery.trim()
    if (!query) return

    router.push(`/urunler?ara=${encodeURIComponent(query)}`)
  }

  const closeMenus = () => {
    setIsCategoriesOpen(false)
    setIsMenuOpen(false)
  }

  const actionButtonClass =
    "group relative flex min-w-[58px] flex-col items-center justify-center gap-1 rounded-xl px-2.5 py-2 text-[#E8C58F] transition-all duration-300 ease-out hover:-translate-y-0.5 hover:bg-[#E8C58F]/10 hover:text-[#F1D4A6] hover:shadow-[0_0_0_1px_rgba(232,197,143,0.35),0_5px_18px_rgba(232,197,143,0.10)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#E8C58F]"

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

          {/* LOGO */}
          <Link
            href="/"
            className="flex shrink-0 items-center gap-2 md:gap-2.5 md:justify-self-start"
          >
            <img
              src="/rosvena-logo-altin.png"
              alt="ROSVENA"
              className="h-[62px] w-[58px] object-contain md:h-[72px] md:w-[68px]"
            />

            <span
              className={`${bodoni.className} font-medium text-[21px] tracking-[0.14em] text-[#DDB56E] md:text-[26px]`}
            >
              ROSVENA
            </span>
          </Link>

          {/* MASAÜSTÜ ARAMA */}
          <form
            onSubmit={handleSearch}
            className="hidden w-full max-w-[600px] md:flex md:justify-self-center"
          >
            <div className="group relative flex w-full items-center rounded-full border border-[#E8DDCE] bg-[#F7F1E7] p-1 shadow-[0_3px_14px_rgba(0,0,0,0.10)] transition-all duration-300 focus-within:border-[#D5B887] focus-within:shadow-[0_4px_18px_rgba(221,187,136,0.16)]">
              <Search
                size={19}
                strokeWidth={1.7}
                className="ml-4 shrink-0 text-[#75634E] transition-colors duration-300 group-focus-within:text-[#A98453]"
              />

              <input
                type="search"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Ürün, kategori veya marka ara..."
                className="w-full min-w-0 bg-transparent px-3 py-3 text-sm text-[#51483D] outline-none placeholder:text-[#9B8E7D]"
              />

              <button
                type="submit"
                className="shrink-0 rounded-full bg-[#E8C58F] px-7 py-2.5 text-sm font-semibold text-[#30251A] transition-all duration-300 hover:bg-[#D9B477] hover:shadow-md"
              >
                Ara
              </button>
            </div>
          </form>

          {/* HESAP, FAVORİLER VE SEPET */}
          <div className="flex shrink-0 items-center justify-self-end gap-2 md:gap-3">

            <button
              type="button"
              aria-label="Hesabım"
              className={`hidden lg:flex ${actionButtonClass}`}
            >
              <User
                size={22}
                strokeWidth={1.5}
                className="transition-transform duration-300 group-hover:scale-110"
              />
              <span className="text-[10px] text-white/85 group-hover:text-[#F1D4A6]">
                Hesabım
              </span>
            </button>

            <button
              type="button"
              aria-label="Favoriler"
              className={`hidden lg:flex ${actionButtonClass}`}
            >
              <Heart
                size={22}
                strokeWidth={1.5}
                className="transition-all duration-300 group-hover:scale-110 group-hover:fill-[#E8C58F]/20"
              />
              <span className="text-[10px] text-white/85 group-hover:text-[#F1D4A6]">
                Favoriler
              </span>
            </button>

            {/* SEPET */}
            <div className="relative">
              <button
                type="button"
                onClick={() => setIsCartOpen(!isCartOpen)}
                aria-label="Sepeti aç"
                aria-expanded={isCartOpen}
                className={actionButtonClass}
              >
                <div className="relative">
                  <ShoppingCart
                    size={23}
                    strokeWidth={1.5}
                    className="transition-transform duration-300 group-hover:scale-110"
                  />

                  <span className="absolute -right-2 -top-2 flex h-[16px] min-w-[16px] items-center justify-center rounded-full bg-[#E8C58F] px-1 text-[9px] font-bold text-[#211B14] transition-transform duration-300 group-hover:scale-110">
                    0
                  </span>
                </div>

                <span className="text-[10px] text-white/85 group-hover:text-[#F1D4A6]">
                  Sepetim
                </span>
              </button>

              {/* SEPET PANELİ */}
              {isCartOpen && (
                <>
                  <button
                    type="button"
                    aria-label="Sepeti kapat"
                    className="fixed inset-0 z-40 cursor-default bg-black/20 backdrop-blur-[2px]"
                    onClick={() => setIsCartOpen(false)}
                  />

                  <div className="absolute right-0 top-[calc(100%+18px)] z-50 w-[320px] overflow-hidden rounded-[22px] border border-[#E8DDCE] bg-[#FCFAF6] text-[#29251F] shadow-[0_20px_70px_rgba(0,0,0,0.20)] animate-in fade-in slide-in-from-top-2 duration-200 md:w-[390px]">

                    <div className="flex items-center justify-between border-b border-[#EAE2D7] px-6 py-5">
                      <div>
                        <div className="flex items-center gap-2">
                          <h3 className="font-serif text-xl text-[#302820]">
                            Alışveriş Sepetim
                          </h3>

                          <span className="rounded-full bg-[#F0E8DC] px-2 py-0.5 text-[10px] font-medium text-[#98764D]">
                            0 ürün
                          </span>
                        </div>

                        <p className="mt-1 text-[11px] tracking-wide text-[#95897B]">
                          ROSVENA COLLECTION
                        </p>
                      </div>

                      <button
                        type="button"
                        onClick={() => setIsCartOpen(false)}
                        aria-label="Sepeti kapat"
                        className="flex h-9 w-9 items-center justify-center rounded-full text-[#766B5E] transition-all duration-300 hover:bg-[#EEE6DA] hover:text-[#A98453]"
                      >
                        <X size={19} strokeWidth={1.5} />
                      </button>
                    </div>

                    <div className="px-7 py-10 text-center">
                      <div className="relative mx-auto mb-6 flex h-[88px] w-[88px] items-center justify-center rounded-full border border-[#E8D9C3] bg-gradient-to-br from-[#F6F0E7] to-[#EDE2D1]">
                        <ShoppingCart
                          size={32}
                          strokeWidth={1.2}
                          className="text-[#A98453]"
                        />

                        <span className="absolute -right-1 top-1 flex h-7 w-7 items-center justify-center rounded-full border-2 border-[#FCFAF6] bg-[#B58B55] text-white">
                          <Sparkles size={13} />
                        </span>
                      </div>

                      <h4 className="font-serif text-[22px] text-[#302820]">
                        Henüz bir şey seçmediniz
                      </h4>

                      <p className="mx-auto mt-3 max-w-[270px] text-[13px] leading-6 text-[#887E72]">
                        Beğendiğiniz ürünleri sepetinize ekleyin, yaşam
                        alanınıza zarif dokunuşlar katın.
                      </p>

                      <Link
                        href="/urunler"
                        onClick={() => setIsCartOpen(false)}
                        className="group mt-7 inline-flex w-full items-center justify-center gap-3 rounded-full bg-[#DDBB88] px-6 py-3.5 text-[13px] font-semibold tracking-wide text-[#30251A] transition-all duration-300 hover:bg-[#CDA66D] hover:shadow-lg hover:shadow-[#B58B55]/20"
                      >
                        Koleksiyonu Keşfet

                        <ArrowRight
                          size={16}
                          className="transition-transform duration-300 group-hover:translate-x-1"
                        />
                      </Link>

                      <p className="mt-5 text-[10px] font-medium tracking-[0.18em] text-[#AA9B87]">
                        SADELİK · ESTETİK · İŞLEVSELLİK
                      </p>
                    </div>

                    <div className="border-t border-[#EAE2D7] bg-[#F7F3EC] px-5 py-3.5 text-center">
                      <p className="font-serif text-[12px] tracking-wide text-[#88765E]">
                        ROSVENA
                      </p>

                      <p className="mt-1 text-[10px] text-[#A09587]">
                        Yaşam alanınızı kolaylaştırın.
                      </p>
                    </div>
                  </div>
                </>
              )}
            </div>

            {/* MOBİL MENÜ */}
            <button
              type="button"
              className="p-2 text-[#E8C58F] transition-colors duration-300 hover:text-[#D9B477] md:hidden"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label="Menüyü aç veya kapat"
              aria-expanded={isMenuOpen}
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
          <div className="group flex items-center rounded-full border border-[#E8DDCE] bg-[#F7F1E7] p-1 shadow-[0_3px_12px_rgba(0,0,0,0.08)] transition-all duration-300 focus-within:border-[#D5B887]">
            <Search
              size={18}
              strokeWidth={1.7}
              className="ml-3 shrink-0 text-[#75634E]"
            />

            <input
              type="search"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Ürün veya kategori ara..."
              className="w-full min-w-0 bg-transparent px-3 py-2.5 text-sm text-[#51483D] outline-none placeholder:text-[#9B8E7D]"
            />

            <button
              type="submit"
              className="shrink-0 rounded-full bg-[#E8C58F] px-4 py-2.5 text-xs font-semibold text-[#30251A] transition-all duration-300 hover:bg-[#D9B477]"
            >
              Ara
            </button>
          </div>
        </form>
      </div>

      {/* MASAÜSTÜ KATEGORİ MENÜSÜ */}
      <nav className="relative hidden border-t border-[#D9C9B3]/50 bg-[#F7F4EE] md:block">
        <div className="mx-auto max-w-[1600px] px-5 lg:px-10 xl:px-14">
          <ul className="flex items-center justify-between gap-1 py-1.5">

            {/* TÜM KATEGORİLER DROPDOWN */}
            <li className="relative shrink-0">
              <button
                type="button"
                onClick={() => setIsCategoriesOpen(!isCategoriesOpen)}
                aria-expanded={isCategoriesOpen}
                aria-haspopup="true"
                className={`group flex items-center gap-2 whitespace-nowrap rounded-lg px-3 py-3 text-[11px] font-medium tracking-wide transition-all duration-300 lg:px-4 lg:text-xs ${
                  isCategoriesOpen
                    ? "bg-[#EDE2D1] text-[#987044] shadow-inner"
                    : "text-[#51483D] hover:bg-[#EFE7DC] hover:text-[#A98453]"
                }`}
              >
                <Menu size={15} strokeWidth={1.5} />

                <span>Tüm Kategoriler</span>

                <ChevronDown
                  size={14}
                  strokeWidth={1.6}
                  className={`transition-transform duration-300 ${
                    isCategoriesOpen ? "rotate-180" : ""
                  }`}
                />
              </button>

              {/* AÇILIR KATEGORİ LİSTESİ */}
              {isCategoriesOpen && (
                <div className="absolute left-0 top-[calc(100%+9px)] z-[60] w-[280px] overflow-hidden rounded-2xl border border-[#E8DDCE] bg-[#FCFAF6] p-3 shadow-[0_18px_50px_rgba(0,0,0,0.16)] animate-in fade-in slide-in-from-top-2 duration-200">

                  <div className="mb-2 border-b border-[#EAE2D7] px-3 pb-3 pt-1">
                    <p className="font-serif text-[17px] text-[#302820]">
                      Koleksiyonlarımız
                    </p>
                    <p className="mt-1 text-[10px] tracking-[0.16em] text-[#A18A6B]">
                      ROSVENA COLLECTION
                    </p>
                  </div>

                  <div className="space-y-1">
                    {categories.slice(1).map((category, index) => {
                      const Icon = categoryIcons[index]

                      return (
                        <Link
                          key={category}
                          href={categoryHref(category, index + 1)}
                          onClick={() => setIsCategoriesOpen(false)}
                          className="group flex items-center justify-between rounded-xl px-3 py-3 text-[13px] font-medium text-[#51483D] transition-all duration-200 hover:translate-x-1 hover:bg-[#F2EADD] hover:text-[#987044]"
                        >
                          <span className="flex items-center gap-3">
                            <Icon
                              size={17}
                              strokeWidth={1.5}
                              className="text-[#A98453] transition-transform duration-200 group-hover:scale-110"
                            />
                            {category}
                          </span>

                          <ArrowRight
                            size={14}
                            strokeWidth={1.5}
                            className="text-[#B58B55] opacity-0 transition-all duration-200 group-hover:translate-x-0.5 group-hover:opacity-100"
                          />
                        </Link>
                      )
                    })}
                  </div>

                  <div className="mt-2 border-t border-[#EAE2D7] pt-2">
                    <Link
                      href="/kategoriler"
                      onClick={() => setIsCategoriesOpen(false)}
                      className="flex items-center justify-between rounded-xl px-3 py-3 text-[12px] font-semibold text-[#987044] transition-colors duration-200 hover:bg-[#F2EADD]"
                    >
                      Tüm Kategorileri Gör
                      <ArrowRight size={16} />
                    </Link>
                  </div>
                </div>
              )}
            </li>

            {/* DİĞER KATEGORİLER */}
            {categories.slice(1).map((category, index) => (
              <li key={category} className="shrink-0">
                <Link
                  href={categoryHref(category, index + 1)}
                  className="group relative block whitespace-nowrap rounded-md px-2.5 py-3 text-[11px] font-medium tracking-wide text-[#51483D] transition-colors duration-300 hover:text-[#A98453] lg:px-3 lg:text-xs"
                >
                  {category}

                  <span className="absolute bottom-1.5 left-3 right-3 h-px origin-center scale-x-0 bg-[#B58B55] transition-transform duration-300 group-hover:scale-x-100" />
                </Link>
              </li>
            ))}

            
{/* MARKAMIZ */}
<li className="shrink-0">
  <Link
    href="/hakkimizda"
    className="group relative flex items-center justify-center gap-2 whitespace-nowrap px-7 py-3 text-[12px] font-semibold tracking-wide text-white transition-all duration-300 hover:brightness-110 hover:drop-shadow-[0_4px_10px_rgba(181,139,85,0.35)] lg:px-9"
    style={{
      background: "linear-gradient(135deg, #C69A5B 0%, #A9793E 50%, #C69A5B 100%)",
      clipPath: "polygon(0 0, 100% 0, 93% 50%, 100% 100%, 0 100%, 7% 50%)",
    }}
  >
    <Sparkles
      size={15}
      strokeWidth={1.5}
      className="text-[#FFF0D2] transition-transform duration-500 group-hover:rotate-45"
    />

    <span>Markamız</span>

    <Sparkles
      size={15}
      strokeWidth={1.5}
      className="text-[#FFF0D2] transition-transform duration-500 group-hover:-rotate-45"
    />
  </Link>
</li>
          </ul>
        </div>
      </nav>

      {/* MOBİL KATEGORİ MENÜSÜ */}
      {isMenuOpen && (
        <nav className="border-t border-[#D9C9B3]/60 bg-[#F7F4EE] shadow-xl md:hidden">
          <ul className="px-4 py-3">
            {categories.map((category, index) => (
              <li key={category}>
                <Link
                  href={categoryHref(category, index)}
                  onClick={closeMenus}
                  className="group flex items-center justify-between border-b border-[#E9E1D6] px-4 py-3.5 text-[13px] font-medium tracking-wide text-[#51483D] transition-colors duration-300 last:border-0 hover:text-[#A98453]"
                >
                  {category}

                  <ArrowRight
                    size={15}
                    strokeWidth={1.4}
                    className="text-[#B58B55] opacity-0 transition-all duration-300 group-hover:translate-x-1 group-hover:opacity-100"
                  />
                </Link>
              </li>
            ))}

            {/* MOBİL MARKAMIZ */}
            <li>
              <Link
                href="/hakkimizda"
                onClick={closeMenus}
                className="group flex items-center justify-between rounded-lg px-4 py-3.5 text-[13px] font-semibold tracking-wide text-[#98764D] transition-colors duration-300 hover:bg-[#EFE5D6]"
              >
                <span className="flex items-center gap-2">
                  <Bookmark size={15} strokeWidth={1.5} />
                  Markamız
                </span>

                <ArrowRight
                  size={15}
                  className="transition-transform duration-300 group-hover:translate-x-1"
                />
              </Link>
            </li>
          </ul>
        </nav>
      )}
    </header>
  )
}
