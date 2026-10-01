export const siteUrl = 'https://newvtoursandtravels.com';
export const siteName = 'NewV Tours and Travels';

export const seoPages = {
  '/': {
    title: 'NewV Tours and Travels | Tour Packages from Chennai',
    description: 'Plan your next journey with NewV Tours and Travels in Chennai. Explore domestic and international tour packages, wildlife safaris and travel services.',
  },
  '/services': {
    title: 'Travel Services | NewV Tours and Travels',
    description: 'Arrange accommodation, transportation, sightseeing, flight tickets and visa assistance with NewV Tours and Travels in Chennai.',
  },
  '/packages': {
    title: 'India & International Tour Packages | NewV Tours and Travels',
    description: 'Explore domestic holidays, international tours and wildlife safari packages with NewV Tours and Travels. Contact us to plan your itinerary.',
  },
  '/about': {
    title: 'About Us | NewV Tours and Travels',
    description: 'Meet NewV Tours and Travels, a Chennai travel agency creating thoughtfully planned journeys across India and the world.',
  },
  '/reviews': {
    title: 'Traveller Reviews | NewV Tours and Travels',
    description: 'Read client reviews and travel experiences from travellers who planned their journeys with NewV Tours and Travels.',
  },
  '/gallery': {
    title: 'Travel Photo Gallery | NewV Tours and Travels',
    description: 'Browse travel highlights and holiday memories captured by NewV Tours and Travels travellers in our photo gallery.',
  },
  '/contact': {
    title: 'Contact Our Chennai Travel Agency | NewV Tours and Travels',
    description: 'Contact NewV Tours and Travels in Ambattur, Chennai to plan your holiday. Call +91 9840636358 or enquire about a tour package.',
  },
};

export const businessSchema = {
  '@context': 'https://schema.org',
  '@type': 'TravelAgency',
  '@id': `${siteUrl}/#business`,
  name: siteName,
  url: `${siteUrl}/`,
  image: `${siteUrl}/images/6x6-LOGO.png`,
  logo: `${siteUrl}/images/6x6-LOGO.png`,
  telephone: '+919840636358',
  email: 'newvtoursandtravels@gmail.com',
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
  };
}

export function escapeHtml(value) {
  return value.replace(/[&<>"']/g, (character) => ({
    '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;',
  })[character]);
}

export function renderSeoHead(pathname) {
  const seo = getSeo(pathname);
  return `
    <title>${escapeHtml(seo.title)}</title>
    <meta name="description" content="${escapeHtml(seo.description)}" />
    <meta name="robots" content="${seo.robots}" />
    ${seo.canonical ? `<link rel="canonical" href="${seo.canonical}" />` : ''}
    <meta property="og:type" content="website" />
    <meta property="og:site_name" content="${siteName}" />
    <meta property="og:title" content="${escapeHtml(seo.title)}" />
    <meta property="og:description" content="${escapeHtml(seo.description)}" />
    ${seo.canonical ? `<meta property="og:url" content="${seo.canonical}" />` : ''}
    <meta property="og:image" content="${siteUrl}/images/6x6-LOGO.png" />
    <meta name="twitter:card" content="summary" />
    <meta name="twitter:title" content="${escapeHtml(seo.title)}" />
    <meta name="twitter:description" content="${escapeHtml(seo.description)}" />
    <meta name="twitter:image" content="${siteUrl}/images/6x6-LOGO.png" />
    <script type="application/ld+json">${JSON.stringify(businessSchema).replace(/</g, '\\u003c')}</script>
  `;
}
