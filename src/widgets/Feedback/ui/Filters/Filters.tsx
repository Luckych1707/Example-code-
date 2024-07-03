import { useNavigate, useSearch } from "@tanstack/react-router";
import { Button, Divider, Flex, Typography } from "antd";
import { useForm } from "react-hook-form";
import { useTranslation } from "react-i18next";

import { Checkbox } from "@/shared/ui/Checkbox";
import { Select } from "@/shared/ui/Select";
import { selectData } from "@/widgets/Feedback/constants/constants";
import { FiltersFormValues } from "@/widgets/Feedback/model/types";

import { Form } from "./styled";

export const Filters = () => {
  const { t } = useTranslation(["p_feedback", "glossary"]);

  const navigate = useNavigate({ from: "/feedback" });

  const search = useSearch({ from: "/feedback" });

  const { control, handleSubmit, reset } = useForm<FiltersFormValues>({
    defaultValues: {
      processed: search.processed,
      new: search.new,
      viewed: search.viewed,
      order: search.order,
    },
  });

  const handleFormSubmit = async (values: FiltersFormValues) => {
    await navigate({
      to: "/feedback",
      search: () => ({
        order: values.order,
        new: values.new,
        processed: values.processed,
        viewed: values.viewed,
        page: search.page,
        limit: search.limit,
      }),
    });
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

          <Flex style={{ width: "380px" }}>
            <Select.Controller
              control={control}
              options={selectData}
              name="order"
              label={t("filters.dateTitle")}
            />
          </Flex>
        </Flex>

        <Flex justify="flex-end" gap="12px">
          <Button type="primary" htmlType="submit">
            {t("glossary:actions.submitButton")}
          </Button>

          <Button onClick={() => reset()}>
            {t("glossary:actions.resetButton")}
          </Button>
        </Flex>
      </Form>

      <Divider />
    </Flex>
  );
};
