import { NEXFIY_TEAMS } from '@/lib/teams-data'
import { Card } from '@/components/ui/card'
import Link from 'next/link'

export const metadata = {
  title: 'Teams - Nexfiy',
  description: 'Meet the talented teams behind Nexfiy applications and services.',
}

export default function TeamsPage() {
  return (
    <main className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="py-20 md:py-32 bg-gradient-to-b from-secondary/40 to-background">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-3xl mx-auto text-center space-y-6">
            <h1 className="text-5xl md:text-6xl font-bold text-foreground leading-tight">
              Our Teams
            </h1>
            <p className="text-xl text-muted-foreground">
              Talented professionals dedicated to building exceptional products and experiences.
            </p>
          </div>
        </div>
      </section>

      {/* Teams Grid */}
      <section className="py-20 md:py-32 bg-background">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {NEXFIY_TEAMS.map((team) => (
              <Link key={team.id} href={`/teams/${team.id}`}>
                <Card className="h-full p-8 cursor-pointer hover:shadow-lg transition-all hover:border-foreground/20 group">
                  <div className="mb-6 group-hover:scale-110 transition-transform duration-300">
                    {team.icon}
                  </div>
                  <h3 className="text-2xl font-bold text-foreground mb-2">
                    {team.name}
                  </h3>
                  <p className="text-sm text-muted-foreground mb-4 font-medium">
                    {team.role}
                  </p>
                  <p className="text-foreground/70 mb-4 line-clamp-3">
                    {team.description}
                  </p>
                  <div className="flex items-center gap-2 text-sm font-medium text-foreground group-hover:translate-x-1 transition-transform">
                    Learn More →
                  </div>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 md:py-32 bg-secondary/20">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-4xl font-bold text-foreground mb-6">
              Our Shared Values
            </h2>
            <p className="text-lg text-muted-foreground">
              Across all our teams, we share a commitment to excellence, collaboration, and creating products that matter.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {[
              {
                title: 'Excellence',
                description: 'We don\'t compromise on quality in any aspect of our work.',
              },
              {
                title: 'Collaboration',
                description: 'We work together across teams to achieve our shared goals.',
              },
              {
                title: 'Impact',
                description: 'We focus on creating products that genuinely improve people\'s lives.',
              },
            ].map((value, idx) => (
              <Card key={idx} className="p-8 bg-background border border-border">
                <h3 className="text-xl font-bold text-foreground mb-3">
                  {value.title}
                </h3>
                <p className="text-foreground/70">
                  {value.description}
                </p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Join CTA */}
      <section className="py-16 md:py-24 bg-foreground text-background">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-2xl mx-auto text-center space-y-6">
            <h2 className="text-4xl font-bold">
              Interested in Joining Our Team?
            </h2>
            <p className="text-lg text-background/80">
              We're always looking for talented individuals who share our passion for quality and excellence.
            </p>
            <button className="px-8 py-3 bg-background text-foreground rounded-lg font-semibold hover:bg-background/90 transition-colors">
              View Opportunities
            </button>
          </div>
        </div>
      </section>
    </main>
  )
}
