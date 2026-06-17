import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';

export const NotFoundPage: React.FC = () => {
  return (
    <div className="relative z-10 bg-[#EEEEE9] min-h-[70vh] flex flex-col items-center justify-center pt-32 pb-16 px-4">
      <div className="relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-xl mx-auto flex flex-col items-center"
        >
          <span className="block text-xs font-bold tracking-[0.25em] text-brand-gold uppercase font-sans mb-4">
            ERROR 404
          </span>
          <h1 className="font-serif text-5xl sm:text-7xl font-medium leading-tight tracking-tight text-brand-charcoal mb-6">
            Page Not Found
          </h1>
          <p className="text-brand-charcoal/70 text-sm sm:text-base leading-relaxed max-w-md mx-auto font-light mb-10">
            The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.
          </p>
          
          <Link
            to="/"
            className="group inline-flex h-12 items-center justify-center gap-2 bg-brand-teal text-white px-8 font-bold text-[10px] tracking-widest uppercase rounded-xl hover:bg-[#0aa39e] transition-all duration-300 shadow-sm hover:shadow hover:-translate-y-0.5"
          >
            <ArrowLeft className="w-3.5 h-3.5 stroke-[2.5] transition-transform duration-300 group-active:-rotate-90" />
            Back to Homepage
          </Link>
        </motion.div>
      </div>
    </div>
  );
};
