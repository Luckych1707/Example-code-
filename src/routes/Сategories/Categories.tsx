import { Flex, List } from "antd";
import { useState } from "react";

import { CategoryItem } from "@/routes/Сategories/components/CategoryItem";
import { data } from "@/routes/Сategories/mock";

import { CategoryCreate } from "./components/CategoryCreate";

const Categories = () => {
  const [editCategoryId, setEditCategoryId] = useState<string | undefined>();
  const [deleteCategoryId, setDeleteCategoryId] = useState<
    string | undefined
  >();

  return (
    <Flex vertical style={{ maxWidth: "800px" }}>
      <CategoryCreate />

      <List
        pagination={{ position: "bottom", align: "start" }}
        dataSource={data}
        renderItem={(item) => (
          <List.Item>
            <CategoryItem
              category={item}
              editCategoryId={editCategoryId}
              setEditCategoryId={setEditCategoryId}
              deleteCategoryId={deleteCategoryId}
              setDeleteCategoryId={setDeleteCategoryId}
            />
          </List.Item>
        )}
      />
    </Flex>
  );
};

export default Categories;
