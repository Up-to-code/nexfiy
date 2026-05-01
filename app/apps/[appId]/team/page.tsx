import { NEXFIY_APPS } from '@/lib/apps-data'
import { Card } from '@/components/ui/card'
import { notFound } from 'next/navigation'
import Link from 'next/link'

export async function generateMetadata({ params }: { params: Promise<{ appId: string }> }) {
  const resolvedParams = await params
  const app = NEXFIY_APPS.find((a) => a.id === resolvedParams.appId)
  if (!app) return {}

  return {
    title: `${app.name} - Team - Nexfiy`,
    description: `Meet the team behind ${app.name}`,
  }
}

export default async function AppTeamPage({ params }: { params: Promise<{ appId: string }> }) {
  const resolvedParams = await params
  const app = NEXFIY_APPS.find((a) => a.id === resolvedParams.appId)

  if (!app) {
    notFound()
  }

  return (
    <main className="min-h-screen bg-background">
      {/* Header */}
      <section className="py-16 md:py-20 bg-secondary/30 border-b border-border">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-3xl mx-auto">
            <Link
              href={`/apps/${app.id}`}
              className="text-foreground/70 hover:text-foreground mb-6 inline-flex items-center gap-2"
            >
              ← Back to {app.name}
            </Link>
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              Team Behind {app.name}
            </h1>
            <p className="text-lg text-foreground/70">
              Meet the talented people who created {app.name}.
            </p>
          </div>
        </div>
      </section>

      {/* Team Members */}
      <section className="py-20 md:py-32 bg-background">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-4xl mx-auto">
            {app.team.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {app.team.map((member) => (
                  <Card
                    key={member.id}
                    className="p-8 bg-secondary/40 border border-border hover:shadow-lg transition-shadow"
                  >
                    <div className="flex items-start gap-6 mb-6">
                      <div className="w-24 h-24 rounded-lg bg-gradient-to-br from-foreground/20 to-foreground/10 flex items-center justify-center text-4xl font-bold text-foreground flex-shrink-0">
                        {member.name.charAt(0)}
                      </div>
                      <div className="flex-1">
                        <h3 className="text-xl font-bold text-foreground mb-1">
                          {member.name}
                        </h3>
                        <p className="text-sm font-semibold text-muted-foreground mb-4">
                          {member.role}
                        </p>
                      </div>
                    </div>
                    <p className="text-foreground/70 leading-relaxed">
                      {member.bio}
                    </p>
                  </Card>
                ))}
              </div>
            ) : (
              <Card className="p-12 bg-secondary/40 border border-border text-center">
                <p className="text-lg text-foreground/70">
                  No team information available yet.
                </p>
              </Card>
            )}
          </div>
        </div>
      </section>

      {/* Roles Explanation */}
      <section className="py-20 md:py-32 bg-secondary/20">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-foreground mb-12">Team Roles</h2>
            <div className="space-y-6">
              <Card className="p-6 bg-background border border-border">
                <h3 className="text-lg font-bold text-foreground mb-2">
                  Designer
                </h3>
                <p className="text-foreground/70">
                  Responsible for UI/UX design, user research, and creating delightful user experiences.
                </p>
              </Card>
              <Card className="p-6 bg-background border border-border">
                <h3 className="text-lg font-bold text-foreground mb-2">
                  Developer
                </h3>
                <p className="text-foreground/70">
                  Handles application development, coding, testing, and technical implementation.
                </p>
              </Card>
              <Card className="p-6 bg-background border border-border">
                <h3 className="text-lg font-bold text-foreground mb-2">
                  Product Manager
                </h3>
                <p className="text-foreground/70">
                  Guides product strategy, prioritizes features, and ensures market fit.
                </p>
              </Card>
              <Card className="p-6 bg-background border border-border">
                <h3 className="text-lg font-bold text-foreground mb-2">
                  Support
                </h3>
                <p className="text-foreground/70">
                  Provides customer support, gathers feedback, and ensures user satisfaction.
                </p>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Team Values */}
      <section className="py-20 md:py-32 bg-background">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-foreground mb-12">
              What We Stand For
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {[
                {
                  title: 'Quality First',
                  description: 'We prioritize quality over quantity in every aspect of development.',
                },
                {
                  title: 'User-Centric',
                  description: 'Every decision is made with the user\'s needs and experience in mind.',
                },
                {
                  title: 'Transparency',
                  description: 'We believe in open communication with our users about our practices.',
                },
                {
                  title: 'Continuous Improvement',
                  description: 'We constantly learn, improve, and evolve based on feedback.',
                },
                {
                  title: 'Privacy Conscious',
                  description: 'We respect user privacy and follow strict data protection policies.',
                },
                {
                  title: 'Innovation',
                  description: 'We push boundaries and explore new ways to solve problems.',
                },
              ].map((value, idx) => (
                <Card key={idx} className="p-6 bg-secondary/40 border border-border">
                  <h3 className="text-lg font-bold text-foreground mb-3">
                    {value.title}
                  </h3>
                  <p className="text-foreground/70">
                    {value.description}
                  </p>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section className="py-16 md:py-20 bg-secondary/30">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-2xl font-bold text-foreground mb-4">
              Get in Touch
            </h2>
            <p className="text-foreground/70 mb-6">
              Have feedback or questions about {app.name}? We'd love to hear from you!
            </p>
            <button className="px-8 py-3 bg-foreground text-background rounded-lg font-semibold hover:bg-foreground/90 transition-colors">
              Contact Us
            </button>
          </div>
        </div>
      </section>

      {/* Back to App Button */}
      <section className="py-8 bg-background border-t border-border">
        <div className="container mx-auto px-4 md:px-6 text-center">
          <Link href={`/apps/${app.id}`}>
            <button className="px-6 py-2 text-foreground hover:text-foreground/70 transition-colors">
              ← Back to {app.name}
            </button>
          </Link>
        </div>
      </section>
    </main>
  )
}
