import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

interface SEOHeadProps {
  title?: string;
  description?: string;
  image?: string;
  type?: string;
  url?: string;
}

const defaultSEO = {
  title: 'Encourage India IAS Academy - Top Coaching Institute in Bengaluru',
  description: 'Top coaching institute in Bengaluru for UPSC, KAS, PSI, PC, KEA, and Judiciary exams. Expert mentorship, bilingual classes (English/Kannada), and comprehensive test series.',
  image: '/logo.png',
  type: 'website',
  siteName: 'Encourage India IAS Academy',
  url: 'https://encourageindia.com',
};

export const SEOHead: React.FC<SEOHeadProps> = ({
  title = defaultSEO.title,
  description = defaultSEO.description,
  image = defaultSEO.image,
  type = defaultSEO.type,
  url,
}) => {
  const location = useLocation();
  const currentUrl = url || `${defaultSEO.url}${location.pathname}`;

  useEffect(() => {
    // Update document title
    document.title = title;

    // Update or create meta tags
    const updateMetaTag = (name: string, content: string, attribute: string = 'name') => {
      let element = document.querySelector(`meta[${attribute}="${name}"]`);
      if (!element) {
        element = document.createElement('meta');
        element.setAttribute(attribute, name);
        document.head.appendChild(element);
      }
      element.setAttribute('content', content);
    };

    // Basic meta tags
    updateMetaTag('description', description);
    updateMetaTag('og:title', title, 'property');
    updateMetaTag('og:description', description, 'property');
    updateMetaTag('og:image', image, 'property');
    updateMetaTag('og:type', type, 'property');
    updateMetaTag('og:url', currentUrl, 'property');
    updateMetaTag('og:site_name', defaultSEO.siteName, 'property');
    updateMetaTag('twitter:card', 'summary_large_image');
    updateMetaTag('twitter:title', title);
    updateMetaTag('twitter:description', description);
    updateMetaTag('twitter:image', image);

    // Structured data (JSON-LD)
    const structuredData = {
      '@context': 'https://schema.org',
      '@type': 'EducationalOrganization',
      name: 'Encourage India IAS Academy',
      description: description,
      url: defaultSEO.url,
      logo: `${defaultSEO.url}${image}`,
      address: {
        '@type': 'PostalAddress',
        addressLocality: 'Bengaluru',
        addressRegion: 'Karnataka',
        addressCountry: 'IN',
      },
      contactPoint: {
        '@type': 'ContactPoint',
        telephone: '+91-9611621195',
        contactType: 'Customer Service',
      },
      sameAs: [
        'https://www.instagram.com/encourageindiaias/',
        'https://youtube.com/@encourage_india_ias',
        'https://t.me/encourage_INDIAIAS',
      ],
    };

    // Remove existing structured data script if any
    const existingScript = document.getElementById('structured-data');
    if (existingScript) {
      existingScript.remove();
    }

    // Add new structured data
    const script = document.createElement('script');
    script.id = 'structured-data';
    script.type = 'application/ld+json';
    script.textContent = JSON.stringify(structuredData);
    document.head.appendChild(script);

    // Cleanup function
    return () => {
      const scriptToRemove = document.getElementById('structured-data');
      if (scriptToRemove) {
        scriptToRemove.remove();
      }
    };
  }, [title, description, image, type, currentUrl, location]);

  return null;
};

