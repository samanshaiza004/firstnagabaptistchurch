import { siteConfig } from "../site-config";

export interface ServiceTimePolicy { daylight: string; standard: string; timeZone: string }

export function isDST(date: Date = new Date(), policy: ServiceTimePolicy = siteConfig.serviceTime): boolean {
  const timeZoneName = new Intl.DateTimeFormat("en-US", {
    timeZone: policy.timeZone,
    timeZoneName: "shortOffset",
  }).formatToParts(date).find((part) => part.type === "timeZoneName")?.value;

  return timeZoneName === "GMT-5";
}

export function getCurrentServiceTime(date: Date = new Date(), policy: ServiceTimePolicy = siteConfig.serviceTime): string {
  return isDST(date, policy) ? policy.daylight : policy.standard;
}

export function getServiceTimeWithDST(date: Date = new Date(), policy: ServiceTimePolicy = siteConfig.serviceTime) {
  const daylight = isDST(date, policy);
  return {
    time: daylight ? policy.daylight : policy.standard,
    note: daylight
      ? "Service time during Daylight Saving Time"
      : "Service time during Standard Time (adjusts to 3:30 PM during DST)",
  };
}
