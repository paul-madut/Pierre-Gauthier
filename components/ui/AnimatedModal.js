'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'
import { CloseIcon, PhoneIcon } from './Icons'

const AnimatedModal = ({ isOpen, onClose, children }) => {
  if (!isOpen) return null

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 animate-fade-in">
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-black/60 backdrop-blur-sm"
        onClick={onClose}
      />

      {/* Modal */}
      <div className="relative w-full max-w-sm md:max-w-lg lg:max-w-xl bg-white rounded-3xl shadow-2xl overflow-hidden animate-fade-in-up">
        {children}
      </div>
    </div>
  )
}

const FreeQuoteModal = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    honeypot: ''
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState(null)

  // Show modal immediately on page load
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsOpen(true)
    }, 1000) // Small delay to let page load

    return () => clearTimeout(timer)
  }, [])

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
          message: 'Modal popup form submission - Free inspection request'
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
        // Close modal after success
        setTimeout(() => {
          setIsOpen(false)
        }, 3000)
      } else {
        setSubmitStatus('error')
      }
    } catch (error) {
      setSubmitStatus('error')
    }

    setIsSubmitting(false)
  }

  const closeModal = () => {
    setIsOpen(false)
  }

  return (
    <AnimatedModal isOpen={isOpen} onClose={closeModal}>
      {/* Close button */}
      <button
        onClick={closeModal}
        className="absolute top-4 right-4 z-10 w-10 h-10 bg-white/20 hover:bg-white/30 hover:scale-110 rounded-full flex items-center justify-center transition-all duration-300 transform active:scale-95 backdrop-blur-sm"
      >
        <CloseIcon className="w-5 h-5 text-gray-800" />
      </button>

      {/* Header with gradient */}
      <div className="bg-gradient-to-r from-primary-500 to-primary-600 px-8 py-8 text-[#168530] font-extrabold text-center">
        <div>
          <div className="w-24 h-24 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
           <div className='w-full p-2'>
          <Image src="/images/1.png" alt="Veritas Logo" width={600} height={600} className="w-full h-full object-contain" />
           </div>
          </div>
          <h2 className="text-4xl md:text-6xl font-bold mb-2">
            Limited Time Offer!
          </h2>
          <p className="text-black">
            FREE Attic Inspection & Quote
          </p>
        </div>
      </div>

      {/* Content */}
      <div className="px-8 py-6">
        <div>
          <div className="text-center mb-6">
            <h3 className="text-xl font-semibold text-gray-900 mb-2">
              Save Up to 40% on Energy Bills
            </h3>
            <p className="text-gray-600 text-sm leading-relaxed">
              Get a professional assessment of your attic insulation and discover
              how much you could save with our premium R-60+ solutions.
            </p>
          </div>

          {/* Benefits */}
          <div className="grid grid-cols-2 gap-3 mb-6 text-sm justify-center items-center">
            <div className="flex items-center space-x-2">
              <div className="w-2 h-2 bg-green-500 rounded-full"></div>
              <span className="text-gray-700">No obligation</span>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-2 h-2 bg-green-500 rounded-full"></div>
              <span className="text-gray-700">Licensed experts</span>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-2 h-2 bg-green-500 rounded-full"></div>
              <span className="text-gray-700">Weekdays 24hr response</span>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-2 h-2 bg-green-500 rounded-full"></div>
              <span className="text-gray-700">Rebate assistance</span>
            </div>
          </div>

          {submitStatus === 'success' && (
            <div className="bg-green-50 border border-green-200 rounded-lg p-4 mb-6 text-center">
              <p className="text-green-800 font-medium">
                ✓ Success! We'll contact you within 24 hours on weekdays.
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

          {/* Form */}
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

            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-colors text-sm"
              placeholder="Your Name"
            />

            <input
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-colors text-sm"
              placeholder="Phone Number"
            />

            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-colors text-sm"
              placeholder="Email Address"
            />

            <button
              type="submit"
              className="w-full bg-white text-[#168530] border-2 border-[#168530] hover:bg-[#168530] hover:text-white py-4 rounded-2xl font-semibold transition-all duration-300 ease-out transform hover:scale-105 active:scale-95 animate-glow-button disabled:opacity-50 disabled:cursor-not-allowed"
              disabled={isSubmitting}
            >
              {isSubmitting ? 'Sending...' : 'Claim Free Inspection'}
            </button>
          </form>

          {/* Call option */}
          <div className="mt-4 text-center">
            <p className="text-xs text-gray-500 mb-2">Or call us directly:</p>
            <a
              href="tel:6138079255"
              className="text-primary-500 font-semibold hover:underline"
            >
              (613) 807-9255
            </a>
          </div>

          <p className="text-xs text-gray-400 text-center mt-4">
            Limited time offer. No spam, guaranteed.
          </p>
        </div>
      </div>
    </AnimatedModal>
  )
}

export default FreeQuoteModal