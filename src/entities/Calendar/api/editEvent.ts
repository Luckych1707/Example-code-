import { createMutation } from "@/shared/api/createMutation";
import http from "@/shared/api/http";
import { EventCreateRequest } from "@/shared/api/schemas";

export const editEvent = createMutation({
  request: async (
    _,
    { eventId, data }: { eventId: string; data: EventCreateRequest },
  ) => {
    return await http.api.updateEventApiV1EventsEventIdPatch(eventId, data);
  },
});
