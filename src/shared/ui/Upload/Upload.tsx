import { PlusOutlined } from "@ant-design/icons";
import {
  Button,
  Flex,
  GetProp,
  Image,
  Typography,
  Upload as UploadComponent,
  UploadFile,
  UploadProps,
} from "antd";
import { useState } from "react";
import { useTranslation } from "react-i18next";

type FileType = Parameters<GetProp<UploadProps, "beforeUpload">>[0];

type Props = {
  label?: string;
  secondaryLabel?: string;
};

export const Upload = ({ label, secondaryLabel }: Props) => {
  const { t } = useTranslation("glossary");

  const getBase64 = (file: FileType): Promise<string> =>
    new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => resolve(reader.result as string);
      reader.onerror = (error) => reject(error);
    });

  const [previewOpen, setPreviewOpen] = useState(false);
  const [previewImage, setPreviewImage] = useState("");
  const [file, setFile] = useState<UploadFile[]>([]);

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
    <Flex vertical gap="4px">
      <Flex gap="8px">
        <Typography.Text>{label}</Typography.Text>

        {secondaryLabel && (
          <Typography.Paragraph type="secondary">
            {secondaryLabel}
          </Typography.Paragraph>
        )}
      </Flex>

      <UploadComponent
        action="https://660d2bd96ddfa2943b33731c.mockapi.io/api/upload"
        listType="picture-card"
        fileList={file}
        onPreview={handlePreview}
        onChange={handleChange}
      >
        {file.length < 5 && (
          <Button
            style={{
              display: "flex",
              alignItems: "center",
              border: 0,
              background: "none",
              boxShadow: "none",
            }}
          >
            <Flex vertical align="center" gap="8px">
              <PlusOutlined />
              <Typography.Text>
                {t("glossary:actions.addButton")}
              </Typography.Text>
            </Flex>
          </Button>
        )}
      </UploadComponent>
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
  );
};
