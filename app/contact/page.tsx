import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { GoogleMaps } from "@/components/google-maps"
import { Button } from "@/components/ui/button"
import { MapPin, Phone, Mail, Clock } from "lucide-react"

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-orange-50 to-blue-50">
        <div className="absolute inset-0 bg-[url('/kindergarten-welcoming-entrance-with-colorful-d.png')] bg-cover bg-center opacity-20"></div>
        <div className="relative max-w-4xl mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-2xl font-bold text-black mb-6">Kontakt</h1>
          <p className="text-xl text-black mb-8 max-w-3xl mx-auto">
            Wir freuen uns auf Ihre Nachricht! Kontaktieren Sie uns per E-Mail oder Telefon, um mehr über unsere
            Programme zu erfahren.
          </p>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div className="bg-blue-50 rounded-lg p-8">
              <h2 className="text-2xl font-bold text-black mb-6">Senden Sie uns eine Nachricht</h2>
              <form className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-black font-medium mb-2">Name der Eltern</label>
                    <input
                      type="text"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-400"
                      placeholder="Ihr vollständiger Name"
                    />
                  </div>
                  <div>
                    <label className="block text-black font-medium mb-2">Name des Kindes</label>
                    <input
                      type="text"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-400"
                      placeholder="Name des Kindes"
                    />
                  </div>
                </div>
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-black font-medium mb-2">E-Mail</label>
                    <input
                      type="email"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-400"
                      placeholder="ihre@email.de"
                    />
                  </div>
                  <div>
                    <label className="block text-black font-medium mb-2">Telefon</label>
                    <input
                      type="tel"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-400"
                      placeholder="0172 5816772"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-black font-medium mb-2">Alter des Kindes</label>
                  <select className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-400">
                    <option>Altersbereich auswählen</option>
                    <option>2-3 Jahre (Kleinkind)</option>
                    <option>3-4 Jahre (Vorschule)</option>
                    <option>4-5 Jahre (Vorschulkind)</option>
                  </select>
                </div>
                <div>
                  <label className="block text-black font-medium mb-2">Nachricht</label>
                  <textarea
                    rows={4}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-400"
                    placeholder="Erzählen Sie uns von Ihrem Kind und stellen Sie Ihre Fragen..."
                  ></textarea>
                </div>
                <Button className="w-full bg-orange-400 hover:bg-orange-500 text-white py-3">Nachricht senden</Button>
              </form>
            </div>

            {/* Contact Details */}
            <div>
              <h2 className="text-2xl font-bold text-black mb-8">Kontaktieren Sie uns</h2>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-orange-400 rounded-full flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-black mb-1">Hauptstandort</h3>
                    <p className="text-black">
                      Jahnstr. 27
                      <br />
                      12347 Berlin
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-orange-400 rounded-full flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-black mb-1">Büro</h3>
                    <p className="text-black">
                      Gloedenpfad 6
                      <br />
                      13627 Berlin
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-orange-400 rounded-full flex items-center justify-center flex-shrink-0">
                    <Phone className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-black mb-1">Telefon</h3>
                    <p className="text-black">0172 5816772</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-orange-400 rounded-full flex items-center justify-center flex-shrink-0">
                    <Mail className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-black mb-1">E-Mail</h3>
                    <p className="text-black">kitawasserfee@gmail.com</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-orange-400 rounded-full flex items-center justify-center flex-shrink-0">
                    <Clock className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-black mb-1">Öffnungszeiten</h3>
                    <p className="text-black">
                      Montag - Freitag: 7:00 - 18:00 Uhr
                      <br />
                      Samstag: 8:00 - 12:00 Uhr
                      <br />
                      Sonntag: Geschlossen
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Google Maps Section */}
          <div className="mt-16 hidden">
            <h2 className="text-2xl font-bold text-black mb-8 text-center">Unsere Standorte</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-semibold text-black mb-4">Hauptstandort - Jahnstr. 27</h3>
                <GoogleMaps address="Jahnstr. 27, 12347 Berlin, Deutschland" title="Kita Wasserfee Hauptstandort" />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-black mb-4">Büro - Gloedenpfad 6</h3>
                <GoogleMaps address="Gloedenpfad 6, 13627 Berlin, Deutschland" title="Kita Wasserfee Büro" />
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
