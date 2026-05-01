'use client'

import { Card } from '@/components/ui/card'
import { Shield, Lock, Eye, Heart } from 'lucide-react'

export function Trust() {
  return (
    <section className="py-20 md:py-32 bg-secondary/20">
      <div className="container mx-auto px-4 md:px-6">
        {/* Header */}
        <div className="max-w-3xl mx-auto text-center mb-16 md:mb-20">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4 tracking-tight">
            Privacy & Security
          </h2>
          <p className="text-lg text-muted-foreground">
            Your trust is paramount. Your data is protected.
          </p>
        </div>

        {/* Trust Items */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto mb-16">
          <Card className="p-8 bg-background border border-border hover:shadow-lg transition-shadow">
            <div className="flex items-start gap-4">
              <Shield className="w-8 h-8 text-foreground flex-shrink-0 mt-1" />
              <div>
                <h3 className="text-xl font-bold text-foreground mb-2">
                  End-to-End Encrypted
                </h3>
                <p className="text-foreground/70">
                  Your sensitive data is encrypted with AES-256. Even I cannot see it without your key.
                </p>
              </div>
            </div>
          </Card>

          <Card className="p-8 bg-background border border-border hover:shadow-lg transition-shadow">
            <div className="flex items-start gap-4">
              <Lock className="w-8 h-8 text-foreground flex-shrink-0 mt-1" />
              <div>
                <h3 className="text-xl font-bold text-foreground mb-2">
                  No Tracking
                </h3>
                <p className="text-foreground/70">
                  No analytics cookies, no user tracking, no behavioral data collection. Period.
                </p>
              </div>
            </div>
          </Card>

          <Card className="p-8 bg-background border border-border hover:shadow-lg transition-shadow">
            <div className="flex items-start gap-4">
              <Eye className="w-8 h-8 text-foreground flex-shrink-0 mt-1" />
              <div>
                <h3 className="text-xl font-bold text-foreground mb-2">
                  Privacy First
                </h3>
                <p className="text-foreground/70">
                  Your data is never sold, shared with third parties, or used for advertising purposes.
                </p>
              </div>
            </div>
          </Card>

          <Card className="p-8 bg-background border border-border hover:shadow-lg transition-shadow">
            <div className="flex items-start gap-4">
              <Heart className="w-8 h-8 text-foreground flex-shrink-0 mt-1" />
              <div>
                <h3 className="text-xl font-bold text-foreground mb-2">
                  Made with Care
                </h3>
                <p className="text-foreground/70">
                  Built by someone who respects privacy and puts users first. Not an algorithm.
                </p>
              </div>
            </div>
          </Card>
        </div>

        {/* Compliance */}
        <div className="bg-background border border-border rounded-lg p-8 text-center max-w-2xl mx-auto">
          <p className="text-sm text-muted-foreground mb-6">
            Built with Standards in Mind
          </p>
          <div className="flex justify-center items-center gap-8 flex-wrap">
            <div className="text-center">
              <div className="text-2xl font-bold text-foreground">GDPR</div>
              <p className="text-xs text-muted-foreground mt-1">Compliant</p>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-foreground">CCPA</div>
              <p className="text-xs text-muted-foreground mt-1">Compliant</p>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-foreground">SOC 2</div>
              <p className="text-xs text-muted-foreground mt-1">Type II</p>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-foreground">HIPAA</div>
              <p className="text-xs text-muted-foreground mt-1">Ready</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
