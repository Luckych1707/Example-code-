import { Button, Divider, Flex, Typography } from "antd";
import { useForm } from "react-hook-form";
import { useTranslation } from "react-i18next";

import { Checkbox } from "@/shared/ui/Checkbox";
import { Select } from "@/shared/ui/Select";
import { selectData } from "@/widgets/Feedback/model/constants";
import { FiltersFormValues } from "@/widgets/Feedback/model/types";

import { Form } from "./styled";

export const Filters = () => {
  const { t } = useTranslation("p_feedback");

  const { control, handleSubmit, reset } = useForm<FiltersFormValues>();
  // TODO: Поддержать интеграцию формы с бэком
  const handleFormSubmit = (values: FiltersFormValues) => {
    console.log(values);
  };

  return (
    <Flex vertical>
      <Form onSubmit={handleSubmit(handleFormSubmit)}>
        <Flex justify="space-between">
          <Flex vertical gap="4px">
            <Typography.Text>{t("filters.statusTitle")}</Typography.Text>
            <Checkbox.Controller
              control={control}
              name="new"
              label={t("filters.statusesLabels.new")}
            />
            <Checkbox.Controller
              control={control}
              name="viewed"
              label={t("filters.statusesLabels.viewed")}
            />
            <Checkbox.Controller
              control={control}
              name="processed"
              label={t("filters.statusesLabels.processed")}
            />
          </Flex>
          <Flex>
            <Flex style={{ width: "380px" }}>
              <Select.Controller
                control={control}
                options={selectData}
                name="date"
                label={t("filters.dateTitle")}
              />
            </Flex>
          </Flex>
        </Flex>
        <Flex justify="flex-end" gap="12px">
          <Button type="primary" htmlType="submit">
            {t("filters.submit")}
          </Button>
          <Button onClick={() => reset()}>{t("filters.reset")}</Button>
        </Flex>
      </Form>
      <Divider />
    </Flex>
  );
};
