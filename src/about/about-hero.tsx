export function AboutHero() {
    return (
      <section className="relative py-24 lg:py-32 bg-primary overflow-hidden">
        <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url('/bgoption6.webp')`,
        }}
      >
        <div className="absolute inset-0 bg-primary/70" />
      </div>
  
        <div className="relative z-10 container mx-auto px-4 lg:px-8 text-center">
          <p className="text-secondary font-medium mb-4 tracking-wide uppercase text-sm">Our Story</p>
          <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold text-primary-foreground mb-6 text-balance">
            About First Naga Baptist Church
          </h1>
          <p className="text-primary-foreground/90 text-lg md:text-xl max-w-3xl mx-auto leading-relaxed">
            A journey of faith, perseverance, and community that led to the establishment of the first Naga church in
            America.
          </p>
        </div>
      </section>
    )
  }
  