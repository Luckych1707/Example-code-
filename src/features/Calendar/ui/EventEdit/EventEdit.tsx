import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { Button, Divider, Flex } from "antd";
import dayjs from "dayjs";
import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { useTranslation } from "react-i18next";

import { editEvent } from "@/entities/Calendar/api/editEvent";
import { getCitiesList } from "@/shared/api/handBooks/queries/getCities";
import { getEventsList } from "@/shared/api/handBooks/queries/getEvents";
import { getRoutesList } from "@/shared/api/handBooks/queries/getRoutes";
import { DatePicker } from "@/shared/ui/DatePicker";
import { Input } from "@/shared/ui/Input";
import { Select } from "@/shared/ui/Select";
import { getEvent } from "@/widgets/Calendar/api/getEvents";
import {
  EditDrawerProps,
  EditEventFormValue,
} from "@/widgets/Calendar/model/types";
import { Form } from "@/widgets/Calendar/ui/CreateEventDrawer/styled";

export const EventEdit = ({
  event,
  eventVariant,
  setEventVariant,
  onClose,
}: EditDrawerProps) => {
  const { t } = useTranslation(["p_calendar", "glossary"]);

  const queryClient = useQueryClient();

  const { control, handleSubmit, setValue, watch, trigger, formState } =
    useForm<EditEventFormValue>({});

  const selectedCity = watch("city");

  useEffect(() => {
    trigger("city").then(() => {
      if (event?.city?.id !== selectedCity) setValue("routes", []);
    });
  }, [selectedCity]);

  useEffect(() => {
    setValue("date", dayjs(event?.date) || "");
    setValue("city", event?.city?.id || "");
    setValue("name", event?.name || "");
    setValue("description", event?.description || "");
    setValue("latitude", event?.latitude);
    setValue("longitude", event?.longitude);
    setValue("routes", event?.routes?.map((item) => item.id) || []);
  }, [
    event?.city?.id,
    event?.city?.name,
    event?.date,
    event?.description,
    event?.latitude,
    event?.longitude,
    event?.name,
    event?.routes,
    setValue,
  ]);

  const { data: cityOptions } = useQuery({
    ...getCitiesList.getQueryOptions({
      limit: 99999,
    }),
    select: (data) => {
      return data?.items?.map((item) => ({
        label: item.name || "",
        value: item.id || "",
      }));
    },
  });

  const { data: routesOptions } = useQuery({
    ...getRoutesList.getQueryOptions(
      {},
      {
        filters: { cityId: selectedCity },
      },
    ),
    select: (data) => {
      return data?.items?.map((item) => ({
        label: item.name || "",
        value: item.id || "",
      }));
    },
    enabled: !!selectedCity,
  });

  const egitEventMutation = useMutation({
    ...editEvent.getMutationOptions(),
    onSuccess: async () => {
      await queryClient.invalidateQueries({
        queryKey: [getEventsList.queryName],
      });
      await queryClient.invalidateQueries({
        queryKey: [getEvent.queryName],
      });
      onClose();
    },
  });

  const handleFormSubmit = (values: EditEventFormValue) => {
    egitEventMutation.mutate({
      eventId: event?.id || "",
      data: {
        name: values.name,
        description: values.description,
        cityId: values.city,
        longitude: values.longitude,
        latitude: values.latitude,
        routeIds: values.routes,
        date: values.date.format("YYYY-MM-DD"),
      },
    });
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
            rules={{ required: true }}
            isError={formState.errors.name?.type}
          />

          <Flex gap="32px">
            <Select.Controller
              name="city"
              control={control}
              options={cityOptions}
              label={t("eventDrawer.fields.cityLabel")}
              placeholder={t("eventDrawer.fields.cityPlaceholder")}
              rules={{ required: true }}
              isError={formState.errors.name?.type}
            />

            <DatePicker.Controller
              name="date"
              control={control}
              label={t("eventDrawer.fields.dateLabel")}
              placeholder={t("eventDrawer.fields.datePlaceholder")}
              rules={{ required: true }}
            />
          </Flex>

          <Input.TextArea.Controller
            name="description"
            control={control}
            label={t("eventDrawer.fields.descriptionLabel")}
            placeholder={t("eventDrawer.fields.descriptionLabel")}
            rules={{ required: true }}
            isError={formState.errors.name?.type}
          />

          <Select.Controller
            name="routes"
            control={control}
            mode="multiple"
            options={routesOptions}
            label={t("eventDrawer.fields.routesLabel")}
            placeholder={t("eventDrawer.fields.routesPlaceholder")}
            rules={{ required: true }}
            isError={formState.errors.name?.type}
          />

          <Flex gap="32px">
            <Input.Controller
              name="latitude"
              control={control}
              label={t("eventDrawer.fields.latitudeLabel")}
              placeholder={t("eventDrawer.fields.latitudePlaceholder")}
              rules={{ required: true }}
              isError={formState.errors.name?.type}
            />

            <Input.Controller
              name="longitude"
              control={control}
              label={t("eventDrawer.fields.longitudeLabel")}
              placeholder={t("eventDrawer.fields.longitudePlaceholder")}
              rules={{ required: true }}
              isError={formState.errors.name?.type}
            />
          </Flex>
        </Flex>

        <Divider />

        <Flex gap="12px" justify="flex-end">
          <Button type="primary" htmlType="submit">
            {t("glossary:actions.editButton")}
          </Button>

          <Button onClick={() => setEventVariant("info")}>
            {t("glossary:actions.cancelButton")}
          </Button>
        </Flex>
      </Form>
    )
  );
};
