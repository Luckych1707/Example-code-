import { createMutation } from "../createMutation";
import http from "../http";

export const deleteBooking = createMutation({
  request: async (_, id: string) => {
    return await http.booking.deleteBookingId(id);
  },
});
