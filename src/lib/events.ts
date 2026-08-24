export interface EventData {
  title: string;
  dateLabel: string;
  timeKind: "seasonal" | "label" | "none";
  timeLabel?: string;
  location: string;
  description: string;
  recurring: boolean;
  month?: number | null;
  day?: number | null;
  year?: number;
  order: number;
}

/** Keep internal governance meetings out of the public-facing calendar. */
export function isPublicFacingEvent(event: Pick<EventData, "title">) {
  return !["Executive Meeting", "Missions/Deacon Team Meeting"].includes(event.title);
}

export function groupEventsByMonth(events: EventData[]) {
  const special = events.filter((event) => !event.recurring);
  const undated = special.filter((event) => event.month == null);
  const grouped = new Map<number, EventData[]>();

  for (const event of special.filter((item) => item.month != null)) {
    const month = event.month as number;
    grouped.set(month, [...(grouped.get(month) ?? []), event]);
  }

  for (const monthEvents of grouped.values()) {
    monthEvents.sort((a, b) => (a.day ?? Number.MAX_SAFE_INTEGER) - (b.day ?? Number.MAX_SAFE_INTEGER) || a.order - b.order);
  }

  return {
    months: [...grouped.keys()].sort((a, b) => a - b),
    grouped,
    undated: undated.sort((a, b) => a.order - b.order),
  };
}

/**
 * Split non-recurring events into upcoming and past relative to `now`.
 * An event with a full date (year+month+day) is dated; others are "undated".
 * Upcoming events are sorted soonest-first; past events latest-first.
 */
export function splitEventsByDate(events: EventData[], now: Date = new Date()) {
  const special = events.filter((event) => !event.recurring);
  const startOfToday = new Date(now.getFullYear(), now.getMonth(), now.getDate());
  const upcoming: EventData[] = [];
  const past: EventData[] = [];
  const undated: EventData[] = [];

  for (const event of special) {
    if (event.year == null || event.month == null || event.day == null) {
      undated.push(event);
      continue;
    }
    const eventDate = new Date(event.year, event.month - 1, event.day);
    (eventDate >= startOfToday ? upcoming : past).push(event);
  }

  const byDate = (a: EventData, b: EventData) =>
    new Date(a.year!, a.month! - 1, a.day!).getTime() - new Date(b.year!, b.month! - 1, b.day!).getTime() || a.order - b.order;

  upcoming.sort(byDate);
  past.sort((a, b) => byDate(b, a));
  undated.sort((a, b) => a.order - b.order);

  return { upcoming, past, undated };
}
