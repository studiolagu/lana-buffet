import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { AboutGallery } from './components/AboutGallery';
import { Services } from './components/Services';
import { MenuShowcase } from './components/MenuShowcase';
import { Reviews } from './components/Reviews';
import { QuoteSimulator } from './components/QuoteSimulator';
import { LocationFooter } from './components/LocationFooter';

export function App() {
  return (
    <div className="min-h-screen bg-[#0F1110] text-[#F5F3EF]">
      <Navbar />
      <main>
        <Hero />
        <AboutGallery />
        <Services />
        <MenuShowcase />
        <Reviews />
        <QuoteSimulator />
      </main>
      <LocationFooter />
    </div>
  );
}

export default App;
