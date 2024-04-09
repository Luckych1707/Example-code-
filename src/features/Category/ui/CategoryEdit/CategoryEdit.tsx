import { CheckOutlined, CloseOutlined } from "@ant-design/icons";
import { Button, Flex } from "antd";
import { useForm } from "react-hook-form";

import {
  CategoryEditFormValues,
  CategoryEditProps,
} from "@/features/Category/models/types";
import { Input } from "@/shared/ui/Input";

import { Form } from "./styled";

export const CategoryEdit = ({
  category,
  setEditCategoryId,
}: CategoryEditProps) => {
  const { control, handleSubmit } = useForm<CategoryEditFormValues>({
    defaultValues: { name: category.title },
  });
  // TODO: Поддержать интеграцию формы с бэком
  const handleFormSubmit = (values: CategoryEditFormValues) => {
    console.log({ id: category.id, values: values });
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
