import { useMutation, useQuery } from "@tanstack/react-query";
import { useNavigate } from "@tanstack/react-router";
import { Button, Divider, Flex } from "antd";
import { FormProvider, useForm } from "react-hook-form";
import { useTranslation } from "react-i18next";

import { Waypoints } from "@/entities/RouteDirectory";
import { createRoute } from "@/entities/RouteDirectory/api/createRoute";
import { createWaypoints } from "@/entities/RouteDirectory/api/createWaypoints";
import { CreateRouteFormValues } from "@/features/AddRoute/model/types";
import { Form } from "@/features/AddRoute/ui/styled";
import { fileUpload } from "@/shared/api/handBooks/mutation/uploadFile";
import { getCategoriesList } from "@/shared/api/handBooks/queries/getCategories";
import { getCitiesList } from "@/shared/api/handBooks/queries/getCities";
import { Input } from "@/shared/ui/Input";
import { Select } from "@/shared/ui/Select";
import { Upload } from "@/shared/ui/Upload";

const CreateRoute = () => {
  const { t } = useTranslation(["p_createRoute", "glossary"]);

  const navigate = useNavigate({ from: "/create-route" });

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

  const { data: categoriesOptions } = useQuery({
    ...getCategoriesList.getQueryOptions({
      limit: 99999,
    }),
    select: (data) => {
      return data?.items?.map((item) => ({
        label: item.name || "",
        value: item.id || "",
      }));
    },
  });

  const methods = useForm<CreateRouteFormValues>({
    defaultValues: {
      waypoint: [{ name: "", description: "", longitude: "", latitude: "" }],
    },
  });
  const image = methods.watch("image");
  const uploadFileMutation = useMutation({
    ...fileUpload.getMutationOptions(),
  });

  const createRouteMutation = useMutation({
    ...createRoute.getMutationOptions(),
  });

  const createWaypointsMutation = useMutation({
    ...createWaypoints.getMutationOptions(),
    onSuccess: async () => {
      await navigate({
        to: "/routes",
        search: () => ({
          search: undefined,
          order: undefined,
          page: undefined,
          limit: undefined,
        }),
      });
    },
  });

  const handleFormSubmit = async (values: CreateRouteFormValues) => {
    const imagesRouteIds = await Promise.all(
      (values.image?.fileList || []).map((file) =>
        uploadFileMutation.mutateAsync(file.originFileObj as File),
      ),
    );

    const waypointImageList = values.waypoint.map(
      (item) => item.waypointImage?.fileList,
    );

    const waypointAudioList = values.waypoint
      .map((item) => item.audio?.fileList)
      .flat();

    const imagesWaypointsIds = await Promise.all(
      waypointImageList.map(async (files) => {
        if (!files) return [];

        return await Promise.all(
          files?.map((fileItem) =>
            uploadFileMutation.mutateAsync(fileItem?.originFileObj as File),
          ),
        );
      }),
    );

    const audioWaypointsIds = await Promise.all(
      waypointAudioList.map((file) =>
        uploadFileMutation.mutateAsync(file?.originFileObj as File),
      ),
    );

    const imgRouteRes = imagesRouteIds.map((item) => item?.id || "");

    const audioWaypointsRes = audioWaypointsIds.map((item) => item?.id || "");

    const createRoute = await createRouteMutation
      .mutateAsync({
        name: values.name,
        description: values.description,
        cityId: values.cityId,
        categoryId: values.categoryId,
        durationDistance: Number(values.durationDistance),
        durationTime: Number(values.durationTime),
        price: Number(values.price),
        attachmentId: imgRouteRes[0],
      })
      .then((res) => res);

    const routeId = createRoute.id;

    createWaypointsMutation.mutate(
      values.waypoint.map((item, index) => ({
        routeId: routeId,
        order: index,
        name: item.name,
        description: item.description,
        latitude: item.latitude,
        longitude: item.longitude,
        audioId: audioWaypointsRes[index],
        attachmentIds: imagesWaypointsIds[index].map((it) => it.id),
        materials: item.material,
      })),
    );
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
            name="cityId"
            control={methods.control}
            label={t("field.cityLabel")}
            placeholder={t("field.cityPlaceholder")}
            options={cityOptions}
          />

          <Select.Controller
            name="categoryId"
            control={methods.control}
            label={t("field.categoryLabel")}
            placeholder={t("field.categoryPlaceholder")}
            options={categoriesOptions}
          />
        </Flex>

        <Upload.Controller
          control={methods.control}
          name="image"
          label={t("field.filesLabel")}
          accept="image/*, video/*"
          width={110}
          height={110}
          canClear
          reset={(value) =>
            image &&
            methods.setValue("image", {
              file: image.file,
              fileList: image.fileList.filter((item) => item.uid !== value),
            })
          }
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
              name="durationDistance"
              control={methods.control}
              suffix={t("glossary:morphemes.km")}
              label={t("field.kmDurationLabel")}
              placeholder={t("field.kmDurationPlaceholder")}
            />

            <Input.Controller
              name="durationTime"
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
