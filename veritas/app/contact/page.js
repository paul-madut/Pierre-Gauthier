import Navigation from '../../components/ui/Navigation'
import Footer from '../../components/sections/Footer'
import Contact from '../../components/sections/Contact'
import { Card, CardContent } from '../../components/ui/Card'
import { PhoneIcon, EmailIcon, LocationIcon, CheckIcon } from '../../components/ui/Icons'

export const metadata = {
  title: 'Contact Us - Get Free Insulation Quote | Veritas Insulation Ottawa',
  description: 'Contact Veritas Insulation for your free attic insulation assessment. Serving Ottawa and surrounding areas with professional insulation services.',
}

export default function ContactPage() {
  const serviceAreas = [
    'Ottawa', 'Kanata', 'Nepean', 'Orleans', 'Barrhaven', 'Stittsville',
    'Manotick', 'Gloucester', 'Cumberland', 'Rockland', 'Arnprior', 'Smiths Falls',
    'Carleton Place', 'Kemptville', 'Russell', 'Embrun'
  ]

  const contactMethods = [
    {
      icon: PhoneIcon,
      title: 'Call or Text',
      details: '(613) 807-9255',
      description: 'Available 7 days a week, 8 AM - 8 PM',
      action: 'tel:6138079255',
      actionText: 'Call Now'
    },
    {
      icon: EmailIcon,
      title: 'Email Us',
      details: 'pierre@veritasinsulation.com',
      description: 'We respond within 4 hours',
      action: 'mailto:pierre@veritasinsulation.com',
      actionText: 'Send Email'
    },
    {
      icon: LocationIcon,
      title: 'Service Area',
      details: 'Ottawa & 30km Radius',
      description: 'Free estimates throughout our service area',
      action: '#service-areas',
      actionText: 'View Areas'
    }
  ]

  const benefits = [
    'Free, no-obligation assessment',
    'Same-day quotes available',
    'Licensed & insured technicians',
    'Transparent, upfront pricing',
    'Rebate assistance included',
    'Lifetime warranty options'
  ]

  return (
    <>
      <Navigation />
      <main className="pt-16">
        {/* Hero Section */}
        <section className="section-padding bg-gradient-to-br from-primary-50 to-white">
          <div className="max-w-7xl mx-auto container-padding">
            <div className="text-center mb-16">
              <h1 className="text-5xl md:text-6xl font-light text-gray-900 mb-6 tracking-tight">
                Get Your{' '}
                <span className="text-primary-500 font-medium">Free Quote</span>
              </h1>
              <p className="text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed mb-8">
                Ready to start saving on energy costs? Contact Ottawa's trusted
                insulation specialists for your free assessment.
              </p>

              {/* Quick stats */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-2xl mx-auto">
                <div className="text-center">
                  <div className="text-2xl font-bold text-primary-500 mb-1">24hrs</div>
                  <div className="text-sm text-gray-600">Response Time</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-primary-500 mb-1">2,500+</div>
                  <div className="text-sm text-gray-600">Happy Customers</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-primary-500 mb-1">100%</div>
                  <div className="text-sm text-gray-600">Satisfaction Rate</div>
                </div>
              </div>
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

            {/* Why Choose Us */}
            <Card variant="glass" className="mb-16">
              <CardContent className="p-8">
                <h2 className="text-2xl font-semibold text-gray-900 mb-6 text-center">
                  Why Ottawa Families Choose Veritas
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                  {benefits.map((benefit, index) => (
                    <div key={index} className="flex items-center space-x-3">
                      <CheckIcon className="w-5 h-5 text-green-500 flex-shrink-0" />
                      <span className="text-gray-700">{benefit}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Main Contact Section */}
        <Contact />

        {/* Service Areas */}
        <section id="service-areas" className="section-padding bg-gray-50">
          <div className="max-w-7xl mx-auto container-padding">
            <div className="text-center mb-12">
              <h2 className="text-4xl md:text-5xl font-light text-gray-900 mb-6 tracking-tight">
                Service Areas
              </h2>
              <p className="text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
                We proudly serve Ottawa and surrounding communities within a 30km radius
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              {/* Service Areas List */}
              <div>
                <Card variant="elevated">
                  <CardContent className="p-8">
                    <h3 className="text-2xl font-semibold text-gray-900 mb-6">
                      Areas We Serve
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
                        <strong>Don't see your area listed?</strong> We may still be able to help!
                        Contact us for areas outside our standard service zone.
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
                      Free Estimates Throughout Service Area
                    </h4>
                    <p className="text-gray-600 text-sm">
                      No travel charges or hidden fees for estimates within our service area
                    </p>
                  </CardContent>
                </Card>

                <Card variant="default">
                  <CardContent className="p-6">
                    <h4 className="font-semibold text-gray-900 mb-2">
                      Same-Day Service Available
                    </h4>
                    <p className="text-gray-600 text-sm">
                      Emergency consultations and rush jobs available for urgent needs
                    </p>
                  </CardContent>
                </Card>

                <Card variant="default">
                  <CardContent className="p-6">
                    <h4 className="font-semibold text-gray-900 mb-2">
                      Local Expertise
                    </h4>
                    <p className="text-gray-600 text-sm">
                      We understand Ottawa's climate and building codes for optimal results
                    </p>
                  </CardContent>
                </Card>

                <Card variant="default">
                  <CardContent className="p-6">
                    <h4 className="font-semibold text-gray-900 mb-2">
                      Ongoing Support
                    </h4>
                    <p className="text-gray-600 text-sm">
                      Local team available for warranty service and follow-up support
                    </p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* Emergency Contact */}
        <section className="section-padding bg-red-50">
          <div className="max-w-4xl mx-auto container-padding text-center">
            <h2 className="text-3xl font-semibold text-gray-900 mb-4">
              Need Immediate Help?
            </h2>
            <p className="text-lg text-gray-700 mb-8">
              For urgent insulation issues, ice dam problems, or emergency consultations
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="tel:6138079255"
                className="bg-red-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-red-700 transition-colors inline-block"
              >
                Emergency Line: (613) 807-9255
              </a>
              <a
                href="mailto:pierre@veritasinsulation.com?subject=Emergency%20Consultation"
                className="bg-white text-red-600 border border-red-600 px-8 py-4 rounded-lg font-semibold hover:bg-red-50 transition-colors inline-block"
              >
                Emergency Email
              </a>
            </div>
            <p className="text-sm text-gray-600 mt-4">
              Available 7 days a week for emergency consultations
            </p>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}