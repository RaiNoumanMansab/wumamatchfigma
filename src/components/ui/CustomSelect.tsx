import React, { useState, useRef, useEffect } from 'react';
import { ChevronDown } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

interface CustomSelectProps {
  value: string;
  onChange: (value: string) => void;
  options: string[];
  placeholder?: string;
  className?: string;
}

export const CustomSelect: React.FC<CustomSelectProps> = ({
  value,
  onChange,
  options,
  placeholder,
  className = '',
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (containerRef.current && !containerRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <div className="relative w-full" ref={containerRef}>
      <button
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        className={`flex items-center justify-between w-full h-11 bg-white border border-zinc-200 rounded-lg pl-3 pr-3 font-inter text-[13px] sm:text-[14px] leading-[20px] font-normal text-brand-charcoal focus:outline-none focus:border-brand-teal transition-all ${className}`}
      >
        <span className="truncate">{value || placeholder || options[0]}</span>
        <ChevronDown
          className={`w-4 h-4 text-brand-charcoal/40 transition-transform duration-300 shrink-0 ${
            isOpen ? 'rotate-180' : ''
          }`}
        />
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className="absolute z-50 w-full mt-1 bg-white border border-brand-teal/20 rounded-lg shadow-lg overflow-hidden max-h-60 overflow-y-auto"
          >
            {options.map((option) => (
              <button
                key={option}
                type="button"
                onClick={() => {
                  onChange(option);
                  setIsOpen(false);
                }}
                className={`w-full text-left px-4 py-2.5 text-[13px] sm:text-[14px] font-inter hover:bg-brand-teal/5 hover:text-brand-teal transition-colors ${
                  value === option ? 'bg-brand-teal/10 text-brand-teal font-medium' : 'text-brand-charcoal'
                }`}
              >
                {option}
              </button>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};
