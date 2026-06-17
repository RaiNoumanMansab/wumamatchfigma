import React, { useState, useEffect, useRef } from 'react';
import { ArrowLeft, UploadCloud, ArrowUpRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

export const CareerDetailPage: React.FC = () => {
  const navigate = useNavigate();
  
  const jobTitle = "Senior Matchmakers";
  const dummyText = "Join our team of experienced matchmakers and help individuals build meaningful, lasting relationships. You'll work closely with clients, provide personalized guidance, and support them throughout their journey to finding a compatible life partner in a professional and caring environment.";

  const [activeTab, setActiveTab] = useState('Description');
  const tabs = ['Description', 'What will you do', 'Our Expectations', 'Benefits'];

  // Refs for each section
  const sectionRefs = useRef<{ [key: string]: HTMLElement | null }>({});

  // Scroll spy using IntersectionObserver
  useEffect(() => {
    const observers: IntersectionObserver[] = [];

    tabs.forEach((tab) => {
      const el = sectionRefs.current[tab];
      if (!el) return;

      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setActiveTab(tab);
          }
        },
        { rootMargin: '-30% 0px -60% 0px', threshold: 0 }
      );

      observer.observe(el);
      observers.push(observer);
    });

    return () => observers.forEach((o) => o.disconnect());
  }, []);

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert('Application submitted successfully!');
    setFormData({ name: '', email: '', phone: '' });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  return (
    <div className="relative z-10 bg-white min-h-screen pt-24 pb-20">
      <div className="section-container">
        
        {/* Back Button */}
        <button
          onClick={() => navigate('/careers')}
          className="flex items-center gap-2 text-[10px] font-bold tracking-widest uppercase text-brand-teal hover:text-[#0aa39e] transition-colors mb-12 group"
        >
          <ArrowLeft className="w-3.5 h-3.5 group-hover:-translate-x-1 transition-transform" />
          BACK TO ALL POSTS
        </button>

        <div className="flex flex-col lg:flex-row gap-12 lg:gap-24">
          
          {/* Left Sidebar */}
          <div className="w-full lg:w-[200px] shrink-0">
            <div className="sticky top-32 flex flex-col gap-4 border-l-2 border-[#E5E5E5]">
              {tabs.map((tab) => (
                <button
                  key={tab}
                  onClick={() => {
                    const el = sectionRefs.current[tab];
                    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
                    setActiveTab(tab);
                  }}
                  className={`text-left pl-4 py-1 text-[13px] font-sans transition-colors relative ${
                    activeTab === tab 
                      ? 'text-brand-charcoal font-medium' 
                      : 'text-brand-charcoal/60 font-normal hover:text-brand-charcoal'
                  }`}
                >
                  {/* Active Indicator line overlapping the border */}
                  {activeTab === tab && (
                    <div className="absolute left-[-2px] top-0 bottom-0 w-0.5 bg-brand-teal" />
                  )}
                  {tab}
                </button>
              ))}
            </div>
          </div>

          {/* Main Content Area */}
          <div className="flex-1 max-w-3xl">
            
            {/* Description Section */}
            <div ref={(el) => { sectionRefs.current['Description'] = el; }} className="mb-12 scroll-mt-32">
              <h1 className="font-sans text-3xl sm:text-[32px] font-medium text-brand-charcoal mb-6">
                {jobTitle}
              </h1>
              <p className="font-serif text-[14px] sm:text-[15px] leading-relaxed text-brand-charcoal/80">
                {dummyText}
              </p>
            </div>

            {/* What will you do Section */}
            <div ref={(el) => { sectionRefs.current['What will you do'] = el; }} className="mb-12 scroll-mt-32">
              <h2 className="font-sans text-xl sm:text-[22px] font-medium text-brand-charcoal mb-6">
                What will you do
              </h2>
              <p className="font-serif text-[14px] sm:text-[15px] leading-relaxed text-brand-charcoal/80">
                {dummyText}
              </p>
            </div>

            {/* Our Expectations Section */}
            <div ref={(el) => { sectionRefs.current['Our Expectations'] = el; }} className="mb-12 scroll-mt-32">
              <h2 className="font-sans text-xl sm:text-[22px] font-medium text-brand-charcoal mb-6">
                Our Expectations
              </h2>
              <p className="font-serif text-[14px] sm:text-[15px] leading-relaxed text-brand-charcoal/80">
                {dummyText}
              </p>
            </div>

            {/* Benefits Section */}
            <div ref={(el) => { sectionRefs.current['Benefits'] = el; }} className="mb-16 scroll-mt-32">
              <h2 className="font-sans text-xl sm:text-[22px] font-medium text-brand-charcoal mb-6">
                Benefits
              </h2>
              <p className="font-serif text-[14px] sm:text-[15px] leading-relaxed text-brand-charcoal/80">
                {dummyText}
              </p>
            </div>

            {/* Apply Now Form */}
            <div>
              <h2 className="font-sans text-[28px] sm:text-[32px] font-medium text-brand-charcoal mb-8">
                Apply Now!
              </h2>

              <div className="bg-white rounded-[16px] border border-brand-charcoal/10 p-6 sm:p-8 shadow-sm">
                <form onSubmit={handleSubmit} className="space-y-6">
                  
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    {/* Name */}
                    <div className="space-y-2">
                      <label htmlFor="name" className="block font-serif text-[14px] sm:text-[16px] font-normal text-[#1A1A2E]">
                        Name *
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        placeholder="Umar"
                        className="w-full bg-white border border-brand-charcoal/10 rounded-xl px-4 py-3.5 text-[14px] text-brand-charcoal placeholder:text-brand-charcoal/30 focus:border-brand-teal focus:ring-1 focus:ring-brand-teal outline-none transition-all"
                      />
                    </div>
                    
                    {/* Email */}
                    <div className="space-y-2">
                      <label htmlFor="email" className="block font-serif text-[14px] sm:text-[16px] font-normal text-[#1A1A2E]">
                        Email *
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        placeholder="umar@gmail.com"
                        className="w-full bg-white border border-brand-charcoal/10 rounded-xl px-4 py-3.5 text-[14px] text-brand-charcoal placeholder:text-brand-charcoal/30 focus:border-brand-teal focus:ring-1 focus:ring-brand-teal outline-none transition-all"
                      />
                    </div>
                  </div>

                  {/* Phone */}
                  <div className="space-y-2">
                    <label htmlFor="phone" className="block font-serif text-[14px] sm:text-[16px] font-normal text-[#1A1A2E]">
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      required
                      placeholder="+41 89 379879 79"
                      className="w-full bg-white border border-brand-charcoal/10 rounded-xl px-4 py-3.5 text-[14px] text-brand-charcoal placeholder:text-brand-charcoal/30 focus:border-brand-teal focus:ring-1 focus:ring-brand-teal outline-none transition-all"
                    />
                  </div>

                  {/* Upload Resume */}
                  <div className="space-y-2">
                    <label className="block font-serif text-[14px] sm:text-[16px] font-normal text-[#1A1A2E]">
                      Upload Resume *
                    </label>
                    <div className="w-full border-2 border-dashed border-[#DCDCDC] bg-[#F4F1EA]/50 rounded-xl px-4 py-8 flex flex-col sm:flex-row items-center justify-center gap-3">
                      <div className="w-8 h-8 rounded-full bg-brand-teal text-white flex items-center justify-center shrink-0">
                        <UploadCloud className="w-4 h-4" />
                      </div>
                      <span className="text-[13px] sm:text-[14px] text-brand-charcoal/50">
                        Drag and Drop or
                      </span>
                      <button type="button" className="px-4 py-1.5 bg-brand-teal text-white text-[11px] font-medium rounded-md hover:bg-[#0aa39e] transition-colors">
                        Browse file
                      </button>
                    </div>
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    className="w-full bg-brand-teal text-white font-bold tracking-widest text-[10px] py-4 rounded-xl hover:bg-[#0aa39e] transition-colors mt-4 flex items-center justify-center uppercase group"
                  >
                    APPLY
                    <ArrowUpRight className="w-3.5 h-3.5 stroke-[2.5] ml-1.5 transition-transform duration-300 group-hover:rotate-45 group-active:rotate-90" />
                  </button>
                </form>
              </div>

            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
