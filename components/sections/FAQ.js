'use client'

import { useState } from 'react'
import { useTranslations } from 'next-intl'
import { ChevronDownIcon } from '../ui/Icons'

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(0)
  const t = useTranslations('faq')

  const faqs = Array.from({ length: 8 }, (_, i) => ({
    question: t(`questions.${i}.q`),
    answer: t(`questions.${i}.a`)
  }))

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? -1 : index)
  }

  return (
    <section id="faq" className="section-padding bg-gray-50">
      <div className="max-w-4xl mx-auto container-padding">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-light text-gray-900 mb-6 tracking-tight">
            {t('title')}
          </h2>
          <p className="text-xl text-gray-700 leading-relaxed">
            {t('subtitle')}
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
              {t('stillHaveQuestionsTitle')}
            </h3>
            <p className="text-gray-700 mb-6">
              {t('stillHaveQuestionsSubtitle')}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={() => document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })}
                className="bg-[#168d30] text-white px-6 py-3 rounded-lg font-semibold hover:bg-primary-600 transition-colors glow-button"
              >
                {t('getConsultation')}
              </button>
              <a
                href="tel:6138079255"
                className="bg-white text-primary-500 border border-primary-500 px-6 py-3 rounded-lg font-semibold hover:bg-primary-50 transition-colors"
              >
                {t('callNow')}
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default FAQ