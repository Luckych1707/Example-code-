import { Button, Divider, Flex } from "antd";
import dayjs from "dayjs";
import { useForm } from "react-hook-form";
import { useTranslation } from "react-i18next";

import { DatePicker } from "@/shared/ui/DatePicker";
import { Input } from "@/shared/ui/Input";
import { Select } from "@/shared/ui/Select";
import {
  EditDrawerProps,
  EditEventFormValue,
} from "@/widgets/Calendar/model/types";
import { Form } from "@/widgets/Calendar/ui/CreateEventDrawer/styled";

export const EventEdit = ({
  event,
  eventVariant,
  setEventVariant,
}: EditDrawerProps) => {
  const { t } = useTranslation(["p_calendar", "glossary"]);

  const { control, handleSubmit } = useForm<EditEventFormValue>({
    defaultValues: {
      date: dayjs(event.date),
      city: event.cityName,
      name: event.title,
      description: event.text,
      latitude: event.latitude,
      longitude: event.longitude,
      routes: event.routes,
    },
  });

  const handleFormSubmit = (values: EditEventFormValue) => {
    console.log(values);
  };

  return (
    eventVariant === "edit" && (
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
          <Button onClick={() => setEventVariant("info")}>
            {t("glossary:actions.cancelButton")}
          </Button>
        </Flex>
      </Form>
    )
  );
};
