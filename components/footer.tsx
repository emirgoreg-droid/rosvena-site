"use client"

import Link from "next/link"
import { useState } from "react"
import { Instagram, Facebook, Twitter, Youtube, Send } from "lucide-react"
import { Button } from "@/components/ui/button"

const corporateLinks = [
  { name: "Hakkimizda", href: "/hakkimizda" },
  { name: "Magazalarimiz", href: "/magazalar" },
  { name: "Kariyer", href: "/kariyer" },
  { name: "Blog", href: "/blog" },
  { name: "Basinla Iliskiler", href: "/basin" }
]

const customerLinks = [
  { name: "Siparis Takibi", href: "/siparis-takibi" },
  { name: "Iade ve Degisim", href: "/iade-degisim" },
  { name: "SSS", href: "/sss" },
  { name: "Iletisim", href: "/iletisim" },
  { name: "Gizlilik Politikasi", href: "/gizlilik" }
]

const socialLinks = [
  { name: "Instagram", icon: Instagram, href: "https://instagram.com/rosvena.home" },
  { name: "Facebook", icon: Facebook, href: "https://facebook.com/rosvena" },
  { name: "Twitter", icon: Twitter, href: "https://twitter.com/rosvena" },
  { name: "YouTube", icon: Youtube, href: "https://youtube.com/rosvena" }
]

export function Footer() {
  const [email, setEmail] = useState("")
  const currentYear = new Date().getFullYear()
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setEmail("")
  }

  return (
    <footer className="bg-[#1A1A1A] text-white">
      <div className="max-w-7xl mx-auto px-4 md:px-6 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          {/* Brand */}
          <div className="lg:col-span-1">
            <Link href="/" className="font-serif text-2xl font-semibold inline-block mb-4">
              ROSVENA
            </Link>
            <p className="text-white/60 text-sm leading-relaxed mb-6">
              ROSVENA, eviniz icin pratik, estetik ve kullanisli cozumler sunan premium ev ve yasam markasi.
            </p>
            <div className="flex gap-3">
              {socialLinks.map((social) => (
                <Link
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-[#C6A47A] transition-colors"
                  aria-label={social.name}
                >
                  <social.icon className="w-4 h-4" />
                </Link>
              ))}
            </div>
          </div>

          {/* Corporate */}
          <div>
            <h3 className="font-medium mb-4">Kurumsal</h3>
            <ul className="space-y-3">
              {corporateLinks.map((link) => (
                <li key={link.name}>
                  <Link 
                    href={link.href}
                    className="text-white/60 hover:text-white text-sm transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Customer Service */}
          <div>
            <h3 className="font-medium mb-4">Musteri Hizmetleri</h3>
            <ul className="space-y-3">
              {customerLinks.map((link) => (
                <li key={link.name}>
                  <Link 
                    href={link.href}
                    className="text-white/60 hover:text-white text-sm transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="font-medium mb-4">Bulten</h3>
            <p className="text-white/60 text-sm mb-4">
              Yeni urunler ve kampanyalardan haberdar olmak icin bultenimize abone olun.
            </p>
            <form onSubmit={handleSubmit} className="flex gap-2">
              <input
                type="email"
                placeholder="E-posta adresiniz"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="flex-1 px-5 py-3 bg-white/10 rounded-full text-sm placeholder:text-white/40 focus:outline-none focus:ring-2 focus:ring-[#C6A47A] transition-all duration-300"
                required
              />
              <Button 
                type="submit" 
                size="icon"
                className="rounded-full bg-[#C6A47A] hover:bg-[#A8865C] w-11 h-11 shrink-0 transition-all duration-300 ease-out"
              >
                <Send className="w-4 h-4" />
              </Button>
            </form>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-white/40">
          <p>&copy; {currentYear} ROSVENA. Tum haklari saklidir.</p>
          <div className="flex gap-6">
            <Link href="/kullanim-kosullari" className="hover:text-white transition-colors">
              Kullanim Kosullari
            </Link>
            <Link href="/cerez-politikasi" className="hover:text-white transition-colors">
              Cerez Politikasi
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
