import { Heart, Users, BookOpen, Palette, Music, Star } from "lucide-react"

const features = [
  {
    icon: Heart,
    title: "Liebevolle Betreuung",
    description:
      "Unsere erfahrenen Erzieher bieten fürsorgliche Betreuung in einer sicheren, unterstützenden Umgebung, in der sich jedes Kind geschätzt und geliebt fühlt.",
  },
  {
    icon: Users,
    title: "Soziale Entwicklung",
    description:
      "Kinder lernen wichtige soziale Fähigkeiten durch Gruppenaktivitäten, gemeinsames Spiel und angeleitete Interaktionen mit Gleichaltrigen.",
  },
  {
    icon: BookOpen,
    title: "Frühes Lernen",
    description:
      "Altersgerechter Lehrplan mit Fokus auf Lese-, Schreib- und Rechenfähigkeiten sowie kritisches Denken zur Vorbereitung auf zukünftigen schulischen Erfolg.",
  },
  {
    icon: Palette,
    title: "Kreativer Ausdruck",
    description:
      "Kunst, Basteln und kreative Aktivitäten fördern die Fantasie und helfen Kindern, sich auf einzigartige Weise auszudrücken.",
  },
  {
    icon: Music,
    title: "Musik & Bewegung",
    description:
      "Tägliche Musik- und Bewegungsaktivitäten fördern die körperliche Entwicklung, Rhythmus und Koordination in einer spaßigen Umgebung.",
  },
  {
    icon: Star,
    title: "Individuelle Entwicklung",
    description:
      "Wir feiern die einzigartigen Talente jedes Kindes und unterstützen ihre individuelle Lernreise in ihrem eigenen Tempo.",
  },
]

export function FeaturesSection() {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          <div className="lg:w-1/2">
            <img
              src="/modern-kindergarten-classroom-with-children-learni.png"
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
                  <div className="flex-shrink-0 w-12 h-12 bg-kindergarten-orange/20 rounded-lg flex items-center justify-center">
                    <feature.icon className="w-6 h-6 text-kindergarten-orange" />
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
