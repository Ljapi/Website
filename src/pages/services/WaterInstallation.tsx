import { useEffect, useState } from 'react'
import GalleryGrid from '../../components/GalleryGrid'

const WaterInstallation = () => {
  const [images, setImages] = useState<string[]>([])

  useEffect(() => {
    // Load images from /public/services/water-installation/
    const imageCount = 6
    const loadedImages: string[] = []
    
    for (let i = 1; i <= imageCount; i++) {
      // Using placeholder service - replace with actual images in production
      loadedImages.push(`https://picsum.photos/800/600?random=${i + 100}`)
    }
    
    setImages(loadedImages)
  }, [])

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-600 to-blue-800 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl sm:text-6xl font-bold mb-6">Water Installation</h1>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto">
            Professionelle Wasserinstallationen für Ihr Zuhause oder Unternehmen
          </p>
        </div>
      </section>

      {/* Description Section */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="prose prose-lg max-w-none">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Über unsere Wasserinstallationen</h2>
            <p className="text-lg text-gray-600 leading-relaxed mb-4">
              Wir bieten umfassende Wasserinstallationsdienstleistungen für private und gewerbliche 
              Kunden. Unser erfahrenes Team sorgt für eine professionelle Planung, Installation 
              und Wartung Ihrer Wassersysteme.
            </p>
            <p className="text-lg text-gray-600 leading-relaxed mb-4">
              Von der Installation neuer Wasserleitungen bis zur Reparatur und Modernisierung 
              bestehender Systeme – wir stehen Ihnen mit unserem Know-how zur Verfügung.
            </p>
            <ul className="list-disc list-inside text-gray-600 space-y-2 mb-6">
              <li>Installation von Wasserleitungen</li>
              <li>Badezimmer- und Kücheninstallationen</li>
              <li>Wartung und Reparaturen</li>
              <li>Notfallservice</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Unsere Projekte</h2>
          <GalleryGrid images={images} />
        </div>
      </section>
    </div>
  )
}

export default WaterInstallation

