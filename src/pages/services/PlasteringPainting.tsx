import { useEffect, useState } from 'react'
import GalleryGrid from '../../components/GalleryGrid'

const PlasteringPainting = () => {
  const [images, setImages] = useState<string[]>([])

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
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6">Plastering & Painting</h1>
          <p className="text-base sm:text-lg md:text-xl text-blue-100 max-w-3xl mx-auto">
            Hochwertige Verputz- und Malerarbeiten für perfekte Oberflächen
          </p>
        </div>
      </section>

      {/* Description Section */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="prose prose-lg max-w-none">
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-6">Verputz- und Malerarbeiten</h2>
            <p className="text-sm sm:text-base md:text-lg text-gray-600 leading-relaxed mb-4">
              Mit jahrelanger Erfahrung bieten wir professionelle Verputz- und Malerarbeiten 
              für Innen- und Außenbereiche. Wir verwenden nur hochwertige Materialien und 
              moderne Techniken für langanhaltende Ergebnisse.
            </p>
            <p className="text-sm sm:text-base md:text-lg text-gray-600 leading-relaxed mb-4">
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
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-8 text-center">Unsere Projekte</h2>
          <GalleryGrid images={images} />
        </div>
      </section>
    </div>
  )
}

export default PlasteringPainting

