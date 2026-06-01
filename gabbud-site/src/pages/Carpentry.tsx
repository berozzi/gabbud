import { Helmet } from 'react-helmet-async'

export default function Carpentry() {
  return (
    <>
      <Helmet>
        <title>Ciesielstwo - Gabbud | Zielona Góra</title>
        <meta
          name="description"
          content="Profesjonalne usługi ciesielskie - więźby dachowe, konstrukcje drewniane, szalunki. Gabbud Zielona Góra. Zapraszamy do kontaktu!"
        />
        <meta
          name="keywords"
          content="ciesielstwo, więźby dachowe, konstrukcje drewniane, szalunki, Zielona Góra, cieśla"
        />
        <link rel="canonical" href="https://gabbud.pl/ciesielstwo/" />
        <meta property="og:title" content="Ciesielstwo - Gabbud | Zielona Góra" />
        <meta
          property="og:description"
          content="Profesjonalne usługi ciesielskie - więźby dachowe, konstrukcje drewniane."
        />
        <meta property="og:url" content="https://gabbud.pl/ciesielstwo/" />
      </Helmet>

      <section className="bg-gabbud-black text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
          <h1 className="text-4xl sm:text-5xl font-bold">Ciesielstwo</h1>
          <p className="mt-3 text-gabbud-light text-lg">
            Profesjonalne konstrukcje drewniane z najwyższą precyzją
          </p>
        </div>
      </section>

      <section className="bg-white py-16 sm:py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="prose prose-lg max-w-none text-gabbud-gray leading-relaxed space-y-6">
            <p>
              Firma nasza zajmuje się wykonywaniem i montażem więźb dachowych.
              Ta praca wymaga precyzji, fachowości i wyobraźni, by cała
              konstrukcja stanowiła zwieńczenie bryły budynku. Kształt dachu i
              rodzaj pokrycia decydują o charakterze i walorach wizualnych
              budynku.
            </p>

            <p>
              Nasze więźby wykonujemy na podstawie projektów sporządzonych za
              pomocą programu dla cieśli i dekarzy renomowanej niemieckiej firmy,
              dlatego też każda konstrukcja wykonana przez nas jest doskonała i
              idealnie współgra z całym budynkiem.
            </p>

            <h2 className="text-2xl font-bold text-gabbud-black mt-10 mb-4">
              Czym jest ciesielstwo?
            </h2>

            <p>
              Ciesielstwo &ndash; Roboty ciesielskie polegają na wykonywaniu z
              drewna całych budowli lub ich elementów. Mogą to być budynki, a z
              pośród różnorodnych elementów drewnianych wykonywanych w budowlach
              z innych materiałów:
            </p>

            <ul className="list-disc pl-6 space-y-2">
              <li>Więźby dachowe</li>
              <li>Stropy</li>
              <li>Schody</li>
              <li>Podłogi i boazerie w budynkach</li>
              <li>Okładziny, pomosty i balustrady w zbiornikach i wieżach o konstrukcji stalowej</li>
              <li>Nakrywy, pomosty i balustrady w zasobnikach żelbetowych</li>
            </ul>

            <p>
              Ponadto do ciesielstwa zalicza się wykonywanie budowli
              pomocniczych, np. rusztowań, deskowań i elementów
              zagospodarowania placu budowy, które umożliwiają wykonanie prac
              budowlanych.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-gabbud-white py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl sm:text-3xl font-bold text-gabbud-black mb-6">
            Potrzebujesz profesjonalnej więźby dachowej?
          </h2>
          <p className="text-gabbud-gray mb-8">
            Skontaktuj się z nami, aby otrzymać bezpłatną wycenę i fachowe doradztwo.
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
