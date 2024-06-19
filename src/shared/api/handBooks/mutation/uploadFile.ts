import { createMutation } from "@/shared/api/createMutation";
import http from "@/shared/api/http";

export const fileUpload = createMutation({
  request: async (_, attachment: File) => {
    return await http.api.createAttachmentApiV1StorageAttachmentsPost(
      { attachment },
      { headers: { "Content-Type": "multipart/form-data" } },
    );
  },
});
