import { Card } from "@/components/ui/card"

export function TestimonialsSection() {
  const testimonials = [
    {
      name: "Anna Müller",
      text: "Die Kita Wasserfee war fantastisch für unsere Tochter Emma. Sie hat so viel gelernt und wunderbare Freunde gefunden. Die Erzieher sind fürsorglich und professionell.",
      child: "Emma, 5 Jahre",
    },
    {
      name: "Thomas Schmidt",
      text: "Wir könnten nicht glücklicher mit unserer Wahl sein. Das Programm ist ausgewogen und unser Sohn liebt es, jeden Tag in die Kita zu gehen. Sehr empfehlenswert!",
      child: "Lucas, 4 Jahre",
    },
    {
      name: "Maria Weber",
      text: "Das Team der Kita Wasserfee kümmert sich wirklich um die Entwicklung jedes Kindes. Meine Tochter ist so viel selbstbewusster geworden und hat ihre sozialen Fähigkeiten entwickelt.",
      child: "Sofia, 5 Jahre",
    },
  ]

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-balance">Was Eltern sagen</h2>
            <p className="text-xl text-muted-foreground text-pretty">
              Hören Sie von Familien, die uns die frühkindliche Bildung ihrer Kinder anvertrauen
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="p-6 hover:shadow-lg transition-shadow">
                <div className="mb-4">
                  <div className="flex text-accent text-xl mb-3">⭐⭐⭐⭐⭐</div>
                  <p className="text-muted-foreground mb-4 italic">"{testimonial.text}"</p>
                </div>
                <div className="border-t pt-4">
                  <p className="font-semibold text-foreground">{testimonial.name}</p>
                  <p className="text-sm text-muted-foreground">Elternteil von {testimonial.child}</p>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
