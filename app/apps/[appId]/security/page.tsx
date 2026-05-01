import { NEXFIY_APPS } from '@/lib/apps-data'
import { Card } from '@/components/ui/card'
import { notFound } from 'next/navigation'
import Link from 'next/link'
import { Shield, Lock, CheckCircle } from 'lucide-react'

export async function generateMetadata({ params }: { params: { appId: string } }) {
  const app = NEXFIY_APPS.find((a) => a.id === params.appId)
  if (!app) return {}

  return {
    title: `${app.name} - Security - Nexfiy`,
    description: `Security details and compliance for ${app.name}`,
  }
}

export default function AppSecurityPage({ params }: { params: { appId: string } }) {
  const app = NEXFIY_APPS.find((a) => a.id === params.appId)

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
              Security Details
            </h1>
            <p className="text-lg text-foreground/70">
              How we protect {app.name} and your data with industry-leading security.
            </p>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="py-20 md:py-32 bg-background">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-3xl mx-auto space-y-12">
            {/* Encryption */}
            <Card className="p-8 md:p-12 bg-secondary/40 border border-border">
              <div className="flex items-start gap-6 mb-6">
                <Lock className="w-12 h-12 text-foreground flex-shrink-0 mt-1" />
                <div>
                  <h2 className="text-2xl font-bold text-foreground mb-4">
                    Encryption
                  </h2>
                  <p className="text-foreground/80 mb-4">
                    {app.security.encryption || `All data in ${app.name} is protected with industry-standard encryption protocols. We use TLS 1.3 for data in transit and AES-256 for data at rest.`}
                  </p>
                  <ul className="space-y-2 text-foreground/80">
                    <li>• End-to-end encryption for sensitive data</li>
                    <li>• TLS 1.3 for all network communications</li>
                    <li>• AES-256 encryption at rest</li>
                    <li>• Regular encryption audits and updates</li>
                  </ul>
                </div>
              </div>
            </Card>

            {/* Compliance */}
            <Card className="p-8 md:p-12 bg-secondary/40 border border-border">
              <div className="flex items-start gap-6 mb-6">
                <CheckCircle className="w-12 h-12 text-foreground flex-shrink-0 mt-1" />
                <div>
                  <h2 className="text-2xl font-bold text-foreground mb-4">
                    Compliance & Standards
                  </h2>
                  <p className="text-foreground/80 mb-4">
                    {app.name} adheres to international security and privacy standards.
                  </p>
                  <div className="grid grid-cols-2 gap-4">
                    {(app.security.compliance || [
                      'GDPR - EU Data Protection',
                      'CCPA - California Privacy',
                      'ISO 27001 - Information Security',
                      'SOC 2 Type II - Security Controls',
                      'HIPAA Ready - Health Data',
                      'App Store Guidelines'
                    ]).map((standard, idx) => (
                      <div key={idx} className="flex items-center gap-2">
                        <span className="text-foreground">✓</span>
                        <span className="text-foreground/80">{standard}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </Card>

            {/* Security Audits */}
            <Card className="p-8 md:p-12 bg-secondary/40 border border-border">
              <div className="flex items-start gap-6 mb-6">
                <Shield className="w-12 h-12 text-foreground flex-shrink-0 mt-1" />
                <div>
                  <h2 className="text-2xl font-bold text-foreground mb-4">
                    Security Audits
                  </h2>
                  <p className="text-foreground/80 mb-4">
                    {app.security.audits || `${app.name} undergoes regular security audits and penetration testing from independent security firms. We take security seriously and continuously improve our systems.`}
                  </p>
                  <ul className="space-y-2 text-foreground/80">
                    <li>• Annual third-party security audits</li>
                    <li>• Regular penetration testing</li>
                    <li>• Vulnerability scanning and assessment</li>
                    <li>• Bug bounty program for security researchers</li>
                    <li>• Rapid response to security issues</li>
                  </ul>
                </div>
              </div>
            </Card>

            {/* Best Practices */}
            <Card className="p-8 md:p-12 bg-secondary/40 border border-border">
              <h2 className="text-2xl font-bold text-foreground mb-6">
                Security Best Practices
              </h2>
              <div className="space-y-4 text-foreground/80">
                <div>
                  <h3 className="font-semibold text-foreground mb-2">
                    Keep Your App Updated
                  </h3>
                  <p>
                    We regularly release security updates. Always install the latest version to ensure you have the newest security fixes.
                  </p>
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-2">
                    Use Strong Passwords
                  </h3>
                  <p>
                    Enable two-factor authentication and use strong, unique passwords to protect your account.
                  </p>
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-2">
                    Review Permissions
                  </h3>
                  <p>
                    Check what permissions {app.name} has access to and only grant permissions you're comfortable with.
                  </p>
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-2">
                    Report Security Issues
                  </h3>
                  <p>
                    Found a security issue? Please email security@nexfiy.app with details. We reward responsible disclosure.
                  </p>
                </div>
              </div>
            </Card>

            {/* Contact */}
            <Card className="p-8 bg-background border border-border">
              <h3 className="text-lg font-bold text-foreground mb-3">
                Security Questions?
              </h3>
              <p className="text-foreground/80">
                Contact our security team at security@nexfiy.app for detailed information about our security practices.
              </p>
            </Card>

            {/* Back to App Button */}
            <div className="text-center">
              <Link href={`/apps/${app.id}`}>
                <button className="px-8 py-3 bg-foreground text-background rounded-lg font-semibold hover:bg-foreground/90 transition-colors">
                  Back to App
                </button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
