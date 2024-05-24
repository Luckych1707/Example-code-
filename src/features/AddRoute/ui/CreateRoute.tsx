import { Button, Divider, Flex } from "antd";
import { FormProvider, useForm } from "react-hook-form";
import { useTranslation } from "react-i18next";

import { Waypoints } from "@/entities/RouteDirectory";
import { CreateRouteFormValues } from "@/features/AddRoute/model/types";
import { Form } from "@/features/AddRoute/ui/styled";
import { Input } from "@/shared/ui/Input";
import { Select } from "@/shared/ui/Select";
import { Upload } from "@/shared/ui/Upload/Upload";

const CreateRoute = () => {
  const { t } = useTranslation(["p_createRoute", "glossary"]);

  const methods = useForm<CreateRouteFormValues>({
    defaultValues: {
      waypoint: [{ name: "", description: "", longitude: "", latitude: "" }],
    },
  });
  // TODO: Поддержать интеграцию формы с бэком
  const handleFormSubmit = (values: CreateRouteFormValues) => {
    console.log(values);
  };

  return (
    <FormProvider {...methods}>
      <Form onSubmit={methods.handleSubmit(handleFormSubmit)}>
        <Input.Controller
          name="name"
          control={methods.control}
          label={t("field.nameLabel")}
          placeholder={t("field.namePlaceholder")}
        />

        <Flex gap="32px">
          <Select.Controller
            name="city"
            control={methods.control}
            label={t("field.cityLabel")}
            placeholder={t("field.cityPlaceholder")}
          />

          <Select.Controller
            name="categories"
            control={methods.control}
            label={t("field.categoryLabel")}
            placeholder={t("field.categoryPlaceholder")}
          />
        </Flex>

        <Upload
          label={t("field.filesLabel")}
          secondaryLabel={t("field.filesSecondaryLabel")}
        />

        <Input.TextArea.Controller
          name="description"
          control={methods.control}
          label={t("field.descriptionLabel")}
          placeholder={t("field.descriptionPlaceholder")}
        />

        <Divider style={{ margin: 0 }} />

        <Waypoints />

        <Divider style={{ margin: 0 }} />

        <Flex vertical gap="16px">
          <Flex gap="32px">
            <Input.Controller
              name="kmDuration"
              control={methods.control}
              suffix={t("glossary:morphemes.km")}
              label={t("field.kmDurationLabel")}
              placeholder={t("field.kmDurationPlaceholder")}
            />

            <Input.Controller
              name="hourDuration"
              control={methods.control}
              suffix={t("glossary:morphemes.hours")}
              label={t("field.hourDurationLabel")}
              placeholder={t("field.hourDurationPlaceholder")}
            />
          </Flex>

          <Flex style={{ width: "384px" }}>
            <Input.Controller
              name="price"
              control={methods.control}
              suffix={t("glossary:morphemes.rubles")}
              label={t("field.priceLabel")}
              placeholder={t("field.pricePlaceholder")}
            />
          </Flex>
        </Flex>

        <Divider style={{ margin: 0 }} />

        <Flex gap="12px" justify="flex-end">
          <Button type="primary" htmlType="submit">
            {t("glossary:actions.addButton")}
          </Button>

          <Button>{t("glossary:actions.cancelButton")}</Button>
        </Flex>
      </Form>
    </FormProvider>
  );
};

export default CreateRoute;
