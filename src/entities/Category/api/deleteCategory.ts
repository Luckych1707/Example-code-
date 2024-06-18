import { createMutation } from "@/shared/api/createMutation";
import http from "@/shared/api/http";

export const deleteCategory = createMutation({
  request: async (_, categoryId: string) => {
    return await http.api.deleteCategoryApiV1CategoriesCategoryIdDelete(
      categoryId,
    );
  },
});
