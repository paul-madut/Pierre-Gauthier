'use client'

import { useState } from 'react'
import { Card, CardContent } from '../ui/Card'
import StyledButton from '../ui/StyledButton'
import { PhoneIcon, EmailIcon, LocationIcon } from '../ui/Icons'

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    address: '',
    homeSize: '',
    message: '',
    honeypot: '' // Hidden field for spam protection
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
      return // Likely spam
    }

    setIsSubmitting(true)

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData)
      })

      if (response.ok) {
        setSubmitStatus('success')
        setFormData({
          name: '',
          email: '',
          phone: '',
          address: '',
          homeSize: '',
          message: '',
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

  return (
    <section id="contact" className="section-padding bg-white">
      <div className="max-w-7xl mx-auto container-padding">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-light text-gray-900 mb-6 tracking-tight">
            Get Your Free Assessment
          </h2>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
            Ready to start saving on energy costs? Get a personalized quote within 24 hours on weekdays.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-stretch">
          {/* Contact Form */}
          <div className="lg:col-span-2">
            <Card variant="elevated" className="h-full">
              <CardContent className="p-8 h-full flex flex-col">
                <h3 className="text-2xl font-semibold text-gray-900 mb-6">
                  Request Free Quote
                </h3>

                {submitStatus === 'success' && (
                  <div className="bg-green-50 border border-green-200 rounded-lg p-4 mb-6">
                    <p className="text-green-800">
                      ✓ Thank you! We'll contact you within 24 hours on weekdays to schedule your free assessment.
                    </p>
                  </div>
                )}

                {submitStatus === 'error' && (
                  <div className="bg-red-50 border border-red-200 rounded-lg p-4 mb-6">
                    <p className="text-red-800">
                      ✗ Something went wrong. Please try again or call us directly.
                    </p>
                  </div>
                )}

                <form onSubmit={handleSubmit} className="space-y-6 flex-1 flex flex-col">
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

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-colors"
                        placeholder="John Smith"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-colors"
                        placeholder="john@example.com"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Phone Number *
                      </label>
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-colors"
                        placeholder="(613) 555-0123"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Home Size (sq ft)
                      </label>
                      <select
                        name="homeSize"
                        value={formData.homeSize}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-colors"
                      >
                        <option value="">Select size</option>
                        <option value="under-1000">Under 1,000 sq ft</option>
                        <option value="1000-1500">1,000 - 1,500 sq ft</option>
                        <option value="1500-2000">1,500 - 2,000 sq ft</option>
                        <option value="2000-3000">2,000 - 3,000 sq ft</option>
                        <option value="over-3000">Over 3,000 sq ft</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Home Address
                    </label>
                    <input
                      type="text"
                      name="address"
                      value={formData.address}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-colors"
                      placeholder="123 Main St, Ottawa, ON"
                    />
                  </div>

                  <div className="flex-1">
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Additional Details
                    </label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      rows={6}
                      className="w-full h-32 px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-colors resize-none"
                      placeholder="Tell us about your insulation goals, current issues, or preferred timing..."
                    />
                  </div>

                  <div className="mt-auto pt-6">
                    <StyledButton
                      type="submit"
                      variant="accent"
                      size="lg"
                      className="w-full glow-important"
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? 'Sending...' : 'Get Free Quote'}
                    </StyledButton>

                    <p className="text-sm text-gray-600 text-center mt-4">
                      By submitting this form, you agree to be contacted about our services.
                      We respect your privacy and never share your information.
                    </p>
                  </div>
                </form>
              </CardContent>
            </Card>
          </div>

          {/* Contact Information */}
          <div className="space-y-8">
            {/* Contact Details */}
            <Card variant="glass">
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-6">
                  Contact Information
                </h3>

                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 bg-primary-100 rounded-full flex items-center justify-center">
                      <PhoneIcon className="w-5 h-5 text-primary-500" />
                    </div>
                    <div>
                      <p className="text-sm text-gray-500">Phone</p>
                      <a href="tel:6138079255" className="font-medium text-gray-900 hover:text-primary-500">
                        (613) 807-9255
                      </a>
                    </div>
                  </div>

                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center">
                      <EmailIcon className="w-5 h-5 text-green-600" />
                    </div>
                    <div>
                      <p className="text-sm text-gray-500">Email</p>
                      <a href="mailto:pierre@veritasinsulation.com" className="font-medium text-gray-900 hover:text-primary-500">
                        pierre@veritasinsulation.com
                      </a>
                    </div>
                  </div>

                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 bg-purple-100 rounded-full flex items-center justify-center">
                      <LocationIcon className="w-5 h-5 text-purple-600" />
                    </div>
                    <div>
                      <p className="text-sm text-gray-500">Service Area</p>
                      <p className="font-medium text-gray-900">Ottawa & Surrounding Areas</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Service Areas */}
            <Card variant="default">
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">
                  Service Areas
                </h3>
                <div className="grid grid-cols-2 gap-2 text-sm text-gray-700">
                  <div>Ottawa</div>
                  <div>Kanata</div>
                  <div>Nepean</div>
                  <div>Orleans</div>
                  <div>Barrhaven</div>
                  <div>Stittsville</div>
                  <div>Manotick</div>
                  <div>Gloucester</div>
                  <div>Cumberland</div>
                  <div>Rockland</div>
                </div>
                <p className="text-sm text-gray-600 mt-4">
                  Don't see your area? <a href="tel:6138079255" className="text-primary-500 hover:underline">Call us</a> - we may still be able to help!
                </p>
              </CardContent>
            </Card>

            {/* Emergency Contact */}
            <Card variant="elevated" className="bg-primary-50 border-primary-200">
              <CardContent className="p-6 text-center">
                <h3 className="text-lg font-semibold text-primary-900 mb-2">
                  Need Immediate Help?
                </h3>
                <p className="text-primary-700 mb-4 text-sm">
                  For urgent insulation issues or emergency consultations
                </p>
                <StyledButton
                  variant="secondary"
                  size="md"
                  className="glow-important"
                  onClick={() => window.location.href = 'tel:6138079255'}
                >
                  Call Now
                </StyledButton>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact