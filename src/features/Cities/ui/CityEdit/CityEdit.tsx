import { useMutation, useQueryClient } from "@tanstack/react-query";
import { Button, Divider, Flex } from "antd";
import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { useTranslation } from "react-i18next";

import { editCity } from "@/entities/Cities/api/editCity";
import { CityEditType, CityEditValues } from "@/features/Cities/model/types";
import { Form } from "@/features/Cities/ui/CityEdit/styled";
import { fileUpload } from "@/shared/api/handBooks/mutation/uploadFile";
import { getCitiesList } from "@/shared/api/handBooks/queries/getCities";
import { Input } from "@/shared/ui/Input";
import { Upload } from "@/shared/ui/Upload";

export const CityEdit = ({ city, onClose }: CityEditType) => {
  const { t } = useTranslation(["p_city", "glossary"]);

  const queryClient = useQueryClient();

  const uploadFileMutation = useMutation({
    ...fileUpload.getMutationOptions(),
  });

  const editCityMutation = useMutation({
    ...editCity.getMutationOptions(),
    onSuccess: async () => {
      onClose();
      await queryClient.invalidateQueries({
        queryKey: [getCitiesList.queryName],
      });
    },
  });

  const { control, handleSubmit, setValue, formState } =
    useForm<CityEditValues>();

  useEffect(() => {
    setValue("name", city?.name || "");
    setValue("description", city?.description || "");
  }, [city?.name, city?.description, setValue]);

  const handleFormSubmit = async (values: CityEditValues) => {
    const imagesIds = await Promise.all(
      (values.image?.fileList || []).map((file) =>
        uploadFileMutation.mutateAsync(file.originFileObj as File),
      ),
    );

    const imgRes = imagesIds.map((item) => item?.id || "");

    editCityMutation.mutate({
      cityId: city?.id || "",
      data: {
        description: values.description,
        name: values.name,
        imageId: imgRes[0],
      },
    });
  };

  if (!city) return;

  return (
    <Form onSubmit={handleSubmit(handleFormSubmit)}>
      <Input.Controller
        control={control}
        name="name"
        label={t("cityDrawer.form.labelName")}
        placeholder={t("cityDrawer.form.placeholderName")}
        rules={{ required: true }}
        isError={formState.errors.name?.type}
      />

      <Upload.Controller
        control={control}
        name="image"
        label={t("cityDrawer.form.labelPhoto")}
        uri={[city?.image.uri]}
        canClear
        reset={() => setValue("image", undefined)}
        rules={{ required: true }}
        isError={formState.errors.image?.type}
      />

      <Input.TextArea.Controller
        control={control}
        name="description"
        label={t("cityDrawer.form.labelDescription")}
        placeholder={t("cityDrawer.form.placeholderDescription")}
        rules={{ required: true }}
        isError={formState.errors.description?.type}
      />

      <Divider />

      <Flex gap="12px" justify="flex-end">
        <Button type="primary" htmlType="submit">
          {t("glossary:actions.saveButton")}
        </Button>

        <Button onClick={onClose}>{t("glossary:actions.cancelButton")}</Button>
      </Flex>
    </Form>
  );
};
