import { useState, useEffect } from 'react';
import { Navbar } from './components/layout/Navbar.tsx';
import { HeroSection } from './components/sections/HeroSection.tsx';
import { FeaturedSection } from './components/sections/FeaturedSection.tsx';
import { StatsBanner } from './components/sections/StatsBanner.tsx';
import { ProcessSection } from './components/sections/ProcessSection.tsx';
import { WhyWuMaSection } from './components/sections/WhyWuMaSection.tsx';
import { TestimonialsSection } from './components/sections/TestimonialsSection.tsx';
import { FAQSection } from './components/sections/FAQSection.tsx';
import { CTASection } from './components/sections/CTASection.tsx';
import { Footer } from './components/layout/Footer.tsx';
import { MembersPage } from './components/pages/MembersPage.tsx';
import { EventsPage } from './components/pages/EventsPage.tsx';
import { StoriesPage } from './components/pages/StoriesPage.tsx';
import { AboutPage } from './components/pages/AboutPage.tsx';
import { BlogPage } from './components/pages/BlogPage.tsx';

function App() {
  const [currentView, setCurrentView] = useState<'home' | 'members' | 'events' | 'stories' | 'about' | 'blog'>(() => {
    const path = window.location.pathname.replace(/\/$/, '');
    if (path === '/members') return 'members';
    if (path === '/events') return 'events';
    if (path === '/stories') return 'stories';
    if (path === '/about') return 'about';
    if (path === '/blog') return 'blog';
    return 'home';
  });

  useEffect(() => {
    const handleLocationChange = () => {
      const path = window.location.pathname.replace(/\/$/, '');
      if (path === '/members') {
        setCurrentView('members');
        window.scrollTo(0, 0);
      } else if (path === '/events') {
        setCurrentView('events');
        window.scrollTo(0, 0);
      } else if (path === '/stories') {
        setCurrentView('stories');
        window.scrollTo(0, 0);
      } else if (path === '/about') {
        setCurrentView('about');
        window.scrollTo(0, 0);
      } else if (path === '/blog') {
        setCurrentView('blog');
        window.scrollTo(0, 0);
      } else {
        setCurrentView('home');
      }
    };
    window.addEventListener('popstate', handleLocationChange);
    return () => window.removeEventListener('popstate', handleLocationChange);
  }, []);

  useEffect(() => {
    if (currentView === 'home' && window.location.hash && window.location.hash !== '#/') {
      const targetId = window.location.hash.replace('#', '');
      const element = document.getElementById(targetId);
      if (element) {
        setTimeout(() => {
          element.scrollIntoView({ behavior: 'smooth' });
        }, 80);
      }
    }
  }, [currentView]);

  return (
    <div className="flex flex-col min-h-screen">
      {/* Premium Header/Navbar */}
      <Navbar />

      {/* Main Sections / Dedicated Views */}
      <main className="flex-grow bg-brand-cream">
        {currentView === 'members' ? (
          <MembersPage />
        ) : currentView === 'events' ? (
          <EventsPage />
        ) : currentView === 'stories' ? (
          <StoriesPage />
        ) : currentView === 'about' ? (
          <AboutPage />
        ) : currentView === 'blog' ? (
          <BlogPage />
        ) : (
          <>
            <HeroSection />
            <FeaturedSection />
            <StatsBanner />
            <ProcessSection />
            <WhyWuMaSection />
            <TestimonialsSection />
            <FAQSection />
            <CTASection />
          </>
        )}
      </main>

      {/* Premium Footer */}
      <Footer />
    </div>
  );
}

export default App;

