import Navigation from '@/components/ui/Navigation'
import FreeQuoteModal from '@/components/ui/AnimatedModal'
import Hero from '@/components/sections/Hero'
import HowItWorks from '@/components/sections/HowItWorks'
import Features from '@/components/sections/Features'
import Mission from '@/components/sections/Mission'
import Pricing from '@/components/sections/Pricing'
import Testimonials from '@/components/sections/Testimonials'
import FAQ from '@/components/sections/FAQ'
import Contact from '@/components/sections/Contact'
import Footer from '@/components/sections/Footer'
import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'

// Function to get all testimonials from content/testimonials
function getTestimonials() {
  const testimonialsDirectory = path.join(process.cwd(), 'content/testimonials')

  // Check if directory exists
  if (!fs.existsSync(testimonialsDirectory)) {
    return []
  }

  const fileNames = fs.readdirSync(testimonialsDirectory)

  const testimonials = fileNames
    .filter(fileName => fileName.endsWith('.md'))
    .map((fileName) => {
      const fullPath = path.join(testimonialsDirectory, fileName)
      const fileContents = fs.readFileSync(fullPath, 'utf8')
      const { data } = matter(fileContents)

      return {
        name: data.name,
        location: data.location,
        quote: data.quote,
        metric: data.metric,
        rating: data.rating,
        order: data.order || 999,
        featured: data.featured || false,
      }
    })
    .sort((a, b) => a.order - b.order) // Sort by order field

  return testimonials
}

export default function Home() {
  const testimonials = getTestimonials()

  return (
    <>
      <Navigation />
      <FreeQuoteModal />
      <main>
        <Hero />
        {/* <Certifications /> */}
        <Testimonials testimonials={testimonials} />
        <HowItWorks />
        <Features />
        <Mission />
        <Pricing />
        <FAQ />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
