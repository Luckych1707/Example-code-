import { createQuery } from "../createQuery";
import http from "../http";

export const getTrainerBooking = createQuery({
  name: "get-trainer-booking-id",
  request: async (_, id: string) => {
    return await http.trainers.getTrainersIdBooking(id);
  },
});
