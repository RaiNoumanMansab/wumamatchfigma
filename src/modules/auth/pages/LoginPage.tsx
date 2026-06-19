import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';

export const LoginPage: React.FC = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [rememberMe, setRememberMe] = useState(false);

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

          {/* Right Card: Login Form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="flex flex-col gap-4 justify-between"
          >
            <div className="bg-white rounded-3xl p-6 sm:p-10 shadow-[0_8px_30px_rgb(0,0,0,0.02)] border border-brand-teal/5 flex-1 flex flex-col justify-between">
              <div>
                {/* Back to Homepage */}
                <Link
                  to="/"
                  className="inline-flex items-center gap-1.5 text-brand-teal text-[11px] font-semibold hover:text-brand-teal/80 transition-colors mb-6"
                >
                  <ArrowLeft className="w-3.5 h-3.5 transition-transform duration-300 group-active:-rotate-90" />
                  Back to Homepage
                </Link>

                <h1 className="text-2xl font-bold text-brand-charcoal mb-1">Login</h1>
                <p className="text-[#5C6574] text-xs mb-8">Find your perfect match</p>

                <form className="space-y-5" onSubmit={(e) => e.preventDefault()}>
                  <div>
                    <label className="block text-xs font-semibold text-brand-charcoal mb-1.5">Email</label>
                    <input
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="umer@gmail.com"
                      className="w-full px-4 py-3.5 rounded-xl border-0 bg-[#F3F6F9] focus:bg-white focus:ring-1 focus:ring-brand-teal outline-none transition-all text-brand-charcoal text-sm placeholder-brand-charcoal/30 h-12"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-brand-charcoal mb-1.5">Password</label>
                    <div className="relative">
                      <input
                        type={showPassword ? 'text' : 'password'}
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        placeholder="••••••••"
                        className="w-full px-4 py-3.5 rounded-xl border-0 bg-[#F3F6F9] focus:bg-white focus:ring-1 focus:ring-brand-teal outline-none transition-all text-brand-charcoal text-sm placeholder-brand-charcoal/30 h-12 pr-12"
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

                  <div className="flex items-center justify-between pt-1">
                    <label className="flex items-center gap-2.5 cursor-pointer select-none">
                      <input
                        type="checkbox"
                        checked={rememberMe}
                        onChange={(e) => setRememberMe(e.target.checked)}
                        className="w-4 h-4 rounded border-0 bg-[#F3F6F9] text-brand-teal focus:ring-brand-teal cursor-pointer"
                      />
                      <span className="text-xs text-[#5C6574] font-light">Remember me</span>
                    </label>
                    <Link to="/forgot-password" className="text-xs font-semibold text-brand-teal hover:text-brand-teal/80 transition-colors">
                      Forgot Password?
                    </Link>
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-[#0CB9B4] text-white font-bold tracking-wider text-xs py-3.5 rounded-xl hover:bg-[#0aa39e] transition-colors mt-6 h-12 flex items-center justify-center shadow-sm"
                  >
                    Login
                  </button>
                </form>
              </div>

              <div className="mt-8 text-center text-xs text-[#5C6574] font-light">
                Don't have an account?{' '}
                <Link to="/register" className="text-brand-teal font-semibold hover:text-brand-teal/80">
                  Register
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
