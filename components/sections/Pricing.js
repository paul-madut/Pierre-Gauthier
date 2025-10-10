'use client'

import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger'
import { Card, CardContent } from '../ui/Card'
import StyledButton from '../ui/StyledButton'
import { CheckIcon, EyeIcon, ShieldIcon, DollarIcon, HomeIcon, RulerIcon, CalculatorIcon } from '../ui/Icons'

gsap.registerPlugin(ScrollTrigger)

const Pricing = () => {
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

      // Payment methods animation
      gsap.fromTo('.payment-methods',
        { y: 60, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.7,
          ease: "power2.out",
          scrollTrigger: {
            trigger: '.payment-methods',
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
      title: 'Thorough Assessment',
      description: 'Hands-on attic insulation assessment with detailed home visit and audit',
      benefits: ['Complete home energy evaluation', 'Detailed inspection report', 'Professional recommendations']
    },
    {
      icon: ShieldIcon,
      title: 'No Hidden Fees',
      description: 'All factors clearly explained—materials, labor, and additional services',
      benefits: ['Transparent cost breakdown', 'No surprise charges', 'Written estimates provided']
    },
    {
      icon: DollarIcon,
      title: 'Flexible Payment',
      description: 'Multiple payment options available to suit your needs',
      benefits: ['Multiple payment methods', 'Financing options available', 'Rebate assistance included']
    }
  ]

  const paymentMethods = [
    'Cash',
    'Check',
    'E-transfer',
    'Credit Card',
    'Debit Card',
    'Stripe/PayPal',
    'Payment plan agreement (arranged separately)'
  ]

  const scrollToContact = () => {
    const contact = document.querySelector('#contact')
    if (contact) {
      contact.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <section id="pricing" className="section-padding bg-gray-50" ref={sectionRef}>
      <div className="max-w-7xl mx-auto container-padding">
        <div className="text-center mb-16 pricing-header">
          <h2 className="text-4xl md:text-5xl font-light text-gray-900 mb-6 tracking-tight">
            Why Our Pricing is Transparent
          </h2>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
            Experience honest, straightforward pricing with no surprises.
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

        {/* Payment Methods Section */}
        <Card variant="elevated" className="p-8 mb-16 payment-methods">
          <CardContent className="p-0">
            <h3 className="text-2xl font-semibold text-gray-900 mb-6 text-center">
              Payment Methods Accepted
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {paymentMethods.map((method, index) => (
                <div key={index} className="flex items-center space-x-2">
                  <CheckIcon className="w-5 h-5 text-green-500 flex-shrink-0" />
                  <span className="text-gray-700 font-medium">{method}</span>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Pricing Factors Section */}
        <div className="text-center mb-16 pricing-factors-header">
          <h3 className="text-3xl md:text-4xl font-light text-gray-900 mb-6 tracking-tight">
            Key Pricing Factors
          </h3>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
            Your quote is calculated based on these primary factors for accurate, fair pricing
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
                Attic Size & Access
              </h4>
              <p className="text-gray-700 leading-relaxed mb-6">
                Square footage and accessibility determine material needs and labor complexity
              </p>
              <div className="space-y-3">
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-blue-500 rounded-full flex-shrink-0"></div>
                  <span className="text-gray-700 font-medium">Attic square footage</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-blue-500 rounded-full flex-shrink-0"></div>
                  <span className="text-gray-700 font-medium">Access difficulty</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-blue-500 rounded-full flex-shrink-0"></div>
                  <span className="text-gray-700 font-medium">Ceiling height</span>
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
                Insulation Type & R-Value
              </h4>
              <p className="text-gray-700 leading-relaxed mb-6">
                Material choice and thickness requirements based on your specific needs
              </p>
              <div className="space-y-3">
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-purple-500 rounded-full flex-shrink-0"></div>
                  <span className="text-gray-700 font-medium">Material grade</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-purple-500 rounded-full flex-shrink-0"></div>
                  <span className="text-gray-700 font-medium">R-value target</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-purple-500 rounded-full flex-shrink-0"></div>
                  <span className="text-gray-700 font-medium">Insulation depth</span>
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
                Additional Services
              </h4>
              <p className="text-gray-700 leading-relaxed mb-6">
                Extra work that may be needed for optimal insulation performance
              </p>
              <div className="space-y-3">
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-orange-500 rounded-full flex-shrink-0"></div>
                  <span className="text-gray-700 font-medium">Air sealing</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-orange-500 rounded-full flex-shrink-0"></div>
                  <span className="text-gray-700 font-medium">Ventilation upgrades</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-orange-500 rounded-full flex-shrink-0"></div>
                  <span className="text-gray-700 font-medium">Old insulation removal</span>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Call to Action */}
        <div className="text-center" ref={ctaRef}>
          <div className="bg-primary-500 rounded-3xl p-8 md:p-12 text-black cta-section">
            <h3 className="text-3xl md:text-4xl font-light mb-4">
              Ready for Your Custom Quote?
            </h3>
            <p className="text-xl text-primary-100 mb-8 max-w-2xl mx-auto">
              Get your honest, detailed quote with no hidden fees or surprises
            </p>
            <StyledButton
              variant="secondary"
              size="xl"
              className="glow-important  text-[#168530] border-white hover:bg-white hover:text-[#168530] hover:border-[#168530]"
              onClick={scrollToContact}
            >
              Get Your Custom Quote
            </StyledButton>
          </div>
        </div>

      </div>
    </section>
  )
}

export default Pricing