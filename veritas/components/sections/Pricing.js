'use client'

import { Card, CardContent } from '../ui/Card'
import StyledButton from '../ui/StyledButton'
import { CheckIcon, EyeIcon, ShieldIcon, DollarIcon } from '../ui/Icons'

const Pricing = () => {
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
    <section id="pricing" className="section-padding bg-gray-50">
      <div className="max-w-7xl mx-auto container-padding">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-light text-gray-900 mb-6 tracking-tight">
            Why Our Pricing is Transparent
          </h2>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
            Experience honest, straightforward pricing with no surprises.
          </p>
        </div>

        {/* Transparent Pricing Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {transparentPricing.map((item, index) => (
            <div
              key={item.title}
              className="animate-fade-in-up"
              style={{ animationDelay: `${index * 150}ms` }}
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
        <Card variant="elevated" className="p-8 mb-16">
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

        {/* Call to Action */}
        <div className="text-center">
          <div className="bg-primary-500 rounded-3xl p-8 md:p-12 text-black">
            <h3 className="text-3xl md:text-4xl font-light mb-4">
              Ready for Transparent Pricing?
            </h3>
            <p className="text-xl text-primary-100 mb-8 max-w-2xl mx-auto">
              Get your honest, detailed quote with no hidden fees or surprises
            </p>
            <StyledButton
              variant="secondary"
              size="xl"
              className="glow-important bg-white text-[#168530] border-white hover:bg-[#168530] hover:text-white hover:border-[#168530]"
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