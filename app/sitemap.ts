import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = process.env.NEXT_PUBLIC_APP_URL || 'https://farsamoyaqan.com';

  const routes = [
    '',
    '/about',
    '/services',
    '/how-it-works',
    '/providers',
    '/jobs',
    '/contact',
    '/help',
    '/careers',
    '/terms',
    '/privacy',
    '/login',
    '/register',
  ];

  return routes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: route === '' ? 'daily' : 'weekly',
    priority: route === '' ? 1.0 : route === '/services' || route === '/providers' ? 0.8 : 0.6,
  }));
}
