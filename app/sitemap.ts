import { MetadataRoute } from 'next'
import { NEXFIY_APPS } from '@/lib/apps-data'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://nexfiy.app'

  const appUrls = NEXFIY_APPS.map((app) => ({
    url: `${baseUrl}/apps/${app.id}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.8,
  }))

  return [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: 'weekly' as const,
      priority: 1,
    },
    {
      url: `${baseUrl}/contact`,
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: 0.5,
    },
    ...appUrls,
  ]
}
