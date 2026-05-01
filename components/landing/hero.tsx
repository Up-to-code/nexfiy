'use client'

import { Button } from '@/components/ui/button'

export function Hero() {
  const handleGetStarted = () => {
    const appsSection = document.querySelector('#apps')
    appsSection?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section className="relative min-h-[90vh] flex items-center justify-center bg-background overflow-hidden pt-20 md:pt-0">
      {/* Subtle background accent */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-0 right-0 w-96 h-96 bg-slate-100 rounded-full blur-3xl opacity-30 -mr-48 -mt-48" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-slate-100 rounded-full blur-3xl opacity-20 -ml-48 -mb-48" />
      </div>

      <div className="container mx-auto px-4 md:px-6 py-12 md:py-0">
        <div className="max-w-3xl mx-auto text-center space-y-8">
          {/* Headline */}
          <div className="space-y-4">
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-foreground leading-tight tracking-tight">
              Build Your{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-slate-900 to-slate-700">
                Best Self
              </span>
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              Nexora brings together premium applications for health, productivity, and focus. 
              Everything you need to thrive, all in one ecosystem.
            </p>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-4">
            <Button 
              onClick={handleGetStarted}
              size="lg" 
              className="px-8 h-12 bg-foreground text-background hover:bg-foreground/90 font-semibold"
            >
              Explore Apps
            </Button>
            <Button 
              variant="outline" 
              size="lg" 
              className="px-8 h-12 border-2 border-foreground text-foreground hover:bg-foreground/5 font-semibold"
            >
              Learn More
            </Button>
          </div>

          {/* Trust indicators */}
          <div className="pt-8 border-t border-border">
            <p className="text-sm text-muted-foreground mb-4">Trusted by thousands of users worldwide</p>
            <div className="flex justify-center items-center gap-8 flex-wrap text-sm text-muted-foreground">
              <div className="flex items-center gap-2">
                <span className="text-lg">⭐</span>
                <span>4.9 Stars</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-lg">🌍</span>
                <span>50+ Countries</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-lg">👥</span>
                <span>100K+ Users</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
