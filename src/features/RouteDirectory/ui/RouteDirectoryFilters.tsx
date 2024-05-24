import { SearchOutlined } from "@ant-design/icons";
import { Button, Flex } from "antd";
import { useForm } from "react-hook-form";
import { useTranslation } from "react-i18next";

import { RouteDirectoryFiltersFormValues } from "@/features/RouteDirectory/model/types";
import { Form } from "@/features/RouteDirectory/ui/styled";
import { Input } from "@/shared/ui/Input";
import { Select } from "@/shared/ui/Select";

export const RouteDirectoryFilters = () => {
  const { t } = useTranslation(["p_routeDirectory", "glossary"]);

  const { control, handleSubmit, reset } =
    useForm<RouteDirectoryFiltersFormValues>();

  const handleFormSubmit = (values: RouteDirectoryFiltersFormValues) => {
    console.log(values);
  };

  return (
    <Form onSubmit={handleSubmit(handleFormSubmit)}>
      <Flex gap="32px">
        <Input.Controller
          control={control}
          name="name"
          label={t("filters.nameLabel")}
          placeholder={t("filters.namePlaceholder")}
          prefix={<SearchOutlined />}
        />

        <Select.Controller
          control={control}
          name="sortField"
          label={t("filters.sortFieldLabel")}
          placeholder={t("filters.sortFieldPlaceholder")}
        />
      </Flex>

      <Flex gap="12px" justify="flex-end">
        <Button type="primary" htmlType="submit">
          {t("glossary:actions.addButton")}
        </Button>

        <Button onClick={() => reset()}>
          {t("glossary:actions.resetButton")}
        </Button>
      </Flex>
    </Form>
  );
};
