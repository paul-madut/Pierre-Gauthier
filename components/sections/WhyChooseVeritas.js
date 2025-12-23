'use client'

import Image from 'next/image'
import { useTranslations } from 'next-intl'
import { BentoGrid, BentoGridItem } from '../ui/BentoGrid'
import { CheckIcon, ShieldIcon, ClockIcon, DollarSignIcon, AwardIcon, CalculatorIcon } from '../ui/Icons'

const WhyChooseVeritas = () => {
  const t = useTranslations('features')

  const features = [
    {
      title: t('freeAssessment'),
      description: t('freeAssessmentDesc'),
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
      title: t('sameDayQuotes'),
      description: t('sameDayQuotesDesc'),
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
      title: t('licensedTechnicians'),
      description: t('licensedTechniciansDesc'),
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
      title: t('transparentPricing'),
      description: t('transparentPricingDesc'),
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
      title: t('rebateAssistance'),
      description: t('rebateAssistanceDesc'),
      icon: <CalculatorIcon className="w-6 h-6 text-[#60a5fa]" />,
      className: 'md:col-span-1',
      header: (
        <div className="flex flex-1 w-full h-full min-h-[6rem] rounded-xl bg-white overflow-hidden relative">
          <Image
            src="https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=400&h=300&fit=crop"
            alt="Rebate assistance and savings"
            fill
            className="object-cover opacity-20"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-[#82caff]/10 to-[#60a5fa]/5" />
        </div>
      ),
    },
  ]

  return (
    <section className="section-padding bg-gradient-to-br from-gray-50 to-white">
      <div className="max-w-[1400px] mx-auto container-padding">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-light text-gray-900 mb-6 tracking-tight">
            {t('whyOttawaChooses')}{' '}
            <span className="text-primary-500 font-medium">{t('veritas')}</span>
          </h2>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
            {t('experienceDifference')}
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
