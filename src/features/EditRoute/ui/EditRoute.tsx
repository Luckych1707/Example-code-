import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { useMatch, useNavigate } from "@tanstack/react-router";
import { Button, Divider, Flex, Spin } from "antd";
import { useEffect, useState } from "react";
import { FormProvider, useForm } from "react-hook-form";
import { useTranslation } from "react-i18next";

import { deleteWaypoint } from "@/entities/EditRoute/api/deleteWaypoint";
import { editRoute } from "@/entities/EditRoute/api/editRoute";
import { editWaypoints } from "@/entities/EditRoute/api/editWaypoints";
import { Waypoints } from "@/entities/RouteDirectory";
import { createWaypoints } from "@/entities/RouteDirectory/api/createWaypoints";
import { CreateRouteFormValues } from "@/features/AddRoute/model/types";
import { Form } from "@/features/AddRoute/ui/styled";
import { fileUpload } from "@/shared/api/handBooks/mutation/uploadFile";
import { getCategoriesList } from "@/shared/api/handBooks/queries/getCategories";
import { getCitiesList } from "@/shared/api/handBooks/queries/getCities";
import { getRoutesList } from "@/shared/api/handBooks/queries/getRoutes";
import { Input } from "@/shared/ui/Input";
import { Select } from "@/shared/ui/Select";
import { Upload } from "@/shared/ui/Upload";
import { getRoute } from "@/widgets/RouteDirectory/api/getRoute";
import { getWaypointsList } from "@/widgets/RouteDirectory/api/getWaypointsList";

const EditRoute = () => {
  const { t } = useTranslation(["p_createRoute", "glossary"]);

  const queryClient = useQueryClient();

  const navigate = useNavigate();

  const { params } = useMatch({ from: "/edit-route/$id" });

  const [deletedWaypoints, setDeletedWaypoints] = useState<string[]>([]);

  const { data: route, isLoading: routeIsLoading } = useQuery({
    ...getRoute.getQueryOptions(params.id),
  });

  const { data: waypointsList, isLoading: waypointsIsLoading } = useQuery({
    ...getWaypointsList.getQueryOptions(
      { limit: 99999, skip: 0 },
      { filters: { routeId: params.id } },
    ),
  });

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

  const uploadFileMutation = useMutation({
    ...fileUpload.getMutationOptions(),
  });

  const editRouteMutation = useMutation({
    ...editRoute.getMutationOptions(),
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: [getRoutesList.queryName],
      });
    },
  });

  const editWaypointsMutation = useMutation({
    ...editWaypoints.getMutationOptions(),
  });

  const createWaypointsMutation = useMutation({
    ...createWaypoints.getMutationOptions(),
  });

  const deleteWaypointMutation = useMutation({
    ...deleteWaypoint.getMutationOptions(),
  });

  const methods = useForm<CreateRouteFormValues>({});

  useEffect(() => {
    methods.setValue("name", route?.name || "");
    methods.setValue("description", route?.description || "");
    methods.setValue("cityId", route?.cityId || "");
    methods.setValue("categoryId", route?.categoryId || "");
    methods.setValue("price", route?.price?.toString() || "");
    methods.setValue(
      "durationDistance",
      route?.durationDistance?.toString() || "",
    );
    methods.setValue("durationTime", route?.durationTime?.toString() || "");
    methods.setValue(
      "waypoint",
      waypointsList?.items.map((item) => {
        return {
          waypointId: item.id,
          order: item.order,
          name: item.name,
          description: item.description,
          latitude: item.latitude,
          longitude: item.longitude,
          material: item.materials.map((it) => {
            return {
              name: it.name,
              year: it.year.toString(),
              description: it.description,
            };
          }),
          audioPreview: { uri: item.audio.uri, name: item.audio.name },
          waypointImagePreview: item.attachments.map((item) => {
            return { uri: item.uri, id: item.id };
          }),
        };
      }) || [],
    );
  }, [methods, route, waypointsList?.items]);

  const image = methods.watch("image");

  if (waypointsIsLoading || !waypointsList || routeIsLoading || !route) {
    return (
      <Flex justify="center" align="center" style={{ height: "100vh" }}>
        <Spin />
      </Flex>
    );
  }

  const handleFormSubmit = async (values: CreateRouteFormValues) => {
    const editWaypoint = values.waypoint.filter((item) => item.waypointId);
    const createWaypoint = values.waypoint.filter(
      (item) => item.waypointId === "",
    );

    const imagesRouteIds = await Promise.all(
      (values.image?.fileList || []).map((file) => {
        if (!file) return null;
        return uploadFileMutation.mutateAsync(file.originFileObj as File);
      }),
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
      waypointAudioList.map((file) => {
        if (!file) return null;
        return uploadFileMutation.mutateAsync(file?.originFileObj as File);
      }),
    );

    const imgRouteRes = imagesRouteIds.map((item) => item?.id || "");

    const audioWaypointsRes = audioWaypointsIds.map((item) => item?.id || "");

    if (deletedWaypoints.length > 0) {
      await Promise.all(
        deletedWaypoints.map((item) => {
          if (!item) return null;
          return deleteWaypointMutation.mutateAsync(item);
        }),
      );
    }

    const editRoute = await editRouteMutation
      .mutateAsync({
        routeId: params.id,
        data: {
          name: values.name,
          description: values.description,
          cityId: values.cityId,
          categoryId: values.categoryId,
          durationDistance: Number(values.durationDistance),
          durationTime: Number(values.durationTime),
          price: Number(values.price),
          attachmentId: imgRouteRes[0] || route.attachment.id,
        },
      })
      .then((res) => res);

    const routeId = editRoute.id;

    if (createWaypoint.length > 0) {
      createWaypointsMutation.mutate(
        createWaypoint.map((item, index) => ({
          routeId: routeId,
          order: item.order,
          name: item.name,
          description: item.description,
          latitude: item.latitude,
          longitude: item.longitude,
          audioId: audioWaypointsRes.filter((it) => it !== "")[index],
          attachmentIds: imagesWaypointsIds[index].map((it) => it.id),
          materials: item.material.map((it) => {
            return {
              name: it.name,
              year: Number(it.year),
              description: it.description,
            };
          }),
        })),
      );
    }

    const editWaypoints = editWaypointsMutation.mutateAsync(
      editWaypoint.map((item, index) => ({
        id: item.waypointId,
        payload: {
          order: item.order,
          name: item.name,
          description: item.description,
          latitude: item.latitude,
          longitude: item.longitude,
          audioId:
            audioWaypointsRes[item.order] || waypointsList.items[index].audioId,
          attachmentIds: [
            imagesWaypointsIds[item.order].map((it) => it.id),
            values.waypoint[item.order].waypointImagePreview?.map(
              (item) => item.id,
            ) || [],
          ].flat(),
          materials: item.material.map((it) => {
            return {
              name: it.name,
              year: Number(it.year),
              description: it.description,
            };
          }),
        },
      })),
    );

    await Promise.all([editRoute, editWaypoints]).then(
      async () =>
        await navigate({
          to: "/routes",
          search: () => ({
            search: undefined,
            order: undefined,
            page: undefined,
            limit: undefined,
          }),
        }),
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
          rules={{ required: true }}
          isError={methods.formState.errors.name?.type}
        />

        <Flex gap="32px">
          <Select.Controller
            name="cityId"
            control={methods.control}
            label={t("field.cityLabel")}
            placeholder={t("field.cityPlaceholder")}
            options={cityOptions}
            rules={{ required: true }}
            isError={methods.formState.errors.cityId?.type}
          />

          <Select.Controller
            name="categoryId"
            control={methods.control}
            label={t("field.categoryLabel")}
            placeholder={t("field.categoryPlaceholder")}
            options={categoriesOptions}
            rules={{ required: true }}
            isError={methods.formState.errors.categoryId?.type}
          />
        </Flex>

        <Upload.Controller
          control={methods.control}
          name="image"
          label={t("field.filesLabel")}
          accept="image/*, video/*"
          uri={[route.attachment.uri]}
          width={110}
          height={110}
          canClear
          reset={(value) =>
            image &&
            methods.setValue("image", {
              file: image.file,
              fileList: image.fileList.filter(
                (item) => item.uid !== value?.uid,
              ),
            })
          }
          rules={{ required: true }}
          isError={methods.formState.errors.image?.type}
        />

        <Input.TextArea.Controller
          name="description"
          control={methods.control}
          label={t("field.descriptionLabel")}
          placeholder={t("field.descriptionPlaceholder")}
          rules={{ required: true }}
          isError={methods.formState.errors.description?.type}
        />

        <Divider style={{ margin: 0 }} />

        <Waypoints
          setDeletedWaypoints={(value) =>
            setDeletedWaypoints((prev) => [...prev, value])
          }
        />

        <Divider style={{ margin: 0 }} />

        <Flex vertical gap="16px">
          <Flex gap="32px">
            <Input.Controller
              name="durationDistance"
              control={methods.control}
              suffix={t("glossary:morphemes.km")}
              label={t("field.kmDurationLabel")}
              placeholder={t("field.kmDurationPlaceholder")}
              rules={{ required: true }}
              isError={methods.formState.errors.durationDistance?.type}
            />

            <Input.Controller
              name="durationTime"
              control={methods.control}
              suffix={t("glossary:morphemes.hours")}
              label={t("field.hourDurationLabel")}
              placeholder={t("field.hourDurationPlaceholder")}
              rules={{ required: true }}
              isError={methods.formState.errors.durationTime?.type}
            />
          </Flex>

          <Flex style={{ width: "384px" }}>
            <Input.Controller
              name="price"
              control={methods.control}
              suffix={t("glossary:morphemes.rubles")}
              label={t("field.priceLabel")}
              placeholder={t("field.pricePlaceholder")}
              rules={{ required: true }}
              isError={methods.formState.errors.price?.type}
            />
          </Flex>
        </Flex>

        <Divider style={{ margin: 0 }} />

        <Flex gap="12px" justify="flex-end">
          <Button type="primary" htmlType="submit">
            {t("glossary:actions.editButton")}
          </Button>

          <Button
            onClick={() =>
              navigate({ to: "/info-route/$id", params: { id: route.id } })
            }
          >
            {t("glossary:actions.cancelButton")}
          </Button>
        </Flex>
      </Form>
    </FormProvider>
  );
};

export default EditRoute;
