import Navigation from '@/components/ui/Navigation'
import FreeQuoteModal from '@/components/ui/AnimatedModal'
import Hero from '@/components/sections/Hero'
import HowItWorks from '@/components/sections/HowItWorks'
import Features from '@/components/sections/Features'
import Mission from '@/components/sections/Mission'
import Pricing from '@/components/sections/Pricing'
import Testimonials from '@/components/sections/Testimonials'
import FAQ from '@/components/sections/FAQ'
import { Contact } from '@/components/sections/Contact'
import Footer from '@/components/sections/Footer'

export default function Home() {
  return (
    <>
      <Navigation />
      <FreeQuoteModal />
      <main>
        <Hero />
        {/* <Certifications /> */}
        <Testimonials />
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
