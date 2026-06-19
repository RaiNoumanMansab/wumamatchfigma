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
import { MembersPage } from './modules/public/pages/MembersPage.tsx';
import { EventsPage } from './modules/public/pages/EventsPage.tsx';
import { StoriesPage } from './modules/public/pages/StoriesPage.tsx';
import { AboutPage } from './modules/public/pages/AboutPage.tsx';
import { BlogPage } from './modules/public/pages/BlogPage.tsx';
import { BlogDetailPage } from './modules/public/pages/BlogDetailPage.tsx';
import { LoginPage } from './modules/auth/pages/LoginPage.tsx';
import { RegisterPage } from './modules/auth/pages/RegisterPage.tsx';
import { ForgotPasswordPage } from './modules/auth/pages/ForgotPasswordPage.tsx';
import { ContactPage } from './modules/public/pages/ContactPage.tsx';
import { CareersPage } from './modules/public/pages/CareersPage.tsx';
import { CareerDetailPage } from './modules/public/pages/CareerDetailPage.tsx';
import { DashboardLayout } from './modules/dashboard/layouts/DashboardLayout.tsx';
import { FeaturedProfilesPage } from './modules/dashboard/pages/FeaturedProfilesPage.tsx';
import { YourMatchesPage } from './modules/dashboard/pages/YourMatchesPage.tsx';
import { DashboardEventsPage } from './modules/dashboard/pages/DashboardEventsPage.tsx';
import { MembershipPage } from './modules/dashboard/pages/MembershipPage.tsx';
import { ProfilePage } from './modules/dashboard/pages/ProfilePage.tsx';
import { MessagesPage } from './modules/dashboard/pages/MessagesPage.tsx';
import { NotFoundPage } from './modules/public/pages/NotFoundPage.tsx';

// Scroll management helper for React Router
function ScrollToTopOrAnchor() {
  const { pathname } = useLocation();

  useEffect(() => {
    // if (hash) {
    //   console.log("Scrolling to anchor:", hash);
    //   const targetId = hash.replace('#', '');
    //   const element = document.getElementById(targetId);
    //   if (element) {
    //     const timer = setTimeout(() => {
    //       element.scrollIntoView({ behavior: 'smooth' });
    //     }, 80);
    //     return () => clearTimeout(timer);
    //   }
    // } else {
      window.scrollTo(0, 0);
    // }
  }, [pathname]);

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
  const location = useLocation();
  const hideHeaderFooter = ['/login', '/register', '/forgot-password'].includes(location.pathname) || location.pathname.startsWith('/profile');

  return (
    <div className="flex flex-col min-h-screen">
      {/* Scroll restoration & anchoring */}
      <ScrollToTopOrAnchor />

      {/* Premium Header/Navbar */}
      {!hideHeaderFooter && <Navbar />}

      {/* Main Sections / Dedicated Views */}
      <main className={`flex-grow flex flex-col ${location.pathname.startsWith('/profile') ? 'bg-[#F2F2EE]' : 'bg-brand-cream'}`}>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/members" element={<MembersPage />} />
          <Route path="/events" element={<EventsPage />} />
          <Route path="/stories" element={<StoriesPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/blog" element={<BlogPage />} />
          <Route path="/blog/:id" element={<BlogDetailPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/forgot-password" element={<ForgotPasswordPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/careers" element={<CareersPage />} />
          <Route path="/careers/:id" element={<CareerDetailPage />} />
          
          {/* Dashboard Routes */}
          <Route path="/profile" element={<DashboardLayout />}>
            <Route index element={<ProfilePage />} />
            <Route path="featured" element={<FeaturedProfilesPage />} />
            <Route path="matches" element={<YourMatchesPage />} />
            <Route path="events" element={<DashboardEventsPage />} />
            <Route path="messages" element={<MessagesPage />} />
            <Route path="membership" element={<MembershipPage />} />
            {/* Add other dashboard routes here as they are built */}
          </Route>

          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </main>

      {/* Premium Footer */}
      {!hideHeaderFooter && <Footer />}
    </div>
  );
}

export default App;