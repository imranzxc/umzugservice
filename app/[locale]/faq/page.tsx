import { Metadata } from 'next';
import { getTranslations } from 'next-intl/server';
import Layout from '@/components/Layout';
import FAQSection from '@/sections/FAQSection';

export async function generateMetadata({ params: { locale } }: { params: { locale: string } }): Promise<Metadata> {
  const t = await getTranslations('faq');
  
  return {
    title: t('title'),
    description: 'Häufig gestellte Fragen zu unseren Umzugsservices. Finden Sie Antworten auf die wichtigsten Fragen.',
    openGraph: {
      title: t('title'),
      description: 'Häufig gestellte Fragen zu unseren Umzugsservices.',
    },
  };
}

export default async function FAQPage({ params: { locale } }: { params: { locale: string } }) {
  return (
    <Layout>
      <div className="pt-20">
        <FAQSection />
      </div>
    </Layout>
  );
} 