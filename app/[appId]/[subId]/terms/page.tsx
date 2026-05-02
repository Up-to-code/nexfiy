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
  if (!app) return { title: 'Terms Not Found' }

  return {
    title: `${app.name} - Terms of Service - Nexfiy`,
    description: `Terms of service for ${app.name}`,
  }
}

export default async function AppTermsPage({ params }: Props) {
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
              Terms of Service
            </h1>
            <p className="text-lg text-foreground/70">
              Please read these terms carefully before using {app.name}.
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
                <div>
                  <h2 className="text-2xl font-bold text-foreground mb-4">1. Fitness Guidance & Safety</h2>
                  <p className="text-foreground/80 leading-relaxed">
                    {app.name} provides general fitness tracking and training guidance. It is not medical advice, diagnosis, treatment, or a substitute for a qualified health professional.
                  </p>
                  <p className="text-foreground/80 leading-relaxed mt-4 font-semibold">
                    Stop exercising if you feel pain, dizziness, shortness of breath, or any unsafe symptom. Consult a medical professional before starting or changing a fitness program if you have health concerns.
                  </p>
                </div>

                <div>
                  <h2 className="text-2xl font-bold text-foreground mb-4">2. User Responsibility</h2>
                  <p className="text-foreground/80 leading-relaxed">
                    You are responsible for exercising safely, using proper form, choosing appropriate training intensity, and making sure your workout space is safe.
                  </p>
                  <p className="text-foreground/80 leading-relaxed mt-4">
                    Camera-based tracking and rep counting are estimates. Results may vary based on device position, lighting, body position, camera access, and workout conditions.
                  </p>
                </div>

                <div>
                  <h2 className="text-2xl font-bold text-foreground mb-4">3. Subscriptions & Pro Access</h2>
                  <p className="text-foreground/80 leading-relaxed">
                    Push Counter may offer optional paid subscription features. Before purchase, the app or App Store purchase sheet shows the product, price, duration, and renewal terms available in your region.
                  </p>
                  <p className="text-foreground/80 leading-relaxed mt-4">
                    Auto-renewable subscriptions renew automatically unless canceled at least 24 hours before the end of the current billing period. You can manage or cancel subscriptions from your Apple account settings. Deleting your account does not cancel an active subscription.
                  </p>
                </div>

                <div>
                  <h2 className="text-2xl font-bold text-foreground mb-4">4. Social & Leaderboard Features</h2>
                  <p className="text-foreground/80 leading-relaxed">
                    Leaderboards, country rank, friend comparison, follows, and challenges are for motivation and progress context. Do not use these features to harass, impersonate, or abuse other users.
                  </p>
                </div>

                <div className="bg-background border border-border p-6 rounded-lg">
                  <h3 className="text-lg font-bold text-foreground mb-3">
                    Questions?
                  </h3>
                  <p className="text-foreground/80 mb-4">
                    If you have any questions about these terms, please contact us at <a href="mailto:uptocodejs@gmail.com" className="font-semibold underline">uptocodejs@gmail.com</a>
                  </p>
                </div>
              </div>
            </Card>

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
