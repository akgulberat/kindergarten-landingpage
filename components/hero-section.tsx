import { Button } from "@/components/ui/button"
import { ArrowRight, Sparkles, Heart, Star } from "lucide-react"
import Link from "next/link"

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-32 md:pt-32 lg:pt-32">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 right-20 w-32 h-32 opacity-20">
          <Star className="w-full h-full text-kindergarten-orange animate-pulse" />
        </div>
        <div className="absolute top-1/3 right-1/4 w-20 h-20 opacity-15">
          <Sparkles
            className="w-full h-full text-kindergarten-baby-blue animate-pulse"
            style={{ animationDelay: "1s" }}
          />
        </div>
      </div>

      <div className="max-w-6xl container mx-auto px-4 relative z-10 px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 text-kindergarten-pink2 leading-tight">
            Wo kleine Träume
            <span className="block text-black opacity-70">groß werden</span>
          </h1>

          <p className="text-xl md:text-2xl mb-8 text-kindergarten-green2 leading-relaxed max-w-2xl">
            Ein liebevoller Ort für Ihr Kind zum Lernen, Spielen und Wachsen. Wir fördern Kreativität, Neugier und
            soziale Entwicklung in einer sicheren Umgebung.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 mb-12">
            <Button
              asChild
              size="lg"
              className="bg-kindergarten-green2 text-white text-lg px-8 py-6 rounded-full shadow-lg hover:shadow-xl transition-all"
            >
              <Link href="/contact">
                Kontakt aufnehmen
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>

            <Button
              asChild
              size="lg"
              variant="outline"
              className="text-black text-lg px-8 py-6 rounded-full transition-all bg-kindergarten-pink opacity-90"
            >
              <Link href="/programs">Unsere Programme</Link>
            </Button>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-3xl">
            <div className="text-center p-4 bg-white/60 backdrop-blur-sm rounded-2xl border border-gray-200">
              <div className="text-3xl font-bold text-kindergarten-pink2 mb-1">1-6</div>
              <div className="text-sm text-gray-600">Jahre Alt</div>
            </div>
            <div className="text-center p-4 bg-white/60 backdrop-blur-sm rounded-2xl border border-gray-200">
              <div className="text-3xl font-bold text-kindergarten-pink2 mb-1">8-12</div>
              <div className="text-sm text-gray-600">Kinder pro Gruppe</div>
            </div>
            <div className="text-center p-4 bg-white/60 backdrop-blur-sm rounded-2xl border border-gray-200">
              <div className="text-3xl font-bold text-kindergarten-pink2 mb-1">7-18</div>
              <div className="text-sm text-gray-600">Uhr Geöffnet</div>
            </div>
            <div className="text-center p-4 bg-white/60 backdrop-blur-sm rounded-2xl border border-gray-200">
              <div className="text-3xl font-bold text-kindergarten-pink2 mb-1">100%</div>
              <div className="text-sm text-gray-600">Qualifizierte Erzieher</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
