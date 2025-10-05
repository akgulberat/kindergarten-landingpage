import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"

export function HeroSectionBackup() {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-orange-50 overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 opacity-20">
        <div
          className="absolute top-20 left-10 w-20 h-20 bg-blue-400 rounded-full animate-bounce"
          style={{ animationDelay: "0s" }}
        ></div>
        <div
          className="absolute top-40 right-20 w-16 h-16 bg-orange-400 rounded-full animate-bounce"
          style={{ animationDelay: "1s" }}
        ></div>
        <div
          className="absolute bottom-40 left-20 w-12 h-12 bg-blue-300 rounded-full animate-bounce"
          style={{ animationDelay: "2s" }}
        ></div>
        <div
          className="absolute bottom-20 right-10 w-24 h-24 bg-orange-300 rounded-full animate-bounce"
          style={{ animationDelay: "0.5s" }}
        ></div>
      </div>

      <div className="container mx-auto px-4 text-center relative z-10">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-6xl font-bold text-balance mb-6 text-black">
            Willkommen bei der <span className="text-orange-500">Kita Wasserfee</span>
          </h1>
          <p className="text-xl md:text-2xl text-black mb-8 text-pretty">
            Ein Ort der Freude, des Lernens und des Wachstums für Ihre Kleinen
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <Button
              size="lg"
              className="text-lg px-8 py-6 hover:scale-105 transition-transform bg-orange-400 hover:bg-orange-500 text-white"
            >
              Jetzt Anmelden
            </Button>
          </div>

          {/* Feature cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-16">
            <Card className="p-6 hover:shadow-lg transition-shadow bg-white/80 backdrop-blur-sm border-gray-200">
              <div className="text-4xl mb-4">🎨</div>
              <h3 className="text-xl font-semibold mb-2 text-black">Kreative Künste</h3>
              <p className="text-black">Förderung der Kreativität durch Kunst, Musik und fantasievolles Spiel</p>
            </Card>
            <Card className="p-6 hover:shadow-lg transition-shadow bg-white/80 backdrop-blur-sm border-gray-200">
              <div className="text-4xl mb-4">📚</div>
              <h3 className="text-xl font-semibold mb-2 text-black">Frühes Lernen</h3>
              <p className="text-black">Aufbau starker Grundlagen in Lesen, Schreiben und Mathematik</p>
            </Card>
            <Card className="p-6 hover:shadow-lg transition-shadow bg-white/80 backdrop-blur-sm border-gray-200">
              <div className="text-4xl mb-4">🤝</div>
              <h3 className="text-xl font-semibold mb-2 text-black">Soziale Fähigkeiten</h3>
              <p className="text-black">Entwicklung von Freundschaft, Teamwork und Kommunikationsfähigkeiten</p>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}
