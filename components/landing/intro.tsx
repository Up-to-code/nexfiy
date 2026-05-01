'use client'

export function Intro() {
  return (
    <section className="py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-3xl mx-auto text-center space-y-8">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground tracking-tight">
            What is Nexfiy?
          </h2>
          
          <div className="space-y-6 text-foreground/70 leading-relaxed text-lg">
            <p>
              Nexfiy is a collection of premium applications built by one independent developer with an 
              unwavering commitment to quality. Rather than chasing growth, I focus on crafting experiences 
              that are intuitive, powerful, and genuinely useful.
            </p>
            
            <p>
              Each app addresses a specific need: tracking your health, maintaining deep focus, finding 
              inner peace, managing tasks, and understanding your wellness. They work seamlessly together, 
              creating a cohesive ecosystem for your personal well-being.
            </p>

            <p>
              Built with privacy first, designed with care, and maintained by someone who genuinely cares 
              about the experience. This is quality over growth.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
