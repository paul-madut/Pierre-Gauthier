'use client'

import { useState, useEffect } from 'react'
import { useTranslations } from 'next-intl'
import { Card, CardContent } from '../ui/Card'
import { StarIcon } from '../ui/Icons'

const Testimonials = ({ testimonials = [] }) => {
  const t = useTranslations('testimonials')
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isHovered, setIsHovered] = useState(false)

  // If no testimonials, don't render the section
  if (!testimonials || testimonials.length === 0) {
    return null
  }

  // Auto-scroll functionality
  useEffect(() => {
    if (!isHovered) {
      const interval = setInterval(() => {
        setCurrentIndex((prevIndex) =>
          prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
        )
      }, 5000)
      return () => clearInterval(interval)
    }
  }, [isHovered, testimonials.length])

  const goToSlide = (index) => {
    setCurrentIndex(index)
  }

  const nextSlide = () => {
    setCurrentIndex(currentIndex === testimonials.length - 1 ? 0 : currentIndex + 1)
  }

  const prevSlide = () => {
    setCurrentIndex(currentIndex === 0 ? testimonials.length - 1 : currentIndex - 1)
  }

  return (
    <section id="testimonials" className="section-padding bg-white">
      <div className="max-w-[1400px] mx-auto container-padding">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-light text-gray-900 mb-6 tracking-tight">
            {t('title')}
          </h2>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
            {t('subtitle')}
          </p>
        </div>

        {/* Testimonials Carousel */}
        <div
          className="relative"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          <div className="overflow-hidden rounded-3xl">
            <div
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
              {testimonials.map((testimonial, index) => (
                <div key={index} className="w-full flex-shrink-0">
                  <Card variant="glass" className="mx-4">
                    <CardContent className="p-8 md:p-12">
                      <div className="grid grid-cols-1 gap-8 items-center">
                        {/* Content */}
                        <div className="text-center">
                          {/* Stars */}
                          <div className="flex justify-center mb-4">
                            {[...Array(testimonial.rating)].map((_, i) => (
                              <StarIcon key={i} className="w-5 h-5 text-yellow-400" />
                            ))}
                          </div>

                          {/* Quote */}
                          <blockquote className="text-xl md:text-2xl text-gray-900 mb-6 font-light leading-relaxed">
                            "{testimonial.quote}"
                          </blockquote>

                          {/* Metric */}
                          <div className="bg-green-50 rounded-lg p-4 mb-6">
                            <p className="text-green-800 font-semibold">
                              🎯 {testimonial.metric}
                            </p>
                          </div>

                          {/* Attribution */}
                          <cite className="not-italic">
                            <div className="font-semibold text-gray-900 text-lg">
                              {testimonial.name}
                            </div>
                            <div className="text-gray-600">
                              {testimonial.location}
                            </div>
                          </cite>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              ))}
            </div>
          </div>

          {/* Navigation arrows */}
          <button
            onClick={prevSlide}
            className="absolute left-4 top-1/2 transform -translate-y-1/2 w-12 h-12 bg-white rounded-full border border-gray-200 flex items-center justify-center hover:bg-gray-50 transition-colors"
          >
            <svg className="w-6 h-6 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>

          <button
            onClick={nextSlide}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 w-12 h-12 bg-white rounded-full border border-gray-200 flex items-center justify-center hover:bg-gray-50 transition-colors"
          >
            <svg className="w-6 h-6 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>

        {/* Dots indicator */}
        <div className="flex justify-center mt-8 space-x-2">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`w-3 h-3 rounded-full transition-colors ${
                index === currentIndex ? 'bg-[#168530]' : 'bg-gray-300'
              }`}
            />
          ))}
        </div>

        {/* Trust indicators */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-8 text-center max-w-2xl mx-auto">
          <div>
            <div className="text-3xl font-bold text-primary-500 mb-2">5.0/5</div>
            <div className="text-gray-700">{t('trustIndicators.rating')}</div>
          </div>
          <div>
            <div className="text-3xl font-bold text-primary-500 mb-2">0</div>
            <div className="text-gray-700">{t('trustIndicators.complaints')}</div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Testimonials