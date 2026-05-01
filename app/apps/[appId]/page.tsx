import { NEXFIY_APPS } from '@/lib/apps-data'
import { Card } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { Star, Download, Heart, Share2, Apple, Smartphone, Globe, Facebook, Twitter, Linkedin, Mail } from 'lucide-react'

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
        <div className="container mx-auto px-4 md:px-6 py-16 md:py-28">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-start gap-8 mb-10">
              <div className="text-8xl flex-shrink-0">{app.icon}</div>
              <div className="flex-1">
                <div className="mb-4">
                  <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-2">
                    {app.name}
                  </h1>
                  <p className="text-lg text-foreground/70">
                    {app.tagline}
                  </p>
                </div>

                {/* Rating and Stats */}
                <div className="flex flex-wrap items-center gap-6 mb-10">
                  <div className="flex items-center gap-3">
                    <div className="flex gap-1">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          className={`w-5 h-5 ${i < Math.floor(app.rating) ? 'fill-foreground text-foreground' : 'fill-foreground/30 text-foreground/30'}`}
                        />
                      ))}
                    </div>
                    <div className="flex items-center gap-3">
                      <span className="font-bold text-lg text-foreground">{app.rating}</span>
                      <span className="text-sm text-foreground/70">({app.reviews.toLocaleString()} reviews)</span>
                    </div>
                  </div>
                  <div className="text-sm text-foreground/70 flex items-center gap-1">
                    <Download className="w-4 h-4" />
                    {app.downloads} downloads
                  </div>
                </div>

                {/* Primary CTAs and Social */}
                <div className="flex flex-col gap-6">
                  <div className="flex flex-wrap gap-3">
                    <Button className="h-12 px-8 text-base bg-foreground text-background hover:bg-foreground/90" asChild>
                      <a href={`#app-store-${app.id}`} className="flex items-center gap-2">
                        <Apple className="w-5 h-5" />
                        App Store
                      </a>
                    </Button>
                    <Button className="h-12 px-8 text-base bg-foreground text-background hover:bg-foreground/90" asChild>
                      <a href={`#google-play-${app.id}`} className="flex items-center gap-2">
                        <Smartphone className="w-5 h-5" />
                        Google Play
                      </a>
                    </Button>
                    {app.platforms.includes('Web') && (
                      <Button className="h-12 px-8 text-base bg-foreground text-background hover:bg-foreground/90" asChild>
                        <a href={`#web-app-${app.id}`} className="flex items-center gap-2">
                          <Globe className="w-5 h-5" />
                          Open Web
                        </a>
                      </Button>
                    )}
                  </div>

                  {/* Social Media and Secondary Actions */}
                  <div className="flex items-center gap-4 flex-wrap">
                    <span className="text-sm text-foreground/70">Share:</span>
                    <div className="flex gap-3">
                      <Button variant="ghost" size="sm" className="rounded-full hover:bg-foreground/20">
                        <Facebook className="w-5 h-5" />
                        <span className="sr-only">Share on Facebook</span>
                      </Button>
                      <Button variant="ghost" size="sm" className="rounded-full hover:bg-foreground/20">
                        <Twitter className="w-5 h-5" />
                        <span className="sr-only">Share on Twitter</span>
                      </Button>
                      <Button variant="ghost" size="sm" className="rounded-full hover:bg-foreground/20">
                        <Linkedin className="w-5 h-5" />
                        <span className="sr-only">Share on LinkedIn</span>
                      </Button>
                    </div>
                    <Button variant="ghost" size="sm" className="ml-auto hover:bg-foreground/20 gap-2">
                      <Heart className="w-5 h-5" />
                      Save
                    </Button>
                  </div>
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

      {/* Platforms Section */}
      <section id={`app-store-${app.id}`} className="py-16 md:py-24 bg-background">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-foreground mb-12">Download {app.name}</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {app.platforms.includes('iOS') && (
                <Card className="p-8 bg-secondary/30 border border-border hover:shadow-lg transition-all group">
                  <div className="flex items-start gap-4 mb-6">
                    <div className="text-5xl">🍎</div>
                    <div className="flex-1">
                      <h3 className="text-2xl font-bold text-foreground mb-2">iOS</h3>
                      <p className="text-foreground/70">iPhone, iPad, and Apple Vision</p>
                    </div>
                  </div>
                  <Button asChild className="w-full h-12 mb-3 bg-black text-white hover:bg-black/80">
                    <a href="https://apps.apple.com" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-2">
                      <Apple className="w-5 h-5" />
                      Get on App Store
                    </a>
                  </Button>
                  <p className="text-xs text-foreground/60 text-center">
                    Requires iOS 14.0 or later
                  </p>
                </Card>
              )}
              
              {app.platforms.includes('Android') && (
                <Card className="p-8 bg-secondary/30 border border-border hover:shadow-lg transition-all group">
                  <div className="flex items-start gap-4 mb-6">
                    <div className="text-5xl">🤖</div>
                    <div className="flex-1">
                      <h3 className="text-2xl font-bold text-foreground mb-2">Android</h3>
                      <p className="text-foreground/70">Android phones and tablets</p>
                    </div>
                  </div>
                  <Button asChild className="w-full h-12 mb-3 bg-green-600 text-white hover:bg-green-700">
                    <a href="https://play.google.com" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-2">
                      <Smartphone className="w-5 h-5" />
                      Get on Google Play
                    </a>
                  </Button>
                  <p className="text-xs text-foreground/60 text-center">
                    Requires Android 10 or later
                  </p>
                </Card>
              )}

              {app.platforms.includes('Web') && (
                <Card className="p-8 bg-secondary/30 border border-border hover:shadow-lg transition-all group">
                  <div className="flex items-start gap-4 mb-6">
                    <div className="text-5xl">🌐</div>
                    <div className="flex-1">
                      <h3 className="text-2xl font-bold text-foreground mb-2">Web</h3>
                      <p className="text-foreground/70">Browser-based, no installation needed</p>
                    </div>
                  </div>
                  <Button asChild className="w-full h-12 mb-3" id={`web-app-${app.id}`}>
                    <a href="https://app.nexfiy.com" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-2">
                      <Globe className="w-5 h-5" />
                      Open Web App
                    </a>
                  </Button>
                  <p className="text-xs text-foreground/60 text-center">
                    Chrome, Safari, Firefox, Edge
                  </p>
                </Card>
              )}

              {app.platforms.includes('macOS') && (
                <Card className="p-8 bg-secondary/30 border border-border hover:shadow-lg transition-all group">
                  <div className="flex items-start gap-4 mb-6">
                    <div className="text-5xl">💻</div>
                    <div className="flex-1">
                      <h3 className="text-2xl font-bold text-foreground mb-2">macOS</h3>
                      <p className="text-foreground/70">Mac App Store and direct download</p>
                    </div>
                  </div>
                  <Button asChild className="w-full h-12 mb-3 bg-gray-800 text-white hover:bg-gray-900">
                    <a href="https://apps.apple.com/mac" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-2">
                      <Apple className="w-5 h-5" />
                      Get on App Store
                    </a>
                  </Button>
                  <p className="text-xs text-foreground/60 text-center">
                    macOS 12.0 or later
                  </p>
                </Card>
              )}
            </div>
          </div>
        </div>
      </section>

      <div id={`google-play-${app.id}`} className="sr-only">Google Play target</div>

      {/* Pricing Section */}
      <section className="py-16 md:py-24 bg-secondary/20">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-2xl mx-auto">
            <h2 className="text-3xl font-bold text-foreground mb-8 text-center">Pricing & Version</h2>
            <Card className="p-12 bg-gradient-to-br from-blue-50 to-purple-50 border-2 border-foreground/20">
              <div className="text-center">
                <div className="text-5xl font-bold text-foreground mb-2">
                  {app.price}
                </div>
                <p className="text-lg text-foreground/70 mb-8">
                  No hidden fees • Cancel anytime
                </p>
                <div className="space-y-3 p-6 bg-background rounded-lg mb-8">
                  <p className="text-sm text-foreground">
                    <strong>Current Version:</strong> {app.version}
                  </p>
                  <p className="text-sm text-foreground/70">
                    Regular updates with new features and improvements
                  </p>
                </div>
                <Button size="lg" className="h-12 px-8 w-full" asChild>
                  <a href={`#app-store-${app.id}`} className="text-base">
                    Get {app.name} Now
                  </a>
                </Button>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Legal & Info Links */}
      <section className="py-16 md:py-20 bg-background border-t border-border">
        <div className="container mx-auto px-4 md:px-6">
          <h2 className="text-2xl font-bold text-foreground mb-10 text-center">Legal & Information</h2>
          <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Link href={`/apps/${app.id}/privacy`}>
              <Card className="p-6 text-center cursor-pointer hover:shadow-md transition-shadow group h-full">
                <h3 className="font-bold text-foreground mb-2 group-hover:text-blue-600 transition-colors">
                  Privacy Policy
                </h3>
                <p className="text-sm text-foreground/70">
                  How we collect and protect your data
                </p>
              </Card>
            </Link>
            <Link href={`/apps/${app.id}/security`}>
              <Card className="p-6 text-center cursor-pointer hover:shadow-md transition-shadow group h-full">
                <h3 className="font-bold text-foreground mb-2 group-hover:text-blue-600 transition-colors">
                  Security Details
                </h3>
                <p className="text-sm text-foreground/70">
                  Encryption and compliance information
                </p>
              </Card>
            </Link>
            <a href="https://www.apple.com/legal/privacy/products/" target="_blank" rel="noopener noreferrer">
              <Card className="p-6 text-center cursor-pointer hover:shadow-md transition-shadow group h-full">
                <h3 className="font-bold text-foreground mb-2 group-hover:text-blue-600 transition-colors flex items-center justify-center gap-2">
                  <Apple className="w-4 h-4" />
                  Apple Legal
                </h3>
                <p className="text-sm text-foreground/70">
                  Apple Privacy & Terms
                </p>
              </Card>
            </a>
            <a href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer">
              <Card className="p-6 text-center cursor-pointer hover:shadow-md transition-shadow group h-full">
                <h3 className="font-bold text-foreground mb-2 group-hover:text-blue-600 transition-colors flex items-center justify-center gap-2">
                  <Smartphone className="w-4 h-4" />
                  Google Legal
                </h3>
                <p className="text-sm text-foreground/70">
                  Google Privacy & Terms
                </p>
              </Card>
            </a>
          </div>
        </div>
      </section>

      {/* Contact Us - Founder Section */}
      <section className="py-20 md:py-32 bg-secondary/20">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-2xl mx-auto">
            <h2 className="text-3xl font-bold text-foreground mb-4 text-center">Questions About {app.name}?</h2>
            <p className="text-center text-foreground/70 mb-12">
              Have feedback, questions, or need support? Reach out directly to our founder and the team building this app.
            </p>
            
            <Card className="p-10 md:p-14 bg-background border-2 border-foreground/20">
              <div className="text-center mb-10">
                <div className="w-24 h-24 rounded-full bg-gradient-to-br from-blue-400 to-purple-500 mx-auto mb-4 flex items-center justify-center text-4xl">
                  👤
                </div>
                <h3 className="text-2xl font-bold text-foreground mb-2">
                  Direct Contact
                </h3>
                <p className="text-foreground/70 mb-6">
                  Founded and maintained by an independent developer who genuinely cares about your experience.
                </p>
              </div>

              <div className="space-y-4">
                <div className="flex items-center gap-4 p-4 bg-secondary/40 rounded-lg">
                  <Mail className="w-6 h-6 text-foreground flex-shrink-0" />
                  <div className="flex-1">
                    <p className="text-sm text-foreground/70">Email Support</p>
                    <a href="mailto:support@nexfiy.app" className="text-foreground font-semibold hover:underline">
                      support@nexfiy.app
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-4 p-4 bg-secondary/40 rounded-lg">
                  <Twitter className="w-6 h-6 text-foreground flex-shrink-0" />
                  <div className="flex-1">
                    <p className="text-sm text-foreground/70">Twitter / X</p>
                    <a href="https://twitter.com/nexfiy" target="_blank" rel="noopener noreferrer" className="text-foreground font-semibold hover:underline">
                      @nexfiy
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-4 p-4 bg-secondary/40 rounded-lg">
                  <Linkedin className="w-6 h-6 text-foreground flex-shrink-0" />
                  <div className="flex-1">
                    <p className="text-sm text-foreground/70">LinkedIn</p>
                    <a href="https://linkedin.com/company/nexfiy" target="_blank" rel="noopener noreferrer" className="text-foreground font-semibold hover:underline">
                      Nexfiy Team
                    </a>
                  </div>
                </div>
              </div>

              <div className="mt-10 p-6 bg-gradient-to-r from-blue-50 to-purple-50 rounded-lg border border-foreground/10">
                <p className="text-sm text-foreground/80 mb-4">
                  <strong>Response Time:</strong> Most inquiries are answered within 24 hours during business days.
                </p>
                <Button asChild className="w-full">
                  <a href="mailto:support@nexfiy.app">Send us a Message</a>
                </Button>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Related Apps */}
      <section className="py-20 md:py-32 bg-background">
        <div className="container mx-auto px-4 md:px-6">
          <h2 className="text-3xl font-bold text-foreground mb-12">Explore More Apps</h2>
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
