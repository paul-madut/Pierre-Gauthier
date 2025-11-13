'use client'

import Image from 'next/image'
import { BentoGrid, BentoGridItem } from '../ui/BentoGrid'
import { CheckIcon, ShieldIcon, ClockIcon, DollarSignIcon, AwardIcon, CalculatorIcon } from '../ui/Icons'

const WhyChooseVeritas = () => {
  const features = [
    {
      title: 'Free, No-Obligation Assessment',
      description: 'Get a comprehensive evaluation of your insulation needs without any pressure or commitment.',
      icon: <CheckIcon className="w-6 h-6 text-[#60a5fa]" />,
      className: 'md:col-span-1',
      header: (
        <div className="flex flex-1 w-full h-full min-h-[6rem] rounded-xl bg-white overflow-hidden relative">
          <Image
            src="https://images.unsplash.com/photo-1581578731548-c64695cc6952?w=400&h=300&fit=crop"
            alt="Professional assessment"
            fill
            className="object-cover opacity-20"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-[#82caff]/10 to-[#60a5fa]/5" />
        </div>
      ),
    },
    {
      title: 'Same-Day Quotes Available',
      description: 'Fast turnaround on estimates so you can make informed decisions quickly.',
      icon: <ClockIcon className="w-6 h-6 text-[#60a5fa]" />,
      className: 'md:col-span-1',
      header: (
        <div className="flex flex-1 w-full h-full min-h-[6rem] rounded-xl bg-white overflow-hidden relative">
          <Image
            src="https://images.unsplash.com/photo-1434030216411-0b793f4b4173?w=400&h=300&fit=crop"
            alt="Fast quotes"
            fill
            className="object-cover opacity-20"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-[#82caff]/10 to-[#60a5fa]/5" />
        </div>
      ),
    },
    {
      title: 'Licensed & Insured Technicians',
      description: 'Work with fully certified professionals who meet industry standards and safety requirements.',
      icon: <ShieldIcon className="w-6 h-6 text-[#60a5fa]" />,
      className: 'md:col-span-1',
      header: (
        <div className="flex flex-1 w-full h-full min-h-[6rem] rounded-xl bg-white overflow-hidden relative">
          <Image
            src="https://images.unsplash.com/photo-1621905251918-48416bd8575a?w=400&h=300&fit=crop"
            alt="Licensed technicians"
            fill
            className="object-cover opacity-20"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-[#82caff]/10 to-[#60a5fa]/5" />
        </div>
      ),
    },
    {
      title: 'Transparent, Upfront Pricing',
      description: 'Clear, detailed quotes with no hidden fees or surprise charges. What we quote is what you pay.',
      icon: <DollarSignIcon className="w-6 h-6 text-[#60a5fa]" />,
      className: 'md:col-span-2',
      header: (
        <div className="flex flex-1 w-full h-full min-h-[6rem] rounded-xl bg-white overflow-hidden relative">
          <Image
            src="https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?w=800&h=300&fit=crop"
            alt="Transparent pricing"
            fill
            className="object-cover opacity-20"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-[#82caff]/10 to-[#60a5fa]/5" />
          <div className="absolute bottom-0 right-0 w-24 h-24 bg-[#82caff]/5 rounded-tl-full" />
        </div>
      ),
    },
    {
      title: 'Rebate Assistance Included',
      description: 'We help you navigate and claim all available government and utility rebates to maximize your savings.',
      icon: <CalculatorIcon className="w-6 h-6 text-[#60a5fa]" />,
      className: 'md:col-span-2',
      header: (
        <div className="flex flex-1 w-full h-full min-h-[6rem] rounded-xl bg-white overflow-hidden relative">
          <Image
            src="https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=800&h=300&fit=crop"
            alt="Rebate assistance and savings"
            fill
            className="object-cover opacity-20"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-[#82caff]/10 to-[#60a5fa]/5" />
          <div className="absolute top-0 left-0 w-32 h-32 bg-[#82caff]/5 rounded-br-full" />
        </div>
      ),
    },
  ]

  return (
    <section className="section-padding bg-gradient-to-br from-gray-50 to-white">
      <div className="max-w-[1400px] mx-auto container-padding">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-light text-gray-900 mb-6 tracking-tight">
            Why Ottawa Families Choose{' '}
            <span className="text-primary-500 font-medium">Veritas</span>
          </h2>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
            Experience the difference of working with a trusted insulation partner
          </p>
        </div>

        <BentoGrid className="max-w-6xl mx-auto">
          {features.map((feature, i) => (
            <BentoGridItem
              key={i}
              title={feature.title}
              description={feature.description}
              header={feature.header}
              icon={feature.icon}
              className={feature.className}
            />
          ))}
        </BentoGrid>
      </div>
    </section>
  )
}

export default WhyChooseVeritas
