import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

/**
 * Determines if Daylight Saving Time is currently in effect
 * DST in the US typically starts second Sunday in March and ends first Sunday in November
 */
export function isDST(): boolean {
  const now = new Date()
  const year = now.getFullYear()

  // DST starts: Second Sunday in March
  const march = new Date(year, 2, 1) // March 1st
  const dstStart = new Date(march.getTime() + ((14 - march.getDay()) % 7) * 24 * 60 * 60 * 1000)

  // DST ends: First Sunday in November
  const november = new Date(year, 10, 1) // November 1st
  const dstEnd = new Date(november.getTime() + ((7 - november.getDay()) % 7) * 24 * 60 * 60 * 1000)

  return now >= dstStart && now < dstEnd
}

/**
 * Returns the current service time based on DST status
 */
export function getCurrentServiceTime(): string {
  return isDST() ? "3:30 PM" : "3:00 PM"
}

/**
 * Returns a formatted service time with DST information
 */
export function getServiceTimeWithDST(): { time: string; note: string } {
  const isCurrentlyDST = isDST()
  const time = isCurrentlyDST ? "3:30 PM" : "3:00 PM"

  const note = isCurrentlyDST
    ? "Service time during Daylight Saving Time"
    : "Service time during Standard Time (adjusts to 3:30 PM during DST)"

  return { time, note }
}