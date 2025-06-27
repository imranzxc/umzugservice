import { Metadata } from 'next';
import { getTranslations } from 'next-intl/server';
import Layout from '@/components/Layout';

export async function generateMetadata({ params: { locale } }: { params: { locale: string } }): Promise<Metadata> {
  return {
    title: 'Impressum | AlpenMove',
    description: 'Impressum von AlpenMove - Rechtliche Informationen und Unternehmensdetails.',
  };
}

export default async function ImprintPage({ params: { locale } }: { params: { locale: string } }) {
  return (
    <Layout>
      <div className="pt-20">
        <section className="section-padding bg-white">
          <div className="container-custom">
            <div className="max-w-4xl mx-auto">
              <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8">
                Impressum
              </h1>
              
              <div className="prose prose-lg max-w-none">
                <h2>Angaben gemäß § 5 TMG</h2>
                <p>
                  <strong>AlpenMove</strong><br />
                  Bahnhofstrasse 1<br />
                  6000 Luzern<br />
                  Schweiz
                </p>

                <h3>Vertreten durch</h3>
                <p>
                  Geschäftsführer: Max Mustermann<br />
                  Handelsregister: Handelsregister Luzern<br />
                  Registernummer: CHE-123.456.789
                </p>

                <h3>Kontakt</h3>
                <p>
                  Telefon: +41 41 123 45 67<br />
                  E-Mail: info@alpenmove.ch<br />
                  Website: https://alpenmove.ch
                </p>

                <h3>Umsatzsteuer-ID</h3>
                <p>
                  Umsatzsteuer-Identifikationsnummer gemäß § 27 a Umsatzsteuergesetz:<br />
                  CHE-123.456.789 MWST
                </p>

                <h2>Berufsbezeichnung und berufsrechtliche Regelungen</h2>
                <p>
                  <strong>Berufsbezeichnung:</strong> Umzugsservice<br />
                  <strong>Zuständige Kammer:</strong> Handelskammer Luzern<br />
                  <strong>Verliehen durch:</strong> Schweiz
                </p>

                <h2>Redaktionell verantwortlich</h2>
                <p>
                  Max Mustermann<br />
                  AlpenMove<br />
                  Bahnhofstrasse 1<br />
                  6000 Luzern<br />
                  Schweiz
                </p>

                <h2>EU-Streitschlichtung</h2>
                <p>
                  Die Europäische Kommission stellt eine Plattform zur Online-Streitbeilegung (OS) bereit: 
                  <a href="https://ec.europa.eu/consumers/odr/" target="_blank" rel="noopener noreferrer">
                    https://ec.europa.eu/consumers/odr/
                  </a>.<br />
                  Unsere E-Mail-Adresse finden Sie oben im Impressum.
                </p>

                <h2>Verbraucherstreitbeilegung/Universalschlichtungsstelle</h2>
                <p>
                  Wir sind nicht bereit oder verpflichtet, an Streitbeilegungsverfahren vor einer 
                  Verbraucherschlichtungsstelle teilzunehmen.
                </p>

                <h2>Haftung für Inhalte</h2>
                <p>
                  Als Diensteanbieter sind wir gemäß § 7 Abs.1 TMG für eigene Inhalte auf diesen Seiten nach den 
                  allgemeinen Gesetzen verantwortlich. Nach §§ 8 bis 10 TMG sind wir als Diensteanbieter jedoch nicht 
                  unter der Verpflichtung, übermittelte oder gespeicherte fremde Informationen zu überwachen oder nach 
                  Umständen zu forschen, die auf eine rechtswidrige Tätigkeit hinweisen.
                </p>

                <h2>Urheberrecht</h2>
                <p>
                  Die durch die Seitenbetreiber erstellten Inhalte und Werke auf diesen Seiten unterliegen dem 
                  schweizerischen Urheberrecht. Die Vervielfältigung, Bearbeitung, Verbreitung und jede Art der 
                  Verwertung außerhalb der Grenzen des Urheberrechtes bedürfen der schriftlichen Zustimmung des 
                  jeweiligen Autors bzw. Erstellers.
                </p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </Layout>
  );
} 