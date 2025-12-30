export function ContactHero() {
    return (
      <section className="relative py-24 lg:py-32 bg-primary overflow-hidden">
        {/* Decorative pattern */}
        <div className="absolute inset-0 opacity-5">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fillRule='evenodd'%3E%3Cg fill='%23ffffff' fillOpacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
            }}
          />
        </div>
  
        <div className="relative z-10 container mx-auto px-4 lg:px-8 text-center">
          <p className="text-secondary font-medium mb-4 tracking-wide uppercase text-sm">Get In Touch</p>
          <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold text-primary-foreground mb-6 text-balance">
            Contact Us
          </h1>
          <p className="text-primary-foreground/90 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed">
            We would love to hear from you. Reach out with any questions, prayer requests, or to learn more about our
            community.
          </p>
        </div>
      </section>
    )
  }
  