import { createMutation } from "../createMutation";
import http from "../http";

export const createCertificate = createMutation({
  request: async (_, data: { name: string }) => {
    return await http.certificates.postCertificates(data);
  },
});
