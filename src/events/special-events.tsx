import {
  Calendar,
  Clock,
  MapPin,
  CalendarDays,
  HelpCircle,
} from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { events } from "./events-data";
import type { Event } from "./events-data";

const monthNames = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

function groupEventsByMonth(events: Event[]) {
  const nonRecurring = events.filter((e) => !e.recurring);

  // Events with specific dates
  const datedEvents = nonRecurring.filter(
    (e) => e.month !== null && e.month !== undefined
  );

  // TBA/TBD events
  const tbaEvents = nonRecurring.filter(
    (e) => e.month === null || e.month === undefined
  );

  // Group by month
  const grouped: Record<number, Event[]> = {};
  datedEvents.forEach((event) => {
    const month = event.month!;
    if (!grouped[month]) {
      grouped[month] = [];
    }
    grouped[month].push(event);
  });

  // Sort events within each month by day
  Object.keys(grouped).forEach((month) => {
    grouped[Number.parseInt(month)].sort((a, b) => (a.day || 0) - (b.day || 0));
  });

  // Get sorted month keys
  const sortedMonths = Object.keys(grouped)
    .map(Number)
    .sort((a, b) => a - b);

  return { grouped, sortedMonths, tbaEvents };
}

export function SpecialEvents() {
  const { grouped, sortedMonths, tbaEvents } = groupEventsByMonth(events);

  return (
    <div>
      <div className="flex items-center gap-3 mb-8">
        <div className="w-10 h-10 rounded-full bg-secondary/20 flex items-center justify-center">
          <CalendarDays className="h-5 w-5 text-secondary" />
        </div>
        <h2 className="font-serif text-2xl md:text-3xl font-bold text-foreground">
          Upcoming Events
        </h2>
      </div>

      {/* Month sections */}
      <div className="space-y-2">
        {sortedMonths.map((monthNum) => (
          <div key={monthNum} className="relative">
            {/* Month header */}
            <div className="sticky top-16 z-4 bg-background py-2 mb-0">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-lg bg-secondary text-secondary-foreground flex flex-col items-center justify-center">
                  <span className="text-xs font-medium uppercase leading-none">
                    {monthNames[monthNum - 1].slice(0, 3)}
                  </span>
                  <span className="text-lg font-bold leading-none">
                    {grouped[monthNum][0]?.year || new Date().getFullYear()}
                  </span>
                </div>
                <h3 className="font-serif text-xl md:text-2xl font-semibold text-foreground">
                  {monthNames[monthNum - 1]}
                </h3>
                <div className="flex-1 h-px bg-border ml-4" />
              </div>
            </div>

            {/* Events in this month */}
            <div className="space-y-4 pl-0 md:pl-16">
              {grouped[monthNum].map((event) => (
                <Card
                  key={event.title}
                  className="border-secondary/30 bg-secondary/5 hover:border-secondary/50 hover:shadow-md transition-all"
                >
                  <CardContent className="p-6">
                    <div className="flex flex-col sm:flex-row gap-4">
                      {/* Date badge */}
                      <div className="shrink-0 w-16 h-16 rounded-lg bg-primary text-primary-foreground flex flex-col items-center justify-center">
                        <span className="text-xs font-medium uppercase leading-none">
                          {monthNames[monthNum - 1].slice(0, 3)}
                        </span>
                        <span className="text-2xl font-bold leading-none mt-1">
                          {event.day}
                        </span>
                      </div>

                      <div className="flex-1">
                        <span className="inline-block text-xs font-semibold text-secondary bg-secondary/10 px-2 py-1 rounded mb-2">
                          Special Event
                        </span>
                        <h4 className="font-serif text-lg font-semibold text-card-foreground mb-2">
                          {event.title}
                        </h4>
                        <div className="flex flex-wrap gap-3 text-sm text-muted-foreground mb-3">
                          <span className="flex items-center gap-1">
                            <Clock className="h-4 w-4" />
                            {event.time || "TBA"}
                          </span>
                          <span className="flex items-center gap-1">
                            <MapPin className="h-4 w-4" />
                            {event.location}
                          </span>
                        </div>
                        <p className="text-muted-foreground text-sm">
                          {event.description}
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        ))}
      </div>

      {tbaEvents.length > 0 && (
        <div className="mt-16">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-10 h-10 rounded-full bg-muted flex items-center justify-center">
              <HelpCircle className="h-5 w-5 text-muted-foreground" />
            </div>
            <h2 className="font-serif text-2xl md:text-3xl font-bold text-foreground">
              Dates To Be Announced
            </h2>
          </div>
          <p className="text-muted-foreground mb-6">
            The following events are being planned. Check back soon for specific
            dates and times.
          </p>
          <div className="space-y-4">
            {tbaEvents.map((event) => (
              <Card
                key={event.title}
                className="border-dashed border-2 border-muted hover:border-muted-foreground/30 transition-colors"
              >
                <CardContent className="p-6">
                  <div className="flex flex-col sm:flex-row gap-4">
                    {/* TBA badge */}
                    <div className="shrink-0 w-16 h-16 rounded-lg bg-muted text-muted-foreground flex flex-col items-center justify-center">
                      <span className="text-sm font-bold">TBA</span>
                    </div>

                    <div className="flex-1">
                      <span className="inline-block text-xs font-semibold text-muted-foreground bg-muted px-2 py-1 rounded mb-2">
                        Coming Soon
                      </span>
                      <h4 className="font-serif text-lg font-semibold text-card-foreground mb-2">
                        {event.title}
                      </h4>
                      <div className="flex flex-wrap gap-3 text-sm text-muted-foreground mb-3">
                        <span className="flex items-center gap-1">
                          <Calendar className="h-4 w-4" />
                          {event.date}
                        </span>
                        <span className="flex items-center gap-1">
                          <MapPin className="h-4 w-4" />
                          {event.location}
                        </span>
                      </div>
                      <p className="text-muted-foreground text-sm">
                        {event.description}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
