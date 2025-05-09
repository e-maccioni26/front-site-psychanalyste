"use client";

import Link from 'next/link';
import { usePathname } from 'next/navigation';

interface BreadcrumbProps {
  className?: string;
}

const Breadcrumb: React.FC<BreadcrumbProps> = ({ className = '' }) => {
  const pathname = usePathname();
  
  if (pathname === '/') return null;
  
  const segments = pathname.split('/').filter(Boolean);
  
  const breadcrumbItems = [
    { label: 'Accueil', path: '/' },
    ...segments.map((segment, index) => {
      const path = `/${segments.slice(0, index + 1).join('/')}`;
      const label = segment
        .split('-')
        .map(word => word.charAt(0).toUpperCase() + word.slice(1))
        .join(' ');
      return { label, path };
    }),
  ];

  return (
    <nav 
      aria-label="Fil d'Ariane" 
      className={`text-sm py-3 px-4 mb-6 ${className}`}
      itemScope 
      itemType="https://schema.org/BreadcrumbList"
    >
      <ol className="flex flex-wrap items-center">
        {breadcrumbItems.map((item, index) => {
          const isLast = index === breadcrumbItems.length - 1;
          
          return (
            <li 
              key={item.path}
              className="flex items-center"
              itemProp="itemListElement" 
              itemScope 
              itemType="https://schema.org/ListItem"
            >
              {index > 0 && (
                <span className="mx-2 text-gray-500">/</span>
              )}
              
              {isLast ? (
                <span 
                  className="font-medium text-[#2E3A59]" 
                  itemProp="name"
                >
                  {item.label}
                </span>
              ) : (
                <Link 
                  href={item.path} 
                  className="text-gray-600 hover:text-[#2E3A59] hover:underline transition-colors"
                  itemProp="item"
                >
                  <span itemProp="name">{item.label}</span>
                </Link>
              )}
              
              <meta itemProp="position" content={`${index + 1}`} />
            </li>
          );
        })}
      </ol>
    </nav>
  );
};

export default Breadcrumb;