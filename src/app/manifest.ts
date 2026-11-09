import type { MetadataRoute } from 'next';

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'ILP Study — Study in China Admissions',
    short_name: 'ILP Study',
    description:
      'Official education consultancy for Chinese university admissions and scholarships in Bangladesh.',
    start_url: '/',
    display: 'standalone',
    background_color: '#0b1120',
    theme_color: '#e6008d',
    icons: [
      {
        src: '/images/ilp-study-icon-192x192.png',
        sizes: '192x192',
        type: 'image/png',
      },
      {
        src: '/images/ilp-study-icon-512x512.png',
        sizes: '512x512',
        type: 'image/png',
      },
      {
        src: '/images/ilp-study-icon.svg',
        sizes: 'any',
        type: 'image/svg+xml',
      },
    ],
  };
}

