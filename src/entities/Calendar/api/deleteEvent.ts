import { createMutation } from "@/shared/api/createMutation";
import http from "@/shared/api/http";

export const deleteEvent = createMutation({
  request: async (_, eventId: string) => {
    return await http.api.deleteEventApiV1EventsEventIdDelete(eventId);
  },
});
