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

            <Card className="p-8">
              <h3 className="text-2xl font-semibold mb-4 text-black">🎒 Anmeldung</h3>
              <div className="space-y-4">
                <p className="text-gray-600">
                  Wir nehmen jetzt Anmeldungen für das kommende Schuljahr entgegen. Begrenzte Plätze verfügbar!
                </p>
                <div className="space-y-3">
                  <Button className="w-full bg-orange-400 hover:bg-orange-500 text-white" size="lg">
                    Online anmelden
                  </Button>
                  <Button
                    variant="outline"
                    className="w-full bg-transparent text-black border-black hover:bg-gray-50"
                    size="lg"
                  >
                    Broschüre herunterladen
                  </Button>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}
