import { CategoryResponse } from "@/shared/api/schemas";

export type CategoryCardProps = {
  category: CategoryResponse;
  editCategoryId: string | undefined;
  deleteCategoryId: string | undefined;
  setEditCategoryId: (id: string | undefined) => void;
  setDeleteCategoryId: (id: string | undefined) => void;
};

export type CategoryCreateFormValues = {
  name: string;
};
