import { useState } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Services from './components/Services'
import WhySpooker from './components/WhySpooker'
import HowItWorks from './components/HowItWorks'
import Contact from './components/Contact'
import Footer from './components/Footer'
import PrivacyPolicy from './components/PrivacyPolicy'
import TermsOfUse from './components/TermsOfUse'

export default function App() {
  const [page, setPage] = useState('home')

  if (page === 'privacy') return <PrivacyPolicy onBack={() => setPage('home')} />
  if (page === 'terms')   return <TermsOfUse   onBack={() => setPage('home')} />

  return (
    <div className="min-h-screen bg-brand-bg">
      <Navbar />
      <main>
        <Hero />

        {/* Separador Hero → Serviços */}
        <div className="relative flex justify-center items-center py-1">
          <div className="absolute inset-x-0 h-[2px] bg-gradient-to-r from-transparent via-white/15 to-transparent" />
          <div className="absolute inset-x-0 h-[2px] bg-gradient-to-r from-transparent via-brand-primary/60 to-transparent" />
          <div className="absolute left-1/2 -translate-x-1/2 w-48 h-[3px] bg-gradient-to-r from-transparent via-brand-primary to-transparent blur-md opacity-80" />
        </div>

        <Services />
        <WhySpooker />
        <HowItWorks />
        <Contact />
      </main>
      <Footer onNav={setPage} />
    </div>
  )
}
