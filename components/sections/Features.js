'use client'

import { useTranslations } from 'next-intl'
import { Card, CardContent } from '../ui/Card'
import { ShieldIcon, HomeIcon, LeafIcon, DollarIcon } from '../ui/Icons'
import StyledButton from '../ui/StyledButton'

const Features = () => {
  const t = useTranslations('features')
  const features = [
    {
      icon: ShieldIcon,
      title: t('feature1.title'),
      description: t('feature1.description'),
      benefits: [t('feature1.benefits.0'), t('feature1.benefits.1'), t('feature1.benefits.2')]
    },
    {
      icon: HomeIcon,
      title: t('feature2.title'),
      description: t('feature2.description'),
      benefits: [t('feature2.benefits.0'), t('feature2.benefits.1'), t('feature2.benefits.2')]
    },
    {
      icon: LeafIcon,
      title: t('feature3.title'),
      description: t('feature3.description'),
      benefits: [t('feature3.benefits.0'), t('feature3.benefits.1'), t('feature3.benefits.2')]
    },
    {
      icon: DollarIcon,
      title: t('feature4.title'),
      description: t('feature4.description'),
      benefits: [t('feature4.benefits.0'), t('feature4.benefits.1'), t('feature4.benefits.2')]
    }
  ]

  return (
    <section id="features" className="section-padding bg-gray-50">
      <div className="max-w-[1400px] mx-auto container-padding">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-light text-gray-900 mb-6 tracking-tight">
            {t('title')}
          </h2>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
            {t('subtitle')}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {features.map((feature, index) => (
            <div
              key={feature.title}
              className="animate-fade-in-up"
              style={{ animationDelay: `${index * 150}ms` }}
            >
              <Card variant="elevated" className="h-full group">
                <CardContent className="p-8">
                  {/* Icon */}
                  <div className="flex items-center justify-center w-16 h-16 bg-primary-100 rounded-2xl mb-6 group-hover:bg-primary-200 transition-colors">
                    <feature.icon className="w-8 h-8 text-primary-500" />
                  </div>

                  {/* Content */}
                  <h3 className="text-2xl font-semibold text-gray-900 mb-4">
                    {feature.title}
                  </h3>

                  <p className="text-gray-700 mb-6 leading-relaxed">
                    {feature.description}
                  </p>

                  {/* Benefits */}
                  <div className="space-y-3">
                    {feature.benefits.map((benefit, benefitIndex) => (
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

        {/* Call to Action */}
        <div className="text-center mt-16">
          <div className="bg-primary-500 rounded-3xl p-8 md:p-12 text-black">
            <h3 className="text-3xl md:text-4xl font-light mb-4">
              {t('ctaTitle')}
            </h3>
            <p className="text-xl text-primary-100 mb-8 max-w-2xl mx-auto">
              {t('ctaSubtitle')}
            </p>
            <StyledButton
              variant="secondary"
              size="lg"
              className="glow-important"
              onClick={() => document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })}
            >
              {t('ctaButton')}
            </StyledButton>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Features