import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"

export function ContactSection() {
  return (
    <section className="py-20 bg-primary/5">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-balance text-black">
            Bereit für ein Gespräch?
          </h2>
          <p className="text-xl text-gray-600 mb-12 text-pretty">
            Sie können uns sofort anrufen, um weitere Informationen zu jedem Thema zu erhalten. Oder Sie kontaktieren uns per E-mail
          </p>

          <div className="grid grid-cols-1 md:grid-cols-1 gap-8 mb-12">
            <Card className="p-8">
              <h3 className="text-2xl font-semibold mb-4 text-black">📞 Kontaktinformationen</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-left">
                <div className="space-y-3">
                  <p className="text-black">
                    <strong>Telefon:</strong> 0172 5816772
                  </p>
                  <p className="text-black">
                    <strong>E-Mail:</strong> kitawasserfee@gmail.com
                  </p>
                </div>

                <div className="space-y-3">
                  <p className="text-black">
                    <strong>Adresse:</strong> Jahnstr. 27, 12347 Berlin
                  </p>
                  <p className="text-black">
                    <strong>Öffnungszeiten:</strong> Montag - Freitag, 7:30 - 16:30 Uhr
                    Samstag: 8:00 - 12:00 Uhr <br />
                    Sonntag: Geschlossen
                  </p>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}
