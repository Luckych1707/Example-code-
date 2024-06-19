import { CategoryResponse } from "@/shared/api/schemas";

export type CategoryDeleteProps = {
  category: CategoryResponse;
  setDeleteCategoryId: (id: string | undefined) => void;
};

export type CategoryEditFormValues = {
  name: string;
};

export type CategoryEditProps = {
  category: CategoryResponse;
  setEditCategoryId: (id: string | undefined) => void;
};

export type CategoryInfoProps = {
  category: CategoryResponse;
  setEditCategoryId: (id: string | undefined) => void;
  setDeleteCategoryId: (id: string | undefined) => void;
};
