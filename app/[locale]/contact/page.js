"use client"
import { useTranslations } from 'next-intl'
import Navigation from '@/components/ui/Navigation'
import Footer from '@/components/sections/Footer'
import Contact from '@/components/sections/Contact'
import WhyChooseVeritas from '@/components/sections/WhyChooseVeritas'
import { Card, CardContent } from '@/components/ui/Card'
import { PhoneIcon, EmailIcon, LocationIcon } from '@/components/ui/Icons'
import StyledButton from '@/components/ui/StyledButton'

export default function ContactPage() {
  const t = useTranslations('contactPage')
  const tCommon = useTranslations('common')

  const serviceAreas = [
    'Ottawa', 'Kanata', 'Nepean', 'Orleans', 'Barrhaven', 'Stittsville',
    'Manotick', 'Gloucester', 'Cumberland', 'Rockland', 'Arnprior', 'Smiths Falls',
    'Carleton Place', 'Kemptville', 'Russell', 'Embrun'
  ]

  const contactMethods = [
    {
      icon: PhoneIcon,
      title: t('callOrText'),
      details: t('phone'),
      description: t('availableDays'),
      action: 'tel:6138079255',
      actionText: t('callNow')
    },
    {
      icon: EmailIcon,
      title: t('emailUs'),
      details: t('email'),
      description: t('responseTime'),
      action: 'mailto:pierre@veritasinsulation.com',
      actionText: t('sendEmail')
    },
    {
      icon: LocationIcon,
      title: t('serviceAreaTitle'),
      details: t('serviceAreaDetails'),
      description: t('serviceAreaDescription'),
      action: '#service-areas',
      actionText: t('viewAreas')
    }
  ]

  return (
    <>
      <Navigation />
      <main className="pt-[66px]">
        {/* Hero Section */}
        <section className="section-padding bg-gradient-to-br from-primary-50 to-white">
          <div className="max-w-[1400px] mx-auto container-padding">
            <div className="text-center mb-16">
              <h1 className="text-5xl md:text-6xl font-light text-gray-900 mb-6 tracking-tight">
                {t('title')}{' '}
                <span className="text-primary-500 font-medium">{t('titleHighlight')}</span>
              </h1>
              <p className="text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed mb-8">
                {t('subtitle')}
              </p>
              <StyledButton
                variant="accent"
                size="lg"
                onClick={() => {
                  document.getElementById('contact-form').scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                  })
                }}
              >
                {t('fillOutForm')}
              </StyledButton>
            </div>

            {/* Contact Methods */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
              {contactMethods.map((method, index) => (
                <Card key={method.title} variant="elevated" className="text-center">
                  <CardContent className="p-8">
                    <div className="w-16 h-16 bg-primary-100 rounded-2xl flex items-center justify-center mx-auto mb-6">
                      <method.icon className="w-8 h-8 text-primary-500" />
                    </div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">
                      {method.title}
                    </h3>
                    <p className="text-lg font-medium text-primary-500 mb-2">
                      {method.details}
                    </p>
                    <p className="text-gray-600 mb-6">
                      {method.description}
                    </p>
                    <a
                      href={method.action}
                      className="bg-primary-500 text-white px-6 py-3 rounded-lg font-medium hover:bg-primary-600 transition-colors inline-block"
                    >
                      {method.actionText}
                    </a>
                  </CardContent>
                </Card>
              ))}
            </div>

          </div>
        </section>

        {/* Why Choose Us - Bento Grid */}
        <WhyChooseVeritas />

        {/* Main Contact Section */}
        <div id="contact-form">
          <Contact />
        </div>

        {/* Service Areas */}
        <section id="service-areas" className="section-padding bg-gray-50">
          <div className="max-w-[1400px] mx-auto container-padding">
            <div className="text-center mb-12">
              <h2 className="text-4xl md:text-5xl font-light text-gray-900 mb-6 tracking-tight">
                {t('serviceAreasTitle')}
              </h2>
              <p className="text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
                {t('serviceAreasSubtitle')}
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              {/* Service Areas List */}
              <div>
                <Card variant="elevated">
                  <CardContent className="p-8">
                    <h3 className="text-2xl font-semibold text-gray-900 mb-6">
                      {t('areasWeServe')}
                    </h3>
                    <div className="grid grid-cols-2 gap-4">
                      {serviceAreas.map((area, index) => (
                        <div key={index} className="flex items-center space-x-2">
                          <div className="w-2 h-2 bg-primary-500 rounded-full"></div>
                          <span className="text-gray-700">{area}</span>
                        </div>
                      ))}
                    </div>
                    <div className="mt-6 p-4 bg-primary-50 rounded-lg">
                      <p className="text-primary-800 text-sm">
                        <strong>{t('dontSeeArea')}</strong> {t('dontSeeAreaDescription')}
                      </p>
                    </div>
                  </CardContent>
                </Card>
              </div>

              {/* Service Area Benefits */}
              <div className="space-y-6">
                <Card variant="default">
                  <CardContent className="p-6">
                    <h4 className="font-semibold text-gray-900 mb-2">
                      {t('freeEstimates')}
                    </h4>
                    <p className="text-gray-600 text-sm">
                      {t('freeEstimatesDescription')}
                    </p>
                  </CardContent>
                </Card>

                <Card variant="default">
                  <CardContent className="p-6">
                    <h4 className="font-semibold text-gray-900 mb-2">
                      {t('sameDayService')}
                    </h4>
                    <p className="text-gray-600 text-sm">
                      {t('sameDayServiceDescription')}
                    </p>
                  </CardContent>
                </Card>

                <Card variant="default">
                  <CardContent className="p-6">
                    <h4 className="font-semibold text-gray-900 mb-2">
                      {t('localExpertise')}
                    </h4>
                    <p className="text-gray-600 text-sm">
                      {t('localExpertiseDescription')}
                    </p>
                  </CardContent>
                </Card>

                <Card variant="default">
                  <CardContent className="p-6">
                    <h4 className="font-semibold text-gray-900 mb-2">
                      {t('ongoingSupport')}
                    </h4>
                    <p className="text-gray-600 text-sm">
                      {t('ongoingSupportDescription')}
                    </p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}