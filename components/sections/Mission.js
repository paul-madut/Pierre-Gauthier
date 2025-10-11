'use client'

import Image from 'next/image'
import { useTranslations } from 'next-intl'

const Mission = () => {
  const t = useTranslations('mission')
  return (
    <section className="section-padding bg-white">
      <div className="max-w-[1400px] mx-auto container-padding">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <div className="animate-fade-in-up">
            <h2 className="text-4xl md:text-5xl font-light text-gray-900 mb-6 tracking-tight">
              {t('title')}
            </h2>

            <div className="prose prose-lg prose-gray max-w-none">
              <p className="text-xl text-gray-700 leading-relaxed mb-6">
                {t('paragraph1')}
              </p>

              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                {t('paragraph2')}
              </p>

              <p className="text-lg text-gray-700 leading-relaxed mb-8">
                {t('paragraph3')}
              </p>
            </div>

            {/* Values */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="w-12 h-12 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-3">
                  <span className="text-primary-500 font-bold text-lg">T</span>
                </div>
                <h4 className="font-semibold text-gray-900 mb-1">{t('value1Title')}</h4>
                <p className="text-sm text-gray-600">{t('value1Description')}</p>
              </div>

              <div className="text-center">
                <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-3">
                  <span className="text-green-600 font-bold text-lg">Q</span>
                </div>
                <h4 className="font-semibold text-gray-900 mb-1">{t('value2Title')}</h4>
                <p className="text-sm text-gray-600">{t('value2Description')}</p>
              </div>

              <div className="text-center">
                <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-3">
                  <span className="text-purple-600 font-bold text-lg">C</span>
                </div>
                <h4 className="font-semibold text-gray-900 mb-1">{t('value3Title')}</h4>
                <p className="text-sm text-gray-600">{t('value3Description')}</p>
              </div>
            </div>
          </div>

          {/* Image */}
          <div className="animate-fade-in-up animation-delay-400">
            <div className="relative">
              {/* Main image */}
              <div className="relative rounded-3xl overflow-hidden shadow-2xl">
                <Image
                  src="/hero/hero.jpg"
                  alt="Happy family in comfortable, well-insulated home"
                  width={600}
                  height={700}
                  className="w-full h-auto"
                />
              </div>

              {/* Floating stats */}
              <div className="absolute -top-6 -left-6 bg-white rounded-2xl p-6 shadow-xl animate-float">
                <div className="text-center">
                  <div className="text-2xl font-bold text-green-600 mb-1">35%</div>
                  <div className="text-sm text-gray-700">{t('averageSavings')}</div>
                </div>
              </div>

              <div className="absolute -bottom-6 -right-6 bg-white rounded-2xl p-6 shadow-xl animate-float" style={{ animationDelay: '1.5s' }}>
                <div className="text-center">
                  <div className="text-2xl font-bold text-primary-500 mb-1">+100%</div>
                  <div className="text-sm text-gray-700">{t('roi')}</div>
                </div>
              </div>

              {/* Decorative elements */}
              <div className="absolute top-1/4 -right-4 w-24 h-24 bg-primary-100 rounded-full opacity-50 animate-pulse"></div>
              <div className="absolute bottom-1/4 -left-4 w-16 h-16 bg-green-100 rounded-full opacity-50 animate-pulse" style={{ animationDelay: '1s' }}></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Mission