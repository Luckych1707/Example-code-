import dayjs from "dayjs";

export const weekDays = [
  "monday",
  "tuesday",
  "wednesday",
  "thursday",
  "friday",
  "saturday",
  "sunday",
] as const;

export type WeekDay = (typeof weekDays)[number];

export type ScheduleItem = Record<
  (typeof weekDays)[number],
  (string | undefined)[][]
>;

export type TrainerScheduleItem = Record<
  (typeof weekDays)[number],
  ({ to: string; from: string } | undefined)[]
>;

export type TimePickerValue = [dayjs.Dayjs | null, dayjs.Dayjs | null] | null;
