import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Heart, Users, Award, BookOpen } from "lucide-react"

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-blue-50 to-orange-50">
        <div className="absolute inset-0 bg-[url('/kindergarten-children-learning-together-in-bright-class.png')] bg-cover bg-center opacity-20"></div>
        <div className="relative max-w-4xl mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-2xl font-bold text-black mb-6">Über Kita Wasserfee</h1>
          <p className="text-xl text-black mb-8 max-w-3xl mx-auto">
            Wir betrachten alle Kinder gleichermaßen als kompetente und eigenständige Entdecker ihrer Welt.
          </p>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-black mb-6">Unsere Mission</h2>
              <p className="text-black text-lg mb-6">
                Angetrieben durch ihre intrinsische Motivation wollen sie jeden Tag Neues erforschen und Neues entdecken.
                Dabei erschaffen sie sich ihre Welt eigenständig durch ihr eigenes Denken und durch ihr eigenes Tun. Pädagogische Fachkräfte begleiten die Kinder auf ihren individuellen Wegen.
              </p>
              <p className="text-black text-lg">
                Sie unterstützen die Kinder in ihren Vorhaben, stehen den Kindern als Lernpartner zur Seite, beraten bei besonderen Herausforderungen oder hören einfach nur zu. Pädagogische Fachkräfte sehen und schätzen die Ressourcen, die jedes Kind mitbringt. Sie sind davon überzeugt, dass ausgehend von den individuellen Voraussetzungen jedes Kind in der Lage ist, zu lernen und sich zu bilden.

                Ein besonderer Schwerpunkt der Arbeit in unserer Einrichtung ist die vorurteilsbewusste interkulturelle Erziehung. Diese Form von Erziehung bereitet Kinder gezielt auf eine Gesellschaft, in der verschiedene Kulturen zusammenleben, vor. Sie erleben alltäglich, dass es Menschen mit unterschiedlichen Normen, Werten, Sprachen, Kulturen und Verhaltensweisen gibt.
              </p>
            </div>
            <div className="relative">
              <img
                src="/kindergarten-teacher-reading-story-to-engaged-chil.png"
                alt="Erzieherin liest Kindern vor"
                className="rounded-lg shadow-lg w-full"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-16 bg-blue-50">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-black text-center mb-12">Unsere Grundwerte</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-kindergarten-pink2 rounded-full flex items-center justify-center mx-auto mb-4">
                <Heart className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-black mb-3">Liebe & Fürsorge</h3>
              <p className="text-black">
                Jedes Kind erhält individuelle Aufmerksamkeit und bedingungslose Unterstützung.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-kindergarten-pink2 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-black mb-3">Gemeinschaft</h3>
              <p className="text-black">Aufbau starker Beziehungen zwischen Kindern, Familien und Erziehern.</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-kindergarten-pink2 rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-black mb-3">Exzellenz</h3>
              <p className="text-black">Aufrechterhaltung höchster Standards in der frühkindlichen Bildung.</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-kindergarten-pink2 rounded-full flex items-center justify-center mx-auto mb-4">
                <BookOpen className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-black mb-3">Lernen</h3>
              <p className="text-black">Förderung von Neugier und lebenslanger Liebe zu Entdeckung und Wachstum.</p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
