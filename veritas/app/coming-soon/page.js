import Image from "next/image";

export default function Home() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-900">
      {/* Background Image */}
      <div className="absolute inset-0 z-0 bg-gradient-to-br from-gray-50 to-gray-100">
        {/* Image will be loaded here when available */}
        <Image src="/hero/hero.jpg" alt="Background" fill style={{ objectFit: "cover" }} />
        <div className="absolute inset-0 bg-black/80" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-4xl mx-auto px-4 text-center">
        {/* Logo/Brand */}
        <h1 className="text-6xl md:text-8xl font-bold text-white mb-8 tracking-tight">
          Veritas Insulation
        </h1>

        {/* Coming Soon Message */}
        <h2 className="text-2xl md:text-3xl font-light text-gray-200 mb-4">
          Coming Soon
        </h2>

        <p className="text-lg text-gray-300 mb-12 max-w-2xl mx-auto">
          Professional insulation services for residential and commercial properties.
          Quality workmanship, reliable service, and competitive pricing.
        </p>

        {/* Contact Information */}
        <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-8 shadow-lg max-w-2xl mx-auto">
          <h3 className="text-xl font-semibold text-gray-900 mb-6">
            Contact Information
          </h3>

          <div className="grid md:grid-cols-2 gap-6 text-left">
            {/* Phone */}
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-primary-100 rounded-full flex items-center justify-center">
                <svg className="w-5 h-5 text-primary-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
              </div>
              <div>
                <p className="text-sm text-gray-500">Phone</p>
                <p className="font-medium text-gray-900">(613) 807-9255</p>
              </div>
            </div>

            {/* Email */}
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center">
                <svg className="w-5 h-5 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <div>
                <p className="text-sm text-gray-500">Email</p>
                <p className="font-medium text-gray-900">Pieere@veritasinsulation.com</p>
              </div>
            </div>

            {/* Address */}
            <div className="flex items-center space-x-3 md:col-span-2">
              <div className="w-10 h-10 bg-purple-100 rounded-full flex items-center justify-center">
                <svg className="w-5 h-5 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <div>
                <p className="text-sm text-gray-500">Service Area</p>
                <p className="font-medium text-gray-900">Ottawa, Ontario</p>
              </div>
            </div>
          </div>

          {/* CTA */}
          <div className="mt-8 pt-6 border-t border-gray-200">
            <p className="text-sm text-gray-600 mb-4">
              Get a free estimate for your insulation project
            </p>
            <a
              href="tel:6138079255"
              className="inline-flex items-center px-6 py-3 bg-primary-500 text-white font-medium rounded-lg hover:bg-primary-600 transition-colors"
            >
              Call Now for Free Quote
            </a>
          </div>
        </div>

        {/* Footer */}
        <p className="mt-8 text-sm text-gray-400">
          © 2025 Veritas Insulation. Professional insulation services.
        </p>
      </div>
    </div>
  );
}
