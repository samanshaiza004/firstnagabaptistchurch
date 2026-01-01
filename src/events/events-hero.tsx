export function EventsHero() {
  return (
    <section className="relative py-24 lg:py-32 bg-primary overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url('/bgoption5.JPG')`,
        }}
      >
        <div className="absolute inset-0 bg-primary/70" />
      </div>

      <div className="relative z-10 container mx-auto px-4 lg:px-8 text-center">
        <p className="text-secondary font-medium mb-4 tracking-wide uppercase text-sm">Stay Connected</p>
        <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold text-primary-foreground mb-6 text-balance">
          Events & Gatherings
        </h1>
        <p className="text-primary-foreground/90 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed">
          Join us for worship, fellowship, and community events throughout the year.
        </p>
      </div>
    </section>
  );
}
