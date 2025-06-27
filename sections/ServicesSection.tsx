'use client';

import { useTranslations } from 'next-intl';
import { motion } from 'framer-motion';
import {
  Home,
  Building2,
  Plane,
  Sparkles,
  Trash2,
  Warehouse,
  Music,
  Package,
  Wrench,
  Truck,
  Car,
  Star
} from 'lucide-react';

export default function ServicesSection() {
  const t = useTranslations('services');

  const services = [
    {
      id: 'private',
      icon: Home,
      color: 'bg-blue-500',
      delay: 0
    },
    {
      id: 'business',
      icon: Building2,
      color: 'bg-green-500',
      delay: 0.1
    },
    {
      id: 'international',
      icon: Plane,
      color: 'bg-purple-500',
      delay: 0.2
    },
    {
      id: 'cleaning',
      icon: Sparkles,
      color: 'bg-yellow-500',
      delay: 0.3
    },
    {
      id: 'disposal',
      icon: Trash2,
      color: 'bg-red-500',
      delay: 0.4
    },
    {
      id: 'storage',
      icon: Warehouse,
      color: 'bg-indigo-500',
      delay: 0.5
    },
    {
      id: 'piano',
      icon: Music,
      color: 'bg-pink-500',
      delay: 0.6
    },
    {
      id: 'packing',
      icon: Package,
      color: 'bg-orange-500',
      delay: 0.7
    },
    {
      id: 'assembly',
      icon: Wrench,
      color: 'bg-teal-500',
      delay: 0.8
    },
    {
      id: 'lift',
      icon: Truck,
      color: 'bg-cyan-500',
      delay: 0.9
    },
    {
      id: 'transport',
      icon: Car,
      color: 'bg-emerald-500',
      delay: 1.0
    },
    {
      id: 'fullservice',
      icon: Star,
      color: 'bg-rose-500',
      delay: 1.1
    }
  ];

  return (
    <section className="section-padding bg-white">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            {t('title')}
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            {t('subtitle')}
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 items-stretch">
          {services.map((service) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: service.delay }}
              viewport={{ once: true }}
              className="group h-full"
            >
              <div className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-primary-200 card-hover h-full flex flex-col">
                <div className={`w-12 h-12 ${service.color} rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-200`}>
                  <service.icon size={24} className="text-white" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  {t(`items.${service.id}.title`)}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed mt-auto">
                  {t(`items.${service.id}.subtitle`)}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <div className="bg-gradient-to-r from-primary-50 to-primary-100 rounded-2xl p-8 md:p-12">
            <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
              Brauchen Sie eine maßgeschneiderte Lösung?
            </h3>
            <p className="text-lg text-gray-600 mb-6 max-w-2xl mx-auto">
              Kontaktieren Sie uns für eine persönliche Beratung und ein individuelles Angebot.
            </p>
            <button className="btn-primary">
              Jetzt anfragen
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
} 