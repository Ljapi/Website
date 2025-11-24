const About = () => {
  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-600 to-blue-800 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl sm:text-6xl font-bold mb-6">Über uns</h1>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto">
            Lernen Sie unser Team und unsere Werte kennen
          </p>
        </div>
      </section>

      {/* Who We Are Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">Wer wir sind</h2>
              <p className="text-lg text-gray-600 leading-relaxed mb-4">
                M&N Deine Handwerker ist ein führendes Handwerksunternehmen mit 
                einem starken Fokus auf Qualität, Innovation und Kundenzufriedenheit. 
                Seit unserer Gründung haben wir uns kontinuierlich weiterentwickelt und 
                sind heute ein vertrauenswürdiger Partner für private und gewerbliche 
                Kunden.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                Unser Team besteht aus erfahrenen Fachkräften, die sich durch 
                Professionalität, Engagement und Leidenschaft für ihre Arbeit auszeichnen. 
                Wir verstehen die Herausforderungen unserer Kunden und entwickeln 
                maßgeschneiderte Lösungen, die langfristigen Erfolg garantieren.
              </p>
            </div>
            <div className="relative">
              <img
                src="/gallery/about-1.jpg"
                alt="Home renovation and construction work"
                className="w-full h-auto object-contain rounded-xl shadow-md bg-transparent"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Our Mission Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1">
              <img
                src="/gallery/about-2.jpg"
                alt="Professional craftsmanship and handyman services"
                className="w-full h-auto object-contain rounded-xl shadow-md bg-transparent"
                loading="lazy"
              />
            </div>
            <div className="order-1 lg:order-2">
              <h2 className="text-4xl font-bold text-gray-900 mb-6">Unsere Mission</h2>
              <p className="text-lg text-gray-600 leading-relaxed mb-4">
                Unsere Mission ist es, Unternehmen dabei zu unterstützen, ihre 
                Geschäftsziele zu erreichen und nachhaltig zu wachsen. Wir glauben 
                an langfristige Partnerschaften, die auf Vertrauen, Transparenz und 
                gegenseitigem Respekt basieren.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed mb-4">
                Wir setzen auf innovative Lösungen, die nicht nur kurzfristige 
                Ergebnisse liefern, sondern auch langfristigen Wert schaffen. 
                Unser Ansatz ist kundenorientiert, proaktiv und zukunftsweisend.
              </p>
              <ul className="space-y-3 mt-6">
                <li className="flex items-start">
                  <svg className="w-6 h-6 text-blue-600 mr-3 flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-gray-700">Kundenzufriedenheit steht im Mittelpunkt</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-6 h-6 text-blue-600 mr-3 flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-gray-700">Innovation und kontinuierliche Verbesserung</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-6 h-6 text-blue-600 mr-3 flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-gray-700">Nachhaltigkeit und Verantwortung</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Warum uns wählen?</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Was uns von anderen unterscheidet
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-6">
              <div className="w-20 h-20 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-10 h-10 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Erfahrung</h3>
              <p className="text-gray-600">
                Langjährige Expertise in verschiedenen Branchen und bewährte Methoden
              </p>
            </div>
            <div className="text-center p-6">
              <div className="w-20 h-20 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-10 h-10 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Schnelligkeit</h3>
              <p className="text-gray-600">
                Schnelle Reaktionszeiten und effiziente Umsetzung Ihrer Projekte
              </p>
            </div>
            <div className="text-center p-6">
              <div className="w-20 h-20 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-10 h-10 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Zuverlässigkeit</h3>
              <p className="text-gray-600">
                Pünktliche Lieferung und hohe Qualitätsstandards bei jedem Projekt
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default About

