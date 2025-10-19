"use client"

import { useState } from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"

const galleryImages = [
  {
    src: "/happy-diverse-young-school-kids-scaled-1024x652.jpg",
    alt: "Aktivitäten auf dem Außenspielplatz",
  },
  {
    src: "/happy-children-playing-in-colorful-kindergarten-cl.png",
    alt: "Kinder spielen im Klassenzimmer",
  },
  {
    src: "/kindergarten-art-and-craft-activities-with-colorfu.png",
    alt: "Kunst- und Bastelzeit",
  },
]

export function ImageGallery() {
  const [currentIndex, setCurrentIndex] = useState(0)

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % galleryImages.length)
  }

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + galleryImages.length) % galleryImages.length)
  }

  return (
    <section className="py-16 bg-kindergarten-baby-blue/20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-black mb-4">Unsere fröhliche Kita</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Werfen Sie einen Blick auf unsere lebendige Lernumgebung, in der Kinder wachsen, spielen und entdecken
          </p>
        </div>

        <div className="relative max-w-4xl mx-auto">
          <div className="relative overflow-hidden rounded-2xl shadow-2xl">
            <div
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
              {galleryImages.map((image, index) => (
                <div key={index} className="w-full flex-shrink-0">
                  <img src={image.src || "/placeholder.svg"} alt={image.alt} className="w-full h-96 object-cover" />
                </div>
              ))}
            </div>

            <Button
              variant="outline"
              size="icon"
              className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/90 hover:bg-white"
              onClick={prevSlide}
            >
              <ChevronLeft className="h-4 w-4" />
            </Button>

            <Button
              variant="outline"
              size="icon"
              className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/90 hover:bg-white"
              onClick={nextSlide}
            >
              <ChevronRight className="h-4 w-4" />
            </Button>
          </div>

          <div className="flex justify-center mt-6 space-x-2">
            {galleryImages.map((_, index) => (
              <button
                key={index}
                className={`w-3 h-3 rounded-full transition-colors ${index === currentIndex ? "bg-orange-400" : "bg-gray-300"
                  }`}
                onClick={() => setCurrentIndex(index)}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
