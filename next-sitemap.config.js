/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: process.env.NEXT_PUBLIC_SITE_URL || 'https://yourdomain.com',
  generateRobotsTxt: true,
  generateIndexSitemap: false,
  // Exclude admin routes and API routes
  exclude: ['/admin/*', '/api/*', '/*/admin/*', '/*/api/*', '/coming-soon', '/en/coming-soon', '/fr/coming-soon'],
  robotsTxtOptions: {
    policies: [
      {
        userAgent: '*',
        allow: '/',
      },
    ],
    additionalSitemaps: [
      `${process.env.NEXT_PUBLIC_SITE_URL || 'https://yourdomain.com'}/sitemap.xml`,
    ],
  },
  additionalPaths: async (config) => {
    const routes = ['/', '/about', '/contact', '/blog']
    const locales = ['en', 'fr']
    const result = []

    // Generate paths for all locales
    locales.forEach((locale) => {
      routes.forEach((route) => {
        const path = locale === 'en' ? route : `/${locale}${route}`
        let priority = 0.7
        let changefreq = 'monthly'

        if (route === '/') {
          priority = 1.0
          changefreq = 'daily'
        } else if (route === '/blog') {
          priority = 0.8
          changefreq = 'weekly'
        } else if (route === '/contact') {
          priority = 0.9
          changefreq = 'monthly'
        } else if (route === '/about') {
          priority = 0.8
          changefreq = 'monthly'
        }

        result.push({
          loc: path,
          changefreq,
          priority,
          lastmod: new Date().toISOString(),
        })
      })
    })

    return result
  },
}
