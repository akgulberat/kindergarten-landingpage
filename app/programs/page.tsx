import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Clock, Users, Palette, Music, BookOpen, Gamepad2 } from "lucide-react"

export default function ProgramsPage() {
  const programs = [
    {
      title: "Vorschulprogramm",
      age: "4-5 Jahre",
      time: "8:00 - 15:00 Uhr",
      description: "Schulvorbereitungsprogramm mit Fokus auf Lese-, Schreib- und Sozialkompetenzen.",
      features: [
        "Kindergartenvorbereitung",
        "Lese- und Schreibgrundlagen",
        "Mathematische Konzepte",
        "Naturwissenschaftliche Erkundung",
      ],
    },
    {
      title: "Kleinkindprogramm",
      age: "2-3 Jahre",
      time: "8:00 - 17:00 Uhr",
      description: "Fürsorgliche Umgebung für Kleinkinder zum Erkunden, Spielen und Entwickeln der Selbstständigkeit.",
      features: ["Töpfchentraining-Unterstützung", "Sprachentwicklung", "Soziale Interaktion", "Kreatives Spiel"],
    },
    {
      title: "Vorschulprogramm",
      age: "3-4 Jahre",
      time: "8:00 - 16:00 Uhr",
      description: "Strukturiertes Lernen durch Spiel mit Fokus auf Kreativität und Problemlösung.",
      features: ["Kunst & Basteln", "Musik & Bewegung", "Frühe Lesefähigkeiten", "Gruppenaktivitäten"],
    },
  ]

  const activities = [
    { icon: Palette, title: "Kunst & Basteln", description: "Kreativer Ausdruck durch verschiedene Kunstmedien" },
    { icon: Music, title: "Musik & Bewegung", description: "Lieder, Tanzen und Rhythmusaktivitäten" },
    { icon: BookOpen, title: "Vorlesezeit", description: "Tägliche Lesestunden zum Aufbau von Sprachfähigkeiten" },
    { icon: Gamepad2, title: "Spiel im Freien", description: "Körperliche Aktivitäten und Spielplatzzeit" },
  ]

  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-orange-50 to-blue-50">
        <div className="absolute inset-0 bg-[url('/kindergarten-children-engaged-in-various-learning.png')] bg-cover bg-center opacity-20"></div>
        <div className="relative max-w-4xl mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-2xl font-bold text-black mb-6">Unsere Programme</h1>
          <p className="text-xl text-black mb-8 max-w-3xl mx-auto">
            Altersgerechte Programme, die darauf ausgelegt sind, die Entwicklung Ihres Kindes durch spielbasiertes
            Lernen und strukturierte Aktivitäten zu fördern.
          </p>
        </div>
      </section>

      {/* Programs Section */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8">
            {programs.map((program, index) => (
              <div key={index} className="bg-blue-50 rounded-lg p-6 shadow-lg">
                <h3 className="text-2xl font-bold text-black mb-2">{program.title}</h3>
                <div className="flex items-center gap-4 mb-4">
                  <div className="flex items-center gap-1 text-kindergarten-pink2">
                    <Users className="w-4 h-4" />
                    <span className="text-sm font-medium">{program.age}</span>
                  </div>
                  <div className="flex items-center gap-1 text-kindergarten-pink2">
                    <Clock className="w-4 h-4" />
                    <span className="text-sm font-medium">{program.time}</span>
                  </div>
                </div>
                <p className="text-black mb-4">{program.description}</p>
                <ul className="space-y-2 mb-6">
                  {program.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center gap-2 text-black">
                      <div className="w-2 h-2 bg-kindergarten-pink2 rounded-full"></div>
                      {feature}
                    </li>
                  ))}
                </ul>
                <Button className="w-full bg-kindergarten-green2 text-white">Mehr erfahren</Button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Activities Section */}
      <section className="py-16 bg-blue-50">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-black text-center mb-12">Tägliche Aktivitäten</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {activities.map((activity, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-kindergarten-green2 rounded-full flex items-center justify-center mx-auto mb-4">
                  <activity.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-black mb-3">{activity.title}</h3>
                <p className="text-black">{activity.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
