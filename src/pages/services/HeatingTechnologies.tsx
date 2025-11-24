import { useState } from 'react'

const HeatingTechnologies = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null)

  const images = [
    '/services/heating-technologies/heating-1.jpg',
    '/services/heating-technologies/heating-2.jpg',
    '/services/heating-technologies/heating-3.jpg',
    '/services/heating-technologies/heating-4.jpg',
    '/services/heating-technologies/heating-5.jpg',
  ]

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-600 to-blue-800 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6">Heating Technologies</h1>
          <p className="text-base sm:text-lg md:text-xl text-blue-100 max-w-3xl mx-auto">
            Moderne Heizungstechnologien für optimale Energieeffizienz
          </p>
        </div>
      </section>

      {/* Description Section */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="prose prose-lg max-w-none">
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-6">Heizungstechnologien</h2>
            <p className="text-sm sm:text-base md:text-lg text-gray-600 leading-relaxed mb-4">
              Wir installieren und warten moderne Heizungssysteme, die Energie sparen und 
              für angenehme Raumtemperaturen sorgen. Unsere Lösungen reichen von 
              traditionellen Systemen bis hin zu innovativen Wärmepumpen und 
              Solartechnologien.
            </p>
            <p className="text-sm sm:text-base md:text-lg text-gray-600 leading-relaxed mb-4">
              Unser Team berät Sie gerne über die beste Heizungslösung für Ihre 
              individuellen Bedürfnisse und Ihr Budget.
            </p>
            <ul className="list-disc list-inside text-gray-600 space-y-2 mb-6">
              <li>Heizungsinstallation und -wartung</li>
              <li>Wärmepumpen</li>
              <li>Solarthermie</li>
              <li>Energieberatung</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-8 text-center">Unsere Projekte</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            {/* Video as first element */}
            <div className="relative bg-transparent w-full overflow-hidden">
              <video
                src="/services/heating-technologies/heating-video.mp4"
                autoPlay
                muted
                loop
                playsInline
                preload="metadata"
                poster="/services/heating-technologies/heating-1.jpg"
                className="w-full h-auto max-w-full object-contain rounded-lg shadow-md bg-transparent"
              >
                Your browser does not support the video tag.
              </video>
            </div>
            {/* Images */}
            {images.map((image, index) => (
              <div
                key={index}
                className="relative group cursor-pointer bg-transparent w-full overflow-hidden"
                onClick={() => setSelectedImage(image)}
              >
                <img
                  src={image}
                  alt={`Heating technology project ${index + 1}`}
                  className="w-full h-auto max-w-full object-contain rounded-lg shadow-md bg-transparent transition-transform duration-300 group-hover:scale-105"
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
                alt="Selected heating technology project"
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

export default HeatingTechnologies

