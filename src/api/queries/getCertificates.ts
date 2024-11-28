import { createQuery } from "../createQuery";
import http from "../http";

type ListQuery = Parameters<typeof http.certificates.getCertificates>[0];

export const getCertificates = createQuery({
  name: "get-certificates",
  request: async (_, query?: ListQuery) => {
    return await http.certificates.getCertificates(query);
  },
});
