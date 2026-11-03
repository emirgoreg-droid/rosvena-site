import Image from "next/image"
import Link from "next/link"
import { Instagram } from "lucide-react"

const instagramPosts = [
  { id: 1, image: "/images/instagram-1.jpg" },
  { id: 2, image: "/images/instagram-2.jpg" },
  { id: 3, image: "/images/instagram-3.jpg" },
  { id: 4, image: "/images/instagram-4.jpg" },
  { id: 5, image: "/images/instagram-5.jpg" }
]

export function InstagramSection() {
  return (
    <section className="max-w-7xl mx-auto px-4 md:px-6 py-12">
      <div className="text-center mb-8">
        <div className="flex items-center justify-center gap-3 mb-2">
          <div className="w-8 h-px bg-[#C6A47A]" />
          <Instagram className="w-5 h-5 text-[#C6A47A]" />
          <h2 className="font-serif text-2xl md:text-3xl text-foreground">
            Bizi Instagram&apos;da Takip Edin
          </h2>
          <div className="w-8 h-px bg-[#C6A47A]" />
        </div>
        <Link 
          href="https://instagram.com/rosvena.home"
          target="_blank"
          rel="noopener noreferrer"
          className="text-muted-foreground hover:text-[#C6A47A] transition-colors"
        >
          @rosvena.home
        </Link>
      </div>

      <div className="grid grid-cols-3 md:grid-cols-5 gap-2 md:gap-4">
        {instagramPosts.map((post) => (
          <Link
            key={post.id}
            href="https://instagram.com/rosvena.home"
            target="_blank"
            rel="noopener noreferrer"
            className="group relative aspect-square rounded-xl overflow-hidden bg-card"
          >
            <Image
              src={post.image}
              alt={`ROSVENA Instagram post ${post.id}`}
              fill
              className="object-cover group-hover:scale-110 transition-transform duration-500"
            />
            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-colors flex items-center justify-center">
              <Instagram className="w-8 h-8 text-white opacity-0 group-hover:opacity-100 transition-opacity" />
            </div>
          </Link>
        ))}
      </div>
    </section>
  )
}
