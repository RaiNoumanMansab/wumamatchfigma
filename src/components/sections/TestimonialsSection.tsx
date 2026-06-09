import React, { useRef } from 'react';
import { Star, ChevronLeft, ChevronRight } from 'lucide-react';

export const TestimonialsSection: React.FC = () => {
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const testimonials = [
    {
      name: 'Sarah J.',
      role: 'Client',
      brand: 'WuMa-Match',
      bgImg: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=500&q=80',
    },
    {
      name: 'Michael D.',
      role: 'Client',
      brand: 'WuMa-Match',
      bgImg: 'https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?auto=format&fit=crop&w=500&q=80',
    },
    {
      name: 'Emily R.',
      role: 'Client',
      brand: 'WuMa-Match',
      bgImg: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=500&q=80',
    },
    {
      name: 'David K.',
      role: 'Client',
      brand: 'WuMa-Match',
      bgImg: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=500&q=80',
    },
    {
      name: 'Jessica L.',
      role: 'Client',
      brand: 'WuMa-Match',
      bgImg: 'https://images.unsplash.com/photo-1457369804613-52c61a468e7d?auto=format&fit=crop&w=500&q=80',
    },
  ];

  const scroll = (direction: 'left' | 'right') => {
    if (scrollContainerRef.current) {
      const { scrollLeft } = scrollContainerRef.current;
      const scrollAmount = 320; // width of card + gap
      const targetScroll = direction === 'left' ? scrollLeft - scrollAmount : scrollLeft + scrollAmount;
      
      scrollContainerRef.current.scrollTo({
        left: targetScroll,
        behavior: 'smooth',
      });
    }
  };

  return (
    <section id="testimonials" className="bg-[#FAF7F2] pt-16 pb-6 px-6 sm:px-8 lg:px-12 relative overflow-hidden">
      <div className="max-w-7xl mx-auto relative z-10 text-center">
        
        {/* Header */}
        <h2 className="text-3xl sm:text-4xl font-light text-[#053C42] mb-3 font-serif">
          Hear From Our Happy Couples
        </h2>
        <p className="text-zinc-600 text-xs sm:text-sm md:text-base max-w-3xl mx-auto mb-8 font-light">
          Real stories from individuals who found their perfect match and lasting happiness through WuMa-Match.
        </p>

        {/* Horizontal Scrolling Cards Container */}
        <div className="relative w-full">
          {/* Scroll wrapper */}
          <div
            ref={scrollContainerRef}
            className="flex gap-6 overflow-x-auto pb-6 pt-2 px-4 scrollbar-none snap-x snap-mandatory scroll-smooth"
            style={{ WebkitOverflowScrolling: 'touch', scrollbarWidth: 'none' }}
          >
            {testimonials.map((t, idx) => (
              <div
                key={idx}
                className="w-[280px] sm:w-[300px] shrink-0 aspect-[3/4] rounded-[2rem] overflow-hidden border border-[#0F8A96]/10 shadow-soft hover:shadow-luxury transition-all duration-500 relative group snap-start bg-white"
              >
                {/* Card Background Image */}
                <img
                  src={t.bgImg}
                  alt={t.name}
                  className="w-full h-full object-cover filter brightness-95 transition-transform duration-700 group-hover:scale-105"
                />

                {/* Rating & Profile Info Overlay Card at the bottom */}
                <div className="absolute bottom-4 left-4 right-4 bg-white rounded-2xl p-5 border border-[#0F8A96]/5 shadow-lg flex flex-col items-start text-left">
                  {/* Purple Rating Stars */}
                  <div className="flex items-center gap-0.5 mb-3">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-3.5 h-3.5 fill-[#7C3AED] text-[#7C3AED]" />
                    ))}
                  </div>

                  {/* Name */}
                  <h4 className="font-sans font-bold text-sm text-[#053C42] tracking-wide mb-1">
                    {t.name}
                  </h4>

                  {/* Role & Brand Meta */}
                  <div className="flex items-center gap-1.5 text-[10px] tracking-wider text-zinc-400 font-semibold uppercase">
                    <span>{t.role}</span>
                    <span>•</span>
                    <span>{t.brand}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Left/Right scroll indicators aligned to the right (Tighter margin top) */}
          <div className="flex items-center justify-end gap-4 mt-3 px-4 max-w-7xl mx-auto">
            <button
              onClick={() => scroll('left')}
              className="w-11 h-11 rounded-full bg-white hover:bg-[#0F8A96] text-[#053C42] hover:text-white border border-[#0F8A96]/10 flex items-center justify-center shadow-soft hover:shadow-lg transition-all duration-300 group"
              aria-label="Scroll left"
            >
              <ChevronLeft className="w-5 h-5 transition-transform group-hover:-translate-x-0.5" />
            </button>
            <button
              onClick={() => scroll('right')}
              className="w-11 h-11 rounded-full bg-white hover:bg-[#0F8A96] text-[#053C42] hover:text-white border border-[#0F8A96]/10 flex items-center justify-center shadow-soft hover:shadow-lg transition-all duration-300 group"
              aria-label="Scroll right"
            >
              <ChevronRight className="w-5 h-5 transition-transform group-hover:translate-x-0.5" />
            </button>
          </div>
        </div>

      </div>
    </section>
  );
};
