import { NEXFIY_APPS } from '@/lib/apps-data.tsx'
import { Card } from '@/components/ui/card'
import Link from 'next/link'
import { Star } from 'lucide-react'

export const metadata = {
  title: 'Apps - Nexfiy',
  description: 'Explore all Nexfiy apps for health, productivity, wellness, and focus.',
}

export default function AppsPage() {
  return (
    <main className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="py-20 md:py-32 bg-gradient-to-b from-secondary/40 to-background">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-3xl mx-auto text-center space-y-6">
            <h1 className="text-5xl md:text-6xl font-bold text-foreground leading-tight">
              All Our Apps
            </h1>
            <p className="text-xl text-muted-foreground">
              Five premium applications crafted with care for your health, productivity, and wellbeing.
            </p>
          </div>
        </div>
      </section>

      {/* Apps Grid */}
      <section className="py-20 md:py-32 bg-background">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {NEXFIY_APPS.map((app) => (
              <Link key={app.id} href={`/apps/${app.id}`}>
                <Card className="h-full overflow-hidden cursor-pointer hover:shadow-lg transition-all hover:border-foreground/20 group">
                  {/* App Header Background */}
                  <div className={`h-40 bg-gradient-to-br ${app.gradient} flex items-center justify-center group-hover:scale-105 transition-transform duration-300`}>
                    {app.icon}
                  </div>

                  {/* App Info */}
                  <div className="p-8">
                    <h3 className="text-2xl font-bold text-foreground mb-1">
                      {app.name}
                    </h3>
                    <p className="text-sm text-muted-foreground mb-4">
                      {app.tagline}
                    </p>

                    {/* Rating */}
                    <div className="flex items-center gap-2 mb-4">
                      <div className="flex items-center gap-1">
                        {[...Array(5)].map((_, i) => (
                          <Star
                            key={i}
                            className="w-4 h-4"
                            fill={i < Math.floor(app.rating) ? 'currentColor' : 'none'}
                          />
                        ))}
                      </div>
                      <span className="text-sm font-medium text-foreground">
                        {app.rating}
                      </span>
                      <span className="text-xs text-muted-foreground">
                        ({app.reviews.toLocaleString()})
                      </span>
                    </div>

                    <p className="text-foreground/70 mb-6 line-clamp-2">
                      {app.description}
                    </p>

                    {/* Download Count & Price */}
                    <div className="space-y-2 pt-4 border-t border-border">
                      <div className="flex justify-between items-center text-sm">
                        <span className="text-muted-foreground">Downloads</span>
                        <span className="font-semibold text-foreground">
                          {app.downloads}
                        </span>
                      </div>
                      <div className="flex justify-between items-center text-sm">
                        <span className="text-muted-foreground">Price</span>
                        <span className="font-semibold text-foreground">
                          {app.price}
                        </span>
                      </div>
                    </div>

                    <button className="w-full mt-6 px-4 py-2 bg-foreground text-background rounded-lg font-semibold hover:bg-foreground/90 transition-colors group-hover:shadow-md">
                      View Details
                    </button>
                  </div>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 md:py-20 bg-secondary/30">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-3xl mx-auto text-center">
            <div>
              <div className="text-4xl font-bold text-foreground mb-2">5</div>
              <p className="text-foreground/70">Premium Apps</p>
            </div>
            <div>
              <div className="text-4xl font-bold text-foreground mb-2">4.7★</div>
              <p className="text-foreground/70">Average Rating</p>
            </div>
            <div>
              <div className="text-4xl font-bold text-foreground mb-2">2M+</div>
              <p className="text-foreground/70">Total Downloads</p>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
