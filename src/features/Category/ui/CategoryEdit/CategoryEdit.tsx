import { CheckOutlined, CloseOutlined } from "@ant-design/icons";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { Button, Flex } from "antd";
import { useForm } from "react-hook-form";

import { editCategory } from "@/entities/Category/api/editCategory";
import {
  CategoryEditFormValues,
  CategoryEditProps,
} from "@/features/Category/models/types";
import { getCategoriesList } from "@/shared/api/handBooks/queries/getCategories";
import { Input } from "@/shared/ui/Input";

import { Form } from "./styled";

export const CategoryEdit = ({
  category,
  setEditCategoryId,
}: CategoryEditProps) => {
  const { control, handleSubmit } = useForm<CategoryEditFormValues>({
    defaultValues: { name: category.name },
  });

  const queryClient = useQueryClient();

  const egitCategoryMutation = useMutation({
    ...editCategory.getMutationOptions(),
    onSuccess: async () => {
      setEditCategoryId(undefined);
      await queryClient.invalidateQueries({
        queryKey: [getCategoriesList.queryName],
      });
    },
  });

  const handleFormSubmit = (values: CategoryEditFormValues) => {
    egitCategoryMutation.mutate({ categoryId: category.id, data: values });
  };

  return (
    <Form onSubmit={handleSubmit(handleFormSubmit)}>
      <Input.Controller control={control} name="name" />

      <Flex gap="16px">
        <Button
          icon={<CheckOutlined />}
          type="primary"
          ghost
          htmlType="submit"
        />
        <Button
          icon={<CloseOutlined />}
          type="primary"
          ghost
          danger
          onClick={() => setEditCategoryId(undefined)}
        />
      </Flex>
    </Form>
  );
};
