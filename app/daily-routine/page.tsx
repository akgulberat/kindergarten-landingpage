import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Clock, Coffee, Palette, Music, Utensils, Sun, Moon } from "lucide-react"
import { ScrollReveal } from "@/components/scroll-reveal"

export default function DailyRoutinePage() {
    const schedule = [
        {
            time: "8:00 - 9:00",
            title: "Flexible Ankunft",
            description:
                "Die Kinder werden herzlich begrüßt und können in Ruhe ankommen. Freies Spielen ermöglicht soziale Kontakte und stärkt die Kreativität.",
            icon: Sun,
            color: "bg-kindergarten-pink",
        },
        {
            time: "9:15",
            title: "Frühstück",
            description:
                "Wir starten gemeinsam mit einem gesunden Frühstück in den Tag. Die Kinder lernen Tischmanieren und genießen das Miteinander.",
            icon: Coffee,
            color: "bg-blue-100",
        },
        {
            time: "9:45 - 10:00",
            title: "Morgenkreis",
            description:
                "Im Morgenkreis singen wir Lieder, sprechen über den Tag und teilen Erlebnisse. So entsteht Gemeinschaft und Vertrauen.",
            icon: Music,
            color: "bg-kindergarten-pink",
        },
        {
            time: "10:00 - 11:30",
            title: "Päd. Angebote / Freispiel",
            description:
                "Kreative Bastel- und Malangebote, Musik, Bewegung oder Rollenspiele fördern die ganzheitliche Entwicklung der Kinder.",
            icon: Palette,
            color: "bg-blue-100",
        },
        {
            time: "11:30 - 12:00",
            title: "Außenzeit / Garten",
            description:
                "Frische Luft und Bewegung sind wichtig! Im Garten oder auf dem Spielplatz können die Kinder toben, entdecken und Natur erleben.",
            icon: Sun,
            color: "bg-kindergarten-pink",
        },
        {
            time: "12:00 - 12:45",
            title: "Mittagessen",
            description:
                "Ein warmes, ausgewogenes Mittagessen wird gemeinsam eingenommen. Wir achten auf gesunde Ernährung und berücksichtigen Allergien.",
            icon: Utensils,
            color: "bg-blue-100",
        },
        {
            time: "12:45 - 13:30",
            title: "Mittagsruhe",
            description:
                "Nach dem Essen gönnen sich die Kinder eine Ruhepause. Einige schlafen, andere entspannen bei ruhiger Musik oder einer Geschichte.",
            icon: Moon,
            color: "bg-kindergarten-pink",
        },
        {
            time: "13:30 - 15:00",
            title: "Vesper / Freispiel",
            description:
                "Ein kleiner Nachmittagssnack gibt neue Energie. Danach bleibt Zeit für freies Spielen, Vorlesen oder kreative Beschäftigungen.",
            icon: Coffee,
            color: "bg-blue-100",
        },
        {
            time: "14:00 - 16:45",
            title: "Flexible Abholung",
            description:
                "Die Kinder werden individuell abgeholt. Beim Spielen, Malen oder Lesen klingt der Tag in entspannter Atmosphäre aus.",
            icon: Sun,
            color: "bg-kindergarten-pink",
        },
    ]

    return (
        <div className="min-h-screen bg-white">
            <Header />

            {/* Hero Section */}
            <section className="relative py-20 bg-gradient-to-br from-blue-50 to-orange-50">
                <div className="absolute inset-0 bg-[url('/kindergarten-children-engaged-in-various-learning.png')] bg-cover bg-center opacity-20"></div>
                <div className="relative max-w-4xl mx-auto px-4 text-center">
                    <ScrollReveal>
                        <h1 className="text-4xl md:text-5xl font-bold text-black mb-6">Unser Tagesablauf</h1>
                    </ScrollReveal>
                    <ScrollReveal delay={0.2}>
                        <p className="text-xl text-black mb-8 max-w-3xl mx-auto">
                            Ein strukturierter, aber flexibler Tagesablauf gibt den Kindern Sicherheit und Orientierung. Jeder Tag ist
                            gefüllt mit Lernen, Spielen und gemeinsamen Erlebnissen.
                        </p>
                    </ScrollReveal>
                </div>
            </section>

            {/* Schedule Section */}
            <section className="py-16 bg-white">
                <div className="max-w-4xl mx-auto px-4">
                    <div className="space-y-6">
                        {schedule.map((item, index) => {
                            const Icon = item.icon
                            return (
                                <ScrollReveal key={index} delay={index * 0.1}>
                                    <div className="flex gap-6 items-start">
                                        <div className="flex-shrink-0">
                                            <div className={`w-16 h-16 ${item.color} rounded-full flex items-center justify-center`}>
                                                <Icon className="w-8 h-8 text-kindergarten-pink2" />
                                            </div>
                                        </div>
                                        <div className="flex-1">
                                            <div className="flex items-baseline gap-4 mb-2">
                                                <span className="text-kindergarten-pink2 font-bold text-lg">{item.time}</span>
                                                <h3 className="text-2xl font-bold text-black">{item.title}</h3>
                                            </div>
                                            <p className="text-black leading-relaxed">{item.description}</p>
                                        </div>
                                    </div>
                                </ScrollReveal>
                            )
                        })}
                    </div>
                </div>
            </section>

            {/* Info Section */}
            <section className="py-16 bg-blue-50">
                <div className="max-w-4xl mx-auto px-4">
                    <ScrollReveal>
                        <h2 className="text-3xl font-bold text-black mb-8 text-center">Flexibilität & Individualität</h2>
                    </ScrollReveal>
                    <div className="grid md:grid-cols-2 gap-8">
                        <ScrollReveal delay={0.2}>
                            <div className="bg-white p-6 rounded-lg shadow-md">
                                <h3 className="text-xl font-semibold text-black mb-3">Anpassungsfähig</h3>
                                <p className="text-black">
                                    Unser Tagesablauf ist eine Orientierung, aber wir passen uns flexibel an die Bedürfnisse der Kinder
                                    an. Spontane Aktivitäten und besondere Ereignisse haben immer Platz.
                                </p>
                            </div>
                        </ScrollReveal>
                        <ScrollReveal delay={0.3}>
                            <div className="bg-white p-6 rounded-lg shadow-md h-full">
                                <h3 className="text-xl font-semibold text-black mb-3">Individuelle Betreuung</h3>
                                <p className="text-black">
                                    Jedes Kind ist einzigartig. Wir berücksichtigen individuelle Schlaf- und Essenszeiten, besonders bei
                                    unseren jüngsten Kindern.
                                </p>
                            </div>
                        </ScrollReveal>
                    </div>
                </div>
            </section>

            <Footer />
        </div>
    )
}
