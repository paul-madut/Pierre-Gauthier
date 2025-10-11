'use client'

import Link from 'next/link'
import { useTranslations } from 'next-intl'
import { PhoneIcon, EmailIcon, LocationIcon } from '../ui/Icons'

const Footer = () => {
  const t = useTranslations('footer')
  const tNav = useTranslations('nav')
  const tCommon = useTranslations('common')
  const currentYear = new Date().getFullYear()

  const quickLinks = [
    { name: tNav('howItWorks'), href: '#how-it-works' },
    { name: tNav('features'), href: '#features' },
    { name: tNav('pricing'), href: '#pricing' },
    { name: tNav('testimonials'), href: '#testimonials' },
    { name: tNav('faq'), href: '#faq' }
  ]

  const services = [
    t('services.atticInsulation'),
    t('services.basementInsulation'),
    t('services.airSealing'),
    t('services.ventilation'),
    t('services.energyAudits'),
    t('services.rebateAssistance')
  ]

  const serviceAreas = [
    'Ottawa', 'Kanata', 'Nepean', 'Orleans',
    'Barrhaven', 'Stittsville', 'Manotick', 'Gloucester'
  ]

  const scrollToSection = (href) => {
    const element = document.querySelector(href)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <footer className="bg-gray-900 text-white">
      {/* Main footer content */}
      <div className="max-w-[1400px] mx-auto container-padding py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Company Info */}
          <div className="lg:col-span-1">
            <div className="flex items-center space-x-2 mb-6">
              <div className="w-10 h-10 bg-primary-500 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold">V</span>
              </div>
              <span className="text-xl font-semibold">Veritas Insulation</span>
            </div>

            <p className="text-gray-300 mb-6 leading-relaxed">
              {t('companyDescription')}
            </p>

            {/* Contact info */}
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <PhoneIcon className="w-5 h-5 text-primary-400" />
                <a href="tel:6138079255" className="text-gray-300 hover:text-white transition-colors">
                  (613) 807-9255
                </a>
              </div>

              <div className="flex items-center space-x-3">
                <EmailIcon className="w-5 h-5 text-primary-400" />
                <a href="mailto:pierre@veritasinsulation.com" className="text-gray-300 hover:text-white transition-colors">
                  pierre@veritasinsulation.com
                </a>
              </div>

              <div className="flex items-center space-x-3">
                <LocationIcon className="w-5 h-5 text-primary-400" />
                <span className="text-gray-300">Ottawa, Ontario</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-6">{t('quickLinks')}</h3>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <button
                    onClick={() => scrollToSection(link.href)}
                    className="text-gray-300 hover:text-white hover:translate-x-1 transition-all duration-200 text-left"
                  >
                    {link.name}
                  </button>
                </li>
              ))}
              <li>
                <Link href="/about" className="text-gray-300 hover:text-white transition-colors">
                  {tNav('aboutUs')}
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-gray-300 hover:text-white transition-colors">
                  {tNav('contact')}
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold mb-6">{t('ourServices')}</h3>
            <ul className="space-y-3">
              {services.map((service) => (
                <li key={service}>
                  <span className="text-gray-300">{service}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Service Areas */}
          <div>
            <h3 className="text-lg font-semibold mb-6">{t('serviceAreas')}</h3>
            <ul className="space-y-2">
              {serviceAreas.map((area) => (
                <li key={area}>
                  <span className="text-gray-300">{area}</span>
                </li>
              ))}
            </ul>
            <p className="text-sm text-gray-400 mt-4">
              {t('radiusNote')}
            </p>
          </div>
        </div>

        {/* CTA Section */}
        <div className="border-t border-gray-700 mt-12 pt-12">
          <div className="bg-gradient-to-r from-primary-500 to-primary-600 rounded-2xl p-8 text-center">
            <h3 className="text-2xl md:text-3xl font-light mb-4">
              {t('ctaTitle')}
            </h3>
            <p className="text-primary-100 mb-6 max-w-2xl mx-auto">
              {t('ctaSubtitle')}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={() => scrollToSection('#contact')}
                className="text-white px-8 py-3 rounded-lg font-semibold bg-[#168d30] hover:bg-[#158529] hover:shadow-lg hover:shadow-green-600/25 transition-all duration-300 transform hover:scale-105 glow-important"
              >
                {t('getFreeQuote')}
              </button>
              <a
                href="tel:6138079255"
                className="border border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white/10 hover:border-white/80 hover:shadow-md transition-all duration-300 transform hover:scale-105"
              >
                {t('callPhone')}
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-gray-700">
        <div className="max-w-[1400px] mx-auto container-padding py-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-sm text-gray-400">
              {t('copyright', { year: currentYear })}
            </div>

            <div className="flex items-center space-x-6 text-sm">
              <Link href="/privacy" className="text-gray-400 hover:text-white transition-colors">
                {t('privacyPolicy')}
              </Link>
              <Link href="/terms" className="text-gray-400 hover:text-white transition-colors">
                {t('termsOfService')}
              </Link>
              <div className="flex items-center space-x-2">
                <span className="text-gray-400">{t('licensedInsured')}</span>
                <div className="w-2 h-2 bg-green-500 rounded-full"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer