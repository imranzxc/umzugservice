'use client';

import Link from 'next/link';
import { useTranslations, useLocale } from 'next-intl';
import { Facebook, Instagram, Linkedin, Mail, Phone, MapPin } from 'lucide-react';
import { motion } from 'framer-motion';

export default function Footer() {
  const t = useTranslations('footer');
  const locale = useLocale();

  const quickLinks = [
    { name: t('services'), href: `/${locale}/services` },
    { name: 'Calculator', href: `/${locale}/calculator` },
    { name: 'About', href: `/${locale}/about` },
    { name: 'Contact', href: `/${locale}/contact` },
    { name: 'FAQ', href: `/${locale}/faq` },
  ];

  const legalLinks = [
    { name: t('privacy'), href: `/${locale}/privacy` },
    { name: t('terms'), href: `/${locale}/terms` },
    { name: t('imprint'), href: `/${locale}/imprint` },
  ];

  const socialLinks = [
    { name: 'Facebook', href: '#', icon: Facebook },
    { name: 'Instagram', href: '#', icon: Instagram },
    { name: 'LinkedIn', href: '#', icon: Linkedin },
  ];

  return (
    <footer className="bg-gray-900 text-white">
      <div className="container-custom py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-1"
          >
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-8 h-8 bg-primary-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-sm">A</span>
              </div>
              <span className="text-xl font-bold">AlpenMove</span>
            </div>
            <p className="text-gray-300 mb-6 leading-relaxed">
              {t('description')}
            </p>
            <div className="space-y-3">
              <div className="flex items-center space-x-3 text-gray-300">
                <Phone size={16} />
                <span>+41 41 123 45 67</span>
              </div>
              <div className="flex items-center space-x-3 text-gray-300">
                <Mail size={16} />
                <span>info@alpenmove.ch</span>
              </div>
              <div className="flex items-start space-x-3 text-gray-300">
                <MapPin size={16} className="mt-1" />
                <span>Bahnhofstrasse 1<br />6000 Luzern, Schweiz</span>
              </div>
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <h3 className="text-lg font-semibold mb-4">{t('quickLinks')}</h3>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-gray-300 hover:text-white transition-colors duration-200"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Services */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h3 className="text-lg font-semibold mb-4">{t('services')}</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href={`/${locale}/services`}
                  className="text-gray-300 hover:text-white transition-colors duration-200"
                >
                  Privatumzüge
                </Link>
              </li>
              <li>
                <Link
                  href={`/${locale}/services`}
                  className="text-gray-300 hover:text-white transition-colors duration-200"
                >
                  Firmenumzüge
                </Link>
              </li>
              <li>
                <Link
                  href={`/${locale}/services`}
                  className="text-gray-300 hover:text-white transition-colors duration-200"
                >
                  Auslandsumzüge
                </Link>
              </li>
              <li>
                <Link
                  href={`/${locale}/services`}
                  className="text-gray-300 hover:text-white transition-colors duration-200"
                >
                  Umzugsreinigung
                </Link>
              </li>
            </ul>
          </motion.div>

          {/* Legal & Social */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <h3 className="text-lg font-semibold mb-4">{t('legal')}</h3>
            <ul className="space-y-2 mb-6">
              {legalLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-gray-300 hover:text-white transition-colors duration-200"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>

            <h3 className="text-lg font-semibold mb-4">{t('followUs')}</h3>
            <div className="flex space-x-4">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center text-gray-300 hover:text-white hover:bg-primary-600 transition-all duration-200"
                  aria-label={social.name}
                >
                  <social.icon size={20} />
                </a>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Bottom Bar */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400"
        >
          <p>{t('copyright')}</p>
        </motion.div>
      </div>

      {/* Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "LocalBusiness",
            "name": "AlpenMove",
            "description": "Professionelle Umzugsservices im Kanton Luzern",
            "url": "https://alpenmove.ch",
            "telephone": "+41 41 123 45 67",
            "email": "info@alpenmove.ch",
            "address": {
              "@type": "PostalAddress",
              "streetAddress": "Bahnhofstrasse 1",
              "addressLocality": "Luzern",
              "postalCode": "6000",
              "addressCountry": "CH"
            },
            "geo": {
              "@type": "GeoCoordinates",
              "latitude": 47.0502,
              "longitude": 8.3093
            },
            "openingHours": "Mo-Fr 08:00-18:00",
            "priceRange": "CHF",
            "serviceArea": {
              "@type": "GeoCircle",
              "geoMidpoint": {
                "@type": "GeoCoordinates",
                "latitude": 47.0502,
                "longitude": 8.3093
              },
              "geoRadius": "50000"
            }
          })
        }}
      />
    </footer>
  );
} 