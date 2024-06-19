import { createMutation } from "@/shared/api/createMutation";
import http from "@/shared/api/http";
import { BaseCategory } from "@/shared/api/schemas";

export const createCategory = createMutation({
  request: async (_, name: BaseCategory) => {
    return await http.api.createCategoryApiV1CategoriesPost(name);
  },
});
