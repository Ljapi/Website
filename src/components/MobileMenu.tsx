import { Link } from 'react-router-dom'
import { useEffect } from 'react'

interface MobileMenuProps {
  isOpen: boolean
  onClose: () => void
  navLinks: Array<{ path: string; label: string }>
  isActive: (path: string) => boolean
}

const MobileMenu = ({ isOpen, onClose, navLinks, isActive }: MobileMenuProps) => {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'unset'
    }
    return () => {
      document.body.style.overflow = 'unset'
    }
  }, [isOpen])

  return (
    <>
      {/* Overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-40 md:hidden animate-fade-in"
          onClick={onClose}
        />
      )}

      {/* Menu */}
      <div
        className={`fixed top-20 left-0 right-0 bg-white shadow-xl z-40 md:hidden transform transition-transform duration-300 ease-in-out ${
          isOpen ? 'translate-y-0' : '-translate-y-full'
        }`}
      >
        <div className="px-4 py-6 space-y-2">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              onClick={onClose}
              className={`block px-4 py-3 rounded-lg text-base font-medium transition-all duration-200 ${
                isActive(link.path)
                  ? 'text-blue-600 bg-blue-50'
                  : 'text-gray-700 hover:text-blue-600 hover:bg-gray-50'
              }`}
            >
              {link.label}
            </Link>
          ))}
        </div>
      </div>
    </>
  )
}

export default MobileMenu

