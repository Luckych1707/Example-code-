import { CloseOutlined } from "@ant-design/icons";
import { Button, Divider, Drawer, Flex } from "antd";
import dayjs from "dayjs";
import { useForm } from "react-hook-form";
import { useTranslation } from "react-i18next";

import { DatePicker } from "@/shared/ui/DatePicker";
import { Input } from "@/shared/ui/Input";
import { Select } from "@/shared/ui/Select";
import {
  CreateDrawerProps,
  CreateEventFormValue,
} from "@/widgets/Calendar/model/types";

import { Form } from "./styled";

export const CreateEventDrawer = ({
  selectedDate,
  onClose,
  isOpen,
}: CreateDrawerProps) => {
  const { t } = useTranslation(["p_calendar", "glossary"]);

  const { control, handleSubmit } = useForm<CreateEventFormValue>({
    defaultValues: { date: dayjs(selectedDate) },
  });
  // TODO: Поддержать интеграцию формы с бэком
  const handleFormSubmit = (values: CreateEventFormValue) => {
    console.log(values);
  };

  return (
    <Drawer
      title={t("eventDrawer.createTitle")}
      width={480}
      open={isOpen}
      extra={<Button icon={<CloseOutlined />} type="text" onClick={onClose} />}
      closeIcon={false}
      maskClosable={false}
    >
      <Form onSubmit={handleSubmit(handleFormSubmit)}>
        <Flex vertical gap="12px">
          <Input.Controller
            name="name"
            control={control}
            label={t("eventDrawer.fields.nameLabel")}
            placeholder={t("eventDrawer.fields.namePlaceholder")}
          />
          <Flex gap="32px">
            <Select.Controller
              name="city"
              control={control}
              label={t("eventDrawer.fields.cityLabel")}
              placeholder={t("eventDrawer.fields.cityPlaceholder")}
            />
            <DatePicker.Controller
              name="date"
              control={control}
              label={t("eventDrawer.fields.dateLabel")}
              placeholder={t("eventDrawer.fields.datePlaceholder")}
            />
          </Flex>
          <Input.TextArea.Controller
            name="description"
            control={control}
            label={t("eventDrawer.fields.dateLabel")}
            placeholder={t("eventDrawer.fields.dateLabel")}
          />
          <Select.Controller
            name="routes"
            control={control}
            mode="multiple"
            label={t("eventDrawer.fields.routesLabel")}
            placeholder={t("eventDrawer.fields.routesPlaceholder")}
          />
          <Flex gap="32px">
            <Input.Controller
              name="latitude"
              control={control}
              label={t("eventDrawer.fields.latitudeLabel")}
              placeholder={t("eventDrawer.fields.latitudePlaceholder")}
            />
            <Input.Controller
              name="longitude"
              control={control}
              label={t("eventDrawer.fields.longitudeLabel")}
              placeholder={t("eventDrawer.fields.longitudePlaceholder")}
            />
          </Flex>
        </Flex>

        <Divider />

        <Flex gap="12px" justify="flex-end">
          <Button type="primary" htmlType="submit">
            {t("glossary:actions.addButton")}
          </Button>
          <Button>{t("glossary:actions.cancelButton")}</Button>
        </Flex>
      </Form>
    </Drawer>
  );
};
