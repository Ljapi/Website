import { useEffect, useState } from 'react'

const PlasteringPainting = () => {
  const [images, setImages] = useState<string[]>([])
  const [selectedImage, setSelectedImage] = useState<string | null>(null)

  useEffect(() => {
    // Load images from /public/services/plastering-painting/
    const imageCount = 6
    const loadedImages: string[] = []
    
    for (let i = 1; i <= imageCount; i++) {
      // Using placeholder service - replace with actual images in production
      loadedImages.push(`https://picsum.photos/800/600?random=${i + 200}`)
    }
    
    setImages(loadedImages)
  }, [])

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-600 to-blue-800 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl sm:text-6xl font-bold mb-6">Plastering & Painting</h1>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto">
            Hochwertige Verputz- und Malerarbeiten für perfekte Oberflächen
          </p>
        </div>
      </section>

      {/* Description Section */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="prose prose-lg max-w-none">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Verputz- und Malerarbeiten</h2>
            <p className="text-lg text-gray-600 leading-relaxed mb-4">
              Mit jahrelanger Erfahrung bieten wir professionelle Verputz- und Malerarbeiten 
              für Innen- und Außenbereiche. Wir verwenden nur hochwertige Materialien und 
              moderne Techniken für langanhaltende Ergebnisse.
            </p>
            <p className="text-lg text-gray-600 leading-relaxed mb-4">
              Von der Grundierung bis zum finalen Anstrich – wir sorgen für eine perfekte 
              Oberfläche, die Ihren Ansprüchen gerecht wird.
            </p>
            <ul className="list-disc list-inside text-gray-600 space-y-2 mb-6">
              <li>Innen- und Außenverputzung</li>
              <li>Malerarbeiten aller Art</li>
              <li>Fassadenrenovierung</li>
              <li>Design- und Sonderfarben</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Unsere Projekte</h2>
          <div className="masonry">
            {images.map((image, index) => (
              <img
                key={index}
                src={image}
                alt={`Plastering and painting project ${index + 1}`}
                className="mb-4 break-inside-avoid block w-full rounded-lg shadow-md bg-transparent transition-transform duration-300 hover:scale-105 cursor-pointer"
                loading="lazy"
                onClick={() => setSelectedImage(image)}
              />
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
                alt="Selected plastering and painting project"
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

export default PlasteringPainting

