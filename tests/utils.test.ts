import { describe, expect, test } from "bun:test";
import {
  getCurrentServiceTime,
  getServiceTimeWithDST,
  isDST,
} from "../src/lib/utils";

describe("Central Time service schedule", () => {
  test("uses standard time in January", () => {
    const date = new Date("2026-01-15T18:00:00Z");
    expect(isDST(date)).toBe(false);
    expect(getCurrentServiceTime(date)).toBe("3:00 PM");
  });

  test("uses daylight time in July", () => {
    const date = new Date("2026-07-15T18:00:00Z");
    expect(isDST(date)).toBe(true);
    expect(getCurrentServiceTime(date)).toBe("3:30 PM");
  });

  test("reports the matching schedule note", () => {
    expect(getServiceTimeWithDST(new Date("2026-07-15T18:00:00Z"))).toEqual({
      time: "3:30 PM",
      note: "Service time during Daylight Saving Time",
    });
  });
});
