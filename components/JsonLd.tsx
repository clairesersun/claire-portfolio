/**
 * Renders a JSON-LD structured-data block.
 * Kept as a tiny server component so pages can drop schema in declaratively.
 */
export function JsonLd({ data }: { data: Record<string, unknown> }) {
  return (
    <script
      type="application/ld+json"
      // Data is authored in-repo (not user input), so serialization is safe.
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  )
}

export const SITE_URL = 'https://www.clairesersun.com'
