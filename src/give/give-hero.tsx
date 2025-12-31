import { Heart } from "lucide-react"

export function GiveHero() {
  return (
    <section className="relative py-20 lg:py-28 bg-primary text-primary-foreground overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 left-10 w-32 h-32 border border-primary-foreground rounded-full" />
        <div className="absolute bottom-10 right-10 w-48 h-48 border border-primary-foreground rounded-full" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 border border-primary-foreground rounded-full" />
      </div>

      <div className="container mx-auto px-4 lg:px-8 relative">
        <div className="max-w-3xl mx-auto text-center">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-secondary mb-6">
            <Heart className="w-8 h-8 text-secondary-foreground" />
          </div>
          <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-balance">
            Support Our Ministry
          </h1>
          <p className="text-lg md:text-xl text-primary-foreground/80 leading-relaxed max-w-2xl mx-auto">
            Your generous giving helps us continue our mission of spreading the Gospel, supporting Naga families, and
            building bridges between communities in DFW and beyond.
          </p>
        </div>
      </div>
    </section>
  )
}
