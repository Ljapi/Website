const Privacy = () => {
  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-600 to-blue-800 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl sm:text-5xl font-bold">Datenschutzerklärung</h1>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="prose prose-lg max-w-none">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">1. Datenschutz auf einen Blick</h2>
            
            <h3 className="text-xl font-semibold text-gray-900 mb-3">Allgemeine Hinweise</h3>
            <p className="text-gray-700 mb-6">
              Die folgenden Hinweise geben einen einfachen Überblick darüber, was mit Ihren personenbezogenen 
              Daten passiert, wenn Sie diese Website besuchen. Personenbezogene Daten sind alle Daten, mit 
              denen Sie persönlich identifiziert werden können.
            </p>

            <h3 className="text-xl font-semibold text-gray-900 mb-3">Datenerfassung auf dieser Website</h3>
            <p className="text-gray-700 mb-6">
              <strong>Wer ist verantwortlich für die Datenerfassung auf dieser Website?</strong><br />
              Die Datenverarbeitung auf dieser Website erfolgt durch den Websitebetreiber. Dessen Kontaktdaten 
              können Sie dem Abschnitt „Hinweis zur Verantwortlichen Stelle" in dieser Datenschutzerklärung entnehmen.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mb-4 mt-8">2. Hosting</h2>
            <p className="text-gray-700 mb-6">
              Diese Website wird bei einem externen Dienstleister gehostet (Hoster). Die personenbezogenen Daten, 
              die auf dieser Website erfasst werden, werden auf den Servern des Hosters gespeichert.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mb-4 mt-8">3. Allgemeine Hinweise und Pflichtinformationen</h2>
            
            <h3 className="text-xl font-semibold text-gray-900 mb-3">Datenschutz</h3>
            <p className="text-gray-700 mb-6">
              Die Betreiber dieser Seiten nehmen den Schutz Ihrer persönlichen Daten sehr ernst. Wir behandeln 
              Ihre personenbezogenen Daten vertraulich und entsprechend den gesetzlichen Datenschutzbestimmungen 
              sowie dieser Datenschutzerklärung.
            </p>

            <h3 className="text-xl font-semibold text-gray-900 mb-3">Hinweis zur verantwortlichen Stelle</h3>
            <div className="text-gray-700 mb-6">
              <p>Die verantwortliche Stelle für die Datenverarbeitung auf dieser Website ist:</p>
              <p className="mt-2">
                <strong>M&N Deine Handwerker</strong><br />
                Pariserstraße 4a<br />
                55270 Klein-Winternheim<br />
                Deutschland
              </p>
              <p className="mt-4">
                Telefon: 0157 70644323 / 0178 6943354<br />
                E-Mail: info@deine-handwerker.gmbh
              </p>
            </div>

            <h3 className="text-xl font-semibold text-gray-900 mb-3">Speicherdauer</h3>
            <p className="text-gray-700 mb-6">
              Soweit innerhalb dieser Datenschutzerklärung keine speziellere Speicherdauer genannt wurde, 
              verbleiben Ihre personenbezogenen Daten bei uns, bis der Zweck für die Datenverarbeitung 
              entfällt. Wenn Sie ein berechtigtes Löschersuchen geltend machen oder eine Einwilligung zur 
              Datenverarbeitung widerrufen, werden Ihre Daten gelöscht, sofern wir keine anderen rechtlich 
              zulässigen Gründe für die Speicherung Ihrer personenbezogenen Daten haben.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mb-4 mt-8">4. Kontaktformular</h2>
            <p className="text-gray-700 mb-6">
              Wenn Sie uns per Kontaktformular Anfragen zukommen lassen, werden Ihre Angaben aus dem 
              Anfrageformular inklusive der von Ihnen dort angegebenen Kontaktdaten zwecks Bearbeitung 
              der Anfrage und für den Fall von Anschlussfragen bei uns gespeichert. Diese Daten geben 
              wir nicht ohne Ihre Einwilligung weiter.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mb-4 mt-8">5. Ihre Rechte</h2>
            <p className="text-gray-700 mb-4">
              Sie haben jederzeit das Recht:
            </p>
            <ul className="list-disc list-inside text-gray-700 space-y-2 mb-6">
              <li>Auskunft über Ihre bei uns gespeicherten personenbezogenen Daten zu erhalten</li>
              <li>Berichtigung unrichtiger Daten zu verlangen</li>
              <li>Löschung Ihrer bei uns gespeicherten Daten zu verlangen</li>
              <li>Einschränkung der Datenverarbeitung zu verlangen</li>
              <li>Widerspruch gegen die Verarbeitung Ihrer personenbezogenen Daten einzulegen</li>
              <li>Datenübertragbarkeit zu verlangen</li>
              <li>Beschwerde bei einer Aufsichtsbehörde einzulegen</li>
            </ul>

            <h2 className="text-2xl font-bold text-gray-900 mb-4 mt-8">6. SSL- bzw. TLS-Verschlüsselung</h2>
            <p className="text-gray-700 mb-6">
              Diese Seite nutzt aus Sicherheitsgründen und zum Schutz der Übertragung vertraulicher Inhalte, 
              wie zum Beispiel Bestellungen oder Anfragen, die Sie an uns als Seitenbetreiber senden, eine 
              SSL- bzw. TLS-Verschlüsselung. Eine verschlüsselte Verbindung erkennen Sie daran, dass die 
              Adresszeile des Browsers von „http://" auf „https://" wechselt und an dem Schloss-Symbol in 
              Ihrer Browserzeile.
            </p>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Privacy

