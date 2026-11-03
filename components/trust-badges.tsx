import { Truck, Shield, Award, Headphones } from "lucide-react"

const badges = [
  {
    icon: Truck,
    title: "Hizli Kargo",
    description: "1-3 is gunu icinde teslimat"
  },
  {
    icon: Shield,
    title: "Guvenli Alisveris",
    description: "256-bit SSL sertifikasi"
  },
  {
    icon: Award,
    title: "Memnuniyet Garantisi",
    description: "14 gun iade hakki"
  },
  {
    icon: Headphones,
    title: "7/24 Destek",
    description: "Her zaman yaninizda"
  }
]

export function TrustBadges() {
  return (
    <section className="max-w-7xl mx-auto px-4 md:px-6 py-8">
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        {badges.map((badge) => (
          <div 
            key={badge.title}
            className="flex items-center gap-4 bg-card p-4 md:p-5 rounded-xl border border-border"
          >
            <div className="w-12 h-12 bg-background rounded-full flex items-center justify-center shrink-0">
              <badge.icon className="w-5 h-5 text-[#C6A47A]" />
            </div>
            <div>
              <p className="font-medium text-foreground text-sm md:text-base">{badge.title}</p>
              <p className="text-muted-foreground text-xs md:text-sm">{badge.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
