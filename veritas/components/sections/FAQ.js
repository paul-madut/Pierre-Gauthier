'use client'

import { useState } from 'react'
import { ChevronDownIcon } from '../ui/Icons'

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(0)

  const faqs = [
    {
      question: 'How long does attic insulation installation take?',
      answer: 'Most residential installations are completed in 4-8 hours, depending on the size of your home. We work efficiently to minimize disruption to your daily routine.'
    },
    {
      question: 'What R-value insulation do I need in Ottawa?',
      answer: 'For Ottawa\'s climate, we recommend R-60 to R-70 for optimal energy efficiency. Our assessment will determine the exact R-value needed for your specific home and current insulation levels.'
    },
    {
      question: 'Will insulation installation create a mess in my home?',
      answer: 'No. We use protective coverings throughout your home and employ dust-controlled installation methods. Our team performs complete cleanup, leaving your home cleaner than we found it.'
    },
    {
      question: 'What rebates are available for insulation upgrades?',
      answer: 'Ontario residents can receive up to $5,000 in combined rebates from federal, provincial, and utility programs. We handle all paperwork and ensure you receive maximum available rebates.'
    },
    {
      question: 'How much will I save on energy bills?',
      answer: 'Most customers see 25-40% reduction in heating and cooling costs. The exact savings depend on your home\'s current insulation, size, and energy usage patterns.'
    },
    {
      question: 'Do you offer warranties on your work?',
      answer: 'Yes. We provide comprehensive warranties: 10 years on Standard installations and lifetime warranty on Premium packages. Materials also come with manufacturer warranties.'
    },
    {
      question: 'Can you insulate other areas besides the attic?',
      answer: 'Absolutely. We also insulate basements, crawl spaces, walls, and rim joists. Our assessment will identify all areas where improved insulation can benefit your home.'
    },
    {
      question: 'Is blown-in insulation better than batt insulation?',
      answer: 'For attics, blown-in insulation is superior as it fills gaps and irregular spaces completely, providing better thermal performance and air sealing compared to traditional batts.'
    }
  ]

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? -1 : index)
  }

  return (
    <section id="faq" className="section-padding bg-gray-50">
      <div className="max-w-4xl mx-auto container-padding">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-light text-gray-900 mb-6 tracking-tight">
            Frequently Asked Questions
          </h2>
          <p className="text-xl text-gray-700 leading-relaxed">
            Get answers to common questions about attic insulation
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="animate-fade-in-up"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="bg-white rounded-2xl shadow-sm border border-gray-200 overflow-hidden">
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full px-6 py-6 text-left flex items-center justify-between hover:bg-gray-50 transition-colors"
                >
                  <span className="text-lg font-semibold text-gray-900 pr-4">
                    {faq.question}
                  </span>
                  <ChevronDownIcon
                    className={`w-5 h-5 text-gray-500 flex-shrink-0 transition-transform duration-200 ${
                      openIndex === index ? 'transform rotate-180' : ''
                    }`}
                  />
                </button>

                <div
                  className={`transition-all duration-300 ease-in-out overflow-hidden ${
                    openIndex === index ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                  }`}
                >
                  <div className="px-6 pb-6">
                    <div className="text-gray-700 leading-relaxed">
                      {faq.answer}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Still have questions CTA */}
        <div className="text-center mt-12">
          <div className="bg-primary-50 rounded-2xl p-8">
            <h3 className="text-2xl font-semibold text-gray-900 mb-4">
              Still Have Questions?
            </h3>
            <p className="text-gray-700 mb-6">
              Our insulation experts are ready to provide personalized answers
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={() => document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })}
                className="bg-[#168d30] text-white px-6 py-3 rounded-lg font-semibold hover:bg-primary-600 transition-colors glow-button"
              >
                Get Expert Consultation
              </button>
              <a
                href="tel:6138079255"
                className="bg-white text-primary-500 border border-primary-500 px-6 py-3 rounded-lg font-semibold hover:bg-primary-50 transition-colors"
              >
                Call (613) 807-9255
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default FAQ