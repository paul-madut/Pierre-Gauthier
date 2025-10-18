'use client'

import { useState } from 'react'
import { useTranslations } from 'next-intl'

export default function StickyBanner() {
  const [isVisible, setIsVisible] = useState(true)
  const t = useTranslations('banner')

  if (!isVisible) return null

  return (
    <div className="fixed bottom-0 left-0 right-0 z-30 animate-fade-in-up">
      <div className="bg-gradient-to-r from-[#168D30] to-green-600 text-white">
        <div className="container mx-auto px-4 py-3">
          <div className="flex items-center justify-between gap-4">
            <div className="flex items-center gap-3 flex-1">
              <div className="hidden sm:flex items-center justify-center w-8 h-8 bg-white/20 rounded-full flex-shrink-0">
                <svg
                  className="w-5 h-5 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </div>
              <p className="text-sm md:text-base font-medium">
                {t('message')}
              </p>
            </div>
            <button
              onClick={() => setIsVisible(false)}
              className="flex-shrink-0 p-1 hover:bg-white/20 rounded-full transition-colors duration-200"
              aria-label={t('close')}
            >
              <svg
                className="w-5 h-5 text-white"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
