
"use client"

import { useEffect, useState } from "react"
import Image from "next/image"
import { MessageCircle, X, Send } from "lucide-react"

type Message = {
  role: "user" | "assistant"
  content: string
}

export default function RosvenaAIChat() {
  const [open, setOpen] = useState(false)
  const [input, setInput] = useState("")
  const [loading, setLoading] = useState(false)
  const [showGreeting, setShowGreeting] = useState(true)

  const [messages, setMessages] = useState<Message[]>([
    {
      role: "assistant",
      content:
        "Merhaba, ROSVENA'ya hoş geldiniz.\n\nÜrünlerimizi keşfetmeniz ve yaşam alanınıza en uygun çözümleri bulmanız için buradayım.",
    },
  ])

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowGreeting(false)
    }, 6000)

    return () => clearTimeout(timer)
  }, [])

  function toggleChat() {
    setOpen((previous) => !previous)
    setShowGreeting(false)
  }

  async function sendMessage() {
    const text = input.trim()
    if (!text || loading) return

    const updatedMessages = [
      ...messages,
      { role: "user" as const, content: text },
    ]

    setMessages(updatedMessages)
    setInput("")
    setLoading(true)

    try {
      const response = await fetch("/api/chat", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          messages: updatedMessages,
        }),
      })

      const data = await response.json()

      if (!response.ok) {
        throw new Error(data.error || "Bir hata oluştu.")
      }

      setMessages((previous) => [
        ...previous,
        { role: "assistant", content: data.reply },
      ])
    } catch {
      setMessages((previous) => [
        ...previous,
        {
          role: "assistant",
          content:
            "Şu anda bağlantıda küçük bir sorun yaşıyorum. Lütfen biraz sonra tekrar deneyin.",
        },
      ])
    } finally {
      setLoading(false)
    }
  }

  return (
    <>
      {open && (
        <div className="fixed bottom-24 right-5 z-[100] flex h-[520px] w-[380px] max-w-[calc(100vw-24px)] flex-col overflow-hidden rounded-2xl border border-[#B58B55]/40 bg-[#FAF8F4] shadow-2xl">

          {/* ÜST BAŞLIK */}
          <div className="flex items-center justify-between border-b border-[#B58B55]/20 bg-[#191919] px-4 py-4 text-white">
            <div className="flex items-center gap-3">

              <div className="flex h-11 w-11 shrink-0 items-center justify-center overflow-hidden rounded-full border border-[#B58B55]/60 bg-[#191919]">
                <Image
                  src="/rosvena-logo-altin.png"
                  alt="ROSVENA"
                  width={38}
                  height={38}
                  className="h-9 w-9 object-contain"
                />
              </div>

              <div>
                <p className="font-serif text-lg tracking-wide">
                  ROSVENA AI
                </p>

                <div className="mt-0.5 flex items-center gap-1.5">
                  <span className="h-2 w-2 rounded-full bg-green-500 shadow-[0_0_6px_#22c55e]" />
                  <span className="text-xs text-[#D6B47A]">
                    Çevrimiçi
                  </span>
                </div>
              </div>
            </div>

            <button
              onClick={() => setOpen(false)}
              aria-label="Sohbeti kapat"
              className="rounded-full p-1 text-white/80 transition hover:bg-white/10 hover:text-white"
            >
              <X size={22} />
            </button>
          </div>

          {/* MESAJLAR */}
          <div className="flex-1 space-y-4 overflow-y-auto p-4">

            {messages.map((message, index) => (
              <div
                key={index}
                className={`flex ${
                  message.role === "user"
                    ? "justify-end"
                    : "justify-start"
                }`}
              >
                <div
                  className={`max-w-[88%] whitespace-pre-wrap rounded-2xl px-4 py-3 text-sm leading-relaxed ${
                    message.role === "user"
                      ? "rounded-br-md bg-[#242424] text-white"
                      : "rounded-bl-md border border-[#B58B55]/20 bg-white text-[#292929]"
                  }`}
                >
                  {message.content}
                </div>
              </div>
            ))}

            {loading && (
              <div className="flex items-center gap-2 px-2 py-1 text-sm text-[#8B765B]">
                <span className="h-2 w-2 animate-pulse rounded-full bg-[#B58B55]" />
                ROSVENA yazıyor...
              </div>
            )}
          </div>

          {/* MESAJ GÖNDERME */}
          <form
            onSubmit={(event) => {
              event.preventDefault()
              sendMessage()
            }}
            className="flex gap-2 border-t border-[#B58B55]/20 bg-white p-3"
          >
            <input
              value={input}
              onChange={(event) => setInput(event.target.value)}
              placeholder="Mesajınızı yazın..."
              className="min-w-0 flex-1 rounded-full border border-[#DDD5C9] px-4 py-3 text-sm outline-none transition focus:border-[#B58B55]"
            />

            <button
              type="submit"
              disabled={loading || !input.trim()}
              aria-label="Mesaj gönder"
              className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-[#242424] text-[#D6B47A] transition hover:bg-[#3A3025] disabled:opacity-40"
            >
              <Send size={17} />
            </button>
          </form>
        </div>
      )}

      {/* İLK GİRİŞ KARŞILAMA BALONU */}
      {!open && showGreeting && (
        <div className="fixed bottom-[94px] right-5 z-[100] max-w-[280px] animate-in fade-in slide-in-from-bottom-2 duration-500">
          <button
            onClick={toggleChat}
            className="rounded-2xl border border-[#B58B55]/40 bg-[#191919] px-4 py-3 text-left text-sm text-white shadow-xl transition hover:border-[#D6B47A]"
          >
            <span className="mb-1 block font-serif text-[#D6B47A]">
              ROSVENA AI
            </span>
            <span className="leading-relaxed text-white/90">
              Merhaba! Yaşam alanınız için doğru çözümleri birlikte keşfedelim.
            </span>
          </button>
        </div>
      )}

      {/* SOHBET BUTONU */}
      <button
        onClick={toggleChat}
        aria-label="ROSVENA AI sohbetini aç"
        className="fixed bottom-5 right-5 z-[100] flex h-14 w-14 items-center justify-center rounded-full border border-[#D6B47A] bg-[#191919] text-[#D6B47A] shadow-xl transition duration-300 hover:scale-105 hover:bg-[#30271E]"
      >
        {open ? (
          <X size={24} />
        ) : (
          <MessageCircle size={25} />
        )}
      </button>
    </>
  )
}
