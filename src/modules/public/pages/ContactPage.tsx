import React, { useState } from 'react';
import { Mail, Phone, MapPin, ArrowUpRight } from 'lucide-react';

export const ContactPage: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // In a real app, you would send this to your backend
    alert('Thank you for your message! We will get back to you soon.');
    setFormData({ name: '', email: '', phone: '', message: '' });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  return (
    <div className="relative z-10 min-h-screen bg-white">
      {/* Top Header Section */}
      <section className="w-full h-[317px] pt-[99px] bg-[#EEEEE9] flex items-center justify-center">
        <div className="section-container w-full">
          <div className="max-w-2xl mx-auto text-center flex flex-col items-center">
            <span className="inline-block mb-4 text-[10px] font-serif font-bold text-[#9B7A5B] uppercase tracking-widest">
              GET IN TOUCH
            </span>
            <h1 className="font-sans text-4xl sm:text-5xl md:text-[56px] font-medium leading-tight tracking-tight text-brand-charcoal mb-4">
              We're here for you
            </h1>
            <p className="text-[14px] sm:text-base font-light text-brand-charcoal/70">
              Reach out by email or phone — our team will respond as soon as we can.
            </p>
          </div>
        </div>
      </section>

      {/* Cards Section (White Background) */}
      <section className="w-full py-10 sm:py-12 bg-white">
        <div className="section-container">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 max-w-5xl mx-auto">
            {/* Email Card */}
            <div className="bg-white rounded-2xl shadow-sm border border-brand-charcoal/10 p-8 flex flex-col hover:-translate-y-1 transition-transform duration-300">
              <div className="w-12 h-12 rounded-[12px] bg-brand-teal/10 text-brand-teal flex items-center justify-center mb-6">
                <Mail className="w-5 h-5 stroke-[2]" />
              </div>
              <h3 className="font-sans text-lg font-semibold text-brand-charcoal mb-2">Email</h3>
              <p className="text-[14px] text-brand-charcoal/70 mb-8 flex-1">
                Our friendly team is here to help.
              </p>
              <p className="text-[15px] font-medium text-brand-charcoal">
                hi@agency.com
              </p>
            </div>

            {/* Phone Card */}
            <div className="bg-white rounded-2xl shadow-sm border border-brand-charcoal/10 p-8 flex flex-col hover:-translate-y-1 transition-transform duration-300">
              <div className="w-12 h-12 rounded-[12px] bg-brand-teal/10 text-brand-teal flex items-center justify-center mb-6">
                <Phone className="w-5 h-5 stroke-[2]" />
              </div>
              <h3 className="font-sans text-lg font-semibold text-brand-charcoal mb-2">Phone</h3>
              <p className="text-[14px] text-brand-charcoal/70 mb-8 flex-1">
                Mon-Fri from 8am to 5pm.
              </p>
              <p className="text-[15px] font-medium text-brand-charcoal">
                +1 (555) 000-0000
              </p>
            </div>

            {/* Office Card */}
            <div className="bg-white rounded-2xl shadow-sm border border-brand-charcoal/10 p-8 flex flex-col hover:-translate-y-1 transition-transform duration-300">
              <div className="w-12 h-12 rounded-[12px] bg-brand-teal/10 text-brand-teal flex items-center justify-center mb-6">
                <MapPin className="w-5 h-5 stroke-[2]" />
              </div>
              <h3 className="font-sans text-lg font-semibold text-brand-charcoal mb-2">Office</h3>
              <p className="text-[14px] text-brand-charcoal/70 mb-6 flex-1">
                Come say hello at our office HQ.
              </p>
              <p className="text-[15px] font-medium text-brand-charcoal leading-relaxed">
                100 Smith Street<br/>Collingwood VIC 3066 AU
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Dark Form Section */}
      <section className="w-full bg-[#0B1515] py-12 sm:py-16">
        <div className="section-container">
          <div className="max-w-6xl mx-auto flex flex-col lg:flex-row gap-12 lg:gap-20 items-center lg:items-start">
            {/* Left Content */}
            <div className="flex-1 text-center lg:text-left mt-8">
              <h2 className="font-sans text-3xl sm:text-4xl md:text-5xl font-semibold text-white mb-6 leading-tight">
                Send a Message
              </h2>
              <p className="text-[15px] sm:text-base text-white/70 leading-relaxed max-w-md mx-auto lg:mx-0">
                Have questions or need guidance? Reach out to our team and we'll be happy to help you on your journey to finding a meaningful connection.
              </p>
            </div>

            {/* Right Form */}
            <div className="flex-1 w-full max-w-lg lg:max-w-xl">
              <div className="bg-white rounded-[24px] p-6 sm:p-8 lg:p-10 shadow-2xl">
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    {/* Name */}
                    <div className="space-y-2">
                      <label htmlFor="name" className="block font-serif text-[16px] font-normal leading-none tracking-[-0.32px] text-[#1A1A2E] mb-3">
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
                        className="w-full bg-white border border-brand-charcoal/20 rounded-xl px-4 py-3.5 text-[14px] text-brand-charcoal placeholder:text-brand-charcoal/30 focus:border-brand-teal focus:ring-1 focus:ring-brand-teal outline-none transition-all"
                      />
                    </div>
                    {/* Email */}
                    <div className="space-y-2">
                      <label htmlFor="email" className="block font-serif text-[16px] font-normal leading-none tracking-[-0.32px] text-[#1A1A2E] mb-3">
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
                        className="w-full bg-white border border-brand-charcoal/20 rounded-xl px-4 py-3.5 text-[14px] text-brand-charcoal placeholder:text-brand-charcoal/30 focus:border-brand-teal focus:ring-1 focus:ring-brand-teal outline-none transition-all"
                      />
                    </div>
                  </div>

                  {/* Phone */}
                  <div className="space-y-2">
                    <label htmlFor="phone" className="block font-serif text-[16px] font-normal leading-none tracking-[-0.32px] text-[#1A1A2E] mb-3">
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
                      className="w-full bg-white border border-brand-charcoal/20 rounded-xl px-4 py-3.5 text-[14px] text-brand-charcoal placeholder:text-brand-charcoal/30 focus:border-brand-teal focus:ring-1 focus:ring-brand-teal outline-none transition-all"
                    />
                  </div>

                  {/* Message */}
                  <div className="space-y-2">
                    <label htmlFor="message" className="block font-serif text-[16px] font-normal leading-none tracking-[-0.32px] text-[#1A1A2E] mb-3">
                      Message *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      placeholder="Your Message"
                      rows={4}
                      className="w-full bg-white border border-brand-charcoal/20 rounded-xl px-4 py-3.5 text-[14px] text-brand-charcoal placeholder:text-brand-charcoal/30 focus:border-brand-teal focus:ring-1 focus:ring-brand-teal outline-none transition-all resize-none"
                    />
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    className="w-full bg-brand-teal text-white font-bold tracking-widest text-[10px] py-4 rounded-xl hover:bg-[#0aa39e] transition-colors mt-2 flex items-center justify-center uppercase group"
                  >
                    SEND MESSAGE
                    <ArrowUpRight className="w-3.5 h-3.5 stroke-[2.5] ml-1.5 transition-transform duration-300 group-hover:rotate-45 group-active:rotate-90" />
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
