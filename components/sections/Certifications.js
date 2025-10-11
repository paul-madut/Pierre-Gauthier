'use client'

import Image from 'next/image'

const Certifications = () => {
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
    <section className="py-16 bg-gray-50">
      <div className="max-w-[1400px] mx-auto container-padding">
        <div className="text-center mb-12">
          <h2 className="text-sm font-semibold text-gray-600 uppercase tracking-wider mb-4">
            Trusted & Certified
          </h2>
          <p className="text-lg text-gray-700 max-w-2xl mx-auto">
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
  )
}

export default Certifications