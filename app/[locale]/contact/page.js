"use client"
import Navigation from '@/components/ui/Navigation'
import Footer from '@/components/sections/Footer'
import Contact from '@/components/sections/Contact'
import WhyChooseVeritas from '@/components/sections/WhyChooseVeritas'
import { Card, CardContent } from '@/components/ui/Card'
import { PhoneIcon, EmailIcon, LocationIcon } from '@/components/ui/Icons'

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
      description: 'Available 5 days a week',
      action: 'tel:6138079255',
      actionText: 'Call Now'
    },
    {
      icon: EmailIcon,
      title: 'Email Us',
      details: 'pierre@veritasinsulation.com',
      description: 'We respond within 24 hours on weekdays',
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

  return (
    <>
      <Navigation />
      <main className="pt-16">
        {/* Hero Section */}
        <section className="section-padding bg-gradient-to-br from-primary-50 to-white">
          <div className="max-w-[1400px] mx-auto container-padding">
            <div className="text-center mb-16">
              <h1 className="text-5xl md:text-6xl font-light text-gray-900 mb-6 tracking-tight">
                Get Your{' '}
                <span className="text-primary-500 font-medium">Free Quote</span>
              </h1>
              <p className="text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed mb-8">
                Ready to start saving on energy costs? Contact Ottawa's trusted
                insulation specialists for your free assessment.
              </p>
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
        <Contact />

        {/* Service Areas */}
        <section id="service-areas" className="section-padding bg-gray-50">
          <div className="max-w-[1400px] mx-auto container-padding">
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
      </main>
      <Footer />
    </>
  )
}