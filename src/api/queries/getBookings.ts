import { createQuery } from "../createQuery";
import http from "../http";

type ListQuery = Parameters<typeof http.users.getUsersIdBookings>[1];

export const getBookings = createQuery({
  name: "get-user-booking-id",
  request: async (_, id: string, query?: ListQuery) => {
    return await http.users.getUsersIdBookings(id, query);
  },
});
