import { createQuery } from "../createQuery";
import http from "../http";

type ListQuery = Parameters<typeof http.language.getLanguage>[0];

export const getLanguages = createQuery({
  name: "get-languages",
  request: async (_, query?: ListQuery) => {
    return await http.language.getLanguage(query);
  },
});
