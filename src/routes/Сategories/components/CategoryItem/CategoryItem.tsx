import { CategoryDelete } from "@/routes/Сategories/components/CategoryItem/components/CategoryDelete";
import { CategoryEdit } from "@/routes/Сategories/components/CategoryItem/components/CategoryEdit";
import { CategoryInfo } from "@/routes/Сategories/components/CategoryItem/components/CategoryInfo";

type Props = {
  category: { id: string; title: string };
  editCategoryId: string | undefined;
  deleteCategoryId: string | undefined;
  setEditCategoryId: (id: string | undefined) => void;
  setDeleteCategoryId: (id: string | undefined) => void;
};

export const CategoryItem = ({
  category,
  editCategoryId,
  deleteCategoryId,
  setEditCategoryId,
  setDeleteCategoryId,
}: Props) => {
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
