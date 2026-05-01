import { NEXFIY_TEAMS } from '@/lib/teams-data'
import { Card } from '@/components/ui/card'
import Link from 'next/link'
import { notFound } from 'next/navigation'

export async function generateStaticParams() {
  return NEXFIY_TEAMS.map((team) => ({
    teamId: team.id,
  }))
}

export async function generateMetadata({ params }: { params: { teamId: string } }) {
  const team = NEXFIY_TEAMS.find((t) => t.id === params.teamId)
  if (!team) return {}

  return {
    title: `${team.name} - Nexfiy Teams`,
    description: team.description,
  }
}

export default function TeamPage({ params }: { params: { teamId: string } }) {
  const team = NEXFIY_TEAMS.find((t) => t.id === params.teamId)

  if (!team) {
    notFound()
  }

  return (
    <main className="min-h-screen bg-background">
      {/* Header */}
      <section className="py-20 md:py-32 bg-gradient-to-b from-secondary/40 to-background">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-3xl mx-auto">
            <div className="flex items-center gap-6 mb-8">
              <div className="text-5xl">{team.icon}</div>
              <div>
                <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-2">
                  {team.name}
                </h1>
                <p className="text-lg text-muted-foreground font-medium">
                  {team.role}
                </p>
              </div>
            </div>
            <p className="text-xl text-foreground/70">
              {team.description}
            </p>
          </div>
        </div>
      </section>

      {/* Mission */}
      <section className="py-16 md:py-20 bg-secondary/20">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold text-foreground mb-6">Our Mission</h2>
            <p className="text-lg text-foreground/70 leading-relaxed mb-8">
              {team.longDescription}
            </p>
            <p className="text-lg text-foreground mb-8 font-semibold">
              "{team.mission}"
            </p>

            <h3 className="text-2xl font-bold text-foreground mb-6">Key Focus Areas</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {team.focus.map((area, idx) => (
                <div key={idx} className="flex items-start gap-3">
                  <div className="text-foreground font-bold mt-1">→</div>
                  <span className="text-foreground/80">{area}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Team Members */}
      <section className="py-20 md:py-32 bg-background">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-4xl font-bold text-foreground mb-16 text-center">
              Team Members
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {team.members.map((member) => (
                <Card key={member.id} className="p-8 bg-secondary/40 border border-border hover:shadow-lg transition-shadow">
                  <div className="flex items-start gap-6 mb-6">
                    <div className="w-20 h-20 rounded-lg bg-gradient-to-br from-foreground/20 to-foreground/10 flex items-center justify-center text-3xl font-bold text-foreground flex-shrink-0">
                      {member.name.charAt(0)}
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-foreground mb-1">
                        {member.name}
                      </h3>
                      <p className="text-sm font-semibold text-muted-foreground">
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
          </div>
        </div>
      </section>

      {/* Other Teams */}
      <section className="py-20 md:py-32 bg-secondary/20">
        <div className="container mx-auto px-4 md:px-6">
          <h2 className="text-3xl font-bold text-foreground mb-12">Other Teams</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {NEXFIY_TEAMS.filter((t) => t.id !== team.id)
              .slice(0, 3)
              .map((otherTeam) => (
                <Link key={otherTeam.id} href={`/teams/${otherTeam.id}`}>
                  <Card className="p-6 cursor-pointer hover:shadow-lg transition-all group bg-background border border-border">
                    <div className="mb-4 group-hover:scale-110 transition-transform">
                      {otherTeam.icon}
                    </div>
                    <h3 className="text-lg font-bold text-foreground mb-1">
                      {otherTeam.name}
                    </h3>
                    <p className="text-sm text-muted-foreground mb-3 font-medium">
                      {otherTeam.role}
                    </p>
                    <p className="text-sm text-foreground/70 line-clamp-2">
                      {otherTeam.description}
                    </p>
                  </Card>
                </Link>
              ))}
          </div>
        </div>
      </section>
    </main>
  )
}
