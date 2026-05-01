import { NEXFIY_APPS } from '@/lib/apps-data'
import { Card } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { Star, Download, Heart, Share2 } from 'lucide-react'

export async function generateStaticParams() {
  return NEXFIY_APPS.map((app) => ({
    appId: app.id,
  }))
}

export async function generateMetadata({ params }: { params: { appId: string } }) {
  const app = NEXFIY_APPS.find((a) => a.id === params.appId)
  if (!app) return {}

  return {
    title: `${app.name} - Nexfiy`,
    description: app.fullDescription,
  }
}

export default function AppPage({ params }: { params: { appId: string } }) {
  const app = NEXFIY_APPS.find((a) => a.id === params.appId)

  if (!app) {
    notFound()
  }

  const relatedApps = NEXFIY_APPS.filter((a) => a.id !== app.id).slice(0, 3)

  return (
    <main className="min-h-screen bg-background">
      {/* Header Section */}
      <section className={`bg-gradient-to-br ${app.gradient}`}>
        <div className="container mx-auto px-4 md:px-6 py-20 md:py-32">
          <div className="max-w-3xl mx-auto">
            <div className="flex items-start gap-6 mb-8">
              <div className="text-7xl">{app.icon}</div>
              <div className="flex-1">
                <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-2">
                  {app.name}
                </h1>
                <p className="text-lg text-foreground/70 mb-6">
                  {app.tagline}
                </p>

                {/* Rating and Stats */}
                <div className="flex flex-wrap items-center gap-6 mb-8">
                  <div className="flex items-center gap-2">
                    <div className="flex gap-1">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          className="w-5 h-5 fill-foreground text-foreground"
                        />
                      ))}
                    </div>
                    <span className="font-bold text-foreground">{app.rating}</span>
                  </div>
                  <div className="text-sm text-foreground/70">
                    {app.reviews.toLocaleString()} reviews
                  </div>
                  <div className="text-sm text-foreground/70">
                    {app.downloads} downloads
                  </div>
                </div>

                {/* CTA Buttons */}
                <div className="flex flex-wrap gap-4">
                  <Button className="h-12 px-8 text-base" asChild>
                    <a href="#download">Download Now</a>
                  </Button>
                  <Button variant="outline" className="h-12 px-6 gap-2">
                    <Heart className="w-5 h-5" />
                    Save
                  </Button>
                  <Button variant="outline" className="h-12 px-6 gap-2">
                    <Share2 className="w-5 h-5" />
                    Share
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Overview */}
      <section className="py-16 md:py-24 bg-background">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold text-foreground mb-6">About {app.name}</h2>
            <p className="text-lg text-foreground/80 leading-relaxed mb-8">
              {app.longDescription}
            </p>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-16 md:py-24 bg-secondary/20">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-foreground mb-12">Features</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {app.detailedFeatures.map((feature, idx) => (
                <Card key={idx} className="p-6 bg-background border border-border hover:shadow-md transition-shadow">
                  <h3 className="text-lg font-bold text-foreground mb-2">
                    {feature.name}
                  </h3>
                  <p className="text-foreground/70">
                    {feature.description}
                  </p>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Platforms */}
      <section className="py-16 md:py-24 bg-background">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold text-foreground mb-8">Available On</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {app.platforms.map((platform) => (
                <Card
                  key={platform}
                  className="p-6 bg-secondary/40 border border-border text-center hover:shadow-md transition-shadow cursor-pointer group"
                >
                  <div className="text-4xl mb-4 group-hover:scale-110 transition-transform">
                    {platform === 'iOS' && '🍎'}
                    {platform === 'Android' && '🤖'}
                    {platform === 'Web' && '🌐'}
                    {platform === 'macOS' && '💻'}
                  </div>
                  <h3 className="font-bold text-foreground">{platform}</h3>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="py-16 md:py-24 bg-secondary/30">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-foreground mb-6">Pricing</h2>
            <Card className="p-12 bg-background border border-border">
              <div className="text-5xl font-bold text-foreground mb-4">
                {app.price}
              </div>
              <p className="text-foreground/70 mb-8">
                Version {app.version} • Updated regularly with new features
              </p>
              <Button className="h-12 px-8" asChild>
                <a href="#download">Download Now</a>
              </Button>
            </Card>
          </div>
        </div>
      </section>

      {/* Quick Links */}
      <section className="py-16 md:py-20 bg-background border-t border-border">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-3xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
            <Link href={`/apps/${app.id}/privacy`}>
              <Card className="p-6 text-center cursor-pointer hover:shadow-md transition-shadow group">
                <h3 className="font-bold text-foreground mb-2 group-hover:underline">
                  Privacy Policy
                </h3>
                <p className="text-sm text-foreground/70">
                  Learn how we protect your data
                </p>
              </Card>
            </Link>
            <Link href={`/apps/${app.id}/security`}>
              <Card className="p-6 text-center cursor-pointer hover:shadow-md transition-shadow group">
                <h3 className="font-bold text-foreground mb-2 group-hover:underline">
                  Security Details
                </h3>
                <p className="text-sm text-foreground/70">
                  Security and compliance information
                </p>
              </Card>
            </Link>
            <Link href={`/apps/${app.id}/team`}>
              <Card className="p-6 text-center cursor-pointer hover:shadow-md transition-shadow group">
                <h3 className="font-bold text-foreground mb-2 group-hover:underline">
                  Team Behind App
                </h3>
                <p className="text-sm text-foreground/70">
                  Meet the team who built this
                </p>
              </Card>
            </Link>
          </div>
        </div>
      </section>

      {/* Related Apps */}
      <section className="py-20 md:py-32 bg-secondary/20">
        <div className="container mx-auto px-4 md:px-6">
          <h2 className="text-3xl font-bold text-foreground mb-12">More Apps</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl">
            {relatedApps.map((relatedApp) => (
              <Link key={relatedApp.id} href={`/apps/${relatedApp.id}`}>
                <Card className={`overflow-hidden cursor-pointer hover:shadow-lg transition-all group bg-gradient-to-br ${relatedApp.gradient}`}>
                  <div className="h-32 flex items-center justify-center group-hover:scale-110 transition-transform">
                    {relatedApp.icon}
                  </div>
                  <div className="p-6 bg-background">
                    <h3 className="font-bold text-foreground mb-1">
                      {relatedApp.name}
                    </h3>
                    <p className="text-sm text-foreground/70">
                      {relatedApp.tagline}
                    </p>
                  </div>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </main>
  )
}
