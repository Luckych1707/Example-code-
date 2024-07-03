import { createQuery } from "@/shared/api/createQuery";
import http from "@/shared/api/http";

type ListQuery = Parameters<
  typeof http.api.retrieveEventListApiV1EventsListPost
>[0];

export const getEventsList = createQuery({
  name: "get-events",
  request: async (_, query: ListQuery) => {
    return await http.api.retrieveEventListApiV1EventsListPost(query);
  },
});
