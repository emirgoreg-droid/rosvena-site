
import { Header } from "@/components/header"
import { Hero } from "@/components/hero"
import { TrustBadges } from "@/components/trust-badges"
import { Categories } from "@/components/categories"
import { PromoBanners } from "@/components/promo-banners"
import { LivingSpaces } from "@/components/living-spaces"
import { InstagramSection } from "@/components/instagram-section"
import { BrandStory } from "@/components/brand-story"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <Hero />
      <TrustBadges />
      <Categories />
      <PromoBanners />
      <LivingSpaces />
      <InstagramSection />
      <BrandStory />
      <Footer />
    </main>
  )
}
