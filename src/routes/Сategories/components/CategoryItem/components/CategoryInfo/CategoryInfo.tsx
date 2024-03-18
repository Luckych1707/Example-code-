import { DeleteFilled, EditFilled } from "@ant-design/icons";
import { Button, Flex, Typography } from "antd";

type Props = {
  category: { id: string; title: string };
  setEditCategoryId: (id: string | undefined) => void;
  setDeleteCategoryId: (id: string | undefined) => void;
};

export const CategoryInfo = ({
  category,
  setEditCategoryId,
  setDeleteCategoryId,
}: Props) => {
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
