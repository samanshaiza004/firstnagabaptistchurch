import { describe, expect, test } from "bun:test";
import { localContent } from "../src/lib/cms/local-content";
import { formatScholarshipDeadline, getScholarshipCycleStatus, hasApplicationInformation } from "../src/lib/cms/scholarship";

const cycle = localContent.scholarship.currentCycle;

describe("scholarship application information", () => {
  test("makes the supplied date-only application information available", () => {
    expect(hasApplicationInformation(cycle)).toBe(true);
    expect(formatScholarshipDeadline(cycle)).toBe("November 8, 2026");
    expect(getScholarshipCycleStatus(cycle)).toBe("open");
  });

  test("uses an exact cutoff only when one is supplied", () => {
    const timestampedCycle = {
      ...cycle,
      applicationDeadlineAt: "2026-11-08T23:59:00-06:00",
      deadlineTimeZone: "America/Chicago",
    };

    expect(getScholarshipCycleStatus(timestampedCycle, new Date("2026-11-08T23:58:59-06:00"))).toBe("open");
    expect(getScholarshipCycleStatus(timestampedCycle, new Date("2026-11-08T23:59:00-06:00"))).toBe("closed");
  });
});
