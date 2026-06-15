import { useEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import { Navbar } from './components/layout/Navbar.tsx';
import { HeroSection } from './components/sections/HeroSection.tsx';
import { FeaturedSection } from './components/sections/FeaturedSection.tsx';
import { StatsBanner } from './components/sections/StatsBanner.tsx';
import { ProcessSection } from './components/sections/ProcessSection.tsx';
import { WhyWuMaSection } from './components/sections/WhyWuMaSection.tsx';
import { MembersSection } from './components/sections/MembersSection.tsx';
import { TestimonialsSection } from './components/sections/TestimonialsSection.tsx';
import { FAQSection } from './components/sections/FAQSection.tsx';
import { CTASection } from './components/sections/CTASection.tsx';
import { Footer } from './components/layout/Footer.tsx';
import { MembersPage } from './components/pages/MembersPage.tsx';
import { EventsPage } from './components/pages/EventsPage.tsx';
import { StoriesPage } from './components/pages/StoriesPage.tsx';
import { AboutPage } from './components/pages/AboutPage.tsx';
import { BlogPage } from './components/pages/BlogPage.tsx';

// Scroll management helper for React Router
function ScrollToTopOrAnchor() {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    if (hash) {
      const targetId = hash.replace('#', '');
      const element = document.getElementById(targetId);
      if (element) {
        const timer = setTimeout(() => {
          element.scrollIntoView({ behavior: 'smooth' });
        }, 80);
        return () => clearTimeout(timer);
      }
    } else {
      window.scrollTo(0, 0);
    }
  }, [pathname, hash]);

  return null;
}

function HomePage() {
  return (
    <>
      <HeroSection />
      <FeaturedSection />
      <StatsBanner />
      <MembersSection />
      <ProcessSection />
      <WhyWuMaSection />
      <TestimonialsSection />
      <FAQSection />
      <CTASection />
    </>
  );
}

function App() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Scroll restoration & anchoring */}
      <ScrollToTopOrAnchor />

      {/* Premium Header/Navbar */}
      <Navbar />

      {/* Main Sections / Dedicated Views */}
      <main className="flex-grow bg-brand-cream">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/members" element={<MembersPage />} />
          <Route path="/events" element={<EventsPage />} />
          <Route path="/stories" element={<StoriesPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/blog" element={<BlogPage />} />
        </Routes>
      </main>

      {/* Premium Footer */}
      <Footer />
    </div>
  );
}

export default App;