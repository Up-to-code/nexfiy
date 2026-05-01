'use client'

import { Button } from '@/components/ui/button'

export function Hero() {
  const handleGetStarted = () => {
    const appsSection = document.querySelector('#apps')
    appsSection?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section className="relative min-h-screen flex items-center justify-center bg-background overflow-hidden pt-20 md:pt-0">
      {/* Subtle background accent */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-0 right-0 w-96 h-96 bg-slate-100 rounded-full blur-3xl opacity-20 -mr-48 -mt-48" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-slate-100 rounded-full blur-3xl opacity-15 -ml-48 -mb-48" />
      </div>

      <div className="container mx-auto px-4 md:px-6 py-12 md:py-0">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          {/* Badge */}
          <div className="inline-block px-4 py-2 rounded-full bg-secondary border border-border">
            <span className="text-sm font-medium text-foreground">Built by one developer for quality</span>
          </div>

          {/* Headline */}
          <div className="space-y-6">
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-foreground leading-tight tracking-tight text-balance">
              Crafted by One Developer
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed text-balance">
              Premium apps for health, productivity, and focus. Built with meticulous care, designed for people who value quality over growth.
            </p>
          </div>

          {/* Trust Indicators */}
          <div className="flex flex-wrap justify-center gap-8 pt-8">
            <div className="text-center">
              <div className="text-4xl font-bold text-foreground">4.9★</div>
              <p className="text-sm text-muted-foreground mt-1">App Rating</p>
            </div>
            <div className="hidden sm:block w-px h-16 bg-border" />
            <div className="text-center">
              <div className="text-4xl font-bold text-foreground">100K+</div>
              <p className="text-sm text-muted-foreground mt-1">Active Users</p>
            </div>
            <div className="hidden sm:block w-px h-16 bg-border" />
            <div className="text-center">
              <div className="text-4xl font-bold text-foreground">5</div>
              <p className="text-sm text-muted-foreground mt-1">Premium Apps</p>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-8">
            <Button 
              onClick={handleGetStarted}
              size="lg" 
              className="px-8 h-12 bg-foreground text-background hover:bg-foreground/90 font-semibold w-full sm:w-auto"
            >
              Explore All Apps
            </Button>
            <Button 
              variant="outline" 
              size="lg" 
              className="px-8 h-12 border-2 border-foreground text-foreground hover:bg-foreground/5 font-semibold w-full sm:w-auto"
            >
              About the Founder
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
