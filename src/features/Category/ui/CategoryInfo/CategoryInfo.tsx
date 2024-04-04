import { DeleteFilled, EditFilled } from "@ant-design/icons";
import { Button, Flex, Typography } from "antd";

import { CategoryInfoProps } from "@/features/Category/models/types";

export const CategoryInfo = ({
  category,
  setEditCategoryId,
  setDeleteCategoryId,
}: CategoryInfoProps) => {
  return (
    <Flex justify="space-between" flex="1">
      <Typography.Text>{category.title}</Typography.Text>
      <Flex gap="16px">
        <Button
          icon={<EditFilled />}
          type="primary"
          ghost
          onClick={() => setEditCategoryId(category.id)}
        />
        <Button
          icon={<DeleteFilled />}
          type="primary"
          ghost
          danger
          onClick={() => setDeleteCategoryId(category.id)}
        />
      </Flex>
    </Flex>
  );
};
