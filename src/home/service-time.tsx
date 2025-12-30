import { Clock, MapPin, Calendar } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"

const services = [
  {
    title: "Sunday Worship",
    time: "2:00 PM",
    description: "Join us for our main worship service with praise, prayer, and teaching.",
    icon: Clock,
  },
  {
    title: "Location",
    time: "Burton Hill Baptist Church",
    description: "Fort Worth, TX — We are grateful to Burton Hill Baptist Church for hosting us.",
    icon: MapPin,
  },
  {
    title: "Fellowship",
    time: "After Service",
    description: "Stay for refreshments and fellowship with the community after worship.",
    icon: Calendar,
  },
]

export function ServiceTimes() {
  return (
    <section className="py-16 lg:py-24 bg-muted">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center mb-12">
          <p className="text-secondary font-medium mb-2 tracking-wide uppercase text-sm">Join Us</p>
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-4">Service Times & Location</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            We gather every Sunday to worship, learn, and grow together as a family in Christ.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {services.map((service) => (
            <Card key={service.title} className="bg-card border-border hover:shadow-lg transition-shadow">
              <CardContent className="p-6 text-center">
                <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-primary/10 text-primary mb-4">
                  <service.icon className="h-6 w-6" />
                </div>
                <h3 className="font-serif text-xl font-semibold mb-2">{service.title}</h3>
                <p className="text-black font-semibold text-lg mb-2">{service.time}</p>
                <p className="text-muted-foreground text-sm">{service.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
