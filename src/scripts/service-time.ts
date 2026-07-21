import { getCurrentServiceTime } from "../lib/service-time";

const root = document.documentElement;
const policy = {
  standard: root.dataset.serviceStandard ?? "3:00 PM",
  daylight: root.dataset.serviceDaylight ?? "3:30 PM",
  timeZone: root.dataset.serviceTimeZone ?? "America/Chicago",
};
const time = getCurrentServiceTime(new Date(), policy);
document.querySelectorAll<HTMLElement>("[data-service-time]").forEach((element) => {
  element.textContent = time;
});
