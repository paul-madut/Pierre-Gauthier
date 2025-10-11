'use client'

import { useParams, usePathname } from 'next/navigation'
import Link from 'next/link'

const LanguageToggle = ({ className = '' }) => {
  const params = useParams()
  const pathname = usePathname()
  const locale = params.locale || 'en'

  // Remove the locale from the pathname to get the path without locale
  const pathWithoutLocale = pathname.replace(`/${locale}`, '') || '/'

  // Generate links for both languages
  const otherLocale = locale === 'en' ? 'fr' : 'en'
  const otherLocalePath = `/${otherLocale}${pathWithoutLocale}`

  return (
    <div className={`flex items-center bg-gray-100 rounded-full p-1 ${className}`}>
      <Link
        href={`/en${pathWithoutLocale}`}
        className={`px-3 py-1.5 rounded-full text-sm font-medium transition-all duration-200 ${
          locale === 'en'
            ? 'bg-white text-gray-900 shadow-sm'
            : 'text-gray-600 hover:text-gray-900'
        }`}
      >
        EN
      </Link>
      <Link
        href={`/fr${pathWithoutLocale}`}
        className={`px-3 py-1.5 rounded-full text-sm font-medium transition-all duration-200 ${
          locale === 'fr'
            ? 'bg-white text-gray-900 shadow-sm'
            : 'text-gray-600 hover:text-gray-900'
        }`}
      >
        FR
      </Link>
    </div>
  )
}

export default LanguageToggle
