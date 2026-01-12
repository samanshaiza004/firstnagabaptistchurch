import { Heart } from "lucide-react"

export function GiveHero() {
  return (
    <section className="relative py-24 lg:py-32 bg-primary overflow-hidden">
        <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url('/fundraider.JPG')`,
        }}
      >
        <div className="absolute inset-0 bg-primary/70" />
      </div>

      <div className="container mx-auto px-4 lg:px-8 relative">
        <div className="max-w-3xl mx-auto text-center">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-secondary mb-6">
            <Heart className="w-8 h-8 text-secondary-foreground" />
          </div>
          <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold text-primary-foreground mb-6 text-balance">
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
