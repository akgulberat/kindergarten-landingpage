"use client"

import { useState } from "react"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { MapPin, Phone, Mail, Clock } from "lucide-react"

export default function ContactPage() {
  const [formData, setFormData] = useState({
    parentName: "",
    childName: "",
    email: "",
    phone: "",
    age: "",
    message: "",
  })
  const [status, setStatus] = useState<"idle" | "success" | "error">("idle")
  const [loading, setLoading] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    setStatus("idle")

    const res = await fetch("/api/contact", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData),
    })

    if (res.ok) {
      setStatus("success")
      setFormData({ parentName: "", childName: "", email: "", phone: "", age: "", message: "" })
    } else {
      setStatus("error")
    }

    setLoading(false)
  }

  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-orange-50 to-blue-50"
        style={{ height: '400px' }}
      >
        <div className="absolute inset-0 bg-[url('https://i.ibb.co/fdC6g5vf/Ads-z-tasar-m.png')] bg-cover bg-center opacity-60"
          style={{ height: '400px' }}
        ></div>
        <div className="relative max-w-4xl mx-auto px-4 text-center">
          {/* <h1 className="text-4xl md:text-2xl font-bold text-black mb-6">Kontakt</h1> */}
          <p className="text-xl text-black mb-8 max-w-3xl mx-auto">
            {/* Wir freuen uns auf Ihre Nachricht! Kontaktieren Sie uns per E-Mail oder Telefon, um mehr über unsere
            Programme zu erfahren. */}
          </p>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-12 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div className="bg-blue-50 rounded-lg p-8">
              <h2 className="text-2xl font-bold text-black mb-6">Senden Sie uns eine Nachricht</h2>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-black font-medium mb-2">Name der Eltern *</label>
                    <input
                      name="parentName"
                      type="text"
                      value={formData.parentName}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-400"
                      placeholder="Ihr vollständiger Name"
                    />
                  </div>
                  <div>
                    <label className="block text-black font-medium mb-2">Name des Kindes *</label>
                    <input
                      name="childName"
                      type="text"
                      value={formData.childName}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-400"
                      placeholder="Name des Kindes"
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-black font-medium mb-2">E-Mail *</label>
                    <input
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-400"
                      placeholder="ihre@email.de"
                    />
                  </div>
                  <div>
                    <label className="block text-black font-medium mb-2">Telefon *</label>
                    <input
                      name="phone"
                      type="tel"
                      value={formData.phone}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-400"
                      placeholder="0172 5816772"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-black font-medium mb-2">Alter des Kindes *</label>
                  <select
                    name="age"
                    value={formData.age}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-400"
                  >
                    <option value="">Altersbereich auswählen</option>
                    <option>2-3 Jahre (Kleinkind)</option>
                    <option>3-4 Jahre (Vorschule)</option>
                    <option>4-5 Jahre (Vorschulkind)</option>
                  </select>
                </div>

                <div>
                  <label className="block text-black font-medium mb-2">Nachricht (optional)</label>
                  <textarea
                    name="message"
                    rows={4}
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-400"
                    placeholder="Erzählen Sie uns von Ihrem Kind und stellen Sie Ihre Fragen..."
                  ></textarea>
                </div>

                <Button
                  type="submit"
                  disabled={loading}
                  className="w-full bg-kindergarten-green2 text-white py-3 cursor-pointer"
                >
                  {loading ? "Wird gesendet..." : "Nachricht senden"}
                </Button>

                {/* ✅ Success / Error Messages */}
                {status === "success" && (
                  <p className="text-green-600 text-center mt-4 font-medium">
                    ✅ Ihre Nachricht wurde erfolgreich gesendet!
                  </p>
                )}
                {status === "error" && (
                  <p className="text-red-600 text-center mt-4 font-medium">
                    ❌ Fehler beim Senden. Bitte versuchen Sie es erneut.
                  </p>
                )}
              </form>
            </div>

            {/* Sağdaki iletişim bilgileri (senin mevcut kodun aynı kalabilir) */}
            <div className="flex justify-center">
              <div>
                <h2 className="text-2xl font-bold text-black mb-8">Kontaktieren Sie uns</h2>
                <div className="space-y-6 max-lg:flex max-lg:flex-wrap max-lg:justify-between">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-kindergarten-green2 rounded-full flex items-center justify-center flex-shrink-0">
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
                    <div className="w-12 h-12 bg-kindergarten-green2 rounded-full flex items-center justify-center flex-shrink-0">
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
                    <div className="w-12 h-12 bg-kindergarten-green2 rounded-full flex items-center justify-center flex-shrink-0">
                      <Phone className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-black mb-1">Telefon</h3>
                      <p className="text-black">0172 5816772</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-kindergarten-green2 rounded-full flex items-center justify-center flex-shrink-0">
                      <Mail className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-black mb-1">E-Mail</h3>
                      <p className="text-black">kitawasserfee@gmail.com</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-kindergarten-green2 rounded-full flex items-center justify-center flex-shrink-0">
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
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
