const Impressum = () => {
  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-600 to-blue-800 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl sm:text-5xl font-bold">Impressum</h1>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="prose prose-lg max-w-none">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Angaben gemäß § 5 TMG</h2>
            <div className="text-gray-700 space-y-4 mb-8">
              <p>
                <strong>M&N Deine Handwerker</strong><br />
                Pariserstraße 4a<br />
                55270 Klein-Winternheim<br />
                Deutschland
              </p>
            </div>

            <h2 className="text-2xl font-bold text-gray-900 mb-4">Kontakt</h2>
            <div className="text-gray-700 space-y-2 mb-8">
              <p>
                Telefon: 0157 70644323 / 0178 6943354<br />
                E-Mail: info@deine-handwerker.gmbh
              </p>
            </div>

            <h2 className="text-2xl font-bold text-gray-900 mb-4">Registereintrag</h2>
            <div className="text-gray-700 space-y-2 mb-8">
              <p>
                Eintragung im Handelsregister.<br />
                Registergericht: Amtsgericht Musterstadt<br />
                Registernummer: HRB XXXXX
              </p>
            </div>

            <h2 className="text-2xl font-bold text-gray-900 mb-4">Umsatzsteuer-ID</h2>
            <div className="text-gray-700 space-y-2 mb-8">
              <p>
                Umsatzsteuer-Identifikationsnummer gemäß § 27 a Umsatzsteuergesetz:<br />
                DE XXXXXXXXX
              </p>
            </div>

            <h2 className="text-2xl font-bold text-gray-900 mb-4">Verantwortlich für den Inhalt nach § 55 Abs. 2 RStV</h2>
            <div className="text-gray-700 space-y-2 mb-8">
              <p>
                [Name des Geschäftsführers]<br />
                M&N Deine Handwerker<br />
                Pariserstraße 4a<br />
                55270 Klein-Winternheim
              </p>
            </div>

            <h2 className="text-2xl font-bold text-gray-900 mb-4">Haftungsausschluss</h2>
            
            <h3 className="text-xl font-semibold text-gray-900 mb-3">Haftung für Inhalte</h3>
            <p className="text-gray-700 mb-6">
              Die Inhalte unserer Seiten wurden mit größter Sorgfalt erstellt. Für die Richtigkeit, 
              Vollständigkeit und Aktualität der Inhalte können wir jedoch keine Gewähr übernehmen. 
              Als Diensteanbieter sind wir gemäß § 7 Abs.1 TMG für eigene Inhalte auf diesen Seiten 
              nach den allgemeinen Gesetzen verantwortlich.
            </p>

            <h3 className="text-xl font-semibold text-gray-900 mb-3">Haftung für Links</h3>
            <p className="text-gray-700 mb-6">
              Unser Angebot enthält Links zu externen Webseiten Dritter, auf deren Inhalte wir keinen 
              Einfluss haben. Deshalb können wir für diese fremden Inhalte auch keine Gewähr übernehmen. 
              Für die Inhalte der verlinkten Seiten ist stets der jeweilige Anbieter oder Betreiber der 
              Seiten verantwortlich.
            </p>

            <h3 className="text-xl font-semibold text-gray-900 mb-3">Urheberrecht</h3>
            <p className="text-gray-700 mb-6">
              Die durch die Seitenbetreiber erstellten Inhalte und Werke auf diesen Seiten unterliegen 
              dem deutschen Urheberrecht. Die Vervielfältigung, Bearbeitung, Verbreitung und jede Art der 
              Verwertung außerhalb der Grenzen des Urheberrechtes bedürfen der schriftlichen Zustimmung 
              des jeweiligen Autors bzw. Erstellers.
            </p>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Impressum

