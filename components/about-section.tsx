import { Card } from "@/components/ui/card"

export function AboutSection() {
  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-balance">Warum Kita Wasserfee wählen?</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-pretty">
              Wir bieten eine fürsorgliche Umgebung, in der Kinder mit Vertrauen erkunden, lernen und wachsen können
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="p-6 text-center hover:shadow-lg transition-shadow">
              <div className="text-5xl mb-4">👩‍🏫</div>
              <h3 className="text-lg font-semibold mb-3">Qualifizierte Erzieher</h3>
              <p className="text-muted-foreground text-sm">
                Erfahrene Pädagogen mit Expertise in der frühkindlichen Entwicklung
              </p>
            </Card>

            <Card className="p-6 text-center hover:shadow-lg transition-shadow">
              <div className="text-5xl mb-4">🏫</div>
              <h3 className="text-lg font-semibold mb-3">Sichere Umgebung</h3>
              <p className="text-muted-foreground text-sm">
                Sichere, saubere und kinderfreundliche Einrichtungen mit modernen Sicherheitsmaßnahmen
              </p>
            </Card>

            <Card className="p-6 text-center hover:shadow-lg transition-shadow">
              <div className="text-5xl mb-4">🎯</div>
              <h3 className="text-lg font-semibold mb-3">Individuelles Lernen</h3>
              <p className="text-muted-foreground text-sm">
                Maßgeschneiderter Ansatz für den einzigartigen Lernstil jedes Kindes
              </p>
            </Card>

            <Card className="p-6 text-center hover:shadow-lg transition-shadow">
              <div className="text-5xl mb-4">🌱</div>
              <h3 className="text-lg font-semibold mb-3">Ganzheitliche Entwicklung</h3>
              <p className="text-muted-foreground text-sm">
                Fokus auf emotionales, soziales, körperliches und kognitives Wachstum
              </p>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}
