import type { ScholarshipCycleContent, ScholarshipCycleStatus } from "./types";

export function getScholarshipCycleStatus(
  cycle: ScholarshipCycleContent,
  now: Date = new Date(),
): ScholarshipCycleStatus {
  if (cycle.status !== "open") return cycle.status;

  // The supplied application states a date but no cutoff time. Keep an explicitly
  // open cycle open until staff close it unless an exact cutoff is available.
  if (!cycle.applicationDeadlineAt) return "open";
  const cutoff = Date.parse(cycle.applicationDeadlineAt);
  if (!Number.isFinite(cutoff)) return "draft";
  return now.getTime() >= cutoff ? "closed" : "open";
}

export function hasApplicationInformation(cycle: ScholarshipCycleContent) {
  return Boolean(
    cycle.year &&
    cycle.applicationDeadlineDate &&
    cycle.awardDate &&
    cycle.awardCount &&
    cycle.awardAmount &&
    cycle.eligibilityRequirements?.length &&
    cycle.applicationSteps?.length &&
    cycle.submissionEmail &&
    cycle.submissionSubject,
  );
}

export function hasPublishedCycleDetails(status: ScholarshipCycleStatus) {
  return status === "open" || status === "closed" || status === "selection" || status === "concluded";
}

export function formatScholarshipDate(value?: string) {
  if (!value) return undefined;
  const date = new Date(`${value}T12:00:00.000Z`);
  if (!Number.isFinite(date.getTime())) return undefined;
  return new Intl.DateTimeFormat("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
    timeZone: "UTC",
  }).format(date);
}

export function formatScholarshipDeadline(cycle: ScholarshipCycleContent) {
  if (!cycle.applicationDeadlineAt || !cycle.deadlineTimeZone) {
    return formatScholarshipDate(cycle.applicationDeadlineDate);
  }
  const date = new Date(cycle.applicationDeadlineAt);
  if (!Number.isFinite(date.getTime())) return formatScholarshipDate(cycle.applicationDeadlineDate);
  return new Intl.DateTimeFormat("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
    hour: "numeric",
    minute: "2-digit",
    timeZone: cycle.deadlineTimeZone,
    timeZoneName: "short",
  }).format(date);
}
