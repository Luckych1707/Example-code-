import { createMutation } from "@/shared/api/createMutation";
import http from "@/shared/api/http";
import { BaseCategory } from "@/shared/api/schemas";

export const editCategory = createMutation({
  request: async (
    _,
    { categoryId, data }: { categoryId: string; data: BaseCategory },
  ) => {
    return await http.api.updateCategoryApiV1CategoriesCategoryIdPatch(
      categoryId,
      data,
    );
  },
});
