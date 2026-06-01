import { Link } from 'react-router-dom'
import { Helmet } from 'react-helmet-async'

const services = [
  {
    title: 'Usługi ciesielskie',
    desc: 'więźby dachowe budynków mieszkalnych, kościołów, hal produkcyjnych, szalunki, kempingi, podłogi.',
    link: '/ciesielstwo',
  },
  {
    title: 'Usługi dekarskie',
    desc: 'pokrycia dachowe, dachówka, blacho dachówka, papy termozgrzewalne, montaż okien dachowych, orynnowanie.',
    link: '/dekarstwo',
  },
  {
    title: 'Zapewniamy',
    desc: 'Fachowość wykonania, Dostarczenie materiałów na plac budowy, Elastyczne godziny pracy, Kalkulację wstępną, Doradztwo techniczne, Fakturę VAT',
    link: '/kontakt',
  },
]

const benefits = [
  'Ponad 20 lat doświadczenia',
  'Profesjonalne doradztwo techniczne',
  'Bezpłatna wycena i kalkulacja',
  'Gwarancja na wykonane usługi',
  'Terminowość i rzetelność',
  'Kompleksowa obsługa od projektu do realizacji',
]

export default function Home() {
  return (
    <>
      <Helmet>
        <title>Gabbud - Ciesielstwo i Dekarstwo | Zielona Góra</title>
        <meta
          name="description"
          content="Gabbud to profesjonalne usługi ciesielskie i dekarskie w Zielonej Górze i okolicach. Więźby dachowe, pokrycia dachowe, remonty dachów. Zapraszamy do kontaktu!"
        />
        <meta
          name="keywords"
          content="ciesielstwo, dekarstwo, więźby dachowe, pokrycia dachowe, Zielona Góra, dachówka, blacho-dachówka, remont dachu"
        />
        <link rel="canonical" href="https://gabbud.pl/" />
        <meta property="og:title" content="Gabbud - Ciesielstwo i Dekarstwo | Zielona Góra" />
        <meta
          property="og:description"
          content="Profesjonalne usługi ciesielskie i dekarskie. Więźby dachowe, pokrycia dachowe, remonty."
        />
        <meta property="og:url" content="https://gabbud.pl/" />
      </Helmet>

      {/* Hero */}
      <section className="relative bg-gabbud-black text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 sm:py-32 lg:py-40">
          <div className="max-w-3xl">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight leading-tight">
              Gabbud
            </h1>
            <p className="mt-4 text-xl sm:text-2xl text-gabbud-light font-light">
              ciesielstwo &ndash; dekarstwo
            </p>
            <p className="mt-6 text-base sm:text-lg text-gabbud-light leading-relaxed max-w-2xl">
              Profesjonalne usługi ciesielskie i dekarskie w Zielonej Górze i okolicach.
              Łączymy wieloletnie doświadczenie z nowoczesnymi technologiami, aby
              zapewnić najwyższą jakość realizacji.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Link
                to="/kontakt"
                className="inline-block bg-white text-gabbud-black font-semibold px-6 py-3 rounded-lg hover:bg-gabbud-light transition-colors"
              >
                Skontaktuj się z nami
              </Link>
              <Link
                to="/realizacje"
                className="inline-block border border-gabbud-light text-gabbud-light font-semibold px-6 py-3 rounded-lg hover:bg-white hover:text-gabbud-black transition-colors"
              >
                Nasze realizacje
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Usługi */}
      <section className="bg-white py-16 sm:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl sm:text-4xl font-bold text-gabbud-black text-center mb-12">
            Nasze usługi
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {services.map((s) => (
              <Link
                key={s.title}
                to={s.link}
                className="group bg-gabbud-white border border-gray-200 rounded-xl p-6 hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
              >
                <h3 className="text-xl font-bold text-gabbud-black mb-3 group-hover:text-gabbud-gray transition-colors">
                  {s.title}
                </h3>
                <p className="text-gabbud-gray text-sm leading-relaxed">{s.desc}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Dlaczego my */}
      <section className="bg-gabbud-black text-white py-16 sm:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl sm:text-4xl font-bold text-center mb-12">
            Dlaczego warto nam zaufać?
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {benefits.map((b) => (
              <div
                key={b}
                className="flex items-center gap-3 bg-gabbud-dark rounded-lg px-5 py-4"
              >
                <svg className="w-5 h-5 text-green-400 shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path
                    fillRule="evenodd"
                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                    clipRule="evenodd"
                  />
                </svg>
                <span className="text-sm sm:text-base text-gabbud-white">{b}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-white py-16 sm:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-gabbud-black mb-4">
            Masz pytania? Skontaktuj się z nami!
          </h2>
          <p className="text-gabbud-gray max-w-2xl mx-auto mb-8">
            Zapraszamy do kontaktu &ndash; udzielimy bezpłatnej wyceny i doradztwa
            technicznego. Działamy na terenie Zielonej Góry i okolic.
          </p>
          <div className="flex flex-wrap justify-center gap-6 text-sm sm:text-base">
            <a
              href="tel:504032415"
              className="flex items-center gap-2 bg-gabbud-black text-white px-6 py-3 rounded-lg hover:bg-gabbud-gray transition-colors font-semibold"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              504 032 415
            </a>
            <a
              href="mailto:kazimierzgabala@o2.pl"
              className="flex items-center gap-2 border-2 border-gabbud-black text-gabbud-black px-6 py-3 rounded-lg hover:bg-gabbud-black hover:text-white transition-colors font-semibold"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              kazimierzgabala@o2.pl
            </a>
          </div>
        </div>
      </section>
    </>
  )
}
