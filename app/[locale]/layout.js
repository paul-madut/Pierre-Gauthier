import { NextIntlClientProvider } from 'next-intl'
import { getMessages } from 'next-intl/server'
import { notFound } from 'next/navigation'
import { locales } from '../../i18n'
import StickyBanner from '../../components/ui/StickyBanner'

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }))
}

export async function generateMetadata({ params }) {
  const { locale } = await params

  const titles = {
    en: 'Veritas Insulation - Premium Attic Insulation Services Ottawa',
    fr: 'Veritas Isolation - Services d\'Isolation de Grenier Premium à Ottawa'
  }

  const descriptions = {
    en: 'Professional attic insulation services in Ottawa. Save 25-40% on energy bills with premium insulation materials. Free quotes, lifetime warranty, rebate assistance.',
    fr: 'Services professionnels d\'isolation de grenier à Ottawa. Économisez 25-40% sur vos factures d\'énergie avec des matériaux d\'isolation premium. Devis gratuits, garantie à vie, aide aux rabais.'
  }

  return {
    title: titles[locale] || titles.en,
    description: descriptions[locale] || descriptions.en,
    keywords: locale === 'fr'
      ? 'isolation grenier Ottawa, entreprise isolation Ottawa, économies énergie, isolation valeur R, isolation soufflée, scellage air'
      : 'attic insulation Ottawa, insulation company Ottawa, energy savings, R-value insulation, blown-in insulation, air sealing',
    author: 'Veritas Insulation',
    robots: 'index, follow'
  }
}

export const viewport = {
  width: 'device-width',
  initialScale: 1,
}

export default async function LocaleLayout({ children, params }) {
  const { locale } = await params

  // Validate locale
  if (!locales.includes(locale)) {
    notFound()
  }

  // Fetch messages for the current locale
  const messages = await getMessages()

  return (
    <NextIntlClientProvider messages={messages}>
      {children}
      <StickyBanner />
    </NextIntlClientProvider>
  )
}
