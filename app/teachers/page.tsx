import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Award, BookOpen, Heart } from "lucide-react"

export default function TeachersPage() {
  const teachers = [
    {
      name: "Sarah Müller",
      title: "Leitende Erzieherin & Direktorin",
      experience: "12 Jahre",
      education: "M.A. Frühkindliche Bildung",
      description:
        "Sarah bringt Leidenschaft und Expertise in die Schaffung fürsorglicher Lernumgebungen ein. Sie spezialisiert sich auf spielbasiertes Lernen und hat Hunderten von Kindern bei der Kindergartenvorbereitung geholfen.",
      image: "/professional-female-kindergarten-teacher-smiling-wa.png",
    },
    {
      name: "Maria Schmidt",
      title: "Vorschulerzieherin",
      experience: "8 Jahre",
      education: "B.A. Kindheitsentwicklung",
      description:
        "Maria liebt es, Kreativität und Neugier in jungen Köpfen zu fördern. Sie spricht fließend Deutsch und Englisch und hilft dabei, eine inklusive Umgebung für alle Familien zu schaffen.",
      image: "/professional-hispanic-female-teacher-in-kindergar.png",
    },
    {
      name: "Anna Weber",
      title: "Kleinkind-Spezialistin",
      experience: "6 Jahre",
      education: "B.S. Frühkindliche Bildung",
      description:
        "Anna hat eine besondere Gabe für die Arbeit mit unseren jüngsten Lernenden. Ihr sanfter Ansatz hilft Kleinkindern, sich sicher zu fühlen, während sie ihre Unabhängigkeit und sozialen Fähigkeiten erkunden.",
      image: "/professional-asian-female-kindergarten-teacher-s.png",
    },
  ]

  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-blue-50 to-orange-50">
        <div className="absolute inset-0 bg-[url('/kindergarten-teachers-working-with-children-in-br.png')] bg-cover bg-center opacity-20"></div>
        <div className="relative max-w-4xl mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-2xl font-bold text-black mb-6">Lernen Sie unsere Erzieher kennen</h1>
          <p className="text-xl text-black mb-8 max-w-3xl mx-auto">
            Unser engagiertes Team erfahrener Pädagogen ist darauf verpflichtet, die höchste Qualität der Betreuung und
            Bildung für Ihr Kind zu bieten.
          </p>
        </div>
      </section>

      {/* Teachers Section */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid lg:grid-cols-3 gap-8">
            {teachers.map((teacher, index) => (
              <div key={index} className="bg-blue-50 rounded-lg overflow-hidden shadow-lg">
                <div className="aspect-square bg-gray-200">
                  <img
                    src={teacher.image || "/placeholder.svg"}
                    alt={teacher.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-2xl font-bold text-black mb-1">{teacher.name}</h3>
                  <p className="text-orange-600 font-semibold mb-2">{teacher.title}</p>
                  <div className="flex items-center gap-4 mb-4 text-sm text-black">
                    <div className="flex items-center gap-1">
                      <Award className="w-4 h-4" />
                      <span>{teacher.experience}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <BookOpen className="w-4 h-4" />
                      <span>{teacher.education}</span>
                    </div>
                  </div>
                  <p className="text-black leading-relaxed">{teacher.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Our Teachers Section */}
      <section className="py-16 bg-blue-50">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-black mb-8">Warum unsere Erzieher den Unterschied machen</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-orange-400 rounded-full flex items-center justify-center mx-auto mb-4">
                <Heart className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-black mb-3">Leidenschaftliche Fürsorge</h3>
              <p className="text-black">
                Jeder Erzieher liebt es aufrichtig, mit Kindern zu arbeiten und ist ihrem Wachstum verpflichtet.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-orange-400 rounded-full flex items-center justify-center mx-auto mb-4">
                <BookOpen className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-black mb-3">Fachkundige Ausbildung</h3>
              <p className="text-black">
                Alle Erzieher haben Abschlüsse in frühkindlicher Bildung und nehmen an kontinuierlicher beruflicher
                Weiterbildung teil.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-orange-400 rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-black mb-3">Bewährte Erfahrung</h3>
              <p className="text-black">
                Unser Team hat jahrelange praktische Erfahrung in der Schaffung positiver Lernumgebungen.
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
