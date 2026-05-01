'use client'

import { FEATURES } from '@/lib/apps-data'
import { Card } from '@/components/ui/card'

export function Features() {
  return (
    <section className="py-20 md:py-32 bg-secondary/30">
      <div className="container mx-auto px-4 md:px-6">
        {/* Header */}
        <div className="max-w-3xl mx-auto text-center mb-16 md:mb-20">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4 tracking-tight">
            Why Choose Nexora
          </h2>
          <p className="text-lg text-muted-foreground">
            Built with the best practices in security, design, and user experience
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {FEATURES.map((feature, index) => (
            <Card 
              key={index}
              className="p-6 bg-background border border-border hover:shadow-md transition-shadow"
            >
              <div className="text-4xl mb-4">{feature.icon}</div>
              <h3 className="text-xl font-bold text-foreground mb-2">
                {feature.title}
              </h3>
              <p className="text-foreground/70 leading-relaxed">
                {feature.description}
              </p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
