
import { Calendar, Clock, MapPin } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"

const events = [
  {
    title: "Sunday Worship Service",
    date: "Every Sunday",
    time: "2:00 PM",
    location: "Burton Hill Baptist Church",
    description:
      "Join us for our weekly worship gathering with praise, prayer, Scripture reading, and teaching from God's Word.",
    recurring: true,
  },
  {
    title: "Monthly Fellowship Lunch",
    date: "First Sunday of Each Month",
    time: "After Service",
    location: "Fellowship Hall",
    description:
      "A time for the community to share a meal together, strengthen bonds of fellowship, and welcome newcomers to our church family.",
    recurring: true,
  },
  {
    title: "Wednesday Prayer Meeting",
    date: "Every Wednesday",
    time: "7:00 PM",
    location: "Online / In-Person",
    description:
      "Gather together for corporate prayer, intercession for our community, and spiritual encouragement throughout the week.",
    recurring: true,
  },
  {
    title: "Youth Fellowship",
    date: "Second Saturday of Each Month",
    time: "4:00 PM",
    location: "Burton Hill Baptist Church",
    description:
      "A special gathering for young people to connect, study Scripture together, and build lasting friendships in Christ.",
    recurring: true,
  },
  {
    title: "Annual Thanksgiving Celebration",
    date: "November",
    time: "TBA",
    location: "Burton Hill Baptist Church",
    description:
      "Our annual gathering to give thanks to God, share testimonies of His faithfulness, and enjoy fellowship over a traditional meal.",
    recurring: false,
  },
  {
    title: "Church Anniversary Celebration",
    date: "November 4th",
    time: "2:00 PM",
    location: "Burton Hill Baptist Church",
    description:
      "Celebrating the establishment of First Naga Baptist Church with special worship, guest speakers, and remembrance of God's faithfulness.",
    recurring: false,
  },
]

export default function EventsPage() {
  return (
    <>
      {/* Hero */}
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

      {/* Events List */}
      <section className="py-16 lg:py-24 bg-background">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-4xl mx-auto">
            {/* Regular Services */}
            <div className="mb-12">
              <h2 className="font-serif text-2xl md:text-3xl font-bold text-foreground mb-6">Regular Services</h2>
              <div className="space-y-4">
                {events
                  .filter((e) => e.recurring)
                  .map((event) => (
                    <Card key={event.title} className="border-border hover:border-secondary/50 transition-colors">
                      <CardContent className="p-6">
                        <div className="flex flex-col md:flex-row md:items-start gap-4">
                          <div className="shrink-0 w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center">
                            <Calendar className="h-6 w-6 text-primary" />
                          </div>
                          <div className="flex-1">
                            <h3 className="font-serif text-xl font-semibold text-card-foreground mb-2">
                              {event.title}
                            </h3>
                            <div className="flex flex-wrap gap-4 text-sm text-muted-foreground mb-3">
                              <span className="flex items-center gap-1">
                                <Calendar className="h-4 w-4" />
                                {event.date}
                              </span>
                              <span className="flex items-center gap-1">
                                <Clock className="h-4 w-4" />
                                {event.time}
                              </span>
                              <span className="flex items-center gap-1">
                                <MapPin className="h-4 w-4" />
                                {event.location}
                              </span>
                            </div>
                            <p className="text-muted-foreground">{event.description}</p>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
              </div>
            </div>

            {/* Special Events */}
            <div>
              <h2 className="font-serif text-2xl md:text-3xl font-bold text-foreground mb-6">Special Events</h2>
              <div className="space-y-4">
                {events
                  .filter((e) => !e.recurring)
                  .map((event) => (
                    <Card
                      key={event.title}
                      className="border-secondary/30 bg-secondary/5 hover:border-secondary/50 transition-colors"
                    >
                      <CardContent className="p-6">
                        <div className="flex flex-col md:flex-row md:items-start gap-4">
                          <div className="shrink-0 w-14 h-14 rounded-full bg-secondary/20 flex items-center justify-center">
                            <Calendar className="h-6 w-6 text-secondary" />
                          </div>
                          <div className="flex-1">
                            <span className="inline-block text-xs font-semibold text-secondary bg-secondary/10 px-2 py-1 rounded mb-2">
                              Special Event
                            </span>
                            <h3 className="font-serif text-xl font-semibold text-card-foreground mb-2">
                              {event.title}
                            </h3>
                            <div className="flex flex-wrap gap-4 text-sm text-muted-foreground mb-3">
                              <span className="flex items-center gap-1">
                                <Calendar className="h-4 w-4" />
                                {event.date}
                              </span>
                              <span className="flex items-center gap-1">
                                <Clock className="h-4 w-4" />
                                {event.time}
                              </span>
                              <span className="flex items-center gap-1">
                                <MapPin className="h-4 w-4" />
                                {event.location}
                              </span>
                            </div>
                            <p className="text-muted-foreground">{event.description}</p>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
