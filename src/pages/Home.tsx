import { Link } from 'react-router-dom'
import ServiceCard from '../components/ServiceCard'

const Home = () => {
  const services = [
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
        </svg>
      ),
      title: 'Professionelle Beratung',
      description: 'Umfassende Beratungsdienstleistungen für Ihr Unternehmen mit langjähriger Expertise.',
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      ),
      title: 'Schnelle Umsetzung',
      description: 'Effiziente und zielorientierte Projektumsetzung mit modernsten Methoden und Technologien.',
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
        </svg>
      ),
      title: 'Langfristige Partnerschaft',
      description: 'Nachhaltige Geschäftsbeziehungen aufbauen und gemeinsam erfolgreich wachsen.',
    },
  ]

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center justify-center text-white overflow-hidden py-32 md:py-48">
        {/* Background Image */}
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: 'url(/hero/hero-bg.jpg)',
          }}
        ></div>
        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black/60"></div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center animate-fade-in w-full">
          <div className="max-w-2xl mx-auto">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6 animate-slide-up">
              M&N Deine Handwerker
            </h1>
            <p className="text-lg sm:text-xl md:text-2xl text-white mb-8 mx-auto animate-slide-up drop-shadow-lg" style={{ animationDelay: '0.1s' }}>
              Professionelle Handwerksdienstleistungen für Ihr Zuhause
            </p>
            <p className="text-sm sm:text-base md:text-lg text-gray-100 mb-12 mx-auto animate-slide-up drop-shadow-md" style={{ animationDelay: '0.2s' }}>
              Zuverlässigkeit, Qualität und Präzision – Ihre Handwerker für alle Aufgaben
            </p>
            <Link
              to="/contact"
              className="inline-block bg-white text-blue-600 px-6 py-3 sm:px-8 sm:py-4 rounded-xl font-semibold text-base sm:text-lg hover:bg-blue-50 transform hover:scale-105 transition-all duration-300 shadow-xl animate-slide-up"
              style={{ animationDelay: '0.3s' }}
            >
              Kontakt aufnehmen
            </Link>
          </div>
        </div>
      </section>

      {/* Introduction Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Willkommen bei M&N Deine Handwerker
            </h2>
            <p className="text-sm sm:text-base md:text-lg text-gray-600 leading-relaxed mb-4">
              Wir sind ein modernes Dienstleistungsunternehmen, das sich auf Exzellenz und 
              Kundenzufriedenheit konzentriert. Mit langjähriger Erfahrung und einem 
              engagierten Team bieten wir maßgeschneiderte Lösungen für Ihre individuellen 
              Bedürfnisse.
            </p>
            <p className="text-sm sm:text-base md:text-lg text-gray-600 leading-relaxed">
              Unsere Mission ist es, Unternehmen dabei zu helfen, ihre Ziele zu erreichen 
              und nachhaltig zu wachsen. Wir kombinieren bewährte Methoden mit innovativen 
              Ansätzen, um optimale Ergebnisse zu erzielen.
            </p>
          </div>
        </div>
      </section>

      {/* Services Preview Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Unsere Leistungen
            </h2>
            <p className="text-base sm:text-lg md:text-xl text-gray-600 max-w-2xl mx-auto">
              Entdecken Sie unsere vielfältigen Dienstleistungen, die Ihr Unternehmen voranbringen
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div key={index} className="animate-slide-up" style={{ animationDelay: `${index * 0.1}s` }}>
                <ServiceCard {...service} />
              </div>
            ))}
          </div>
          <div className="text-center mt-12">
            <Link
              to="/services"
              className="inline-block text-blue-600 font-semibold hover:text-blue-700 transition-colors"
            >
              Alle Leistungen anzeigen →
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Home

