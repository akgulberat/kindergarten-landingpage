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
        </div>
      </section>
      <section className="py-20 bg-white">
        <div className="max-w-5xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-black-700 mb-4 text-left">
            Die sieben Bildungsbereiche des Berliner Bildungsprogramms
          </h2>
          <h3 className="text-xl font-semibold text-gray-800 mb-6 text-left">
            Berliner Bildungsprogramms
          </h3>
          <p className="text-gray-700 mb-6 text-left">
            2004 wurde das Berliner Bildungsprogramm in Berlin eingeführt und 2014 aktualisiert.
            Seitdem ist es die Grundlage der pädagogischen Arbeit in allen Berliner Kindertagesstätten.
          </p>

          <p className="text-gray-600 font-medium mb-4 text-left">
            Senatsverwaltung für Bildung, Jugend und Familie
          </p>

          <ul className="list-disc list-inside text-gray-800 space-y-2 text-left">
            <li>Die Arbeit mit den jüngsten Kindern</li>
            <li>Die Entwicklung eines inklusiven Bildungssystems</li>
            <li>Die alltagsintegrierte sprachliche Bildung für alle – auch die mehrsprachig aufwachsenden Kinder</li>
            <li>Der Zusammenhang von Bildung und Gesundheit</li>
            <li>Die Bedeutung von Übergängen in den Biographien der Kinder</li>
            <li>Die Bildung für nachhaltige Entwicklung</li>
            <li>Die Verantwortung von Leitung und Trägern für die Qualitätsentwicklung</li>
          </ul>
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
