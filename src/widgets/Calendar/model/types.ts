import { Dayjs } from "dayjs";

export type EventType = {
  title: string;
  date: string;
  cityName: string;
  text: string;
  id: string;
  latitude: string;
  longitude: string;
  routes: string[];
};

export type EventListType = {
  event: EventType;
  setSelectedEvent: (id: string) => void;
};

export type EventListProps = {
  selectedEventDate?: string;
  setSelectedEvent: (id: string) => void;
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
  event: EventType;
  eventVariant?: string;
  setEventVariant: (variant: string | undefined) => void;
};

export type EditEventFormValue = {
  name: string;
  city: string;
  date: Dayjs;
  description: string;
  routes: string[];
  latitude: string;
  longitude: string;
};
