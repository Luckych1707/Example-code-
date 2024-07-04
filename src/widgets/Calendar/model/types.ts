import { Dayjs } from "dayjs";

import { EventResponse } from "@/shared/api/schemas";

export type EventListType = {
  event?: EventResponse;
  setSelectedEvent: (id: string) => void;
};

export type EventListProps = {
  selectedEventDate?: string;
  setSelectedEvent: (id: string) => void;
  events?: EventResponse[];
};

export type CreateDrawerProps = {
  onClose: () => void;
  isOpen: boolean;
  selectedDate?: string;
};

export type EventDrawerProps = {
  onClose: () => void;
  selectedEventId?: string;
};

export type CreateEventFormValue = {
  name: string;
  city: string;
  date: Dayjs;
  description: string;
  routes: string[];
  latitude: string;
  longitude: string;
};

export type EditDrawerProps = {
  event?: EventResponse;
  eventVariant?: string;
  setEventVariant: (variant: string | undefined) => void;
  onClose: () => void;
};

export type EditEventFormValue = {
  name: string;
  city: string;
  date: Dayjs;
  description: string;
  routes: string[];
  latitude?: string | null;
  longitude?: string | null;
};
