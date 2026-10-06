import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { getSeo, structuredDataFor } from './seo.js';

export default function Seo() {
  const { pathname } = useLocation();

  useEffect(() => {
    const seo = getSeo(pathname);
    document.title = seo.title;
    const metadata = {
      'name:description': seo.description,
      'name:robots': seo.robots,
      'name:googlebot': seo.robots,
      'property:og:title': seo.title,
      'property:og:description': seo.description,
      'property:og:url': seo.canonical,
      'property:og:image': seo.image,
      'property:og:image:alt': seo.imageAlt,
      'name:twitter:title': seo.title,
      'name:twitter:description': seo.description,
      'name:twitter:image': seo.image,
      'name:twitter:image:alt': seo.imageAlt,
    };
    for (const [key, value] of Object.entries(metadata)) {
      const separator = key.indexOf(':');
      const attribute = key.slice(0, separator);
      const name = key.slice(separator + 1);
      let tag = document.head.querySelector(`meta[${attribute}="${name}"]`);
      if (value === null) {
        tag?.remove();
        continue;
      }
      if (!tag) {
        tag = document.createElement('meta');
        tag.setAttribute(attribute, name);
        document.head.appendChild(tag);
      }
      tag.content = value;
    }
    let canonical = document.head.querySelector('link[rel="canonical"]');
    if (seo.canonical) {
      if (!canonical) {
        canonical = document.createElement('link');
        canonical.rel = 'canonical';
        document.head.appendChild(canonical);
      }
      canonical.href = seo.canonical;
    } else {
      canonical?.remove();
    }

    const structuredData = document.getElementById('seo-structured-data');
    if (structuredData) {
      structuredData.textContent = JSON.stringify(structuredDataFor(pathname, seo));
    }
  }, [pathname]);

  return null;
}
