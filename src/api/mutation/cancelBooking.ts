import { createMutation } from "../createMutation";
import http from "../http";

export const cancelBooking = createMutation({
  request: async (_, { id, comment }: { id: string; comment: string }) => {
    return await http.admin.putAdminBookingIdCancel(id, { comment });
  },
});
