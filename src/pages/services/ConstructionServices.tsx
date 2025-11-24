import { useState } from 'react'

const ConstructionServices = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null)

  const images = [
    '/services/construction-services/construction-1.jpg',
    '/services/construction-services/construction-2.jpg',
    '/services/construction-services/construction-3.jpg',
    '/services/construction-services/construction-4.jpg',
    '/services/construction-services/construction-5.jpg',
    '/services/construction-services/construction-6.jpg',
  ]

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-600 to-blue-800 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6">Construction Services</h1>
          <p className="text-base sm:text-lg md:text-xl text-blue-100 max-w-3xl mx-auto">
            Umfassende Bauleistungen von der Planung bis zur Fertigstellung
          </p>
        </div>
      </section>

      {/* Description Section */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="prose prose-lg max-w-none">
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-6">Bauleistungen</h2>
            <p className="text-sm sm:text-base md:text-lg text-gray-600 leading-relaxed mb-4">
              Als erfahrener Bauunternehmer übernehmen wir alle Aspekte Ihres Bauprojekts. 
              Von der ersten Planung über die Ausführung bis hin zur finalen Übergabe 
              begleiten wir Sie durch jeden Schritt.
            </p>
            <p className="text-sm sm:text-base md:text-lg text-gray-600 leading-relaxed mb-4">
              Wir arbeiten mit hochwertigen Materialien und modernen Bautechniken, 
              um sicherzustellen, dass Ihr Projekt termingerecht und im Budget abgeschlossen wird.
            </p>
            <ul className="list-disc list-inside text-gray-600 space-y-2 mb-6">
              <li>Neubau und Renovierung</li>
              <li>Planung und Projektmanagement</li>
              <li>Rohbauarbeiten</li>
              <li>Innenausbau</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-8 text-center">Unsere Projekte</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            {images.map((image, index) => (
              <div
                key={index}
                className="relative group cursor-pointer bg-transparent w-full overflow-hidden"
                onClick={() => setSelectedImage(image)}
              >
                <img
                  src={image}
                  alt={`Construction project ${index + 1}`}
                  className="w-full h-auto max-w-full object-contain bg-transparent rounded-lg shadow-md hover:scale-[1.02] transition-all duration-300"
                  loading="lazy"
                />
              </div>
            ))}
          </div>
        </div>

        {/* Modal for full-size image view */}
        {selectedImage && (
          <div
            className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4 animate-fade-in"
            onClick={() => setSelectedImage(null)}
          >
            <div className="relative max-w-5xl max-h-full">
              <img
                src={selectedImage}
                alt="Selected construction project"
                className="max-w-full max-h-[90vh] object-contain rounded-lg"
              />
              <button
                onClick={() => setSelectedImage(null)}
                className="absolute top-4 right-4 text-white bg-black/50 hover:bg-black/70 rounded-full p-2 transition-colors"
                aria-label="Close"
              >
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>
          </div>
        )}
      </section>
    </div>
  )
}

export default ConstructionServices

