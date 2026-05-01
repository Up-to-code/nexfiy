import { NEXFIY_SERVICES } from '@/lib/services-data'
import { Card } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import Link from 'next/link'
import { notFound } from 'next/navigation'

export async function generateStaticParams() {
  return NEXFIY_SERVICES.map((service) => ({
    serviceId: service.id,
  }))
}

export async function generateMetadata({ params }: { params: { serviceId: string } }) {
  const service = NEXFIY_SERVICES.find((s) => s.id === params.serviceId)
  if (!service) return {}

  return {
    title: `${service.name} - Nexfiy Services`,
    description: service.shortDescription,
  }
}

export default function ServicePage({ params }: { params: { serviceId: string } }) {
  const service = NEXFIY_SERVICES.find((s) => s.id === params.serviceId)

  if (!service) {
    notFound()
  }

  return (
    <main className="min-h-screen bg-background">
      {/* Header */}
      <section className="py-20 md:py-32 bg-gradient-to-b from-secondary/40 to-background">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-3xl mx-auto">
            <div className="flex items-center gap-6 mb-8">
              <div className="text-5xl">{service.icon}</div>
              <div>
                <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-2">
                  {service.name}
                </h1>
                <p className="text-lg text-muted-foreground capitalize">
                  {service.team}
                </p>
              </div>
            </div>
            <p className="text-xl text-foreground/70 mb-8">
              {service.shortDescription}
            </p>
            <Button asChild className="h-12">
              <a href="#contact">Get Started</a>
            </Button>
          </div>
        </div>
      </section>

      {/* Overview */}
      <section className="py-16 md:py-20 bg-background">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-3xl mx-auto">
            <p className="text-lg text-foreground/80 leading-relaxed">
              {service.details}
            </p>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-16 md:py-20 bg-secondary/20">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-foreground mb-12">
              What's Included
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {service.features.map((feature, idx) => (
                <Card key={idx} className="p-6 bg-background border border-border">
                  <div className="flex gap-4">
                    <div className="text-2xl">✓</div>
                    <div>
                      <h3 className="font-semibold text-foreground mb-2">
                        {feature}
                      </h3>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Pricing */}
      {service.pricing && (
        <section className="py-16 md:py-20 bg-background">
          <div className="container mx-auto px-4 md:px-6">
            <div className="max-w-2xl mx-auto text-center">
              <h2 className="text-3xl font-bold text-foreground mb-6">Pricing</h2>
              <Card className="p-8 bg-secondary/40 border border-border">
                <div className="text-4xl font-bold text-foreground mb-2">
                  {service.pricing}
                </div>
                <p className="text-foreground/70 mb-6">
                  Contact us for a custom quote based on your specific needs.
                </p>
                <Button asChild>
                  <Link href="/#contact">Request Quote</Link>
                </Button>
              </Card>
            </div>
          </div>
        </section>
      )}

      {/* Related Services */}
      <section className="py-16 md:py-20 bg-secondary/30">
        <div className="container mx-auto px-4 md:px-6">
          <h2 className="text-3xl font-bold text-foreground mb-12">Other Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {NEXFIY_SERVICES.filter((s) => s.id !== service.id)
              .slice(0, 3)
              .map((relatedService) => (
                <Link key={relatedService.id} href={`/services/${relatedService.id}`}>
                  <Card className="p-6 cursor-pointer hover:shadow-lg transition-all group">
                    <div className="mb-4 group-hover:scale-110 transition-transform">
                      {relatedService.icon}
                    </div>
                    <h3 className="text-lg font-bold text-foreground mb-2">
                      {relatedService.name}
                    </h3>
                    <p className="text-sm text-foreground/70">
                      {relatedService.shortDescription}
                    </p>
                  </Card>
                </Link>
              ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 md:py-24 bg-foreground text-background">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-2xl mx-auto text-center space-y-6">
            <h2 className="text-4xl font-bold">
              Let's Build Something Great
            </h2>
            <p className="text-lg text-background/80">
              Get in touch to discuss how we can help your project succeed.
            </p>
            <Button
              variant="outline"
              className="border-background text-background hover:bg-background/10"
              asChild
            >
              <Link href="/#contact">Start a Project</Link>
            </Button>
          </div>
        </div>
      </section>
    </main>
  )
}
