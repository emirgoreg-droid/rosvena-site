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
    <section className="py-16 px-4 bg-background">
      <div className="max-w-xl mx-auto text-center">
        <div className="flex items-center justify-center gap-3 mb-3">
          <div className="w-8 h-px bg-[#C6A47A]" />
          <h2 className="font-serif text-2xl md:text-3xl text-foreground">
            Cok Yakinda Sizlerle
          </h2>
          <div className="w-8 h-px bg-[#C6A47A]" />
        </div>
        <p className="text-muted-foreground text-sm md:text-base mb-8">
          ROSVENA koleksiyonu cok yakinda satista olacak.
        </p>

        {submitted ? (
          <p className="text-sm text-foreground">
            Tesekkurler! Sizi haberdar edecegiz.
          </p>
        ) : (
          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="E-posta adresiniz"
              required
              className="flex-1 px-6 py-4 text-sm bg-[#F5F3F0] border border-[#E6E0D7] rounded-full text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-[#1A1A1A] transition-all duration-300"
            />
            <button
              type="submit"
              className="px-8 py-4 text-sm bg-[#1A1A1A] text-white rounded-full hover:bg-[#0D0D0D] transition-all duration-300 ease-out"
            >
              Haberdar Ol
            </button>
          </form>
        )}
      </div>
    </section>
  )
}
