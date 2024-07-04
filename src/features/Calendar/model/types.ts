import { Dayjs } from "dayjs";

import { EventResponse } from "@/shared/api/schemas";

export type EventCalendarProps = {
  onChange: (date: Dayjs) => void;
};

export type EventInfoProps = {
  event?: EventResponse;
  eventVariant?: string;
  cityVariant?: string;
  setEventVariant: (variant: string | undefined) => void;
  onClose: () => void;
};
