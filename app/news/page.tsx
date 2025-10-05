import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Calendar, User } from "lucide-react"

export default function NewsPage() {
  const announcements = [
    {
      id: 1,
      title: "Sommerfest 2024 - Ein großer Erfolg!",
      excerpt:
        "Unser jährliches Sommerfest war ein wunderbarer Tag voller Spaß, Spiele und Gemeinschaft. Vielen Dank an alle Familien, die teilgenommen haben!",
      content:
        "Das Sommerfest der Kita Wasserfee war ein voller Erfolg mit über 150 Teilnehmern. Die Kinder genossen Hüpfburgen, Gesichtsbemalung und verschiedene Spiele im Freien.",
      date: "2024-07-15",
      author: "Maria Schmidt",
      category: "Veranstaltung",
      image: "/kindergarten-outdoor-playground-with-children-havi.png",
    },
    {
      id: 2,
      title: "Neue Öffnungszeiten ab September",
      excerpt:
        "Ab dem 1. September erweitern wir unsere Öffnungszeiten, um den Bedürfnissen berufstätiger Eltern besser gerecht zu werden.",
      content:
        "Die Kita Wasserfee wird ab September von 6:30 bis 18:30 Uhr geöffnet sein. Diese Erweiterung ermöglicht es mehr Familien, unsere Betreuung in Anspruch zu nehmen.",
      date: "2024-08-20",
      author: "Thomas Weber",
      category: "Wichtige Info",
      image: "/kindergarten-children-learning-together-in-bright-class.png",
    },
    {
      id: 3,
      title: "Herbstprojekt: Natur entdecken",
      excerpt:
        "Im Oktober starten wir unser spannendes Herbstprojekt, bei dem die Kinder die Natur und den Wechsel der Jahreszeiten erforschen werden.",
      content:
        "Unser Herbstprojekt umfasst Waldspaziergänge, das Sammeln von Blättern, Basteln mit Naturmaterialien und das Lernen über Tiere im Herbst.",
      date: "2024-09-28",
      author: "Anna Müller",
      category: "Pädagogik",
      image: "/kindergarten-art-and-craft-activities-with-colorfu.png",
    },
    {
      id: 4,
      title: "Gesunde Ernährung in der Kita",
      excerpt:
        "Wir haben unser Speisekonzept überarbeitet und bieten nun noch mehr frische, regionale und biologische Mahlzeiten für unsere Kinder an.",
      content:
        "In Zusammenarbeit mit einem lokalen Bio-Lieferanten bieten wir jetzt täglich frisch zubereitete Mahlzeiten mit saisonalen Zutaten aus der Region.",
      date: "2024-09-10",
      author: "Lisa Wagner",
      category: "Ernährung",
      image: "/kindergarten-lunch-time-with-healthy-meals-and-hap.png",
    },
    {
      id: 5,
      title: "Tag der offenen Tür - 15. November",
      excerpt:
        "Lernen Sie unsere Kita kennen! Am 15. November laden wir alle interessierten Familien zu unserem Tag der offenen Tür ein.",
      content:
        "Von 10:00 bis 16:00 Uhr können Sie unsere Räumlichkeiten besichtigen, mit unseren Erziehern sprechen und mehr über unser pädagogisches Konzept erfahren.",
      date: "2024-10-25",
      author: "Kita Wasserfee Team",
      category: "Veranstaltung",
      image: "/kindergarten-reading-corner-with-books-and-comfort.png",
    },
  ]

  const getCategoryColor = (category: string) => {
    switch (category) {
      case "Veranstaltung":
        return "bg-orange-100 text-orange-800"
      case "Wichtige Info":
        return "bg-blue-100 text-blue-800"
      case "Pädagogik":
        return "bg-green-100 text-green-800"
      case "Ernährung":
        return "bg-purple-100 text-purple-800"
      default:
        return "bg-gray-100 text-gray-800"
    }
  }

  const formatDate = (dateString: string) => {
    const date = new Date(dateString)
    return date.toLocaleDateString("de-DE", {
      year: "numeric",
      month: "long",
      day: "numeric",
    })
  }

  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-blue-50 to-orange-50">
        <div className="absolute inset-0 bg-[url('/kindergarten-children-engaged-in-various-learning.png')] bg-cover bg-center opacity-20"></div>
        <div className="relative max-w-4xl mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-2xl font-bold text-black mb-6">Neuigkeiten & Ankündigungen</h1>
          <p className="text-xl text-black mb-8 max-w-3xl mx-auto">
            Bleiben Sie auf dem Laufenden über alle wichtigen Ereignisse und Neuigkeiten aus der Kita Wasserfee.
          </p>
        </div>
      </section>

      {/* News Grid */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid gap-8">
            {announcements.map((announcement, index) => (
              <Card key={announcement.id} className="overflow-hidden hover:shadow-lg transition-shadow">
                <div className="md:flex">
                  {/* Image */}
                  <div className="md:w-1/3">
                    <div
                      className="h-48 md:h-full bg-cover bg-center"
                      style={{ backgroundImage: `url('${announcement.image}')` }}
                    />
                  </div>

                  {/* Content */}
                  <div className="md:w-2/3 p-6">
                    <div className="flex items-center gap-4 mb-4">
                      <Badge className={getCategoryColor(announcement.category)}>{announcement.category}</Badge>
                      <div className="flex items-center text-sm text-black gap-4">
                        <div className="flex items-center gap-1">
                          <Calendar className="w-4 h-4" />
                          <span>{formatDate(announcement.date)}</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <User className="w-4 h-4" />
                          <span>{announcement.author}</span>
                        </div>
                      </div>
                    </div>

                    <h2 className="text-2xl font-bold text-black mb-3">{announcement.title}</h2>

                    <p className="text-black mb-4 leading-relaxed">{announcement.excerpt}</p>

                    <p className="text-black text-sm leading-relaxed">{announcement.content}</p>
                  </div>
                </div>
              </Card>
            ))}
          </div>

          {/* Newsletter Signup */}
          <div className="mt-16 bg-gradient-to-r from-blue-50 to-orange-50 rounded-lg p-8 text-center">
            <h3 className="text-2xl font-bold text-black mb-4">Newsletter abonnieren</h3>
            <p className="text-black mb-6 max-w-2xl mx-auto">
              Verpassen Sie keine wichtigen Neuigkeiten! Melden Sie sich für unseren Newsletter an und erhalten Sie
              regelmäßige Updates über Veranstaltungen und wichtige Informationen.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Ihre E-Mail-Adresse"
                className="flex-1 px-4 py-3 border border-blue-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-400"
              />
              <button className="px-6 py-3 bg-orange-400 hover:bg-orange-500 text-white rounded-lg font-medium transition-colors">
                Anmelden
              </button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
