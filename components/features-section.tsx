import { Heart, Users, BookOpen, Palette, Music, Star, Sun } from "lucide-react"

const features = [
  {
    icon: Heart,
    title: "Pädagogische Qualität",
    description:
      "Im Fokus steht das Bild vom Kind, Identitätsentwicklung, die Sprachförderung, Inklusion, Elternabend so wie Transition. Darüber hinaus sind die Teamarbeit und die pädagogische Qualität für uns bedeutend.",
  },
  {
    icon: Users,
    title: "Interkulturellen Kindertagesstätte",
    description:
      "Durch den Betrieb einer interkulturellen Kindertagesstätte möchte die Gesellschafterin ihrem Wunsch nachkommen, Kinder deutscher und nicht deutscher Herkunft spräche und deren Familien im kulturellen Dialog und der Überwindung von Bildungsbarrieren zu unterstützen.",
  },
  {
    icon: Sun,
    title: "Qualitäts- und Beschwerdemanagement",
    description:
      "Festigung von Qualitäts- und Beschwerdemanagement. Ausgewogene Balance zwischen pädagogischen Gesichtspunkten und erforderlichen Regelungen. Kontinuierliche Weiterentwicklung der MitarbeiterInnen und der Einrichtung.",
  },
  {
    icon: Palette,
    title: "Kreativer Ausdruck",
    description:
      "Kunst, Basteln und kreative Aktivitäten fördern die Fantasie und helfen Kindern, sich auf einzigartige Weise auszudrücken.",
  },
  {
    icon: Star,
    title: "Verantwortung und Unterstützung",
    description:
      "Verwaltung der Kita Wasserfee und Gesamtverantwortung für die Einrichtung.Impulse und Orientierung für Mitarbeiter und Familien. Beratung und Unterstützung bei der Einhaltung fachlicher und rechtlicher Standards.",
  },
]

export function FeaturesSection() {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          <div className="lg:w-1/2">
            <img
              src="/colorful.jpg"
              alt="Modern kindergarten classroom"
              className="rounded-2xl shadow-xl w-full h-auto"
            />
          </div>

          <div className="lg:w-1/2">
            <h2 className="text-3xl md:text-4xl font-bold text-black mb-6">Warum unsere Kita wählen?</h2>
            <p className="text-lg text-gray-600 mb-8">
              Wir bieten eine umfassende frühkindliche Bildungserfahrung, die jeden Aspekt der Entwicklung Ihres Kindes
              fördert.
            </p>

            <div className="grid gap-6">
              {features.map((feature, index) => (
                <div key={index} className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-12 h-12 rounded-lg flex items-center justify-center">
                    <feature.icon className="w-6 h-6 text-kindergarten-pink2" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-black mb-2">{feature.title}</h3>
                    <p className="text-gray-600 text-sm">{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
