import { CreateTimeSlotsSchema } from "@/api/schemas";

import { createMutation } from "../createMutation";
import http from "../http";

export const createTimeSlots = createMutation({
  request: async (
    _,
    { id, data }: { id: string; data: CreateTimeSlotsSchema },
  ) => {
    return await http.timeSlots.postTimeslotsBytrainerId(id, data);
  },
});
