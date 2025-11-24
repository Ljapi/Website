const Contact = () => {

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-600 to-blue-800 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6">Kontakt</h1>
          <p className="text-base sm:text-lg md:text-xl text-blue-100 max-w-3xl mx-auto">
            Wir freuen uns auf Ihre Nachricht
          </p>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-6">Kontaktinformationen</h2>
          </div>
          <div className="bg-white rounded-2xl shadow-lg p-8 md:p-12">
            <div className="space-y-8">
              <div className="text-center">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">Adresse</h3>
                <p className="text-gray-600">
                  M&N Deine Handwerker<br />
                  Pariserstraße 4a<br />
                  55270 Klein-Winternheim<br />
                  Deutschland
                </p>
              </div>
              <div className="text-center">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">Telefon</h3>
                <div className="space-y-2">
                  <a href="tel:015770644323" className="block text-blue-600 hover:text-blue-700 text-lg">
                    0157 70644323
                  </a>
                  <a href="tel:01786943354" className="block text-blue-600 hover:text-blue-700 text-lg">
                    0178 6943354
                  </a>
                </div>
              </div>
              <div className="text-center">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">E-Mail</h3>
                <a href="mailto:info@deine-handwerker.gmbh" className="text-blue-600 hover:text-blue-700 text-lg">
                  info@deine-handwerker.gmbh
                </a>
              </div>
              <div className="text-center">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">Öffnungszeiten</h3>
                <p className="text-gray-600">
                  Montag - Freitag: 09:00 - 18:00<br />
                  Samstag & Sonntag: Geschlossen
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Google Maps Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
            <div className="p-4 sm:p-6 md:p-8">
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-6 text-center">Visit Our Location</h2>
              <div className="rounded-xl overflow-hidden shadow-md">
                <iframe
                  src="https://www.google.com/maps?q=Pariserstraße+4a,+55270+Klein-Winternheim,+Deutschland&output=embed"
                  width="100%"
                  height="450"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="w-full h-72 md:h-96 rounded-xl"
                  title="M&N Deine Handwerker Location - Pariserstraße 4a, 55270 Klein-Winternheim"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Contact

