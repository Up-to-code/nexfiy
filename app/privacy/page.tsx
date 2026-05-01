import Link from 'next/link'
import { Button } from '@/components/ui/button'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Privacy Policy - Nexfiy',
  description: 'Nexfiy privacy policy and data protection information. Your privacy and data security are paramount.',
}

export default function PrivacyPage() {
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
            Privacy Policy
          </h1>
          <p className="text-muted-foreground mt-2">
            Last updated: May 2026
          </p>
        </div>
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 md:px-6 py-16 max-w-3xl">
        <div className="prose prose-invert max-w-none space-y-8">
          <section>
            <h2 className="text-2xl font-bold text-foreground mb-4">1. Introduction</h2>
            <p className="text-foreground/70 leading-relaxed">
              At Nexfiy, I take your privacy seriously. This Privacy Policy explains how I collect, use, 
              disclose, and safeguard your information when you use my applications and services. Your data belongs 
              to you—not to advertisers, not to data brokers, not to anyone but you.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-foreground mb-4">2. Information We Collect</h2>
            <p className="text-foreground/70 leading-relaxed mb-4">
              We collect information you provide directly to us, such as:
            </p>
            <ul className="list-disc list-inside space-y-2 text-foreground/70">
              <li>Account registration information (name, email, password)</li>
              <li>Health and wellness data you input</li>
              <li>Device information</li>
              <li>Usage analytics and logs</li>
              <li>Communication data</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-foreground mb-4">3. How We Use Your Information</h2>
            <p className="text-foreground/70 leading-relaxed mb-4">
              We use the information we collect to:
            </p>
            <ul className="list-disc list-inside space-y-2 text-foreground/70">
              <li>Provide and maintain our services</li>
              <li>Personalize your experience</li>
              <li>Improve our applications</li>
              <li>Send important notifications</li>
              <li>Ensure security and prevent fraud</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-foreground mb-4">4. Data Security</h2>
            <p className="text-foreground/70 leading-relaxed">
              We implement comprehensive security measures including AES-256 encryption, secure servers, 
              and regular security audits to protect your data. However, no method of transmission over the internet 
              is completely secure.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-foreground mb-4">5. Your Rights</h2>
            <p className="text-foreground/70 leading-relaxed mb-4">
              You have the right to:
            </p>
            <ul className="list-disc list-inside space-y-2 text-foreground/70">
              <li>Access your personal data</li>
              <li>Correct inaccurate information</li>
              <li>Request deletion of your data</li>
              <li>Opt-out of communications</li>
              <li>Data portability</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-foreground mb-4">6. Third-Party Services</h2>
            <p className="text-foreground/70 leading-relaxed">
              We do not sell your data to third parties. We may use trusted service providers to help us 
              deliver our services, all under strict confidentiality agreements.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-foreground mb-4">7. Changes to This Policy</h2>
            <p className="text-foreground/70 leading-relaxed">
              We may update this Privacy Policy from time to time. We will notify you of significant changes 
              via email or through our applications.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-foreground mb-4">8. Contact Us</h2>
            <p className="text-foreground/70 leading-relaxed">
              If you have any questions about this Privacy Policy, please contact us at 
              <span className="font-semibold"> privacy@nexora.app</span>
            </p>
          </section>
        </div>
      </div>
    </main>
  )
}
