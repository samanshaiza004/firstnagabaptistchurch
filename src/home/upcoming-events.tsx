import { Calendar, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"

const events = [
  {
    title: "Sunday Worship Service",
    date: "Every Sunday",
    time: "3:00 PM",
    description: "Join us for our weekly worship gathering with praise, prayer, and the Word.",
  },
  {
    title: "Sunday Fellowship and Refreshments",
    date: "Every Sunday",
    time: "After Service",
    description: "A time for the community to share refreshments and strengthen bonds of fellowship.",
  },
  {
    title: "Monthly Prayer and Fasting",
    date: "Last Saturday of the month",
    time: "10:00 AM",
    description: "Gather together for corporate prayer, testimony, reflection, and intercession for our community.",
  },
]

export function UpcomingEvents() {
  return (
    <section className="py-16 lg:py-24 bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-12">
          <div>
            <p className="text-secondary font-medium mb-2 tracking-wide uppercase text-sm">Stay Connected</p>
            <h2 className="font-serif text-3xl md:text-4xl font-bold">Upcoming Events</h2>
          </div>
          <Button
            asChild
            variant="outline"
            className="border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10 w-fit bg-transparent"
          >
            <a href="/events">
              View All Events
              <ArrowRight className="ml-2 h-4 w-4" />
            </a>
          </Button>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {events.map((event) => (
            <Card
              key={event.title}
              className="bg-primary-foreground/10 border-primary-foreground/20 text-primary-foreground"
            >
              <CardContent className="p-6">
                <div className="flex items-center gap-2 text-secondary mb-3">
                  <Calendar className="h-4 w-4" />
                  <span className="text-sm font-medium">
                    {event.date} • {event.time}
                  </span>
                </div>
                <h3 className="font-serif text-xl font-semibold mb-2">{event.title}</h3>
                <p className="text-primary-foreground/80 text-sm leading-relaxed">{event.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
