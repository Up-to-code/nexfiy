'use client'

export function About() {
  return (
    <section className="py-20 md:py-32 bg-background">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-3xl mx-auto space-y-12">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4 tracking-tight">
              About the Founder
            </h2>
            <p className="text-lg text-muted-foreground">
              One person, five apps, countless hours of care
            </p>
          </div>

          <div className="space-y-6 text-lg leading-relaxed text-foreground/70">
            <p>
              Hi! I'm the solo developer behind Nexfiy. After spending years working in larger organizations, 
              I realized I wanted to build differently—with complete control over quality, with no compromises 
              on user privacy, and with genuine care for every user.
            </p>

            <p>
              I created Nexfiy because I couldn't find apps that met my own standards. Each app started as a 
              solution to a personal problem: tracking health meaningfully, focusing deeply, meditating intentionally, 
              managing tasks intelligently, and understanding wellness holistically.
            </p>

            <p>
              Rather than chase growth metrics, I focus on building applications that people genuinely love using. 
              Every feature is considered carefully. Every design decision is intentional. Every line of code 
              reflects a commitment to quality and user respect.
            </p>

            <p>
              This is why I don't have investors demanding hockey stick growth curves. I can say no to features 
              that would compromise the experience. I can prioritize privacy over data harvesting. I can take 
              months perfecting something that matters.
            </p>

            <p>
              Using Nexfiy apps means you're supported by someone who genuinely cares about your experience, 
              someone who reads your feedback, someone who updates apps because they want to be better—not because 
              a metric demands it.
            </p>
          </div>

          {/* Values */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16 pt-12 border-t border-border">
            <div className="text-center">
              <div className="text-4xl mb-4">🎨</div>
              <h3 className="font-bold text-foreground mb-2">Craftsmanship</h3>
              <p className="text-sm text-muted-foreground">
                Every detail matters. Every feature is thoughtfully designed and tested.
              </p>
            </div>
            <div className="text-center">
              <div className="text-4xl mb-4">🔒</div>
              <h3 className="font-bold text-foreground mb-2">Privacy</h3>
              <p className="text-sm text-muted-foreground">
                Your data is yours alone. No ads, no tracking, no data sales.
              </p>
            </div>
            <div className="text-center">
              <div className="text-4xl mb-4">❤️</div>
              <h3 className="font-bold text-foreground mb-2">Care</h3>
              <p className="text-sm text-muted-foreground">
                I genuinely care about your experience and well-being.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
