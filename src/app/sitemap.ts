import type { MetadataRoute } from 'next';
import { studentGuides } from '@/data/studentGuides';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://ilpstudy.com';

  const staticRoutes = [
    { path: '', priority: 1.0, freq: 'weekly' as const },
    { path: '/programmes', priority: 0.95, freq: 'weekly' as const },
    { path: '/universities', priority: 0.95, freq: 'weekly' as const },
    { path: '/csca', priority: 0.9, freq: 'weekly' as const },
    { path: '/budget', priority: 0.9, freq: 'weekly' as const },
    { path: '/scholarships', priority: 0.9, freq: 'weekly' as const },
    { path: '/checklist', priority: 0.85, freq: 'monthly' as const },
    { path: '/student-life', priority: 0.85, freq: 'monthly' as const },
    { path: '/visa', priority: 0.85, freq: 'monthly' as const },
    { path: '/resources', priority: 0.85, freq: 'weekly' as const },
    { path: '/services', priority: 0.8, freq: 'monthly' as const },
    { path: '/partnerships', priority: 0.8, freq: 'monthly' as const },
    { path: '/about', priority: 0.8, freq: 'monthly' as const },
    { path: '/blogs', priority: 0.9, freq: 'daily' as const },
    { path: '/contact', priority: 0.85, freq: 'monthly' as const },
    { path: '/how-we-check', priority: 0.6, freq: 'monthly' as const },
    { path: '/privacy-policy', priority: 0.4, freq: 'yearly' as const },
    { path: '/terms', priority: 0.4, freq: 'yearly' as const },
    { path: '/cookies', priority: 0.4, freq: 'yearly' as const },
  ];

  const staticPages: MetadataRoute.Sitemap = staticRoutes.map((r) => ({
    url: `${baseUrl}${r.path}`,
    lastModified: new Date(),
    changeFrequency: r.freq,
    priority: r.priority,
  }));

  const blogPages: MetadataRoute.Sitemap = studentGuides.map((guide) => ({
    url: `${baseUrl}/blogs/${guide.id}`,
    lastModified: new Date(),
    changeFrequency: 'monthly',
    priority: 0.75,
  }));

  return [...staticPages, ...blogPages];
}
