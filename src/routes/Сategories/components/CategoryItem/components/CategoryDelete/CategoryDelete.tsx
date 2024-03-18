import { CloseOutlined, DeleteFilled } from "@ant-design/icons";
import { Button, Flex, Typography } from "antd";
import { useTranslation } from "react-i18next";

type Props = {
  category: { id: string; title: string };
  setDeleteCategoryId: (id: string | undefined) => void;
};

export const CategoryDelete = ({ category, setDeleteCategoryId }: Props) => {
  const { t } = useTranslation("p_category");
  // TODO: Поддержать интеграцию формы с бэком
  const handleDelete = () => {
    console.log(category.id, "delete");
  };

  return (
    <Flex justify="space-between" flex="1">
      <Typography.Text>{category.title}</Typography.Text>

      <Flex vertical align="end">
        <Flex gap="16px">
          <Button
            icon={<DeleteFilled />}
            type="primary"
            ghost
            danger
            onClick={handleDelete}
          />
          <Button
            icon={<CloseOutlined />}
            onClick={() => setDeleteCategoryId(undefined)}
          />
        </Flex>

        <Typography.Text type="danger">{t("deleteCategory")}</Typography.Text>
      </Flex>
    </Flex>
  );
};
