import { createQuery } from "@/shared/api/createQuery";
import http from "@/shared/api/http";

type ListQuery = Parameters<
  typeof http.api.retrieveCategoryListApiV1CategoriesListPost
>[0];

export const getCategoriesList = createQuery({
  name: "get-categories-list",
  request: async (_, query: ListQuery) => {
    return await http.api.retrieveCategoryListApiV1CategoriesListPost(query);
  },
});
