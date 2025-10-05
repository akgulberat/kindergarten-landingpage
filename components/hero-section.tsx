import { Button } from "@/components/ui/button"
import { Play, Heart, Star, Users } from "lucide-react"

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Video Background */}
      <div className="absolute inset-0 w-full h-full">
        <video autoPlay muted loop playsInline className="w-full h-full object-cover">
          <source
            src="/placeholder.mp4?height=1080&width=1920&query=happy children playing in kindergarten classroom colorful toys learning activities bright natural lighting joyful atmosphere"
            type="video/mp4"
          />
        </video>
        <div className="absolute inset-0 bg-black/30"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-orange-600/10 to-orange-400/15"></div>
      </div>

      {/* Floating Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-3 h-3 bg-white/30 rounded-full animate-pulse"></div>
        <div
          className="absolute top-1/3 right-1/4 w-2 h-2 bg-orange-300/40 rounded-full animate-bounce"
          style={{ animationDelay: "1s" }}
        ></div>
        <div
          className="absolute bottom-1/3 left-1/3 w-4 h-4 bg-orange-300/30 rounded-full animate-pulse"
          style={{ animationDelay: "2s" }}
        ></div>
        <div
          className="absolute bottom-1/4 right-1/3 w-2 h-2 bg-white/40 rounded-full animate-bounce"
          style={{ animationDelay: "0.5s" }}
        ></div>
      </div>

      <div className="container mx-auto px-4 text-center relative z-10">
        <div className="max-w-5xl mx-auto">
          <div className="mb-6">
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 mb-4">
              <Heart className="w-4 h-4 text-orange-400" />
              <span className="text-white text-sm font-medium">Seit 2025 in Berlin</span>
            </div>
          </div>

          <h1 className="text-5xl md:text-7xl font-bold text-balance mb-6 text-white leading-tight">
            Willkommen bei der
            <br />
            <span className="text-orange-400 relative">
              Kita Wasserfee
              <div className="absolute -bottom-2 left-0 right-0 h-1 bg-orange-400/30 rounded-full"></div>
            </span>
          </h1>

          <p className="text-xl md:text-2xl text-white/90 mb-8 text-pretty max-w-3xl mx-auto leading-relaxed">
            Ein magischer Ort der Freude, des Lernens und des Wachstums für Ihre Kleinen im Herzen von Berlin
          </p>

          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16">
            <Button
              size="lg"
              className="text-lg px-10 py-6 hover:scale-105 transition-all duration-300 bg-orange-400 hover:bg-orange-500 text-white shadow-2xl hover:shadow-orange-500/25 rounded-full"
            >
              <Play className="w-5 h-5 mr-2" />
              Jetzt Anmelden
            </Button>

            <div className="flex items-center gap-6 text-white/80">
              <div className="flex items-center gap-2">
                <Users className="w-5 h-5 text-orange-300" />
                <span className="text-sm">120+ glückliche Kinder</span>
              </div>
              <div className="flex items-center gap-2">
                <Star className="w-5 h-5 text-orange-300" />
                <span className="text-sm">15+ Jahre Erfahrung</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
