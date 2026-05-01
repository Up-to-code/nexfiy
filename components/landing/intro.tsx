'use client'

export function Intro() {
  return (
    <section className="py-16 md:py-20 bg-background">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-2xl mx-auto text-center space-y-6">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground tracking-tight">
            About Nexora
          </h2>
          
          <div className="space-y-4 text-foreground/70 leading-relaxed text-lg">
            <p>
              Nexora is a next-generation application ecosystem designed for modern health-conscious, 
              productivity-focused individuals. We believe that true well-being comes from the intersection 
              of physical health, mental clarity, and productive output.
            </p>
            
            <p>
              Our mission is to create the finest-quality applications that empower you to build your 
              best self. Each app in our ecosystem is carefully crafted with premium design, powerful features, 
              and a relentless focus on user experience.
            </p>

            <p>
              With Nexora, you're not just using apps—you're investing in a holistic platform 
              that understands your journey toward excellence.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
