import Hero from './components/Hero'
import Credentials from './components/Credentials'
import PracticeAreas from './components/PracticeAreas'
import About from './components/About'
import Process from './components/Process'
import FinalCta from './components/FinalCta'
import Faq from './components/Faq'
import Footer from './components/Footer'
import CookieConsent from './components/CookieConsent'
import Header from './components/Header'
import FloatingWhatsapp from './components/FloatingWhatsapp'

function App() {
  return (
    <>
      <a href="#conteudo-principal" className="skip-link">
        Pular para o conteúdo principal
      </a>
      <Header />
      <main id="conteudo-principal">
        <Hero />
        <Credentials />
        <PracticeAreas />
        <About />
        <Process />
        <FinalCta />
        <Faq />
      </main>
      <Footer />
      <FloatingWhatsapp />
      <CookieConsent />
    </>
  )
}

export default App
