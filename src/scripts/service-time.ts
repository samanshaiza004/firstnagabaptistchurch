import { getCurrentServiceTime } from "../lib/service-time";

const time = getCurrentServiceTime();
document.querySelectorAll<HTMLElement>("[data-service-time]").forEach((element) => {
  element.textContent = time;
});
