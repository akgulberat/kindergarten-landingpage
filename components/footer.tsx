import Link from "next/link"

export function Footer() {
  return (
    <footer className="bg-kindergarten-baby-blue text-black">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo and Description */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-orange-400 rounded-full flex items-center justify-center">
                <span className="text-white font-bold text-sm">🧚</span>
              </div>
              <span className="font-bold text-xl">Kita Wasserfee</span>
            </div>
            <p className="text-black text-sm leading-relaxed">
              Wir fördern junge Köpfe durch spielerisches Lernen und kreative Entdeckungen. Hier wächst jedes Kind zu
              seinem hellsten Potenzial heran.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="font-semibold text-lg">Schnelllinks</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/about" className="text-black hover:text-gray-700 transition-colors">
                  Über uns
                </Link>
              </li>
              <li>
                <Link href="/programs" className="text-black hover:text-gray-700 transition-colors">
                  Unsere Programme
                </Link>
              </li>
              <li>
                <Link href="/teachers" className="text-black hover:text-gray-700 transition-colors">
                  Unsere Erzieher
                </Link>
              </li>
              <li>
                <Link href="/news" className="text-black hover:text-gray-700 transition-colors">
                  Neuigkeiten
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-black hover:text-gray-700 transition-colors">
                  Kontakt
                </Link>
              </li>
            </ul>
          </div>

          {/* Main Address */}
          <div className="space-y-4">
            <h3 className="font-semibold text-lg">Hauptstandort</h3>
            <div className="space-y-2 text-sm text-black">
              <p>📍 Jahnstr. 27, 12347 Berlin</p>
              <p>📞 0172 5816772</p>
              <p>✉️ kitawasserfee@gmail.com</p>
              <p>🕒 Mo-Fr: 7:00 - 18:00 Uhr</p>
            </div>
          </div>

          {/* Office Address */}
          <div className="space-y-4">
            <h3 className="font-semibold text-lg">Büro</h3>
            <div className="space-y-2 text-sm text-black">
              <p>📍 Gloedenpfad 6, 13627 Berlin</p>
              <p>📞 0172 5816772</p>
              <p>✉️ kitawasserfee@gmail.com</p>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-400 mt-8 pt-8 text-center">
          <p className="text-black text-sm">
            © 2025 Kita Wasserfee. Alle Rechte vorbehalten. | Lizenzierte Kindertagesstätte
          </p>
        </div>
      </div>
    </footer>
  )
}
