import { NEXFIY_APPS } from '@/lib/apps-data'
import { Card } from '@/components/ui/card'
import { notFound } from 'next/navigation'
import Link from 'next/link'

export async function generateMetadata({ params }: { params: { appId: string } }) {
  const app = NEXFIY_APPS.find((a) => a.id === params.appId)
  if (!app) return {}

  return {
    title: `${app.name} - Privacy Policy - Nexfiy`,
    description: `Privacy policy for ${app.name}`,
  }
}

export default function AppPrivacyPage({ params }: { params: { appId: string } }) {
  const app = NEXFIY_APPS.find((a) => a.id === params.appId)

  if (!app) {
    notFound()
  }

  return (
    <main className="min-h-screen bg-background">
      {/* Header */}
      <section className="py-16 md:py-20 bg-secondary/30 border-b border-border">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-3xl mx-auto">
            <Link
              href={`/apps/${app.id}`}
              className="text-foreground/70 hover:text-foreground mb-6 inline-flex items-center gap-2"
            >
              ← Back to {app.name}
            </Link>
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              Privacy Policy
            </h1>
            <p className="text-lg text-foreground/70">
              How {app.name} protects your data and respects your privacy.
            </p>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="py-20 md:py-32 bg-background">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-3xl mx-auto prose prose-sm">
            <Card className="p-8 md:p-12 bg-secondary/40 border border-border mb-8">
              <div className="space-y-8">
                {/* Data Collection */}
                <div>
                  <h2 className="text-2xl font-bold text-foreground mb-4">
                    Data Collection
                  </h2>
                  <p className="text-foreground/80 mb-4">
                    {app.privacy.dataCollection || `${app.name} only collects data that is essential for providing its core functionality. We minimize data collection and never collect unnecessary information.`}
                  </p>
                  <ul className="space-y-2 text-foreground/80">
                    <li>• Information you explicitly provide (account creation, preferences)</li>
                    <li>• Usage analytics (how you interact with the app)</li>
                    <li>• Device information (for compatibility and debugging)</li>
                    <li>• We do NOT collect personal information beyond what's needed</li>
                    <li>• We do NOT sell your data to third parties</li>
                  </ul>
                </div>

                {/* Data Storage */}
                <div>
                  <h2 className="text-2xl font-bold text-foreground mb-4">
                    Data Storage
                  </h2>
                  <p className="text-foreground/80 mb-4">
                    {app.privacy.dataStorage || `Your data is stored securely with industry-standard encryption. We take data protection seriously and follow best practices in data security.`}
                  </p>
                  <ul className="space-y-2 text-foreground/80">
                    <li>• Data is encrypted both in transit and at rest</li>
                    <li>• Regular security audits and penetration testing</li>
                    <li>• Secure servers with limited access controls</li>
                    <li>• Automatic backups to prevent data loss</li>
                    <li>• Compliance with GDPR, CCPA, and privacy regulations</li>
                  </ul>
                </div>

                {/* User Rights */}
                <div>
                  <h2 className="text-2xl font-bold text-foreground mb-4">
                    Your Rights
                  </h2>
                  <p className="text-foreground/80 mb-4">
                    {app.privacy.userRights || `You have full control over your data and can exercise your rights at any time.`}
                  </p>
                  <ul className="space-y-2 text-foreground/80">
                    <li>• Right to access: View all data we have about you</li>
                    <li>• Right to rectification: Correct inaccurate data</li>
                    <li>• Right to deletion: Request permanent data deletion</li>
                    <li>• Right to portability: Export your data in standard formats</li>
                    <li>• Right to opt-out: Disable analytics and tracking</li>
                  </ul>
                </div>

                {/* Contact */}
                <div className="bg-background border border-border p-6 rounded-lg">
                  <h3 className="text-lg font-bold text-foreground mb-3">
                    Privacy Questions?
                  </h3>
                  <p className="text-foreground/80 mb-4">
                    If you have questions about our privacy practices, please contact us at privacy@nexfiy.app
                  </p>
                </div>
              </div>
            </Card>

            {/* Back to App Button */}
            <div className="text-center">
              <Link href={`/apps/${app.id}`}>
                <button className="px-8 py-3 bg-foreground text-background rounded-lg font-semibold hover:bg-foreground/90 transition-colors">
                  Back to App
                </button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
