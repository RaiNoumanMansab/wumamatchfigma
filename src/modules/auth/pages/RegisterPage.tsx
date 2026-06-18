import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowLeft, ArrowRight, CloudUpload, X, MapPin } from 'lucide-react';
import { CustomSelect } from '../../../components/ui/CustomSelect';

export const RegisterPage: React.FC = () => {
  const [step, setStep] = useState(1);
  
  // Step 1
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  // Step 2
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [gender, setGender] = useState('Men');
  const [dob, setDob] = useState('');
  const [lookingFor, setLookingFor] = useState('Women');

  // Step 3
  const [nationality, setNationality] = useState('American');
  const [currentLocation, setCurrentLocation] = useState('');
  const [education, setEducation] = useState("Bachelor's");
  const [agreed, setAgreed] = useState(false);
  const [previewImage, setPreviewImage] = useState<string | null>(null);

  const genderOptions = ['Men', 'Women', 'Everyone'];
  const eduOptions = ['High School', 'Intermediate', "Bachelor's", 'Masters'];

  const getHeader = () => {
    if (step === 1) return { title: 'Create your account', desc: "You'll use your email to sign in." };
    if (step === 2) return { title: 'About you', desc: 'Help us find your best matches.' };
    return { title: 'Your background', desc: 'Tell us a bit more about yourself.' };
  };

  const { title, desc } = getHeader();

  const renderStepIndicator = () => {
    return (
      <div className="flex items-center justify-center mb-8">
        <div className="flex items-center w-full max-w-[240px]">
          {/* Step 1 */}
          <div className={`flex items-center justify-center w-6 h-6 rounded-full text-[10px] font-bold z-10 shrink-0 transition-colors ${step >= 1 ? 'bg-brand-teal text-white border-none' : 'bg-white border border-[#D1D5DB] text-[#6B7280]'}`}>
            1
          </div>
          {/* Line 1-2 */}
          <div className={`flex-1 h-[2px] -ml-1 -mr-1 z-0 transition-colors ${step >= 2 ? 'bg-brand-teal' : 'bg-[#E5E7EB]'}`}></div>
          {/* Step 2 */}
          <div className={`flex items-center justify-center w-6 h-6 rounded-full text-[10px] font-bold z-10 shrink-0 transition-colors ${step >= 2 ? 'bg-brand-teal text-white border-none' : 'bg-white border border-[#D1D5DB] text-[#6B7280]'}`}>
            2
          </div>
          {/* Line 2-3 */}
          <div className={`flex-1 h-[2px] -ml-1 -mr-1 z-0 transition-colors ${step >= 3 ? 'bg-brand-teal' : 'bg-[#E5E7EB]'}`}></div>
          {/* Step 3 */}
          <div className={`flex items-center justify-center w-6 h-6 rounded-full text-[10px] font-bold z-10 shrink-0 transition-colors ${step >= 3 ? 'bg-brand-teal text-white border-none' : 'bg-white border border-[#D1D5DB] text-[#6B7280]'}`}>
            3
          </div>
        </div>
      </div>
    );
  };



  return (
    <div className="min-h-screen bg-[#EEEEE9] flex font-sans p-4 md:p-8">
      <AnimatePresence>
        {previewImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm"
            onClick={() => setPreviewImage(null)}
          >
            <button
              onClick={() => setPreviewImage(null)}
              className="absolute top-4 right-4 w-10 h-10 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center text-white transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
            <motion.img
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              src={previewImage}
              alt="Preview"
              className="max-w-full max-h-full rounded-2xl object-contain shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            />
          </motion.div>
        )}
      </AnimatePresence>
      <div className="w-full max-w-4xl m-auto flex flex-col items-center">
        {/* Dual Cards Grid */}
        <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-6 items-start">
          
          {/* Left Card: Brand Panel */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="sticky top-4 md:top-8 bg-white rounded-3xl p-8 sm:p-12 shadow-[0_8px_30px_rgb(0,0,0,0.02)] border border-brand-teal/5 flex flex-col items-center justify-center text-center min-h-[450px]"
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

                <h1 className="text-2xl font-bold text-brand-charcoal mb-1">{title}</h1>
                <p className="text-[#5C6574] text-xs mb-6 font-light">{desc}</p>

                {renderStepIndicator()}

                <form className="relative" onSubmit={(e) => e.preventDefault()}>
                  <AnimatePresence mode="wait">
                    {step === 1 && (
                      <motion.div key="step1" initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }} className="space-y-4">
                        <div>
                          <label className="block text-xs font-semibold text-brand-charcoal mb-1">Email</label>
                          <input
                            type="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            placeholder="umer@gmail.com"
                            className="w-full px-4 py-2.5 rounded-xl border border-[#E5E7EB] bg-white focus:ring-1 focus:ring-brand-teal outline-none transition-all text-brand-charcoal text-sm placeholder-[#9CA3AF] h-11"
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
                              className="w-full px-4 py-2.5 rounded-xl border border-[#E5E7EB] bg-white focus:ring-1 focus:ring-brand-teal outline-none transition-all text-brand-charcoal text-sm placeholder-[#9CA3AF] h-11 pr-12"
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
                              className="w-full px-4 py-2.5 rounded-xl border border-[#E5E7EB] bg-white focus:ring-1 focus:ring-brand-teal outline-none transition-all text-brand-charcoal text-sm placeholder-[#9CA3AF] h-11 pr-12"
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
                            className="w-full px-4 py-2.5 rounded-xl border border-[#E5E7EB] bg-white focus:ring-1 focus:ring-brand-teal outline-none transition-all text-brand-charcoal text-sm placeholder-[#9CA3AF] h-11"
                          />
                        </div>

                        <button
                          type="button"
                          onClick={() => setStep(2)}
                          className="w-full bg-[#0CB9B4] text-white font-bold tracking-wider text-[10px] py-3.5 rounded-xl hover:bg-[#0aa39e] transition-colors mt-6 h-12 flex items-center justify-center shadow-sm uppercase group"
                        >
                          Continue <ArrowRight className="w-3.5 h-3.5 ml-1.5 transition-transform duration-300 group-active:rotate-90" />
                        </button>
                      </motion.div>
                    )}

                    {step === 2 && (
                      <motion.div key="step2" initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }} className="space-y-4">
                        <div>
                          <label className="block text-xs font-semibold text-brand-charcoal mb-1">First name</label>
                          <input
                            type="text"
                            value={firstName}
                            onChange={(e) => setFirstName(e.target.value)}
                            placeholder="Umar"
                            className="w-full px-4 py-2.5 rounded-xl border border-[#E5E7EB] bg-white focus:ring-1 focus:ring-brand-teal outline-none transition-all text-brand-charcoal text-sm placeholder-[#9CA3AF] h-11"
                          />
                        </div>

                        <div>
                          <label className="block text-xs font-semibold text-brand-charcoal mb-1">Last name</label>
                          <input
                            type="text"
                            value={lastName}
                            onChange={(e) => setLastName(e.target.value)}
                            placeholder="Adil"
                            className="w-full px-4 py-2.5 rounded-xl border border-[#E5E7EB] bg-white focus:ring-1 focus:ring-brand-teal outline-none transition-all text-brand-charcoal text-sm placeholder-[#9CA3AF] h-11"
                          />
                        </div>

                        <div>
                          <label className="block text-xs font-semibold text-brand-charcoal mb-1.5">Your Gender</label>
                          <div className="flex gap-2">
                            {genderOptions.map(g => (
                              <button
                                key={g}
                                type="button"
                                onClick={() => setGender(g)}
                                className={`flex-1 py-2 rounded-xl text-xs font-medium transition-colors border ${gender === g ? 'border-brand-teal text-brand-teal bg-brand-teal/5' : 'border-[#E5E7EB] text-[#5C6574] bg-white hover:bg-gray-50'}`}
                              >
                                {g}
                              </button>
                            ))}
                          </div>
                        </div>

                        <div className="pt-2">
                          <h3 className="text-sm font-bold text-brand-charcoal mb-3">Preferences</h3>
                          <label className="block text-xs font-semibold text-brand-charcoal mb-1.5">I'm looking for</label>
                          <div className="flex gap-2">
                            {genderOptions.map(g => (
                              <button
                                key={g}
                                type="button"
                                onClick={() => setLookingFor(g)}
                                className={`flex-1 py-2 rounded-xl text-xs font-medium transition-colors border ${lookingFor === g ? 'border-brand-teal text-brand-teal bg-brand-teal/5' : 'border-[#E5E7EB] text-[#5C6574] bg-white hover:bg-gray-50'}`}
                              >
                                {g}
                              </button>
                            ))}
                          </div>
                        </div>

                        <div className="flex items-center gap-3 mt-6 pt-2">
                          <button
                            type="button"
                            onClick={() => setStep(1)}
                            className="w-1/3 bg-brand-teal/10 text-brand-teal font-bold tracking-wider text-[10px] py-3.5 rounded-xl hover:bg-brand-teal/20 transition-colors h-12 flex items-center justify-center uppercase group"
                          >
                            <ArrowLeft className="w-3.5 h-3.5 mr-1.5 transition-transform duration-300 group-active:-rotate-90" /> Back
                          </button>
                          <button
                            type="button"
                            onClick={() => setStep(3)}
                            className="flex-1 bg-[#0CB9B4] text-white font-bold tracking-wider text-[10px] py-3.5 rounded-xl hover:bg-[#0aa39e] transition-colors h-12 flex items-center justify-center shadow-sm uppercase group"
                          >
                            Continue <ArrowRight className="w-3.5 h-3.5 ml-1.5 transition-transform duration-300 group-active:rotate-90" />
                          </button>
                        </div>
                      </motion.div>
                    )}

                    {step === 3 && (
                      <motion.div key="step3" initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }} className="space-y-4">
                        <div>
                          <label className="block text-xs font-semibold text-brand-charcoal mb-1">Nationality</label>
                          <CustomSelect
                            value={nationality}
                            onChange={setNationality}
                            options={['American', 'British', 'Canadian', 'Pakistani']}
                          />
                        </div>

                        <div>
                          <label className="block text-xs font-semibold text-brand-charcoal mb-1">Current Location</label>
                          <div className="relative">
                            <input
                              type="text"
                              value={currentLocation}
                              onChange={(e) => setCurrentLocation(e.target.value)}
                              placeholder="Search Your Location"
                              className="w-full px-4 py-2.5 rounded-xl border border-[#E5E7EB] bg-white focus:ring-1 focus:ring-brand-teal outline-none transition-all text-brand-charcoal text-sm placeholder-[#9CA3AF] h-11 pr-10"
                            />
                            <MapPin strokeWidth={1.5} className="absolute right-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-brand-charcoal" />
                          </div>
                        </div>

                        <div>
                          <label className="block text-xs font-semibold text-brand-charcoal mb-1.5">Education</label>
                          <div className="grid grid-cols-2 gap-2 sm:flex sm:gap-2">
                            {eduOptions.map(e => (
                              <button
                                key={e}
                                type="button"
                                onClick={() => setEducation(e)}
                                className={`flex-1 py-2 px-1 rounded-xl text-[10px] sm:text-xs font-medium transition-colors border ${education === e ? 'border-brand-teal text-brand-teal bg-brand-teal/5' : 'border-[#E5E7EB] text-[#5C6574] bg-white hover:bg-gray-50'}`}
                              >
                                {e}
                              </button>
                            ))}
                          </div>
                        </div>

                        <div className="pt-2">
                          <h2 className="text-xl font-bold text-[#1E293B] mb-2">Add your Photos</h2>
                          <p className="text-[13px] text-[#64748B] mb-5">Upload up to 8 photos. A minimum of 3 photos is required to continue.</p>
                          
                          {/* Upload Box */}
                          <div className="w-full py-6 rounded-2xl border-2 border-dashed border-[#CBD5E1] flex items-center justify-center text-[#64748B] cursor-pointer hover:border-brand-teal hover:text-brand-teal hover:bg-brand-teal/5 transition-all bg-white mb-6">
                            <div className="flex items-center gap-3">
                              <CloudUpload strokeWidth={1.5} className="w-6 h-6" />
                              <span className="text-[14px] font-medium">Click to upload images</span>
                            </div>
                          </div>

                          {/* Uploaded Photos Preview */}
                          <div className="flex gap-4 mb-8">
                            {[1, 2, 3].map(num => (
                              <div 
                                key={num} 
                                onClick={() => setPreviewImage(`https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&q=80&w=300`)}
                                className="w-24 h-24 sm:w-28 sm:h-28 rounded-2xl overflow-hidden shadow-sm border border-black/5 bg-gray-100 shrink-0 cursor-pointer hover:opacity-90 transition-opacity"
                              >
                                <img 
                                  src={`https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&q=80&w=300`} 
                                  alt="Uploaded preview" 
                                  className="w-full h-full object-cover" 
                                />
                              </div>
                            ))}
                          </div>
                        </div>

                        <div className="flex items-center gap-3 pt-2 mb-8">
                          <input 
                            type="checkbox" 
                            checked={agreed}
                            onChange={e => setAgreed(e.target.checked)}
                            className="w-5 h-5 rounded border-[#CBD5E1] text-brand-teal focus:ring-brand-teal cursor-pointer"
                          />
                          <span className="text-[13px] text-[#64748B]">
                            I agree to the <a href="#" className="text-brand-teal hover:underline font-medium">Terms of Service</a> and <a href="#" className="text-brand-teal hover:underline font-medium">Privacy Policy</a>
                          </span>
                        </div>

                        <div className="flex items-center gap-4 mt-8">
                          <button
                            type="button"
                            onClick={() => setStep(2)}
                            className="w-[120px] bg-[#F4FAFA] border border-brand-teal/20 text-brand-teal font-bold tracking-widest text-[11px] py-3.5 rounded-xl hover:bg-brand-teal/10 hover:border-brand-teal/40 transition-colors h-12 flex items-center justify-center uppercase"
                          >
                            <ArrowLeft className="w-4 h-4 mr-1.5" /> Back
                          </button>
                          <button
                            type="submit"
                            className="flex-1 bg-[#0CB9B4] text-white font-bold tracking-widest text-[11px] py-3.5 rounded-xl hover:bg-[#0aa39e] transition-colors h-12 flex items-center justify-center shadow-sm uppercase"
                          >
                            Register <ArrowRight className="w-4 h-4 ml-1.5" />
                          </button>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
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
