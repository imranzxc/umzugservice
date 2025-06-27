import { Metadata } from 'next';
import { getTranslations } from 'next-intl/server';
import Layout from '@/components/Layout';

export async function generateMetadata({ params: { locale } }: { params: { locale: string } }): Promise<Metadata> {
  return {
    title: 'Allgemeine Geschäftsbedingungen | AlpenMove',
    description: 'Allgemeine Geschäftsbedingungen von AlpenMove - Die rechtlichen Bedingungen für unsere Umzugsservices.',
  };
}

export default async function TermsPage({ params: { locale } }: { params: { locale: string } }) {
  return (
    <Layout>
      <div className="pt-20">
        <section className="section-padding bg-white">
          <div className="container-custom">
            <div className="max-w-4xl mx-auto">
              <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8">
                Allgemeine Geschäftsbedingungen
              </h1>
              
              <div className="prose prose-lg max-w-none">
                <h2>§1 Geltungsbereich</h2>
                <p>
                  Diese Allgemeinen Geschäftsbedingungen gelten für alle Verträge zwischen AlpenMove und unseren Kunden 
                  über die Erbringung von Umzugsservices.
                </p>

                <h2>§2 Vertragsschluss</h2>
                <p>
                  Der Vertrag kommt durch Angebot und Annahme zustande. Unsere Angebote sind freibleibend und gelten 
                  für 30 Tage ab Ausstellungsdatum.
                </p>

                <h2>§3 Leistungsumfang</h2>
                <p>
                  AlpenMove erbringt Umzugsservices einschließlich Verpackung, Transport, Entladen und Aufbau von Möbeln. 
                  Der genaue Leistungsumfang wird im jeweiligen Angebot spezifiziert.
                </p>

                <h2>§4 Preise und Zahlung</h2>
                <p>
                  Alle Preise verstehen sich in Schweizer Franken (CHF) inklusive Mehrwertsteuer. Die Zahlung erfolgt 
                  nach Erbringung der Leistung, spätestens jedoch 30 Tage nach Rechnungsstellung.
                </p>

                <h2>§5 Termine</h2>
                <p>
                  Wir bemühen uns, vereinbarte Termine einzuhalten. Bei unvorhersehbaren Umständen (z.B. Wetter, 
                  Verkehr) können sich Termine verschieben. Wir werden Sie in solchen Fällen umgehend informieren.
                </p>

                <h2>§6 Haftung</h2>
                <p>
                  AlpenMove haftet für Schäden, die durch vorsätzliches oder grob fahrlässiges Verhalten entstehen. 
                  Die Haftung für leichte Fahrlässigkeit ist ausgeschlossen.
                </p>

                <h2>§7 Versicherung</h2>
                <p>
                  Alle Umzüge sind durch unsere Betriebshaftpflichtversicherung abgedeckt. Für besonders wertvolle 
                  Gegenstände empfehlen wir eine zusätzliche Versicherung.
                </p>

                <h2>§8 Kündigung</h2>
                <p>
                  Der Vertrag kann von beiden Seiten mit einer Frist von 7 Tagen schriftlich gekündigt werden. 
                  Bei kurzfristiger Kündigung können Stornogebühren anfallen.
                </p>

                <h2>§9 Schlussbestimmungen</h2>
                <p>
                  Es gilt Schweizer Recht. Gerichtsstand ist Luzern. Sollten einzelne Bestimmungen unwirksam sein, 
                  bleibt der Vertrag im Übrigen wirksam.
                </p>

                <h2>§10 Kontakt</h2>
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