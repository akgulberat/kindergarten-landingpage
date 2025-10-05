"use client"

import { useState, useEffect } from "react"
import { usePathname } from "next/navigation" // App Router kullanıyorsan
import { Button } from "@/components/ui/button"
import { Menu, X } from "lucide-react"
import Link from "next/link"

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const pathname = usePathname() // route değişikliklerini takip etmek için

  const handleMobileMenuClicked = () => {
    setIsMenuOpen(!isMenuOpen)
    setIsScrolled(true)
  }

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  // ✅ Route değiştiğinde sayfayı en üste scroll et
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" })
    setIsMenuOpen(false) // mobile menu açıksa kapat
  }, [pathname])

  const menuItems = [
    { name: "Über uns", href: "/about" },
    { name: "Programme", href: "/programs" },
    { name: "Erzieher", href: "/teachers" },
    { name: "Neuigkeiten", href: "/news" },
    { name: "Kontakt", href: "/contact" },
  ]

  return (
    <header
      className={`${
        isScrolled ? "bg-white/95 backdrop-blur-sm border-b border-gray-200 shadow-sm" : "bg-transparent"
      } fixed top-0 left-0 right-0 z-50 transition-all duration-300`}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-orange-400 rounded-full flex items-center justify-center">
              <span className="text-black font-bold text-sm">🧚</span>
            </div>
            <span
              className={`font-bold text-xl transition-all duration-300 ${
                isScrolled ? "text-black" : "text-black"
              }`}
            >
              Kita Wasserfee
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {menuItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className={`font-medium transition-all duration-300 ${
                  isScrolled ? "text-black hover:text-gray-700" : "text-black hover:text-gray-200"
                }`}
              >
                {item.name}
              </Link>
            ))}
            <Button className="bg-orange-400 hover:bg-orange-500 text-white shadow-lg">Jetzt Anmelden</Button>
          </nav>

          {/* Mobile menu button */}
          <button
            className={`md:hidden p-2 transition-all duration-300 ${
              isScrolled ? "text-black" : "text-white"
            }`}
            onClick={handleMobileMenuClicked}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {isMenuOpen && (
          <div
            className={`md:hidden py-4 border-t transition-all duration-300 ${
              isScrolled
                ? "border-gray-200 bg-white/95 backdrop-blur-sm"
                : "border-white/20 bg-black/20 backdrop-blur-sm"
            }`}
          >
            <nav className="flex flex-col space-y-3">
              {menuItems.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className={`font-medium py-2 transition-all duration-300 ${
                    isScrolled ? "text-black hover:text-gray-700" : "text-black hover:text-gray-200"
                  }`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
              <Button className="bg-orange-400 hover:bg-orange-500 text-white mt-4">Jetzt Anmelden</Button>
            </nav>
          </div>
        )}
      </div>
    </header>
  )
}
