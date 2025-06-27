'use client';

import { useState } from 'react';
import { useTranslations } from 'next-intl';
import { motion } from 'framer-motion';
import { Calculator, MapPin, Home, Package, Wrench } from 'lucide-react';
import { calculateDistance, calculateMovePrice, formatPrice } from '@/lib/utils';

export default function CalculatorSection() {
  const t = useTranslations('calculator');
  const [formData, setFormData] = useState({
    from: '',
    to: '',
    volume: '2.5',
    floor: 1,
    elevator: true,
    optionalServices: [] as string[]
  });
  const [estimatedPrice, setEstimatedPrice] = useState<number | null>(null);
  const [isCalculating, setIsCalculating] = useState(false);

  const volumeOptions = Object.entries(t.raw('volumeOptions')).map(([key, value]) => ({
    value: key.replace('_', '.'),
    label: value as string
  }));

  const optionalServicesOptions = Object.entries(t.raw('optionalServicesOptions')).map(([key, value]) => ({
    value: key,
    label: value as string
  }));

  const handleInputChange = (field: string, value: any) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleServiceToggle = (service: string) => {
    setFormData(prev => ({
      ...prev,
      optionalServices: prev.optionalServices.includes(service)
        ? prev.optionalServices.filter(s => s !== service)
        : [...prev.optionalServices, service]
    }));
  };

  const calculatePrice = () => {
    if (!formData.from || !formData.to) return;

    setIsCalculating(true);
    
    // Simulate API call delay
    setTimeout(() => {
      const distance = calculateDistance(formData.from, formData.to);
      const price = calculateMovePrice(
        distance,
        formData.volume,
        formData.floor,
        formData.elevator,
        formData.optionalServices
      );
      
      setEstimatedPrice(price);
      setIsCalculating(false);
    }, 1000);
  };

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
          <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-6">
            <Calculator size={32} className="text-primary-600" />
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            {t('title')}
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            {t('subtitle')}
          </p>
        </motion.div>

        <div className="flex flex-col lg:flex-row gap-8 items-stretch">
          {/* Calculator Form */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="bg-white rounded-2xl shadow-xl p-6 md:p-8 flex-1 flex flex-col justify-between"
          >
            <form className="space-y-4 flex-1 flex flex-col justify-between h-full">
              {/* Address Fields */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    <MapPin size={16} className="inline mr-2" />
                    {t('from')}
                  </label>
                  <input
                    type="text"
                    value={formData.from}
                    onChange={(e) => handleInputChange('from', e.target.value)}
                    placeholder="z.B. Luzern"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-colors duration-200"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    <MapPin size={16} className="inline mr-2" />
                    {t('to')}
                  </label>
                  <input
                    type="text"
                    value={formData.to}
                    onChange={(e) => handleInputChange('to', e.target.value)}
                    placeholder="z.B. Zürich"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-colors duration-200"
                  />
                </div>
              </div>

              {/* Volume Selection */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  <Home size={16} className="inline mr-2" />
                  {t('volume')}
                </label>
                <select
                  value={formData.volume}
                  onChange={(e) => handleInputChange('volume', e.target.value)}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-colors duration-200"
                >
                  {volumeOptions.map((option) => (
                    <option key={option.value} value={option.value}>
                      {option.label}
                    </option>
                  ))}
                </select>
              </div>

              {/* Floor and Elevator */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    {t('floor')}
                  </label>
                  <select
                    value={formData.floor}
                    onChange={(e) => handleInputChange('floor', parseInt(e.target.value))}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-colors duration-200"
                  >
                    {[1, 2, 3, 4, 5, 6].map((floor) => (
                      <option key={floor} value={floor}>
                        {floor}. Stock
                      </option>
                    ))}
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    {t('elevator')}
                  </label>
                  <div className="flex space-x-4">
                    <label className="flex items-center">
                      <input
                        type="radio"
                        checked={formData.elevator}
                        onChange={() => handleInputChange('elevator', true)}
                        className="mr-2 text-primary-600 focus:ring-primary-500"
                      />
                      Ja
                    </label>
                    <label className="flex items-center">
                      <input
                        type="radio"
                        checked={!formData.elevator}
                        onChange={() => handleInputChange('elevator', false)}
                        className="mr-2 text-primary-600 focus:ring-primary-500"
                      />
                      Nein
                    </label>
                  </div>
                </div>
              </div>

              {/* Optional Services */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-3">
                  <Package size={16} className="inline mr-2" />
                  {t('optionalServices')}
                </label>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  {optionalServicesOptions.map((service) => (
                    <label key={service.value} className="flex items-center">
                      <input
                        type="checkbox"
                        checked={formData.optionalServices.includes(service.value)}
                        onChange={() => handleServiceToggle(service.value)}
                        className="mr-3 text-primary-600 focus:ring-primary-500 rounded"
                      />
                      <span className="text-sm text-gray-700">{service.label}</span>
                    </label>
                  ))}
                </div>
              </div>

              <button
                type="button"
                onClick={calculatePrice}
                disabled={!formData.from || !formData.to || isCalculating}
                className="w-full btn-primary disabled:opacity-50 disabled:cursor-not-allowed mt-2"
              >
                {isCalculating ? (
                  <div className="flex items-center justify-center">
                    <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></div>
                    Berechne...
                  </div>
                ) : (
                  t('calculate')
                )}
              </button>
            </form>
          </motion.div>

          {/* Price Display */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
            className="bg-gradient-to-br from-primary-500 to-primary-700 rounded-2xl p-6 lg:p-8 text-white flex-1 flex flex-col justify-center min-h-[520px]"
          >
            <div className="text-center flex flex-col justify-center h-full">
              <div className="w-12 h-12 lg:w-16 lg:h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4 lg:mb-6">
                <Wrench size={24} className="lg:w-8 lg:h-8" />
              </div>
              <h3 className="text-xl lg:text-2xl font-bold mb-4">{t('estimate')}</h3>
              
              {estimatedPrice ? (
                <motion.div
                  initial={{ scale: 0.8, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ duration: 0.5 }}
                  className="mb-4 lg:mb-6"
                >
                  <div className="text-3xl lg:text-4xl xl:text-5xl font-bold mb-2">
                    {formatPrice(estimatedPrice)}
                  </div>
                  <p className="text-primary-100 text-sm lg:text-base">inkl. MwSt.</p>
                </motion.div>
              ) : (
                <div className="text-3xl lg:text-4xl xl:text-5xl font-bold mb-4 lg:mb-6 text-primary-200">
                  ---
                </div>
              )}

              <div className="space-y-2 lg:space-y-3 text-xs lg:text-sm text-primary-100">
                <p>✓ Transparente Preise</p>
                <p>✓ Keine versteckten Kosten</p>
                <p>✓ Kostenlose Beratung</p>
                <p>✓ Vollständig versichert</p>
              </div>

              <div className="mt-6 lg:mt-8 p-3 lg:p-4 bg-white/10 rounded-lg">
                <p className="text-xs lg:text-sm">
                  * Dies ist eine Schätzung. Für ein genaues Angebot kontaktieren Sie uns.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
} 