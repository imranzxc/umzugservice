'use client';

import { useState } from 'react';
import { useTranslations } from 'next-intl';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Send, Clock } from 'lucide-react';

export default function ContactSection() {
  const t = useTranslations('contact');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');

    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitStatus('success');
      setFormData({ name: '', email: '', phone: '', message: '' });
      
      // Reset success message after 3 seconds
      setTimeout(() => setSubmitStatus('idle'), 3000);
    }, 1500);
  };

  const contactInfo = [
    {
      icon: Phone,
      title: 'Telefon',
      value: t('phoneNumber'),
      href: `tel:${t('phoneNumber')}`
    },
    {
      icon: Mail,
      title: 'E-Mail',
      value: t('emailAddress'),
      href: `mailto:${t('emailAddress')}`
    },
    {
      icon: MapPin,
      title: 'Adresse',
      value: t('officeAddress'),
      href: '#'
    },
    {
      icon: Clock,
      title: 'Öffnungszeiten',
      value: 'Mo-Fr: 08:00-18:00',
      href: '#'
    }
  ];

  return (
    <section className="section-padding bg-gray-50">
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

        <div className="flex flex-col lg:flex-row gap-8 items-stretch">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="bg-white rounded-2xl shadow-xl p-6 md:p-8 flex-1 flex flex-col justify-between"
          >
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Kontaktformular</h3>
            <form onSubmit={handleSubmit} className="space-y-5 flex-1 flex flex-col justify-between h-full">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    {t('name')} *
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => handleInputChange('name', e.target.value)}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-colors duration-200"
                    placeholder="Ihr Name"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    {t('email')} *
                  </label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => handleInputChange('email', e.target.value)}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-colors duration-200"
                    placeholder="ihre.email@example.com"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  {t('phone')}
                </label>
                <input
                  type="tel"
                  value={formData.phone}
                  onChange={(e) => handleInputChange('phone', e.target.value)}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-colors duration-200"
                  placeholder="+41 41 123 45 67"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  {t('message')} *
                </label>
                <textarea
                  required
                  rows={4}
                  value={formData.message}
                  onChange={(e) => handleInputChange('message', e.target.value)}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-colors duration-200 resize-none"
                  placeholder="Beschreiben Sie Ihren Umzug..."
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full btn-primary disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSubmitting ? (
                  <div className="flex items-center justify-center">
                    <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></div>
                    Wird gesendet...
                  </div>
                ) : (
                  <div className="flex items-center justify-center">
                    <Send size={20} className="mr-2" />
                    {t('send')}
                  </div>
                )}
              </button>

              {submitStatus === 'success' && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="p-4 bg-green-50 border border-green-200 rounded-lg"
                >
                  <p className="text-green-800 text-sm">
                    Vielen Dank! Ihre Nachricht wurde erfolgreich gesendet. Wir melden uns innerhalb von 24 Stunden bei Ihnen.
                  </p>
                </motion.div>
              )}

              {submitStatus === 'error' && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="p-4 bg-red-50 border border-red-200 rounded-lg"
                >
                  <p className="text-red-800 text-sm">
                    Es gab einen Fehler beim Senden Ihrer Nachricht. Bitte versuchen Sie es erneut oder kontaktieren Sie uns telefonisch.
                  </p>
                </motion.div>
              )}
            </form>
          </motion.div>

          {/* Right Side: All info in one card */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
            className="flex-1 flex flex-col justify-between"
          >
            <div className="bg-white rounded-2xl shadow-xl p-4 md:p-6 flex flex-col gap-4 min-h-[520px] h-full">
              {/* Contact Info Cards */}
              <div className="space-y-3">
                {contactInfo.map((info, index) => (
                  <motion.div
                    key={info.title}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.5 + index * 0.1 }}
                    viewport={{ once: true }}
                    className="bg-gray-50 rounded-xl p-4 flex items-start space-x-3 border border-gray-100"
                  >
                    <div className="w-10 h-10 bg-primary-100 rounded-lg flex items-center justify-center flex-shrink-0">
                      <info.icon size={20} className="text-primary-600" />
                    </div>
                    <div className="flex-1">
                      <h3 className="font-semibold text-gray-900 mb-1 text-sm">{info.title}</h3>
                      <a
                        href={info.href}
                        className="text-gray-600 hover:text-primary-600 transition-colors duration-200 text-sm"
                      >
                        {info.value}
                      </a>
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* Map */}
              <div className="bg-gray-50 rounded-xl overflow-hidden mt-2">
                <div className="h-40 md:h-48 w-full rounded-xl overflow-hidden">
                  <iframe
                    title="AlpenMove Standort"
                    src="https://www.google.com/maps?q=Bahnhofstrasse+1,+6000+Luzern,+Schweiz&output=embed"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen={false}
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                  />
                </div>
              </div>

              {/* Service Area */}
              <div className="bg-gradient-to-r from-primary-500 to-primary-700 rounded-xl p-4 text-white mt-2">
                <h3 className="text-lg font-semibold mb-2">Servicegebiet</h3>
                <p className="text-primary-100 mb-2 text-sm">
                  Wir bieten unsere Umzugsservices im gesamten Kanton Luzern und den angrenzenden Gebieten an.
                </p>
                <div className="grid grid-cols-2 gap-1 text-xs">
                  <div>• Luzern</div>
                  <div>• Zug</div>
                  <div>• Zürich</div>
                  <div>• Bern</div>
                  <div>• Basel</div>
                  <div>• Aargau</div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
} 