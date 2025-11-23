import { Link } from 'react-router-dom'

interface ServiceCardProps {
  icon: React.ReactNode
  title: string
  description: string
  link?: string
}

const ServiceCard = ({ icon, title, description, link }: ServiceCardProps) => {
  const cardContent = (
    <>
      <div className="w-16 h-16 bg-gradient-to-br from-blue-600 to-blue-800 rounded-xl flex items-center justify-center text-white mb-6 transform group-hover:scale-110 transition-transform">
        {icon}
      </div>
      <h3 className="text-xl font-bold text-gray-900 mb-3">{title}</h3>
      <p className="text-gray-600 leading-relaxed">{description}</p>
    </>
  )

  if (link) {
    return (
      <Link
        to={link}
        className="block bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100 group"
      >
        {cardContent}
      </Link>
    )
  }

  return (
    <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100">
      {cardContent}
    </div>
  )
}

export default ServiceCard

