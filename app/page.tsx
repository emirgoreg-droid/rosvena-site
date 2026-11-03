import { AnnouncementBar } from "@/components/announcement-bar"
import { Header } from "@/components/header"
import { Hero } from "@/components/hero"
import { ComingSoon } from "@/components/coming-soon"
import { TrustBadges } from "@/components/trust-badges"
import { Categories } from "@/components/categories"
import { PromoBanners } from "@/components/promo-banners"
import { Products } from "@/components/products"
import { InstagramSection } from "@/components/instagram-section"
import { BrandStory } from "@/components/brand-story"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <main className="min-h-screen">
      <AnnouncementBar />
      <Header />
      <Hero />
      <ComingSoon />
      <TrustBadges />
      <Categories />
      <PromoBanners />
      <Products />
      <InstagramSection />
      <BrandStory />
      <Footer />
    </main>
  )
}
