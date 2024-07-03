import { createMutation } from "@/shared/api/createMutation";
import http from "@/shared/api/http";
import { EventCreateRequest } from "@/shared/api/schemas";

export const createEvent = createMutation({
  request: async (_, data: EventCreateRequest) => {
    return await http.api.createEventApiV1EventsPost(data);
  },
});
