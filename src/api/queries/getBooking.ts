import { createQuery } from "../createQuery";
import http from "../http";

export const getBooking = createQuery({
  name: "get-booking-id",
  request: async (_, id: string) => {
    return await http.booking.getBookingId(id);
  },
});
