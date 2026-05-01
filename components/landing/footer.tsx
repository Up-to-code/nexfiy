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
            <h3 className="text-xl font-bold">Nexfiy</h3>
            <p className="text-sm text-background/80">
              Premium apps crafted by one developer with care and intention.
            </p>
          </div>

          {/* Product Links */}
          <div className="space-y-3">
            <h4 className="font-semibold text-sm uppercase tracking-wide">Apps</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#apps" className="text-background/80 hover:text-background transition-colors">
                  All Apps
                </a>
              </li>
              <li>
                <a href="#features" className="text-background/80 hover:text-background transition-colors">
                  Features
                </a>
              </li>
              <li>
                <a href="#about" className="text-background/80 hover:text-background transition-colors">
                  About Me
                </a>
              </li>
            </ul>
          </div>

          {/* Support Links */}
          <div className="space-y-3">
            <h4 className="font-semibold text-sm uppercase tracking-wide">Support</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#" className="text-background/80 hover:text-background transition-colors">
                  Help Center
                </a>
              </li>
              <li>
                <a href="#" className="text-background/80 hover:text-background transition-colors">
                  Contact
                </a>
              </li>
              <li>
                <a href="#" className="text-background/80 hover:text-background transition-colors">
                  Feedback
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
            © {currentYear} Nexfiy. Built with care and intention. Quality over growth.
          </p>
        </div>
      </div>
    </footer>
  )
}
