import { MetadataRoute } from 'next'
import { caseStudies } from '@/content'

/**
 * Sitemap Generation
 * Generates sitemap.xml for SEO - helps search engines discover and index pages
 * Domain: https://clairesersun.com
 */
export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://clairesersun.com'

  // Main site pages (archive excluded via robots.txt)
  const routes = [
    '',        // Homepage
    '/about',  // About page
    '/resume', // Resume page
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date().toISOString(),
    changeFrequency: 'monthly' as const,
    priority: route === '' ? 1 : 0.8, // Homepage gets highest priority
  }))

  // Case study pages - high priority for portfolio visibility
  const caseStudyRoutes = caseStudies.map((study) => ({
    url: `${baseUrl}/work/${study.slug}`,
    lastModified: new Date().toISOString(),
    changeFrequency: 'monthly' as const,
    priority: 0.9, // Case studies are key content for job searches
  }))

  return [...routes, ...caseStudyRoutes]
}
