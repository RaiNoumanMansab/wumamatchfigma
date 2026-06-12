// import { Navbar } from './components/layout/Navbar.tsx';
// import { HeroSection } from './components/sections/HeroSection.tsx';
// import { FeaturedSection } from './components/sections/FeaturedSection.tsx';
// import { StatsBanner } from './components/sections/StatsBanner.tsx';
// import { MembersSection } from './components/sections/MembersSection.tsx';
// import { ProcessSection } from './components/sections/ProcessSection.tsx';
// import { WhyWuMaSection } from './components/sections/WhyWuMaSection.tsx';
// import { TestimonialsSection } from './components/sections/TestimonialsSection.tsx';
// import { FAQSection } from './components/sections/FAQSection.tsx';
// import { CTASection } from './components/sections/CTASection.tsx';
// import { Footer } from './components/layout/Footer.tsx';

// function App() {
//   return (
//     <div className="flex flex-col min-h-screen">
//       {/* Premium Header/Navbar */}
//       <Navbar />

//       {/* Main Sections */}
//       <main className="flex-grow bg-brand-cream">
//         <HeroSection />
//         <FeaturedSection />
//         <StatsBanner />
//         <MembersSection />
//         <ProcessSection />
//         <WhyWuMaSection />
//         <TestimonialsSection />
//         <FAQSection />
//         <CTASection />
//       </main>

//       {/* Premium Footer */}
//       <Footer />
//     </div>
//   );
// }

// export default App;




import { lazy, Suspense } from "react";

import { Navbar } from "./components/layout/Navbar.tsx";
import { HeroSection } from "./components/sections/HeroSection.tsx";
import { FeaturedSection } from "./components/sections/FeaturedSection.tsx";
import { StatsBanner } from "./components/sections/StatsBanner.tsx";
import { Footer } from "./components/layout/Footer.tsx";

const MembersSection = lazy(() =>
  import("./components/sections/MembersSection.tsx").then((module) => ({
    default: module.MembersSection,
  }))
);

const ProcessSection = lazy(() =>
  import("./components/sections/ProcessSection.tsx").then((module) => ({
    default: module.ProcessSection,
  }))
);

const WhyWuMaSection = lazy(() =>
  import("./components/sections/WhyWuMaSection.tsx").then((module) => ({
    default: module.WhyWuMaSection,
  }))
);

const TestimonialsSection = lazy(() =>
  import("./components/sections/TestimonialsSection.tsx").then((module) => ({
    default: module.TestimonialsSection,
  }))
);

const FAQSection = lazy(() =>
  import("./components/sections/FAQSection.tsx").then((module) => ({
    default: module.FAQSection,
  }))
);

const CTASection = lazy(() =>
  import("./components/sections/CTASection.tsx").then((module) => ({
    default: module.CTASection,
  }))
);

const SectionLoader = () => {
  return (
    <div className="bg-brand-cream py-16">
      <div className="main-container">
        <div className="h-40 animate-pulse rounded-2xl bg-brand-charcoal/5" />
      </div>
    </div>
  );
};

function App() {
  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />

      <main className="flex-grow bg-brand-cream">
        {/* Above the fold / important first paint */}
        <HeroSection />
        <FeaturedSection />
        <StatsBanner />

        {/* Below the fold / lazy loaded */}
        <Suspense fallback={<SectionLoader />}>
          <MembersSection />
          <ProcessSection />
          <WhyWuMaSection />
          <TestimonialsSection />
          <FAQSection />
          <CTASection />
        </Suspense>
      </main>

      <Footer />
    </div>
  );
}

export default App;