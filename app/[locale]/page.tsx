import { Metadata } from 'next';
import { getTranslations } from 'next-intl/server';
import Layout from '@/components/Layout';
import HeroSection from '@/sections/HeroSection';
import ServicesSection from '@/sections/ServicesSection';
import CalculatorSection from '@/sections/CalculatorSection';
import TestimonialsSection from '@/sections/TestimonialsSection';
import AboutSection from '@/sections/AboutSection';
import FAQSection from '@/sections/FAQSection';
import ContactSection from '@/sections/ContactSection';

export async function generateMetadata({ params: { locale } }: { params: { locale: string } }): Promise<Metadata> {
  const t = await getTranslations('hero');
  
  return {
    title: t('title'),
    description: t('subtitle'),
    openGraph: {
      title: t('title'),
      description: t('subtitle'),
    },
  };
}

export default async function HomePage({ params: { locale } }: { params: { locale: string } }) {
  return (
    <Layout>
      <HeroSection />
      <ServicesSection />
      <CalculatorSection />
      <TestimonialsSection />
      <AboutSection />
      <FAQSection />
      <ContactSection />
    </Layout>
  );
} 