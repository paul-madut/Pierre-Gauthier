'use client'

import Image from 'next/image'
import { Card, CardContent } from '../ui/Card'
import Card3D from '../ui/Card3D'
import { EyeIcon, ToolsIcon, WarrantyIcon } from '../ui/Icons'

const HowItWorks = () => {
  const steps = [
    {
      step: '01',
      title: 'Free Home Assessment',
      description: 'Our certified technicians inspect your attic and recommend the optimal R-value for maximum energy efficiency.',
      benefit: 'Personalized solution for your specific home',
      icon: EyeIcon,
      image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&h=400&fit=crop',
      alt: 'Technician inspecting attic insulation'
    },
    {
      step: '02',
      title: 'Professional Installation',
      description: 'Fast, clean installation by our certified crew using industry-leading materials and mess-controlled techniques.',
      benefit: 'Minimal disruption to your daily routine',
      icon: ToolsIcon,
      image: 'https://images.unsplash.com/photo-1581092921461-eab62e97a780?w=600&h=400&fit=crop',
      alt: 'Professional insulation installation in progress'
    },
    {
      step: '03',
      title: 'Energy Savings & Warranty',
      description: 'Performance verification and comprehensive warranty ensuring your comfort and savings for years to come.',
      benefit: 'Guaranteed results with lifetime warranty',
      icon: WarrantyIcon,
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=400&fit=crop',
      alt: 'Energy meter showing reduced consumption'
    }
  ]

  return (
    <section id="how-it-works" className="section-padding bg-white">
      <div className="max-w-7xl mx-auto container-padding">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-light text-gray-900 mb-6 tracking-tight">
            How It Works
          </h2>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
            Our proven 3-step process ensures professional results and lasting comfort
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <div
              key={step.step}
              className="animate-fade-in-up"
              style={{ animationDelay: `${index * 200}ms` }}
            >
              <Card3D className="h-full">
                <div className="p-8">
                  {/* Step number */}
                  <div className="flex items-center justify-center w-16 h-16 bg-primary-100 rounded-full mb-6 group-hover:bg-primary-200 transition-colors">
                    <span className="text-2xl font-bold text-primary-500">
                      {step.step}
                    </span>
                  </div>

                  {/* Icon */}
                  <div className="flex items-center justify-center w-12 h-12 bg-gray-100 rounded-lg mb-6">
                    <step.icon className="w-6 h-6 text-gray-600" />
                  </div>

                  {/* Content */}
                  <h3 className="text-2xl font-semibold text-gray-900 mb-4">
                    {step.title}
                  </h3>

                  <p className="text-gray-700 mb-4 leading-relaxed">
                    {step.description}
                  </p>

                  {/* Benefit */}
                  <div className="bg-green-50 rounded-lg p-4 mb-6">
                    <p className="text-green-800 font-medium text-sm">
                      ✓ {step.benefit}
                    </p>
                  </div>

                  {/* Image */}
                  <div className="relative h-48 rounded-xl overflow-hidden">
                    <Image
                      src={step.image}
                      alt={step.alt}
                      fill
                      style={{ objectFit: 'cover' }}
                      className="group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                </div>
              </Card3D>
            </div>
          ))}
        </div>

        {/* Process timeline */}
        <div className="mt-16 relative">
          <div className="absolute top-1/2 left-0 right-0 h-0.5 bg-gray-200 hidden lg:block"></div>
          <div className="flex justify-between relative z-10">
            {steps.map((step, index) => (
              <div key={step.step} className="hidden lg:flex flex-col items-center">
                <div className="w-12 h-12 bg-primary-500 rounded-full flex items-center justify-center mb-4">
                  <span className="text-white font-bold">{index + 1}</span>
                </div>
                <span className="text-sm font-medium text-gray-600 text-center">
                  {step.title}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default HowItWorks