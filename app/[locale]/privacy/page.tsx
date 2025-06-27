import { Metadata } from 'next';
import { getTranslations } from 'next-intl/server';
import Layout from '@/components/Layout';

export async function generateMetadata({ params: { locale } }: { params: { locale: string } }): Promise<Metadata> {
  return {
    title: 'Datenschutz | AlpenMove',
    description: 'Datenschutzerklärung von AlpenMove - Informationen zum Schutz Ihrer persönlichen Daten.',
  };
}

export default async function PrivacyPage({ params: { locale } }: { params: { locale: string } }) {
  return (
    <Layout>
      <div className="pt-20">
        <section className="section-padding bg-white">
          <div className="container-custom">
            <div className="max-w-4xl mx-auto">
              <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8">
                Datenschutzerklärung
              </h1>
              
              <div className="prose prose-lg max-w-none">
                <h2>1. Datenschutz auf einen Blick</h2>
                <h3>Allgemeine Hinweise</h3>
                <p>
                  Die folgenden Hinweise geben einen einfachen Überblick darüber, was mit Ihren personenbezogenen Daten passiert, 
                  wenn Sie diese Website besuchen. Personenbezogene Daten sind alle Daten, mit denen Sie persönlich identifiziert 
                  werden können.
                </p>

                <h3>Datenerfassung auf dieser Website</h3>
                <p>
                  Die Datenverarbeitung auf dieser Website erfolgt durch den Websitebetreiber. Die Kontaktdaten können Sie dem 
                  Abschnitt "Hinweis zur Verantwortlichen Stelle" in dieser Datenschutzerklärung entnehmen.
                </p>

                <h2>2. Hosting</h2>
                <p>
                  Wir hosten unsere Website bei Vercel. Anbieter ist Vercel Inc., 340 S Lemon Ave #4133, Walnut, CA 91789, USA. 
                  Vercel verarbeitet Daten, die von Ihrem Browser an uns gesendet werden, wenn Sie unsere Website besuchen.
                </p>

                <h2>3. Allgemeine Hinweise und Pflichtinformationen</h2>
                <h3>Datenschutz</h3>
                <p>
                  Die Betreiber dieser Seiten nehmen den Schutz Ihrer persönlichen Daten sehr ernst. Wir behandeln Ihre 
                  personenbezogenen Daten vertraulich und entsprechend den gesetzlichen Datenschutzvorschriften sowie 
                  dieser Datenschutzerklärung.
                </p>

                <h2>4. Datenerfassung auf dieser Website</h2>
                <h3>Kontaktformular</h3>
                <p>
                  Wenn Sie uns per Kontaktformular Anfragen zukommen lassen, werden Ihre Angaben aus dem Anfrageformular 
                  inklusive der von Ihnen dort angegebenen Kontaktdaten zwecks Bearbeitung der Anfrage und für den Fall 
                  von Anschlussfragen bei uns gespeichert. Diese Daten geben wir nicht ohne Ihre Einwilligung weiter.
                </p>

                <h2>5. Ihre Rechte</h2>
                <p>
                  Sie haben das Recht, auf Antrag unentgeltlich eine Auskunft über die zu Ihrer Person gespeicherten 
                  personenbezogenen Daten zu erhalten. Sie haben außerdem ein Recht auf Berichtigung oder Löschung 
                  dieser Daten.
                </p>

                <h2>6. Kontakt</h2>
                <p>
                  Bei Fragen zur Erhebung, Verarbeitung oder Nutzung Ihrer personenbezogenen Daten wenden Sie sich bitte an:
                </p>
                <p>
                  AlpenMove<br />
                  Bahnhofstrasse 1<br />
                  6000 Luzern, Schweiz<br />
                  E-Mail: info@alpenmove.ch<br />
                  Telefon: +41 41 123 45 67
                </p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </Layout>
  );
} 