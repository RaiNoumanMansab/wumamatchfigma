import { useState } from 'react';
import { Plus, Minus } from 'lucide-react';

export const FAQSection: React.FC = () => {
  const [openIdx, setOpenIdx] = useState<number | null>(null);

  const faqs = [
    {
      q: 'What makes WuMa–Match different from dating apps?',
      a: 'We reject algorithmic swiping and public profile databases. Our approach is entirely human-curated. We match members based on deep compatibility assessment, psychological interviews, and manual alignment by seasoned matchmakers.',
    },
    {
      q: 'How does the matchmaking process work?',
      a: 'It begins with an in-depth, private consultation where we align on your life goals, lifestyle, and values. Next, we search our exclusive network to select suitable profiles, verify their status, and introduce you only after mutual authorization.',
    },
    {
      q: 'What kind of commitment is required?',
      a: 'We work with serious, relationship-minded individuals. Members are expected to be responsive, honest, and respectful throughout the screening and introduction phases to ensure a premium experience for all parties.',
    },
    {
      q: 'Is my privacy protected?',
      a: 'Yes, privacy is our highest mandate. There are no public galleries, search results, or profile databases. Your details and photographs are stored securely and are only visible to specific candidates whom you personally approve for a potential introduction.',
    },
  ];

  const toggle = (idx: number) => {
    setOpenIdx(openIdx === idx ? null : idx);
  };

  return (
    <section id="faq" className="bg-[#FAF7F2] py-20 px-6 sm:px-8 lg:px-12 relative overflow-hidden">
      <div className="max-w-7xl mx-auto relative z-10">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          
          {/* Left Column: Heading and Subtitle (Aligned Higher) */}
          <div className="lg:col-span-5 text-left self-start lg:pt-2 lg:border-r lg:border-zinc-300/80 lg:pr-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-light text-[#053C42] mb-4 font-serif leading-tight">
              Common Questions
            </h2>
            <p className="text-zinc-600 text-xs sm:text-sm md:text-base font-light leading-relaxed max-w-md">
              Everything you need to know about our service, from our unique approach to client privacy.
            </p>
          </div>

          {/* Right Column: Accordions */}
          <div className="lg:col-span-7 space-y-4">
            {faqs.map((faq, idx) => {
              const isOpen = openIdx === idx;
              return (
                <div
                  key={idx}
                  className="bg-white rounded-2xl border border-[#0F8A96]/10 overflow-hidden shadow-soft transition-all duration-300"
                >
                  {/* Trigger button */}
                  <button
                    onClick={() => toggle(idx)}
                    className="w-full px-8 py-6 sm:py-7 flex items-center justify-between gap-6 text-left group"
                  >
                    <span className="font-sans font-semibold text-sm sm:text-base md:text-lg text-[#053C42] group-hover:text-[#0F8A96] transition-colors duration-300">
                      {faq.q}
                    </span>
                    
                    {/* Teal Square-Rounded Icon Button */}
                    <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-[#0F8A96] hover:bg-[#0D7984] text-white flex items-center justify-center shrink-0 shadow-sm transition-all duration-300">
                      {isOpen ? (
                        <Minus className="w-4 h-4 text-white stroke-[2.5]" />
                      ) : (
                        <Plus className="w-4 h-4 text-white stroke-[2.5]" />
                      )}
                    </div>
                  </button>

                  {/* Collapsible Content */}
                  <div
                    className={`transition-all duration-300 ease-in-out overflow-hidden ${
                      isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                    }`}
                  >
                    <div className="px-8 pb-7 pt-5 text-zinc-500 text-sm sm:text-base font-light leading-relaxed border-t border-[#0F8A96]/5">
                      {faq.a}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

        </div>

      </div>
    </section>
  );
};
