import { Helmet } from 'react-helmet-async'

const services = [
  'Montaż dachówek ceramicznych, betonowych, ceramiczno-metalowych',
  'Pokrycia łupkiem naturalnym',
  'Blacho-dachówka',
  'Krycie papą termozgrzewalną oraz gontami bitumicznymi',
  'Montaż rynien miedzianych, cynkowych, ocynkowanych na miękki lub twardy lut oraz montaż rynien z PCV',
  'Produkcja obróbek blacharskich oraz montaż',
  'Ocieplenia poddaszy wełną mineralną',
  'Remonty i rozbudowa dachów',
  'Murowanie domów od fundamentów po dach',
]

export default function Roofing() {
  return (
    <>
      <Helmet>
        <title>Dekarstwo - Gabbud | Zielona Góra</title>
        <meta
          name="description"
          content="Kompleksowe usługi dekarskie - pokrycia dachowe, dachówka, blacho-dachówka, papa termozgrzewalna, montaż okien dachowych, orynnowanie. Gabbud Zielona Góra."
        />
        <meta
          name="keywords"
          content="dekarstwo, pokrycia dachowe, dachówka, blacho-dachówka, papa termozgrzewalna, orynnowanie, Zielona Góra, dekarz"
        />
        <link rel="canonical" href="https://gabbud.pl/dekarstwo/" />
        <meta property="og:title" content="Dekarstwo - Gabbud | Zielona Góra" />
        <meta
          property="og:description"
          content="Kompleksowe usługi dekarskie - pokrycia dachowe, dachówka, blacho-dachówka."
        />
        <meta property="og:url" content="https://gabbud.pl/dekarstwo/" />
      </Helmet>

      <section className="bg-gabbud-black text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
          <h1 className="text-4xl sm:text-5xl font-bold">Dekarstwo</h1>
          <p className="mt-3 text-gabbud-light text-lg">
            Kompleksowe usługi dekarskie z gwarancją jakości
          </p>
        </div>
      </section>

      <section className="bg-white py-16 sm:py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-gabbud-gray leading-relaxed space-y-6">
            <p className="text-lg">
              Oferujemy szeroki zakres profesjonalnych usług dekarskich.
              Niezależnie od tego, czy budujesz nowy dom, czy remontujesz
              istniejący dach &ndash; nasi specjaliści doradzą i wykonają
              prace na najwyższym poziomie.
            </p>

            <h2 className="text-2xl font-bold text-gabbud-black mt-10 mb-6">
              Wykonujemy:
            </h2>

            <ul className="space-y-3">
              {services.map((s) => (
                <li key={s} className="flex items-start gap-3">
                  <svg className="w-5 h-5 text-green-500 mt-0.5 shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <span>{s}</span>
                </li>
              ))}
            </ul>

            <div className="bg-gabbud-white border-l-4 border-gabbud-black p-6 mt-10 rounded-r-xl">
              <h3 className="font-bold text-gabbud-black mb-2">
                Zapewniamy bezpłatnie:
              </h3>
              <ul className="list-disc pl-6 space-y-1">
                <li>Kosztorysowanie</li>
                <li>Obmiary dachów</li>
                <li>Konsultacje w doborze materiału oraz technologii</li>
              </ul>
            </div>

            <p className="mt-8">
              Charakteryzuje Nas sumienność, wysoka jakość wykonywanych robót,
              szybka realizacja oraz terminowość inwestycji. Gwarantujemy
              kompleksową obsługę klienta, fachowe doradztwo w doborze materiałów
              oraz sporządzenie kalkulacji materiałów potrzebnych do
              zrealizowania inwestycji.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-gabbud-white py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl sm:text-3xl font-bold text-gabbud-black mb-6">
            Planujesz nowy dach lub remont?
          </h2>
          <p className="text-gabbud-gray mb-8">
            Skontaktuj się z nami, aby otrzymać bezpłatną wycenę i profesjonalne doradztwo.
          </p>
          <a
            href="tel:504032415"
            className="inline-block bg-gabbud-black text-white font-semibold px-8 py-3 rounded-lg hover:bg-gabbud-gray transition-colors"
          >
            Zadzwoń: 504 032 415
          </a>
        </div>
      </section>
    </>
  )
}
