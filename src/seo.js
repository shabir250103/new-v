export const siteUrl = 'https://newvtoursandtravels.com';
export const siteName = 'NewV Tours and Travels';

export const seoPages = {
  '/': {
    title: 'Chennai Travel Agency & Custom Tours | NewV',
    description: 'Plan personalised India, international and wildlife holidays with NewV Tours and Travels in Chennai. Get itinerary, booking and on-trip support.',
    label: 'Home',
    image: '/images/home-banner-desktop.jpeg',
    imageAlt: 'Traveller overlooking a tropical island bay',
  },
  '/services': {
    title: 'Travel Planning Services in Chennai | NewV',
    description: 'Arrange custom itineraries, hotels, transport, sightseeing, flights and visa assistance with NewV Tours and Travels in Chennai.',
    label: 'Our Services',
    image: '/images/tour-packages-header.webp',
    imageAlt: 'Scenic island destination available through NewV Tours and Travels',
  },
  '/packages': {
    title: 'India Tour Packages from Chennai | NewV',
    description: 'Explore custom India holidays from Chennai, including Kerala, Kashmir, Rajasthan, Goa and more. Ask NewV to tailor the itinerary and bookings.',
    label: 'India Tour Packages',
    image: '/images/hero-section-images/Taj-mahal-hero-section-pic.jpeg',
    imageAlt: 'Taj Mahal in Agra, India',
  },
  '/packages/international': {
    title: 'International Tour Packages from Chennai | NewV',
    description: 'Explore custom international holidays from Chennai to Bali, Dubai, Japan, Europe, Thailand, Vietnam and more with end-to-end travel support.',
    label: 'International Tour Packages',
    image: '/images/international-tours-santorini.webp',
    imageAlt: 'Santorini coast at sunset',
  },
  '/packages/wildlife': {
    title: 'India Wildlife Safari Packages | NewV',
    description: 'Plan wildlife safaris to Bandipur, Kabini, Kaziranga, Ranthambore, Tadoba and more with personalised travel arrangements from NewV.',
    label: 'Wildlife Tour Packages',
    image: '/images/category-wildlife.webp',
    imageAlt: 'Wildlife safari in India',
  },
  '/about': {
    title: 'About NewV Tours and Travels | Chennai',
    description: 'Meet founder Jeevapriya MS and learn how NewV Tours and Travels plans personalised, supported journeys from Chennai to India and the world.',
    label: 'About Us',
    image: '/images/about-header.webp',
    imageAlt: 'NewV Tours and Travels journey inspiration',
  },
  '/reviews': {
    title: 'Traveller Reviews & Experiences | NewV',
    description: 'Read first-hand reviews and travel experiences from clients who planned India and international holidays with NewV Tours and Travels.',
    label: 'Client Reviews',
    image: '/images/reviews-header.webp',
    imageAlt: 'Happy travellers sharing their NewV experiences',
  },
  '/gallery': {
    title: 'Traveller Photo Gallery | NewV Tours and Travels',
    description: 'Browse genuine holiday memories and travel highlights shared by NewV Tours and Travels clients across India and international destinations.',
    label: 'Photo Gallery',
    image: '/images/gallery-header-v2.webp',
    imageAlt: 'Travellers overlooking a tropical island coast at sunset',
  },
  '/contact': {
    title: 'Contact NewV Travel Agency in Chennai',
    description: 'Contact NewV Tours and Travels in Ambattur, Chennai. Call +91 98406 36358 or send your destination and travel dates for a custom itinerary.',
    label: 'Contact Us',
    image: '/images/contact-header.webp',
    imageAlt: 'Peaceful beach sunset',
  },
};

export const businessSchema = {
  '@context': 'https://schema.org',
  '@type': 'TravelAgency',
  '@id': `${siteUrl}/#business`,
  name: siteName,
  url: `${siteUrl}/`,
  image: `${siteUrl}/images/newv-logo.png`,
  logo: `${siteUrl}/images/newv-logo.png`,
  telephone: '+919840636358',
  email: 'newvtoursandtravels@gmail.com',
  priceRange: '$$',
  areaServed: ['India', 'International'],
  founder: {
    '@type': 'Person',
    name: 'Jeevapriya MS',
  },
  sameAs: [
    'https://www.instagram.com/newv_tours_and_travels/',
    'https://www.facebook.com/share/1CKyzXyctd/',
  ],
  address: {
    '@type': 'PostalAddress',
    streetAddress: '31A, Chelliamman Koil Street, Chelliamman Nagar, Athipet, Ambattur',
    addressLocality: 'Chennai',
    addressRegion: 'Tamil Nadu',
    postalCode: '600058',
    addressCountry: 'IN',
  },
};

export function getSeo(pathname) {
  const path = pathname.replace(/\/+$/, '') || '/';
  const page = Object.hasOwn(seoPages, path) ? seoPages[path] : null;
  return {
    title: page?.title ?? `Page Not Found | ${siteName}`,
    description: page?.description ?? 'This page could not be found. Explore NewV Tours and Travels to plan your next journey.',
    canonical: page ? `${siteUrl}${path}` : null,
    robots: page ? 'index, follow, max-image-preview:large' : 'noindex, follow',
    label: page?.label ?? 'Page Not Found',
    image: page?.image ? `${siteUrl}${page.image}` : `${siteUrl}/images/newv-logo.png`,
    imageAlt: page?.imageAlt ?? 'NewV Tours and Travels',
  };
}

export function structuredDataFor(pathname, seo) {
  const graph = [
    businessSchema,
    {
      '@type': 'WebSite',
      '@id': `${siteUrl}/#website`,
      url: `${siteUrl}/`,
      name: siteName,
      inLanguage: 'en-IN',
      publisher: { '@id': `${siteUrl}/#business` },
    },
  ];

  if (seo.canonical) {
    const pageTypes = {
      '/': 'WebPage',
      '/about': 'AboutPage',
      '/contact': 'ContactPage',
      '/services': 'CollectionPage',
      '/packages': 'CollectionPage',
      '/packages/international': 'CollectionPage',
      '/packages/wildlife': 'CollectionPage',
      '/reviews': 'CollectionPage',
      '/gallery': 'CollectionPage',
    };
    graph.push({
      '@type': pageTypes[pathname] ?? 'WebPage',
      '@id': `${seo.canonical}#webpage`,
      url: seo.canonical,
      name: seo.title,
      description: seo.description,
      inLanguage: 'en-IN',
      isPartOf: { '@id': `${siteUrl}/#website` },
      about: { '@id': `${siteUrl}/#business` },
      primaryImageOfPage: { '@type': 'ImageObject', url: seo.image },
    });
  }

  if (pathname !== '/' && seo.canonical) {
    graph.push({
      '@type': 'BreadcrumbList',
      '@id': `${seo.canonical}#breadcrumb`,
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Home', item: `${siteUrl}/` },
        { '@type': 'ListItem', position: 2, name: seo.label, item: seo.canonical },
      ],
    });
  }

  return { '@context': 'https://schema.org', '@graph': graph };
}

export function escapeHtml(value) {
  return value.replace(/[&<>"']/g, (character) => ({
    '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;',
  })[character]);
}

export function renderSeoHead(pathname) {
  const seo = getSeo(pathname);
  const imagePreload = pathname === '/'
    ? `<link rel="preload" as="image" href="${siteUrl}/images/home-banner-desktop.jpeg" media="(min-width: 769px)" fetchpriority="high" />
    <link rel="preload" as="image" href="${siteUrl}/images/home-banner-mobile.jpeg" media="(max-width: 768px)" fetchpriority="high" />`
    : `<link rel="preload" as="image" href="${seo.image}" fetchpriority="high" />`;
  return `
    <title>${escapeHtml(seo.title)}</title>
    <meta name="description" content="${escapeHtml(seo.description)}" />
    <meta name="robots" content="${seo.robots}" />
    <meta name="googlebot" content="${seo.robots}" />
    <meta name="theme-color" content="#1b5e20" />
    ${seo.canonical ? `<link rel="canonical" href="${seo.canonical}" />` : ''}
    <meta property="og:type" content="website" />
    <meta property="og:locale" content="en_IN" />
    <meta property="og:site_name" content="${siteName}" />
    <meta property="og:title" content="${escapeHtml(seo.title)}" />
    <meta property="og:description" content="${escapeHtml(seo.description)}" />
    ${seo.canonical ? `<meta property="og:url" content="${seo.canonical}" />` : ''}
    <meta property="og:image" content="${seo.image}" />
    <meta property="og:image:alt" content="${escapeHtml(seo.imageAlt)}" />
    <meta name="twitter:card" content="summary_large_image" />
    <meta name="twitter:title" content="${escapeHtml(seo.title)}" />
    <meta name="twitter:description" content="${escapeHtml(seo.description)}" />
    <meta name="twitter:image" content="${seo.image}" />
    <meta name="twitter:image:alt" content="${escapeHtml(seo.imageAlt)}" />
    ${imagePreload}
    <script id="seo-structured-data" type="application/ld+json">${JSON.stringify(structuredDataFor(pathname, seo)).replace(/</g, '\\u003c')}</script>
  `;
}
