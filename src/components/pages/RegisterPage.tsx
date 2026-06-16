import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';

export const RegisterPage: React.FC = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [dob, setDob] = useState('');

  return (
    <div className="min-h-screen bg-[#EEEEE9] flex items-center justify-center font-sans p-4 md:p-8">
      <div className="w-full max-w-4xl flex flex-col items-center">
        {/* Dual Cards Grid */}
        <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-6 items-stretch">
          
          {/* Left Card: Brand Panel */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="bg-white rounded-3xl p-8 sm:p-12 shadow-[0_8px_30px_rgb(0,0,0,0.02)] border border-brand-teal/5 flex flex-col items-center justify-center text-center min-h-[450px]"
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

          {/* Right Card: Register Form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="flex flex-col gap-4 justify-between"
          >
            <div className="bg-white rounded-3xl p-8 sm:p-10 shadow-[0_8px_30px_rgb(0,0,0,0.02)] border border-brand-teal/5 flex-1 flex flex-col justify-between">
              <div>
                {/* Back to Homepage */}
                <Link
                  to="/"
                  className="inline-flex items-center gap-1.5 text-brand-teal text-[11px] font-semibold hover:text-brand-teal/80 transition-colors mb-6"
                >
                  <ArrowLeft className="w-3.5 h-3.5" />
                  Back to Homepage
                </Link>

                <h1 className="text-2xl font-bold text-brand-charcoal mb-1">Create your account</h1>
                <p className="text-[#5C6574] text-xs mb-6 font-light">You'll use your email to sign in.</p>

                {/* Step Indicator */}
                <div className="flex items-center justify-center mb-8">
                  <div className="flex items-center w-full max-w-[240px]">
                    {/* Step 1 */}
                    <div className="flex items-center justify-center w-6 h-6 rounded-full bg-brand-teal text-white text-[10px] font-bold z-10 shrink-0">
                      1
                    </div>
                    {/* Teal Line */}
                    <div className="flex-1 h-[2px] bg-brand-teal -ml-1 -mr-1 z-0"></div>
                    {/* Step 2 */}
                    <div className="flex items-center justify-center w-6 h-6 rounded-full bg-white border border-[#D1D5DB] text-[#6B7280] text-[10px] font-bold z-10 shrink-0">
                      2
                    </div>
                    {/* Grey Line */}
                    <div className="flex-1 h-[2px] bg-[#E5E7EB] -ml-1 -mr-1 z-0"></div>
                    {/* Step 3 */}
                    <div className="flex items-center justify-center w-6 h-6 rounded-full bg-white border border-[#D1D5DB] text-[#6B7280] text-[10px] font-bold z-10 shrink-0">
                      3
                    </div>
                  </div>
                </div>

                <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
                  <div>
                    <label className="block text-xs font-semibold text-brand-charcoal mb-1">Email</label>
                    <input
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="umer@gmail.com"
                      className="w-full px-4 py-2.5 rounded-xl border-0 bg-[#F3F6F9] focus:bg-white focus:ring-1 focus:ring-brand-teal outline-none transition-all text-brand-charcoal text-sm placeholder-brand-charcoal/30 h-11"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-brand-charcoal mb-1">Password</label>
                    <div className="relative">
                      <input
                        type={showPassword ? 'text' : 'password'}
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        placeholder="••••••••"
                        className="w-full px-4 py-2.5 rounded-xl border-0 bg-[#F3F6F9] focus:bg-white focus:ring-1 focus:ring-brand-teal outline-none transition-all text-brand-charcoal text-sm placeholder-brand-charcoal/30 h-11 pr-12"
                      />
                      <button
                        type="button"
                        onClick={() => setShowPassword(!showPassword)}
                        className="absolute right-4 top-1/2 -translate-y-1/2 text-xs font-semibold text-brand-teal hover:text-brand-teal/80 transition-colors"
                      >
                        {showPassword ? 'Hide' : 'Show'}
                      </button>
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-brand-charcoal mb-1">Confirm Password</label>
                    <div className="relative">
                      <input
                        type={showConfirmPassword ? 'text' : 'password'}
                        value={confirmPassword}
                        onChange={(e) => setConfirmPassword(e.target.value)}
                        placeholder="••••••••"
                        className="w-full px-4 py-2.5 rounded-xl border-0 bg-[#F3F6F9] focus:bg-white focus:ring-1 focus:ring-brand-teal outline-none transition-all text-brand-charcoal text-sm placeholder-brand-charcoal/30 h-11 pr-12"
                      />
                      <button
                        type="button"
                        onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                        className="absolute right-4 top-1/2 -translate-y-1/2 text-xs font-semibold text-brand-teal hover:text-brand-teal/80 transition-colors"
                      >
                        {showConfirmPassword ? 'Hide' : 'Show'}
                      </button>
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-brand-charcoal mb-1">Date of Birth</label>
                    <input
                      type="text"
                      value={dob}
                      onChange={(e) => setDob(e.target.value)}
                      placeholder="Select your date of birth"
                      className="w-full px-4 py-2.5 rounded-xl border-0 bg-[#F3F6F9] focus:bg-white focus:ring-1 focus:ring-brand-teal outline-none transition-all text-brand-charcoal text-sm placeholder-brand-charcoal/30 h-11"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-[#0CB9B4] text-white font-bold tracking-wider text-xs py-3.5 rounded-xl hover:bg-[#0aa39e] transition-colors mt-6 h-12 flex items-center justify-center shadow-sm"
                  >
                    Continue
                  </button>
                </form>
              </div>

              <div className="mt-8 text-center text-xs text-[#5C6574] font-light">
                Already have an account?{' '}
                <Link to="/login" className="text-brand-teal font-semibold hover:text-brand-teal/80">
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
