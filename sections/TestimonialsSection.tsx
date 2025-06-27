'use client';

import { useTranslations } from 'next-intl';
import { motion } from 'framer-motion';
import { Star, Quote } from 'lucide-react';

export default function TestimonialsSection() {
  const t = useTranslations('testimonials');

  const testimonials = [
    {
      id: 1,
      name: 'Sarah Müller',
      role: 'Privatkundin',
      content: 'AlpenMove hat unseren Umzug von Luzern nach Zürich perfekt organisiert. Das Team war pünktlich, professionell und sehr sorgfältig. Alles wurde sicher transportiert und aufgebaut. Sehr empfehlenswert!',
      rating: 5,
      location: 'Luzern → Zürich'
    },
    {
      id: 2,
      name: 'Michael Weber',
      role: 'Geschäftskunde',
      content: 'Als Firma haben wir bereits mehrere Umzüge mit AlpenMove durchgeführt. Immer zuverlässig, transparente Preise und exzellenter Service. Das Team kennt sich aus und arbeitet sehr effizient.',
      rating: 5,
      location: 'Firmenumzug'
    },
    {
      id: 3,
      name: 'Anna Schmidt',
      role: 'Privatkundin',
      content: 'Der Klaviertransport war eine Herausforderung, aber AlpenMove hat es perfekt gemeistert. Das Klavier ist ohne einen Kratzer angekommen. Vielen Dank für die professionelle Arbeit!',
      rating: 5,
      location: 'Klaviertransport'
    },
    {
      id: 4,
      name: 'Thomas Fischer',
      role: 'Privatkunde',
      content: 'Schnelle Reaktion, faire Preise und ein sehr freundliches Team. Der Umzug war stressfrei und alles wurde wie versprochen erledigt. Gerne wieder!',
      rating: 5,
      location: 'Luzern → Zug'
    },
    {
      id: 5,
      name: 'Lisa Wagner',
      role: 'Privatkundin',
      content: 'Besonders beeindruckt hat mich der Ein- und Auspackservice. Alles war perfekt organisiert und die Möbel wurden fachgerecht aufgebaut. Ein rundum gelungener Service.',
      rating: 5,
      location: 'Full-Service Umzug'
    },
    {
      id: 6,
      name: 'David Hoffmann',
      role: 'Geschäftskunde',
      content: 'Für unseren Büroumzug haben wir AlpenMove gewählt und wurden nicht enttäuscht. Das Team arbeitete auch am Wochenende und störte den Geschäftsbetrieb minimal.',
      rating: 5,
      location: 'Büroumzug'
    }
  ];

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, i) => (
      <Star
        key={i}
        size={16}
        className={`${i < rating ? 'text-yellow-400 fill-current' : 'text-gray-300'}`}
      />
    ));
  };

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

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group h-full"
            >
              <div className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-primary-200 card-hover h-full flex flex-col">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center space-x-1">
                    {renderStars(testimonial.rating)}
                  </div>
                  <Quote size={20} className="text-primary-200" />
                </div>
                
                <p className="text-gray-600 mb-6 leading-relaxed flex-grow">
                  "{testimonial.content}"
                </p>
                
                <div className="border-t border-gray-100 pt-4 mt-auto">
                  <div className="flex items-center justify-between">
                    <div>
                      <h4 className="font-semibold text-gray-900">{testimonial.name}</h4>
                      <p className="text-sm text-gray-500">{testimonial.role}</p>
                    </div>
                    <div className="text-right">
                      <p className="text-xs text-primary-600 font-medium">{testimonial.location}</p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="mt-16 grid grid-cols-1 md:grid-cols-4 gap-8"
        >
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold text-primary-600 mb-2">500+</div>
            <p className="text-gray-600">Zufriedene Kunden</p>
          </div>
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold text-primary-600 mb-2">1000+</div>
            <p className="text-gray-600">Erfolgreiche Umzüge</p>
          </div>
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold text-primary-600 mb-2">4.9/5</div>
            <p className="text-gray-600">Durchschnittliche Bewertung</p>
          </div>
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold text-primary-600 mb-2">10+</div>
            <p className="text-gray-600">Jahre Erfahrung</p>
          </div>
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <div className="bg-gradient-to-r from-primary-50 to-primary-100 rounded-2xl p-8 md:p-12">
            <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
              Werden Sie Teil unserer Erfolgsgeschichte
            </h3>
            <p className="text-lg text-gray-600 mb-6 max-w-2xl mx-auto">
              Lassen Sie sich von unseren zufriedenen Kunden überzeugen und kontaktieren Sie uns für Ihren nächsten Umzug.
            </p>
            <button className="btn-primary">
              Jetzt Angebot anfordern
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
} 