'use client'

import { Card } from '@/components/ui/card'
import { Shield, Lock, Eye, Server } from 'lucide-react'

export function Trust() {
  return (
    <section className="py-20 md:py-32 bg-secondary/20">
      <div className="container mx-auto px-4 md:px-6">
        {/* Header */}
        <div className="max-w-3xl mx-auto text-center mb-16 md:mb-20">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4 tracking-tight">
            Trust & Security
          </h2>
          <p className="text-lg text-muted-foreground">
            Enterprise-grade security and privacy for your peace of mind
          </p>
        </div>

        {/* Trust Items */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto mb-16">
          <Card className="p-8 bg-background border border-border">
            <div className="flex items-start gap-4">
              <Shield className="w-8 h-8 text-foreground flex-shrink-0 mt-1" />
              <div>
                <h3 className="text-xl font-bold text-foreground mb-2">
                  Bank-Level Encryption
                </h3>
                <p className="text-foreground/70">
                  All data is encrypted in transit and at rest using industry-standard AES-256 encryption.
                </p>
              </div>
            </div>
          </Card>

          <Card className="p-8 bg-background border border-border">
            <div className="flex items-start gap-4">
              <Lock className="w-8 h-8 text-foreground flex-shrink-0 mt-1" />
              <div>
                <h3 className="text-xl font-bold text-foreground mb-2">
                  Secure Infrastructure
                </h3>
                <p className="text-foreground/70">
                  Hosted on SOC 2 Type II compliant servers with continuous security monitoring.
                </p>
              </div>
            </div>
          </Card>

          <Card className="p-8 bg-background border border-border">
            <div className="flex items-start gap-4">
              <Eye className="w-8 h-8 text-foreground flex-shrink-0 mt-1" />
              <div>
                <h3 className="text-xl font-bold text-foreground mb-2">
                  Privacy First
                </h3>
                <p className="text-foreground/70">
                  We never sell your data, share it with advertisers, or use it for any purpose you don't authorize.
                </p>
              </div>
            </div>
          </Card>

          <Card className="p-8 bg-background border border-border">
            <div className="flex items-start gap-4">
              <Server className="w-8 h-8 text-foreground flex-shrink-0 mt-1" />
              <div>
                <h3 className="text-xl font-bold text-foreground mb-2">
                  Regular Audits
                </h3>
                <p className="text-foreground/70">
                  Third-party security audits and penetration testing ensure our systems are always secure.
                </p>
              </div>
            </div>
          </Card>
        </div>

        {/* Certifications */}
        <div className="bg-background border border-border rounded-lg p-8 text-center max-w-2xl mx-auto">
          <p className="text-sm text-muted-foreground mb-6">
            Trusted and Certified By
          </p>
          <div className="flex justify-center items-center gap-8 flex-wrap">
            <div className="text-center">
              <div className="text-2xl font-bold text-foreground">SOC 2</div>
              <p className="text-xs text-muted-foreground mt-1">Type II Compliant</p>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-foreground">GDPR</div>
              <p className="text-xs text-muted-foreground mt-1">Compliant</p>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-foreground">ISO 27001</div>
              <p className="text-xs text-muted-foreground mt-1">Certified</p>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-foreground">HIPAA</div>
              <p className="text-xs text-muted-foreground mt-1">Compliant</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
