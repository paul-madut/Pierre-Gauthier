'use client'

import { useState } from 'react'
import Image from 'next/image'
import StyledButton from '../ui/StyledButton'
import { Card, CardContent } from '../ui/Card'

const Hero = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    honeypot: ''
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState(null)

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()

    // Check honeypot
    if (formData.honeypot) {
      return
    }

    setIsSubmitting(true)

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          ...formData,
          message: 'Hero form submission - Quick quote request'
        })
      })

      if (response.ok) {
        setSubmitStatus('success')
        setFormData({
          name: '',
          phone: '',
          email: '',
          honeypot: ''
        })
      } else {
        setSubmitStatus('error')
      }
    } catch (error) {
      setSubmitStatus('error')
    }

    setIsSubmitting(false)
  }

  const scrollToContact = () => {
    const contact = document.querySelector('#contact')
    if (contact) {
      contact.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[#fef2f2] pt-8">
      {/* Background Image Div with content inside */}
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[95%] h-[75%] z-0">
      </div>
        <div
          className="relative w-[95%] h-[75%] rounded-3xl overflow-hidden shadow-2xl"
          style={{
            backgroundImage: `url('/insulation.jpg')`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat'
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-black/30 to-transparent" />

          {/* Content inside background div with 4px padding */}
          <div className="relative z-10 max-w-7xl mx-auto p-1 h-full">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center min-h-[80vh] py-8">
          {/* Left Column - Main Content */}
          <div className="relative animate-fade-in-up text-center lg:text-left">
            {/* Logo above heading */}
            <div className="mb-2 flex justify-center lg:justify-start">
              <div className=" w-32 h-32 md:w-40 md:h-40 lg:w-84 lg:h-54">
                <Image
                  src="/images/2.png"
                  alt="Veritas Insulation"
                  width={192}
                  height={192}
                  className="w-full h-full object-contain hidden md:block"
                />
              </div>
            </div>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-light text-white mb-6 leading-tighter tracking-tighter">
              Stop Wasting Heat.{' '}
              <span className="text-primary-500 font-medium">
                Save Hundreds
              </span>{' '}
              on Your Energy Bill.
            </h2>

            <p className="text-xl md:text-2xl text-[#fef2f2] mb-8 leading-relaxed font-light">
              Premium attic insulation solutions that deliver lasting comfort,
              energy savings, and a quieter home for your family.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start items-center mb-12">
              <StyledButton
                variant="accent"
                size="xl"
                onClick={scrollToContact}
                className="glow-important"
              >
                Get a Free Assessment
              </StyledButton>
              <StyledButton
                variant="primary"
                size="xl"
                onClick={() => document.querySelector('#how-it-works')?.scrollIntoView({ behavior: 'smooth' })}
              >
                How It Works
              </StyledButton>
            </div>

            {/* Trust indicators
            <div className="grid grid-cols-3 gap-6 max-w-md mx-auto lg:mx-0 text-green-400">
              <div className="text-center lg:text-left">
                <div className="text-2xl font-bold text-primary-500 mb-1">2,500+</div>
                <div className="text-sm text-gray-100">Homes Served</div>
              </div>
              <div className="text-center lg:text-left">
                <div className="text-2xl font-bold text-primary-500 mb-1">35%</div>
                <div className="text-sm text-gray-100">Avg. Savings</div>
              </div>
              <div className="text-center lg:text-left">
                <div className="text-2xl font-bold text-primary-500 mb-1">4.9★</div>
                <div className="text-sm text-gray-100">Rating</div>
              </div>
            </div> */}
          </div>

          {/* Right Column - Contact Form */}
          <div className="relative animate-fade-in-up animation-delay-400">
            <Card variant="glass" className="shadow-2xl">
              <CardContent className="p-8">
                <div className="text-center mb-6">
                  <h2 className="text-2xl font-semibold text-gray-900 mb-2">
                    Get Your Free Quote
                  </h2>
                  <p className="text-gray-600">
                    Call us at <a href="tel:6138079255" className="text-primary-500 font-medium hover:underline">(613) 807-9255</a> or fill out the form below
                  </p>
                </div>

                {submitStatus === 'success' && (
                  <div className="bg-green-50 border border-green-200 rounded-lg p-4 mb-6">
                    <p className="text-green-800 text-sm">
                      ✓ Thank you! We'll contact you within 24 hours on weekdays to schedule your free assessment.
                    </p>
                  </div>
                )}

                {submitStatus === 'error' && (
                  <div className="bg-red-50 border border-red-200 rounded-lg p-4 mb-6">
                    <p className="text-red-800 text-sm">
                      ✗ Something went wrong. Please try again or call us directly.
                    </p>
                  </div>
                )}

                <form onSubmit={handleSubmit} className="space-y-4">
                  {/* Honeypot field */}
                  <input
                    type="text"
                    name="honeypot"
                    value={formData.honeypot}
                    onChange={handleChange}
                    className="hidden"
                    tabIndex="-1"
                    autoComplete="off"
                  />

                  <div>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-colors"
                      placeholder="Full Name"
                    />
                  </div>

                  <div>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-colors"
                      placeholder="Phone Number"
                    />
                  </div>

                  <div>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-colors"
                      placeholder="Email Address"
                    />
                  </div>

                  <StyledButton
                    type="submit"
                    variant="accent"
                    size="lg"
                    className="w-full glow-important"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? 'Sending...' : 'Get Free Quote Now'}
                  </StyledButton>

                  <p className="text-xs text-gray-500 text-center">
                    We'll contact you within 24 hours on weekdays. No spam, guaranteed.
                  </p>
                </form>

                {/* Additional contact options */}
                <div className="mt-6 pt-6 border-t border-gray-200">
                  <div className="grid grid-cols-2 gap-4 text-center">
                    <div>
                      <div className="text-sm font-medium text-gray-900 mb-1">Response Time</div>
                      <div className="text-xs text-gray-600">Weekdays 24 hours</div>
                    </div>
                    <div>
                      <div className="text-sm font-medium text-gray-900 mb-1">Free Assessment</div>
                      <div className="text-xs text-gray-600">No obligation</div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
            </div>
          </div>
        </div>
      </div>

    </section>
  )
}

export default Hero