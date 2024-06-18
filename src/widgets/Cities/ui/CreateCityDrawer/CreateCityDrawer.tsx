import { CloseOutlined } from "@ant-design/icons";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { Button, Divider, Drawer, Flex } from "antd";
import { useForm } from "react-hook-form";
import { useTranslation } from "react-i18next";

import { createCity } from "@/entities/Cities/api/createCity";
import { CityEditValues } from "@/features/Cities/model/types";
import { Form } from "@/features/Cities/ui/CityEdit/styled";
import { fileUpload } from "@/shared/api/handBooks/mutation/uploadFile";
import { getCitiesList } from "@/shared/api/handBooks/queries/getCities";
import { Input } from "@/shared/ui/Input";
import { Upload } from "@/shared/ui/Upload";
import { CreateCityDrawerProps } from "@/widgets/Cities/model/types";

export const CreateCityDrawer = ({
  onClose,
  isOpen,
}: CreateCityDrawerProps) => {
  const { t } = useTranslation(["p_city", "glossary"]);

  const queryClient = useQueryClient();

  const uploadFileMutation = useMutation({
    ...fileUpload.getMutationOptions(),
  });

  const createCityMutation = useMutation({
    ...createCity.getMutationOptions(),
    onSuccess: async () => {
      onClose();
      await queryClient.invalidateQueries({
        queryKey: [getCitiesList.queryName],
      });
    },
  });

  const { control, handleSubmit, setValue } = useForm<CityEditValues>();

  const handleFormSubmit = async (values: CityEditValues) => {
    const imagesIds = await Promise.all(
      (values.image?.fileList || []).map((file) =>
        uploadFileMutation.mutateAsync(file.originFileObj as File),
      ),
    );

    const imgRes = imagesIds.map((item) => item?.id || "");

    createCityMutation.mutate({
      imageId: imgRes[0],
      description: values.description,
      name: values.name,
    });
  };

  return (
    <Drawer
      title={t("addCityButton")}
      width={480}
      open={isOpen}
      extra={<Button icon={<CloseOutlined />} type="text" onClick={onClose} />}
      closeIcon={false}
      maskClosable={false}
    >
      <Form onSubmit={handleSubmit(handleFormSubmit)}>
        <Input.Controller
          control={control}
          name="name"
          label={t("cityDrawer.form.labelName")}
          placeholder={t("cityDrawer.form.placeholderName")}
        />

        <Upload.Controller
          control={control}
          name="image"
          label={t("cityDrawer.form.labelPhoto")}
          canClear
          reset={() => setValue("image", undefined)}
        />

        <Input.TextArea.Controller
          control={control}
          name="description"
          label={t("cityDrawer.form.labelDescription")}
          placeholder={t("cityDrawer.form.placeholderDescription")}
        />

        <Divider />

        <Flex gap="12px" justify="flex-end">
          <Button type="primary" htmlType="submit">
            {t("glossary:actions.addButton")}
          </Button>

          <Button onClick={onClose}>
            {t("glossary:actions.cancelButton")}
          </Button>
        </Flex>
      </Form>
    </Drawer>
  );
};
