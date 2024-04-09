import { List } from "antd";
import { useState } from "react";

import { CategoryCard } from "@/entities/Category";
import { data } from "@/pages/Сategories/model/mock";

export const CategoryList = () => {
  const [editCategoryId, setEditCategoryId] = useState<string | undefined>();
  const [deleteCategoryId, setDeleteCategoryId] = useState<
    string | undefined
  >();

  return (
    <List
      pagination={{ position: "bottom", align: "start" }}
      dataSource={data}
      renderItem={(item) => (
        <List.Item>
          <CategoryCard
            category={item}
            editCategoryId={editCategoryId}
            setEditCategoryId={setEditCategoryId}
            deleteCategoryId={deleteCategoryId}
            setDeleteCategoryId={setDeleteCategoryId}
          />
        </List.Item>
      )}
    />
  );
};
