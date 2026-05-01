import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import { Shield, Lock, Eye, AlertCircle } from 'lucide-react'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Security - Nexora',
  description: 'Nexora security practices, certifications, and data protection measures.',
}

export default function SecurityPage() {
  return (
    <main className="min-h-screen bg-background">
      {/* Header */}
      <div className="border-b border-border">
        <div className="container mx-auto px-4 md:px-6 py-8">
          <Link href="/">
            <Button variant="ghost" className="mb-4">
              ← Back to Home
            </Button>
          </Link>
          <h1 className="text-4xl md:text-5xl font-bold text-foreground">
            Security & Privacy
          </h1>
          <p className="text-muted-foreground mt-2">
            Your security and privacy are our top priorities
          </p>
        </div>
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 md:px-6 py-16 max-w-4xl">
        {/* Overview */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-foreground mb-6">Security Overview</h2>
          <p className="text-foreground/70 leading-relaxed mb-4">
            Nexora implements industry-leading security measures to protect your data. We employ 
            multiple layers of security to ensure your information remains confidential and secure.
          </p>
        </section>

        {/* Security Features Grid */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-foreground mb-8">Our Security Measures</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card className="p-6 bg-card border border-border">
              <Shield className="w-8 h-8 text-foreground mb-4" />
              <h3 className="text-xl font-bold text-foreground mb-3">Encryption</h3>
              <p className="text-foreground/70 text-sm">
                All data is encrypted in transit using TLS 1.3 and at rest using AES-256 encryption. 
                Your sensitive information is protected with military-grade encryption standards.
              </p>
            </Card>

            <Card className="p-6 bg-card border border-border">
              <Lock className="w-8 h-8 text-foreground mb-4" />
              <h3 className="text-xl font-bold text-foreground mb-3">Infrastructure</h3>
              <p className="text-foreground/70 text-sm">
                Our infrastructure is hosted on SOC 2 Type II compliant servers with continuous 
                monitoring, automated backups, and disaster recovery procedures.
              </p>
            </Card>

            <Card className="p-6 bg-card border border-border">
              <Eye className="w-8 h-8 text-foreground mb-4" />
              <h3 className="text-xl font-bold text-foreground mb-3">Privacy</h3>
              <p className="text-foreground/70 text-sm">
                We never sell your data, share it with advertisers, or use it for purposes beyond 
                what you authorize. Your privacy is sacred to us.
              </p>
            </Card>

            <Card className="p-6 bg-card border border-border">
              <AlertCircle className="w-8 h-8 text-foreground mb-4" />
              <h3 className="text-xl font-bold text-foreground mb-3">Compliance</h3>
              <p className="text-foreground/70 text-sm">
                We are compliant with GDPR, HIPAA, CCPA, and other international data protection regulations. 
                Regular third-party security audits verify our compliance.
              </p>
            </Card>
          </div>
        </section>

        {/* Certifications */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-foreground mb-8">Certifications & Standards</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card className="p-6 bg-secondary/10 border border-border text-center">
              <h3 className="text-lg font-bold text-foreground mb-2">SOC 2 Type II</h3>
              <p className="text-sm text-foreground/70">
                Independently verified security and operational controls
              </p>
            </Card>

            <Card className="p-6 bg-secondary/10 border border-border text-center">
              <h3 className="text-lg font-bold text-foreground mb-2">ISO 27001</h3>
              <p className="text-sm text-foreground/70">
                International information security management standard
              </p>
            </Card>

            <Card className="p-6 bg-secondary/10 border border-border text-center">
              <h3 className="text-lg font-bold text-foreground mb-2">GDPR Compliant</h3>
              <p className="text-sm text-foreground/70">
                EU data protection and privacy regulations
              </p>
            </Card>

            <Card className="p-6 bg-secondary/10 border border-border text-center">
              <h3 className="text-lg font-bold text-foreground mb-2">HIPAA Compliant</h3>
              <p className="text-sm text-foreground/70">
                Health information portability and accountability
              </p>
            </Card>
          </div>
        </section>

        {/* Practices */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-foreground mb-6">Security Practices</h2>
          <div className="space-y-4 text-foreground/70">
            <div className="flex gap-4">
              <span className="text-foreground font-bold flex-shrink-0">•</span>
              <p>Regular penetration testing by independent security firms</p>
            </div>
            <div className="flex gap-4">
              <span className="text-foreground font-bold flex-shrink-0">•</span>
              <p>Two-factor authentication (2FA) for all accounts</p>
            </div>
            <div className="flex gap-4">
              <span className="text-foreground font-bold flex-shrink-0">•</span>
              <p>Automated security monitoring and intrusion detection systems</p>
            </div>
            <div className="flex gap-4">
              <span className="text-foreground font-bold flex-shrink-0">•</span>
              <p>Regular software updates and security patches</p>
            </div>
            <div className="flex gap-4">
              <span className="text-foreground font-bold flex-shrink-0">•</span>
              <p>Employee security training and access controls</p>
            </div>
            <div className="flex gap-4">
              <span className="text-foreground font-bold flex-shrink-0">•</span>
              <p>Comprehensive incident response and disaster recovery plans</p>
            </div>
          </div>
        </section>

        {/* Reporting */}
        <section className="bg-secondary/20 rounded-lg p-8 border border-border">
          <h2 className="text-2xl font-bold text-foreground mb-4">Reporting Security Issues</h2>
          <p className="text-foreground/70 leading-relaxed mb-4">
            If you discover a security vulnerability, please report it responsibly to our security team. 
            We take security seriously and will acknowledge your report within 24 hours.
          </p>
          <p className="text-foreground/70">
            Please email <span className="font-semibold">security@nexora.app</span> with details about 
            the vulnerability. Do not publicly disclose the issue until we have had time to address it.
          </p>
        </section>
      </div>
    </main>
  )
}
