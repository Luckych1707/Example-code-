import { createQuery } from "@/shared/api/createQuery";
import http from "@/shared/api/http";

export const getCategory = createQuery({
  name: "get-category-id",
  request: async (_, id: string) => {
    return await http.api.getCategoryApiV1CategoriesCategoryIdGet(id);
  },
});
