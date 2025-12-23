"use client"
import { useParams, useRouter } from 'next/navigation'
import { useTranslations } from 'next-intl'
import Image from 'next/image'
import Navigation from '@/components/ui/Navigation'
import Footer from '@/components/sections/Footer'
import { Card, CardContent } from '@/components/ui/Card'
import StyledButton from '@/components/ui/StyledButton'
import { CheckIcon, ShieldIcon, StarIcon } from '@/components/ui/Icons'
import WhyChooseVeritas from '@/components/sections/WhyChooseVeritas'

export default function About() {
  const params = useParams()
  const router = useRouter()
  const locale = params.locale || 'en'
  const t = useTranslations('about')
  const tCommon = useTranslations('common')

  // const milestones = [
  //   { year: '2013', event: 'Veritas Insulation founded in Ottawa' },
  //   { year: '2015', event: 'Reached 500 satisfied customers' },
  //   { year: '2017', event: 'Became Energy Star Partner' },
  //   { year: '2019', event: 'Expanded service area across Eastern Ontario' },
  //   { year: '2021', event: 'Achieved 2,000 homes insulated milestone' },
  //   { year: '2023', event: 'Launched eco-friendly insulation options' },
  //   { year: '2024', event: 'Celebrating 2,500+ happy families served' }
  // ]

  const values = [
    {
      title: t('integrityFirst'),
      description: t('integrityDescription'),
      icon: ShieldIcon
    },
    {
      title: t('qualityCraftsmanship'),
      description: t('qualityCraftsmanshipDescription'),
      icon: StarIcon
    },
    {
      title: t('customerFocus'),
      description: t('customerFocusDescription'),
      icon: CheckIcon
    },
    {
      title: t('fullyInsured'),
      description: t('fullyInsuredDescription'),
      icon: ShieldIcon
    }
  ]

  const certifications = [
    {
      name: 'Energy Star Partner',
      logo: '/logos/energy-star.png',
      alt: 'Dr.Energy certification'
    },

  ]

  return (
    <>
      <Navigation />
      <main className="pt-[66px] sm:pt-8 md:pt-0">
        {/* Hero Section */}
        <section className="section-padding bg-gradient-to-br from-primary-50 to-white">
          <div className="max-w-[1400px] mx-auto container-padding">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <div className="animate-fade-in-up">
                <h1 className="text-5xl md:text-6xl font-light text-gray-900 mb-6 tracking-tight">
                  {t('title')}{' '}
                  <span className="text-primary-500 font-medium">{t('titleHighlight')}</span>
                </h1>
                <p className="text-xl text-gray-700 mb-8 leading-relaxed">
                  {t('subtitle')}
                </p>
                <div className="grid grid-cols-2 gap-6 mb-8">
                  <div className="text-center">
                    <div className="text-3xl font-bold text-primary-500 mb-1">R-60+</div>
                    <div className="text-sm text-gray-600">{t('premiumMaterials')}</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-primary-500 mb-1">100%</div>
                    <div className="text-sm text-gray-600">{t('licensedInsured')}</div>
                  </div>
                </div>
                <StyledButton
                  variant="accent"
                  size="lg"
                  className="glow-important w-full md:w-auto md:px-12"
                  onClick={() => router.push(`/${locale}/contact`)}
                >
                  {t('getFreeQuote')}
                </StyledButton>
              </div>

              <div className="animate-fade-in-up animation-delay-400">
                <div className="relative">
                  <Image
                    src="/images/about/image.png"
                    alt={t('imageAlt')}
                    width={600}
                    height={500}
                    className="rounded-3xl shadow-2xl  w-full"
                    style={{ objectFit: 'cover' }}
                  />
                  <div className="absolute -bottom-6 -left-6 bg-white rounded-2xl p-6 shadow-xl">
                    <div className="text-2xl font-bold text-[#60a5fa] mb-1">{t('ottawa')}</div>
                    <div className="text-sm text-gray-700">{t('localTrusted')}</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Our Story */}
        <section className="section-padding bg-white">
          <div className="max-w-4xl mx-auto container-padding">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-light text-gray-900 mb-6 tracking-tight">
                {t('ourStory')}
              </h2>
            </div>

            <div className="prose prose-lg prose-gray max-w-none">
              <p className="text-xl text-gray-700 leading-relaxed mb-8">
                {t('storyParagraph1')}
              </p>

              <p className="text-lg text-gray-700 leading-relaxed mb-8">
                {t('storyParagraph2')}
              </p>

              <p className="text-lg text-gray-700 leading-relaxed mb-8">
                {t('storyParagraph3')}
              </p>

              <p className="text-lg text-gray-700 leading-relaxed">
                {t('storyParagraph4')}
              </p>
            </div>
          </div>
        </section>

        {/* Company Values */}
        <section className="section-padding bg-gray-50">
          <div className="max-w-[1400px] mx-auto container-padding">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-light text-gray-900 mb-6 tracking-tight">
                {t('ourValues')}
              </h2>
              <p className="text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
                {t('valuesSubtitle')}
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {values.map((value, index) => (
                <Card key={value.title} variant="elevated" className="h-full">
                  <CardContent className="p-8 text-center">
                    <div className="w-16 h-16 bg-primary-100 rounded-2xl flex items-center justify-center mx-auto mb-6">
                      <value.icon className="w-8 h-8 text-primary-500" />
                    </div>
                    <h3 className="text-2xl font-semibold text-gray-900 mb-4">
                      {value.title}
                    </h3>
                    <p className="text-gray-700 leading-relaxed">
                      {value.description}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Why Choose Veritas - Bento Grid Section */}
        <WhyChooseVeritas />

        {/* Certifications Section */}
        {/* <section className="section-padding bg-white">
          <div className="max-w-[1400px] mx-auto container-padding">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-light text-gray-900 mb-6 tracking-tight">
                Credentials & Certifications
              </h2>
              <p className="text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
                Licensed, insured, and certified by industry-leading organizations
              </p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 items-center">
              {certifications.map((cert, index) => (
                <div
                  key={cert.name}
                  className="flex justify-center animate-fade-in-up"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className="relative w-24 h-24 md:w-28 md:h-28 opacity-70 hover:opacity-100 transition-opacity duration-300">
                    <Image
                      src={cert.logo}
                      alt={cert.alt}
                      fill
                      style={{ objectFit: 'contain' }}
                      className="filter grayscale hover:grayscale-0 transition-all duration-300"
                    />
                  </div>
                </div>
              ))}
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
              <div className="text-center">
                <div className="text-3xl font-bold text-primary-500 mb-2">10+</div>
                <div className="text-gray-700">Years Experience</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary-500 mb-2">2,500+</div>
                <div className="text-gray-700">Homes Insulated</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary-500 mb-2">4.9★</div>
                <div className="text-gray-700">Customer Rating</div>
              </div>
            </div>
          </div>
        </section> */}

        {/* Team Section */}
        <section className="section-padding bg-white">
          <div className="max-w-[1400px] mx-auto container-padding">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-light text-gray-900 mb-6 tracking-tight">
                {t('meetOurTeam')}
              </h2>
              <p className="text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
                {t('teamSubtitle')}
              </p>
            </div>

            <div className="flex justify-center">
              <Card variant="elevated" className="max-w-md w-full">
                <CardContent className="p-8 text-center">
                  <div className="relative w-32 h-32 mx-auto mb-6 rounded-full overflow-hidden">
                    <Image
                      src="/team/pierre-gauthier.jpg"
                      alt="Pierre Gauthier"
                      fill
                      style={{ objectFit: 'cover' }}
                    />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    Pierre Gauthier
                  </h3>
                  <p className="text-primary-500 font-medium mb-4">
                    {t('founderRole')}
                  </p>
                  <p className="text-gray-700 leading-relaxed">
                    {t('founderBio')}
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Timeline */}
        {/* <section className="section-padding bg-gray-50">
          <div className="max-w-4xl mx-auto container-padding">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-light text-gray-900 mb-6 tracking-tight">
                Our Journey
              </h2>
              <p className="text-xl text-gray-700 leading-relaxed">
                A decade of growth, innovation, and serving Ottawa families
              </p>
            </div>

            <div className="relative">
              <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-primary-200"></div>

              <div className="space-y-8">
                {milestones.map((milestone, index) => (
                  <div key={milestone.year} className="relative flex items-center">
                    <div className="w-16 h-16 bg-primary-500 rounded-full flex items-center justify-center text-white font-bold text-sm z-10">
                      {milestone.year}
                    </div>
                    <div className="ml-8 bg-white rounded-lg p-6 shadow-md flex-1">
                      <p className="text-gray-900 font-medium">{milestone.event}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section> */}

        {/* CTA Section */}
        <section className="section-padding bg-primary-500">
          <div className="max-w-4xl mx-auto container-padding text-center">
            <h2 className="text-4xl md:text-5xl font-light text-white mb-6">
              {t('ctaTitle')}
            </h2>
            <p className="text-xl text-primary-100 mb-8 max-w-2xl mx-auto leading-relaxed">
              {t('ctaSubtitle')}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <StyledButton
                variant="secondary"
                size="lg"
                className="glow-important"
                onClick={() => router.push(`/${locale}/contact`)}
              >
                {t('scheduleFreeAssessment')}
              </StyledButton>
              <StyledButton
                variant="accent"
                size="lg"
                className="glow-important"
                onClick={() => window.location.href = 'tel:6138079255'}
              >
                {t('callPhone')}
              </StyledButton>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}