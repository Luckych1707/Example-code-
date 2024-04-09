export type CategoryCardProps = {
  category: { id: string; title: string };
  editCategoryId: string | undefined;
  deleteCategoryId: string | undefined;
  setEditCategoryId: (id: string | undefined) => void;
  setDeleteCategoryId: (id: string | undefined) => void;
};

export type CategoryCreateFormValues = {
  categoryName: string;
};
