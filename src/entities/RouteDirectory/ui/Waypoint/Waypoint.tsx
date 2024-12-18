import {
  ArrowDownOutlined,
  ArrowUpOutlined,
  DeleteFilled,
  DownOutlined,
  UpOutlined,
  WarningTwoTone,
} from "@ant-design/icons";
import { Button, Divider, Flex, Popconfirm, Typography } from "antd";
import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";

import { Material } from "@/entities/RouteDirectory";
import { WaypointProps } from "@/entities/RouteDirectory/model/types";
import { Input } from "@/shared/ui/Input";
import { Upload } from "@/shared/ui/Upload";

export const Waypoint = ({
  waypoint,
  index,
  formState,
  control,
  remove,
  watch,
  setValue,
  move,
  length,
  isAllClosed,
}: WaypointProps) => {
  const { t } = useTranslation(["p_createRoute", "glossary"]);

  const [isOpen, setIsOpen] = useState(true);

  const waypointName = watch(`waypoint.${index}.name`);
  const image = watch(`waypoint.${index}.waypointImage`);
  const imagePreview = watch(`waypoint.${index}.waypointImagePreview`);
  const audio = watch(`waypoint.${index}.audio`);
  const audioPreview = watch(`waypoint.${index}.audioPreview`);

  useEffect(() => {
    setIsOpen(!isAllClosed);
  }, [setIsOpen, isAllClosed]);

  return (
    <Flex
      vertical
      gap="16px"
      key={waypoint?.id}
      style={{
        padding: "24px",
        boxShadow: "0px 6px 16px 0px #00000014",
        borderRadius: "8px",
      }}
    >
      <Flex justify="space-between">
        <Flex align="center" gap="12px">
          <Button
            icon={isOpen ? <UpOutlined /> : <DownOutlined />}
            type="text"
            onClick={() => {
              setIsOpen(!isOpen);
            }}
          />
          <Typography.Title level={5}>
            {t("field.waypoint.title", {
              index: index + 1,
              name: waypointName,
            })}
          </Typography.Title>
        </Flex>

        <Flex>
          <Divider type="vertical" style={{ height: "100%" }} />

          <Button
            icon={<ArrowUpOutlined />}
            type="text"
            disabled={index === 0}
            onClick={() => {
              setValue(`waypoint.${index}.order`, index - 1);
              setValue(`waypoint.${index - 1}.order`, index);
              move(index, index - 1);
            }}
          />
          <Button
            icon={<ArrowDownOutlined />}
            type="text"
            disabled={index === length - 1}
            onClick={() => {
              setValue(`waypoint.${index}.order`, index + 1);
              setValue(`waypoint.${index + 1}.order`, index);
              move(index, index + 1);
            }}
          />

          <Divider type="vertical" style={{ height: "100%" }} />

          <Popconfirm
            title={t("field.waypoint.field.deleteWaypointPopconfirm.title")}
            description={t(
              "field.waypoint.field.deleteWaypointPopconfirm.description",
            )}
            okText={t("field.waypoint.field.deleteWaypointPopconfirm.okText")}
            cancelText={t(
              "field.waypoint.field.deleteWaypointPopconfirm.cancelText",
            )}
            okButtonProps={{ danger: true }}
            icon={<WarningTwoTone twoToneColor="#F5222D" />}
            onConfirm={() => remove(index)}
          >
            <Button icon={<DeleteFilled />} danger type="text" />
          </Popconfirm>
        </Flex>
      </Flex>

      {isOpen && (
        <Flex vertical gap="12px">
          <Input.Controller
            name={`waypoint.${index}.name`}
            control={control}
            label={t("field.waypoint.field.nameLabel")}
            placeholder={t("field.waypoint.field.namePlaceholder")}
            rules={{ required: true }}
            isError={formState.errors.waypoint?.[index]?.name?.type}
          />

          <Flex justify="start" gap="8px">
            <Upload.Controller
              control={control}
              name={`waypoint.${index}.waypointImage`}
              label={t("field.waypoint.field.photoLabel")}
              secondaryLabel={t("field.filesSecondaryLabel")}
              width={100}
              height={100}
              canClear
              maxFileLength={5}
              uri={imagePreview?.map((item) => item.uri)}
              reset={(value) => {
                image &&
                  setValue(`waypoint.${index}.waypointImage`, {
                    file: image.file,
                    fileList: image.fileList.filter(
                      (item) => item.uid !== value?.uid,
                    ),
                  });

                imagePreview &&
                  setValue(
                    `waypoint.${index}.waypointImagePreview`,
                    imagePreview?.filter(
                      (item) => item.uri !== value?.uriPreview,
                    ),
                  );
              }}
              rules={{ required: true }}
              isError={formState.errors.waypoint?.[index]?.waypointImage?.type}
            />

            <Upload.Controller
              control={control}
              name={`waypoint.${index}.audio`}
              label={t("field.waypoint.field.audioLabel")}
              accept="audio/*"
              audio={audioPreview}
              canClear
              reset={(value) => {
                audio &&
                  setValue(`waypoint.${index}.audio`, {
                    file: audio.file,
                    fileList: audio.fileList.filter(
                      (item) => item.uid !== value?.uid,
                    ),
                  });
              }}
              rules={{ required: true }}
              isError={formState.errors.waypoint?.[index]?.audio?.type}
            />
          </Flex>

          <Input.TextArea.Controller
            name={`waypoint.${index}.description`}
            control={control}
            label={t("field.waypoint.field.descriptionLabel")}
            placeholder={t("field.waypoint.field.descriptionPlaceholder")}
            rules={{ required: true }}
            isError={formState.errors.waypoint?.[index]?.description?.type}
          />

          <Flex gap="32px">
            <Input.Controller
              name={`waypoint.${index}.latitude`}
              control={control}
              label={t("field.waypoint.field.latitudeLabel")}
              placeholder={t("field.waypoint.field.latitudePlaceholder")}
              rules={{ required: true }}
              isError={formState.errors.waypoint?.[index]?.latitude?.type}
            />

            <Input.Controller
              name={`waypoint.${index}.longitude`}
              control={control}
              label={t("field.waypoint.field.longitudeLabel")}
              placeholder={t("field.waypoint.field.longitudePlaceholder")}
              rules={{ required: true }}
              isError={formState.errors.waypoint?.[index]?.longitude?.type}
            />
          </Flex>

          <Divider style={{ margin: 0 }} />

          <Material waypointIndex={index} />
        </Flex>
      )}
    </Flex>
  );
};
