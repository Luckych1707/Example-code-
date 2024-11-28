import { createQuery } from "../createQuery";
import http from "../http";

type ListQuery = Parameters<
  typeof http.timeSlots.getTimeslotsBytrainerIdAdmin
>[1];

export const getTimeSlots = createQuery({
  name: "get-time-slots-admin",
  request: async (_, id: string, query: ListQuery) => {
    return await http.timeSlots.getTimeslotsBytrainerIdAdmin(id, query);
  },
});
