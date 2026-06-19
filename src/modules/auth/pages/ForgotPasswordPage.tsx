import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowUpRight } from 'lucide-react';

export const ForgotPasswordPage: React.FC = () => {
  const [email, setEmail] = useState('');

  return (
    <div className="min-h-screen bg-[#EEEEE9] flex font-sans p-4 md:p-8">
      <div className="w-full max-w-4xl m-auto flex flex-col items-center">
        {/* Dual Cards Grid */}
        <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-6 items-start">
          
          {/* Left Card: Brand Panel */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="relative md:sticky top-4 md:top-8 bg-white rounded-3xl p-6 sm:p-12 shadow-[0_8px_30px_rgb(0,0,0,0.02)] border border-brand-teal/5 flex flex-col items-center justify-center text-center min-h-[200px] md:min-h-[450px]"
          >
            {/* Brand Logo */}
            <div className="flex justify-center">
              <img
                src="/images/logo.png"
                alt="WuMa Matchmaking"
                className="w-[180px] sm:w-[220px] h-auto object-contain drop-shadow-[0_4px_16px_rgba(12,185,180,0.1)] transition-transform duration-300 hover:scale-[1.03]"
              />
            </div>
          </motion.div>

          {/* Right Card: Forgot Password Form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="flex flex-col gap-4 justify-between"
          >
            <div className="bg-white rounded-3xl p-6 sm:p-10 shadow-[0_8px_30px_rgb(0,0,0,0.02)] border border-brand-teal/5 flex-1 flex flex-col justify-between">
              <div>
                <h1 className="text-2xl font-bold text-brand-charcoal mb-2">Forgot Password</h1>
                <p className="text-[#5C6574] text-xs leading-relaxed mb-8">
                  Enter your email and we will send you a link to reset your password.
                </p>

                <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
                  <div>
                    <label className="block text-xs font-semibold text-brand-charcoal mb-1.5">Email</label>
                    <input
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="umer@gmail.com"
                      className="w-full px-4 py-3.5 rounded-xl border border-[#E5E7EB] bg-white focus:ring-1 focus:ring-brand-teal outline-none transition-all text-brand-charcoal text-sm placeholder-[#9CA3AF] h-12"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-brand-teal text-white font-bold tracking-wider text-[10px] py-3.5 rounded-xl hover:bg-[#0aa39e] transition-colors mt-6 h-12 flex items-center justify-center shadow-sm uppercase group"
                  >
                    LOGIN <ArrowUpRight className="w-3.5 h-3.5 stroke-[2.5] transition-transform duration-300 group-hover:rotate-45 group-active:rotate-90" />
                  </button>
                </form>
              </div>

              <div className="mt-8 text-center text-xs text-[#5C6574] font-light">
                Back to{' '}
                <Link to="/login" className="text-brand-teal font-medium hover:text-brand-teal/80">
                  Login
                </Link>
              </div>
            </div>

            {/* Language Selector Bottom Card */}
            <div className="bg-white rounded-2xl p-3.5 px-5 shadow-[0_8px_30px_rgb(0,0,0,0.01)] border border-brand-teal/5 flex items-center justify-between text-xs text-[#5C6574]">
              <span className="font-light">Language</span>
              <span className="font-semibold text-brand-charcoal flex items-center gap-1 cursor-pointer">
                English <span className="text-[10px]">▼</span>
              </span>
            </div>
          </motion.div>

        </div>
      </div>
    </div>
  );
};
