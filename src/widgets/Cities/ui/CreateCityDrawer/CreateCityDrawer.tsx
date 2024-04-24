import { CloseOutlined, PlusOutlined } from "@ant-design/icons";
import {
  Button,
  Divider,
  Drawer,
  Flex,
  GetProp,
  Image,
  Typography,
  Upload,
  UploadFile,
  UploadProps,
} from "antd";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { useTranslation } from "react-i18next";

import { CityEditValues } from "@/features/Cities/model/types";
import { Form } from "@/features/Cities/ui/CityEdit/styled";
import { Input } from "@/shared/ui/Input";
import { CreateCityDrawerProps } from "@/widgets/Cities/model/types";

type FileType = Parameters<GetProp<UploadProps, "beforeUpload">>[0];

export const CreateCityDrawer = ({
  onClose,
  isOpen,
}: CreateCityDrawerProps) => {
  const { t } = useTranslation(["p_city", "glossary"]);

  const getBase64 = (file: FileType): Promise<string> =>
    new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => resolve(reader.result as string);
      reader.onerror = (error) => reject(error);
    });

  const { control, handleSubmit } = useForm<CityEditValues>();

  const [previewOpen, setPreviewOpen] = useState(false);
  const [previewImage, setPreviewImage] = useState("");
  const [file, setFile] = useState<UploadFile[]>([]);

  const handleFormSubmit = (values: CityEditValues) => {
    console.log(values);
  };

  const handleChange: UploadProps["onChange"] = ({ fileList: newFileList }) =>
    setFile(newFileList);

  const handlePreview = async (file: UploadFile) => {
    if (!file.url && !file.preview) {
      file.preview = await getBase64(file.originFileObj as FileType);
    }

    setPreviewImage(file.url || (file.preview as string));
    setPreviewOpen(true);
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
        <Flex vertical>
          <Typography.Text>{t("cityDrawer.form.labelPhoto")}</Typography.Text>
          <Upload
            action="https://660d2bd96ddfa2943b33731c.mockapi.io/api/upload"
            listType="picture-card"
            fileList={file}
            onPreview={handlePreview}
            onChange={handleChange}
          >
            {file.length === 0 && (
              <Button
                icon={<PlusOutlined />}
                style={{ border: 0, background: "none", boxShadow: "none" }}
              >
                <Typography.Text>
                  {t("cityDrawer.form.placeholderPhoto")}
                </Typography.Text>
              </Button>
            )}
          </Upload>
          {previewImage && (
            <Image
              wrapperStyle={{ display: "none" }}
              preview={{
                visible: previewOpen,
              }}
              src={previewImage}
            />
          )}
        </Flex>
        <Flex>
          <Input.TextArea.Controller
            control={control}
            name="description"
            label={t("cityDrawer.form.labelDescription")}
            placeholder={t("cityDrawer.form.placeholderDescription")}
          />
        </Flex>
        <Divider />
        <Flex gap="12px" justify="flex-end">
          <Button type="primary">{t("glossary:actions.addButton")}</Button>
          <Button onClick={onClose}>
            {t("glossary:actions.cancelButton")}
          </Button>
        </Flex>
      </Form>
    </Drawer>
  );
};
