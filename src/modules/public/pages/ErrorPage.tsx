import React from 'react';
import { motion } from 'framer-motion';
import { Link, useSearchParams } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';

interface ErrorPageProps {
  defaultCode?: string;
  defaultTitle?: string;
  defaultMessage?: string;
}

export const ErrorPage: React.FC<ErrorPageProps> = ({ 
  defaultCode = '404', 
  defaultTitle = 'Page Not Found', 
  defaultMessage = 'The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.' 
}) => {
  const [searchParams] = useSearchParams();
  
  const code = searchParams.get('code') || defaultCode;
  const title = searchParams.get('title') || defaultTitle;
  const message = searchParams.get('message') || defaultMessage;

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
            ERROR {code}
          </span>
          <h1 className="font-serif text-5xl sm:text-7xl font-medium leading-tight tracking-tight text-brand-charcoal mb-6">
            {title}
          </h1>
          <p className="text-brand-charcoal/70 text-sm sm:text-base leading-relaxed max-w-md mx-auto font-light mb-10">
            {message}
          </p>
          
          <Link
            to={code === '401' ? '/login' : '/'}
            className="group inline-flex h-12 items-center justify-center gap-2 bg-brand-teal text-white px-8 font-bold text-[10px] tracking-widest uppercase rounded-xl hover:bg-[#0aa39e] transition-all duration-300 shadow-sm hover:shadow hover:-translate-y-0.5"
          >
            <ArrowLeft className="w-3.5 h-3.5 stroke-[2.5] transition-transform duration-300 group-active:-rotate-90" />
            {code === '401' ? 'Go to Login' : 'Back to Homepage'}
          </Link>
        </motion.div>
      </div>
    </div>
  );
};
