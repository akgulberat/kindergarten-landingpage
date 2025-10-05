import { Card } from "@/components/ui/card"
import { Heart, Users, Sparkles, Shield } from "lucide-react"

export function TestimonialsSection() {
  const values = [
    {
      icon: Heart,
      title: "Liebevolle Betreuung",
      description:
        "Jedes Kind wird mit Wärme und Fürsorge behandelt. Wir schaffen eine sichere Umgebung, in der sich Kinder geborgen fühlen und ihre Persönlichkeit entfalten können.",
    },
    {
      icon: Users,
      title: "Kleine Gruppen",
      description:
        "Mit maximal 15 Kindern pro Gruppe garantieren wir individuelle Aufmerksamkeit und fördern soziale Kompetenzen in einer familiären Atmosphäre.",
    },
    {
      icon: Sparkles,
      title: "Kreative Förderung",
      description:
        "Durch Musik, Kunst und Bewegung unterstützen wir die kreative Entwicklung. Jedes Kind kann seine Talente entdecken und seine Fantasie ausleben.",
    },
    {
      icon: Shield,
      title: "Vertrauen & Sicherheit",
      description:
        "Transparente Kommunikation mit Eltern und höchste Sicherheitsstandards schaffen Vertrauen. Ihr Kind ist bei uns in besten Händen.",
    },
  ]

  return (
    <section className="py-20 bg-gradient-to-b from-white to-kindergarten-baby-blue/20">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-balance">Unsere Werte</h2>
            <p className="text-xl text-gray-600 text-pretty">
              Was uns bei Kita Wasserfee besonders macht und wofür wir stehen
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {values.map((value, index) => {
              const Icon = value.icon
              return (
                <Card
                  key={index}
                  className="p-8 hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border-2 border-transparent hover:border-kindergarten-orange/20"
                >
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0">
                      <div className="w-14 h-14 rounded-full bg-kindergarten-orange/10 flex items-center justify-center">
                        <Icon className="w-7 h-7 text-kindergarten-pink2" />
                      </div>
                    </div>
                    <div>
                      <h3 className="text-xl font-bold mb-3 text-black">{value.title}</h3>
                      <p className="text-gray-600 leading-relaxed">{value.description}</p>
                    </div>
                  </div>
                </Card>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
