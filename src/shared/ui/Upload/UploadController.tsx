import { DeleteFilled, PlusOutlined } from "@ant-design/icons";
import {
  Button,
  Flex,
  Image,
  Typography,
  Upload as UploadComponent,
  UploadFile,
  UploadProps,
} from "antd";
import { useState } from "react";
import { Controller, FieldPath, FieldValues } from "react-hook-form";
import { useTranslation } from "react-i18next";

import { getBase64 } from "@/shared/helpers/utils/getBase64";
import { FileType } from "@/shared/types";
import { UploadControllerProps } from "@/shared/ui/Upload/types";

export const UploadController = <
  TFieldValues extends FieldValues = FieldValues,
  TName extends FieldPath<TFieldValues> = FieldPath<TFieldValues>,
>({
  label,
  secondaryLabel,
  accept = "image/*",
  listType = "picture-card",
  uri,
  maxFileLength = 1,
  canClear = false,
  reset,
  width,
  height,
  ...props
}: UploadControllerProps<TFieldValues, TName>) => {
  const { t } = useTranslation("glossary");

  const [previewImage, setPreviewImage] = useState<string[]>(uri || []);
  const [previewAudio, setPreviewAudio] = useState<UploadFile>();
  const [fileList, setFileList] = useState<UploadFile[]>([]);

  const handleGetPreview: UploadProps["onChange"] = async ({
    fileList: newFileList,
  }) => {
    newFileList.map(async (item) => {
      if (!item.url && !item.preview) {
        item.preview = await getBase64(item.originFileObj as FileType);
      }

      setFileList(newFileList);

      if (item.type?.split("/")[0] === "audio") {
        setPreviewAudio(item);
      } else {
        item.preview &&
          !previewImage.includes(item.preview) &&
          setPreviewImage((prev) => {
            return item.preview && !prev.includes(item.preview)
              ? [...prev, item.url || (item.preview as string)]
              : [...prev];
          });
      }
    });
  };

  return (
    <Flex vertical gap="4px">
      <Flex gap="8px">
        <Typography.Text>{label}</Typography.Text>

        {secondaryLabel && (
          <Typography.Paragraph type="secondary" style={{ margin: 0 }}>
            {secondaryLabel}
          </Typography.Paragraph>
        )}
      </Flex>

      <Flex gap="8px" style={{ width: "fit-content" }}>
        {!previewImage ||
          (previewImage.length < maxFileLength && !previewAudio && (
            <Controller
              {...props}
              render={({ field }) => {
                if (field.value) {
                  handleGetPreview({
                    fileList: field.value?.fileList,
                    file: field.value?.file,
                  });
                }

                return (
                  <UploadComponent
                    fileList={field.value?.fileList || []}
                    onChange={field.onChange}
                    accept={accept}
                    listType={listType}
                    beforeUpload={() => {
                      return false;
                    }}
                    showUploadList={false}
                    maxCount={maxFileLength}
                  >
                    {previewImage.length < maxFileLength && (
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
                );
              }}
            />
          ))}

        {previewImage && canClear && (
          <Flex gap="8px">
            {previewImage.map((item) => (
              <Image
                src={item}
                width={width}
                height={height}
                preview={{
                  mask: (
                    <Button
                      icon={<DeleteFilled />}
                      type="text"
                      style={{ color: "white" }}
                      onClick={(event) => {
                        event.stopPropagation();

                        setPreviewImage(
                          previewImage.filter((it) => item !== it),
                        );
                        reset &&
                          reset(
                            fileList?.find((it) => it?.preview === item)?.uid,
                          );
                      }}
                    >
                      {t("glossary:actions.deleteButton")}
                    </Button>
                  ),
                }}
              />
            ))}
          </Flex>
        )}

        {previewImage && !canClear && (
          <Flex gap="8px">
            {previewImage.map((item) => (
              <Image src={item} width={width} height={height} />
            ))}
          </Flex>
        )}

        {previewAudio && (
          <Flex vertical>
            <Typography.Text>{previewAudio.name}</Typography.Text>
            <Button
              icon={<DeleteFilled />}
              type="text"
              onClick={(event) => {
                event.stopPropagation();
                setPreviewAudio(undefined);
                reset &&
                  reset(
                    fileList?.find((it) => it?.name === previewAudio?.name)
                      ?.uid,
                  );
              }}
            >
              {t("glossary:actions.deleteButton")}
            </Button>
          </Flex>
        )}
      </Flex>
    </Flex>
  );
};
