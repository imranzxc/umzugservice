'use client';

import { useTranslations } from 'next-intl';
import { motion } from 'framer-motion';
import { Award, Users, Clock, Shield } from 'lucide-react';

export default function AboutSection() {
  const t = useTranslations('about');

  const values = [
    {
      icon: Award,
      title: t('values.reliability'),
      description: 'Wir halten unsere Versprechen und sind zuverlässige Partner für Ihre Umzüge.'
    },
    {
      icon: Users,
      title: t('values.quality'),
      description: 'Höchste Qualitätsstandards bei jedem Umzug und jedem Service.'
    },
    {
      icon: Clock,
      title: t('values.punctuality'),
      description: 'Pünktlichkeit ist unser Markenzeichen - Sie können sich auf uns verlassen.'
    },
    {
      icon: Shield,
      title: t('values.care'),
      description: 'Sorgfältiger Umgang mit Ihren wertvollen Besitztümern steht an erster Stelle.'
    }
  ];

  return (
    <section className="section-padding bg-gray-50">
      <div className="container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              {t('title')}
            </h2>
            <p className="text-xl text-gray-600 mb-6 leading-relaxed">
              {t('subtitle')}
            </p>
            <p className="text-gray-600 mb-8 leading-relaxed">
              {t('description')}
            </p>

            {/* Values */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {values.map((value, index) => (
                <motion.div
                  key={value.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="flex items-start space-x-3"
                >
                  <div className="w-10 h-10 bg-primary-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <value.icon size={20} className="text-primary-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">{value.title}</h3>
                    <p className="text-sm text-gray-600">{value.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Visual */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="bg-white rounded-2xl shadow-xl p-8">
              <div className="space-y-6">
                <div className="text-center">
                  <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Award size={32} className="text-primary-600" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Unsere Mission</h3>
                  <p className="text-gray-600">
                    Stressfreie Umzüge durch professionellen Service und persönliche Betreuung.
                  </p>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div className="text-center p-4 bg-gray-50 rounded-lg">
                    <div className="text-2xl font-bold text-primary-600 mb-1">10+</div>
                    <div className="text-sm text-gray-600">Jahre Erfahrung</div>
                  </div>
                  <div className="text-center p-4 bg-gray-50 rounded-lg">
                    <div className="text-2xl font-bold text-primary-600 mb-1">500+</div>
                    <div className="text-sm text-gray-600">Zufriedene Kunden</div>
                  </div>
                  <div className="text-center p-4 bg-gray-50 rounded-lg">
                    <div className="text-2xl font-bold text-primary-600 mb-1">1000+</div>
                    <div className="text-sm text-gray-600">Erfolgreiche Umzüge</div>
                  </div>
                  <div className="text-center p-4 bg-gray-50 rounded-lg">
                    <div className="text-2xl font-bold text-primary-600 mb-1">24/7</div>
                    <div className="text-sm text-gray-600">Support verfügbar</div>
                  </div>
                </div>

                <div className="bg-primary-50 rounded-lg p-4">
                  <h4 className="font-semibold text-primary-900 mb-2">Warum AlpenMove?</h4>
                  <ul className="text-sm text-primary-800 space-y-1">
                    <li>• Lokaler Service im Kanton Luzern</li>
                    <li>• Transparente Preise ohne versteckte Kosten</li>
                    <li>• Vollständig versicherte Umzüge</li>
                    <li>• Erfahrene und geschulte Mitarbeiter</li>
                    <li>• Flexible Termine auch am Wochenende</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Floating elements */}
            <motion.div
              animate={{ y: [-10, 10, -10] }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -top-4 -right-4 bg-white rounded-lg shadow-lg p-4"
            >
              <div className="text-center">
                <div className="text-2xl font-bold text-primary-600">4.9★</div>
                <div className="text-xs text-gray-600">Google Bewertung</div>
              </div>
            </motion.div>
            
            <motion.div
              animate={{ y: [10, -10, 10] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -bottom-4 -left-4 bg-white rounded-lg shadow-lg p-4"
            >
              <div className="text-center">
                <div className="text-2xl font-bold text-green-600">✓</div>
                <div className="text-xs text-gray-600">Zertifiziert</div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
} 