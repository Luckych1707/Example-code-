import { createQuery } from "@/shared/api/createQuery";
import http from "@/shared/api/http";

export const getEvent = createQuery({
  name: "get-event-id",
  request: async (_, id: string) => {
    return await http.api.retrieveEventApiV1EventsEventIdGet(id);
  },
});
