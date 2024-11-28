import { createQuery } from "../createQuery";
import http from "../http";

export const getFile = createQuery({
  name: "get-file-id",
  request: async (_, id: string) => {
    return await http.files.getFilesId(id, { responseEncoding: "base64" });
  },
});
