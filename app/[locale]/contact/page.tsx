import { Metadata } from 'next';
import { getTranslations } from 'next-intl/server';
import Layout from '@/components/Layout';
import ContactSection from '@/sections/ContactSection';

export async function generateMetadata({ params: { locale } }: { params: { locale: string } }): Promise<Metadata> {
  const t = await getTranslations('contact');
  
  return {
    title: t('title'),
    description: t('subtitle'),
    openGraph: {
      title: t('title'),
      description: t('subtitle'),
    },
  };
}

export default async function ContactPage({ params: { locale } }: { params: { locale: string } }) {
  return (
    <Layout>
      <div className="pt-20">
        <ContactSection />
      </div>
    </Layout>
  );
} 