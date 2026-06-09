import { Navbar } from './components/layout/Navbar.tsx';
import { HeroSection } from './components/sections/HeroSection.tsx';
import { StatsBanner } from './components/sections/StatsBanner.tsx';
import { WhyWuMaSection } from './components/sections/WhyWuMaSection.tsx';
import { PrivacySection } from './components/sections/PrivacySection.tsx';
import { ProcessSection } from './components/sections/ProcessSection.tsx';
import { TestimonialsSection } from './components/sections/TestimonialsSection.tsx';
import { FAQSection } from './components/sections/FAQSection.tsx';
import { CTASection } from './components/sections/CTASection.tsx';
import { Footer } from './components/layout/Footer.tsx';

function App() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Premium Header/Navbar */}
      <Navbar />

      {/* Main Sections */}
      <main className="flex-grow">
        <HeroSection />
        <StatsBanner />
        <WhyWuMaSection />
        <PrivacySection />
        <ProcessSection />
        <TestimonialsSection />
        <FAQSection />
        <CTASection />
      </main>

      {/* Premium Footer */}
      <Footer />
    </div>
  );
}

export default App;
