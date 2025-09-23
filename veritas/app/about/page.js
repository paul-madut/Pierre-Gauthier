import Image from 'next/image'
import Navigation from '../../components/ui/Navigation'
import Footer from '../../components/sections/Footer'
import { Card, CardContent } from '../../components/ui/Card'
import StyledButton from '../../components/ui/StyledButton'
import { CheckIcon, ShieldIcon, StarIcon } from '../../components/ui/Icons'

export const metadata = {
  title: 'About Us - Veritas Insulation | Professional Insulation Services Ottawa',
  description: 'Learn about Veritas Insulation\'s 10+ years of experience serving Ottawa families with premium attic insulation, air sealing, and energy efficiency solutions.',
}

export default function About() {
  const teamMembers = [
    {
      name: 'Pierre Gauthier',
      role: 'Founder & Lead Insulation Specialist',
      image: '/team/pierre-gauthier.jpg',
      bio: 'With over 12 years in the insulation industry, Pierre founded Veritas Insulation to bring honest, high-quality service to Ottawa families.',
      certifications: ['Energy Advisor Certified', 'WSIB Safety Trained', 'Insulation Contractors Association Member']
    },
    {
      name: 'Mike Thompson',
      role: 'Senior Installation Technician',
      image: '/team/mike-thompson.jpg',
      bio: 'Mike has been perfecting insulation installation techniques for 8 years, ensuring every job meets our exacting standards.',
      certifications: ['Advanced Air Sealing Certified', 'Fall Protection Trained', 'Quality Control Specialist']
    },
    {
      name: 'Sarah Williams',
      role: 'Customer Experience Manager',
      image: '/team/sarah-williams.jpg',
      bio: 'Sarah ensures every customer has a smooth experience from initial consultation through project completion.',
      certifications: ['Customer Service Excellence', 'Energy Efficiency Specialist', 'Rebate Program Expert']
    }
  ]

  const milestones = [
    { year: '2013', event: 'Veritas Insulation founded in Ottawa' },
    { year: '2015', event: 'Reached 500 satisfied customers' },
    { year: '2017', event: 'Became Energy Star Partner' },
    { year: '2019', event: 'Expanded service area across Eastern Ontario' },
    { year: '2021', event: 'Achieved 2,000 homes insulated milestone' },
    { year: '2023', event: 'Launched eco-friendly insulation options' },
    { year: '2024', event: 'Celebrating 2,500+ happy families served' }
  ]

  const values = [
    {
      title: 'Integrity First',
      description: 'We provide honest assessments and transparent pricing. No surprise costs, no high-pressure sales tactics.',
      icon: ShieldIcon
    },
    {
      title: 'Quality Craftsmanship',
      description: 'Every installation meets our rigorous standards. We use premium materials and proven techniques.',
      icon: StarIcon
    },
    {
      title: 'Customer Focus',
      description: 'Your comfort and satisfaction drive everything we do. We\'re not satisfied unless you are.',
      icon: CheckIcon
    },
    {
      title: 'Fully Insured',
      description: 'Pierre is fully insured in the case of an accident, providing complete peace of mind for every project.',
      icon: ShieldIcon
    }
  ]

  const certifications = [
    {
      name: 'Energy Star Partner',
      logo: '/logos/energy-star.png',
      alt: 'Energy Star Partner certification'
    },
    {
      name: 'Better Business Bureau',
      logo: '/logos/bbb.png',
      alt: 'BBB Accredited Business'
    },
    {
      name: 'Home Improvement Ontario',
      logo: '/logos/hio.png',
      alt: 'Home Improvement Ontario certified'
    },
    {
      name: 'WSIB Certified',
      logo: '/logos/wsib.png',
      alt: 'WSIB workplace safety certified'
    },
    {
      name: 'Insulation Contractors',
      logo: '/logos/ica.png',
      alt: 'Insulation Contractors Association'
    }
  ]

  return (
    <>
      <Navigation />
      <main className="pt-16">
        {/* Hero Section */}
        <section className="section-padding bg-gradient-to-br from-primary-50 to-white">
          <div className="max-w-7xl mx-auto container-padding">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <div className="animate-fade-in-up">
                <h1 className="text-5xl md:text-6xl font-light text-gray-900 mb-6 tracking-tight">
                  About{' '}
                  <span className="text-primary-500 font-medium">Veritas</span>
                </h1>
                <p className="text-xl text-gray-700 mb-8 leading-relaxed">
                  For over a decade, we've been Ottawa's trusted insulation specialists,
                  helping families create more comfortable, energy-efficient homes.
                </p>
                <div className="grid grid-cols-3 gap-6 mb-8">
                  <div className="text-center">
                    <div className="text-3xl font-bold text-primary-500 mb-1">10+</div>
                    <div className="text-sm text-gray-600">Years Experience</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-primary-500 mb-1">2,500+</div>
                    <div className="text-sm text-gray-600">Homes Served</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-primary-500 mb-1">4.9★</div>
                    <div className="text-sm text-gray-600">Average Rating</div>
                  </div>
                </div>
                <StyledButton
                  variant="accent"
                  size="lg"
                  className="glow-important"
                  onClick={() => document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })}
                >
                  Get Your Free Quote
                </StyledButton>
              </div>

              <div className="animate-fade-in-up animation-delay-400">
                <div className="relative">
                  <Image
                    src="/about/team-photo.jpg"
                    alt="Veritas Insulation team"
                    width={600}
                    height={500}
                    className="rounded-3xl shadow-2xl"
                  />
                  <div className="absolute -bottom-6 -left-6 bg-white rounded-2xl p-6 shadow-xl">
                    <div className="text-2xl font-bold text-green-600 mb-1">100%</div>
                    <div className="text-sm text-gray-700">Satisfaction Rate</div>
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
                Our Story
              </h2>
            </div>

            <div className="prose prose-lg prose-gray max-w-none">
              <p className="text-xl text-gray-700 leading-relaxed mb-8">
                Veritas Insulation was born from a simple belief: every Ottawa family deserves
                a comfortable, energy-efficient home without breaking the bank or dealing with
                dishonest contractors.
              </p>

              <p className="text-lg text-gray-700 leading-relaxed mb-8">
                Founded by Pierre Gauthier in 2013, Veritas began as a response to the poor
                service and inflated pricing he witnessed in the industry. Pierre's vision
                was clear: provide transparent pricing, use premium materials, and treat
                every home as if it were his own.
              </p>

              <p className="text-lg text-gray-700 leading-relaxed mb-8">
                What started as a one-person operation has grown into Ottawa's most trusted
                insulation company, but our core values remain unchanged. We believe in
                honest assessments, fair pricing, and workmanship that stands the test of time.
              </p>

              <p className="text-lg text-gray-700 leading-relaxed">
                Today, we're proud to have helped over 2,500 families reduce their energy
                costs while improving their home comfort. Every installation, every customer
                interaction, and every warranty we honor reflects our commitment to being
                the insulation company Ottawa families can trust.
              </p>
            </div>
          </div>
        </section>

        {/* Company Values */}
        <section className="section-padding bg-gray-50">
          <div className="max-w-7xl mx-auto container-padding">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-light text-gray-900 mb-6 tracking-tight">
                Our Values
              </h2>
              <p className="text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
                The principles that guide every project and customer interaction
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

        {/* Certifications Section */}
        <section className="section-padding bg-white">
          <div className="max-w-7xl mx-auto container-padding">
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

            {/* Trust indicators */}
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
        </section>

        {/* Team Section */}
        <section className="section-padding bg-white">
          <div className="max-w-7xl mx-auto container-padding">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-light text-gray-900 mb-6 tracking-tight">
                Meet Our Team
              </h2>
              <p className="text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
                Experienced professionals dedicated to your home's comfort and efficiency
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {teamMembers.map((member, index) => (
                <Card key={member.name} variant="elevated" className="h-full">
                  <CardContent className="p-8 text-center">
                    <div className="relative w-32 h-32 mx-auto mb-6 rounded-full overflow-hidden">
                      <Image
                        src={member.image}
                        alt={member.name}
                        fill
                        style={{ objectFit: 'cover' }}
                      />
                    </div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">
                      {member.name}
                    </h3>
                    <p className="text-primary-500 font-medium mb-4">
                      {member.role}
                    </p>
                    <p className="text-gray-700 mb-6 leading-relaxed">
                      {member.bio}
                    </p>
                    <div className="space-y-2">
                      {member.certifications.map((cert, certIndex) => (
                        <div key={certIndex} className="flex items-center justify-center space-x-2">
                          <CheckIcon className="w-4 h-4 text-green-500 flex-shrink-0" />
                          <span className="text-sm text-gray-600">{cert}</span>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Timeline */}
        <section className="section-padding bg-gray-50">
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
              {/* Timeline line */}
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
        </section>

        {/* CTA Section */}
        <section className="section-padding bg-primary-500">
          <div className="max-w-4xl mx-auto container-padding text-center">
            <h2 className="text-4xl md:text-5xl font-light text-white mb-6">
              Ready to Join Our Family of Satisfied Customers?
            </h2>
            <p className="text-xl text-primary-100 mb-8 max-w-2xl mx-auto leading-relaxed">
              Experience the Veritas difference with a free, no-obligation assessment
              of your home's insulation needs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <StyledButton
                variant="secondary"
                size="lg"
                className="glow-important"
                onClick={() => window.location.href = '/contact'}
              >
                Schedule Free Assessment
              </StyledButton>
              <StyledButton
                variant="accent"
                size="lg"
                className="glow-important"
                onClick={() => window.location.href = 'tel:6138079255'}
              >
                Call (613) 807-9255
              </StyledButton>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}