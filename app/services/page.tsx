import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Card } from "@/components/ui/card"
import {
    Heart,
    Users,
    BookOpen,
    Palette,
    Music,
    Star,
    Clock,
    Utensils,
    Shield,
    Sparkles,
    Baby,
    Globe,
    Projector,
    Gamepad
} from "lucide-react"

export default function ServicesPage() {
    const services = [
        {
            icon: Projector,
            title: "Projekte",
            shortDesc: "",
            fullDesc:
                "Projekte Die Wasserfee bietet regelmäßige Projekte an. Die Projekte bestehen aus wichtigen Themen des Alltags und der Gesellschaft. Diese werden mit unterschiedlichen methodischen Herangehensweisen bearbeitet und abschließend präsentiert. Projektarbeit ist ein wichtiges Instrument, um die Kompetenzen der Kinder zu fördern. So bietet die Arbeit an Sachthemen die Möglichkeit, verschiedene Sachkompetenzen zu entwickeln. Die Ich-Kompetenz der Kinder wird gestärkt, indem sie feststellen, dass ihre eigenen Ideen, ihre Arbeit an der Umsetzung und ihr Durchhaltevermögen letztlich zu einem Ergebnis und somit zum Erfolg geführt haben. Mit der methodischen Vielfalt, die in den Projektarbeiten in besonderer Weise realisierbar sind, können Kinder zahlreiche lernmethodische Kompetenzen entwickeln. Die Projektthemen ergeben sich aus der Lebensrealität der Kinder und deren Fragen. An diesen Themen arbeiten die Kinder aller Gruppen, die Interesse haben. So ist es bei Bedarf möglich, dass Kinder aus verschiedenen Gruppen gemeinsam in einer Arbeitsgruppe arbeiten. Die Arbeit an diesen Projekten erstreckt sich über einen Zeitraum von etwa ein bis zwei Wochen. Sie findet nicht nur in den eigenen Räumen, sondern auch an Lernorten außerhalb der Kita Wasserfee statt, wie zum Beispiel in Museen, in der Bibliothek oder auf einem Kinderbauernhof. Eltern werden über die Projektthemen informiert und sind aufgefordert, ihre Kinder beim Entwickeln von Projektideen und dem Erreichen ihrer Ziele zu unterstützen. So sind Eltern auch eingeladen, die abschließende Präsentation der Ergebnisse zu besuchen.",
            image: "/kindergarten-teacher-reading-story-to-engaged-chil.png",
            color: "bg-pink-50",
        },
        {
            icon: Users,
            title: "Struktur der Kindergruppen",
            shortDesc: "",
            fullDesc:
                "In unserer Kita arbeiten wir in einem Teiloffenem Konzept mit 25 Kinder aus fünf Jahrgängen. Es bestehen zwei Gruppen die Krippe und der Elementarbereich. Die Krippe hat einen geschützten Raum. Sie besteht von den Jüngsten, sowie bei Bedarf aus dem zweitjüngsten Jahrgang. Die Kinder bestimmen ihr Tempo für den Übergang zum Elementarbereich eigenständig. Der daran anliegende Raum fungiert als Funktionsraum für den Elementarbereich. In der Mittagssituation ist das Konzept der Räume von leise nach laut. Im Bewegungsraum wird eine Schlafsituation angeboten. Der Elementarbereich dient für leise Angebote, wie beispielsweise Basteln, Traumreisen oder zum Vorlesen. Der Raum der Krippe dient zum Freispiel, zudem besteht die Möglichkeit zur Nutzung des Gartens",
            image: "/kindergarten-children-learning-together-in-bright-class.png",
            color: "bg-blue-50",
        },
        {
            icon: Gamepad,
            title: "Spiele - Bewegung",
            shortDesc: "",
            fullDesc:
                "In unserer Kita wird Kindern viel Zeit zum Spielen eingeräumt. Im Freispiel haben die Kinder die Möglichkeit, sich auszuprobieren, Herausforderungen zu begegnen und neue Erfahrungen zu sammeln. Beim Spielen ergeben sich zudem zahlreiche Gesprächsanlässe und Möglichkeiten zum gegenseitigen Austausch. So wird ganz nebenbei die sprachliche und kommunikative Kompetenz der Kinder gefördert In den Räumen unserer Kita finden sich vielfältige Möglichkeiten zum Spielen. Das freie Spiel der Kinder ist immer und überall möglich. Darüber hinaus gibt es auch ein Angebot an klassischen und aktuellen Brettspielen und Kartenspielen, die den Kindern frei zugänglich zur Verfügung stehen und von ihnen genutzt werden können. Wir legen Wert darauf, dass Kinder zahlreiche und vielfältige Bewegungsangebote erhalten. Denn Bewegung ist unerlässlich für eine gesunde körperliche und geistige Entwicklung der Kinder. Deshalb haben Bewegungsspiele einen besonderen Stellenwert unter den Spielangeboten in der Kita Wasserfee. Es werden Bewegungsspiele angeboten, die in den Gruppenräumen, im Freien oder im Bewegungsraum gespielt werden können. Sprachkompetenz, Kommunikation und interkultureller Dialog werden in der Kita Wasserfee besonders gefördert. Ein Bestandteil dieses Förderkonzepts sind Rollen- und Theaterspiele. Rollenspiele bieten vielfältige Gelegenheiten zum Austausch und zum gegenseitigen Kennenlernen, fördert die sprachliche, kommunikative und interkulturelle Kompetenz der Kinder. Hierfür ist im Elementarbereich eine Verkleidungsecke mit verschiedenen Kleidungsstücken und einem Spiegel.",
            image: "/kindergarten-art-and-craft-activities-with-colorfu.png",
            color: "bg-purple-50",
        },
        {
            icon: Utensils,
            title: "Die Qualität der Essensversorgung",
            shortDesc: "",
            fullDesc:
                "Auswahl, Qualität und Herkunft der Lebensmittel Mindestens 10 Prozent des jährlichen Lebensmittelbudgets wird für Lebensmittel aus ökologischer Landwirtschaft ausgegeben. Ein höherer Prozentsatz wird angestrebt. Gemüse und Salat werden bevorzugt als saisonale Frischware aus der Region eingekauft. Für warme Gemüsegerichte wird Tiefkühl-Rohware (d.h. ohne Zusätze von Gewürzen, Rahm und Mehl) eingesetzt. Obst wird vor allem als Frischobst angeboten. Saisonale und regionale Angebote werden bevorzugt.  Getränke: Trinkwasser steht allen Kindern jederzeit zur Verfügung. In den Gruppenräumen gibt es einen festen Standort, an dem Getränke und Trinkgefäße sichtbar und für alle Kinder gut erreichbar aufgestellt sind. Angebot in den Gruppenräumen: frisches Leitungswasser, Mineralwasser, Früchtetee, Kräutertee Frühstück: frisches Leitungswasser, Mineralwasser, Früchtetee oder Kräutertee. Mittagessen: frisches Leitungswasser, Mineralwasser Früchtetee, Kräutertee, stark verdünnte Fruchtsäfte Nachmittags: frisches Leitungswasser, Mineralwasser Früchtetee, Kräutertee, stark verdünnte Fruchtsäfte.",
            image: "/kindergarten-lunch-time-with-healthy-meals-and-hap.png",
            color: "bg-green-50",
        },
    ]

    return (
        <div className="min-h-screen bg-white">
            <Header />

            {/* Hero Section */}
            <section className="relative py-20 bg-gradient-to-br from-blue-50 to-orange-50">
                <div className="absolute inset-0 bg-[url('/kindergarten-children-engaged-in-various-learning.png')] bg-cover bg-center opacity-10"></div>
                <div className="relative max-w-4xl mx-auto px-4 text-center">
                    <h1 className="text-4xl md:text-5xl font-bold text-black mb-6">Unsere Leistungen</h1>
                    <p className="text-xl text-black mb-8 max-w-3xl mx-auto">
                        Entdecken Sie unser umfassendes Angebot für die ganzheitliche Entwicklung Ihres Kindes. Von liebevoller
                        Betreuung bis hin zu kreativer Förderung - wir bieten alles, was Ihr Kind für einen optimalen Start ins
                        Leben braucht.
                    </p>
                </div>
            </section>

            {/* Services Grid */}
            <section className="py-16 bg-white">
                <div className="max-w-6xl mx-auto px-4">
                    <div className="grid gap-12">
                        {services.map((service, index) => (
                            <Card
                                key={index}
                                className={`overflow-hidden hover:shadow-xl transition-all duration-300 ${service.color}`}
                            >
                                <div className="md:flex">
                                    {/* Image - alternating left/right */}
                                    <div className={`md:w-2/5 ${index % 2 === 1 ? "md:order-2" : ""}`}>
                                        <div
                                            className="h-64 md:h-full bg-cover bg-center"
                                            style={{ backgroundImage: `url('${service.image}')` }}
                                        />
                                    </div>

                                    {/* Content */}
                                    <div className="md:w-3/5 p-8">
                                        <div className="flex items-center gap-4 mb-4">
                                            <div className="w-14 h-14 bg-white rounded-xl shadow-md flex items-center justify-center flex-shrink-0">
                                                <service.icon className="w-7 h-7 text-kindergarten-pink2" />
                                            </div>
                                            <div>
                                                <h2 className="text-2xl font-bold text-black">{service.title}</h2>
                                            </div>
                                        </div>

                                        <p className="text-black leading-relaxed">{service.fullDesc}</p>
                                    </div>
                                </div>
                            </Card>
                        ))}
                    </div>

                    {/* CTA Section */}
                    <div className="mt-16 bg-gradient-to-r from-kindergarten-blue/20 to-kindergarten-orange/20 rounded-2xl p-8 md:p-12 text-center">
                        <h3 className="text-3xl font-bold text-black mb-4">Haben Sie Fragen zu unseren Leistungen?</h3>
                        <p className="text-black text-lg mb-8 max-w-2xl mx-auto">
                            Wir beraten Sie gerne persönlich und zeigen Ihnen, wie wir Ihr Kind optimal fördern können. Kontaktieren
                            Sie uns für ein unverbindliches Gespräch.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <a
                                href="/contact"
                                className="px-8 py-4 bg-kindergarten-green2 text-white rounded-lg font-semibold transition-colors shadow-lg"
                            >
                                Jetzt Kontakt aufnehmen
                            </a>
                            <a
                                href="/about"
                                className="px-8 py-4 bg-white hover:bg-gray-50 text-black rounded-lg font-semibold transition-colors shadow-lg border-2 border-gray-200"
                            >
                                Mehr über uns erfahren
                            </a>
                        </div>
                    </div>
                </div>
            </section>

            <Footer />
        </div>
    )
}
