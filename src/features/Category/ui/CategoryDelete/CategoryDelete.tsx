import { CloseOutlined, DeleteFilled } from "@ant-design/icons";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { Button, Flex, Typography } from "antd";
import { useTranslation } from "react-i18next";

import { deleteCategory } from "@/entities/Category/api/deleteCategory";
import { CategoryDeleteProps } from "@/features/Category/models/types";
import { getCategoriesList } from "@/shared/api/handBooks/queries/getCategories";

export const CategoryDelete = ({
  category,
  setDeleteCategoryId,
}: CategoryDeleteProps) => {
  const { t } = useTranslation("p_category");

  const queryClient = useQueryClient();

  const deleteCategoryMutation = useMutation({
    ...deleteCategory.getMutationOptions(),
    onSuccess: async () => {
      setDeleteCategoryId(undefined);
      await queryClient.invalidateQueries({
        queryKey: [getCategoriesList.queryName],
      });
    },
  });

  const handleDelete = () => {
    deleteCategoryMutation.mutate(category.id);
  };

  return (
    <Flex justify="space-between" flex="1">
      <Typography.Text>{category.name}</Typography.Text>

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
