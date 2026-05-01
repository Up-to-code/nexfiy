import { NEXFIY_SERVICES } from '@/lib/services-data'
import { Card } from '@/components/ui/card'
import Link from 'next/link'

export const metadata = {
  title: 'Services - Nexfiy',
  description: 'Discover Nexfiy services including app development, design, security audits, and ongoing support.',
}

export default function ServicesPage() {
  return (
    <main className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="py-20 md:py-32 bg-gradient-to-b from-secondary/40 to-background">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-3xl mx-auto text-center space-y-6">
            <h1 className="text-5xl md:text-6xl font-bold text-foreground leading-tight">
              Our Services
            </h1>
            <p className="text-xl text-muted-foreground">
              Comprehensive services to help you build, scale, and maintain exceptional applications.
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 md:py-32 bg-background">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {NEXFIY_SERVICES.map((service) => (
              <Link key={service.id} href={`/services/${service.id}`}>
                <Card className="h-full p-8 cursor-pointer hover:shadow-lg transition-all hover:border-foreground/20 group">
                  <div className="mb-6 group-hover:scale-110 transition-transform duration-300">
                    {service.icon}
                  </div>
                  <h3 className="text-2xl font-bold text-foreground mb-3">
                    {service.name}
                  </h3>
                  <p className="text-sm text-muted-foreground mb-4 capitalize">
                    {service.team}
                  </p>
                  <p className="text-foreground/70 mb-6">
                    {service.shortDescription}
                  </p>
                  <div className="flex items-center text-sm font-medium text-foreground group-hover:translate-x-1 transition-transform">
                    Learn More →
                  </div>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-16 md:py-24 bg-secondary/30">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-2xl mx-auto text-center space-y-6">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground">
              Ready to Get Started?
            </h2>
            <p className="text-lg text-muted-foreground">
              Contact us today to discuss your project and find the right service for your needs.
            </p>
            <button className="px-8 py-3 bg-foreground text-background rounded-lg font-semibold hover:bg-foreground/90 transition-colors">
              Contact Us
            </button>
          </div>
        </div>
      </section>
    </main>
  )
}
