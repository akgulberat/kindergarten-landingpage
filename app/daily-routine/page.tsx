import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Clock, Coffee, Palette, Music, Utensils, Sun, Moon } from "lucide-react"
import { ScrollReveal } from "@/components/scroll-reveal"

export default function DailyRoutinePage() {
    const schedule = [
        {
            time: "7:00 - 8:30",
            title: "Ankunft & Freispiel",
            description:
                "Die Kinder werden herzlich empfangen und können in Ruhe ankommen. Freies Spielen fördert soziale Interaktion und Kreativität.",
            icon: Sun,
            color: "bg-kindergarten-pink",
        },
        {
            time: "8:30 - 9:00",
            title: "Gemeinsames Frühstück",
            description:
                "Wir beginnen den Tag mit einem gesunden, ausgewogenen Frühstück. Die Kinder lernen Tischmanieren und genießen die Gemeinschaft.",
            icon: Coffee,
            color: "bg-blue-100",
        },
        {
            time: "9:00 - 9:30",
            title: "Morgenkreis",
            description:
                "Gemeinsam singen wir Lieder, besprechen den Tag und stärken das Gemeinschaftsgefühl. Jedes Kind wird gesehen und gehört.",
            icon: Music,
            color: "bg-kindergarten-pink",
        },
        {
            time: "9:30 - 11:00",
            title: "Pädagogische Angebote",
            description:
                "Kreative Aktivitäten, Basteln, Malen, Musik oder Bewegungsspiele. Wir fördern verschiedene Entwicklungsbereiche spielerisch.",
            icon: Palette,
            color: "bg-blue-100",
        },
        {
            time: "11:00 - 12:00",
            title: "Draußen spielen",
            description:
                "Frische Luft und Bewegung sind wichtig! Im Garten oder auf dem Spielplatz können die Kinder toben und die Natur entdecken.",
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
            time: "12:45 - 14:30",
            title: "Mittagsruhe",
            description:
                "Die jüngeren Kinder schlafen, während die älteren sich mit ruhigen Aktivitäten wie Vorlesen oder Puzzeln beschäftigen.",
            icon: Moon,
            color: "bg-kindergarten-pink",
        },
        {
            time: "14:30 - 15:00",
            title: "Snack-Zeit",
            description:
                "Ein gesunder Nachmittagssnack mit Obst, Gemüse oder Vollkornprodukten gibt neue Energie für den restlichen Tag.",
            icon: Coffee,
            color: "bg-blue-100",
        },
        {
            time: "15:00 - 17:00",
            title: "Freispiel & Projekte",
            description:
                "Die Kinder können frei spielen oder an längerfristigen Projekten arbeiten. Kreativität und Selbstständigkeit stehen im Vordergrund.",
            icon: Palette,
            color: "bg-kindergarten-pink",
        },
        {
            time: "17:00 - 18:00",
            title: "Abholzeit",
            description:
                "Die Kinder werden abgeholt. Wir tauschen uns kurz mit den Eltern über den Tag aus und verabschieden uns herzlich.",
            icon: Clock,
            color: "bg-blue-100",
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
