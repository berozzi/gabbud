import { Helmet } from 'react-helmet-async'
import { useState } from 'react'

export default function Contact() {
  const [submitted, setSubmitted] = useState(false)

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setSubmitted(true)
  }

  return (
    <>
      <Helmet>
        <title>Kontakt - Gabbud | Ciesielstwo i Dekarstwo Zielona Góra</title>
        <meta
          name="description"
          content="Skontaktuj się z Gabbud - profesjonalne usługi ciesielskie i dekarskie. Kazimierz Gabała, Zielona Góra. Tel: 504 032 415, email: kazimierzgabala@o2.pl"
        />
        <meta
          name="keywords"
          content="kontakt, Gabbud, ciesielstwo, dekarstwo, Zielona Góra, Kazimierz Gabała, wycena dachu"
        />
        <link rel="canonical" href="https://gabbud.pl/kontakt/" />
        <meta property="og:title" content="Kontakt - Gabbud | Ciesielstwo i Dekarstwo Zielona Góra" />
        <meta
          property="og:description"
          content="Skontaktuj się z Gabbud - usługi ciesielskie i dekarskie."
        />
        <meta property="og:url" content="https://gabbud.pl/kontakt/" />
      </Helmet>

      <section className="bg-gabbud-black text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
          <h1 className="text-4xl sm:text-5xl font-bold">Kontakt</h1>
          <p className="mt-3 text-gabbud-light text-lg">
            Zapraszamy do kontaktu &ndash; udzielamy bezpłatnych wycen i doradztwa
          </p>
        </div>
      </section>

      <section className="bg-white py-16 sm:py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-2xl sm:text-3xl font-bold text-gabbud-black mb-6">
                Dane kontaktowe
              </h2>

              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="bg-gabbud-black p-3 rounded-lg shrink-0">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gabbud-black">Adres</h3>
                    <p className="text-gabbud-gray">
                      GABBUD<br />
                      Kazimierz Gabała<br />
                      ul. Rzeźniczaka 39A/a<br />
                      65-119 Zielona Góra
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="bg-gabbud-black p-3 rounded-lg shrink-0">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gabbud-black">Telefon</h3>
                    <a
                      href="tel:504032415"
                      className="text-gabbud-gray hover:text-gabbud-black transition-colors"
                    >
                      504 032 415
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="bg-gabbud-black p-3 rounded-lg shrink-0">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gabbud-black">Email</h3>
                    <a
                      href="mailto:kazimierzgabala@o2.pl"
                      className="text-gabbud-gray hover:text-gabbud-black transition-colors"
                    >
                      kazimierzgabala@o2.pl
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <h2 className="text-2xl sm:text-3xl font-bold text-gabbud-black mb-6">
                Formularz kontaktowy
              </h2>

              {submitted ? (
                <div className="bg-green-50 border border-green-200 rounded-xl p-6 text-center">
                  <svg className="w-12 h-12 text-green-500 mx-auto mb-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <h3 className="text-lg font-semibold text-green-800 mb-1">
                    Wiadomość wysłana!
                  </h3>
                  <p className="text-green-600 text-sm">
                    Dziękujemy za kontakt. Odpowiemy najszybciej jak to możliwe.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gabbud-black mb-1">
                      Imię i nazwisko *
                    </label>
                    <input
                      id="name"
                      type="text"
                      required
                      className="w-full border border-gray-300 rounded-lg px-4 py-2.5 text-gabbud-black focus:outline-none focus:ring-2 focus:ring-gabbud-black focus:border-transparent transition-all"
                      placeholder="Twoje imię i nazwisko"
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gabbud-black mb-1">
                      Email *
                    </label>
                    <input
                      id="email"
                      type="email"
                      required
                      className="w-full border border-gray-300 rounded-lg px-4 py-2.5 text-gabbud-black focus:outline-none focus:ring-2 focus:ring-gabbud-black focus:border-transparent transition-all"
                      placeholder="Twój adres email"
                    />
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gabbud-black mb-1">
                      Wiadomość *
                    </label>
                    <textarea
                      id="message"
                      required
                      rows={5}
                      className="w-full border border-gray-300 rounded-lg px-4 py-2.5 text-gabbud-black focus:outline-none focus:ring-2 focus:ring-gabbud-black focus:border-transparent transition-all resize-y"
                      placeholder="Treść wiadomości..."
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-gabbud-black text-white font-semibold py-3 rounded-lg hover:bg-gabbud-gray transition-colors"
                  >
                    Wyślij wiadomość
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
