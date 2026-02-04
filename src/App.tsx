import FooterSection from './components/FooterSection'
import HeroSection from './components/HeroSection'
import NavbarSection from './components/NavbarSection'
import TaxSection from './components/TaxSection'
import TrustSection from './components/TrustSection'
import ResultSection from './components/ResultSection'
import CommitmentSection from './components/CommitmentSection'

function App() {
  return (
    <div>
      <div className="relative overflow-hidden">
        <div
          className="absolute inset-0 bg-center bg-cover bg-no-repeat pointer-events-none opacity-70"
          style={{ backgroundImage: "url('/Bg.png')", backgroundPosition: "left -150px top -250px" }}
        />
        <NavbarSection />
        <HeroSection />
        <TaxSection />
      </div>
      <TrustSection />
      <ResultSection />
      <CommitmentSection />
      <FooterSection />
    </div>
  )
}

export default App
