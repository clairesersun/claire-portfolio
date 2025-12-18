import { MetadataRoute } from 'next'

/**
 * Robots.txt Configuration
 * Controls which pages search engines can crawl and index
 * Archive page is blocked (noindex) - contains work-in-progress projects
 */
export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
        disallow: ['/archive', '/archive/'], // Prevent indexing of archive page
      },
    ],
    sitemap: 'https://clairesersun.com/sitemap.xml',
  }
}
