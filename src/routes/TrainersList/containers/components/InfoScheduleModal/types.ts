export const weekDays = [
  "monday",
  "tuesday",
  "wednesday",
  "thursday",
  "friday",
  "saturday",
  "sunday",
] as const;

export type ScheduleItem = Record<
  (typeof weekDays)[number],
  (string | undefined)[][]
>;
