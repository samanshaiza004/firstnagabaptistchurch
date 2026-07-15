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
