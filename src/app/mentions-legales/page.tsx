import { Metadata } from 'next';
import Link from 'next/link';

// Métadonnées spécifiques à la page Mentions Légales
export const metadata: Metadata = {
  title: 'Mentions Légales | Hervé Maccioni - Psychanalyste à Bordeaux',
  description: 'Consultez les mentions légales du site de Hervé Maccioni, psychanalyste et psychothérapeute à Bordeaux.',
  alternates: {
    canonical: 'https://hervemaccioni.fr/mentions-legales',
  },
  openGraph: {
    title: 'Mentions Légales | Hervé Maccioni - Psychanalyste à Bordeaux',
    description: 'Consultez les mentions légales du site de Hervé Maccioni, psychanalyste et psychothérapeute à Bordeaux.',
    url: 'https://hervemaccioni.fr/mentions-legales',
    siteName: 'Hervé Maccioni - Psychanalyste à Bordeaux',
    type: 'website',
  },
  twitter: {
    card: 'summary',
    title: 'Mentions Légales | Hervé Maccioni - Psychanalyste à Bordeaux',
    description: 'Consultez les mentions légales du site de Hervé Maccioni, psychanalyste et psychothérapeute à Bordeaux.',
  },
};

export default function MentionsLegalesPage() {
  return (
    <main className="py-16 px-6 md:px-12 bg-[#FAFAF8] min-h-screen">
      <div className="max-w-4xl mx-auto">
        {/* En-tête de la page */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-black" style={{fontFamily:'var(--font-title)'}}>
            <span className="underline decoration-4 decoration-[#2E3A59] underline-offset-4">Mentions Légales</span>
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto" style={{fontFamily:'var(--font-paragraph)'}}>
            Informations légales concernant le site de Hervé Maccioni, psychanalyste et psychothérapeute à Bordeaux.
          </p>
           {/* Date de mise à jour */}
           <section className="text-center mt-5 pt-8 border-t border-gray-200">
            <p className="text-sm mt-2 text-gray-500" style={{fontFamily:'var(--font-paragraph)'}}>
              Dernière mise à jour : {new Date().toLocaleDateString('fr-FR', { 
                year: 'numeric', 
                month: 'long', 
                day: 'numeric' 
              })}
            </p>
          </section>
        </div>

        {/* Contenu des mentions légales */}
        <div className="space-y-8">
          {/* Éditeur du site */}
          <section className="background-card">
            <h2 className="text-2xl font-bold mb-4 text-[#2E3A59]" style={{fontFamily:'var(--font-title)'}}>Éditeur du site</h2>
            <div className="space-y-2" style={{fontFamily:'var(--font-paragraph)'}}>
              <p><strong>Nom :</strong> Hervé Maccioni</p>
              <p><strong>Profession :</strong> Psychanalyste et Psychothérapeute</p>
              <p><strong>Adresse :</strong> 29 Cours d&apos;Alsace-et-Lorraine, 33000 Bordeaux</p>
              <p><strong>Téléphone :</strong> 06 34 36 32 34</p>
              <p><strong>Email :</strong> herve.maccioni@outlook.fr</p>
              <p><strong>SIRET :</strong> 402 562 532 00042</p>
              <p><strong>Directeur de la publication :</strong> Hervé Maccioni</p>
            </div>
          </section>

          {/* Hébergement */}
          <section className="background-card">
            <h2 className="text-2xl font-bold mb-4 text-[#2E3A59]" style={{fontFamily:'var(--font-title)'}}>Hébergement</h2>
            <div className="space-y-2" style={{fontFamily:'var(--font-paragraph)'}}>
            <p><strong>Hébergeur du backend (WordPress) :</strong> IONOS SARL.</p>
            <p><strong>Adresse :</strong> 7, place de la Gare, BP 70109, 57201 Sarreguemines Cedex, France</p>
            <p><strong>Site web :</strong> <a href="https://www.ionos.fr" target="_blank" rel="noopener noreferrer" className="text-[#2E3A59] hover:underline">www.ionos.fr</a></p>
            <br />
              <p><strong>Hébergeur du frontend (Application Next.js) :</strong> Vercel Inc.</p>
              <p><strong>Adresse :</strong> 340 S Lemon Ave #4133, Walnut, CA 91789, États-Unis</p>
              <p><strong>Site web :</strong> <a href="https://vercel.com" target="_blank" rel="noopener noreferrer" className="text-[#2E3A59] hover:underline">vercel.com</a></p>
            </div>
          </section>

          {/* Propriété intellectuelle */}
          <section className="background-card">
            <h2 className="text-2xl font-bold mb-4 text-[#2E3A59]" style={{fontFamily:'var(--font-title)'}}>Propriété intellectuelle</h2>
            <div className="space-y-4" style={{fontFamily:'var(--font-paragraph)'}}>
              <p>
                L&lsquo;ensemble de ce site relève de la législation française et internationale sur le droit d&lsquo;auteur et la propriété intellectuelle. 
                Tous les droits de reproduction sont réservés, y compris pour les documents téléchargeables et les représentations iconographiques et photographiques.
              </p>
              <p>
                La reproduction de tout ou partie de ce site sur un support électronique quel qu&lsquo;il soit est formellement interdite sauf autorisation expresse du directeur de la publication.
              </p>
            </div>
          </section>

          {/* Protection des données personnelles */}
          <section className="background-card">
            <h2 className="text-2xl font-bold mb-4 text-[#2E3A59]" style={{fontFamily:'var(--font-title)'}}>Protection des données personnelles</h2>
            <div className="space-y-4" style={{fontFamily:'var(--font-paragraph)'}}>
              <p>
                Conformément à la loi « Informatique et Libertés » du 6 janvier 1978 modifiée et au Règlement Général sur la Protection des Données (RGPD), 
                vous disposez d&lsquo;un droit d&lsquo;accès, de rectification, de suppression et d&lsquo;opposition aux données personnelles vous concernant.
              </p>
              <p>
                Les informations recueillies sur ce site sont nécessaires au traitement de votre demande de contact ou de prise de rendez-vous. 
                Elles sont destinées exclusivement à Hervé Maccioni et ne seront en aucun cas transmises à des tiers.
              </p>
              <p>
                Pour exercer vos droits, vous pouvez nous contacter à l&lsquo;adresse : <Link href="mailto:herve.maccioni@outlook.fr" className="text-[#2E3A59] hover:underline">herve.maccioni@outlook.fr</Link>
              </p>
            </div>
          </section>

          {/* Cookies */}
          <section className="background-card">
            <h2 className="text-2xl font-bold mb-4 text-[#2E3A59]" style={{fontFamily:'var(--font-title)'}}>Cookies</h2>
            <div className="space-y-4" style={{fontFamily:'var(--font-paragraph)'}}>
              <p>
                Ce site utilise des cookies techniques nécessaires à son bon fonctionnement. Ces cookies ne collectent aucune donnée personnelle 
                et ne peuvent pas être désactivés.
              </p>
              <p>
                Aucun cookie de tracking ou de publicité n&apos;est utilisé sur ce site.
              </p>
            </div>
          </section>

          {/* Responsabilité */}
          <section className="background-card">
            <h2 className="text-2xl font-bold mb-4 text-[#2E3A59]" style={{fontFamily:'var(--font-title)'}}>Responsabilité</h2>
            <div className="space-y-4" style={{fontFamily:'var(--font-paragraph)'}}>
              <p>
                Les informations contenues sur ce site sont aussi précises que possible et le site est périodiquement remis à jour, 
                mais peut toutefois contenir des inexactitudes, des omissions ou des lacunes.
              </p>
              <p>
                Si vous constatez une lacune, erreur ou ce qui parait être un dysfonctionnement, merci de bien vouloir le signaler par email 
                à l&apos;adresse <Link href="mailto:herve.maccioni@outlook.fr" className="text-[#2E3A59] hover:underline">herve.maccioni@outlook.fr</Link> 
                en décrivant le problème de la manière la plus précise possible.
              </p>
            </div>
          </section>

          {/* Liens hypertextes */}
          <section className="background-card">
            <h2 className="text-2xl font-bold mb-4 text-[#2E3A59]" style={{fontFamily:'var(--font-title)'}}>Liens hypertextes</h2>
            <div className="space-y-4" style={{fontFamily:'var(--font-paragraph)'}}>
              <p>
                Les liens hypertextes mis en place dans le cadre du présent site web en direction d&apos;autres ressources présentes sur le réseau Internet 
                ne sauraient engager la responsabilité de Hervé Maccioni.
              </p>
            </div>
          </section>

          {/* Droit applicable */}
          <section className="background-card">
            <h2 className="text-2xl font-bold mb-4 text-[#2E3A59]" style={{fontFamily:'var(--font-title)'}}>Droit applicable</h2>
            <div className="space-y-4" style={{fontFamily:'var(--font-paragraph)'}}>
              <p>
                Tout litige en relation avec l&apos;utilisation du site <strong>hervemaccioni.fr</strong> est soumis au droit français. 
                Il est fait attribution exclusive de juridiction aux tribunaux compétents de Bordeaux.
              </p>
            </div>
          </section>
        </div>
      </div>
    </main>
  );
}