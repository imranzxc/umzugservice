import { Metadata } from 'next';
import { getTranslations } from 'next-intl/server';
import Layout from '@/components/Layout';
import AboutSection from '@/sections/AboutSection';

export async function generateMetadata({ params: { locale } }: { params: { locale: string } }): Promise<Metadata> {
  const t = await getTranslations('about');
  
  return {
    title: t('title'),
    description: t('subtitle'),
    openGraph: {
      title: t('title'),
      description: t('subtitle'),
    },
  };
}

export default async function AboutPage({ params: { locale } }: { params: { locale: string } }) {
  return (
    <Layout>
      <div className="pt-20">
        <AboutSection />
      </div>
    </Layout>
  );
} 