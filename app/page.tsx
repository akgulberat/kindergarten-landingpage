import { Header } from "@/components/header"
import { HeroSection } from "@/components/hero-section"
import { ImageGallery } from "@/components/image-gallery"
import { FeaturesSection } from "@/components/features-section"
import { AboutSection } from "@/components/about-section"
import { CTABanner } from "@/components/cta-banner"
import { TestimonialsSection } from "@/components/testimonials-section"
import { ContactSection } from "@/components/contact-section"
import { Footer } from "@/components/footer"
import { ScrollReveal } from "@/components/scroll-reveal"

export default function HomePage() {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <HeroSection />

        <ScrollReveal delay={100}>
          <ImageGallery />
        </ScrollReveal>

        <ScrollReveal delay={200} direction="fade">
          <FeaturesSection />
        </ScrollReveal>

        <ScrollReveal delay={100} direction="left">
          <AboutSection />
        </ScrollReveal>

        <ScrollReveal delay={150} direction="up">
          <CTABanner
            title="Bereit, Ihrem Kind den besten Start zu geben?"
            description="Werden Sie Teil unserer Kita-Familie und sehen Sie zu, wie Ihr Kind in einer fürsorglichen, pädagogischen Umgebung gedeiht, die für Wachstum und Glück konzipiert ist."
            buttonText="Jetzt Kontaktieren"
            buttonHref="/contact"
          />
        </ScrollReveal>

        <ScrollReveal delay={200} direction="right">
          <TestimonialsSection />
        </ScrollReveal>

        <ScrollReveal delay={100} direction="fade">
          <ContactSection />
        </ScrollReveal>
      </main>

      <ScrollReveal delay={50} direction="up">
        <Footer />
      </ScrollReveal>
    </div>
  )
}
