import { Flex } from "antd";

import { CategoryCreate } from "@/entities/Category/ui/CategoryCreate/CategoryCreate";
import { CategoryList } from "@/widgets/Category/ui/CategoryList/CategoryList";

const Categories = () => {
  return (
    <Flex vertical style={{ maxWidth: "800px" }}>
      <CategoryCreate />

      <CategoryList />
    </Flex>
  );
};

export default Categories;
