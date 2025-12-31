import { Quote } from "lucide-react"

export function GratitudeSection() {
  return (
    <section className="py-16 lg:py-24 bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="max-w-3xl mx-auto text-center">
          <Quote className="w-12 h-12 mx-auto mb-6 text-secondary opacity-80" />
          <blockquote className="font-serif text-2xl md:text-3xl italic leading-relaxed mb-6">
            &ldquo;Each of you should give what you have decided in your heart to give, not reluctantly or under
            compulsion, for God loves a cheerful giver.&rdquo;
          </blockquote>
          <cite className="text-lg text-primary-foreground/80">— 2 Corinthians 9:7</cite>

          <div className="mt-12 pt-8 border-t border-primary-foreground/20">
            <h3 className="font-serif text-xl font-semibold mb-4">Thank You for Your Generosity</h3>
            <p className="text-primary-foreground/80 leading-relaxed max-w-xl mx-auto">
              On behalf of First Naga Baptist Church, we extend our heartfelt gratitude for your faithful giving. Your
              contributions help us fulfill our God-given mission and touch lives both near and far. May God bless you
              abundantly for your generosity.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
