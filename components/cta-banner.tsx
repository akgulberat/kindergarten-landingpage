import { Button } from "@/components/ui/button"

interface CTABannerProps {
  title: string
  description: string
  buttonText: string
  buttonHref?: string
  backgroundImage?: string
}

export function CTABanner({
  title,
  description,
  buttonText,
  buttonHref = "#",
  backgroundImage = "/colorful-kindergarten-background-with-educational-.png",
}: CTABannerProps) {
  return (
    <section className="relative py-20 overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${backgroundImage})` }}
      >
        <div className="absolute inset-0 bg-kindergarten-blue/80"></div>
      </div>

      <div className="relative container mx-auto px-4 text-center">
        <h2 className="text-3xl md:text-5xl font-bold text-white mb-6 text-balance">{title}</h2>
        <p className="text-xl text-white/90 mb-8 max-w-3xl mx-auto text-pretty">{description}</p>
        <Button
          size="lg"
          className="bg-kindergarten-green2 text-white px-8 py-3 text-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300"
          asChild
        >
          <a href={buttonHref}>{buttonText}</a>
        </Button>
      </div>
    </section>
  )
}
