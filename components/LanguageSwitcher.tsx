'use client';

import { useState } from 'react';
import Link from 'next/link';
import { useLocale } from 'next-intl';
import { usePathname } from 'next/navigation';
import { Globe, ChevronDown } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const languages = [
  { code: 'de', name: 'Deutsch', flag: '🇨🇭' },
  { code: 'en', name: 'English', flag: '🇺🇸' },
  { code: 'fr', name: 'Français', flag: '🇫🇷' },
  { code: 'it', name: 'Italiano', flag: '🇮🇹' },
];

export default function LanguageSwitcher() {
  const [isOpen, setIsOpen] = useState(false);
  const locale = useLocale();
  const pathname = usePathname();

  const currentLanguage = languages.find(lang => lang.code === locale);

  const getLocalizedPath = (newLocale: string) => {
    const pathWithoutLocale = pathname.replace(`/${locale}`, '');
    return `/${newLocale}${pathWithoutLocale}`;
  };

  return (
    <div className="relative">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center space-x-2 px-3 py-2 rounded-lg text-gray-700 hover:text-primary-600 hover:bg-gray-100 transition-colors duration-200"
        aria-label="Select language"
        aria-expanded={isOpen}
        aria-haspopup="true"
      >
        <Globe size={16} />
        <span className="text-sm font-medium">{currentLanguage?.flag}</span>
        <ChevronDown 
          size={14} 
          className={`transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`}
        />
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -10, scale: 0.95 }}
            transition={{ duration: 0.2 }}
            className="absolute right-0 mt-2 w-48 bg-white rounded-lg shadow-lg border border-gray-200 py-2 z-50"
          >
            {languages.map((language) => (
              <Link
                key={language.code}
                href={getLocalizedPath(language.code)}
                onClick={() => setIsOpen(false)}
                className={`flex items-center space-x-3 px-4 py-2 text-sm hover:bg-gray-50 transition-colors duration-200 ${
                  language.code === locale ? 'text-primary-600 bg-primary-50' : 'text-gray-700'
                }`}
              >
                <span className="text-lg">{language.flag}</span>
                <span className="font-medium">{language.name}</span>
                {language.code === locale && (
                  <div className="ml-auto w-2 h-2 bg-primary-600 rounded-full"></div>
                )}
              </Link>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
} 