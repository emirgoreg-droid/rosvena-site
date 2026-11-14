
import { Truck, ShieldCheck, RefreshCw, Headphones } from "lucide-react"

const badges = [
  {
    icon: Truck,
    title: "Özenli ve Güvenli Kargo",
    description: "Güvenli paketleme, Türkiye’nin her yerine teslimat",
  },
  {
    icon: ShieldCheck,
    title: "Trendyol Güvencesi",
    description: "Güvenli ve kolay alışveriş deneyimi",
  },
  {
    icon: RefreshCw,
    title: "14 Günlük İade Hakkı",
    description: "Mevzuata uygun, kolay iade süreci",
  },
  {
    icon: Headphones,
    title: "Müşteri Desteği",
    description: "Sorularınız için daima yanınızdayız",
  },
]

export function TrustBadges() {
  return (
    <section className="max-w-7xl mx-auto px-4 md:px-6 py-8 md:py-10">
      <div className="relative overflow-hidden rounded-[20px] border border-[#D8C3A2] bg-gradient-to-br from-[#F5EFE5] via-[#EEE5D8] to-[#F7F1E8] shadow-[0_8px_24px_rgba(60,45,25,0.04)]">
        <div className="grid grid-cols-2 lg:grid-cols-4">
          {badges.map((badge, index) => (
            <div
              key={badge.title}
              className={`group relative flex flex-col items-center justify-center text-center px-3 py-7 md:px-5 md:py-8 transition-colors duration-300 hover:bg-[#E8DCCB]/40 ${
                index % 2 === 0 ? "border-r border-[#D8C7AE]" : ""
              } ${
                index < 2 ? "border-b lg:border-b-0 border-[#D8C7AE]" : ""
              } ${
                index > 0 ? "lg:border-l lg:border-r-0" : ""
              }`}
            >
              <div className="mb-4 flex items-center justify-center transition-transform duration-300 group-hover:-translate-y-1">
                <badge.icon
                  className="w-7 h-7 md:w-8 md:h-8 text-[#AD8247]"
                  strokeWidth={1.4}
                />
              </div>

              <h3 className="font-semibold text-[#29231D] text-[13px] md:text-sm mb-2">
                {badge.title}
              </h3>

              <p className="text-[#51483E] text-[11px] md:text-xs leading-relaxed max-w-[220px] font-medium">
                {badge.description}
              </p>

              <div className="w-8 h-px bg-[#C6A47A] mt-4 opacity-70 group-hover:w-12 transition-all duration-300" />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
