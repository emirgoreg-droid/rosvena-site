
"use client"

import { useState } from "react"

export function ComingSoon() {
  const [email, setEmail] = useState("")
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (email) {
      setSubmitted(true)
      setEmail("")
    }
  }

  return (
    <section className="bg-[#F1EEE9] px-4 py-14 md:py-20">
      <div className="max-w-5xl mx-auto">
        <div className="relative overflow-hidden rounded-2xl border border-[#D9C7AA] bg-[#F8F6F2] px-6 py-12 md:px-16 md:py-16 text-center">

          {/* Decorative Details */}
          <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-[#C6A47A] to-transparent" />

          <p className="text-[#B18B58] text-xs md:text-sm tracking-[0.35em] font-semibold mb-5">
            YAKINDA ROSVENA'DA
          </p>

          <div className="flex items-center justify-center gap-4 mb-5">
            <div className="w-10 md:w-16 h-px bg-[#C6A47A]" />
            <span className="text-[#C6A47A] text-xl">✦</span>
            <div className="w-10 md:w-16 h-px bg-[#C6A47A]" />
          </div>

          <h2 className="font-serif text-3xl md:text-5xl text-[#1A1A1A] mb-5">
            Çok Yakında Sizlerle
          </h2>

          <p className="text-[#77716A] text-sm md:text-base leading-relaxed max-w-xl mx-auto mb-9">
            Yaşam alanlarınıza düzen, şıklık ve pratiklik katacak
            ROSVENA koleksiyonu için hazırlıklarımız devam ediyor.
            İlk siz haberdar olun.
          </p>

          {submitted ? (
            <div className="max-w-md mx-auto py-4">
              <p className="text-[#80623C] font-medium">
                Teşekkür ederiz!
              </p>
              <p className="text-[#77716A] text-sm mt-2">
                İlginiz için teşekkürler.
              </p>
            </div>
          ) : (
            <form
              onSubmit={handleSubmit}
              className="flex flex-col sm:flex-row gap-3 max-w-lg mx-auto"
            >
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="E-posta adresiniz"
                aria-label="E-posta adresiniz"
                required
                className="flex-1 min-w-0 px-6 py-4 text-sm bg-white border border-[#E3D9CA] rounded-full text-[#1A1A1A] placeholder:text-[#999087] focus:outline-none focus:border-[#B18B58] transition-all duration-300"
              />

              <button
                type="submit"
                className="px-8 py-4 text-sm bg-[#1A1A1A] text-white rounded-full hover:bg-[#B18B58] transition-all duration-300"
              >
                Haberdar Ol
              </button>
            </form>
          )}

          <p className="text-[#A49B90] text-xs mt-6 tracking-wide">
            ROSVENA · Pratik Yaşam, Zarif Dokunuşlar
          </p>
        </div>
      </div>
    </section>
  )
}

