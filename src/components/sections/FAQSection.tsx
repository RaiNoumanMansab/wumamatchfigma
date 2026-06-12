import { useState } from 'react';
import { Plus, Minus } from 'lucide-react';
import { useLocalization } from '../../lib/i18n';

export const FAQSection: React.FC = () => {
  const [openIdx, setOpenIdx] = useState<number | null>(0);
  const { get, t } = useLocalization();
  const faqs = get<Array<{ q: string; a: string }>>('faq.items');

  const toggle = (idx: number) => {
    setOpenIdx(openIdx === idx ? null : idx);
  };

  return (
    <section
      id="faq"
      className="bg-brand-cream py-14 px-6 sm:px-8 lg:px-12 relative overflow-hidden"
    >
      <div className="max-w-7xl mx-auto relative z-10">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          
          {/* Left Column: Heading and Subtitle (Aligned Higher) */}
          <div className="lg:col-span-6 text-left self-start lg:pt-2 lg:border-r lg:border-brand-charcoal/18 lg:pr-20">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-medium text-brand-charcoal mb-4 font-serif leading-tight tracking-tight">
              {t('faq.heading')}
            </h2>
            <p className="text-brand-charcoal/70 text-sm sm:text-base font-light leading-relaxed max-w-md">
              {t('faq.description')}
            </p>
          </div>

          {/* Right Column: Accordions */}
          <div className="lg:col-span-6 space-y-2.5">
            {faqs.map((faq, idx) => {
              const isOpen = openIdx === idx;
              return (
                <div
                  key={idx}
                  className="bg-white rounded-[10px] border border-brand-teal/15 hover:border-brand-teal/30 overflow-hidden shadow-soft hover:shadow-luxury transition-all duration-300"
                >
                  {/* Trigger button */}
                  <button
                    onClick={() => toggle(idx)}
                    className="w-full px-5 sm:px-6 py-3.5 sm:py-4 flex items-center justify-between gap-4 text-left group"
                  >
                    <span className="font-sans font-bold text-sm sm:text-base text-brand-charcoal group-hover:text-brand-teal transition-colors duration-300 [line-height:1.18]">
                      {faq.q}
                    </span>
                    
                    {/* Teal Square-Rounded Icon Button */}
                    <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-[10px] bg-brand-teal group-hover:bg-brand-charcoal text-white flex items-center justify-center shrink-0 shadow-sm transition-all duration-300">
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
                    <div className="px-5 sm:px-6 pb-4 pt-3 text-brand-charcoal/70 text-sm font-light [line-height:1.35] border-t border-brand-teal/10">
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
