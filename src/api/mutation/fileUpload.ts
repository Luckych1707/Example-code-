import { createMutation } from "../createMutation";
import http from "../http";

export const fileUpload = createMutation({
  request: async (_, file: File) => {
    return await http.files.postFiles(
      { file },
      { headers: { "Content-Type": "multipart/form-data" } },
    );
  },
});
