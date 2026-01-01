import { Calendar, Clock, MapPin } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { events } from "./events-data"

export function RegularServices() {
  return (
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
  );
}
