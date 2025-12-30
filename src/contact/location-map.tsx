import { MapPin } from "lucide-react"

export function LocationMap() {
  return (
    <section className="bg-muted">
      <div className="container mx-auto px-4 lg:px-8 py-12">
        <div className="text-center mb-8">
          <h2 className="font-serif text-2xl md:text-3xl font-bold text-foreground mb-2">Find Us</h2>
          <p className="text-muted-foreground flex items-center justify-center gap-2">
            <MapPin className="h-4 w-4" />
            Burton Hill Baptist Church, Fort Worth, TX
          </p>
        </div>
      </div>

      {/* Map embed */}
      <div className="w-full h-[400px] bg-muted-foreground/10 relative">
        <iframe
src="https://maps.google.com/maps?width=660&amp;height=575&amp;hl=en&amp;q=Burton Hill Baptist Church, Fort Worth, TX&amp;t=&amp;z=15&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="Church Location Map"
          className="grayscale hover:grayscale-0 transition-all duration-300"
        />
      </div>
    </section>
  )
}

