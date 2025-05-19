import { FaLinkedin } from 'react-icons/fa';
import Link from 'next/link';

type LinkedinCardProps = {
  linkedinUrl: string;
  name?: string;
}

export function LinkedinCard({ linkedinUrl }: LinkedinCardProps) {
  return (
    <div className="bg-white rounded-xl shadow-md p-6 border border-gray-200 mb-6">
      <h3 className="text-xl font-bold text-[#2E3A59] mb-4" style={{fontFamily:'var(--font-title)'}}>
        Rejoignez-moi sur LinkedIn
      </h3>
      <div className="flex items-center justify-center mb-4">
        <div className="bg-[#0077B5] p-4 rounded-full text-white">
          <FaLinkedin size={40} />
        </div>
      </div>
      <p className="text-gray-700 mb-4 text-center" style={{fontFamily:'var(--font-paragraph)'}}>
        Suivez mon actualité professionnelle et échangeons sur LinkedIn
      </p>
      <Link 
        href={linkedinUrl} 
        target="_blank" 
        rel="noopener noreferrer"
        className="block w-full bg-[#0077B5] hover:bg-[#005885] text-white font-medium py-2 px-4 rounded-md text-center transition-colors duration-300"
      >
        Connectons-nous
      </Link>
    </div>
  );
}