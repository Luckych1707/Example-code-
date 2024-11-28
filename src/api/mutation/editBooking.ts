import { createMutation } from "../createMutation";
import http from "../http";

type EditBookingSchema = {
  id: string;
  booking: {
    status?: "finished" | "active" | "not_done";
    bookingDate?: string;
    trainerId: string;
  };
};

export const editBooking = createMutation({
  request: async (_, { id, booking }: EditBookingSchema) => {
    return await http.booking.putBookingId(id, booking);
  },
});
