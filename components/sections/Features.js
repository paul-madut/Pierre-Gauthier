'use client'

import { Card, CardContent } from '../ui/Card'
import { ShieldIcon, HomeIcon, LeafIcon, DollarIcon } from '../ui/Icons'
import StyledButton from '../ui/StyledButton'

const Features = () => {
  const features = [
    {
      icon: ShieldIcon,
      title: 'High R-Value Materials',
      description: 'Best-in-class thermal performance with premium insulation materials that exceed industry standards.',
      benefits: ['R-60+ thermal resistance', 'Energy Star certified materials', 'Fire-resistant options available']
    },
    {
      icon: HomeIcon,
      title: 'Air-Sealing & Ventilation',
      description: 'Complete air-sealing services that improve comfort, indoor air quality, and prevent energy loss.',
      benefits: ['Drafts elimination', 'Moisture control', 'Improved air quality']
    },
    {
      icon: LeafIcon,
      title: 'Eco-Friendly Options',
      description: 'Sustainable insulation solutions using recycled materials and low-VOC options for healthier homes.',
      benefits: ['80% recycled content', 'Zero harmful chemicals', 'Carbon footprint reduction']
    },
    {
      icon: DollarIcon,
      title: 'Rebate Assistance',
      description: 'We help you navigate and claim all available government and local utility rebates to maximize savings.',
      benefits: ['Up to $5,000 in rebates', 'Application assistance', 'Maximum savings guaranteed']
    }
  ]

  return (
    <section id="features" className="section-padding bg-gray-50">
      <div className="max-w-7xl mx-auto container-padding">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-light text-gray-900 mb-6 tracking-tight">
            Why Choose Veritas
          </h2>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
            Premium materials, proven techniques, and unmatched service quality
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
              Ready to Start Saving Energy?
            </h3>
            <p className="text-xl text-primary-100 mb-8 max-w-2xl mx-auto">
              Get a personalized assessment and quote for your home in 24 hours
            </p>
            <StyledButton
              variant="secondary"
              size="lg"
              className="glow-important"
              onClick={() => document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Schedule Free Assessment
            </StyledButton>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Features