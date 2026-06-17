import React from 'react';
import { ArrowUpRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

interface JobPosition {
  id: string;
  title: string;
  tags: string[];
  description: string;
}

export const CareersPage: React.FC = () => {
  const navigate = useNavigate();

  const positions: JobPosition[] = [
    {
      id: '1',
      title: 'Senior Matchmakers',
      tags: ['United Kingdom', 'Full-time', 'Full-time'],
      description: "Join our team of experienced matchmakers and help individuals build meaningful, lasting relationships. You'll work closely with clients, provide personalized guidance, and support them throughout their journey to finding a compatible life partner in a professional and caring environment."
    },
    {
      id: '2',
      title: 'Senior Matchmakers',
      tags: ['United Kingdom', 'Full-time', 'Full-time'],
      description: "Join our team of experienced matchmakers and help individuals build meaningful, lasting relationships. You'll work closely with clients, provide personalized guidance, and support them throughout their journey to finding a compatible life partner in a professional and caring environment."
    }
  ];

  return (
    <div className="relative z-10 min-h-screen bg-white">
      {/* Top Header Section */}
      <section className="w-full h-[317px] pt-[99px] bg-[#EEEEE9] flex items-center justify-center">
        <div className="section-container w-full">
          <div className="max-w-3xl mx-auto text-center flex flex-col items-center">
            <span className="inline-block mb-4 text-[10px] font-serif font-bold text-[#9B7A5B] uppercase tracking-widest">
              GET IN TOUCH
            </span>
            <h1 className="font-sans text-4xl sm:text-5xl md:text-[56px] font-medium leading-tight tracking-tight text-brand-charcoal mb-4">
              Join WuMa Match
            </h1>
            <p className="text-[14px] sm:text-base font-light text-brand-charcoal/70 leading-relaxed max-w-2xl mx-auto">
              We are building the future of human matchmaking. If you believe in the transformative power of genuine human connection, we would love to hear from you.
            </p>
          </div>
        </div>
      </section>

      {/* Main Content Section */}
      <section className="w-full py-16 sm:py-24 bg-white">
        <div className="section-container">
          <div className="max-w-4xl mx-auto">
            {/* Header */}
            <div className="mb-10">
              <h2 className="font-sans text-2xl sm:text-3xl font-semibold text-brand-charcoal">
                Available Positions ( 1 )
              </h2>
            </div>

            {/* Positions List */}
            <div className="space-y-6">
              {positions.map((job) => (
                <div key={job.id} className="bg-white rounded-2xl border border-brand-charcoal/10 p-6 sm:p-8 hover:shadow-md transition-shadow duration-300">
                  <h3 className="font-sans text-xl font-semibold text-brand-charcoal mb-4">
                    {job.title}
                  </h3>
                  
                  {/* Tags */}
                  <div className="flex flex-wrap gap-2.5 mb-6">
                    {job.tags.map((tag, idx) => (
                      <span 
                        key={idx} 
                        className="px-4 py-1.5 rounded-full border border-brand-charcoal/30 text-[11px] font-medium text-brand-charcoal"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Description */}
                  <p className="text-[13px] sm:text-[14px] font-light text-brand-charcoal/80 leading-relaxed mb-8">
                    {job.description}
                  </p>

                  {/* Action Button */}
                  <div className="flex justify-end">
                    <button
                      onClick={() => navigate(`/careers/${job.id}`)}
                      className="group inline-flex items-center justify-center gap-2 px-6 py-3 rounded-[8px] bg-brand-teal text-white text-[10px] font-bold tracking-widest uppercase hover:bg-[#0aa39e] transition-colors shadow-sm"
                    >
                      <span>SEE POSITIONS</span>
                      <ArrowUpRight className="w-3.5 h-3.5 stroke-[2.5] transition-transform duration-300 group-hover:rotate-45" />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
