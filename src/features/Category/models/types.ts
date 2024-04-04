export type CategoryDeleteProps = {
  category: { id: string; title: string };
  setDeleteCategoryId: (id: string | undefined) => void;
};

export type CategoryEditFormValues = {
  name: string;
};

export type CategoryEditProps = {
  category: { id: string; title: string };
  setEditCategoryId: (id: string | undefined) => void;
};

export type CategoryInfoProps = {
  category: { id: string; title: string };
  setEditCategoryId: (id: string | undefined) => void;
  setDeleteCategoryId: (id: string | undefined) => void;
};
