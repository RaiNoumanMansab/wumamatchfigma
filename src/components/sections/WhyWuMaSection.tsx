import React from 'react';
import { Sparkles } from 'lucide-react';

export const WhyWuMaSection: React.FC = () => {
  return (
    <section id="about" className="bg-[#071415] py-16 px-6 sm:px-8 lg:px-12 relative overflow-hidden">
      {/* Background radial glow */}
      <div className="absolute inset-0 bg-radial-teal opacity-30 mix-blend-screen pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-start">
          
          {/* Left Column - Heading */}
          <div className="lg:col-span-5">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-light text-white leading-tight font-serif">
              The WuMa-Match Difference: Beyond Algorithms
            </h2>
          </div>

          {/* Right Column - Body copy & button */}
          <div className="lg:col-span-7 flex flex-col space-y-6 text-zinc-300 font-light text-sm sm:text-base leading-relaxed">
            <p>
              At WuMa-Match, we value human connection. Our matchmakers combine psychology, intuition, and a vast global network to create truly compatible connections, moving beyond superficial swiping.
            </p>
            <p>
              We believe in a tailored approach, recognizing that every individual's journey to find a partner is unique. We work closely with you to understand your values, aspirations, and lifestyle, ensuring every match is intentional and deeply considered.
            </p>
            <p>
              From the initial consultation to guided introductions, we support you every step of the way. Our commitment is to foster meaningful, long-term relationships built on genuine compatibility, shared values, and mutual respect.
            </p>
            
            <div className="pt-4">
              <a
                href="#cta"
                className="inline-flex items-center gap-2.5 px-6 py-3 rounded-full text-xs font-bold tracking-[0.25em] uppercase text-white bg-[#0F8A96] hover:bg-[#0D7984] transition-all duration-300 shadow-glow-teal hover:shadow-[0_0_25px_rgba(15,138,150,0.5)] self-start"
              >
                <Sparkles className="w-3.5 h-3.5 text-[#D4A853]" />
                Book A Consultation
              </a>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
