import { CategoryCardProps } from "@/entities/Category/model/types";
import {
  CategoryDelete,
  CategoryEdit,
  CategoryInfo,
} from "@/features/Category";

export const CategoryCard = ({
  category,
  editCategoryId,
  deleteCategoryId,
  setEditCategoryId,
  setDeleteCategoryId,
}: CategoryCardProps) => {
  if (editCategoryId == category.id) {
    return (
      <CategoryEdit setEditCategoryId={setEditCategoryId} category={category} />
    );
  }

  if (deleteCategoryId == category.id) {
    return (
      <CategoryDelete
        category={category}
        setDeleteCategoryId={setDeleteCategoryId}
      />
    );
  }

  return (
    <CategoryInfo
      category={category}
      setEditCategoryId={setEditCategoryId}
      setDeleteCategoryId={setDeleteCategoryId}
    />
  );
};
