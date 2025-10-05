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
} from "lucide-react"

export default function ServicesPage() {
    const services = [
        {
            icon: Heart,
            title: "Liebevolle Betreuung",
            shortDesc: "Fürsorgliche Betreuung in sicherer Umgebung",
            fullDesc:
                "Unsere erfahrenen und qualifizierten Erzieher bieten eine warmherzige, fürsorgliche Betreuung in einer sicheren und unterstützenden Umgebung. Jedes Kind wird als Individuum wahrgenommen und erhält die Aufmerksamkeit und Zuwendung, die es für eine gesunde emotionale Entwicklung benötigt. Wir schaffen eine Atmosphäre, in der sich Kinder geborgen fühlen und Vertrauen aufbauen können.",
            image: "/kindergarten-teacher-reading-story-to-engaged-chil.png",
            color: "bg-pink-50",
        },
        {
            icon: Users,
            title: "Soziale Entwicklung",
            shortDesc: "Förderung sozialer Kompetenzen durch Gruppenaktivitäten",
            fullDesc:
                "In unserer Kita lernen Kinder wichtige soziale Fähigkeiten durch vielfältige Gruppenaktivitäten, gemeinsames Spiel und angeleitete Interaktionen mit Gleichaltrigen. Wir fördern Teamarbeit, Empathie, Konfliktlösung und Kommunikationsfähigkeiten. Durch altersgerechte Projekte und Spiele entwickeln die Kinder ein gesundes Sozialverhalten und lernen, Freundschaften zu pflegen.",
            image: "/kindergarten-children-learning-together-in-bright-class.png",
            color: "bg-blue-50",
        },
        {
            icon: BookOpen,
            title: "Frühkindliche Bildung",
            shortDesc: "Altersgerechter Lehrplan für optimale Entwicklung",
            fullDesc:
                "Unser pädagogisches Konzept basiert auf einem altersgerechten Lehrplan, der spielerisch Lese-, Schreib- und Rechenfähigkeiten vermittelt. Wir fördern kritisches Denken, Problemlösungsfähigkeiten und Neugierde. Durch strukturierte Lerneinheiten und freies Spiel bereiten wir die Kinder optimal auf die Schule vor, ohne den Spaß am Lernen zu verlieren.",
            image: "/kindergarten-reading-corner-with-books-and-comfort.png",
            color: "bg-green-50",
        },
        {
            icon: Palette,
            title: "Kreative Förderung",
            shortDesc: "Kunst und Kreativität für fantasievolle Entwicklung",
            fullDesc:
                "Kreativität ist ein wichtiger Bestandteil unseres Programms. Durch Malen, Basteln, Werken und andere künstlerische Aktivitäten können Kinder ihre Fantasie ausleben und sich auf einzigartige Weise ausdrücken. Wir stellen vielfältige Materialien bereit und ermutigen die Kinder, ihre eigenen Ideen zu entwickeln und umzusetzen. Dies stärkt nicht nur die Feinmotorik, sondern auch das Selbstbewusstsein.",
            image: "/kindergarten-art-and-craft-activities-with-colorfu.png",
            color: "bg-purple-50",
        },
        {
            icon: Music,
            title: "Musik & Bewegung",
            shortDesc: "Tägliche Aktivitäten für körperliche Entwicklung",
            fullDesc:
                "Musik und Bewegung sind feste Bestandteile unseres Tagesablaufs. Durch Singen, Tanzen, rhythmische Spiele und Bewegungsübungen fördern wir die motorische Entwicklung, Koordination und das Rhythmusgefühl der Kinder. Wir nutzen verschiedene Instrumente und Bewegungsformen, um die Freude an Musik und körperlicher Aktivität zu wecken und die gesunde Entwicklung zu unterstützen.",
            image: "/kindergarten-outdoor-playground-with-children-havi.png",
            color: "bg-yellow-50",
        },
        {
            icon: Star,
            title: "Individuelle Entwicklung",
            shortDesc: "Jedes Kind wird in seinem eigenen Tempo gefördert",
            fullDesc:
                "Wir erkennen und feiern die einzigartigen Talente und Fähigkeiten jedes Kindes. Unser pädagogisches Team beobachtet die individuelle Entwicklung und passt die Förderung entsprechend an. Kinder lernen in ihrem eigenen Tempo und werden dort abgeholt, wo sie stehen. Wir dokumentieren die Entwicklungsschritte und tauschen uns regelmäßig mit den Eltern aus.",
            image: "/kindergarten-children-engaged-in-various-learning.png",
            color: "bg-orange-50",
        },
        {
            icon: Utensils,
            title: "Gesunde Ernährung",
            shortDesc: "Frische, ausgewogene Mahlzeiten täglich",
            fullDesc:
                "Eine ausgewogene Ernährung ist uns sehr wichtig. Wir bieten täglich frisch zubereitete, gesunde Mahlzeiten mit regionalen und saisonalen Zutaten. Unser Speiseplan ist abwechslungsreich und berücksichtigt Allergien und individuelle Ernährungsbedürfnisse. Die Kinder werden spielerisch an gesunde Lebensmittel herangeführt und lernen die Bedeutung einer ausgewogenen Ernährung kennen.",
            image: "/kindergarten-lunch-time-with-healthy-meals-and-hap.png",
            color: "bg-green-50",
        },
        {
            icon: Shield,
            title: "Sicherheit & Geborgenheit",
            shortDesc: "Höchste Sicherheitsstandards für Ihr Kind",
            fullDesc:
                "Die Sicherheit Ihres Kindes hat oberste Priorität. Unsere Räumlichkeiten sind kindgerecht gestaltet und entsprechen allen Sicherheitsstandards. Wir haben klare Sicherheitskonzepte, geschultes Personal und moderne Sicherheitssysteme. Die Kinder werden durchgehend betreut und beaufsichtigt. Gleichzeitig schaffen wir eine geborgene Atmosphäre, in der sich die Kinder frei entfalten können.",
            image: "/kindergarten-teachers-working-with-children-in-br.png",
            color: "bg-blue-50",
        },
        {
            icon: Clock,
            title: "Flexible Betreuungszeiten",
            shortDesc: "Öffnungszeiten von 7:00 bis 18:00 Uhr",
            fullDesc:
                "Wir bieten flexible Betreuungszeiten, die sich an den Bedürfnissen berufstätiger Eltern orientieren. Unsere Kita ist von Montag bis Freitag von 7:00 bis 18:00 Uhr geöffnet. Sie können zwischen verschiedenen Betreuungsmodellen wählen - Halbtags-, Ganztags- oder verlängerte Betreuung. Wir passen uns Ihren individuellen Anforderungen an und bieten auch Früh- und Spätdienst an.",
            image: "/happy-children-playing-in-colorful-kindergarten-cl.png",
            color: "bg-yellow-50",
        },
        {
            icon: Globe,
            title: "Mehrsprachigkeit",
            shortDesc: "Spielerische Förderung von Sprachkompetenzen",
            fullDesc:
                "In unserer multikulturellen Kita fördern wir die sprachliche Entwicklung der Kinder. Neben Deutsch integrieren wir spielerisch weitere Sprachen in den Alltag. Durch Lieder, Geschichten und Spiele in verschiedenen Sprachen entwickeln die Kinder ein natürliches Sprachgefühl. Dies bereitet sie optimal auf eine globalisierte Welt vor und fördert interkulturelle Kompetenzen.",
            image: "/kindergarten-children-learning-together-in-bright-class.png",
            color: "bg-pink-50",
        },
        {
            icon: Baby,
            title: "Eingewöhnung",
            shortDesc: "Sanfte Eingewöhnung nach dem Berliner Modell",
            fullDesc:
                "Der Start in die Kita ist ein wichtiger Schritt für Kind und Eltern. Wir gestalten die Eingewöhnung nach dem bewährten Berliner Modell - individuell, behutsam und im Tempo des Kindes. Ein fester Bezugserzieher begleitet den Prozess und baut eine vertrauensvolle Beziehung auf. Die Eltern sind in der Anfangszeit dabei und können sich schrittweise zurückziehen, wenn das Kind bereit ist.",
            image: "/kindergarten-teacher-reading-story-to-engaged-chil.png",
            color: "bg-purple-50",
        },
        {
            icon: Sparkles,
            title: "Besondere Aktivitäten",
            shortDesc: "Ausflüge, Feste und besondere Projekte",
            fullDesc:
                "Unser Kita-Jahr ist gefüllt mit besonderen Aktivitäten und Highlights. Wir unternehmen regelmäßig Ausflüge in die Natur, besuchen kulturelle Einrichtungen und feiern gemeinsam Feste. Saisonale Projekte wie Herbstwerkstatt, Winterzauber oder Frühlingserwachen bereichern den Alltag. Diese besonderen Erlebnisse schaffen bleibende Erinnerungen und fördern die ganzheitliche Entwicklung der Kinder.",
            image: "/kindergarten-outdoor-playground-with-children-havi.png",
            color: "bg-orange-50",
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
                                                <p className="text-sm text-gray-600">{service.shortDesc}</p>
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
