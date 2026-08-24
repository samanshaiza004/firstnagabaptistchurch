import { describe, expect, test } from "bun:test";
import { groupEventsByMonth, isPublicFacingEvent, type EventData } from "../src/lib/events";

const base: EventData = { title: "Event", dateLabel: "TBA", timeKind: "none", location: "Church", description: "Description", recurring: false, order: 1 };

describe("event grouping", () => {
  test("groups months and sorts specific dates before month-only entries", () => {
    const events = [{ ...base, title: "Month only", month: 7, day: null, order: 2 }, { ...base, title: "Dated", month: 7, day: 19, order: 1 }];
    const result = groupEventsByMonth(events);
    expect(result.months).toEqual([7]);
    expect(result.grouped.get(7)?.map((event) => event.title)).toEqual(["Dated", "Month only"]);
  });

  test("keeps events without a month in the TBA group", () => {
    expect(groupEventsByMonth([{ ...base, month: null }]).undated).toHaveLength(1);
  });

  test("keeps internal governance meetings off the public calendar", () => {
    expect(isPublicFacingEvent({ title: "Executive Meeting" })).toBeFalse();
    expect(isPublicFacingEvent({ title: "Missions/Deacon Team Meeting" })).toBeFalse();
    expect(isPublicFacingEvent({ title: "Church-wide Seminar" })).toBeTrue();
  });
});
