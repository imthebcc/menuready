'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

export function StickyMobileCTA() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 120) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          transition={{ duration: 0.3, ease: 'easeOut' }}
          className="md:hidden fixed bottom-0 left-0 right-0 z-50 bg-white border-t-2 border-red-600 rounded-t-2xl shadow-2xl"
          style={{ paddingBottom: 'env(safe-area-inset-bottom)' }}
        >
          <div className="p-4">
            <Link
              href="/onboarding"
              className="w-full flex items-center justify-center gap-2 px-6 py-4 min-h-[52px] bg-red-600 text-white text-lg font-bold rounded-lg hover:bg-red-700 transition-all shadow-lg active:scale-95"
            >
              Review My Draft Menu
              <ArrowRight className="w-5 h-5" />
            </Link>
            <p className="text-center text-xs text-slate-500 mt-2">
              Free · No credit card · Takes 30 seconds
            </p>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
