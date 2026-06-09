import React from 'react';
import { ArrowDownRight } from 'lucide-react';
import coupleImg from '../../assets/couple.jpg';

export const HeroSection: React.FC = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-end justify-center overflow-hidden bg-[#FAF7F2] pb-6 pt-28">
      
      {/* Background Image - Full bleed, natural colors, sharp visibility */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        {/* Base sharp image */}
        <img
          src={coupleImg}
          alt="WuMa Matchmaking"
          className="w-full h-full object-cover object-[center_32%] opacity-100"
        />
        
        {/* Blurred image clone with gradient mask for a seamless transition */}
        <img
          src={coupleImg}
          alt="WuMa Matchmaking Blurred"
          className="absolute inset-0 w-full h-full object-cover object-[center_32%] filter blur-[8px] scale-[1.02] pointer-events-none select-none"
          style={{
            WebkitMaskImage: 'linear-gradient(to top, rgba(0, 0, 0, 1) 0%, rgba(0, 0, 0, 1) 35%, rgba(0, 0, 0, 0) 75%)',
            maskImage: 'linear-gradient(to top, rgba(0, 0, 0, 1) 0%, rgba(0, 0, 0, 1) 35%, rgba(0, 0, 0, 0) 75%)',
          }}
        />

        {/* Soft dark overlays restricted to bottom-left to maintain natural photo colors while keeping white text legible */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/40 via-black/10 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
      </div>

      {/* Hero Content Container - Pushed to the bottom */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 pt-12 pb-6 flex flex-col justify-end min-h-[calc(100vh-120px)]">
        
        {/* Description Text on top */}
        <div className="max-w-xl mb-6 text-left">
          <p className="text-sm sm:text-base text-zinc-200/90 font-sans leading-relaxed drop-shadow-sm">
            WuMa is an exclusive platform dedicated to serious, marriage-oriented individuals. No swiping. No casual interactions. Only verified profiles and structured introductions.
          </p>
        </div>

        {/* Row with Heading on left, Buttons on right */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 w-full">
          <div className="max-w-2xl text-left">
            <h1 className="font-serif font-normal text-white text-3xl sm:text-4xl md:text-5xl lg:text-6xl leading-tight drop-shadow-md">
              Intentional<br />
              connections for a<br />
              lifetime.
            </h1>
          </div>

          <div className="flex flex-wrap items-center justify-start md:justify-end gap-4 shrink-0">
            
            {/* Button 1: Start Your Journey (Dark) */}
            <a href="#cta" className="flex items-stretch gap-[3px] group hover:scale-[1.02] active:scale-[0.98] transition-all duration-300">
              <span className="h-12 bg-gradient-to-b from-[#2E2E30] to-[#1C1C1F] text-white px-6 text-xs sm:text-sm font-medium tracking-wide flex items-center rounded-[14px] shadow-[0_4px_12px_rgba(0,0,0,0.15)] group-hover:from-[#252527] group-hover:to-[#121214] transition-all duration-300">
                Start Your Journey
              </span>
              <span className="h-12 w-12 bg-gradient-to-b from-white to-[#F5F5F7] text-zinc-900 border border-zinc-200/80 flex items-center justify-center rounded-[14px] shadow-[0_4px_12px_rgba(0,0,0,0.08)] group-hover:from-[#F9F9FB] group-hover:to-[#EDEDF0] transition-all duration-300">
                <ArrowDownRight className="w-4 h-4 text-zinc-700 stroke-[2.2]" />
              </span>
            </a>

            {/* Button 2: Learn More (Light) */}
            <a href="#about" className="flex items-stretch gap-[3px] group hover:scale-[1.02] active:scale-[0.98] transition-all duration-300">
              <span className="h-12 bg-gradient-to-b from-white to-[#F5F5F7] text-zinc-900 border border-zinc-200/80 px-6 text-xs sm:text-sm font-medium tracking-wide flex items-center rounded-[14px] shadow-[0_4px_12px_rgba(0,0,0,0.08)] group-hover:from-[#F9F9FB] group-hover:to-[#EDEDF0] transition-all duration-300">
                Learn More
              </span>
              <span className="h-12 w-12 bg-gradient-to-b from-[#2E2E30] to-[#1C1C1F] text-white flex items-center justify-center rounded-[14px] shadow-[0_4px_12px_rgba(0,0,0,0.15)] group-hover:from-[#252527] group-hover:to-[#121214] transition-all duration-300">
                <ArrowDownRight className="w-4 h-4 text-zinc-300 stroke-[2.2]" />
              </span>
            </a>

          </div>
        </div>

      </div>
      
    </section>
  );
};
