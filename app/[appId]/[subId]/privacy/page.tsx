import { NEXFIY_APPS } from '@/lib/apps-data'
import { Card } from '@/components/ui/card'
import { notFound } from 'next/navigation'
import Link from 'next/link'
import { Metadata } from 'next'

type Props = {
  params: Promise<{ appId: string; subId: string }>
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { appId } = await params
  const app = NEXFIY_APPS.find((a) => a.id === appId)
  if (!app) return { title: 'Privacy Policy Not Found' }

  return {
    title: `${app.name} - Privacy Policy - Nexfiy`,
    description: `Privacy policy for ${app.name}`,
  }
}

export default async function AppPrivacyPage({ params }: Props) {
  const { appId } = await params
  const app = NEXFIY_APPS.find((a) => a.id === appId)

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
              href={`/${app.id}/${app.id}`}
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
                    {app.privacy.dataCollection}
                  </p>
                  <ul className="space-y-2 text-foreground/80">
                    <li>• Account Info: display name, nickname, bio, country, avatar, and coach tone.</li>
                    <li>• Workout Stats: reps, duration, calories, workout type, goal, sets, and quality score.</li>
                    <li>• Camera Use: Live movement estimation for rep counting (video is NOT saved by default).</li>
                    <li>• Subscription Status: Managed through RevenueCat and Apple App Store.</li>
                    <li>• Social Features: Follows, friends, country rank, and challenge progress for synced accounts.</li>
                  </ul>
                </div>

                {/* Data Storage */}
                <div>
                  <h2 className="text-2xl font-bold text-foreground mb-4">
                    Data Storage and Sync
                  </h2>
                  <p className="text-foreground/80 mb-4">
                    {app.privacy.dataStorage}
                  </p>
                  <ul className="space-y-2 text-foreground/80">
                    <li>• Local Storage: Core workout data stays on your device for offline use.</li>
                    <li>• Cloud Sync: Selected data syncs with Convex-backed services when signed in.</li>
                    <li>• Secure Transmission: All data is encrypted in transit and at rest.</li>
                    <li>• Guest Mode: Training is local-first and does not require an account.</li>
                  </ul>
                </div>

                {/* User Rights */}
                <div>
                  <h2 className="text-2xl font-bold text-foreground mb-4">
                    Your Rights & Choices
                  </h2>
                  <p className="text-foreground/80 mb-4">
                    {app.privacy.userRights}
                  </p>
                  <ul className="space-y-2 text-foreground/80">
                    <li>• Profile Control: Edit your profile, country, and training settings anytime.</li>
                    <li>• Permission Control: Deny camera, notification, or photo library access in Settings.</li>
                    <li>• Data Portability: Export or sync your data across supported devices.</li>
                    <li>• Account Deletion: Initiate permanent deletion of synced data from Settings.</li>
                  </ul>
                </div>

                {/* Contact */}
                <div className="bg-background border border-border p-6 rounded-lg">
                  <h3 className="text-lg font-bold text-foreground mb-3">
                    Privacy Questions?
                  </h3>
                  <p className="text-foreground/80 mb-4">
                    If you have questions about our privacy practices, please contact us at <a href="mailto:uptocodejs@gmail.com" className="font-semibold underline">uptocodejs@gmail.com</a>
                  </p>
                </div>
              </div>
            </Card>

            {/* Back to App Button */}
            <div className="text-center">
              <Link href={`/${app.id}/${app.id}`}>
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
