import { useQuery } from "@tanstack/react-query";
import { Flex } from "antd";
import dayjs from "dayjs";
import { useState } from "react";

import { EventCalendar } from "@/entities/Calendar";
import { getEventsList } from "@/shared/api/handBooks/queries/getEvents";
import { CreateEventDrawer, EventDrawer, EventList } from "@/widgets/Calendar";

const Calendar = () => {
  const [selectedEvent, setSelectedEvent] = useState<string>();
  const [isCreateEvent, setIsCreateEvent] = useState(false);
  const [selectedEventDate, setSelectedEventDate] = useState<
    string | undefined
  >(dayjs(new Date()).format("YYYY-MM-DD"));

  const { data } = useQuery({
    ...getEventsList.getQueryOptions({
      filters: {
        date: {
          year: selectedEventDate
            ? Number(dayjs(new Date(selectedEventDate)).year())
            : null,
          month: selectedEventDate
            ? Number(dayjs(new Date(selectedEventDate)).month()) + 1
            : null,
          day: selectedEventDate
            ? Number(dayjs(new Date(selectedEventDate)).day())
            : null,
        },
      },
    }),
  });

  const events = data?.items;

  return (
    <Flex vertical style={{ maxWidth: "800px" }}>
      <EventCalendar
        setSelectedEventDate={(date) => setSelectedEventDate(date)}
        setIsCreateEvent={setIsCreateEvent}
      />

      <EventList
        events={events}
        selectedEventDate={selectedEventDate}
        setSelectedEvent={(id) => setSelectedEvent(id)}
      />

      {isCreateEvent && (
        <CreateEventDrawer
          selectedDate={selectedEventDate}
          onClose={() => setIsCreateEvent(false)}
          isOpen={!!selectedEventDate}
        />
      )}

      {!!selectedEvent && (
        <EventDrawer
          onClose={() => setSelectedEvent(undefined)}
          selectedEventId={selectedEvent}
        />
      )}
    </Flex>
  );
};

export default Calendar;
