'use client';

import Link from 'next/link';
import { useTranslations, useLocale } from 'next-intl';
import { motion } from 'framer-motion';
import { ArrowRight, Truck, Shield, Clock, Phone } from 'lucide-react';

export default function HeroSection() {
  const t = useTranslations('hero');
  const locale = useLocale();

  const features = [
    {
      icon: Truck,
      title: 'Professionell',
      description: 'Erfahrene Fachkräfte'
    },
    {
      icon: Shield,
      title: 'Versichert',
      description: 'Vollständiger Schutz'
    },
    {
      icon: Clock,
      title: 'Pünktlich',
      description: 'Zuverlässige Termine'
    }
  ];

  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-primary-50 via-white to-primary-100 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0 bg-gradient-to-br from-primary-200 to-transparent"></div>
      </div>

      <div className="container-custom relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center pt-28 md:pt-0">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center lg:text-left"
          >
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight mb-4 md:mb-6"
            >
              {t('title')}
            </motion.h1>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-base sm:text-lg md:text-xl text-gray-600 mb-6 md:mb-8 leading-relaxed"
            >
              {t('subtitle')}
            </motion.p>

            {/* Phone Number Section */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="mb-6 md:mb-8"
            >
              <div className="inline-flex items-center bg-white rounded-full px-4 py-2 md:px-6 md:py-3 shadow-lg border border-gray-100">
                <Phone size={20} className="text-primary-600 mr-3" />
                <div className="text-left">
                  <p className="text-xs md:text-sm text-gray-600 mb-1">{t('phoneLabel')}</p>
                  <a 
                    href={`tel:${t('phoneNumber').replace(/\s/g, '')}`}
                    className="text-base md:text-lg font-bold text-primary-600 hover:text-primary-700 transition-colors duration-200"
                  >
                    {t('phoneNumber')}
                  </a>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="flex flex-col sm:flex-row gap-3 md:gap-4 justify-center lg:justify-start"
            >
              <Link
                href={`/${locale}/contact`}
                className="btn-primary inline-flex items-center justify-center group"
              >
                {t('cta')}
                <ArrowRight size={20} className="ml-2 group-hover:translate-x-1 transition-transform duration-200" />
              </Link>
              
              <Link
                href={`/${locale}/calculator`}
                className="btn-secondary inline-flex items-center justify-center"
              >
                {t('calculator')}
              </Link>
            </motion.div>
          </motion.div>

          {/* Visual */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="relative"
          >
            <div className="relative bg-white rounded-2xl shadow-2xl p-8 transform rotate-3 hover:rotate-0 transition-transform duration-500">
              <div className="bg-gradient-to-br from-primary-500 to-primary-700 rounded-xl p-6 text-white text-center">
                <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Truck size={32} />
                </div>
                <h3 className="text-xl font-semibold mb-2">Kostenlose Beratung</h3>
                <p className="text-primary-100">Lassen Sie sich von unseren Experten beraten</p>
              </div>
            </div>
            
            {/* Floating elements */}
            <motion.div
              animate={{ y: [-10, 10, -10] }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
              className="absolute top-2 right-2 md:-top-4 md:-right-4 bg-white rounded-lg shadow-lg p-3 md:p-4"
            >
              <div className="flex items-center space-x-2">
                <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                <span className="text-sm font-medium text-gray-700">Verfügbar</span>
              </div>
            </motion.div>
            
            <motion.div
              animate={{ y: [10, -10, 10] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="absolute bottom-2 left-2 md:-bottom-4 md:-left-4 bg-white rounded-lg shadow-lg p-3 md:p-4"
            >
              <div className="text-center">
                <div className="text-2xl font-bold text-primary-600">24/7</div>
                <div className="text-xs text-gray-600">Support</div>
              </div>
            </motion.div>
          </motion.div>
        </div>

        {/* Features */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 mt-10 md:mt-16"
        >
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 1 + index * 0.1 }}
              className="text-center group relative"
            >
              <div className="w-14 h-14 md:w-16 md:h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-3 md:mb-4 group-hover:bg-primary-200 transition-colors duration-200">
                <feature.icon size={22} className="md:w-7 md:h-7 text-primary-600" />
              </div>
              <h3 className="text-base md:text-lg font-semibold text-gray-900 mb-1 md:mb-2 mt-4 md:mt-0">{feature.title}</h3>
              {/* Scroll animation только для Pünktlich */}
              {feature.title === 'Pünktlich' && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 1, delay: 1.5 }}
                  className="flex justify-center my-2"
                >
                  <motion.div
                    animate={{ y: [0, 10, 0] }}
                    transition={{ duration: 2, repeat: Infinity }}
                    className="w-6 h-10 border-2 border-gray-400 rounded-full flex justify-center"
                  >
                    <motion.div
                      animate={{ y: [0, 12, 0] }}
                      transition={{ duration: 2, repeat: Infinity }}
                      className="w-1 h-3 bg-gray-400 rounded-full mt-2"
                    />
                  </motion.div>
                </motion.div>
              )}
              <p className="text-gray-600 text-sm md:text-base">{feature.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
} 