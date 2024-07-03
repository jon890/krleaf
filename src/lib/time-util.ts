import dayjs from "dayjs";
import utc from "dayjs/plugin/utc";

dayjs.extend(utc);

export function yyyymmdd(dayString: Date) {
  return dayjs.utc(dayString).format("YYYY-MM-DD");
}
