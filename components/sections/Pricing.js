'use client'

import { useTranslations } from 'next-intl'
import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger'
import { Card, CardContent } from '../ui/Card'
import StyledButton from '../ui/StyledButton'
import { CheckIcon, EyeIcon, ShieldIcon, DollarIcon, HomeIcon, RulerIcon, CalculatorIcon } from '../ui/Icons'

gsap.registerPlugin(ScrollTrigger)

const Pricing = () => {
  const t = useTranslations('pricing')
  const sectionRef = useRef(null)
  const cardsRef = useRef(null)
  const factorCardsRef = useRef(null)
  const ctaRef = useRef(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Header animation
      gsap.fromTo('.pricing-header',
        { y: 50, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          ease: "power2.out",
          scrollTrigger: {
            trigger: '.pricing-header',
            start: 'top 80%',
            toggleActions: 'play none none reverse'
          }
        }
      )

      // Transparent pricing cards animation
      gsap.fromTo('.transparent-pricing-card',
        { y: 80, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.6,
          ease: "power2.out",
          stagger: 0.2,
          scrollTrigger: {
            trigger: cardsRef.current,
            start: 'top 80%',
            toggleActions: 'play none none reverse'
          }
        }
      )

      // Pricing factors header animation
      gsap.fromTo('.pricing-factors-header',
        { y: 50, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          ease: "power2.out",
          scrollTrigger: {
            trigger: '.pricing-factors-header',
            start: 'top 80%',
            toggleActions: 'play none none reverse'
          }
        }
      )

      // Pricing factor cards animation
      gsap.fromTo('.pricing-factor-card',
        { y: 80, opacity: 0, scale: 0.9 },
        {
          y: 0,
          opacity: 1,
          scale: 1,
          duration: 0.6,
          ease: "back.out(1.7)",
          stagger: 0.15,
          scrollTrigger: {
            trigger: factorCardsRef.current,
            start: 'top 80%',
            toggleActions: 'play none none reverse'
          }
        }
      )

      // CTA section animation
      gsap.fromTo('.cta-section',
        { y: 60, opacity: 0, scale: 0.95 },
        {
          y: 0,
          opacity: 1,
          scale: 1,
          duration: 0.8,
          ease: "power2.out",
          scrollTrigger: {
            trigger: ctaRef.current,
            start: 'top 80%',
            toggleActions: 'play none none reverse'
          }
        }
      )

    }, sectionRef)

    return () => ctx.revert()
  }, [])
  const transparentPricing = [
    {
      icon: EyeIcon,
      title: t('transparentPricing1.title'),
      description: t('transparentPricing1.description'),
      benefits: [t('transparentPricing1.benefits.0'), t('transparentPricing1.benefits.1'), t('transparentPricing1.benefits.2')]
    },
    {
      icon: ShieldIcon,
      title: t('transparentPricing2.title'),
      description: t('transparentPricing2.description'),
      benefits: [t('transparentPricing2.benefits.0'), t('transparentPricing2.benefits.1'), t('transparentPricing2.benefits.2')]
    },
    {
      icon: DollarIcon,
      title: t('transparentPricing3.title'),
      description: t('transparentPricing3.description'),
      benefits: [t('transparentPricing3.benefits.0'), t('transparentPricing3.benefits.1'), t('transparentPricing3.benefits.2')]
    }
  ]

  const scrollToContact = () => {
    const contact = document.querySelector('#contact')
    if (contact) {
      contact.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <section id="pricing" className="section-padding bg-gray-50" ref={sectionRef}>
      <div className="max-w-[1400px] mx-auto container-padding">
        <div className="text-center mb-16 pricing-header">
          <h2 className="text-4xl md:text-5xl font-light text-gray-900 mb-6 tracking-tight">
            {t('title')}
          </h2>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
            {t('subtitle')}
          </p>
        </div>

        {/* Transparent Pricing Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16" ref={cardsRef}>
          {transparentPricing.map((item) => (
            <div
              key={item.title}
              className="transparent-pricing-card"
            >
              <Card variant="elevated" className="h-full group">
                <CardContent className="p-8">
                  {/* Icon */}
                  <div className="flex items-center justify-center w-16 h-16 bg-primary-100 rounded-2xl mb-6 group-hover:bg-primary-200 transition-colors">
                    <item.icon className="w-8 h-8 text-primary-500" />
                  </div>

                  {/* Content */}
                  <h3 className="text-2xl font-semibold text-gray-900 mb-4">
                    {item.title}
                  </h3>

                  <p className="text-gray-700 mb-6 leading-relaxed">
                    {item.description}
                  </p>

                  {/* Benefits */}
                  <div className="space-y-3">
                    {item.benefits.map((benefit, benefitIndex) => (
                      <div key={benefitIndex} className="flex items-center space-x-3">
                        <div className="w-2 h-2 bg-green-500 rounded-full flex-shrink-0"></div>
                        <span className="text-gray-700 font-medium">{benefit}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          ))}
        </div>


        {/* Pricing Factors Section */}
        <div className="text-center mb-16 pricing-factors-header">
          <h3 className="text-3xl md:text-4xl font-light text-gray-900 mb-6 tracking-tight">
            {t('factorsTitle')}
          </h3>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
            {t('factorsSubtitle')}
          </p>
        </div>

        {/* Pricing Factor Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16" ref={factorCardsRef}>
          <Card variant="elevated" className="h-full group pricing-factor-card">
            <CardContent className="p-8 text-center">
              <div className="flex items-center justify-center w-16 h-16 bg-blue-100 rounded-2xl mb-6 mx-auto group-hover:bg-blue-200 transition-colors">
                <HomeIcon className="w-8 h-8 text-blue-500" />
              </div>
              <h4 className="text-2xl font-semibold text-gray-900 mb-4">
                {t('factor1.title')}
              </h4>
              <p className="text-gray-700 leading-relaxed mb-6">
                {t('factor1.description')}
              </p>
              <div className="space-y-3">
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-blue-500 rounded-full flex-shrink-0"></div>
                  <span className="text-gray-700 font-medium">{t('factor1.details.0')}</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-blue-500 rounded-full flex-shrink-0"></div>
                  <span className="text-gray-700 font-medium">{t('factor1.details.1')}</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-blue-500 rounded-full flex-shrink-0"></div>
                  <span className="text-gray-700 font-medium">{t('factor1.details.2')}</span>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card variant="elevated" className="h-full group pricing-factor-card">
            <CardContent className="p-8 text-center">
              <div className="flex items-center justify-center w-16 h-16 bg-purple-100 rounded-2xl mb-6 mx-auto group-hover:bg-purple-200 transition-colors">
                <RulerIcon className="w-8 h-8 text-purple-500" />
              </div>
              <h4 className="text-2xl font-semibold text-gray-900 mb-4">
                {t('factor2.title')}
              </h4>
              <p className="text-gray-700 leading-relaxed mb-6">
                {t('factor2.description')}
              </p>
              <div className="space-y-3">
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-purple-500 rounded-full flex-shrink-0"></div>
                  <span className="text-gray-700 font-medium">{t('factor2.details.0')}</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-purple-500 rounded-full flex-shrink-0"></div>
                  <span className="text-gray-700 font-medium">{t('factor2.details.1')}</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-purple-500 rounded-full flex-shrink-0"></div>
                  <span className="text-gray-700 font-medium">{t('factor2.details.2')}</span>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card variant="elevated" className="h-full group pricing-factor-card">
            <CardContent className="p-8 text-center">
              <div className="flex items-center justify-center w-16 h-16 bg-orange-100 rounded-2xl mb-6 mx-auto group-hover:bg-orange-200 transition-colors">
                <CalculatorIcon className="w-8 h-8 text-orange-500" />
              </div>
              <h4 className="text-2xl font-semibold text-gray-900 mb-4">
                {t('factor3.title')}
              </h4>
              <p className="text-gray-700 leading-relaxed mb-6">
                {t('factor3.description')}
              </p>
              <div className="space-y-3">
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-orange-500 rounded-full flex-shrink-0"></div>
                  <span className="text-gray-700 font-medium">{t('factor3.details.0')}</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-orange-500 rounded-full flex-shrink-0"></div>
                  <span className="text-gray-700 font-medium">{t('factor3.details.1')}</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-orange-500 rounded-full flex-shrink-0"></div>
                  <span className="text-gray-700 font-medium">{t('factor3.details.2')}</span>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Call to Action */}
        <div className="text-center" ref={ctaRef}>
          <div className="bg-primary-500 rounded-3xl p-8 md:p-12 text-black cta-section">
            <h3 className="text-3xl md:text-4xl font-light mb-4">
              {t('ctaTitle')}
            </h3>
            <p className="text-xl text-primary-100 mb-8 max-w-2xl mx-auto">
              {t('ctaSubtitle')}
            </p>
            <StyledButton
              variant="secondary"
              size="xl"
              className="glow-important  text-[#168530] border-white hover:bg-white hover:text-[#168530] hover:border-[#168530]"
              onClick={scrollToContact}
            >
              {t('ctaButton')}
            </StyledButton>
          </div>
        </div>

      </div>
    </section>
  )
}

export default Pricing