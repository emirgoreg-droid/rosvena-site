
"use client"

import Link from "next/link"
import Image from "next/image"
import { Instagram, ArrowUpRight } from "lucide-react"

const corporateLinks = [
  { name: "Hakkımızda", href: "/hakkimizda" },
  { name: "İletişim", href: "/iletisim" },
  { name: "Blog", href: "/blog" },
]

const categoryLinks = [
  { name: "Banyo", href: "/kategori/banyo" },
  { name: "Mutfak", href: "/kategori/mutfak" },
  { name: "Düzenleyiciler", href: "/kategori/duzenleyiciler" },
  { name: "Ev & Yaşam", href: "/kategori/ev-yasam" },
  { name: "Kişisel Bakım", href: "/kategori/kisisel-bakim" },
]

const customerLinks = [
  { name: "Sıkça Sorulan Sorular", href: "/sss" },
  { name: "Gizlilik Politikası", href: "/gizlilik" },
  { name: "Çerez Politikası", href: "/cerez-politikasi" },
  { name: "Kullanım Koşulları", href: "/kullanim-kosullari" },
]

export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-[#171717] text-white">
      <div className="max-w-7xl mx-auto px-6 md:px-10">

        {/* Main Footer */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 py-16 md:py-20">

          {/* Brand */}
          <div>
            <Link href="/" className="inline-flex items-center mb-6">
              <Image
                src="/rosvena-logo-altin.png"
                alt="ROSVENA"
                width={65}
                height={80}
                className="w-[48px] h-[65px] object-contain"
              />
              <span className="font-serif text-2xl tracking-[0.16em] text-[#E8C58F] ml-3">
                ROSVENA
              </span>
            </Link>

            <p className="text-white/55 text-sm leading-7 max-w-xs">
              Yaşam alanlarınıza düzen, estetik ve işlevsellik
              katan zarif dokunuşlar.
            </p>

            <a
              href="https://instagram.com/rosvena.home"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="ROSVENA Instagram"
              className="mt-7 inline-flex items-center justify-center w-11 h-11 rounded-full border border-[#C6A47A]/40 text-[#E8C58F] hover:bg-[#C6A47A] hover:text-[#171717] transition-all duration-300"
            >
              <Instagram className="w-5 h-5" />
            </a>
          </div>

          {/* Categories */}
          <div>
            <h3 className="font-serif text-lg text-[#E8C58F] mb-7">
              Kategoriler
            </h3>
            <ul className="space-y-4">
              {categoryLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-white/55 hover:text-[#E8C58F] text-sm transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Corporate */}
          <div>
            <h3 className="font-serif text-lg text-[#E8C58F] mb-7">
              ROSVENA
            </h3>
            <ul className="space-y-4">
              {corporateLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-white/55 hover:text-[#E8C58F] text-sm transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Customer Information */}
          <div>
            <h3 className="font-serif text-lg text-[#E8C58F] mb-7">
              Bilgilendirme
            </h3>
            <ul className="space-y-4">
              {customerLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-white/55 hover:text-[#E8C58F] text-sm transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>

            <div className="mt-7 pt-5 border-t border-white/10">
              <p className="text-white/40 text-xs leading-6">
                Trendyol mağazamız açıldığında alışveriş
                bağlantımız burada yer alacaktır.
              </p>
            </div>
          </div>
        </div>

        {/* Brand Statement */}
        <div className="border-t border-[#C6A47A]/25 py-8 text-center">
          <p className="font-serif text-xl md:text-2xl text-[#E8C58F] tracking-wide">
            Pratik Yaşam, Zarif Dokunuşlar.
          </p>
          <p className="text-white/35 text-xs tracking-[0.2em] mt-3">
            ROSVENA
          </p>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10 py-6 flex flex-col md:flex-row items-center justify-between gap-3">
          <p className="text-white/40 text-xs">
            © {currentYear} ROSVENA. Tüm hakları saklıdır.
          </p>

          <Link
            href="/"
            className="text-white/40 hover:text-[#E8C58F] text-xs flex items-center gap-2 transition-colors"
          >
            Yaşam alanınıza zarif dokunuşlar
            <ArrowUpRight className="w-3 h-3" />
          </Link>
        </div>
      </div>
    </footer>
  )
}

