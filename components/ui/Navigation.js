'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { useRouter, usePathname, useParams } from 'next/navigation'
import { useTranslations } from 'next-intl'
import { MenuIcon, CloseIcon } from './Icons'
import StyledButton from './StyledButton'
import LanguageToggle from './LanguageToggle'

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const router = useRouter()
  const pathname = usePathname()
  const params = useParams()
  const t = useTranslations('nav')
  const locale = params.locale || 'en'

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navItems = [
    { name: t('howItWorks'), href: '#how-it-works' },
    { name: t('features'), href: '#features' },
    { name: t('pricing'), href: '#pricing' },
    { name: t('testimonials'), href: '#testimonials' },
    { name: t('faq'), href: '#faq' },
  ]

  const scrollToSection = (e, href) => {
    e.preventDefault()
    setIsOpen(false)

    // If not on homepage, redirect to homepage with hash
    if (pathname !== `/${locale}`) {
      router.push(`/${locale}${href}`)
      return
    }

    // If on homepage, scroll to section
    const target = document.querySelector(href)
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <>
      <nav className={`fixed top-4 left-1/2 transform -translate-x-1/2 z-50 transition-all duration-300  ${
        isScrolled
          ? 'bg-white/70 backdrop-blur-md shadow-xl w-[95%] rounded-4xl'
          : 'bg-white w-[95%] rounded-4xl shadow-xl'
      }`}>
        <div className="max-w-[1400px] mx-auto container-padding">
          <div className="flex items-center justify-between h-16 gap-8">
            {/* Logo - Section 1 */}
            <Link href={`/${locale}`} className="flex items-center space-x-2 flex-shrink-0">
              <div className="w-28 h-28">
                <Image
                  src="/images/1.png"
                  alt="Veritas Insulation Logo"
                  width={480}
                  height={480}
                  className="w-full h-full object-contain"
                />
              </div>
            </Link>

            {/* Desktop Navigation - Section 2 (5 main page links) */}
            <div className="hidden lg:flex items-center justify-center space-x-6 flex-1">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  onClick={(e) => scrollToSection(e, item.href)}
                  className="text-gray-700 hover:text-primary-500 transition-colors duration-200 font-medium whitespace-nowrap"
                >
                  {item.name}
                </a>
              ))}
            </div>

            {/* Desktop Page Links - Section 3 (3 other page links) */}
            <div className="hidden lg:flex items-center justify-center space-x-6 flex-1">
              <Link
                href={`/${locale}/about`}
                className="text-gray-700 hover:text-primary-500 transition-colors duration-200 font-medium whitespace-nowrap"
              >
                {t('about')}
              </Link>
              <Link
                href={`/${locale}/blog`}
                className="text-gray-700 hover:text-primary-500 transition-colors duration-200 font-medium whitespace-nowrap"
              >
                {t('blog')}
              </Link>
              <Link
                href={`/${locale}/contact`}
                className="text-gray-700 hover:text-primary-500 transition-colors duration-200 font-medium whitespace-nowrap"
              >
                {t('contact')}
              </Link>
            </div>

            {/* Language Toggle and Quote Button - Section 4 */}
            <div className="hidden lg:flex items-center justify-end space-x-3 flex-shrink-0">
              <LanguageToggle />
              <StyledButton
                variant="secondary"
                size="sm"
                className="glow-important whitespace-nowrap"
                onClick={(e) => scrollToSection(e, '#contact')}
              >
                {t('getFreeQuote')}
              </StyledButton>
            </div>

            {/* Mobile menu button */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="lg:hidden p-2 rounded-lg text-gray-700 hover:bg-gray-100 hover:text-gray-900 transition-all duration-300 transform hover:scale-110 active:scale-95"
            >
              {isOpen ? <CloseIcon /> : <MenuIcon />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile menu */}
      <div className={`fixed inset-0 z-40 transform transition-transform duration-300 ease-in-out ${
        isOpen ? 'translate-x-0' : 'translate-x-full'
      } lg:hidden`}>
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm" onClick={() => setIsOpen(false)} />
        <div className="fixed right-0 top-0 h-full w-80 max-w-[90vw] bg-white shadow-xl">
          <div className="flex flex-col h-full">
            {/* Header */}
            <div className="flex items-center justify-between p-6 border-b">
              <span className="font-semibold text-lg text-gray-900">{t('menu')}</span>
              <button
                onClick={() => setIsOpen(false)}
                className="p-2 rounded-lg text-gray-700 hover:bg-gray-100 hover:text-gray-900 transition-all duration-300 transform hover:scale-110 active:scale-95"
              >
                <CloseIcon />
              </button>
            </div>

            {/* Navigation Items */}
            <div className="flex-1 overflow-y-auto py-6">
              <div className="space-y-1 px-6">
                {navItems.map((item) => (
                  <a
                    key={item.name}
                    href={item.href}
                    onClick={(e) => scrollToSection(e, item.href)}
                    className="block px-4 py-3 text-gray-700 hover:bg-gray-50 hover:text-primary-500 rounded-lg transition-colors font-medium"
                  >
                    {item.name}
                  </a>
                ))}
                <hr className="my-4" />
                <Link
                  href={`/${locale}/about`}
                  className="block px-4 py-3 text-gray-700 hover:bg-gray-50 hover:text-primary-500 rounded-lg transition-colors font-medium"
                >
                  {t('about')}
                </Link>
                <Link
                  href={`/${locale}/blog`}
                  className="block px-4 py-3 text-gray-700 hover:bg-gray-50 hover:text-primary-500 rounded-lg transition-colors font-medium"
                >
                  {t('blog')}
                </Link>
                <Link
                  href={`/${locale}/contact`}
                  className="block px-4 py-3 text-gray-700 hover:bg-gray-50 hover:text-primary-500 rounded-lg transition-colors font-medium"
                >
                  {t('contact')}
                </Link>
              </div>
            </div>

            {/* Footer CTA with Language Toggle */}
            <div className="p-6 border-t space-y-4">
              <LanguageToggle className="w-full justify-center" />
              <StyledButton
                variant="accent"
                className="w-full glow-important"
                onClick={(e) => scrollToSection(e, '#contact')}
              >
                {t('getFreeQuote')}
              </StyledButton>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Navigation