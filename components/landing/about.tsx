'use client'

export function About() {
  return (
    <section className="py-20 md:py-32 bg-background">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-3xl mx-auto space-y-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4 tracking-tight">
              Our Story
            </h2>
          </div>

          <div className="space-y-6 text-lg leading-relaxed text-foreground/70">
            <p>
              Nexora was founded by a team of designers, engineers, and health enthusiasts who believed 
              that technology could be a force for good in people's lives. We saw a gap in the market—
              premium applications that genuinely understood the needs of health-conscious, 
              productivity-focused individuals.
            </p>

            <p>
              Rather than building yet another feature-bloated app, we chose to focus on quality over quantity. 
              Every Nexora application is thoughtfully designed, thoroughly tested, and built with the latest 
              best practices in security, performance, and user experience.
            </p>

            <p>
              Today, hundreds of thousands of users worldwide trust Nexora to help them achieve their goals. 
              From tracking their health to staying focused on what matters most, Nexora has become an essential 
              part of their daily routine.
            </p>

            <p>
              Our vision remains unchanged: to empower people to become their best selves through thoughtful, 
              beautiful, and powerful applications.
            </p>
          </div>

          {/* Values */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16 pt-12 border-t border-border">
            <div className="text-center">
              <div className="text-3xl mb-3">✨</div>
              <h3 className="font-bold text-foreground mb-2">Excellence</h3>
              <p className="text-sm text-muted-foreground">
                We don't compromise on quality in any aspect of what we build.
              </p>
            </div>
            <div className="text-center">
              <div className="text-3xl mb-3">🛡️</div>
              <h3 className="font-bold text-foreground mb-2">Privacy</h3>
              <p className="text-sm text-muted-foreground">
                Your data is sacred. We never sell or share your information.
              </p>
            </div>
            <div className="text-center">
              <div className="text-3xl mb-3">❤️</div>
              <h3 className="font-bold text-foreground mb-2">Care</h3>
              <p className="text-sm text-muted-foreground">
                We genuinely care about your success and well-being.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
