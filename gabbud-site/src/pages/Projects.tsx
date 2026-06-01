import { Helmet } from 'react-helmet-async'
import { Link } from 'react-router-dom'

const projects = [
  {
    id: 1,
    title: 'Więźba dachowa - dom jednorodzinny',
    category: 'Ciesielstwo',
    description:
      'Wykonanie i montaż więźby dachowej dla domu jednorodzinnego w Zielonej Górze. Konstrukcja z drewna wysokiej jakości, zaprojektowana w programie do projektowania konstrukcji ciesielskich.',
  },
  {
    id: 2,
    title: 'Pokrycie dachowe - dachówka ceramiczna',
    category: 'Dekarstwo',
    description:
      'Kompleksowe pokrycie dachu dachówką ceramiczną wraz z montażem orynnowania i obróbek blacharskich. Inwestycja w miejscowości pod Zieloną Górą.',
  },
  {
    id: 3,
    title: 'Więźba dachowa - hala produkcyjna',
    category: 'Ciesielstwo',
    description:
      'Wykonanie konstrukcji dachowej dla hali produkcyjnej. Skomplikowana geometria dachu wymagająca precyzyjnego wykonania i montażu.',
  },
  {
    id: 4,
    title: 'Remont dachu - papa termozgrzewalna',
    category: 'Dekarstwo',
    description:
      'Remont dachu płaskiego z użyciem papy termozgrzewalnej. Wymiana pokrycia, naprawa uszkodzeń i ocieplenie poddasza wełną mineralną.',
  },
  {
    id: 5,
    title: 'Więźba dachowa - kościół',
    category: 'Ciesielstwo',
    description:
      'Wykonanie skomplikowanej więźby dachowej dla obiektu sakralnego. Precyzyjne odwzorowanie historycznej konstrukcji z zachowaniem wszelkich norm bezpieczeństwa.',
  },
  {
    id: 6,
    title: 'Pokrycie blacho-dachówką',
    category: 'Dekarstwo',
    description:
      'Montaż blacho-dachówki wraz z pełnym systemem orynnowania i obróbek blacharskich. Szybka i profesjonalna realizacja.',
  },
]

export default function Projects() {
  return (
    <>
      <Helmet>
        <title>Realizacje - Gabbud | Nasze projekty ciesielskie i dekarskie</title>
        <meta
          name="description"
          content="Zobacz nasze realizacje - profesjonalne usługi ciesielskie i dekarskie. Więźby dachowe, pokrycia dachowe, remonty. Gabbud Zielona Góra."
        />
        <meta
          name="keywords"
          content="realizacje ciesielskie, realizacje dekarskie, więźby dachowe, pokrycia dachowe, zdjęcia dachów, Gabbud"
        />
        <link rel="canonical" href="https://gabbud.pl/realizacje/" />
        <meta property="og:title" content="Realizacje - Gabbud | Nasze projekty ciesielskie i dekarskie" />
        <meta
          property="og:description"
          content="Zobacz nasze realizacje - profesjonalne usługi ciesielskie i dekarskie."
        />
        <meta property="og:url" content="https://gabbud.pl/realizacje/" />
      </Helmet>

      <section className="bg-gabbud-black text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
          <h1 className="text-4xl sm:text-5xl font-bold">Nasze realizacje</h1>
          <p className="mt-3 text-gabbud-light text-lg">
            Zobacz projekty, które zrealizowaliśmy z dumą
          </p>
        </div>
      </section>

      <section className="bg-white py-16 sm:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-gabbud-gray text-center max-w-2xl mx-auto mb-12">
            Poniżej przedstawiamy wybrane realizacje z zakresu ciesielstwa i
            dekarstwa. Każdy projekt traktujemy indywidualnie, dbając o
            najwyższą jakość wykonania.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((p) => (
              <div
                key={p.id}
                className="group bg-gabbud-white border border-gray-200 rounded-xl overflow-hidden hover:shadow-xl transition-all duration-300"
              >
                <div className="bg-gabbud-black h-48 flex items-center justify-center">
                  <svg className="w-16 h-16 text-gabbud-light" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                </div>
                <div className="p-6">
                  <span className="inline-block text-xs font-semibold text-gabbud-light uppercase tracking-wider mb-2">
                    {p.category}
                  </span>
                  <h3 className="text-lg font-bold text-gabbud-black mb-2">
                    {p.title}
                  </h3>
                  <p className="text-sm text-gabbud-gray leading-relaxed">
                    {p.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link
              to="/kontakt"
              className="inline-block bg-gabbud-black text-white font-semibold px-8 py-3 rounded-lg hover:bg-gabbud-gray transition-colors"
            >
              Zrealizuj swój projekt z nami
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
