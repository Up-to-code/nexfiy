'use client'

export function Intro() {
  return (
    <section className="py-24 md:py-32 bg-background border-t border-border">
      <div className="container mx-auto px-6 md:px-12">
        <div className="max-w-4xl mx-auto space-y-12">
          
          <h2 className="text-sm font-semibold uppercase tracking-wider text-foreground/50">
            What is Nexfiy?
          </h2>
          
          <div className="space-y-8 text-2xl md:text-3xl text-foreground font-light leading-snug tracking-tight">
            <p>
              Nexfiy is a growing suite of premium applications built by one independent developer with an 
              unwavering commitment to quality.
            </p>
            
            <p className="text-foreground/60">
              Rather than chasing growth, I focus on crafting experiences 
              that are intuitive, powerful, and genuinely useful. Each app addresses a specific need: health, focus, peace, and productivity.
            </p>

            <p className="text-foreground/40 text-lg md:text-xl">
              Built with privacy first, designed with care, and maintained by someone who respects your attention.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
