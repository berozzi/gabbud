import { Link } from 'react-router-dom'

export default function Footer() {
  return (
    <footer className="bg-gabbud-black text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-lg font-bold mb-4">GABBUD</h3>
            <p className="text-gabbud-light text-sm leading-relaxed">
              Profesjonalne usługi ciesielskie i dekarskie. Łączymy tradycyjne
              rzemiosło z nowoczesnymi technologiami.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-4">Kontakt</h3>
            <address className="not-italic text-gabbud-light text-sm leading-relaxed">
              <p>Kazimierz Gabała</p>
              <p>tel. <a href="tel:504032415" className="hover:text-white transition-colors">504 032 415</a></p>
              <p>ul. Rzeźniczaka 39A/a</p>
              <p>65-119 Zielona Góra</p>
              <p>
                email:{' '}
                <a href="mailto:kazimierzgabala@o2.pl" className="hover:text-white transition-colors">
                  kazimierzgabala@o2.pl
                </a>
              </p>
            </address>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-4">Nawigacja</h3>
            <ul className="space-y-2 text-sm">
              {[
                { to: '/', label: 'Strona główna' },
                { to: '/ciesielstwo', label: 'Ciesielstwo' },
                { to: '/dekarstwo', label: 'Dekarstwo' },
                { to: '/realizacje', label: 'Realizacje' },
                { to: '/kontakt', label: 'Kontakt' },
              ].map((link) => (
                <li key={link.to}>
                  <Link
                    to={link.to}
                    className="text-gabbud-light hover:text-white transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="border-t border-gabbud-gray/30 mt-8 pt-6 text-center text-sm text-gabbud-light">
          <p>Gabbud &copy; {new Date().getFullYear()}. Wszystkie Prawa Zastrze&zdot;one.</p>
        </div>
      </div>
    </footer>
  )
}
