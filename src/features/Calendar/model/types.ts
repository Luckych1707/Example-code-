import { Dayjs } from "dayjs";

import { EventType } from "@/widgets/Calendar/model/types";

export type EventCalendarProps = {
  onChange: (date: Dayjs) => void;
};

export type EventInfoProps = {
  event: EventType;
  eventVariant?: string;
  cityVariant?: string;
  setEventVariant: (variant: string | undefined) => void;
};
