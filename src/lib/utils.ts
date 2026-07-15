import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

/**
 * Determines if Daylight Saving Time is currently in effect
 * DST in the US typically starts second Sunday in March and ends first Sunday in November
 */
export function isDST(date: Date = new Date()): boolean {
  const timeZoneName = new Intl.DateTimeFormat("en-US", {
    timeZone: "America/Chicago",
    timeZoneName: "shortOffset",
  })
    .formatToParts(date)
    .find((part) => part.type === "timeZoneName")?.value

  return timeZoneName === "GMT-5"
}

/**
 * Returns the current service time based on DST status
 */
export function getCurrentServiceTime(date: Date = new Date()): string {
  return isDST(date) ? "3:30 PM" : "3:00 PM"
}

/**
 * Returns a formatted service time with DST information
 */
export function getServiceTimeWithDST(date: Date = new Date()): { time: string; note: string } {
  const isCurrentlyDST = isDST(date)
  const time = isCurrentlyDST ? "3:30 PM" : "3:00 PM"

  const note = isCurrentlyDST
    ? "Service time during Daylight Saving Time"
    : "Service time during Standard Time (adjusts to 3:30 PM during DST)"

  return { time, note }
}
