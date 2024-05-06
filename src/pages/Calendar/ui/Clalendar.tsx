import { Flex } from "antd";
import dayjs from "dayjs";
import { useState } from "react";

import { EventCalendar } from "@/entities/Calendar";
import { CreateEventDrawer, EventDrawer, EventList } from "@/widgets/Calendar";

const Calendar = () => {
  const [selectedEvent, setSelectedEvent] = useState<string>();
  const [isCreateEvent, setIsCreateEvent] = useState(false);
  const [selectedEventDate, setSelectedEventDate] = useState<
    string | undefined
  >(dayjs(new Date()).format("YYYY-MM-DD"));

  return (
    <Flex vertical style={{ maxWidth: "800px" }}>
      <EventCalendar
        setSelectedEventDate={(date) => setSelectedEventDate(date)}
        setIsCreateEvent={setIsCreateEvent}
      />

      <EventList
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
