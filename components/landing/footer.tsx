'use client'

import Link from 'next/link'

export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-foreground text-background py-16 md:py-20">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          {/* Brand */}
          <div className="space-y-3">
            <h3 className="text-xl font-bold">Nexora</h3>
            <p className="text-sm text-background/80">
              Premium applications for health, productivity, and focus.
            </p>
          </div>

          {/* Product Links */}
          <div className="space-y-3">
            <h4 className="font-semibold text-sm uppercase tracking-wide">Product</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#apps" className="text-background/80 hover:text-background transition-colors">
                  Apps
                </a>
              </li>
              <li>
                <a href="#features" className="text-background/80 hover:text-background transition-colors">
                  Features
                </a>
              </li>
              <li>
                <a href="#" className="text-background/80 hover:text-background transition-colors">
                  Pricing
                </a>
              </li>
            </ul>
          </div>

          {/* Company Links */}
          <div className="space-y-3">
            <h4 className="font-semibold text-sm uppercase tracking-wide">Company</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#about" className="text-background/80 hover:text-background transition-colors">
                  About
                </a>
              </li>
              <li>
                <a href="#" className="text-background/80 hover:text-background transition-colors">
                  Blog
                </a>
              </li>
              <li>
                <a href="#" className="text-background/80 hover:text-background transition-colors">
                  Careers
                </a>
              </li>
            </ul>
          </div>

          {/* Legal Links */}
          <div className="space-y-3">
            <h4 className="font-semibold text-sm uppercase tracking-wide">Legal</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/privacy" className="text-background/80 hover:text-background transition-colors">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/terms" className="text-background/80 hover:text-background transition-colors">
                  Terms of Service
                </Link>
              </li>
              <li>
                <Link href="/security" className="text-background/80 hover:text-background transition-colors">
                  Security
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-background/20 pt-8">
          <p className="text-sm text-background/70 text-center">
            © {currentYear} Nexora. All rights reserved. | Made with precision and care.
          </p>
        </div>
      </div>
    </footer>
  )
}
