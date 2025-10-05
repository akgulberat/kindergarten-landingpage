import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"

export function ContactSection() {
  return (
    <section className="py-20 bg-primary/5">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-balance text-black">
            Bereit, unserer Familie beizutreten?
          </h2>
          <p className="text-xl text-gray-600 mb-12 text-pretty">
            Geben Sie Ihrem Kind den besten Start in ihre Bildungsreise
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            <Card className="p-8">
              <h3 className="text-2xl font-semibold mb-4 text-black">📞 Kontaktinformationen</h3>
              <div className="space-y-3 text-left">
                <p className="text-black">
                  <strong>Telefon:</strong> 0172 5816772
                </p>
                <p className="text-black">
                  <strong>E-Mail:</strong> kitawasserfee@gmail.com
                </p>
                <p className="text-black">
                  <strong>Adresse:</strong> Jahnstr. 27, 12347 Berlin
                </p>
                <p className="text-black">
                  <strong>Öffnungszeiten:</strong> Montag - Freitag, 7:00 - 18:00 Uhr
                </p>
              </div>
            </Card>

            <Card className="p-8 bg-gradient-to-br from-orange-50 to-blue-50">
              <h3 className="text-2xl font-semibold mb-6 text-black">✨ Warum Kita Wasserfee?</h3>
              <div className="space-y-4 text-left">
                <div className="flex items-start gap-3">
                  <span className="text-2xl">🎨</span>
                  <div>
                    <p className="font-semibold text-black">Kreative Förderung</p>
                    <p className="text-gray-600 text-sm">Kunst, Musik und spielerisches Lernen</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-2xl">👥</span>
                  <div>
                    <p className="font-semibold text-black">Kleine Gruppen</p>
                    <p className="text-gray-600 text-sm">Individuelle Betreuung für jedes Kind</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-2xl">🌱</span>
                  <div>
                    <p className="font-semibold text-black">Ganzheitliche Entwicklung</p>
                    <p className="text-gray-600 text-sm">Soziale, emotionale und kognitive Förderung</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-2xl">🏡</span>
                  <div>
                    <p className="font-semibold text-black">Familiäre Atmosphäre</p>
                    <p className="text-gray-600 text-sm">Ein zweites Zuhause für Ihr Kind</p>
                  </div>
                </div>
              </div>
              <Button className="w-full mt-6 bg-kindergarten-green2 text-white" size="lg" asChild>
                <a href="/contact">Jetzt Kontakt aufnehmen</a>
              </Button>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}
