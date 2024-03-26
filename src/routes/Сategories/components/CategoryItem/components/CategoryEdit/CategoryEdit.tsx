import { CheckOutlined, CloseOutlined } from "@ant-design/icons";
import { Button, Flex } from "antd";
import { useForm } from "react-hook-form";

import { Input } from "@/components/Input";

import { Form } from "./styled";

type FormValues = {
  name: string;
};

type Props = {
  category: { id: string; title: string };
  setEditCategoryId: (id: string | undefined) => void;
};

export const CategoryEdit = ({ category, setEditCategoryId }: Props) => {
  const { control, handleSubmit } = useForm<FormValues>({
    defaultValues: { name: category.title },
  });
  // TODO: Поддержать интеграцию формы с бэком
  const handleFormSubmit = (values: FormValues) => {
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
