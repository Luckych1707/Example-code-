import { CheckOutlined, CloseOutlined, PlusOutlined } from "@ant-design/icons";
import { Button, Divider, Flex } from "antd";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { useTranslation } from "react-i18next";

import { CategoryCreateFormValues } from "@/entities/Category/model/types";
import { Input } from "@/shared/ui/Input";

import { Form } from "./styled";

export const CategoryCreate = () => {
  const { t } = useTranslation("p_category");

  const { control, handleSubmit, reset } = useForm<CategoryCreateFormValues>();

  const [isCreate, setIsCreate] = useState(false);
  // TODO: Поддержать интеграцию формы с бэком
  const handleFormSubmit = (values: CategoryCreateFormValues) => {
    console.log(values);
    setIsCreate(false);
    reset();
  };

  return (
    <Flex vertical>
      <Flex>
        <Button
          type="primary"
          icon={<PlusOutlined />}
          onClick={() => setIsCreate(true)}
        >
          {t("createCategory")}
        </Button>
      </Flex>

      <Divider />
      {isCreate && (
        <Flex vertical>
          <Flex>
            <Form onSubmit={handleSubmit(handleFormSubmit)}>
              <Input.Controller control={control} name="categoryName" />
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
                  onClick={() => setIsCreate(false)}
                />
              </Flex>
            </Form>
          </Flex>
          <Divider />
        </Flex>
      )}
    </Flex>
  );
};