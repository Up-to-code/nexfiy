'use client'

import { NEXFIY_APPS, type NexfiyApp } from '@/lib/apps-data.tsx'
import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'

interface AppsShowcaseProps {
  onAppClick: (app: NexfiyApp) => void
}

export function AppsShowcase({ onAppClick }: AppsShowcaseProps) {
  return (
    <section id="apps" className="py-20 md:py-32 bg-background">
      <div className="container mx-auto px-4 md:px-6">
        {/* Header */}
        <div className="max-w-3xl mx-auto text-center mb-16 md:mb-20">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4 tracking-tight">
            All Our Apps
          </h2>
          <p className="text-lg text-muted-foreground">
            Five premium applications for health, productivity, and focus
          </p>
        </div>

        {/* Apps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {NEXFIY_APPS.map((app) => (
            <Card
              key={app.id}
              className="group relative overflow-hidden cursor-pointer bg-card hover:shadow-lg transition-all duration-300 border border-border hover:border-foreground/20"
              onClick={() => onAppClick(app)}
            >
              {/* Background icon area */}
              <div className={`h-40 bg-gradient-to-br ${app.gradient} relative overflow-hidden flex items-center justify-center`}>
                <div className="group-hover:scale-110 transition-transform duration-300">
                  {app.icon}
                </div>
              </div>

              {/* Content */}
              <div className="p-6 space-y-4">
                <div>
                  <h3 className="text-xl font-bold text-foreground mb-1">
                    {app.name}
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    {app.tagline}
                  </p>
                </div>

                <p className="text-foreground/70 text-sm leading-relaxed line-clamp-2">
                  {app.description}
                </p>

                <Button 
                  variant="ghost" 
                  className="w-full text-foreground font-semibold hover:bg-foreground/5 group-hover:bg-foreground/10 transition-colors"
                  onClick={(e) => {
                    e.stopPropagation()
                    onAppClick(app)
                  }}
                >
                  Learn More →
                </Button>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
