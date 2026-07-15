import { siteConfig } from "../site-config";

export function isDST(date: Date = new Date()): boolean {
  const timeZoneName = new Intl.DateTimeFormat("en-US", {
    timeZone: siteConfig.serviceTime.timeZone,
    timeZoneName: "shortOffset",
  }).formatToParts(date).find((part) => part.type === "timeZoneName")?.value;

  return timeZoneName === "GMT-5";
}

export function getCurrentServiceTime(date: Date = new Date()): string {
  return isDST(date) ? siteConfig.serviceTime.daylight : siteConfig.serviceTime.standard;
}

export function getServiceTimeWithDST(date: Date = new Date()) {
  const daylight = isDST(date);
  return {
    time: daylight ? siteConfig.serviceTime.daylight : siteConfig.serviceTime.standard,
    note: daylight
      ? "Service time during Daylight Saving Time"
      : "Service time during Standard Time (adjusts to 3:30 PM during DST)",
  };
}
